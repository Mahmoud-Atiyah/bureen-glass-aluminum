const PRODUCTION_URL = "https://bureenglass.com";

/**
 * Canonical site origin used by metadataBase, sitemap, robots, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (and .env.local for previews); otherwise
 * we fall back to the production domain so canonical/OG tags are never localhost.
 */
export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) return envUrl.replace(/\/+$/, "");
  return PRODUCTION_URL;
}

