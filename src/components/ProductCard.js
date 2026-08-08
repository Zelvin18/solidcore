import Image from "next/image";
import Link from "next/link";
import Icon from "./Icons";
import { NAVY_BLUR } from "@/lib/blur";

const iconFor = {
  "concrete-mixer-truck": "mixer",
  "concrete-pumps": "building",
  cement: "bag",
  "logistics-truck": "route",
};

export default function ProductCard({ product, priority = false }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.thumb}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL={NAVY_BLUR}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-700 shadow-sm">
          {product.category}
        </span>
        <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange text-white shadow-lg">
          <Icon name={iconFor[product.slug] || "layers"} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="min-h-[3.5rem] font-display text-lg font-bold leading-tight text-navy-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600 line-clamp-3">{product.short}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-orange transition-all group-hover:gap-2.5">
          View details
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
