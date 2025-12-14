import type { Metadata } from "next";
import { VideoEmbedGrid } from "@/components/VideoEmbedGrid";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Videos",
  alternates: { canonical: "/videos" },
  description: "Short videos showcasing glass and aluminum work, installs, and tips.",
};

export default function VideosPage() {
  return (
    <div>
      <VideoEmbedGrid items={site.videos} />
      <CTASection
        title="Want to see more?"
        body="Ask about recent projects—storefronts, showers, mirrors, and custom work."
      />
    </div>
  );
}

