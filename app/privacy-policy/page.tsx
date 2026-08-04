import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";
import { OG_BASE } from "../_lib/seo";
import styles from "./page.module.css";

/* Update this whenever the copy below changes. */
const LAST_UPDATED = "4 August 2026";

const GA_OPT_OUT_URL = "https://tools.google.com/dlpage/gaoptout";

export const metadata: Metadata = {
  title: "Privacy Policy | Frames — uPVC Windows & Doors in Mizoram",
  description:
    "How framesmizoram.in handles visitor information: what Google Analytics and Vercel Analytics record, the cookies they set, and how to opt out. Frames supplies and installs uPVC windows and doors in Aizawl and across Mizoram.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    ...OG_BASE,
    title: "Privacy Policy | Frames",
    description:
      "What framesmizoram.in records about your visit, the cookies it sets, and how to opt out.",
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
            when you visit framesmizoram.in. The short version: this page has no
            forms, so we never ask you for personal details — but we do measure
            how the site is used, and one of those tools sets cookies.
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
              We use two measurement tools — Google Analytics and Vercel Web
              Analytics. Between them they record, for each page view, the page
              you looked at, the site or search engine that sent you here, your
              approximate location, your device type, operating system and
              browser, and the time of the visit. We see the results only as
              totals and trends; neither tool tells us who you are.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies</h2>
            <p className={styles.body}>
              Google Analytics sets two cookies in your browser:{" "}
              <code>_ga</code>, which lets it tell one visitor from another, and{" "}
              <code>_ga_</code> followed by an identifier, which keeps track of a
              single visit. Google&rsquo;s default lifetime for both is two
              years, though browsers cut this down in practice — Chrome caps
              them at 400 days, and Safari at seven days if you do not come
              back.
            </p>
            <p className={styles.body}>
              Vercel Web Analytics, the second tool, is cookieless. Instead of
              storing anything on your device it counts a visit using a value
              derived from the request itself, and discards it after 24 hours.
            </p>
            <p className={styles.body}>
              We set no advertising or remarketing cookies, and there are no
              social media tracking pixels on this site.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Opting out</h2>
            <p className={styles.body}>
              If you would rather not be counted by Google Analytics, Google
              publishes an official opt-out browser add-on at{" "}
              <a href={GA_OPT_OUT_URL} target="_blank" rel="noopener">
                tools.google.com/dlpage/gaoptout
              </a>
              , which stops data being sent from any site you visit, not just
              this one. Your browser settings also let you block or delete
              cookies for an individual site, and any content or ad blocker that
              blocks Google Analytics will stop it loading here.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-party content</h2>
            <p className={styles.body}>
              The page itself is served entirely from our own domain — the
              typeface, the images and the stylesheets all come from us, so none
              of that reaches an outside company. There are no embedded maps,
              videos or chat widgets.
            </p>
            <p className={styles.body}>
              The measurement tools are the exception. Google Analytics is
              loaded from Google&rsquo;s servers, which means Google receives
              information about your visit, including your IP address, which it
              uses to work out your approximate location. What Google then does
              with that data is governed by its own privacy policy. Vercel Web
              Analytics is served from our own domain and sends its anonymous
              measurements to Vercel.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Server logs</h2>
            <p className={styles.body}>
              Like every website, framesmizoram.in is delivered by a hosting
              provider — Vercel — and that provider automatically records
              standard technical details with each request: typically the IP
              address, the browser and device type, the page requested and the
              time it was requested. This happens at the server level for every
              site you visit and is what makes it possible to serve the page and
              to protect it from abuse. We do not use these records for
              marketing, build profiles from them, or combine them with anything
              else.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Sharing your information</h2>
            <p className={styles.body}>
              We do not sell, rent or trade personal information. Two companies
              receive data from this website: Vercel, which hosts it and
              processes the page-view measurements, and Google, which provides
              Google Analytics. Each handles that data under its own privacy
              policy.
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
              it, correct it or have it deleted. We hold no name, phone number
              or email address for you, because this site never asks for one,
              and the analytics reaches us only as totals and trends that we
              cannot trace back to any individual. If you would prefer not to be
              counted at all, see &ldquo;Opting out&rdquo; above. If we later add
              a form or anything else that collects personal details directly,
              this policy will explain how to exercise those rights.
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
