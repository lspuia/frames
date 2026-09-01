import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";
import { OG_BASE, SITE_URL } from "../_lib/seo";
import mk from "../_components/marketing.module.css";

export const metadata: Metadata = {
  title: "Contact Frames — uPVC Windows & Doors Quotes in Mizoram",
  description:
    "Get a quote for aluplast uPVC windows and doors in Aizawl and across Mizoram. Reach Frames on Instagram or Facebook — site visits and itemized quotations.",
  alternates: { canonical: "/contact" },
  openGraph: {
    ...OG_BASE,
    title: "Contact Frames",
    description:
      "Site visits and itemized quotations for uPVC windows and doors, anywhere in Mizoram.",
    url: "/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

/* No contact form on purpose: the privacy policy documents exactly what this
   site collects, and a form would change that. When the owner supplies a
   phone number / address, add them to REACH below, to the LocalBusiness
   JSON-LD on the homepage, and check the policy still holds. */
const REACH = [
  {
    label: "Instagram",
    value: "@framesmizoram",
    href: "https://www.instagram.com/framesmizoram/",
  },
  {
    label: "Facebook",
    value: "framesmizoram",
    href: "https://www.facebook.com/framesmizoram/",
  },
  {
    label: "Phone / WhatsApp",
    value: "Number coming soon — DM us meanwhile",
    href: null,
  },
  {
    label: "Showroom",
    value: "Aizawl — address to be announced",
    href: null,
  },
];

const QUOTE_CHECKLIST = [
  {
    title: "Rough sizes",
    body: "Width × height of each opening, even approximate — final sizes come from our site measurement.",
  },
  {
    title: "Photos",
    body: "A photo of each opening from inside and, if easy, outside. Phone photos are fine.",
  },
  {
    title: "What each room needs",
    body: "Which windows should open, where you want mesh, which rooms face the road or the weather.",
  },
  {
    title: "Location & timeline",
    body: "Locality (for the site visit) and when the openings will be ready for installation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>
        <main>
          <header className={mk.pageHero}>
            <p className={mk.kicker}>Contact</p>
            <h1 className={mk.pageTitle}>Get a quote.</h1>
            <p className={mk.intro}>
              Message us on Instagram or Facebook to start — tell us where the
              project is and roughly how many openings, and we&rsquo;ll set up
              a site visit. Every quotation is measured, itemized and in
              writing.
            </p>
          </header>

          <section className={mk.section} aria-labelledby="reach">
            <p className={mk.kicker}>Reach us</p>
            <h2 id="reach" className={mk.heading}>
              Where to find us.
            </h2>
            <div className={mk.grid}>
              {REACH.map(({ label, value, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className={mk.cell}
                  >
                    <span className={mk.cellKicker}>{label}</span>
                    <h3 className={mk.cellTitle}>{value}</h3>
                    <span className={mk.cellMore}>Open →</span>
                  </a>
                ) : (
                  <div key={label} className={mk.cell}>
                    <span className={mk.cellKicker}>{label}</span>
                    <h3 className={mk.cellTitle}>{value}</h3>
                  </div>
                ),
              )}
            </div>
          </section>

          <section className={mk.section} aria-labelledby="checklist">
            <p className={mk.kicker}>Before you message</p>
            <h2 id="checklist" className={mk.heading}>
              What makes a quote fast.
            </h2>
            <p className={mk.intro}>
              None of this is required — but if you have it handy, your
              quotation gets a lot quicker.
            </p>
            <div className={mk.steps}>
              {QUOTE_CHECKLIST.map(({ title, body }) => (
                <div key={title} className={mk.step}>
                  <h3 className={mk.stepTitle}>{title}</h3>
                  <p className={mk.stepBody}>{body}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </SiteShell>
    </>
  );
}
