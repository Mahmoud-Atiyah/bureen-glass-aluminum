type SendEmailArgs = {
  to: string;
  from: string;
  subject: string;
  text: string;
};

export async function sendViaResend(args: SendEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return { ok: true as const, skipped: true as const };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: args.to,
      from: args.from,
      subject: args.subject,
      text: args.text,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    return { ok: false as const, error: `Resend error: ${res.status} ${body}` };
  }

  return { ok: true as const, skipped: false as const };
}

