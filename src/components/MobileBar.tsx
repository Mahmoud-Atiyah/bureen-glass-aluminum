import Link from "next/link";
import { site } from "@/content/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/55 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
        <a
          href={`tel:${site.phone}`}
          className="glass-panel glass-sheen flex-1 rounded-full py-3 text-center text-sm font-semibold text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          aria-label={`Call ${site.phone}`}
        >
          Call
        </a>
        <Link
          href="/contact#quote"
          className="glass-sheen flex-1 rounded-full bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] py-3 text-center text-sm font-semibold text-black shadow-sm shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
