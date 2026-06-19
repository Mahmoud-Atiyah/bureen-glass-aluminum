import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/content/site";

export function CTASection({
  title,
  body,
  primaryHref = "/contact#quote",
  primaryLabel = "Request a Free Quote",
}: {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-zinc-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(53,215,217,0.20),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_40%,rgba(42,140,255,0.14),transparent_55%)]" />
      <Container>
        <div className="relative flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="rounded-3xl glass-panel-strong glass-sheen p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
            <p className="mt-2 max-w-2xl text-zinc-600">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] px-6 py-3 text-sm font-semibold text-black shadow-sm shadow-accent/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {primaryLabel}
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center rounded-lg glass-panel glass-sheen px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
