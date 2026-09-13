import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { products } from "@/data/products";
import { site } from "@/lib/site";

const whyChoose = [
  {
    icon: "layers",
    title: "Everything from one supplier",
    text: "Mixer trucks, concrete pumps, cement and haulage from a single, coordinated team. Fewer suppliers to chase, and tighter schedules.",
  },
  {
    icon: "shield",
    title: "Modern, maintained fleet",
    text: "Every asset follows a pre-deployment inspection and preventive maintenance schedule calibrated for East African sites.",
  },
  {
    icon: "gps",
    title: "GPS-tracked visibility",
    text: "Live fleet tracking means accurate ETAs, secure cargo and delivery coordination you can plan a pour around.",
  },
  {
    icon: "headset",
    title: "24/7 operational support",
    text: "Dedicated project liaison plus emergency breakdown support so a stall on site never becomes a stall on your programme.",
  },
  {
    icon: "gauge",
    title: "Quotes within 24 hours",
    text: "Transparent, no-hidden-cost quotations turned around fast, so you can lock budgets and mobilise without waiting.",
  },
  {
    icon: "handshake",
    title: "Client-first culture",
    text: "Flexible, project-tailored engagement — from a single hire to multi-site, long-term programme support.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    text: "Pick a product and send your site details, volumes and dates through our quick quotation form or WhatsApp.",
  },
  {
    n: "02",
    title: "Get a tailored quote",
    text: "Our team reviews your requirements and returns a clear, itemised quotation — usually within 24 hours.",
  },
  {
    n: "03",
    title: "Confirm & schedule",
    text: "Approve the quote and we lock your delivery window, assign operators and coordinate the logistics.",
  },
  {
    n: "04",
    title: "We deliver on site",
    text: "Equipment and materials arrive on time, tracked and supported — so your crews keep building without delay.",
  },
];

const sectors = [
  "Residential & real estate developers",
  "Civil & road construction contractors",
  "Commercial & industrial builders",
  "Government ministries & agencies",
  "NGOs & development partners",
  "Precast & ready-mix producers",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro / trust strip */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              A dependable backbone for construction across East Africa
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Headquartered in Kampala, SolidCore Construction Supplies Limited supplies{" "}
              <Link href="/products/concrete-mixer-truck" className="font-semibold text-navy hover:text-orange">
                ready-mix concrete by 10m³ mixer truck
              </Link>
              ,{" "}
              <Link href="/products/concrete-pumps" className="font-semibold text-navy hover:text-orange">
                concrete pumps for 7 to 20+ floors
              </Link>
              ,{" "}
              <Link href="/products/cement" className="font-semibold text-navy hover:text-orange">
                cement
              </Link>
              ,{" "}
              <Link href="/products/steel-rods" className="font-semibold text-navy hover:text-orange">
                steel reinforcement bars
              </Link>{" "}
              and{" "}
              <Link href="/products/logistics-truck" className="font-semibold text-navy hover:text-orange">
                heavy-duty haulage
              </Link>
              . Founded on operational discipline and service excellence, we serve contractors,
              developers, infrastructure agencies and government project teams who demand reliable,
              high-performance support.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              In a sector where delays cost money and equipment failure can stall an entire project,
              we deliver the tools, logistics and peace of mind you need to build on time and within
              budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-navy">
                About SolidCore
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to our team
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/gallery/mixer-branded-1.jpeg"
                alt="SolidCore branded concrete mixer truck"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-orange px-6 py-5 text-white shadow-xl sm:block">
              <div className="font-display text-2xl font-extrabold">7%+</div>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
                E. Africa construction growth p.a.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we supply"
            title="Our products & services"
            description="Everything your pour needs: the mix, the equipment to place it at height, and the materials and haulage that keep your site fed."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <ProductCard product={p} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why SolidCore"
            title="Why contractors choose us"
            description="Modern equipment, experienced people and a service culture that puts your project first."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video showcase */}
      <section className="section navy-gradient text-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-orange-300">On the ground</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              See our concrete operation in motion
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              From batching to placement, our mixers and pumps keep concrete flowing exactly where
              your build needs it. Consistent quality, continuous pours, and a crew that treats your
              timeline like their own.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "10m³ transit mixers protecting slump in transit",
                "Pumps reaching from ground beam to 20+ floors",
                "Coordinated delivery windows and site liaison",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/85">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-orange-300" />
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/gallery" className="btn-primary mt-9">
              View the gallery
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <video
                className="aspect-video w-full object-cover"
                src="/gallery/mixer-video.mp4"
                controls
                muted
                playsInline
                preload="metadata"
                poster="/gallery/pour-1.jpg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it works"
            title="From enquiry to on-site delivery in four steps"
            description="A simple, transparent booking flow designed around how construction teams actually work."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-navy-100 bg-white p-7">
                  <span className="font-display text-4xl font-extrabold text-orange/20">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
                  {i < steps.length - 1 && (
                    <Icon
                      name="arrow"
                      className="absolute right-6 top-8 hidden h-5 w-5 text-navy-200 lg:block"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section bg-navy-50/60">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Sectors we serve</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Who we work with
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              From dense urban sites in Kampala to remote infrastructure projects in outlying
              districts, SolidCore supports a wide range of clients and project types.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {sectors.map((s) => (
                <div key={s} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-navy-100">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-orange" />
                  <span className="text-sm font-medium text-navy-700">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                <Image src="/gallery/pour-2.jpg" alt="Concrete pour on site" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="mt-8 relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                <Image src="/gallery/logistics-1.jpg" alt="Logistics truck" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
