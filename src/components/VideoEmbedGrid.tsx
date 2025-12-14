"use client";

import type { VideoItem } from "@/content/site";
import { Container } from "@/components/Container";

function getEmbed(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
  } catch {
    // ignore
  }
  return "";
}

export function VideoEmbedGrid({ items }: { items: ReadonlyArray<VideoItem> }) {
  return (
    <section className="py-14">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Videos</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((v) => {
            const embed = getEmbed(v.url);
            return (
              <div key={v.url} className="rounded-2xl glass-panel glass-sheen p-4">
                <p className="text-sm font-semibold text-zinc-950">{v.title}</p>
                {embed ? (
                  <iframe
                    className="mt-3 aspect-video w-full rounded-xl border border-white/25 bg-white/30"
                    src={embed}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <p className="mt-3 text-sm text-zinc-600">Invalid video URL.</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
