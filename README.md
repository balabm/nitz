# Nitz The Loft — Auroville

Single-page marketing site for **Nitz The Loft**, a private guesthouse at
Universal Farm House, III Cross, Edayanchavadi, Auroville, Puducherry – 605101.

Built with Next.js 14 (static export), TypeScript, Tailwind CSS, Framer Motion
and React Three Fiber. Deployed to GitHub Pages.

## The Property

- 5 private rooms — 3 ground-floor **Jacuzzi Rooms**, 2 first-floor **Balcony Rooms**
- From ₹4,500/night · Check-in 12:00 PM · Check-out 11:00 AM
- Private bathrooms, AC, Wi-Fi, parking, kettle/tea-coffee, toiletries
- Pet-friendly (subject to property rules) · quiet surroundings
- Meals not included; refreshments on request (chargeable)

## Features

- **Day / Night theme** — toggle swaps the entire photo set (day + night shoots)
- **360° tour** — real photo-sphere viewer built from the HDR panoramas
- **WhatsApp booking** — the booking form opens `wa.me` with a prefilled
  enquiry; every "Book" button deep-links to WhatsApp. No backend required.
- **Google Maps embed** — keyless `output=embed` map of the property
- SEO: Open Graph + `LodgingBusiness` JSON-LD (check-in/out, pets, amenities)
- Responsive, accessible (skip link, aria labels, keyboard-friendly)

## Editing Content

Everything property-specific lives in **`lib/siteConfig.ts`**:

- `site.contact` — phone, WhatsApp number (`wa.me` format, digits only),
  email, Instagram, map URLs. **These are placeholders — replace before launch.**
- `rooms` — names, floors, prices, feature lists
- `sharedAmenities`, `policyCards`, `exploreItems`, `gettingThere` — copy
- `site.geo` — map coordinates (approximate; drop a precise pin)

Photo assignments live in **`lib/mediaAssets.ts`** — `rooms.jacuzzi` /
`rooms.balcony` are best-guess mappings; swap filenames as needed per theme.

## Quick Start

```powershell
npm install
npm run dev        # http://localhost:3000
```

## Build & Deploy (GitHub Pages)

```powershell
npm run build      # static export to ./out
```

The repo is configured for static export (`output: 'export'`,
`NEXT_PUBLIC_BASE_PATH` for project-page hosting). See
`GITHUB_PAGES_WORKFLOW.yml` for the GitHub Actions deploy template.

## Scripts

| Command          | Purpose                    |
| ---------------- | -------------------------- |
| `npm run dev`    | Dev server                 |
| `npm run build`  | Static export to `out/`    |
| `npm run start`  | Serve `out/` locally       |
| `npm run lint`   | ESLint (jsx-a11y enabled)  |
