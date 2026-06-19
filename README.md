Production-grade marketing site for **Bureen Glass and Aluminum** (Next.js App Router + TypeScript + Tailwind).

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quote Form (Email)

The quote form uses a Server Action (`src/actions/requestQuote.ts`). After the honeypot,
rate-limit, and validation checks pass, it delivers the lead by email via
[FormSubmit.co](https://formsubmit.co) — a free forwarder that needs no API key. The POST runs
server-side, so the destination address is never exposed in the browser.

Create a `.env.local` file:

```bash
# Where quote requests are delivered (defaults to omran6143@gmail.com)
QUOTE_TO_EMAIL=omran6143@gmail.com

# Site origin for canonical URLs, sitemap/robots, and JSON-LD (defaults to https://bureenglass.com)
NEXT_PUBLIC_SITE_URL=https://bureenglass.com
```

**One-time activation:** the first submission to a new address triggers a FormSubmit
confirmation email to that inbox. Click the link once; afterwards every submission is delivered
automatically.

## Content Editing

Update the site content in `src/content/site.ts` (services, gallery, FAQs, testimonials, videos, service areas).
