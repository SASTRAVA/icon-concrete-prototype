# Icon Concrete website prototype

A standalone, responsive React, Vite and React Router website for Icon Premier Readymix Concrete in Hyderabad. Each primary destination has its own URL and page content:

- `/` Home
- `/about` About
- `/services` Products & Services
- `/projects` Clients & Projects
- `/plants` Batching Plants
- `/contact` Contact & Request a Quote
- `/gallery` Project Gallery

The site includes an interactive pour planner, concrete volume calculator, validated quote form with a reviewable WhatsApp handoff, filterable project gallery, plant information, breadcrumbs and a custom not-found page. Vite’s build script creates route-specific metadata documents; `public/vercel.json` provides route rewrites for direct visits and refreshes.

## Run locally

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Content and photography

- Replace the Unsplash demonstration images with approved Icon Concrete plant, mixer, pump truck, laboratory and site-pour photos. Each image is marked **REPLACE WITH REAL PHOTO** in the website.
- Update project titles and captions in `src/content.js` only after project names, grades, locations and client permissions are confirmed.
- Client names and testimonial wording are carried over from the existing company website. Add approved client logos only after permission is confirmed.
- The Icon wordmark is a text recreation of the existing mark. Replace it with the supplied logo artwork if a current brand asset is available.
- Update the canonical URL in `index.html` if the public domain changes.

## [CONFIRM WITH CLIENT] items

1. Concrete grades offered and the example applications in the grade guide. The guide is not engineering advice.
2. Geo coordinates and operating hours for the LocalBusiness structured data.
3. Whether the “quote in 30 minutes” response target is accurate.
4. Current accuracy of plant addresses, phone number and email before launch.
5. Client name display, testimonial company attribution, wording and permissions.
6. Actual project details, images, service coverage, pump availability and delivery schedule before adding specific claims.
7. Company mission statement and the exact mix grades offered.

The prototype avoids unverified capacity, fleet, certification and award statistics. The contact form validates the visitor’s details in the browser and prepares a WhatsApp message; the visitor reviews and sends it in WhatsApp.

## What changed

- **Before:** A single blueprint-style pour configurator with unverified operating statistics, an incomplete service catalogue, and placeholder client/project references.
- **After:** A true multi-page, conversion-focused, mobile-first company website with dedicated Home, About, Services, Projects, Plants, Contact and Gallery routes.
- **Design:** Charcoal, concrete grey, warm off-white and restrained orange; stronger type hierarchy, photo placeholders, responsive grids, keyboard focus styles and reduced-motion support.
- **Lead generation:** Quote form collects grade, quantity, pump requirement, location and required date, then offers a reviewable WhatsApp handoff. The planner estimates volume for slabs, footings and columns.
- **SEO:** Route-specific titles, descriptions, canonical URLs and Open Graph metadata, plus a sitemap, robots file and LocalBusiness structured data with visible confirmation fields for unknown facts.
