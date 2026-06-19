import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import type { GalleryItem } from "@/content/site";

export function GalleryPreview({
  title = "Featured Work",
  items,
}: {
  title?: string;
  items: ReadonlyArray<GalleryItem>;
}) {
  return (
    <div className="relative">
      <GalleryGrid title={title} items={items} />
      <div className="-mt-6 pb-14 text-center">
        <Link
          href="/gallery"
          className="inline-flex rounded-lg glass-panel glass-sheen px-6 py-3 text-sm font-semibold text-zinc-950 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          View full gallery
        </Link>
      </div>
    </div>
  );
}

