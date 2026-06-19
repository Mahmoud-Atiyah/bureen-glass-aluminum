import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description: "Learn about Bureen Glass and Aluminum—our work style, values, and experience.",
};

export default function AboutPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">About</h1>
            <p className="mt-3 max-w-3xl text-zinc-600">
              {site.legalName} delivers modern glass and aluminum work with a clean, architectural finish—built for both
              homes and businesses across Houston.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/25 bg-white/45 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur">
            <Image
              src="/media/building_glass.jpg"
              alt="Modern glass and aluminum building facade"
              width={960}
              height={720}
              className="h-64 w-full object-cover sm:h-72"
              priority
            />
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl glass-panel glass-sheen p-5">
            <p className="text-sm font-semibold text-zinc-950">What we do</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Glass and aluminum services: storefronts, doors, windows, shower enclosures, mirrors, table tops, and custom
              work.
            </p>
          </div>
          <div className="rounded-2xl glass-panel glass-sheen p-5">
            <p className="text-sm font-semibold text-zinc-950">Operator</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">{site.operator}</p>
          </div>
          <div className="rounded-2xl glass-panel glass-sheen p-5">
            <p className="text-sm font-semibold text-zinc-950">Values</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600">
              {["Craftsmanship", "Safety", "Clean finish", "Clear communication"].map((v) => (
                <li key={v}>• {v}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Experience</h2>
          <p className="mt-2 text-zinc-600">Years of hands-on experience across residential and commercial projects.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Storefront installs",
                body: "New glass, repairs, door alignment, closers, and entry upgrades for busy locations.",
              },
              {
                title: "Shower enclosures",
                body: "Frameless and semi-frameless showers with precise measurement and clean silicone lines.",
              },
              {
                title: "Custom mirrors",
                body: "Vanity mirrors, gym/studio mirrors, and decorative designs with cutouts and polished edges.",
              },
              {
                title: "Window replacements",
                body: "Cracked panes and foggy insulated units replaced with accurate sizing and clean install.",
              },
              {
                title: "Tabletops & shelves",
                body: "Custom-cut glass with safe corners and polished edges to protect surfaces and upgrade displays.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl glass-panel glass-sheen p-5">
                <p className="text-sm font-semibold text-zinc-950">{c.title}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{c.body}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <CTASection
        title="Have a project in mind?"
        body="Tell us what you need and we’ll help you choose the right glass and hardware for a clean, durable result."
      />
    </div>
  );
}
