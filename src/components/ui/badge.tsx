import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur",
        className,
      )}
    />
  );
}

