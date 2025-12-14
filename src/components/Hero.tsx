import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageSrc?: string;
};

export function Hero({ title, subtitle, primaryCta, secondaryCta, imageSrc }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc ?? "/media/hero.jpg"}
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(53,215,217,0.28),_transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white" />
      </div>

      <Container>
        <div className="relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="rounded-3xl glass-panel-strong glass-sheen p-7 md:p-9">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold text-zinc-700">
                Same-day estimates <span className="text-zinc-300">•</span> Quality workmanship
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-zinc-600">{subtitle}</p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] px-6 py-3 text-sm font-semibold text-black shadow-sm shadow-accent/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  {primaryCta.label}
                </Link>
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full glass-panel glass-sheen px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[linear-gradient(135deg,_rgba(53,215,217,0.22),_transparent_45%,_rgba(0,0,0,0.04))]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/40 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8),transparent_55%)]" />
              <Image
                src={imageSrc ?? "/media/hero.jpg"}
                alt="Modern glass and aluminum work"
                width={960}
                height={720}
                priority
                className="h-[360px] w-full object-cover md:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.55)_46%,transparent_62%)] opacity-60" />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden rounded-3xl border border-white/25 bg-white/45 p-4 backdrop-blur-xl md:block">
              <p className="text-xs font-semibold text-zinc-700">Clean. Precise. Modern.</p>
              <p className="mt-1 text-xs text-zinc-600">Glass + aluminum with a tidy finish.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

