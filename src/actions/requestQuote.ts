"use server";

import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendViaResend } from "@/lib/email";
import { site } from "@/content/site";

export type QuoteFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<QuoteField, string>>;
};

type QuoteField = "name" | "email" | "phone" | "service" | "message";

const initialState: QuoteFormState = {
  ok: false,
  message: "",
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validate(fields: Record<QuoteField, string>) {
  const errors: Partial<Record<QuoteField, string>> = {};

  if (fields.name.length < 2) errors.name = "Please enter your name.";

  const emailOk =
    !fields.email ||
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email);
  if (!emailOk) errors.email = "Please enter a valid email.";

  const phoneDigits = fields.phone.replace(/[^\d]/g, "");
  if (!phoneDigits && !fields.email) {
    errors.phone = "Add a phone number or an email.";
  } else if (fields.phone && phoneDigits.length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (fields.service.length < 2) errors.service = "Select a service.";
  if (fields.message.length < 10) errors.message = "Tell us a bit about the project.";

  return errors;
}

export async function requestQuote(_: QuoteFormState | undefined, formData: FormData) {
  const hp = getString(formData, "company"); // honeypot
  if (hp) return { ...initialState, ok: true, message: "Thanks — we’ll be in touch shortly." };

  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";

  const rl = checkRateLimit(`quote:${ip}`);
  if (!rl.allowed) {
    return {
      ok: false,
      message: "Too many requests. Please try again in a few minutes or call us.",
    } satisfies QuoteFormState;
  }

  const fields: Record<QuoteField, string> = {
    name: getString(formData, "name"),
    email: getString(formData, "email"),
    phone: getString(formData, "phone"),
    service: getString(formData, "service"),
    message: getString(formData, "message"),
  };

  const fieldErrors = validate(fields);
  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  const from = process.env.QUOTE_FROM_EMAIL?.trim() || "Quote Request <quotes@bureen-glass.com>";
  const to = process.env.QUOTE_TO_EMAIL?.trim() || site.email;

  const subject = `New quote request — ${fields.service}`;
  const text = [
    `Name: ${fields.name}`,
    `Phone: ${fields.phone || "-"}`,
    `Email: ${fields.email || "-"}`,
    `Service: ${fields.service}`,
    "",
    fields.message,
  ].join("\n");

  const sent = await sendViaResend({ to, from, subject, text });
  if (!sent.ok) {
    return {
      ok: false,
      message: "We couldn’t send your request right now. Please call or try again.",
    } satisfies QuoteFormState;
  }

  return {
    ok: true,
    message: "Thanks — we received your request and will reach out shortly.",
  } satisfies QuoteFormState;
}

