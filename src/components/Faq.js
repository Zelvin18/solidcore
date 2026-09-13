import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

// Plain-text answers feed the FAQPage schema; the JSX versions add links.
const faqs = [
  {
    q: "What does SolidCore Construction Supplies do?",
    a: "SolidCore Construction Supplies Ltd is a Kampala-based supplier of ready-mix concrete delivered by 10m³ concrete mixer trucks, concrete pumps for buildings from 7 to 20+ floors, cement, steel reinforcement bars (rebar) and heavy-duty construction haulage across Uganda and East Africa.",
    jsx: (
      <>
        SolidCore Construction Supplies Ltd is a Kampala-based supplier of ready-mix concrete
        delivered by{" "}
        <Link href="/products/concrete-mixer-truck" className="font-semibold text-navy hover:text-orange">
          10m³ concrete mixer trucks
        </Link>
        ,{" "}
        <Link href="/products/concrete-pumps" className="font-semibold text-navy hover:text-orange">
          concrete pumps
        </Link>{" "}
        for buildings from 7 to 20+ floors,{" "}
        <Link href="/products/cement" className="font-semibold text-navy hover:text-orange">
          cement
        </Link>
        ,{" "}
        <Link href="/products/steel-rods" className="font-semibold text-navy hover:text-orange">
          steel reinforcement bars
        </Link>{" "}
        and{" "}
        <Link href="/products/logistics-truck" className="font-semibold text-navy hover:text-orange">
          heavy-duty construction haulage
        </Link>{" "}
        across Uganda and East Africa.
      </>
    ),
  },
  {
    q: "Where is SolidCore located in Kampala?",
    a: "Our head office is at Katonga Drive, Naalya Estate, with a second office in Nakawa. Our cement and steel rods shop is at Namugongo Sonde, opposite Shell. We supply to sites anywhere in Uganda.",
    jsx: (
      <>
        Our head office is at Katonga Drive, Naalya Estate, with a second office in Nakawa. Our
        cement and steel rods shop is at Namugongo Sonde, opposite Shell. We supply to sites
        anywhere in Uganda — see the{" "}
        <Link href="/contact" className="font-semibold text-navy hover:text-orange">
          contact page
        </Link>{" "}
        for directions and phone numbers.
      </>
    ),
  },
  {
    q: "How do I get a quotation, and how fast do you respond?",
    a: "Request a quotation online in about a minute, or message us on WhatsApp at +256 700 300 032. We respond within 24 hours with a clear, itemised quotation and no hidden costs.",
    jsx: (
      <>
        <Link href="/quote" className="font-semibold text-navy hover:text-orange">
          Request a quotation online
        </Link>{" "}
        in about a minute, or message us on WhatsApp at {site.phonePrimary}. We respond within 24
        hours with a clear, itemised quotation and no hidden costs.
      </>
    ),
  },
  {
    q: "How many floors can your concrete pumps reach?",
    a: "We supply two classes of concrete pump: line/trailer pumps that comfortably serve buildings up to around 7 floors and tight-access sites, and truck-mounted boom pumps engineered for towers of 20 floors and above.",
    jsx: (
      <>
        We supply two classes of{" "}
        <Link href="/products/concrete-pumps" className="font-semibold text-navy hover:text-orange">
          concrete pump
        </Link>
        : line/trailer pumps that comfortably serve buildings up to around 7 floors and
        tight-access sites, and truck-mounted boom pumps engineered for towers of 20 floors and
        above.
      </>
    ),
  },
  {
    q: "Do you deliver outside Kampala?",
    a: "Yes. Our GPS-tracked mixer trucks and haulage fleet deliver to project sites nationwide, including Jinja, Mukono, Entebbe, Mbarara, Gulu and Hoima, and we handle cross-border logistics across East Africa.",
    jsx: (
      <>
        Yes. Our GPS-tracked mixer trucks and{" "}
        <Link href="/products/logistics-truck" className="font-semibold text-navy hover:text-orange">
          haulage fleet
        </Link>{" "}
        deliver to project sites nationwide — including Jinja, Mukono, Entebbe, Mbarara, Gulu and
        Hoima — and we handle cross-border logistics across East Africa.
      </>
    ),
  },
  {
    q: "Can individuals buy cement and steel rods, or only contractors?",
    a: "Both. Homeowners and small builders can buy cement by the bag and steel bars by the piece at our Namugongo Sonde shop, while contractors and developers get bulk truckloads and full tonnage delivered to site on a schedule.",
    jsx: (
      <>
        Both. Homeowners and small builders can buy{" "}
        <Link href="/products/cement" className="font-semibold text-navy hover:text-orange">
          cement
        </Link>{" "}
        by the bag and{" "}
        <Link href="/products/steel-rods" className="font-semibold text-navy hover:text-orange">
          steel bars
        </Link>{" "}
        by the piece at our Namugongo Sonde shop, while contractors and developers get bulk
        truckloads and full tonnage delivered to site on a schedule.
      </>
    ),
  },
  {
    q: "What are your working hours?",
    a: "Monday to Saturday, 7:00 AM to 6:00 PM. Emergency support is available for active project sites.",
    jsx: (
      <>
        Monday to Saturday, 7:00 AM to 6:00 PM. Emergency support is available for active project
        sites.
      </>
    ),
  },
];

export default function Faq() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="container-x">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Quick answers before you get in touch"
          description="The questions contractors, developers and homeowners ask us most."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-card">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40} as="div">
              <details className="group px-6 py-5 open:bg-navy-50/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-navy-900 marker:content-none">
                  <span>{f.q}</span>
                  <span
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-navy-600 leading-relaxed">{f.jsx}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
