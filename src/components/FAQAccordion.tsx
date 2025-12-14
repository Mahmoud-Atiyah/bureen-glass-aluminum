import { Container } from "@/components/Container";

export function FAQAccordion({
  title = "Frequently Asked Questions",
  items,
}: {
  title?: string;
  items: ReadonlyArray<{ q: string; a: string }>;
}) {
  return (
    <section className="py-14">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
        </div>
        <div className="mt-6 grid gap-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl glass-panel glass-sheen px-5 py-4 transition open:shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-950 outline-none">
                <span className="inline-flex items-center justify-between gap-3">
                  {item.q}
                  <span className="ml-auto text-zinc-400 group-open:rotate-45 transition">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
