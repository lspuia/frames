import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.framesmizoram.com"),
  title: "Frames — uPVC Windows & Doors in Mizoram | Coming Soon",
  description:
    "Frames brings German-engineered uPVC windows and doors to Mizoram — casement, sliding and tilt-and-turn systems built for heavy rain, wind and noise, supplied and installed in Aizawl and across the state. Website launching soon.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Frames",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "IN-MZ",
    "geo.placename": "Aizawl, Mizoram",
  },
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
