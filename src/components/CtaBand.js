import Link from "next/link";
import Icon from "./Icons";
import Reveal from "./Reveal";
import { site, whatsappLink } from "@/lib/site";

export default function CtaBand({
  title = "Ready to move your project forward?",
  text = "Tell us what you need and we'll get a tailored quotation back to you — fast. No obligation, no hidden costs.",
  product,
}) {
  const waMsg = product
    ? `Hello SolidCore, I'd like a quotation for: ${product}.`
    : "Hello SolidCore, I'd like to request a quotation.";
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl navy-gradient px-6 py-14 text-center shadow-2xl sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-navy-400/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-orange-300">Get Started</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-white/75">{text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary w-full sm:w-auto">
                Request a Quotation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light w-full sm:w-auto"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Or call{" "}
              <a href={`tel:${site.phonePrimaryRaw}`} className="font-semibold text-white hover:text-orange-300">
                {site.phonePrimary}
              </a>{" "}
              — response within 24 hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
