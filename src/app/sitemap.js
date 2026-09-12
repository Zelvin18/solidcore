import { products } from "@/data/products";
import { site } from "@/lib/site";

const base = site.url;

export default function sitemap() {
  const now = new Date();
  const routes = ["", "/products", "/about", "/gallery", "/contact", "/quote"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...productRoutes];
}
