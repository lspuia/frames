import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frames — uPVC Windows & Doors in Mizoram",
    short_name: "Frames",
    description:
      "uPVC windows and doors for homes and buildings in Aizawl and across Mizoram. Launching soon.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f2f2",
    theme_color: "#f3f2f2",
    lang: "en-IN",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
