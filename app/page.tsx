import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "./_components/site-shell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  /* Next normalizes the trailing slash away; the rendered URL is equivalent. */
  alternates: { canonical: "/" },
  openGraph: {
    title: "Frames — uPVC Windows & Doors in Mizoram",
    description:
      "uPVC windows and doors for homes and buildings in Aizawl and across Mizoram. Launching soon.",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A white uPVC tilt-and-turn window with a woman sitting on the sill",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Frames",
  description:
    "Supply and installation of uPVC windows and doors in Aizawl and across Mizoram, India.",
  url: "https://www.framesmizoram.com/",
  areaServed: { "@type": "State", name: "Mizoram" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aizawl",
    addressRegion: "Mizoram",
    addressCountry: "IN",
  },
  knowsAbout: [
    "uPVC windows",
    "uPVC doors",
    "casement windows",
    "sliding windows",
    "tilt and turn windows",
    "window installation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>
        <main className={styles.main}>
          <section className={styles.copy}>
            <div className={styles.tagRow}>
              <span className={`tag tag-accent ${styles.tagText}`}>
                Coming soon
              </span>
            </div>
            <h1 className={styles.title}>
              uPVC windows
              <br />
              &amp; doors for
              <br />
              Mizoram.
            </h1>
            <p className={styles.lead}>
              Bringing German-engineered uPVC windows and doors to Mizoram —
              casement, sliding, tilt-and-turn and fixed glazing, fabricated to
              size and installed by our own team.
            </p>
            <p className={styles.secondary}>
              Built for the way Mizoram weathers: multi-chamber profiles with
              steel reinforcement and EPDM gaskets that hold out monsoon rain and
              hill wind, cut street noise, and never need painting. Homes,
              hotels, offices, schools and institutional projects. Full website —
              systems, glass options, project gallery and quotation requests —
              launching shortly.
            </p>
          </section>

          <aside className={styles.side}>
            <div className={`grayscale ${styles.shot}`}>
              <Image
                src="/window-sill.jpg"
                alt="Woman sitting on a windowsill beside a white uPVC tilt-and-turn window"
                fill
                sizes="(max-width: 1023px) 100vw, 43vw"
              />
            </div>
            <div className={styles.supply}>
              <div className={styles.supplyLabel}>What we supply</div>
              <div className={styles.supplyBody}>
                uPVC casement &amp; sliding windows, tilt-and-turn windows,
                sliding &amp; casement doors, mosquito mesh, double glazing
              </div>
            </div>
          </aside>
        </main>
      </SiteShell>
    </>
  );
}
