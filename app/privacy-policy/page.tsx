import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";
import { OG_BASE } from "../_lib/seo";
import styles from "./page.module.css";

/* Update this whenever the copy below changes. */
const LAST_UPDATED = "3 August 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Frames — uPVC Windows & Doors in Mizoram",
  description:
    "How framesmizoram.com handles visitor information: no forms, no cookies and no tracking. Frames supplies and installs uPVC windows and doors in Aizawl and across Mizoram.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    ...OG_BASE,
    title: "Privacy Policy | Frames",
    description:
      "How framesmizoram.com handles visitor information: no forms, no cookies and no tracking.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <main className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Privacy policy</h1>

          <p className={styles.lead}>
            Frames supplies and installs uPVC windows and doors in Aizawl and
            across Mizoram. This policy covers what happens to your information
            when you visit framesmizoram.com. The short version: this is a
            single page announcing our launch, it has no forms and no tracking,
            and it collects nothing about you.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What we collect</h2>
            <p className={styles.body}>
              Nothing you type, because there is nothing here to type into. This
              website has no contact form, no enquiry or callback form, no
              newsletter signup, no account system and no comments. We do not
              ask for your name, phone number, email address or any other
              personal detail, and we have no way to receive them through this
              website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies and tracking</h2>
            <p className={styles.body}>
              This site sets no cookies at all. It uses no analytics, no
              advertising or remarketing tags and no social media tracking
              pixels, and it stores nothing in your browser. There is no cookie
              banner here because there is nothing to consent to.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-party content</h2>
            <p className={styles.body}>
              Everything the page needs — the typeface, the images and the
              stylesheets — is served from our own domain. Viewing this site
              does not send a request to any outside company such as a font
              network, an analytics provider or an advertising network. There
              are no embedded maps, videos or chat widgets.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Server logs</h2>
            <p className={styles.body}>
              Like every website, framesmizoram.com is delivered by a hosting
              provider, and that provider automatically records standard
              technical details with each request — typically the IP address,
              the browser and device type, the page requested and the time it
              was requested. This happens at the server level for every site you
              visit and is what makes it possible to serve the page and to
              protect it from abuse. We do not use these records for marketing,
              build profiles from them, or combine them with anything else.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Sharing your information</h2>
            <p className={styles.body}>
              We do not sell, rent or trade personal information, and we have
              none from this website to share.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Links to other websites</h2>
            <p className={styles.body}>
              Our footer links to our social media profiles. Following one of
              those links takes you off framesmizoram.com, and from that point
              the privacy policy of the platform you have landed on applies. We
              have no control over how those platforms handle your information,
              and we receive nothing back from them when you click.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your rights</h2>
            <p className={styles.body}>
              Data protection law in India gives you rights over personal
              information a business holds about you, such as the right to see
              it, correct it or have it deleted. Because this website collects
              and stores no personal information about visitors, there is
              nothing here for us to show, correct or delete. If that changes,
              this policy will explain how to exercise those rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to this policy</h2>
            <p className={styles.body}>
              This site will grow into a full website with product information
              and a way to request a quotation. When we add anything that
              collects personal information — an enquiry form, a callback
              request, analytics — we will update this policy to describe it,
              and the date below will change.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.todo}>
              TODO: owner to supply — an email address or phone number for
              privacy questions. Until one is published here, this section is
              incomplete.
            </p>
          </section>

          <section className={styles.section}>
            <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
