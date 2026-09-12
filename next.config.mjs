/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// Content Security Policy — locks the site down to only the sources it actually needs.
// Allows: Google Fonts (styles + font files) and the Google Maps embed (iframe).
// 'unsafe-eval' is only added in local development (Next.js HMR needs it); production is stricter.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "connect-src 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
]
  .join("; ")
  .concat(";");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // No includeSubDomains: mail/ftp/pop subdomains are hosted at the registrar (webstar), not Vercel,
  // and forcing strict HTTPS on them would hard-block the hosting panel/webmail.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // hide the "X-Powered-By: Next.js" fingerprint
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Easy-access shortcuts to the staff POS (hosted separately at webstar).
  async redirects() {
    return [
      { source: "/pos", destination: "https://pos.solidcoreug.com", permanent: true },
      { source: "/staff", destination: "https://pos.solidcoreug.com", permanent: true },
    ];
  },
};

export default nextConfig;
