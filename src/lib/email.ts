type SendQuoteArgs = {
  to: string;
  subject: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };
};

/**
 * Delivers a quote request by email via FormSubmit.co — a free forwarder that
 * needs no API key. The POST runs server-side (from the requestQuote action), so
 * the destination address never reaches the browser.
 *
 * One-time setup: the FIRST submission to a new address makes FormSubmit email
 * that address an activation link. Click it once; afterwards every submission is
 * delivered straight to the inbox.
 */
export async function sendQuoteEmail(args: SendQuoteArgs) {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(args.to)}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: args.fields.name,
      email: args.fields.email || "(not provided)",
      phone: args.fields.phone || "(not provided)",
      service: args.fields.service,
      message: args.fields.message,
      // FormSubmit control fields:
      _subject: args.subject,
      _template: "table",
      _captcha: "false", // we run our own honeypot + rate limit upstream
      _replyto: args.fields.email || undefined,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    return { ok: false as const, error: `FormSubmit error: ${res.status} ${body}` };
  }

  return { ok: true as const };
}
