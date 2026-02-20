"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Project", href: "#project" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="page-root">
      <header ref={headerRef} className="site-header">
        <div className="nav-surface">
          <nav className="nav-wrap">
            <div className="logo-block">
              <Image
                src="/images/logo-codez.png"
                alt="Codez logo"
                width={36}
                height={36}
                priority
              />
              <span className="logo-text">Codez</span>
            </div>

            <div className="nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="nav-actions">
              <a
                href="#donate"
                className="donate-button"
              >
                Donate
              </a>
              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="hamburger-button"
              >
                <span className="sr-only">Open menu</span>
                <Icon
                  icon={
                    menuOpen
                      ? "line-md:menu-to-close-transition"
                      : "line-md:close-to-menu-transition"
                  }
                  className="hamburger-icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </nav>
        </div>

        <div className="mobile-menu">
          <div
            className={`mobile-panel ${
              menuOpen
                ? "mobile-panel-open"
                : "mobile-panel-closed"
            }`}
          >
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
