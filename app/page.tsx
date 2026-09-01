import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "./_components/site-shell";
import { SystemDiagram } from "./_components/diagrams";
import { OG_BASE, SITE_URL } from "./_lib/seo";
import {
  ALUPLAST,
  DOOR_SYSTEMS,
  EXTRAS,
  WINDOW_SYSTEMS,
} from "./_lib/systems";
import styles from "./page.module.css";
import mk from "./_components/marketing.module.css";

export const metadata: Metadata = {
  /* Next normalizes the trailing slash away; the rendered URL is equivalent. */
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_BASE,
    title: "Frames — aluplast uPVC Windows & Doors in Mizoram",
    description:
      "German-engineered aluplast uPVC windows and doors, measured, fabricated and installed in Aizawl and across Mizoram.",
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

const SUPPLIES = [
  "uPVC casement windows",
  "uPVC sliding windows",
  "Tilt-and-turn windows",
  "uPVC sliding doors",
  "uPVC casement doors",
  "Mosquito mesh",
  "Double glazing",
];

/* Why-uPVC cards — the argument for the material in this climate. */
const CLIMATE_CASE = [
  {
    title: "Built for the monsoon",
    body: "Mizoram gets some of the heaviest rain in India, driven sideways by hill wind. Multi-chamber profiles, double gaskets and proper drainage channels keep it outside — uPVC never swells, rots or rusts.",
  },
  {
    title: "Quiet rooms",
    body: "Compressed gasket seals and optional double glazing cut traffic and street noise to a murmur — the difference is startling on an Aizawl main road.",
  },
  {
    title: "No repainting, ever",
    body: "The color is in the material, not on it. No annual painting, no varnish, no rust streaks down the wall. Soap and water is the whole maintenance schedule.",
  },
  {
    title: "Termite & rot proof",
    body: "uPVC gives termites nothing to eat and humidity nothing to warp. Frames stay square and sashes keep closing flush, year after humid year.",
  },
];

const PROCESS = [
  {
    title: "Site visit & measurement",
    body: "We measure every opening on site in Aizawl or anywhere in Mizoram, and talk through systems, glass and mesh for each room.",
  },
  {
    title: "Quotation",
    body: "A written, itemized quote per window and door — system, glazing, hardware and installation, with no surprises later.",
  },
  {
    title: "Fabrication",
    body: "Each unit is fabricated to your exact sizes from genuine aluplast profiles with steel reinforcement and branded hardware.",
  },
  {
    title: "Installation & handover",
    body: "Our own team installs, seals and finishes each opening, then walks you through operation and care before handover.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Frames",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Frames",
      description:
        "Supply and installation of aluplast uPVC windows and doors in Aizawl and across Mizoram, India.",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/og-image.jpg`,
      logo: `${SITE_URL}/frames-logo.png`,
      /* Ties the social profiles to this business as one entity. Keep in step
         with the URLs in _components/site-shell.tsx. */
      sameAs: [
        "https://www.instagram.com/framesmizoram/",
        "https://www.facebook.com/framesmizoram/",
      ],
      brand: { "@type": "Brand", name: "aluplast" },
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
        "aluplast uPVC systems",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "aluplast uPVC windows and doors",
        itemListElement: SUPPLIES.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name, brand: "aluplast" },
        })),
      },
    },
  ],
};

/* The range strip shows one representative entry per family; the detail
   lives on /windows and /doors. */
const RANGE = [
  { ...WINDOW_SYSTEMS[0], href: "/windows" },
  { ...WINDOW_SYSTEMS[1], href: "/windows" },
  { ...WINDOW_SYSTEMS[2], href: "/windows" },
  { ...DOOR_SYSTEMS[1], href: "/doors" },
  { ...DOOR_SYSTEMS[3], href: "/doors" },
  { ...EXTRAS[1], href: "/windows" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>
        <main>
          {/* — hero — */}
          <section className={styles.main}>
            <div className={styles.copy}>
              <div className={styles.tagRow}>
                <span className={`tag tag-accent ${styles.tagText}`}>
                  German engineering · Fitted in Mizoram
                </span>
              </div>
              <h1 className={styles.title}>
                aluplast uPVC
                <br />
                windows &amp; doors
                <br />
                for Mizoram.
              </h1>
              <p className={styles.lead}>
                Frames brings aluplast — one of Europe&rsquo;s leading uPVC
                window systems, engineered in Germany since 1982 — to Aizawl
                and the rest of Mizoram. Casement, sliding, tilt-and-turn and
                panoramic lift-slide, fabricated to size and installed by our
                own team.
              </p>
              <p className={styles.secondary}>
                Built for the way Mizoram weathers: multi-chamber profiles with
                steel reinforcement and double gasket seals that hold out
                monsoon rain and hill wind, cut street noise, and never need
                painting. Homes, hotels, offices, schools and institutional
                projects.
              </p>
            </div>

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
                <h2 className={styles.supplyLabel}>What we supply</h2>
                <div className={styles.supplyBody}>
                  uPVC casement &amp; sliding windows, tilt-and-turn windows,
                  sliding &amp; casement doors, mosquito mesh, double glazing
                </div>
              </div>
            </aside>
          </section>

          {/* — why uPVC here — */}
          <section className={mk.section} aria-labelledby="why-upvc">
            <p className={mk.kicker}>Why uPVC in Mizoram</p>
            <h2 id="why-upvc" className={mk.heading}>
              Made for hills, rain and years of it.
            </h2>
            <p className={mk.intro}>
              Wood warps and feeds termites. Steel and aluminium sweat, rattle
              and streak rust down the wall. uPVC was engineered for exactly
              this kind of weather — and aluplast has been refining it for
              four decades.
            </p>
            <div className={mk.grid}>
              {CLIMATE_CASE.map(({ title, body }) => (
                <div key={title} className={mk.cell}>
                  <h3 className={mk.cellTitle}>{title}</h3>
                  <p className={mk.cellBody}>{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* — the range — */}
          <section className={mk.section} aria-labelledby="range">
            <p className={mk.kicker}>The range</p>
            <h2 id="range" className={mk.heading}>
              A system for every opening.
            </h2>
            <p className={mk.intro}>
              The full aluplast catalogue — from the IDEAL casement series to
              the panoramic lift-slide 85 — in white, woodgrain foils and
              aluminium-look finishes.
            </p>
            <div className={mk.grid}>
              {RANGE.map((item) => (
                <div key={item.slug} className={mk.cell}>
                  <SystemDiagram kind={item.diagram} className={mk.diagram} />
                  <a
                    href={item.photos}
                    target="_blank"
                    rel="noopener"
                    className={mk.photoLink}
                  >
                    Photos on aluplast.net ↗
                  </a>
                  <span className={mk.cellKicker}>{item.kicker}</span>
                  <h3 className={mk.cellTitle}>{item.name}</h3>
                  <p className={mk.cellBody}>{item.bestFor}</p>
                  <Link href={item.href} className={mk.cellMore}>
                    {item.href === "/doors" ? "All doors →" : "All windows →"}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* — why aluplast — */}
          <section className={mk.section} aria-labelledby="why-aluplast">
            <p className={mk.kicker}>The brand</p>
            <h2 id="why-aluplast" className={mk.heading}>
              Why aluplast.
            </h2>
            <p className={mk.intro}>
              aluplast is a family-owned German manufacturer and one of
              Europe&rsquo;s leading uPVC profile systems — extruded and
              supported in India by aluplast India Pvt. Ltd. Every Frames
              window is fabricated from genuine aluplast profile.
            </p>
            <div className={mk.facts}>
              {ALUPLAST.facts.map(([figure, body]) => (
                <div key={figure} className={mk.fact}>
                  <p className={mk.factFigure}>{figure}</p>
                  <p className={mk.factBody}>{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* — process — */}
          <section className={mk.section} aria-labelledby="process">
            <p className={mk.kicker}>How it works</p>
            <h2 id="process" className={mk.heading}>
              From measurement to handover.
            </h2>
            <div className={mk.steps}>
              {PROCESS.map(({ title, body }) => (
                <div key={title} className={mk.step}>
                  <h3 className={mk.stepTitle}>{title}</h3>
                  <p className={mk.stepBody}>{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* — CTA — */}
          <section className={mk.cta} aria-labelledby="cta">
            <h2 id="cta" className={mk.ctaTitle}>
              Planning windows for a build or renovation?
            </h2>
            <p className={mk.ctaBody}>
              Tell us about your project — we&rsquo;ll visit, measure and put
              together an itemized quotation for every opening. Aizawl and all
              of Mizoram.
            </p>
            <div className={mk.ctaActions}>
              <Link href="/contact" className={mk.ctaPrimary}>
                Get a quote
              </Link>
              <Link href="/windows" className={mk.ctaSecondary}>
                Explore the range
              </Link>
            </div>
          </section>
        </main>
      </SiteShell>
    </>
  );
}
