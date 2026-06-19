"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delayMs = 0,
  className,
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Start "out" on both server and first client render so hydration matches.
  // We decide the real state in useEffect (after mount), where `window` exists.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;

    const el = ref.current;
    if (!el) return;

    // Reduced-motion users skip the scroll animation and see content immediately.
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduced) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  return (
    <div
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      data-reveal={inView ? "in" : "out"}
      style={{ ["--reveal-delay" as never]: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
