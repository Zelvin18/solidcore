"use client";

import { useState } from "react";
import Image from "next/image";
import { NAVY_BLUR } from "@/lib/blur";

export default function ProductGallery({ images = [], name }) {
  const [active, setActive] = useState(0);
  if (!images.length) return null;

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-100">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${name} — view ${active + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL={NAVY_BLUR}
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-xl ring-2 transition-all ${
                i === active ? "ring-orange" : "ring-transparent hover:ring-navy-200"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={img} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
