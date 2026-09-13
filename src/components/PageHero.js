import Link from "next/link";
import Image from "next/image";
import Icon from "./Icons";
import { NAVY_BLUR } from "@/lib/blur";
import { site } from "@/lib/site";

/**
 * Inner-page banner with a breadcrumb trail. `trail` lists intermediate
 * levels (e.g. [{ name: "Products", href: "/products" }]); the current page
 * is always appended. Emits BreadcrumbList structured data for search engines.
 */
export default function PageHero({ eyebrow, title, description, image, crumb, trail = [], alt }) {
  const current = crumb || title;
  const items = [{ name: "Home", href: "/" }, ...trail, { name: current, href: null }];
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: `${site.url}${it.href}` } : {}),
    })),
  };

  return (
    <section className="relative overflow-hidden navy-gradient">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={alt || `${title} — ${site.name}, Kampala, Uganda`}
            fill
            sizes="100vw"
            quality={70}
            placeholder="blur"
            blurDataURL={NAVY_BLUR}
            className="object-cover object-center opacity-80 lg:opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/50 to-navy-950/85 lg:bg-gradient-to-r lg:from-navy-950/85 lg:via-navy-950/55 lg:to-navy-900/35" />
        </div>
      )}
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60">
          {items.map((it, i) => (
            <span key={it.name} className="flex items-center gap-2">
              {i > 0 && <Icon name="chevron" className="h-4 w-4" />}
              {it.href ? (
                <Link href={it.href} className="hover:text-orange-300">
                  {it.name}
                </Link>
              ) : (
                <span className="text-white/90" aria-current="page">
                  {it.name}
                </span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow mt-6 text-orange-300">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
        )}
      </div>
    </section>
  );
}
