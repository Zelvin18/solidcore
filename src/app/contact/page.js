import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SolidCore Construction Supplies Ltd in Kampala — offices in Naalya Estate, Nakawa and Namugongo Sonde. Call, email or WhatsApp us for concrete, cement, steel and logistics.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    {
      icon: "phone",
      title: "Call us",
      lines: [site.phonePrimary, site.phoneSecondary],
      href: `tel:${site.phonePrimaryRaw}`,
      cta: "Call now",
    },
    {
      icon: "whatsapp",
      title: "WhatsApp",
      lines: ["Fastest way to a quote", site.phonePrimary],
      href: whatsappLink(),
      cta: "Chat on WhatsApp",
      external: true,
    },
    {
      icon: "mail",
      title: "Email",
      lines: [site.email],
      href: `mailto:${site.email}`,
      cta: "Send an email",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build together"
        description="We operate across Uganda and the wider East African region. Reach out and our team will respond quickly — emergency support is available for active project sites."
        image="/gallery/logistics-2.jpg"
        crumb="Contact"
      />

      {/* Channels */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card flex h-full flex-col p-8">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{c.title}</h3>
                  <div className="mt-2 flex-1 space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-navy-600">
                        {l}
                      </p>
                    ))}
                  </div>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:gap-2.5"
                  >
                    {c.cta}
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices + hours */}
      <section className="section bg-navy-50/60">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our offices</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Find us in Kampala
            </h2>
            <div className="mt-8 space-y-5">
              {site.offices.map((o) => (
                <div key={o.label} className="card flex items-start gap-4 p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon name="pin" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-navy-900">{o.label}</h3>
                    <p className="mt-1 text-sm text-navy-600">{o.address}</p>
                    {o.note && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange">
                        {o.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="card flex items-start gap-4 p-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange text-white">
                  <Icon name="clock" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-navy-900">Working hours</h3>
                  <p className="mt-1 text-sm text-navy-600">{site.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card overflow-hidden">
              <iframe
                title="SolidCore location — Naalya, Kampala"
                src="https://www.google.com/maps?q=Naalya%2C%20Kampala%2C%20Uganda&output=embed"
                className="h-72 w-full border-0 sm:h-96 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl navy-gradient px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange/20 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Ready for a quotation?
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Skip the back-and-forth — send your project details and we'll quote it fast.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/quote" className="btn-primary w-full sm:w-auto">
                  Request a Quotation
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/products" className="btn-ghost-light w-full sm:w-auto">
                  Browse products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
