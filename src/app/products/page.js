import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

export const metadata = {
  title: "Our Products & Fleet",
  description:
    "Explore SolidCore's construction supply range: 10m³ concrete mixer trucks, concrete pumps for 7 to 20+ floors, quality cement supply and heavy-duty logistics.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Fleet"
        title="Everything your build needs"
        description="Browse our four core offerings. Each one is backed by modern equipment, trained operators and dependable logistics. Request a quotation on any of them in minutes."
        image="/gallery/mixer-3.jpeg"
        crumb="Products"
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} priority={i < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Tell us about your project and our team will recommend the right equipment, materials and logistics mix — then quote it."
      />
    </>
  );
}
