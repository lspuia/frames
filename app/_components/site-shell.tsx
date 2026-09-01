import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import { NavLinks } from "./nav-links";
import styles from "./chrome.module.css";

/* Also listed as `sameAs` in the JSON-LD on the homepage — keep the two in step. */
const INSTAGRAM_URL = "https://www.instagram.com/framesmizoram/";
const FACEBOOK_URL = "https://www.facebook.com/framesmizoram/";
/* Same number as /contact and the homepage JSON-LD — change all together. */
const WHATSAPP_URL =
  "https://wa.me/919362663457?text=" +
  encodeURIComponent("Hi Frames — I'd like a quote for uPVC windows.");

function SiteHeader() {
  return (
    <header>
      <div className={styles.header}>
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
      </div>
      <nav aria-label="Main" className={styles.nav}>
        <NavLinks />
        <Link href="/contact" className={styles.navCta}>
          Get a quote
        </Link>
      </nav>
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
      <div className={styles.copyrightRow}>
        <Image
          src="/aluplast-logo.svg"
          alt="aluplast"
          width={836}
          height={385}
          className={styles.footerBrandLogo}
        />
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Frames · Mizoram, India · aluplast uPVC
          systems, supplied &amp; installed
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      className={styles.whatsapp}
    >
      <WhatsAppIcon size={26} />
      <span className={styles.whatsappLabel}>WhatsApp</span>
    </a>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <SiteHeader />
      {children}
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
