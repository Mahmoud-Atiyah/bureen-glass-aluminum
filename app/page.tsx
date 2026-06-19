import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/Container";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

const homeFaqs = site.faqs.slice(0, 4);

export default function Home() {
  return (
    <div>
      <JsonLd data={faqPageSchema(homeFaqs)} />
      <HeroSection
        title="Professional Glass & Aluminum Solutions"
        subtitle="Same-day estimates, clean installations, and architectural finishes for residential and commercial projects across Houston."
        primaryCta={{ href: "/contact#quote", label: "Request a Free Quote" }}
        secondaryCta={{ href: `tel:${site.phone}`, label: `Call ${site.phone}` }}
        imageSrc="/media/hero.jpg"
      />

      <TrustStrip />
      <ServicesGrid items={site.services} />

      <section className="relative py-14 bg-zinc-50 border-y border-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(53,215,217,0.16),transparent_55%)]" />
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Why Bureen</h2>
              </Reveal>
              <Reveal delayMs={80}>
                <p className="mt-3 text-zinc-600">
                  Fast response, custom work, and a clean finish—built for both homes and businesses.
                </p>
              </Reveal>
              <ul className="mt-6 grid gap-3 text-sm text-zinc-700">
                {[
                  "Fast scheduling and responsive communication",
                  "Custom fabrication and precise measurement",
                  "Residential & commercial experience",
                  "Quality materials, safe job sites, tidy cleanup",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Reveal delayMs={120}>
              <div className="rounded-3xl glass-panel-strong glass-sheen p-6">
                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">Quick contact</p>
                    <p className="mt-2 text-sm text-zinc-600">
                      Call now or request a quote and we’ll follow up quickly with next steps.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={`tel:${site.phone}`}
                        className="glass-panel glass-sheen inline-flex flex-1 items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                      >
                        Call {site.phone}
                      </a>
                      <Link
                        href="/contact#quote"
                        className="glass-sheen inline-flex flex-1 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] px-6 py-3 text-sm font-semibold text-black shadow-sm shadow-accent/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                      >
                        Free Quote
                      </Link>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/45 shadow-sm backdrop-blur">
                    <Image
                      src="/media/shower.jpg"
                      alt="Frameless shower glass"
                      width={720}
                      height={540}
                      className="h-44 w-full object-cover sm:h-48"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.75),transparent_60%)]" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <GalleryPreview title="Featured Projects" items={site.gallery.slice(0, 6)} />
      <TestimonialsSection title="What customers say" items={site.testimonials.slice(0, 6)} />
      <FAQSection title="FAQ" items={homeFaqs} />

      <CTASection
        title="Ready to start your project?"
        body="Get a same-day estimate when scheduling allows. We’ll measure, fabricate, install, and leave a clean finish."
      />
    </div>
  );
}
