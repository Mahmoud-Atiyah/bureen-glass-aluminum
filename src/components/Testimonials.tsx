import { Container } from "@/components/Container";
import type { Testimonial } from "@/content/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-zinc-950" : "text-zinc-300"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials({
  items,
  title = "Customer Reviews",
}: {
  items: ReadonlyArray<Testimonial>;
  title?: string;
}) {
  return (
    <section className="py-14">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={`${t.name}-${t.body.slice(0, 12)}`}
              className="rounded-2xl glass-panel glass-sheen p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
            >
              <Stars rating={t.rating} />
              <p className="mt-3 text-sm leading-7 text-zinc-600">“{t.body}”</p>
              <p className="mt-4 text-sm font-semibold text-zinc-950">{t.name}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
