import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";

/**
 * JSON-LD builders for structured data. Keep all schema generation here so the
 * NAP, hours, and service areas stay sourced from `site` (single source of truth).
 */

type Json = Record<string, unknown>;

// Maps the site's human-readable hours into schema.org openingHoursSpecification.
function openingHours() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ];
}

export function localBusinessSchema(): Json {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: base,
    image: `${base}/media/hero.jpg`,
    logo: `${base}/brand/logo.png`,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: openingHours(),
    makesOffer: site.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  };
}

export function serviceSchema(service: (typeof site.services)[number]): Json {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    serviceType: service.title,
    url: `${base}/services/${service.slug}`,
    provider: { "@id": `${base}/#business` },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
  };
}

export function faqPageSchema(faqs: ReadonlyArray<{ q: string; a: string }>): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
