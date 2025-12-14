import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: { canonical: "/gallery" },
  description: "Browse recent glass and aluminum projects: showers, storefronts, mirrors, and custom work.",
};

export default function GalleryPage() {
  return (
    <div>
      <GalleryGrid title="Project Gallery" items={site.gallery} />
      <CTASection
        title="Want something similar?"
        body="Share a photo or inspiration link and we’ll help you design the right glass solution."
      />
    </div>
  );
}

