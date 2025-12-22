import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
  description: "Explore glass and aluminum services: mirrors, storefronts, windows, shower doors, tabletops, and shelves.",
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesGrid
        title="Services"
        subtitle="Residential and commercial glass solutions with clean lines, quality materials, and careful installation."
        items={site.services}
        showAllLink={false}
      />

      <CTASection
        title="Not sure which service you need?"
        body="Describe the project and we’ll recommend the right glass type, thickness, and hardware."
      />
    </div>
  );
}
