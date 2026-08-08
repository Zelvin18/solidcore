"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icons";
import { mainNav, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-orange"
                  : "text-navy-700 hover:bg-navy-50 hover:text-navy-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phonePrimaryRaw}`} className="flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-orange">
            <Icon name="phone" className="h-4 w-4" />
            {site.phonePrimary}
          </a>
          <Link href="/quote" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy-800 ring-1 ring-navy-100 hover:bg-navy-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-16 bg-navy-950/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <div
          className={`absolute inset-x-0 top-16 origin-top border-t border-navy-100 bg-white shadow-xl transition-all duration-300 sm:top-20 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="container-x flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-orange-50 text-orange"
                    : "text-navy-800 hover:bg-navy-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-navy-100 pt-4">
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className="flex items-center gap-2 px-4 text-sm font-semibold text-navy-700"
              >
                <Icon name="phone" className="h-4 w-4 text-orange" />
                {site.phonePrimary}
              </a>
              <Link href="/quote" className="btn-primary w-full">
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
