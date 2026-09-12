import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icons";
import { site, mainNav } from "@/lib/site";
import { products } from "@/data/products";

export default function Footer() {
  const year = 2025;
  return (
    <footer className="navy-gradient text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {site.intro}
          </p>
          <p className="mt-5 text-sm font-semibold text-orange-300">
            {site.tagline}
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
            Products
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-white/80 transition-colors hover:text-orange-300"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
            Company
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav
              .filter((n) => n.href !== "/")
              .map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/80 transition-colors hover:text-orange-300"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/quote" className="text-white/80 transition-colors hover:text-orange-300">
                Request a Quotation
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
              <span>
                <a href={`tel:${site.phonePrimaryRaw}`} className="hover:text-orange-300">
                  {site.phonePrimary}
                </a>
                <br />
                {site.phoneSecondary}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-orange-300">
                {site.email}
              </a>
            </li>
            {site.offices.map((o) => (
              <li key={o.label} className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                <span>
                  <span className="block font-semibold text-white">{o.label}</span>
                  {o.address}
                  {o.note && <span className="block text-orange-300/90">{o.note}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Icon name="clock" className="h-3.5 w-3.5" />
            {site.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
