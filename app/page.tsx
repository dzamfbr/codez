"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skils", href: "#skils" },
  { label: "Project", href: "#project" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Contact", href: "#contact" },
];

const skillItems = [
  {
    name: "HTML",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    color: "227, 79, 38",
  },
  {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css/1572B6",
    color: "21, 114, 182",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    color: "247, 223, 30",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    color: "55, 118, 171",
  },
  {
    name: "Flask",
    icon: "https://cdn.simpleicons.org/flask/FFFFFF",
    color: "221, 221, 221",
  },
  {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    color: "68, 121, 161",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    color: "240, 80, 50",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
    color: "201, 208, 218",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
    color: "242, 78, 30",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
    color: "226, 226, 226",
  },
  {
    name: "XAMPP",
    icon: "https://cdn.simpleicons.org/xampp/FB7A24",
    color: "251, 122, 36",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    color: "226, 226, 226",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,#334b74_0%,#283a60_35%,#1f2a4a_100%)] pt-[90px]">
      <nav className="fixed left-0 top-0 z-[100] h-[70px] w-full bg-[#242526]">
        <div className="mx-auto flex h-full w-full max-w-[1000px] items-center justify-between px-[30px]">
          <a
            href="#home"
            className="inline-flex items-center gap-2.5 text-white"
          >
            <Image
              src="/images/logo-codez.png"
              alt="Codez logo"
              width={28}
              height={28}
              priority
            />
            <span className="text-[25px] font-medium">Codez</span>
          </a>

          <ul className="flex items-center max-[790px]:hidden">
            {navLinks.map((link) => (
              <li key={link.label} className="mx-[5px] list-none">
                <a
                  href={link.href}
                  className="relative px-[10px] py-[10px] text-[17px] font-normal text-white no-underline after:absolute after:bottom-0 after:left-1/2 after:h-[6px] after:w-[6px] after:-translate-x-1/2 after:rounded-full after:bg-white after:opacity-0 after:transition-opacity hover:after:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#8fb3e2] px-[14px] py-2 text-sm font-semibold text-[#10131c] no-underline"
              href="https://saweria.co/mycodezid"
            >
              <span>Donate</span>
              <i
                className="bx bx-donate-heart text-[18px]"
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="hidden cursor-pointer border-0 bg-transparent p-1 text-[25px] text-white max-[790px]:inline-flex"
            >
              <i className="bx bx-menu" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[90] bg-black/35 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-[110] h-full w-[220px] bg-[#242526] p-5 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-5 flex items-center justify-between">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-white no-underline"
          >
            <Image
              src="/images/logo-codez.png"
              alt="Codez logo"
              width={24}
              height={24}
            />
            <span className="text-[20px] font-medium">Codez</span>
          </a>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="border-0 bg-transparent p-1 text-[24px] text-white"
          >
            <i className="bx bx-x" />
          </button>
        </div>

        <ul className="flex flex-col pt-2">
          {navLinks.map((link) => (
            <li key={link.label} className="list-none">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[17px] font-normal text-white no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main
        id="home"
        className="mx-auto w-full max-w-[1200px] px-8 pb-20 pt-[60px] max-[900px]:px-5"
      >
        <section className="mt-[70px] grid grid-cols-[1.2fr_0.8fr] items-center gap-20 max-[900px]:grid-cols-1">
          <div className="text-white">
            <p className="text-[22px] uppercase tracking-[0.3em] text-white/70">
              Hello,
            </p>
            <h1 className="mt-[10px] text-[64px] font-semibold [font-family:'Gveret_Levin',Poppins,sans-serif]">
              I am Codez
            </h1>
            <p className="mt-4 text-2xl font-medium text-white/85">
              Web Developer
            </p>
            <p className="mt-4 max-w-[640px] text-[18px] leading-[1.7] text-white/70">
              Menyediakan layanan pembuatan dan pengembangan website yang cepat,
              responsif, dan sesuai kebutuhan bisnis Anda.
            </p>

            <div className="mt-7">
              <a
                className="inline-flex items-center justify-center rounded-[30px] bg-[#8fb3e2] px-8 py-[14px] text-base font-semibold text-[#10131c] no-underline"
                href="#contact"
              >
                Selengkapnya
              </a>
            </div>

            <div className="mt-6 flex gap-[14px]">
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[20px] text-white transition hover:-translate-y-0.5 hover:bg-[#e1306c]"
                href="https://www.instagram.com/dzamfbr/"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram" />
              </a>
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[20px] text-white transition hover:-translate-y-0.5 hover:bg-[#24292f]"
                href="https://github.com/dzamfbr"
                aria-label="GitHub"
              >
                <i className="bx bxl-github" />
              </a>
            </div>
          </div>

          <div className="flex justify-center max-[900px]:hidden">
            <Image
              src="/images/logo-codez.png"
              alt="Codez logo"
              width={380}
              height={380}
              className="h-[380px] w-[380px] object-contain"
              priority
            />
          </div>
        </section>

        <section
          id="about"
          className="mt-[120px] flex justify-center max-[900px]:mt-[90px]"
        >
          <div className="w-full max-w-[760px] text-center text-white">
            <h2 className="relative mb-6 inline-block pb-[10px] text-[38px] font-semibold tracking-[0.01em] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[84px] after:-translate-x-1/2 after:rounded-full after:bg-[#8fb3e2] max-[900px]:text-[30px]">
              About Us
            </h2>

            <p className="text-[17px] leading-[1.8] text-white/80 max-[900px]:text-base">
              Codez is a professional web development service dedicated to
              building modern, high-performance, and scalable websites tailored
              to business needs. In today&apos;s fast-paced digital world,
              having a strong online presence is essential, and we focus on
              delivering websites that are visually compelling, fully
              responsive, and optimized for speed and functionality. Every
              project is crafted with attention to detail to ensure seamless
              performance across all devices and platforms.
            </p>

            <p className="mt-3 text-[17px] leading-[1.8] text-white/80 max-[900px]:text-base">
              We provide solutions ranging from landing pages and company
              profiles to e-commerce platforms and custom web applications. By
              combining clean code principles, structured architecture, and
              user-centered design, Codez helps businesses strengthen their
              credibility, improve customer engagement, and achieve sustainable
              growth. Our goal is not only to develop websites, but to create
              impactful digital experiences that deliver real value and
              measurable results.
            </p>
          </div>
        </section>

        <section
          id="skils"
          className="mt-[120px] flex justify-center pb-10 max-[900px]:mt-[90px]"
        >
          <div className="w-full max-w-[860px] text-center text-white">
            <h2 className="relative mb-8 inline-block pb-[10px] text-[38px] font-semibold tracking-[0.01em] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[84px] after:-translate-x-1/2 after:rounded-full after:bg-[#8fb3e2] max-[900px]:text-[30px]">
              Our Skils
            </h2>

            <div className="relative flex h-[clamp(280px,42vw,420px)] w-full items-center justify-center overflow-hidden text-center max-[900px]:h-[clamp(260px,52vw,360px)]">
              <div
                className="absolute left-[calc(50%-(var(--w)/2))] top-[18%] z-[2] h-[var(--h)] w-[var(--w)] [--h:clamp(118px,16vw,182px)] [--perspective:1000px] [--rotateX:-15deg] [--translateZ:calc((var(--w)+var(--h))+6px)] [--w:clamp(92px,13vw,146px)] [animation:skills-rotating_24s_linear_infinite] [transform-style:preserve-3d] [transform:perspective(var(--perspective))] max-[900px]:top-[16%] max-[900px]:[--translateZ:calc((var(--w)+var(--h))-12px)] max-[520px]:top-[14%] max-[520px]:[--h:110px] max-[520px]:[--translateZ:calc((var(--w)+var(--h))-20px)] max-[520px]:[--w:84px]"
                style={{ "--quantity": skillItems.length } as CSSProperties}
              >
                {skillItems.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="absolute inset-0 overflow-hidden rounded-[14px] border-2 [border-color:rgba(var(--color-card),0.8)] [transform:rotateY(calc((360deg/var(--quantity))*var(--index)))_translateZ(var(--translateZ))]"
                    style={
                      {
                        "--index": index,
                        "--color-card": skill.color,
                      } as CSSProperties
                    }
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 [background:radial-gradient(circle,rgba(var(--color-card),0.18)_0%,rgba(var(--color-card),0.42)_75%,rgba(var(--color-card),0.7)_100%)]">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="h-10 w-10 object-contain max-[900px]:h-[clamp(28px,5vw,34px)] max-[900px]:w-[clamp(28px,5vw,34px)]"
                        loading="lazy"
                      />
                      <p className="text-xs font-semibold uppercase tracking-[0.06em] text-white max-[520px]:text-[10px]">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
