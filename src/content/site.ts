export type GalleryCategory = "Residential" | "Commercial" | "Custom";

export type Service = {
  slug: string;
  title: string;
  short: string;
  heroImage: string;
  icon: string;
  overview: string;
  whenYouNeedIt: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export type Testimonial = {
  name: string;
  rating: 5 | 4;
  body: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  location?: string;
  description: string;
  images: string[];
  beforeAfter?: { before: string; after: string };
};

export type VideoItem = {
  title: string;
  url: string;
};

export const site = {
  name: "Bureen Glass and Aluminum",
  legalName: "Bureen Glass and Aluminum",
  tagline: "Professional Glass & Aluminum Solutions",
  description:
    "Modern glass and aluminum services in Houston: mirrors, storefronts, shower doors, window glass, and custom fabrication with clean, architectural finishes.",
  phone: "832-367-3967",
  email: "omran6143@gmail.com",
  operator: "Ahmad Omran — Operator",
  addressLine: "Serving Houston and surrounding areas",
  hours: [
    { label: "Mon–Fri", value: "8:00 AM – 6:00 PM" },
    { label: "Sat", value: "9:00 AM – 3:00 PM" },
    { label: "Sun", value: "Closed (call for emergency service)" },
  ],
  socials: {
    facebook: "",
    instagram: "",
    googleBusiness: "",
  },
  serviceAreas: [
    "Houston",
    "Sugar Land",
    "Katy",
    "Pearland",
    "Pasadena",
    "The Woodlands",
    "Cypress",
    "Spring",
  ],
  services: [
    {
      slug: "mirrors-mirror-designs",
      title: "Mirrors & Mirror Designs",
      short: "Custom-cut mirrors, vanity mirrors, gym/studio mirrors, and decorative designs.",
      heroImage: "/media/mirrors.jpg",
      icon: "/images/service-mirrors.svg",
      overview:
        "We fabricate and install mirrors that fit perfectly—clean edges, precise cutouts, and modern hardware options.",
      whenYouNeedIt: [
        "Bathroom vanity upgrades",
        "Home gyms or studios",
        "Entryways and decorative accent walls",
        "Damaged or cloudy mirrors",
      ],
      benefits: [
        "Clean, precise cuts and polished edges",
        "Modern, architectural look",
        "Optional safety backing for added durability",
        "Fast turnaround and tidy installation",
      ],
      faqs: [
        {
          q: "Can you cut mirrors to size with outlets and fixtures?",
          a: "Yes—bring measurements or request an on-site visit and we’ll cut precise openings for outlets, sconces, and hardware.",
        },
        {
          q: "Do you install large wall mirrors safely?",
          a: "We use proper mounting methods and hardware to keep large mirrors secure and level.",
        },
      ],
    },
    {
      slug: "storefront-doors",
      title: "Store Front & Doors",
      short: "Glass storefront systems, door replacement, closers, and commercial entry upgrades.",
      heroImage: "/media/storefront.jpg",
      icon: "/images/service-storefront.svg",
      overview:
        "From broken glass replacement to full storefront installs, we deliver durable, professional results for your business.",
      whenYouNeedIt: [
        "Broken storefront glass",
        "Door alignment or closer issues",
        "New tenant build-outs",
        "Security and curb-appeal upgrades",
      ],
      benefits: [
        "Strong, code-conscious materials",
        "Clean alignment and smooth operation",
        "Improved visibility and customer experience",
        "Emergency-ready response options",
      ],
      faqs: [
        {
          q: "Do you handle urgent storefront repairs?",
          a: "Yes—call us for availability. We can often provide same-day estimates and prioritize safety and securing the opening.",
        },
        {
          q: "Can you match existing storefront profiles?",
          a: "In many cases, yes. We’ll evaluate the existing system and recommend a compatible solution.",
        },
      ],
    },
    {
      slug: "commercial-residential",
      title: "Commercial & Residential Glass",
      short: "Repairs and upgrades across homes, offices, retail, and multi-unit properties.",
      heroImage: "/media/hero.jpg",
      icon: "/images/service-commercial.svg",
      overview:
        "One team for both residential and commercial jobs—clear communication, tidy work, and reliable scheduling.",
      whenYouNeedIt: [
        "General glass repairs",
        "Office partitions and interior glass",
        "Property maintenance needs",
        "Ongoing vendor support",
      ],
      benefits: [
        "Residential-friendly scheduling",
        "Commercial-grade workmanship",
        "Clear estimates and scope",
        "Clean finish and safe job sites",
      ],
      faqs: [
        {
          q: "Do you work with property managers?",
          a: "Yes—we can support multi-unit properties and provide consistent service for maintenance requests.",
        },
      ],
    },
    {
      slug: "window-glass",
      title: "Window Glass",
      short: "Window pane replacement, insulated glass units, and cracked glass repairs.",
      heroImage: "/media/hero.jpg",
      icon: "/images/service-window.svg",
      overview:
        "Restore clarity, safety, and insulation with properly measured and installed window glass replacements.",
      whenYouNeedIt: [
        "Cracked or shattered panes",
        "Foggy double-pane glass",
        "Drafts and reduced insulation",
        "Safety upgrades",
      ],
      benefits: [
        "Accurate measurement for perfect fit",
        "Improved comfort and efficiency",
        "Cleaner look and better visibility",
        "Fast, careful installation",
      ],
      faqs: [
        {
          q: "Can you replace only the glass and not the whole window?",
          a: "Often, yes. We’ll evaluate the frame and recommend the most cost-effective approach.",
        },
      ],
    },
    {
      slug: "shower-doors",
      title: "Shower Doors",
      short: "Frameless and semi-frameless shower enclosures with clean lines and premium hardware.",
      heroImage: "/media/shower.jpg",
      icon: "/images/service-shower.svg",
      overview:
        "Modern shower glass that elevates your bathroom—measured precisely and installed for smooth, water-safe operation.",
      whenYouNeedIt: [
        "Bathroom remodels",
        "Leaking or misaligned shower doors",
        "Upgrading from curtains to glass",
        "Custom openings and layouts",
      ],
      benefits: [
        "High-end look with minimal hardware",
        "Custom fit for your layout",
        "Easy-to-clean surfaces",
        "Clean silicone and finishing",
      ],
      faqs: [
        {
          q: "How long does a custom shower enclosure take?",
          a: "Timelines vary by hardware and glass type, but we’ll provide a clear schedule after measurement and approval.",
        },
      ],
    },
    {
      slug: "table-tops",
      title: "Table Tops",
      short: "Durable glass table tops for protection, upgrades, and custom furniture projects.",
      heroImage: "/media/hero.jpg",
      icon: "/images/service-table.svg",
      overview:
        "Protect surfaces and add a sleek look with custom-cut glass table tops in standard or specialty shapes.",
      whenYouNeedIt: [
        "Protecting wood or stone tops",
        "Replacing broken glass tops",
        "Custom furniture projects",
        "Outdoor tables",
      ],
      benefits: [
        "Polished edges and smooth corners",
        "Optional tempered glass for safety",
        "Precise sizing and fit",
        "Easy maintenance",
      ],
      faqs: [
        {
          q: "Should my table top be tempered glass?",
          a: "For many applications, yes. We’ll recommend the right thickness and safety option based on use.",
        },
      ],
    },
    {
      slug: "shelves",
      title: "Shelves",
      short: "Custom glass shelves with clean brackets for bathrooms, kitchens, retail, and display.",
      heroImage: "/media/hero.jpg",
      icon: "/images/service-shelves.svg",
      overview:
        "Glass shelving that feels light, modern, and strong—measured for your space with the right supports.",
      whenYouNeedIt: [
        "Retail displays",
        "Bathroom shelving upgrades",
        "Kitchen or bar shelving",
        "Replacing broken shelves",
      ],
      benefits: [
        "Clean, minimal aesthetic",
        "Custom sizing and edge finishes",
        "Strong hardware options",
        "Fast fabrication and install",
      ],
      faqs: [
        {
          q: "How much weight can glass shelves hold?",
          a: "It depends on thickness, span, and brackets. We’ll size and support shelves for the intended load.",
        },
      ],
    },
  ] satisfies Service[],
  testimonials: [
    {
      name: "James R.",
      rating: 5,
      body: "Quick estimate, clear communication, and the storefront glass looks perfect. Clean work and on time.",
    },
    {
      name: "Maria S.",
      rating: 5,
      body: "Our shower door install was flawless. Great attention to detail and very tidy cleanup.",
    },
    {
      name: "Kevin L.",
      rating: 5,
      body: "Replaced foggy window glass and the difference is night and day. Fast and professional.",
    },
    {
      name: "Lina A.",
      rating: 5,
      body: "Custom mirror for our vanity turned out beautiful. Precise cuts and perfect fit.",
    },
    {
      name: "Derrick P.",
      rating: 5,
      body: "Helped with a commercial door closer and alignment. Smooth operation again—highly recommended.",
    },
    {
      name: "Sarah M.",
      rating: 5,
      body: "Glass table top cut exactly to size with polished edges. Looks premium and feels sturdy.",
    },
    {
      name: "Noah B.",
      rating: 4,
      body: "Great quality work and fair pricing. Would use again for future projects.",
    },
    {
      name: "Aisha K.",
      rating: 5,
      body: "Responsive, professional, and the final finish was very clean. Loved the modern look.",
    },
  ] satisfies Testimonial[],
  faqs: [
    {
      q: "Do you offer same-day estimates?",
      a: "Yes—when scheduling allows, we can provide same-day estimates. Call or request a quote and we’ll get back quickly.",
    },
    {
      q: "Can you handle emergency glass repairs?",
      a: "Call us for availability. We can often prioritize urgent repairs, especially for storefront safety and securing openings.",
    },
    {
      q: "Do you take measurements on-site?",
      a: "Yes. Accurate measurements are key for clean, safe installs—especially for shower enclosures and custom mirrors.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve Houston and surrounding areas. If you’re nearby, reach out and we’ll confirm availability.",
    },
    {
      q: "Do you use tempered glass?",
      a: "When required or recommended for safety and durability, yes. We’ll guide you based on your project and code needs.",
    },
  ],
  gallery: [
    {
      id: "g1",
      title: "Frameless Shower Upgrade",
      category: "Residential",
      description: "Clean, frameless shower glass with minimal hardware and a tight seal.",
      images: ["/media/gallery/gallery-01.jpeg", "/media/gallery/gallery-02.jpeg", "/media/gallery/gallery-03.jpeg"],
      beforeAfter: { before: "/images/before.svg", after: "/images/after.svg" },
    },
    {
      id: "g2",
      title: "Storefront Glass Replacement",
      category: "Commercial",
      description: "Fast replacement with a clean finish and secure fit for daily traffic.",
      images: ["/media/gallery/gallery-04.jpeg", "/media/gallery/gallery-05.jpeg"],
    },
    {
      id: "g3",
      title: "Custom Vanity Mirror",
      category: "Residential",
      description: "Custom cutouts, polished edges, and modern mounting for a crisp look.",
      images: ["/media/mirrors.jpg", "/media/gallery/gallery-06.jpeg"],
    },
    {
      id: "g4",
      title: "Office Interior Glass",
      category: "Commercial",
      description: "Modern interior glass that keeps spaces bright and professional.",
      images: ["/media/hero.jpg", "/media/storefront.jpg"],
    },
  ] satisfies GalleryItem[],
  videos: [
    {
      title: "Storefront Install Walkthrough",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Shower Door Hardware Overview",
      url: "https://vimeo.com/76979871",
    },
    {
      title: "Custom Mirror Design Tips",
      url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    },
  ] satisfies VideoItem[],
} as const;
