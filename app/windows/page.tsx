import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "../_components/site-shell";
import { FinishesSection } from "../_components/finishes";
import { SystemDiagram } from "../_components/diagrams";
import { OG_BASE, SITE_URL } from "../_lib/seo";
import { EXTRAS, WINDOW_SYSTEMS, type System } from "../_lib/systems";
import mk from "../_components/marketing.module.css";

export const metadata: Metadata = {
  title: "uPVC Windows in Mizoram — Casement, Sliding, Tilt & Turn | Frames",
  description:
    "The aluplast uPVC window range in Mizoram: IDEAL series casement, prima-slide and easy-slide sliding, tilt-and-turn and fixed glazing, in woodec, aludec and decor finishes. Measured, fabricated and installed by Frames.",
  alternates: { canonical: "/windows" },
  openGraph: {
    ...OG_BASE,
    title: "aluplast uPVC Windows in Mizoram",
    description:
      "IDEAL series casement, sliding, tilt-and-turn and fixed glazing in woodec, aludec and decor finishes — supplied and installed in Aizawl and across Mizoram.",
    url: "/windows",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Windows", item: `${SITE_URL}/windows` },
      ],
    },
    {
      "@type": "ItemList",
      name: "aluplast uPVC window systems",
      itemListElement: [...WINDOW_SYSTEMS, ...EXTRAS].map((s, i) => ({
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

export default function WindowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>
        <main>
          <header className={mk.pageHero}>
            <p className={mk.kicker}>The window range</p>
            <h1 className={mk.pageTitle}>aluplast uPVC windows.</h1>
            <p className={mk.intro}>
              Four ways to open — or not open — every room in the house, all on
              genuine aluplast profile with galvanized steel reinforcement.
              Every window is made to your measured sizes; nothing here is
              off-the-shelf.
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

          {WINDOW_SYSTEMS.map((system) => (
            <SystemSection key={system.slug} system={system} />
          ))}

          <section className={mk.section} aria-labelledby="extras">
            <p className={mk.kicker}>For every system</p>
            <h2 id="extras" className={mk.heading}>
              Mesh &amp; glass.
            </h2>
            <div className={mk.grid}>
              {EXTRAS.map((item) => (
                <div key={item.slug} className={mk.cell}>
                  <SystemDiagram kind={item.diagram} className={mk.diagram} />
                  <span className={mk.cellKicker}>{item.kicker}</span>
                  <h3 className={mk.cellTitle}>{item.name}</h3>
                  <p className={mk.cellBody}>{item.summary}</p>
                  <a
                    href={item.photos}
                    target="_blank"
                    rel="noopener"
                    className={mk.photoLink}
                  >
                    Photos on aluplast.net ↗
                  </a>
                </div>
              ))}
            </div>
          </section>

          <FinishesSection />

          <section className={mk.cta} aria-labelledby="windows-cta">
            <h2 id="windows-cta" className={mk.ctaTitle}>
              Not sure which system fits your rooms?
            </h2>
            <p className={mk.ctaBody}>
              That&rsquo;s what the site visit is for. We&rsquo;ll look at each
              opening, the weather it faces and how you use the room, and
              recommend a system for each.
            </p>
            <div className={mk.ctaActions}>
              <Link href="/contact" className={mk.ctaPrimary}>
                Book a site visit
              </Link>
              <Link href="/doors" className={mk.ctaSecondary}>
                See the doors
              </Link>
            </div>
          </section>
        </main>
      </SiteShell>
    </>
  );
}
