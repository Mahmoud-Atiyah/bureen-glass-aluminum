import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";
import { localBusinessSchema } from "@/lib/schema";

const inter = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

const montserrat = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource/montserrat/files/montserrat-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/montserrat/files/montserrat-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: "/",
    images: [{ url: "/media/hero.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/media/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body
        className="min-h-dvh bg-background font-[family-name:var(--font-body)] text-foreground antialiased"
        suppressHydrationWarning
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow focus:outline-none focus:ring-2 focus:ring-accent/60"
        >
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main id="content" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
