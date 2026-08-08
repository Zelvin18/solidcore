import Image from "next/image";
import Link from "next/link";
import Icon from "./Icons";
import { site, whatsappLink } from "@/lib/site";
import { BANNER_BLUR } from "@/lib/blur";

export default function Hero() {
  return (
    <section className="relative overflow-hidden navy-gradient">
      {/* Background image — desktop only (wide banner crops badly on tall mobile screens) */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/gallery/banner.jpeg"
          alt="SolidCore concrete mixer truck"
          fill
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={BANNER_BLUR}
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-900/25" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur animate-fadeUp">
              <Icon name="pin" className="h-4 w-4 text-orange" />
              Based in Kampala, serving all of Uganda
            </span>

            <h1
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl animate-fadeUp"
              style={{ animationDelay: "80ms" }}
            >
              Build with
              <span className="relative whitespace-nowrap text-orange"> confidence</span>,
              <br className="hidden sm:block" /> deliver with certainty.
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 animate-fadeUp"
              style={{ animationDelay: "160ms" }}
            >
              SolidCore Construction Supplies Ltd keeps Uganda's most demanding projects moving.
              We supply 10m³ concrete mixer trucks, high-rise concrete pumps, quality cement and
              dependable heavy haulage, all from one trusted partner.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row animate-fadeUp"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/quote" className="btn-primary">
                Request a Quotation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/products" className="btn-ghost-light">
                Explore Our Fleet
              </Link>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70 animate-fadeUp"
              style={{ animationDelay: "320ms" }}
            >
              <span className="flex items-center gap-2">
                <Icon name="shield" className="h-5 w-5 text-orange-300" />
                Safety-first operations
              </span>
              <span className="flex items-center gap-2">
                <Icon name="gps" className="h-5 w-5 text-orange-300" />
                GPS-tracked fleet
              </span>
              <span className="flex items-center gap-2">
                <Icon name="clock" className="h-5 w-5 text-orange-300" />
                Quotes within 24 hrs
              </span>
            </div>

            {/* Full truck image — mobile/tablet only (whole vehicle visible, no crop) */}
            <div
              className="mt-10 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15 shadow-2xl animate-fadeUp lg:hidden"
              style={{ animationDelay: "300ms" }}
            >
              <Image
                src="/gallery/banner.jpeg"
                alt="SolidCore 10m³ concrete mixer truck"
                width={1268}
                height={430}
                sizes="100vw"
                quality={75}
                placeholder="blur"
                blurDataURL={BANNER_BLUR}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>

          {/* Stat card cluster */}
          <div className="lg:col-span-5">
            <div
              className="mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md animate-fadeUp"
              style={{ animationDelay: "260ms" }}
            >
              <div className="grid grid-cols-2 gap-4">
                {site.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white/10 p-5 text-center ring-1 ring-white/10"
                  >
                    <div className="font-display text-3xl font-extrabold text-white">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Quick quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wave / divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60V30c240 20 480 20 720 0s480-20 720 0v30z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
