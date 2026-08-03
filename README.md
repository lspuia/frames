# Frames — coming soon

Single-page coming-soon site for **Frames**, a uPVC windows and doors vertical serving
Aizawl and the rest of Mizoram. It exists mainly so the domain
**https://www.framesmizoram.com** is indexed ahead of the full launch, so the SEO
metadata and structured data matter as much as the layout.

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
  page.tsx                the coming-soon page + LocalBusiness JSON-LD
  page.module.css
  privacy-policy/         scaffolded policy — copy still to be supplied
  _components/            shared header/footer chrome and inlined icons
  robots.ts  sitemap.ts
  icon.svg                favicon, drawn to match the logo block
  globals.css             imports the design system, then page-level base rules
styles/
  modernist.css           design-system tokens and components, from the handoff
public/
  frames-logo.png  window-sill.jpg  og-image.jpg
```

## Design system

Flat and architectural: mono-red on light warm-gray, **zero border radius anywhere**,
2px dividers, everything flush left, photographs in black and white. Colors come from
the CSS variables in `styles/modernist.css` — take them from there rather than
hard-coding hex values. Archivo is the only typeface; headings 700, body 400,
footer/meta labels 600.

## Notes for the next change

- The Instagram and Facebook URLs in `app/_components/site-shell.tsx` are
  **placeholders** — swap them for the real handles.
- The privacy policy is scaffolding. Every section carries a visible
  `TODO: owner to supply`; nothing there is a legal commitment yet.
- `window-sill.jpg` is a stock photo. Confirm the license covers commercial use
  before launch, and replace it with a real project photo when one exists.
- The photo box uses `flex: 1 1 auto` plus a definite `min-height`. With `flex: 1`
  (basis 0) it collapses to 0px inside the auto-height column and the photo vanishes.
- The `object-position` values per breakpoint are deliberate: the source photo is 2:3,
  and at 390px and 820px both the woman and the wooden sill have to stay in frame.
- Do not name any supplier or manufacturer anywhere — copy, metadata, alt text,
  comments or commit messages.

## Deploying

Vercel, custom domain `www.framesmizoram.com`, apex `framesmizoram.com` redirecting
to `www`. After the first deploy: verify the domain in Google Search Console, submit
`sitemap.xml`, then request indexing for `/`.
