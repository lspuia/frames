import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SITE_URL } from "./_lib/seo";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Frames — uPVC Windows & Doors in Mizoram | Coming Soon",
  description:
    "Frames brings German-engineered uPVC windows and doors to Mizoram — casement, sliding and tilt-and-turn systems built for heavy rain, wind and noise, supplied and installed in Aizawl and across the state. Website launching soon.",
  applicationName: "Frames",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google use a full-size image preview and an unclipped snippet.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Frames",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "IN-MZ",
    "geo.placename": "Aizawl, Mizoram",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f2f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
