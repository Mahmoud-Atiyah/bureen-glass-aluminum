import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-zinc-700 transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,var(--accent),transparent)] after:transition group-hover:after:scale-x-100 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={`tel:${site.phone}`}
              className="hidden rounded-full glass-panel glass-sheen px-4 py-2 text-sm font-semibold text-zinc-950 md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              aria-label={`Call ${site.phone}`}
            >
              Call Now
            </Link>
            <Link
              href="/contact#quote"
              className="inline-flex rounded-full bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] px-4 py-2 text-sm font-semibold text-black shadow-sm shadow-accent/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
