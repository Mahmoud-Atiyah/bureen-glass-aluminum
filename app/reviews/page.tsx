import type { Metadata } from "next";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Reviews",
  alternates: { canonical: "/reviews" },
  description: "Read customer testimonials for Bureen Glass and Aluminum services.",
};

export default function ReviewsPage() {
  return (
    <div>
      <Testimonials title="Reviews" items={site.testimonials} />
      <CTASection
        title="Need glass work done quickly?"
        body="Call now or request a quote—we’ll respond fast and keep the process simple."
      />
    </div>
  );
}

