"use client";

import Image from "next/image";
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
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="page-root">
      <nav ref={navRef} className={menuOpen ? "active" : ""}>
        <div className="nav-bar">
          <i
            className="bx bx-menu sidebarOpen"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            role="button"
          />
          <span className="logo navLogo">
            <a href="#home" className="logo-link">
              <Image
                src="/images/logo-codez.png"
                alt="Codez logo"
                width={28}
                height={28}
                priority
              />
              <span>Codez</span>
            </a>
          </span>

          <div className="menu">
            <div className="logo-toggle">
              <span className="logo">
                <a href="#home" className="logo-link">
                  <Image
                    src="/images/logo-codez.png"
                    alt="Codez logo"
                    width={24}
                    height={24}
                  />
                  <span>Codez</span>
                </a>
              </span>
              <i
                className="bx bx-x siderbarClose"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                role="button"
              />
            </div>

            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a className="donate-action" href="https://saweria.co/mycodezid">
            <i className="bx bx-donate-heart" aria-hidden="true" />
            <span>Donate</span>
          </a>
        </div>
      </nav>

      <main className="home" id="home">
        <section className="hero">
          <div className="hero-left">
            <p className="hero-kicker">Hello,</p>
            <h1 className="hero-title">I am Codez</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet.</p>
            <p className="hero-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              corrupti nesciunt veritatis quae odit ducimus?
            </p>
            <div className="hero-actions">
              <a className="hero-cta" href="#contact">
                Selengkapnya
              </a>
            </div>
            <div className="hero-socials">
              <a
                className="hero-social hero-social--instagram"
                href="https://www.instagram.com/dzamfbr/"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram" />
              </a>
              <a
                className="hero-social hero-social--github"
                href="https://github.com/dzamfbr"
                aria-label="GitHub"
              >
                <i className="bx bxl-github" />
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-logo">
              <Image
                src="/images/logo-codez.png"
                alt="Codez logo"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
