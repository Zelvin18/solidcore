// Product catalogue. No prices — the site drives quotation requests.
export const products = [
  {
    slug: "concrete-mixer-truck",
    name: "10m³ Concrete Mixer Truck",
    category: "Ready-Mix Delivery",
    tagline: "Fresh, consistent concrete delivered drum-turning to your pour.",
    hero: "/gallery/banner.jpeg",
    thumb: "/gallery/mixer-branded-1.jpeg",
    images: [
      "/gallery/mixer-branded-1.jpeg",
      "/gallery/mixer-branded-2.jpeg",
      "/gallery/mixer-1.jpeg",
      "/gallery/mixer-2.jpeg",
      "/gallery/mixer-3.jpeg",
      "/gallery/mixer-4.jpeg",
    ],
    video: "/gallery/mixer-video.mp4",
    short:
      "A modern 10-cubic-metre transit mixer that keeps your concrete moving, mixing and workable from batching plant to placement.",
    intro:
      "Concrete has a clock ticking from the moment it's batched. Our 10m³ transit mixers keep that clock in your favour — a continuously rotating drum that protects slump, prevents premature setting and delivers a uniform, high-quality mix exactly where and when you need it. Whether you're casting a residential slab or feeding a high-rise pour, one truckload moves serious volume without the delays and inconsistency of on-site hand-mixing.",
    highlights: [
      "10 cubic metres of usable drum capacity per load",
      "Continuous-rotation drum protects mix quality in transit",
      "Slump monitoring and mix-consistency checks on delivery",
      "Skilled operators trained to construction-site safety standards",
      "GPS-tracked for accurate ETAs and delivery coordination",
      "Pairs seamlessly with our concrete pumps for high-rise pours",
    ],
    specs: [
      { label: "Drum Capacity", value: "10 m³" },
      { label: "Mix Type", value: "Ready-mix / transit-mixed concrete" },
      { label: "Drum Action", value: "Continuous rotation in transit" },
      { label: "Coverage", value: "Kampala & nationwide project sites" },
      { label: "Support", value: "Operator included · scheduled delivery windows" },
    ],
    useCases: [
      "Residential slabs, foundations and columns",
      "Commercial and high-rise structural pours",
      "Roads, culverts, bridges and civil works",
      "Precast yards and large repeat-batch programmes",
    ],
    cta: "Book a Mixer Truck",
  },
  {
    slug: "concrete-pumps",
    name: "Concrete Pumps — 7 to 20+ Floors",
    category: "Concrete Placement",
    tagline: "Reach every floor — from ground beam to rooftop slab.",
    hero: "/gallery/pump-2.jpg",
    thumb: "/gallery/pump-1.jpg",
    images: [
      "/gallery/pump-1.jpg",
      "/gallery/pump-2.jpg",
      "/gallery/pump-3.jpg",
      "/gallery/pump-4.jpg",
      "/gallery/pour-1.jpg",
      "/gallery/pour-2.jpg",
    ],
    short:
      "Line pumps and boom pumps that place concrete precisely — from mid-rise builds up to towers of twenty floors and beyond.",
    intro:
      "When wheelbarrows and hoists can't keep up, a concrete pump transforms your pour. We supply two classes of pumping power: agile line/trailer pumps that comfortably serve buildings up to around the 7th floor and tight-access sites, and high-performance boom pumps engineered to place concrete at 20 floors and above. The result is faster placement, less labour, cleaner sites and a stronger, more continuous pour with fewer cold joints.",
    tiers: [
      {
        name: "Line / Trailer Pump — up to ~7 floors",
        desc: "Compact and manoeuvrable, ideal for tight urban sites, basements, screeds and mid-rise structures. Pumps concrete horizontally over long distances and vertically to roughly the seventh floor through a deployable pipeline.",
        points: [
          "Perfect for restricted-access and inner-city plots",
          "Long horizontal reach around obstacles",
          "Efficient for slabs, screeds and foundations",
        ],
      },
      {
        name: "Boom Pump — 20 floors and above",
        desc: "Truck-mounted hydraulic boom that unfolds to place concrete accurately at height, over rooftops and across wide structures — the workhorse for high-rise and large-volume commercial pours.",
        points: [
          "Vertical reach for 20+ storey towers",
          "Precise placement via remote-controlled boom",
          "High output for large continuous pours",
        ],
      },
    ],
    highlights: [
      "Two pump classes to match building height and site access",
      "Reaches 20 floors and above with boom-mounted units",
      "Faster, continuous pours with fewer cold joints",
      "Dramatically reduces on-site labour and pour time",
      "Experienced pump operators and line crews included",
      "Coordinated directly with our 10m³ mixer fleet",
    ],
    specs: [
      { label: "Line / Trailer Pump", value: "Up to ~7 floors · tight-access sites" },
      { label: "Boom Pump", value: "20+ floors · high-volume pours" },
      { label: "Placement", value: "Vertical & long-horizontal reach" },
      { label: "Crew", value: "Trained operators & line hands included" },
      { label: "Best Paired With", value: "SolidCore 10m³ mixer trucks" },
    ],
    useCases: [
      "High-rise residential and commercial towers",
      "Suspended slabs and upper-floor columns",
      "Large rafts, foundations and podium decks",
      "Tight sites where trucks can't reach the pour",
    ],
    cta: "Book a Concrete Pump",
  },
  {
    slug: "cement",
    name: "Cement Supply",
    category: "Building Materials",
    tagline: "Genuine, strength-graded cement — delivered by the pallet or the truckload.",
    hero: "/gallery/cement-3.jpg",
    thumb: "/gallery/cement-1.jpg",
    images: [
      "/gallery/cement-1.jpg",
      "/gallery/cement-2.jpg",
      "/gallery/cement-3.jpg",
      "/gallery/pour-3.jpg",
    ],
    short:
      "Reliable supply of quality cement in the volumes your programme demands — with dependable delivery you can build a schedule around.",
    intro:
      "Cement is the heart of every structure you build, and a broken supply line stalls an entire site. SolidCore keeps your project moving with a dependable stream of genuine, strength-graded cement sourced through a strong supplier network. From a few pallets for a residential build to bulk truckloads for large contracts, we match volume to your pour schedule and deliver on time — so your crews are never standing idle waiting on bags.",
    highlights: [
      "Genuine, strength-graded cement from trusted brands",
      "Supply scaled from pallets to full bulk truckloads",
      "Delivery timed to your casting and pour schedule",
      "Consistent quality for predictable concrete strength",
      "Bundled with mixer, pump and haulage for one-stop supply",
      "Reliable availability even during peak demand",
    ],
    specs: [
      { label: "Product", value: "Bagged & bulk cement" },
      { label: "Volumes", value: "Pallet quantities to truckloads" },
      { label: "Quality", value: "Strength-graded, genuine stock" },
      { label: "Delivery", value: "Scheduled to your pour programme" },
      { label: "Coverage", value: "Kampala & nationwide" },
    ],
    useCases: [
      "Residential and estate developments",
      "Commercial and industrial builds",
      "Blockyards and precast production",
      "Civil works and infrastructure contracts",
    ],
    cta: "Request Cement Supply",
  },
  {
    slug: "logistics-truck",
    name: "Logistics & Haulage Truck",
    category: "Transport & Haulage",
    tagline: "Heavy-duty haulage that gets your materials there — anywhere.",
    hero: "/gallery/logistics-1.jpg",
    thumb: "/gallery/logistics-2.jpg",
    images: [
      "/gallery/logistics-1.jpg",
      "/gallery/logistics-2.jpg",
    ],
    short:
      "Robust, GPS-tracked haulage for cement, aggregates, sand, plant and general construction cargo — delivered across Uganda and East Africa.",
    intro:
      "Great materials are worthless stuck at the wrong location. Our heavy-duty logistics truck moves construction cargo dependably and securely — cement, aggregates, sand, blocks, plant and general freight — from supplier to site, city to district, and across East African borders. With GPS tracking, experienced drivers and disciplined scheduling, you get load-after-load reliability and full visibility of where your delivery is at all times.",
    highlights: [
      "Heavy-duty capacity for bulk construction materials",
      "Cement, aggregates, sand, blocks, plant & general cargo",
      "GPS-tracked fleet for cargo security and live visibility",
      "Cross-border logistics across East Africa",
      "Last-mile delivery to remote and hard-to-reach sites",
      "Experienced, safety-trained drivers",
    ],
    specs: [
      { label: "Service", value: "Bulk & general construction haulage" },
      { label: "Cargo", value: "Cement · aggregates · sand · plant · freight" },
      { label: "Tracking", value: "GPS-enabled, real-time visibility" },
      { label: "Reach", value: "Nationwide & cross-border East Africa" },
      { label: "Delivery", value: "Scheduled & express / last-mile options" },
    ],
    useCases: [
      "Bulk material delivery to active sites",
      "Cross-border project logistics",
      "Plant and machinery relocation",
      "Last-mile delivery to remote districts",
    ],
    cta: "Book Logistics & Haulage",
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
