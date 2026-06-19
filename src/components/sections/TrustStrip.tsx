import Link from "next/link";
import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { site } from "@/content/site";

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-zinc-950" : "text-zinc-300"} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="py-8">
      <Container>
        <div className="rounded-3xl glass-panel glass-sheen px-5 py-4">
          <div className="grid gap-4 md:grid-cols-3 md:items-center">
            <div className="flex items-center gap-3">
              <Stars rating={5} />
              <div className="text-sm">
                <p className="font-semibold text-zinc-950">Quality you can see</p>
                <p className="text-zinc-600">Houston homes &amp; businesses</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-center">
              <Badge>Residential</Badge>
              <Badge>Commercial</Badge>
              <Badge>Custom</Badge>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              {[
                "Same-day estimates",
                "Clean, precise installs",
                "Code-conscious workmanship",
              ].map((t) => (
                <span key={t} className="text-xs font-semibold text-zinc-700">
                  {t}
                </span>
              ))}
              <Link
                href="/contact#quote"
                className="ml-auto inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 underline decoration-black/15 underline-offset-4 hover:decoration-black/30"
              >
                Request a quote <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 underline decoration-black/15 underline-offset-4 hover:decoration-black/30"
              >
                Call {site.phone} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

