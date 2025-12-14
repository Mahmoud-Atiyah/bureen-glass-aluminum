import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl glass-panel glass-sheen p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      <div className="flex items-start gap-4">
        <div className="relative rounded-xl border border-white/30 bg-white/40 p-3 backdrop-blur">
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_60%)] opacity-60" />
          <Image src={service.icon} alt="" width={28} height={28} className="relative" />
        </div>
        <div className="min-w-0">
          <p className="text-base font-semibold text-zinc-950 group-hover:underline">{service.title}</p>
          <p className="mt-1 text-sm text-zinc-600">{service.short}</p>
        </div>
      </div>
    </Link>
  );
}
