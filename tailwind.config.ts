import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        aluminum: "var(--aluminum)",
        "neutral-50": "var(--neutral-50)",
        "neutral-100": "var(--neutral-100)",
        "neutral-400": "var(--neutral-400)",
      },
      boxShadow: {
        glass: "var(--shadow)",
        "glass-strong": "var(--shadow-strong)",
      },
    },
  },
} satisfies Config;

