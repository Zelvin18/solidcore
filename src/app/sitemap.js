import { products } from "@/data/products";

const base = "https://solidcoreconstruction.co.ug";

export default function sitemap() {
  const routes = ["", "/products", "/about", "/gallery", "/contact", "/quote"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...productRoutes];
}
