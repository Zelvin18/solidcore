import Image from "next/image";
import Link from "next/link";

export default function Logo({ variant = "dark", className = "" }) {
  const isLight = variant === "light";
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`} aria-label="SolidCore home">
      <span className="relative block h-11 w-11 overflow-hidden rounded-xl bg-white ring-1 ring-navy-100 shadow-sm sm:h-12 sm:w-12">
        <Image
          src="/brand/logo.jpeg"
          alt="SolidCore Construction Supplies logo"
          fill
          sizes="48px"
          className="object-contain p-0.5"
          priority
        />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-base font-extrabold tracking-tight sm:text-lg ${
            isLight ? "text-white" : "text-navy-800"
          }`}
        >
          SolidCore
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${
            isLight ? "text-white/70" : "text-navy-400"
          }`}
        >
          Construction Supplies
        </span>
      </span>
    </Link>
  );
}
