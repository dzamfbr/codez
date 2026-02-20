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
                className={`hamburger-button ${menuOpen ? "is-open" : ""}`}
              >
                <span className="sr-only">Open menu</span>
                <Icon
                  icon={menuOpen ? "line-md:close" : "line-md:menu"}
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

      <main className="home">
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="hero-kicker">Hello,</p>
            <h1 className="hero-title">We Are Codez</h1>
            <p className="hero-subtitle">Creative Developer & UI/UX Builder</p>
            <p className="hero-desc">
              2 Years Experience membuat produk digital yang fokus pada performa,
              desain bersih, dan pengalaman pengguna yang jelas.
            </p>
            <div className="hero-actions">
              <a className="hero-cta" href="#contact">
                Let&apos;s talk →
              </a>
            </div>
            <div className="hero-socials">
              <a
                className="hero-social"
                href="https://instagram.com"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" width={18} height={18} />
              </a>
              <a
                className="hero-social"
                href="https://github.com"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" width={18} height={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-ring">
              <Image
                src="/images/logo-codez.png"
                alt="Codez logo"
                width={220}
                height={220}
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
