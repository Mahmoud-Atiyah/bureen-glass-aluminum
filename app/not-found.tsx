import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-xl rounded-3xl glass-panel-strong glass-sheen p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">Page not found</h1>
          <p className="mt-3 text-zinc-600">The page you’re looking for doesn’t exist.</p>
          <div className="mt-6">
            <Link
              href="/"
              className="glass-sheen inline-flex rounded-lg bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] px-6 py-3 text-sm font-semibold text-black shadow-sm shadow-accent/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Back to home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
