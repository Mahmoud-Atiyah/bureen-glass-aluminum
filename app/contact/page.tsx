import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description: "Contact Bureen Glass and Aluminum for a free quote: phone, email, service areas, and hours.",
};

export default function ContactPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">Contact</h1>
            <p className="mt-3 max-w-xl text-zinc-600">
              Call, email, or request a quote. We serve Houston and surrounding areas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl glass-panel glass-sheen p-5">
                <p className="text-sm font-semibold text-zinc-950">Phone</p>
                <a className="mt-2 block text-sm font-medium text-zinc-700 hover:underline" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </div>
              <div className="rounded-2xl glass-panel glass-sheen p-5">
                <p className="text-sm font-semibold text-zinc-950">Email</p>
                <a className="mt-2 block text-sm font-medium text-zinc-700 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-3xl glass-panel glass-sheen p-6">
              <p className="text-sm font-semibold text-zinc-950">Business hours</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {site.hours.map((h) => (
                  <li key={h.label} className="flex items-center justify-between gap-4">
                    <span>{h.label}</span>
                    <span className="font-medium text-zinc-700">{h.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-zinc-500">Call for emergency service availability.</p>
            </div>

            <div className="mt-6 rounded-3xl glass-panel glass-sheen p-6">
              <p className="text-sm font-semibold text-zinc-950">Service area</p>
              <p className="mt-2 text-sm text-zinc-600">Serving Houston and surrounding areas.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.serviceAreas.map((a) => (
                  <span key={a} className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl glass-panel glass-sheen p-6">
              <p className="text-sm font-semibold text-zinc-950">Map</p>
              <p className="mt-2 text-sm text-zinc-600">Placeholder map (no API key required).</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
                <Image src="/images/map-placeholder.svg" alt="Service area map placeholder" width={960} height={540} className="h-auto w-full" />
              </div>
            </div>
          </div>

          <div id="quote" className="rounded-3xl glass-panel-strong glass-sheen p-6 lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-zinc-600">Request a quote</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">Free estimate</h2>
            <p className="mt-3 text-sm text-zinc-600">
              Share the details and we’ll follow up quickly. Honeypot and basic rate limiting are enabled.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
