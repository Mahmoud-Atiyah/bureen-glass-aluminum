"use client";

import Image from "next/image";
import { useId, useState } from "react";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = "Before and after comparison",
}: {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
}) {
  const id = useId();
  const [pct, setPct] = useState(50);

  return (
    <div className="rounded-2xl glass-panel glass-sheen p-3">
      <div className="relative overflow-hidden rounded-xl border border-white/25">
        <Image src={afterSrc} alt={alt} width={960} height={640} className="h-auto w-full" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pct}%` }}>
          <Image src={beforeSrc} alt={alt} width={960} height={640} className="h-auto w-full" />
        </div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `calc(${pct}% - 1px)` }}>
          <div className="h-full w-0.5 bg-accent" />
        </div>
      </div>
      <label htmlFor={id} className="mt-3 block text-xs font-semibold text-zinc-700">
        Before / After
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="mt-2 w-full accent-[color:var(--accent)]"
        aria-label="Comparison slider"
      />
    </div>
  );
}
