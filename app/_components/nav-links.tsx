"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./chrome.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/windows", label: "Windows" },
  { href: "/doors", label: "Doors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map(({ href, label }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={styles.navLink}
            aria-current={active ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
