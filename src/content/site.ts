export type GalleryCategory = "Residential" | "Commercial" | "Custom";

export type ServiceSegment = "Residential" | "Commercial" | "Custom";

export type Service = {
  slug: string;
  title: string;
  short: string;
  segment: ServiceSegment[];
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
  /** true while this is placeholder copy, not a verified review. Drop the flag when replaced. */
  sample?: boolean;
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
  // Approximate geo center (Houston, TX) for LocalBusiness JSON-LD.
  geo: { latitude: 29.7604, longitude: -95.3698 },
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
      segment: ["Residential", "Custom"],
      heroImage: "/media/gallery/mirror-01.jpeg",
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
          a: "We use construction-grade adhesive plus mechanical support (J-channel, clips, or a cleat) so large mirrors stay secure and level for the long term.",
        },
        {
          q: "What edge finishes do you offer?",
          a: "Flat-polished and beveled edges are the most common. Polished is clean and modern; a bevel adds a framed, decorative look. We’ll recommend what suits the space.",
        },
        {
          q: "Can you do gym, dance, or studio mirror walls?",
          a: "Yes. We install full-height mirror walls with safety backing and proper seams so reflections stay flat and distortion-free across the run.",
        },
        {
          q: "Do mirrors come with safety backing?",
          a: "We offer a vinyl safety backing that holds glass together if it’s ever broken—recommended for gyms, kids’ rooms, and high-traffic areas.",
        },
      ],
    },
    {
      slug: "storefront-doors",
      title: "Store Front & Doors",
      short: "Glass storefront systems, door replacement, closers, and commercial entry upgrades.",
      segment: ["Commercial"],
      heroImage: "/media/gallery/storefront-01.jpeg",
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
          a: "Yes—call us for availability. We can often provide same-day estimates, board up or secure a broken opening immediately, and return with replacement glass once it’s cut.",
        },
        {
          q: "Can you match existing storefront profiles?",
          a: "In many cases, yes. We identify the aluminum framing system (common ones like 1-3/4\" x 4-1/2\" center-set) and source matching or compatible glass and hardware.",
        },
        {
          q: "What glass thickness do storefronts use?",
          a: "Most commercial storefronts use 1/4\" tempered or 1\" insulated tempered glass for safety and energy code. We’ll spec the right make-up for your opening and location.",
        },
        {
          q: "Can you fix a door that won’t close or latch?",
          a: "Usually yes. We service and replace door closers, pivots, hinges, locks, and thresholds, and re-align sagging doors so they swing and latch properly.",
        },
      ],
    },
    {
      slug: "commercial-residential",
      title: "Commercial & Residential Glass",
      short: "Repairs and upgrades across homes, offices, retail, and multi-unit properties.",
      segment: ["Residential", "Commercial"],
      heroImage: "/media/gallery/commercial-01.jpeg",
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
          a: "Yes—we support multi-unit and commercial properties with consistent service, itemized estimates, and scheduling that works around tenants and business hours.",
        },
        {
          q: "Do you do both repairs and full installations?",
          a: "Both. From a single cracked pane or a foggy unit to office partitions and full build-out glazing, one team handles the scope start to finish.",
        },
        {
          q: "Can you provide a written estimate for insurance or budgeting?",
          a: "Yes. We provide clear, itemized written estimates you can submit for insurance claims, property budgets, or approvals.",
        },
        {
          q: "How soon can someone come out?",
          a: "Scheduling permitting, we often visit within a day or two for estimates, and we prioritize urgent safety issues like broken or unsecured glass.",
        },
      ],
    },
    {
      slug: "window-glass",
      title: "Window Glass",
      short: "Window pane replacement, insulated glass units, and cracked glass repairs.",
      segment: ["Residential", "Commercial"],
      heroImage: "/media/gallery/window-01.jpeg",
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
          a: "Often, yes. If the frame and sash are sound, we replace just the glass or the insulated unit—usually faster and far less costly than a full window.",
        },
        {
          q: "My double-pane window is foggy. Can that be fixed?",
          a: "Fog between the panes means the insulated glass unit’s seal has failed. We replace the sealed unit with a new one so it’s clear and insulating again.",
        },
        {
          q: "How long does a glass replacement take?",
          a: "We measure first, then order or cut the glass. Standard sizes can be quick; custom or insulated units typically take a few business days to fabricate.",
        },
        {
          q: "Can you use tempered or Low-E energy-efficient glass?",
          a: "Yes. We can spec tempered safety glass where code requires it and Low-E coatings to cut heat gain—useful in Houston’s climate.",
        },
      ],
    },
    {
      slug: "shower-doors",
      title: "Shower Doors",
      short: "Frameless and semi-frameless shower enclosures with clean lines and premium hardware.",
      segment: ["Residential"],
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
          a: "After we measure and you approve the layout and hardware, custom tempered glass is typically fabricated in about a week, then installed in a single visit.",
        },
        {
          q: "What’s the difference between frameless and semi-frameless?",
          a: "Frameless uses thick (3/8\"–1/2\") tempered glass with minimal hardware for a clean, high-end look. Semi-frameless adds a light frame on some edges for a lower cost with a similar feel.",
        },
        {
          q: "How do you keep shower glass from leaking?",
          a: "We measure for proper slope and clearances, set the glass with the right seals and sweeps, and finish with clean silicone so water stays in the enclosure.",
        },
        {
          q: "Is there a coating to keep the glass easy to clean?",
          a: "Yes. We offer a protective hydrophobic coating that helps water and soap scum bead off, so the glass stays clearer with less scrubbing.",
        },
      ],
    },
    {
      slug: "table-tops",
      title: "Table Tops",
      short: "Durable glass table tops for protection, upgrades, and custom furniture projects.",
      segment: ["Residential", "Custom"],
      heroImage: "/media/gallery/commercial-02.jpeg",
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
          a: "For dining and high-use surfaces, we usually recommend tempered glass—it’s much stronger and, if broken, crumbles into small pieces instead of sharp shards.",
        },
        {
          q: "What edge and corner finishes are available?",
          a: "Flat-polished, beveled, and pencil (rounded) edges, with corners eased or radiused for safety. We finish every cut so there are no sharp edges.",
        },
        {
          q: "How thick should the glass be?",
          a: "Protective overlays are typically 1/4\". Standalone tops or shelves often use 3/8\"–1/2\" depending on span and use. We’ll size it for the load.",
        },
        {
          q: "Can you add bumpers to protect the surface underneath?",
          a: "Yes. We set clear rubber or silicone bumpers so the glass sits level, grips lightly, and protects the wood or stone beneath it.",
        },
      ],
    },
    {
      slug: "shelves",
      title: "Shelves",
      short: "Custom glass shelves with clean brackets for bathrooms, kitchens, retail, and display.",
      segment: ["Residential", "Commercial", "Custom"],
      heroImage: "/media/gallery/commercial-03.jpeg",
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
          a: "It depends on thickness, span, and brackets. We size the glass and hardware to the intended load—thicker glass and shorter spans carry more.",
        },
        {
          q: "What thickness do you use for glass shelves?",
          a: "Most shelves use 3/8\" or 1/2\" tempered glass. Thicker glass and proper brackets prevent flex and let shelves span wider openings safely.",
        },
        {
          q: "What bracket and mounting options are there?",
          a: "From minimal standoff pins and clips for a floating look to concealed and bracket supports for heavier loads—we match the hardware to the wall and the weight.",
        },
        {
          q: "Can you cut shelves to fit an alcove or odd space?",
          a: "Yes. We template the opening, cut to size, and polish the exposed edges so the shelf fits cleanly into niches, corners, and custom layouts.",
        },
      ],
    },
  ] satisfies Service[],
  // SAMPLE testimonials — placeholder copy until real Google reviews are added.
  // Replace each entry with a verified review and remove `sample: true`. Keep the
  // shape { name, rating, body } so real reviews drop straight in.
  testimonials: [
    {
      name: "James R.",
      rating: 5,
      body: "Quick estimate, clear communication, and the storefront glass looks perfect. Clean work and on time.",
      sample: true,
    },
    {
      name: "Maria S.",
      rating: 5,
      body: "Our shower door install was flawless. Great attention to detail and very tidy cleanup.",
      sample: true,
    },
    {
      name: "Kevin L.",
      rating: 5,
      body: "Replaced foggy window glass and the difference is night and day. Fast and professional.",
      sample: true,
    },
    {
      name: "Lina A.",
      rating: 5,
      body: "Custom mirror for our vanity turned out beautiful. Precise cuts and perfect fit.",
      sample: true,
    },
    {
      name: "Derrick P.",
      rating: 5,
      body: "Helped with a commercial door closer and alignment. Smooth operation again—highly recommended.",
      sample: true,
    },
    {
      name: "Sarah M.",
      rating: 5,
      body: "Glass table top cut exactly to size with polished edges. Looks premium and feels sturdy.",
      sample: true,
    },
    {
      name: "Noah B.",
      rating: 4,
      body: "Great quality work and fair pricing. Would use again for future projects.",
      sample: true,
    },
    {
      name: "Aisha K.",
      rating: 5,
      body: "Responsive, professional, and the final finish was very clean. Loved the modern look.",
      sample: true,
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
  // Real job photos live in /public/media/gallery. Each item's first image is the
  // grid thumbnail; the rest open in the lightbox. Drop in new photos by adding entries.
  gallery: [
    {
      id: "shower-frameless",
      title: "Frameless Shower Enclosure",
      category: "Residential",
      description: "Heavy frameless glass with minimal hardware, precise measurement, and a clean silicone finish.",
      images: ["/media/gallery/shower-01.jpeg", "/media/gallery/shower-02.jpeg", "/media/gallery/shower-03.jpeg"],
    },
    {
      id: "shower-walk-in",
      title: "Walk-In Shower Glass",
      category: "Residential",
      description: "Custom walk-in panel sized to the opening for an open, modern bathroom.",
      images: ["/media/gallery/shower-04.jpeg", "/media/gallery/shower-05.jpeg", "/media/gallery/shower-06.jpeg"],
    },
    {
      id: "mirror-vanity",
      title: "Custom Vanity Mirror",
      category: "Custom",
      description: "Custom-cut mirror with polished edges and clean mounting for a crisp, modern look.",
      images: ["/media/gallery/mirror-01.jpeg", "/media/gallery/mirror-02.jpeg", "/media/gallery/mirror-03.jpeg"],
    },
    {
      id: "storefront-doors",
      title: "Storefront Glass & Doors",
      category: "Commercial",
      description: "Storefront glass and entry door work built for daily traffic and curb appeal.",
      images: ["/media/gallery/storefront-01.jpeg", "/media/gallery/storefront-02.jpeg", "/media/gallery/storefront-03.jpeg"],
    },
    {
      id: "commercial-custom",
      title: "Commercial & Custom Glass",
      category: "Commercial",
      description: "Custom commercial glass and aluminum fabrication finished clean and to spec.",
      images: [
        "/media/gallery/commercial-01.jpeg",
        "/media/gallery/commercial-02.jpeg",
        "/media/gallery/commercial-03.jpeg",
        "/media/gallery/commercial-04.jpeg",
      ],
    },
    {
      id: "window-glass",
      title: "Window Glass Replacement",
      category: "Residential",
      description: "Cracked and foggy panes replaced with accurate sizing and a tidy install.",
      images: ["/media/gallery/window-01.jpeg", "/media/gallery/window-02.jpeg", "/media/gallery/window-03.jpeg"],
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
