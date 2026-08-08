import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "SolidCore Construction Supplies Limited is a Kampala-based construction support company specialising in equipment hire, concrete logistics and bulk haulage across East Africa.",
};

const values = [
  { icon: "shield", title: "Safety leadership", text: "A safe worksite is a productive worksite — HSE sits at the centre of every operation." },
  { icon: "gauge", title: "Operational excellence", text: "Disciplined maintenance, trained crews and structured processes that keep projects moving." },
  { icon: "handshake", title: "Client-first service", text: "Flexible, transparent engagement tailored to each project — big or small." },
  { icon: "gps", title: "Reliability", text: "Modern, well-maintained, GPS-tracked assets you can build a schedule around." },
];

const hse = [
  "Mandatory equipment inspection and sign-off before every deployment",
  "Full compliance with Uganda's Occupational Safety and Health Act and road transport regulations",
  "Certified operators and drivers trained in safe load handling and hazard awareness",
  "Appropriate personal protective equipment (PPE) on all active sites",
  "Responsible disposal of construction waste, lubricants and materials",
  "Regular safety audits and incident reporting procedures",
];

const infra = [
  "GPS-enabled fleet tracking for real-time visibility",
  "Dedicated workshop team for on-site field repairs",
  "Fuel management systems for long-haul efficiency",
  "Emergency breakdown support for active project sites",
  "Operator training and competency assessments",
  "Spare-parts inventory for critical components",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SolidCore"
        title="Your construction partner, not just a supplier"
        description="Founded on operational discipline and service excellence, SolidCore delivers the equipment, logistics and peace of mind that keep East Africa building."
        image="/gallery/pour-2.jpg"
        crumb="About"
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Built to close the gap in dependable construction support
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              SolidCore Construction Supplies Limited is a dynamic, forward-looking construction
              support company headquartered in Kampala, Uganda. We specialise in construction
              equipment hire, concrete logistics and bulk material transportation across East Africa.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Uganda's construction sector is experiencing robust growth, driven by large-scale
              infrastructure programmes, private real estate development and increased foreign direct
              investment. In this environment, project timelines and input reliability determine
              profitability. SolidCore was established to address the persistent gap in dependable
              equipment hire and concrete logistics — positioning us alongside the region's most
              respected construction service providers.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                <Image src="/gallery/mixer-branded-2.jpeg" alt="SolidCore mixer" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                <Image src="/gallery/pour-1.jpg" alt="Concrete pour" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy-50/60 py-14">
        <div className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <div className="font-display text-4xl font-extrabold text-navy-900 sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-navy-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8 lg:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange">
                <Icon name="spark" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-navy-900">Our Mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-navy-600">
                To deliver reliable, efficient and high-quality construction support services that
                empower our clients to build with confidence, speed and excellence — on time and
                within budget.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full bg-navy p-8 text-white lg:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                <Icon name="building" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold">Our Vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                To become the leading regional provider of construction equipment hire and logistics
                solutions in East Africa — recognised for reliability, operational excellence, safety
                leadership and exceptional client satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="What drives us"
            title="The principles behind every deployment"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership team"
            title="Experienced people behind every project"
            description="A leadership team that pairs strategic direction with hands-on operational discipline."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.leadership.map((m, i) => (
              <Reveal key={m.name} delay={i * 90} className="h-full">
                <div className="card h-full p-8 text-center">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy text-2xl font-extrabold text-white">
                    {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{m.name}</h3>
                  <p className="text-sm font-semibold text-orange">{m.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-600">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HSE + infrastructure */}
      <section className="section bg-navy-50/60">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Health, safety & environment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              Safety at the centre of every operation
            </h2>
            <p className="mt-4 text-navy-600">
              We recognise that a safe worksite is a productive worksite, and require all personnel,
              operators and drivers to adhere to clearly defined safety protocols.
            </p>
            <ul className="mt-6 space-y-3">
              {hse.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-navy-700">
                  <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Fleet & operations</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              A modern fleet, professionally maintained
            </h2>
            <p className="mt-4 text-navy-600">
              Every asset undergoes a structured pre-deployment inspection and follows a preventive
              maintenance schedule aligned with manufacturer specifications.
            </p>
            <ul className="mt-6 space-y-3">
              {infra.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-navy-700">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
