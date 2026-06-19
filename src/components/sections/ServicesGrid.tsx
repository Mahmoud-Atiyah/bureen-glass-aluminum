"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import type { Service, ServiceSegment } from "@/content/site";

const segments: Array<ServiceSegment | "All"> = ["All", "Residential", "Commercial", "Custom"];

export function ServicesGrid({
  title = "Services",
  subtitle = "Mirrors, storefronts, windows, shower enclosures, and custom glass—done right.",
  items,
  showAllLink = true,
}: {
  title?: string;
  subtitle?: string;
  items: ReadonlyArray<Service>;
  showAllLink?: boolean;
}) {
  const [active, setActive] = useState<(typeof segments)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((s) => s.segment.includes(active));
  }, [active, items]);

  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
            <p className="mt-2 text-zinc-600">{subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap gap-2">
              {segments.map((seg) => (
                <button
                  key={seg}
                  type="button"
                  onClick={() => setActive(seg)}
                  className={[
                    "rounded-lg px-4 py-2 text-sm font-semibold border transition glass-sheen",
                    seg === active
                      ? "bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] text-black border-black/10 shadow-sm shadow-accent/20"
                      : "glass-panel text-zinc-700 hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  {seg}
                </button>
              ))}
            </div>
            {showAllLink ? (
              <Link
                href="/services"
                className="hidden rounded-lg glass-panel glass-sheen px-5 py-2.5 text-sm font-semibold text-zinc-950 md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                View all
              </Link>
            ) : null}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
