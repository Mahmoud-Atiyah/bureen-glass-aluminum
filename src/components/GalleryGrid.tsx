"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryItem, GalleryCategory } from "@/content/site";
import { Container } from "@/components/Container";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const categories: (GalleryCategory | "All")[] = ["All", "Residential", "Commercial", "Custom"];

export function GalleryGrid({
  items,
  title = "Featured Projects",
}: {
  items: ReadonlyArray<GalleryItem>;
  title?: string;
}) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((i) => i.category === active);
  }, [active, items]);

  const openItem = items.find((i) => i.id === openId) ?? null;

  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={[
                  "rounded-lg px-4 py-2 text-sm font-semibold border transition glass-sheen",
                  c === active
                    ? "bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] text-black border-black/10 shadow-sm shadow-accent/20"
                    : "glass-panel text-zinc-700 hover:-translate-y-0.5",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(item.id)}
              className="group relative overflow-hidden rounded-2xl border border-white/25 bg-white/40 text-left shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={720}
                height={540}
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
              <div className="relative p-5">
                <p className="text-sm font-semibold text-zinc-950 group-hover:underline">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.category}</p>
              </div>
            </button>
          ))}
        </div>

        {openItem ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={openItem.title}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/55 p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setOpenId(null)}
          >
            <div
              className="pop-in max-h-[85vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/25 bg-white/65 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-zinc-950">{openItem.title}</p>
                  <p className="mt-1 text-sm text-zinc-600">{openItem.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  className="rounded-lg glass-panel glass-sheen px-3 py-1.5 text-sm font-semibold text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  Close
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {openItem.images.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={720}
                    height={540}
                    className="h-auto w-full rounded-2xl border border-white/25 object-cover"
                  />
                ))}
              </div>

              {openItem.beforeAfter ? (
                <div className="mt-6">
                  <BeforeAfterSlider beforeSrc={openItem.beforeAfter.before} afterSrc={openItem.beforeAfter.after} />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
