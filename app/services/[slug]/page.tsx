import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { site } from "@/content/site";

type PageProps = { params: { slug: string } };

function getService(slug: string) {
  return site.services.find((s) => s.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.title,
      description: s.short,
      url: `/services/${s.slug}`,
      images: [{ url: s.heroImage, width: 1200, height: 630, alt: s.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;
  const s = getService(slug);
  if (!s) notFound();

  const related = site.services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <div>
      <section className="py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold text-zinc-600">Service</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">{s.title}</h1>
              <p className="mt-4 text-zinc-600">{s.overview}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-sm shadow-accent/20 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm hover:border-black/20 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  Back to services
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/25 bg-white/40 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur">
              <Image src={s.heroImage} alt={s.title} width={960} height={720} className="h-[340px] w-full object-cover md:h-[520px]" priority />
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">When you need it</h2>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                {s.whenYouNeedIt.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight text-zinc-950">Our process</h2>
              <ol className="mt-4 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
                {["Estimate", "Measurement", "Fabrication", "Install", "Cleanup"].map((step, idx) => (
                  <li key={step} className="rounded-2xl glass-panel glass-sheen p-4">
                    <p className="text-xs font-semibold text-zinc-500">Step {idx + 1}</p>
                    <p className="mt-1 font-semibold text-zinc-950">{step}</p>
                  </li>
                ))}
              </ol>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight text-zinc-950">Benefits</h2>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                {s.benefits.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-3xl glass-panel-strong glass-sheen p-6">
              <p className="text-sm font-semibold text-zinc-950">Need a quote?</p>
              <p className="mt-2 text-sm text-zinc-600">
                Tell us what you need. We’ll follow up quickly with next steps and scheduling options.
              </p>
              <Link
                href="/contact#quote"
                className="glass-sheen mt-5 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] px-6 py-3 text-sm font-semibold text-black shadow-sm shadow-accent/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Request a Quote
              </Link>
              <p className="mt-3 text-xs text-zinc-500">Same-day estimates when scheduling allows.</p>
            </aside>
          </div>
        </Container>
      </section>

      <FAQAccordion title={`${s.title} FAQ`} items={s.faqs} />

      <section className="py-14 bg-zinc-50 border-y border-black/5">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Related services</h2>
            <Link
              href="/services"
              className="hidden rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm hover:border-black/20 hover:shadow md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              All services
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Get an estimate"
        body="We’ll help you choose the right glass and hardware, then fabricate and install with a clean finish."
      />
    </div>
  );
}
