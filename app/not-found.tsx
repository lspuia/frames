import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "./_components/site-shell";
import styles from "./not-found.module.css";

/* Next already emits `noindex` for not-found, so this only sets the title. */
export const metadata: Metadata = {
  title: "Page not found | Frames",
};

export default function NotFound() {
  return (
    <SiteShell>
      <main className={styles.main}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found.</h1>
        <p className={styles.body}>
          That page does not exist. The full Frames website is launching shortly.
        </p>
        <Link href="/" className={styles.link}>
          Back to the homepage
        </Link>
      </main>
    </SiteShell>
  );
}
