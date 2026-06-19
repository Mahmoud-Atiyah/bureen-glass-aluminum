import { cn } from "@/lib/cn";

export function StepsTimeline({
  steps,
  className,
}: {
  steps: ReadonlyArray<string>;
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {steps.map((step, idx) => (
        <li key={step} className="relative flex items-center gap-3 overflow-hidden rounded-2xl glass-panel glass-sheen p-4">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--aluminum),transparent)]" />
            <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,transparent,var(--aluminum),transparent)]" />
          </div>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] text-sm font-bold text-black"
            aria-hidden="true"
          >
            {idx + 1}
          </span>
          <p className="font-semibold text-zinc-950">{step}</p>
        </li>
      ))}
    </ol>
  );
}

