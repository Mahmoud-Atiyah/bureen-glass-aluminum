Production-grade marketing site for **Bureen Glass and Aluminum** (Next.js App Router + TypeScript + Tailwind).

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quote Form (Email)

The quote form uses a Server Action (`src/actions/requestQuote.ts`) and can send emails via Resend (no vendor SDK required).

Create a `.env.local` file:

```bash
# Optional: if set, enables sending emails via Resend
RESEND_API_KEY=

# Where quote emails go (defaults to omran6143@gmail.com)
QUOTE_TO_EMAIL=omran6143@gmail.com

# Sender address shown in the email (recommended to use your verified Resend domain)
QUOTE_FROM_EMAIL="Quote Request <quotes@bureen-glass.com>"

# Optional: used for canonical URLs and sitemap/robots host
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

If `RESEND_API_KEY` is not set, the form still validates inputs and returns success, but the email send is skipped.

## Content Editing

Update the site content in `src/content/site.ts` (services, gallery, FAQs, testimonials, videos, service areas).
