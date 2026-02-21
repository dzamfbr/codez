"use client";

import { Icon } from "@iconify/react";
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

const projectItems = [
  {
    name: "TopZyn",
    description:
      "Website Topzyn menyediakan layanan top up game dan produk digital secara online dengan sistem yang cepat dan mudah. Di dalamnya terdapat pilihan game yang lengkap, detail produk, sistem pemesanan sederhana, serta proses pembayaran yang praktis.",
    href: "/coming-soon",
    gradientClass: "from-blue-500 to-blue-600",
    image: "/images/logo_project_topzyn.png",
  },
];

const testimonialItems = [
  {
    name: "Name",
    email: "email@gmail.com",
    feedback: "Feedback Description",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const goToPrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonialItems.length - 1 : prev - 1,
    );
  };

  const goToNextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === testimonialItems.length - 1 ? 0 : prev + 1,
    );
  };

  const maskEmail = (email: string) => {
    const [localPart, domainPart] = email.split("@");
    if (!domainPart) return email;

    const firstTwo = localPart.slice(0, 2);
    const lastTwo = localPart.length > 2 ? localPart.slice(-2) : "";
    return `${firstTwo}*****${lastTwo}@${domainPart}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,#334b74_0%,#283a60_35%,#1f2a4a_100%)] pt-[90px]">
      <nav className="fixed left-0 top-0 z-[120] h-[70px] w-full bg-[#242526]">
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
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="hidden cursor-pointer border-0 bg-transparent p-0 max-[790px]:inline-flex"
            >
              <svg
                viewBox="0 0 32 32"
                className={`h-[3em] transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
                  menuOpen ? "-rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <path
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  className={`fill-none stroke-white [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
                    menuOpen
                      ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42]"
                      : "[stroke-dasharray:12_63]"
                  }`}
                />
                <path
                  d="M7 16 27 16"
                  className="fill-none stroke-white [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[90] bg-black/35 transition-opacity duration-300 min-[791px]:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-[110] h-full w-[220px] bg-[#242526] p-5 transition-transform duration-300 min-[791px]:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-5 flex items-center">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-white no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/logo-codez.png"
              alt="Codez logo"
              width={24}
              height={24}
            />
            <span className="text-[20px] font-medium">Codez</span>
          </a>
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
            <p className="text-[18px] uppercase tracking-[0.3em] text-white/70">
              Hello,
            </p>
            <h1 className="mt-[10px] text-[64px] font-semibold [font-family:'Gveret_Levin',Poppins,sans-serif]">
              I am CODEZ
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

        <section
          id="project"
          className="mt-[120px] flex justify-center pb-14 max-[900px]:mt-[90px]"
        >
          <div className="w-full max-w-[1100px] text-center text-white">
            <h2 className="relative mb-8 inline-block pb-[10px] text-[38px] font-semibold tracking-[0.01em] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[84px] after:-translate-x-1/2 after:rounded-full after:bg-[#8fb3e2] max-[900px]:text-[30px]">
              Project
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-12 max-[700px]:gap-x-3 max-[700px]:gap-y-6">
              {projectItems.map((project) => (
                <article
                  key={project.name}
                  className="group relative mx-auto flex w-[calc(50%-14px)] min-w-0 max-w-[220px] flex-col overflow-hidden rounded-3xl border border-[#d8e4f7]/90 bg-[linear-gradient(165deg,#ffffff_0%,#edf4ff_52%,#e6efff_100%)] text-left text-gray-700 shadow-[0_18px_40px_rgba(10,23,52,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b7cdf1] hover:shadow-[0_25px_50px_rgba(10,23,52,0.28)] min-[701px]:max-w-[340px] min-[701px]:w-[calc(50%-14px)] min-[1101px]:w-[calc(33.333%-19px)]"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#8fb3e2]/70 to-transparent" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#8fb3e2]/30 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-12 -left-10 h-24 w-24 rounded-full bg-[#4f72c5]/20 blur-2xl" />
                  <div
                    className={`relative mx-4 -mt-6 h-44 overflow-hidden rounded-2xl bg-gradient-to-r bg-clip-border text-white shadow-[0_12px_24px_rgba(57,93,163,0.35)] ring-1 ring-white/70 max-[700px]:mx-2 max-[700px]:-mt-4 max-[700px]:h-24 ${project.gradientClass}`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0)_45%)]" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradientClass} opacity-20`}
                    />
                  </div>

                  <div className="p-6 max-[700px]:p-3">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6d8ec2] max-[700px]:text-[9px]">
                      Featured Project
                    </p>
                    <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-[#1d2d4c] antialiased max-[700px]:mb-1 max-[700px]:text-sm">
                      {project.name}
                    </h5>
                    <p className="block text-base font-light leading-relaxed text-[#455b82] antialiased max-[700px]:text-[11px] max-[700px]:leading-[1.45]">
                      {project.description}
                    </p>
                  </div>

                  <div className="p-6 pt-0 max-[700px]:p-3 max-[700px]:pt-0">
                    <a
                      href={project.href}
                      className="inline-flex select-none items-center justify-center rounded-lg bg-[linear-gradient(135deg,#4c7bcf,#3a63ad)] px-6 py-3 text-center align-middle text-xs font-bold uppercase tracking-[0.04em] text-white shadow-[0_10px_20px_rgba(57,93,163,0.3)] transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_28px_rgba(57,93,163,0.38)] focus:opacity-[0.9] focus:shadow-none active:opacity-[0.85] active:shadow-none max-[700px]:rounded-md max-[700px]:px-3 max-[700px]:py-2 max-[700px]:text-[10px]"
                    >
                      View Website
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimoni"
          className="mt-[120px] flex justify-center pb-14 max-[900px]:mt-[90px]"
        >
          <div className="w-full max-w-[920px] text-center text-white">
            <h2 className="relative mb-8 inline-block pb-[10px] text-[38px] font-semibold tracking-[0.01em] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[84px] after:-translate-x-1/2 after:rounded-full after:bg-[#8fb3e2] max-[900px]:text-[30px]">
              Testimoni
            </h2>

            <div className="relative mx-auto mt-4 w-full max-w-[760px] overflow-hidden rounded-[24px] border border-[#8fb3e2]/45 bg-[linear-gradient(135deg,rgba(26,38,68,0.88),rgba(13,20,38,0.9))] px-8 py-8 shadow-[0_24px_60px_rgba(6,10,24,0.45)] backdrop-blur-sm max-[700px]:px-4 max-[700px]:py-6">
              <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#8fb3e2]/80 to-transparent" />
              <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#8fb3e2]/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[#5678c5]/20 blur-3xl" />
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={goToPrevTestimonial}
                className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#8fb3e2]/35 bg-[#1e2a4b]/80 text-[#8fb3e2] transition hover:bg-[#2b3f72] hover:text-white max-[700px]:left-1 max-[700px]:h-8 max-[700px]:w-8"
              >
                <Icon
                  icon="line-md:chevron-left"
                  className="text-[26px] max-[700px]:text-[20px]"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={goToNextTestimonial}
                className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#8fb3e2]/35 bg-[#1e2a4b]/80 text-[#8fb3e2] transition hover:bg-[#2b3f72] hover:text-white max-[700px]:right-1 max-[700px]:h-8 max-[700px]:w-8"
              >
                <Icon
                  icon="line-md:chevron-right"
                  className="text-[26px] max-[700px]:text-[20px]"
                  aria-hidden="true"
                />
              </button>

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translateX(-${testimonialIndex * 100}%)`,
                  }}
                >
                  {testimonialItems.map((item) => (
                    <article
                      key={item.name}
                      className="w-full shrink-0 px-10 text-center max-[700px]:px-6"
                    >
                      <div className="mx-auto w-fit rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(143,179,226,0.35),rgba(143,179,226,0)_70%)] p-1.5">
                        <div className="flex h-[86px] w-[86px] items-center justify-center rounded-full border-[3px] border-[#8fb3e2] bg-white/10 shadow-[0_0_20px_rgba(143,179,226,0.25)]">
                          <Icon
                            icon="line-md:account"
                            className="text-[48px] text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <h3 className="mt-4 text-[22px] font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium tracking-[0.04em] text-[#8fb3e2]">
                        {maskEmail(item.email)}
                      </p>
                      <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-[1.75] text-white/80 max-[700px]:text-[13px]">
                        {item.feedback}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {testimonialItems.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setTestimonialIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    testimonialIndex === index
                      ? "w-6 bg-[#8fb3e2]"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
