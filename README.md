# SolidCore Construction Supplies — Website

Official marketing & booking website for **SolidCore Construction Supplies Limited** (Kampala, Uganda).
Built with **Next.js 14 (App Router)** + **Tailwind CSS**. Fully responsive, SEO-ready and designed to
drive quotation requests (no public pricing).

## Products featured
1. **10m³ Concrete Mixer Truck** — ready-mix delivery
2. **Concrete Pumps** — line pumps (up to ~7 floors) & boom pumps (20+ floors)
3. **Cement Supply** — bagged & bulk
4. **Logistics & Haulage Truck** — bulk material transport & cross-border logistics

## Pages
`/` Home · `/products` + `/products/[slug]` · `/about` · `/gallery` · `/contact` · `/quote` (booking)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset auto-detects **Next.js** — no configuration needed. Click **Deploy**.
4. Add the custom domain `solidcoreug.com` under Project → Settings → Domains (already configured).

> One environment variable is needed for quote emails: `RESEND_API_KEY` (Vercel → Settings →
> Environment Variables). Without it the site still runs — the form falls back to WhatsApp/email
> buttons and logs submissions to the Vercel function logs.

## Quotation emails (built in)
Every quote request submitted on `/quote` is emailed by `src/app/api/quote/route.js` via
[Resend](https://resend.com) to the addresses in `site.quoteRecipients` (`src/lib/site.js`):
`manager@solidcoreug.com` and `operations@solidcoreug.com`. The client's email is set as
Reply-To so the team can answer directly.

Setup (one-time):
1. In Resend → **Domains** → add `solidcoreug.com` and add the DNS records it gives you at the
   registrar (webstar.ug). Emails send from `quotes@solidcoreug.com`, so the domain must be verified.
2. Create an API key in Resend and set `RESEND_API_KEY` in Vercel → Settings → Environment Variables
   (and in `.env.local` for local development — see `.env.example`).

If the key is missing or delivery fails, the visitor still sees the success screen with
WhatsApp/email fallback buttons, and the request is logged in the Vercel function logs.

## Analytics
Vercel Web Analytics is wired in (`<Analytics />` in `src/app/layout.js`). Enable it once in
Vercel → Project → **Analytics** → Enable. No cookies, no consent banner needed.

## Editing content
- **Company details / contacts / stats / leadership:** `src/lib/site.js`
- **Products (copy, specs, images):** `src/data/products.js`
- **Images & video:** `public/gallery/` — brand logo in `public/brand/`
- **Colours:** `tailwind.config.js` (`navy` + `orange` palettes)

## Notes
- Update the two office WhatsApp/phone numbers and the Nakawa address in `src/lib/site.js` if they change.
- The contact map embed points to Naalya, Kampala — swap the `iframe` `src` in `src/app/contact/page.js`
  for an exact pin if desired.
- Social links in the footer are placeholders (`#`) — set them in `src/lib/site.js` when accounts exist.
