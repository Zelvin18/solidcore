import Link from "next/link";
import Icon from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="navy-gradient">
      <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center text-white">
        <span className="font-display text-7xl font-extrabold text-orange">404</span>
        <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-white/70">
          The page you're looking for has moved or doesn't exist. Let's get you back on solid ground.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/products" className="btn-ghost-light">
            View products
          </Link>
        </div>
      </div>
    </section>
  );
}
