/* A page's `openGraph` replaces the layout's rather than merging with it, so any
   page that sets its own has to spread these back in or it silently loses
   og:type, og:site_name and og:locale. */
import type { Metadata } from "next";

export const OG_BASE = {
  type: "website",
  siteName: "Frames",
  locale: "en_IN",
  /* Default share image — pages with a more specific one override `images`
     after spreading this. Without it, any page whose openGraph lacks `images`
     ships no og:image at all (a page's openGraph replaces the layout's). */
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Bright living room with floor-to-ceiling uPVC glazing opening onto a lawn",
    },
  ],
} satisfies NonNullable<Metadata["openGraph"]>;

/* Canonical origin. Single source of truth — metadataBase, robots.ts, sitemap.ts
   and the JSON-LD all derive from it, so a domain change is a one-line edit. */
export const SITE_URL = "https://www.framesmizoram.in";
