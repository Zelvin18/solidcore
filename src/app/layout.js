import "./globals.css";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";
import { site } from "@/lib/site";

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
  metadataBase: new URL("https://solidcoreconstruction.co.ug"),
  title: {
    default: "SolidCore Construction Supplies Ltd | Concrete, Pumps, Cement & Haulage — Kampala",
    template: "%s | SolidCore Construction Supplies",
  },
  description:
    "SolidCore Construction Supplies Ltd supplies 10m³ concrete mixer trucks, concrete pumps (7 to 20+ floors), cement, steel reinforcement bars and heavy-duty logistics across Uganda and East Africa. Request a quotation online.",
  keywords: [
    "concrete mixer truck Uganda",
    "concrete pump hire Kampala",
    "ready mix concrete Uganda",
    "cement supply Kampala",
    "construction logistics East Africa",
    "SolidCore Construction Supplies",
  ],
  openGraph: {
    title: "SolidCore Construction Supplies Ltd",
    description: site.intro,
    type: "website",
    locale: "en_UG",
    siteName: site.legalName,
  },
  icons: {
    icon: "/brand/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
