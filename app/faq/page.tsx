import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  alternates: { canonical: "/faq" },
  description: "Answers to common questions about timelines, measurements, materials, and emergency repairs.",
};

export default function FAQPage() {
  return (
    <div>
      <FAQAccordion items={site.faqs} />
      <CTASection
        title="Still have questions?"
        body="Send a quick message and we’ll confirm timelines, materials, and the best option for your space."
      />
    </div>
  );
}

