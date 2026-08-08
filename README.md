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
4. (Optional) Add your custom domain (e.g. `solidcoreconstruction.co.ug`) under Project → Settings → Domains.

> No environment variables are required for the site to run. The quotation form works out of the box
> via WhatsApp/email; the `/api/quote` endpoint logs submissions to the Vercel function logs.

## Wiring the quotation form to email (optional)
The form already lets clients send their request via **WhatsApp** and **email** instantly. To also
receive submissions server-side by email, edit `src/app/api/quote/route.js`. Example using
[Resend](https://resend.com):

```bash
npm install resend
```
```js
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "website@solidcoreconstruction.co.ug",
  to: "operations@solidcoreconstruction.co.ug",
  subject: `Quote request — ${data.name}`,
  text: JSON.stringify(data, null, 2),
});
```
Add `RESEND_API_KEY` in Vercel → Settings → Environment Variables.

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
