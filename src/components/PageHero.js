import Link from "next/link";
import Image from "next/image";
import Icon from "./Icons";
import { NAVY_BLUR } from "@/lib/blur";

export default function PageHero({ eyebrow, title, description, image, crumb }) {
  return (
    <section className="relative overflow-hidden navy-gradient">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            quality={70}
            placeholder="blur"
            blurDataURL={NAVY_BLUR}
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/55 to-navy-900/35" />
        </div>
      )}
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <nav className="flex items-center gap-2 text-sm text-white/60">
          <Link href="/" className="hover:text-orange-300">
            Home
          </Link>
          <Icon name="chevron" className="h-4 w-4" />
          <span className="text-white/90">{crumb || title}</span>
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
