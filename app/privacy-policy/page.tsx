import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Frames — uPVC Windows & Doors in Mizoram",
  description:
    "How Frames handles visitor information on framesmizoram.com. Frames supplies and installs uPVC windows and doors in Aizawl and across Mizoram.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <main className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Privacy policy</h1>

          <p className={styles.todo}>
            TODO: owner to supply. This page is scaffolding — the sections below
            are placeholders and do not yet describe how Frames handles personal
            data. Replace this copy before the site is promoted.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Who we are</h2>
            <p className={styles.body}>
              Frames supplies and installs uPVC windows and doors in Aizawl and
              across Mizoram, India.
            </p>
            <p className={`${styles.body} ${styles.pending}`}>
              TODO: owner to supply — registered business name, postal address
              and the person responsible for data questions.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What we collect</h2>
            <p className={styles.body}>
              This site has no contact form, account system or newsletter
              signup, so it does not ask visitors for personal information.
            </p>
            <p className={`${styles.body} ${styles.pending}`}>
              TODO: owner to supply — update this section as soon as a form,
              phone-tracking or enquiry flow is added.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies</h2>
            <p className={styles.body}>
              This site does not set analytics or advertising cookies.
            </p>
            <p className={`${styles.body} ${styles.pending}`}>
              TODO: owner to supply — revise if analytics, embedded maps or
              embedded video are added before launch.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-party services</h2>
            <p className={`${styles.body} ${styles.pending}`}>
              TODO: owner to supply — list every third party that receives
              visitor data, including the hosting provider and anything embedded
              in the page, and what each of them does with it.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={`${styles.body} ${styles.pending}`}>
              TODO: owner to supply — the email address or postal address
              visitors should use for privacy enquiries.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Last updated</h2>
            <p className={`${styles.body} ${styles.pending}`}>
              TODO: owner to supply — the date this policy takes effect.
            </p>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
