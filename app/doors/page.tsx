import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "../_components/site-shell";
import { FinishesSection } from "../_components/finishes";
import { SystemDiagram } from "../_components/diagrams";
import { OG_BASE, SITE_URL } from "../_lib/seo";
import { DOOR_SYSTEMS, type System } from "../_lib/systems";
import mk from "../_components/marketing.module.css";

export const metadata: Metadata = {
  title: "uPVC Doors in Mizoram — smart-slide, vario-slide, lift-slide | Frames",
  description:
    "The aluplast uPVC door range in Mizoram: entrance doors, smart-slide, vario-slide and the panoramic lift-slide 85, in woodec, aludec and decor finishes. Measured, fabricated and installed by Frames.",
  alternates: { canonical: "/doors" },
  openGraph: {
    ...OG_BASE,
    title: "aluplast uPVC Doors in Mizoram",
    description:
      "Casement doors, smart-slide, vario-slide and lift-slide 85 — supplied and installed in Aizawl and across Mizoram.",
    url: "/doors",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Doors", item: `${SITE_URL}/doors` },
      ],
    },
    {
      "@type": "ItemList",
      name: "aluplast uPVC door systems",
      itemListElement: DOOR_SYSTEMS.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: s.name,
          description: s.summary,
          brand: { "@type": "Brand", name: "aluplast" },
        },
      })),
    },
  ],
};

function SystemSection({ system }: { system: System }) {
  return (
    <section className={mk.system} aria-labelledby={system.slug}>
      <div>
        <p className={mk.kicker}>{system.kicker}</p>
        <h2 id={system.slug} className={mk.systemName}>
          {system.name}
        </h2>
        <p className={mk.systemSummary}>{system.summary}</p>
        <p className={mk.bestFor}>{system.bestFor}</p>
      </div>
      <div className={mk.systemAside}>
        <SystemDiagram kind={system.diagram} className={mk.systemDiagram} />
        <a
          href={system.photos}
          target="_blank"
          rel="noopener"
          className={mk.photoLink}
        >
          Photos on aluplast.net ↗
        </a>
        {system.specs.length > 0 && (
          <table className={mk.specTable}>
            <thead>
              <tr>
                <th scope="col">Spec</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {system.specs.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default function DoorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>
        <main>
          <header className={mk.pageHero}>
            <p className={mk.kicker}>The door range</p>
            <h1 className={mk.pageTitle}>aluplast uPVC doors.</h1>
            <p className={mk.intro}>
              From a weather-sealed bathroom door to a glass wall that slides
              away — hinged, sliding and lift-slide systems on the same
              reinforced aluplast profile as the windows, in matching finishes.
            </p>
            <div className={mk.heroBrand}>
              <span className={mk.heroBrandLabel}>Systems by</span>
              <Image
                src="/aluplast-logo.svg"
                alt="aluplast"
                width={836}
                height={385}
                className={mk.heroBrandLogo}
              />
            </div>
          </header>

          {DOOR_SYSTEMS.map((system) => (
            <SystemSection key={system.slug} system={system} />
          ))}

          <FinishesSection />

          <section className={mk.cta} aria-labelledby="doors-cta">
            <h2 id="doors-cta" className={mk.ctaTitle}>
              Match the doors to the windows.
            </h2>
            <p className={mk.ctaBody}>
              Windows and doors from the same system family share sightlines,
              finishes and hardware — the whole elevation reads as one design.
            </p>
            <div className={mk.ctaActions}>
              <Link href="/contact" className={mk.ctaPrimary}>
                Get a quote
              </Link>
              <Link href="/windows" className={mk.ctaSecondary}>
                See the windows
              </Link>
            </div>
          </section>
        </main>
      </SiteShell>
    </>
  );
}
