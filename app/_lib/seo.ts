/* A page's `openGraph` replaces the layout's rather than merging with it, so any
   page that sets its own has to spread these back in or it silently loses
   og:type, og:site_name and og:locale. */
export const OG_BASE = {
  type: "website",
  siteName: "Frames",
  locale: "en_IN",
} as const;

export const SITE_URL = "https://www.framesmizoram.com";
