import "./globals.css";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/lib/site";
import { products } from "@/data/products";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "SolidCore Construction Supplies Ltd | Concrete Mixer, Pumps, Cement, Steel & Haulage in Kampala, Uganda",
    template: "%s | SolidCore Construction Supplies",
  },
  description:
    "SolidCore Construction Supplies Ltd in Kampala, Uganda supplies 10m³ concrete mixer trucks, concrete pumps (7 to 20+ floors), ready-mix concrete, cement, steel reinforcement bars (rebar) and heavy-duty construction logistics across Uganda and East Africa. Request a free quotation online.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Construction",
  keywords: [
    // Core products
    "concrete mixer truck Uganda",
    "concrete mixer truck Kampala",
    "ready mix concrete Uganda",
    "ready mix concrete Kampala",
    "concrete pump hire Uganda",
    "concrete pump hire Kampala",
    "boom pump Uganda",
    "high rise concrete pump",
    "cement supply Uganda",
    "cement suppliers Kampala",
    "steel reinforcement bars Uganda",
    "rebar Uganda",
    "steel rods Kampala",
    "iron bars Uganda",
    // Services
    "construction materials Uganda",
    "building materials Kampala",
    "construction logistics Uganda",
    "bulk haulage Uganda",
    "construction equipment hire Uganda",
    "aggregates and sand delivery Kampala",
    // Brand & location
    "SolidCore Construction Supplies",
    "SolidCore Uganda",
    "construction supplies Naalya",
    "construction supplies Nakawa",
    "hardware Namugongo Sonde",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SolidCore Construction Supplies Ltd — Kampala, Uganda",
    description:
      "Concrete mixer trucks, concrete pumps, cement, steel reinforcement bars and construction logistics across Uganda. Request a free quotation.",
    url: site.url,
    type: "website",
    locale: "en_UG",
    siteName: site.legalName,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "SolidCore Construction Supplies — concrete, pumps, cement, steel & logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolidCore Construction Supplies Ltd — Kampala, Uganda",
    description:
      "Concrete mixer trucks, concrete pumps, cement, steel reinforcement bars and construction logistics across Uganda.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Favicons are served from src/app/favicon.ico, icon.png and apple-icon.png (Next.js file conventions).
};

// Structured data (JSON-LD) so Google can show rich business results & sitelinks.
function StructuredData() {
  const branches = site.offices.map((o) => ({
    "@type": "LocalBusiness",
    name: `${site.legalName} — ${o.label}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.address,
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    telephone: site.phonePrimary,
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HardwareStore"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: "SolidCore Construction Supplies",
    url: site.url,
    logo: `${site.url}/brand/logo.jpeg`,
    image: `${site.url}/og.jpg`,
    description:
      "Supplier of concrete mixer trucks, concrete pumps, ready-mix concrete, cement, steel reinforcement bars and construction logistics in Kampala, Uganda and across East Africa.",
    telephone: site.phonePrimary,
    email: site.email,
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Uganda" },
      { "@type": "AdministrativeArea", name: "East Africa" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.offices[0].address,
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    department: branches,
    makesOffer: products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.name,
        description: p.short,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFab />
        <Analytics />
      </body>
    </html>
  );
}
