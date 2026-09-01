import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../_components/site-shell";
import { OG_BASE, SITE_URL } from "../_lib/seo";
import { ALUPLAST } from "../_lib/systems";
import mk from "../_components/marketing.module.css";

export const metadata: Metadata = {
  title: "About Frames — aluplast uPVC Partner in Mizoram",
  description:
    "Frames supplies and installs German-engineered aluplast uPVC windows and doors in Aizawl and across Mizoram — a local team backed by an international systems manufacturer.",
  alternates: { canonical: "/about" },
  openGraph: {
    ...OG_BASE,
    title: "About Frames",
    description:
      "A Mizoram team bringing aluplast's German-engineered uPVC systems to Aizawl and beyond.",
    url: "/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>
        <main>
          <header className={mk.pageHero}>
            <p className={mk.kicker}>About</p>
            <h1 className={mk.pageTitle}>A Mizoram company. A German system.</h1>
            <p className={mk.intro}>
              Frames exists because good windows shouldn&rsquo;t stop at the
              plains. We measure, fabricate and install aluplast uPVC windows
              and doors for homes and buildings in Aizawl and across Mizoram —
              our own local team, backed by one of Europe&rsquo;s leading
              window-profile manufacturers.
            </p>
          </header>

          <section className={mk.section} aria-labelledby="us">
            <p className={mk.kicker}>Frames</p>
            <h2 id="us" className={mk.heading}>
              Local from measurement to service.
            </h2>
            <p className={mk.intro}>
              Every project starts with a site visit in the hills, not a form
              on a website. We know how Mizoram buildings are put together —
              RCC frames, brick infill, retrofits into openings that are never
              quite square — and we fabricate each unit to the opening it will
              actually live in. After installation, we&rsquo;re here: the team
              that fitted your windows is the team that services them.
            </p>
          </section>

          <section className={mk.section} aria-labelledby="brand">
            <p className={mk.kicker}>The brand we build with</p>
            <h2 id="brand" className={mk.heading}>
              aluplast, since 1982.
            </h2>
            <p className={mk.intro}>
              aluplast is a family-owned window-systems manufacturer from
              Karlsruhe, Germany, and one of Europe&rsquo;s leading uPVC
              profile brands. In India, aluplast India Pvt. Ltd. extrudes and
              supports the range locally — so genuine German-engineered
              profile comes with Indian availability and service.
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

          <section className={mk.section} aria-labelledby="area">
            <p className={mk.kicker}>Where we work</p>
            <h2 id="area" className={mk.heading}>
              Based in Aizawl, serving Mizoram.
            </h2>
            <p className={mk.intro}>
              We&rsquo;re based in Aizawl, where most of our work happens, and
              we take on projects elsewhere in Mizoram depending on the site
              and the scope — get in touch and we&rsquo;ll see what&rsquo;s
              possible. Residential, hospitality, institutional and commercial.
            </p>
          </section>

          <section className={mk.cta} aria-labelledby="about-cta">
            <h2 id="about-cta" className={mk.ctaTitle}>
              Talk to us about your project.
            </h2>
            <p className={mk.ctaBody}>
              A house under construction, a single leaky window, or a hundred
              openings on an institutional build — we quote them all the same
              way: measured, itemized, in writing.
            </p>
            <div className={mk.ctaActions}>
              <Link href="/contact" className={mk.ctaPrimary}>
                Contact us
              </Link>
            </div>
          </section>
        </main>
      </SiteShell>
    </>
  );
}
