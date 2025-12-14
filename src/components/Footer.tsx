import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(53,215,217,0.14),transparent_55%)]" />
      <Container>
        <div className="relative grid gap-10 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-zinc-950">{site.legalName}</p>
            <p className="mt-2 text-sm text-zinc-600">{site.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="font-medium text-zinc-950 hover:underline" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
              <a className="font-medium text-zinc-950 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-950">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link className="text-zinc-600 hover:text-zinc-950 hover:underline" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-950">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              {site.services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    className="text-zinc-600 hover:text-zinc-950 hover:underline"
                    href={`/services/${s.slug}`}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 border-t border-black/5 py-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:underline" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
