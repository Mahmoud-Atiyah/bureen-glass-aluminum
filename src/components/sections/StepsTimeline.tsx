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
        <li key={step} className="relative overflow-hidden rounded-2xl glass-panel glass-sheen p-4">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--aluminum),transparent)]" />
            <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,transparent,var(--aluminum),transparent)]" />
          </div>
          <p className="text-xs font-semibold text-zinc-500">Step {idx + 1}</p>
          <p className="mt-1 font-semibold text-zinc-950">{step}</p>
        </li>
      ))}
    </ol>
  );
}

