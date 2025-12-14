import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
  description: "Explore glass and aluminum services: mirrors, storefronts, windows, shower doors, tabletops, and shelves.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="py-14">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">Services</h1>
          <p className="mt-3 max-w-3xl text-zinc-600">
            Residential and commercial glass solutions with clean lines, quality materials, and careful installation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which service you need?"
        body="Describe the project and we’ll recommend the right glass type, thickness, and hardware."
      />
    </div>
  );
}

