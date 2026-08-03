/* A page's `openGraph` replaces the layout's rather than merging with it, so any
   page that sets its own has to spread these back in or it silently loses
   og:type, og:site_name and og:locale. */
export const OG_BASE = {
  type: "website",
  siteName: "Frames",
  locale: "en_IN",
} as const;

/* Canonical origin. Single source of truth — metadataBase, robots.ts, sitemap.ts
   and the JSON-LD all derive from it, so a domain change is a one-line edit. */
export const SITE_URL = "https://www.framesmizoram.in";
