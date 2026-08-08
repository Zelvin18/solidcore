import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Request a Quotation",
  description:
    "Request a fast, no-obligation quotation from SolidCore Construction Supplies — concrete mixer trucks, pumps, cement and logistics across Uganda and East Africa.",
};

const assurances = [
  { icon: "clock", title: "24-hour response", text: "Clear, itemised quotes turned around fast." },
  { icon: "shield", title: "No hidden costs", text: "Transparent pricing you can budget around." },
  { icon: "headset", title: "Dedicated liaison", text: "One point of contact for your whole project." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Request a quotation"
        description="Tell us what your project needs and we'll get a tailored quotation back to you — usually within 24 hours. No obligation."
        image="/gallery/mixer-2.jpeg"
        crumb="Request a Quote"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="card p-8 text-navy-500">Loading form…</div>}>
              <QuoteForm />
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card p-7">
              <h3 className="font-display text-lg font-bold text-navy-900">Prefer to talk?</h3>
              <p className="mt-2 text-sm text-navy-600">
                Reach our operations team directly — we're happy to advise on the right equipment and
                logistics for your project.
              </p>
              <div className="mt-5 space-y-4 text-sm">
                <a href={`tel:${site.phonePrimaryRaw}`} className="flex items-center gap-3 font-semibold text-navy-800 hover:text-orange">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  {site.phonePrimary}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-semibold text-navy-800 hover:text-orange">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <span className="break-all">{site.email}</span>
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-navy-800 hover:text-orange"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  WhatsApp us
                </a>
              </div>
            </div>

            <div className="card p-7">
              <h3 className="font-display text-lg font-bold text-navy-900">Our promise</h3>
              <ul className="mt-5 space-y-5">
                {assurances.map((a) => (
                  <li key={a.title} className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                      <Icon name={a.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-navy-900">{a.title}</span>
                      <span className="text-sm text-navy-600">{a.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
