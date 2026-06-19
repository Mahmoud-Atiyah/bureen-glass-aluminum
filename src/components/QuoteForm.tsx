"use client";

import { useActionState } from "react";
import { requestQuote, type QuoteFormState } from "@/actions/requestQuote";
import { site } from "@/content/site";

const initial: QuoteFormState = { ok: false, message: "" };

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-semibold text-zinc-950">
        {label} {required ? <span className="text-zinc-400">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={[
          "h-11 rounded-xl border border-white/25 bg-white/55 px-3 text-zinc-950 shadow-sm backdrop-blur outline-none transition",
          error ? "border-red-300 focus:ring-red-200" : "border-black/10 focus:ring-accent/40",
          "focus:ring-4",
        ].join(" ")}
        aria-invalid={Boolean(error)}
      />
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

export function QuoteForm({ compact }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(requestQuote, initial);

  return (
    <form action={action} className="grid gap-4">
      <input
        tabIndex={-1}
        autoComplete="off"
        name="company"
        className="hidden"
        aria-hidden="true"
      />

      <div className={compact ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Name" name="name" placeholder="Your name" error={state.fieldErrors?.name} required />
        <Field label="Phone" name="phone" placeholder={site.phone} error={state.fieldErrors?.phone} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="you@example.com" error={state.fieldErrors?.email} />
        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-zinc-950">
            Service <span className="text-zinc-400">*</span>
          </span>
          <select
            name="service"
            className={[
              "h-11 rounded-xl border border-white/25 bg-white/55 px-3 text-zinc-950 shadow-sm backdrop-blur outline-none transition focus:ring-4",
              state.fieldErrors?.service ? "border-red-300 focus:ring-red-200" : "border-black/10 focus:ring-accent/40",
            ].join(" ")}
            defaultValue=""
            aria-invalid={Boolean(state.fieldErrors?.service)}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {site.services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {state.fieldErrors?.service ? (
            <span className="text-xs font-medium text-red-600">{state.fieldErrors.service}</span>
          ) : null}
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-semibold text-zinc-950">
          Project details <span className="text-zinc-400">*</span>
        </span>
        <textarea
          name="message"
          rows={compact ? 4 : 6}
          placeholder="Tell us what you need (sizes, location, timeline, photos if available)."
          className={[
            "rounded-xl border border-white/25 bg-white/55 px-3 py-3 text-zinc-950 shadow-sm backdrop-blur outline-none transition focus:ring-4",
            state.fieldErrors?.message ? "border-red-300 focus:ring-red-200" : "border-black/10 focus:ring-accent/40",
          ].join(" ")}
          aria-invalid={Boolean(state.fieldErrors?.message)}
        />
        {state.fieldErrors?.message ? (
          <span className="text-xs font-medium text-red-600">{state.fieldErrors.message}</span>
        ) : null}
      </label>

      <button
        type="submit"
        disabled={pending}
        className="glass-sheen inline-flex h-11 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] px-6 text-sm font-semibold text-black shadow-sm shadow-accent/20 transition hover:brightness-95 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        {pending ? "Sending…" : "Request a Free Quote"}
      </button>

      {state.message ? (
        <p
          className={[
            "text-sm",
            state.ok ? "text-zinc-700" : "text-red-600",
          ].join(" ")}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
