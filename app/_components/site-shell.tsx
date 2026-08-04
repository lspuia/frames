import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./icons";
import styles from "./chrome.module.css";

/* Also listed as `sameAs` in the JSON-LD on the homepage — keep the two in step. */
const INSTAGRAM_URL = "https://www.instagram.com/framesmizoram/";
const FACEBOOK_URL = "https://www.facebook.com/framesmizoram/";

function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Frames — home" className={styles.logoLink}>
        <Image
          src="/frames-logo.png"
          alt="Frames"
          width={320}
          height={108}
          priority
          className={styles.logo}
        />
      </Link>
      <div className={styles.headerMeta}>
        <div>framesmizoram.in</div>
        <div>Aizawl · Mizoram · India</div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener"
          className={styles.footerLink}
        >
          <InstagramIcon />
          Instagram
        </a>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener"
          className={styles.footerLink}
        >
          <FacebookIcon />
          Facebook
        </a>
        <Link href="/privacy-policy" className={styles.footerLink}>
          Privacy policy
        </Link>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Frames · Mizoram, India
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
