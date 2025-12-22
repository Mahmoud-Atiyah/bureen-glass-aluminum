import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      <span className="relative grid h-20 w-20 place-items-center rounded-full glass-panel glass-sheen">
        <Image src="/brand/logo.png" alt="Bureen Glass and Aluminum" width={70} height={70} priority />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-semibold tracking-tight text-zinc-950">
          Bureen <span className="text-zinc-500">Glass</span>
        </span>
        <span className="block text-xs font-semibold text-zinc-500">Glass & Aluminum</span>
      </span>
    </Link>
  );
}
