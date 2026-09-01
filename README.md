# Frames — framesmizoram.in

Marketing site for **Frames**, a uPVC windows and doors vertical serving Aizawl and
the rest of Mizoram, selling the **aluplast** (Germany) uPVC range. Grew out of the
original single-page coming-soon site; the SEO metadata and structured data still
matter as much as the layout.

Next.js (App Router) + TypeScript, plain CSS, deployed on Vercel.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Layout

```
app/
  layout.tsx              base metadata, Archivo via next/font, global CSS
  page.tsx                homepage: hero, why-uPVC, range, brand, process, CTA
  page.module.css         hero styles (the original coming-soon layout)
  windows/  doors/        the aluplast range, with spec tables and SVG diagrams
  about/  contact/        company story and how to reach us (no form — see below)
  privacy-policy/         policy copy; contact section still TODO
  _lib/seo.ts             SITE_URL + OG_BASE
  _lib/systems.ts         the aluplast range as data: names, specs, copy
  _components/
    site-shell.tsx        header (logo + nav) and footer chrome
    diagrams.tsx          SVG window/door line diagrams (the placeholder imagery)
    marketing.module.css  shared section/grid/CTA primitives for all pages
  robots.ts  sitemap.ts  manifest.ts
styles/
  modernist.css           design-system tokens and components, from the handoff
public/
  frames-logo.png  home-hero.jpg  window-sill.jpg  og-image.jpg  aluplast-logo.svg
```

## Design system

Flat and architectural: mono-red on light warm-gray, **zero border radius anywhere**,
2px dividers, everything flush left, photographs in black and white. Colors come from
the CSS variables in `styles/modernist.css` — take them from there rather than
hard-coding hex values. Archivo is the only typeface; headings 700, body 400,
footer/meta labels 600. Product imagery is currently the SVG line diagrams in
`_components/diagrams.tsx` — replace with real grayscale project photos as they exist.

## Notes for the next change

- **The brand is now public.** The site names aluplast throughout (the old
  coming-soon rule against naming a supplier is retired). Product names, spec
  figures and the finish programme in `app/_lib/systems.ts` come from the
  aluplast India brochures in `_handoff/brochures/` (marked "may be subject to
  change") — check there before editing any number.
- The Instagram and Facebook URLs live in `app/_components/site-shell.tsx` and are
  repeated as `sameAs` in the homepage JSON-LD — change both together.
- **No contact form, on purpose.** The privacy policy documents exactly what the
  site collects; a form (or map embed, or chat widget) makes that copy false.
  If one is added, update `/privacy-policy` and its `LAST_UPDATED` in the same
  commit. The WhatsApp number on `/contact` is repeated as `telephone` in the
  homepage LocalBusiness JSON-LD — change both together. The showroom address is
  still to come; when supplied, add it to both places too.
- Two analytics tools run: `@vercel/analytics` (cookieless) and Google Analytics
  via `@next/third-parties`, whose measurement ID sits in `app/layout.tsx`.
- The policy deliberately does **not** claim Google discards your IP address: Google
  documents that guarantee only for EU/UK/Swiss traffic, and this site's visitors are
  in India.
- The homepage hero is `home-hero.jpg` (from `_handoff/brochures/`, resized to
  2400px) — shown **full colour** as the one deliberate exception to the
  grayscale-photography rule. `window-sill.jpg` is no longer used on any page
  (og-image.jpg derives from it); both are stock — confirm licenses before
  wider use.

## Deploying

Vercel, custom domain `www.framesmizoram.in`, apex `framesmizoram.in` redirecting
to `www`. Domain is verified in Google Search Console; after deploying new routes,
re-submit `sitemap.xml` and request indexing for the new pages.
