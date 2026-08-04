import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";
import { OG_BASE } from "../_lib/seo";
import styles from "./page.module.css";

/* Update this whenever the copy below changes. */
const LAST_UPDATED = "4 August 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Frames — uPVC Windows & Doors in Mizoram",
  description:
    "How framesmizoram.in handles visitor information: no forms, no cookies, and anonymous page-view analytics only. Frames supplies and installs uPVC windows and doors in Aizawl and across Mizoram.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    ...OG_BASE,
    title: "Privacy Policy | Frames",
    description:
      "How framesmizoram.in handles visitor information: no forms, no cookies, and anonymous page-view analytics only.",
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
            when you visit framesmizoram.in. The short version: this is a
            single page announcing our launch, it has no forms and sets no
            cookies, and the only thing we measure is anonymous page views.
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
            <p className={styles.body}>
              We do measure how the site is used. For each page view our
              analytics records the page you looked at, the site or search
              engine that sent you here, your approximate location (country,
              region and city), your device type, operating system and browser,
              and the time of the visit. It does not record your IP address, and
              the record cannot be traced back to you.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies and tracking</h2>
            <p className={styles.body}>
              This site sets no cookies and stores nothing in your browser,
              which is why you see no cookie banner. Our analytics is
              deliberately cookieless: rather than saving an identifier on your
              device, it counts a visit using a value derived from the request
              itself, and that value is discarded after 24 hours.
            </p>
            <p className={styles.body}>
              There are no advertising or remarketing tags and no social media
              tracking pixels. Nothing here follows you to other websites or
              builds a profile of you over time.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-party content</h2>
            <p className={styles.body}>
              Everything the page needs — the typeface, the images and the
              stylesheets — is served from our own domain, so viewing this site
              does not send a request to an outside font network or an
              advertising network. There are no embedded maps, videos or chat
              widgets.
            </p>
            <p className={styles.body}>
              The exception is the analytics described above. Its script is also
              served from our own domain, and the anonymous measurements it
              produces go to Vercel, the company that hosts this website, who
              handle them on our behalf.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Server logs</h2>
            <p className={styles.body}>
              Like every website, framesmizoram.in is delivered by a hosting
              provider — Vercel — and that provider automatically records standard
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
              We do not sell, rent or trade personal information. The only
              company that receives anything from this website is Vercel, which
              hosts the site and processes the anonymous page-view measurements
              on our behalf.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Links to other websites</h2>
            <p className={styles.body}>
              Our footer links to our social media profiles. Following one of
              those links takes you off framesmizoram.in, and from that point
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
              it, correct it or have it deleted. This website holds no personal
              information about you: the page-view measurements described above
              are anonymous and cannot be linked back to any individual, so
              there is no record here tied to your identity for us to show,
              correct or delete. If we ever add a form or anything else that
              collects personal details, this policy will explain how to
              exercise those rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to this policy</h2>
            <p className={styles.body}>
              This site will grow into a full website with product information
              and a way to request a quotation. When we add anything that
              collects personal information — an enquiry form, a callback
              request, an embedded map — we will update this policy to describe
              it, and the date below will change.
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
