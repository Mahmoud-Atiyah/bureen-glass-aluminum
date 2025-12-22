"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:opacity-60 disabled:pointer-events-none",
        size === "md" ? "h-11 rounded-full px-6 text-sm" : "h-9 rounded-full px-4 text-sm",
        variant === "primary" &&
          "glass-sheen bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent-2)_60%,var(--accent)))] text-black shadow-sm shadow-accent/20 hover:brightness-95",
        variant === "secondary" &&
          "glass-panel glass-sheen text-zinc-950 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)]",
        variant === "ghost" && "text-zinc-700 hover:text-zinc-950",
        className,
      )}
    />
  );
}

