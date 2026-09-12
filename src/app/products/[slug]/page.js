import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProductGallery from "@/components/ProductGallery";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { products, getProduct } from "@/data/products";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  const canonical = `/products/${product.slug}`;
  return {
    title: `${product.name} in Kampala, Uganda`,
    description: `${product.short} Supplied by SolidCore Construction Supplies across Uganda. Request a free quotation.`,
    alternates: { canonical },
    openGraph: {
      title: `${product.name} — SolidCore Construction Supplies`,
      description: product.short,
      url: canonical,
      images: [{ url: product.hero, alt: product.name }],
    },
  };
}

export default function ProductDetail({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.tagline}
        image={product.hero}
        crumb={product.name}
      />

      {/* Overview */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <ProductGallery images={product.images} name={product.name} />
          </Reveal>

          <Reveal delay={100}>
            <span className="eyebrow">Overview</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              {product.short}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">{product.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/quote?product=${product.slug}`} className="btn-primary">
                {product.cta}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(`Hello SolidCore, I'd like a quotation for the ${product.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-[#25D366]" />
                Quick WhatsApp quote
              </a>
            </div>

            {/* Specs */}
            <dl className="mt-10 divide-y divide-navy-100 rounded-2xl border border-navy-100">
              {product.specs.map((s) => (
                <div key={s.label} className="flex items-start justify-between gap-4 px-5 py-4">
                  <dt className="text-sm font-semibold text-navy-500">{s.label}</dt>
                  <dd className="text-right text-sm font-semibold text-navy-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Pump tiers (only for concrete pumps) */}
      {product.tiers && (
        <section className="section bg-navy-50/60">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="eyebrow">Choose your reach</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Two pump classes for every building height
              </h2>
              <p className="mt-4 text-lg text-navy-600">
                We match the right pump to your site — from tight mid-rise plots to towering high-rise pours.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {product.tiers.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 100}>
                  <div className="card h-full p-8">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-white">
                      <Icon name={i === 0 ? "route" : "building"} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{tier.name}</h3>
                    <p className="mt-3 text-navy-600">{tier.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {tier.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-navy-700">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights + use cases */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Key features</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              Why crews rely on it
            </h2>
            <ul className="mt-8 space-y-4">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-navy-700">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="card h-full p-8">
              <span className="eyebrow">Ideal for</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                Put to work on
              </h3>
              <div className="mt-8 grid gap-4">
                {product.useCases.map((u) => (
                  <div key={u} className="flex items-center gap-3 rounded-xl bg-navy-50 p-4">
                    <Icon name="spark" className="h-5 w-5 shrink-0 text-orange" />
                    <span className="text-sm font-medium text-navy-800">{u}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other products */}
      <section className="section bg-navy-50/60">
        <div className="container-x">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Explore more of our range
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-100 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.thumb} alt={p.name} className="h-full w-full object-cover" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-navy-900 group-hover:text-orange">
                    {p.name}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-orange">
                    View <Icon name="arrow" className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to book the ${product.name}?`}
        text="Send us your project details and we'll return a tailored, no-obligation quotation — usually within 24 hours."
        product={product.name}
      />
    </>
  );
}
