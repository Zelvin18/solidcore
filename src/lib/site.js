// Central company information used across the whole site.
export const site = {
  name: "SolidCore Construction Supplies",
  legalName: "SolidCore Construction Supplies Limited",
  shortName: "SolidCore",
  initials: "SCS",
  tagline: "Building East Africa — One Project at a Time",
  intro:
    "Equipment hire, concrete logistics and bulk haulage for contractors, developers and infrastructure agencies across Uganda and East Africa.",
  phonePrimary: "+256 700 300 032",
  phoneSecondary: "+256 772 155 002",
  // Digits only, for tel: and WhatsApp deep links
  phonePrimaryRaw: "256700300032",
  whatsapp: "256700300032",
  email: "operations@solidcoreconstruction.co.ug",
  hours: "Monday – Saturday, 7:00 AM – 6:00 PM (Emergency support for active projects)",
  offices: [
    {
      label: "Naalya Estate Office",
      address: "Katonga Drive, Naalya, Kampala, Uganda",
    },
    {
      label: "Nakawa Office",
      address: "Nakawa Industrial Area, Kampala, Uganda",
    },
  ],
  region: "Uganda & the wider East African region",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  stats: [
    { value: "10m³", label: "Mixer Capacity" },
    { value: "20m+", label: "Pump Reach" },
    { value: "24/7", label: "Operational Support" },
    { value: "EA", label: "Regional Coverage" },
  ],
  leadership: [
    {
      name: "Henry Mawire",
      role: "Managing Director",
      bio: "Provides strategic direction and overall leadership for SolidCore, driving business development, key client relationships and long-term growth across East Africa's competitive construction logistics sector.",
    },
    {
      name: "Kundai Mawire",
      role: "Operations Manager",
      bio: "Manages day-to-day fleet operations, logistics execution and operational efficiency, coordinating equipment deployment, maintenance schedules and driver/operator teams to guarantee on-time delivery.",
    },
    {
      name: "Tanaka Magumise",
      role: "Administration & Legal Manager",
      bio: "Oversees corporate governance, regulatory compliance, contracts and administrative operations, ensuring the company upholds the highest legal and ethical standards in every engagement.",
    },
    {
      name: "Olivia Uwera",
      role: "Key Accounts Manager",
      bio: "Looks after our major client relationships from first quotation through to delivery, giving contractors and developers a single, responsive point of contact and making sure every account gets service tailored to its project.",
    },
  ],
};

export function whatsappLink(message) {
  const text = encodeURIComponent(message || "Hello SolidCore, I'd like to request a quotation.");
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
