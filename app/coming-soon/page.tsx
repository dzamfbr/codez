"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ComingSoonPage() {
  const animBase =
    "[animation-duration:var(--dur)] [animation-iteration-count:infinite] [animation-timing-function:cubic-bezier(0.83,0,0.17,1)]";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#334b74_0%,#283a60_35%,#1f2a4a_100%)] px-4 [--hue:223]">
      <div className="flex flex-col items-center gap-6">
        <svg
          aria-label="loader being flipped clockwise and circled by three white curves fading in and out"
          role="img"
          viewBox="0 0 56 56"
          className="mx-auto block h-auto w-[14em] [--dur:2s]"
        >
        <clipPath id="sand-mound-top">
          <path
            d="M 14.613 13.087 C 15.814 12.059 19.3 8.039 20.3 6.539 C 21.5 4.789 21.5 2.039 21.5 2.039 L 3 2.039 C 3 2.039 3 4.789 4.2 6.539 C 5.2 8.039 8.686 12.059 9.887 13.087 C 11 14.039 12.25 14.039 12.25 14.039 C 12.25 14.039 13.5 14.039 14.613 13.087 Z"
            className={`${animBase} [animation-name:sand-mound-top]`}
          />
        </clipPath>
        <clipPath id="sand-mound-bottom">
          <path
            d="M 14.613 20.452 C 15.814 21.48 19.3 25.5 20.3 27 C 21.5 28.75 21.5 31.5 21.5 31.5 L 3 31.5 C 3 31.5 3 28.75 4.2 27 C 5.2 25.5 8.686 21.48 9.887 20.452 C 11 19.5 12.25 19.5 12.25 19.5 C 12.25 19.5 13.5 19.5 14.613 20.452 Z"
            className={`${animBase} [animation-name:sand-mound-bottom] [transform-origin:12.25px_31.5px]`}
          />
        </clipPath>

        <g transform="translate(2,2)">
          <g
            transform="rotate(-90,26,26)"
            strokeLinecap="round"
            strokeDashoffset="153.94"
            strokeDasharray="153.94 153.94"
            stroke="hsl(0,0%,100%)"
            fill="none"
          >
            <circle
              transform="rotate(0,26,26)"
              r="24.5"
              cy="26"
              cx="26"
              strokeWidth="2.5"
              className={`${animBase} [animation-name:motion-thick] [transform-origin:26px_26px]`}
            />
            <circle
              transform="rotate(90,26,26)"
              r="24.5"
              cy="26"
              cx="26"
              strokeWidth="1.75"
              className={`${animBase} [animation-name:motion-medium] [transform-origin:26px_26px]`}
            />
            <circle
              transform="rotate(180,26,26)"
              r="24.5"
              cy="26"
              cx="26"
              strokeWidth="1"
              className={`${animBase} [animation-name:motion-thin] [transform-origin:26px_26px]`}
            />
          </g>

          <g
            transform="translate(13.75,9.25)"
            className={`${animBase} [animation-name:loader-flip] [transform-origin:12.25px_16.75px]`}
          >
            <path
              d="M 1.5 2 L 23 2 C 23 2 22.5 8.5 19 12 C 16 15.5 13.5 13.5 13.5 16.75 C 13.5 20 16 18 19 21.5 C 22.5 25 23 31.5 23 31.5 L 1.5 31.5 C 1.5 31.5 2 25 5.5 21.5 C 8.5 18 11 20 11 16.75 C 11 13.5 8.5 15.5 5.5 12 C 2 8.5 1.5 2 1.5 2 Z"
              fill="hsl(var(--hue),90%,85%)"
            />

            <g strokeLinecap="round" stroke="hsl(35,90%,90%)">
              <line
                y1="15.75"
                x1="12"
                y2="20.75"
                x2="12"
                strokeDasharray="0.25 33.75"
                strokeWidth="1"
                className={`${animBase} [animation-name:sand-grain-left]`}
              />
              <line
                y1="16.75"
                x1="12.5"
                y2="21.75"
                x2="12.5"
                strokeDasharray="0.25 33.75"
                strokeWidth="1"
                className={`${animBase} [animation-name:sand-grain-right]`}
              />
              <line
                y1="18"
                x1="12.25"
                y2="31.5"
                x2="12.25"
                strokeDasharray="0.5 107.5"
                strokeWidth="1"
                className={`${animBase} [animation-name:sand-drop]`}
              />
              <line
                y1="14.75"
                x1="12.25"
                y2="31.5"
                x2="12.25"
                strokeDasharray="54 54"
                strokeWidth="1.5"
                className={`${animBase} [animation-name:sand-fill]`}
              />
              <line
                y1="16"
                x1="12"
                y2="31.5"
                x2="12"
                strokeDasharray="1 107"
                strokeWidth="1"
                stroke="hsl(35,90%,83%)"
                className={`${animBase} [animation-name:sand-line-left]`}
              />
              <line
                y1="16"
                x1="12.5"
                y2="31.5"
                x2="12.5"
                strokeDasharray="12 96"
                strokeWidth="1"
                stroke="hsl(35,90%,83%)"
                className={`${animBase} [animation-name:sand-line-right]`}
              />

              <g fill="hsl(35,90%,90%)" strokeWidth="0">
                <path
                  d="M 12.25 15 L 15.392 13.486 C 21.737 11.168 22.5 2 22.5 2 L 2 2.013 C 2 2.013 2.753 11.046 9.009 13.438 L 12.25 15 Z"
                  clipPath="url(#sand-mound-top)"
                />
                <path
                  d="M 12.25 18.5 L 15.392 20.014 C 21.737 22.332 22.5 31.5 22.5 31.5 L 2 31.487 C 2 31.487 2.753 22.454 9.009 20.062 Z"
                  clipPath="url(#sand-mound-bottom)"
                />
              </g>
            </g>

            <g strokeWidth="2" strokeLinecap="round" opacity="0.7" fill="none">
              <path
                d="M 19.437 3.421 C 19.437 3.421 19.671 6.454 17.914 8.846 C 16.157 11.238 14.5 11.5 14.5 11.5"
                stroke="hsl(0,0%,100%)"
                className={`${animBase} [animation-name:glare-top]`}
              />
              <path
                transform="rotate(180,12.25,16.75)"
                d="M 19.437 3.421 C 19.437 3.421 19.671 6.454 17.914 8.846 C 16.157 11.238 14.5 11.5 14.5 11.5"
                stroke="hsla(0,0%,100%,0)"
                className={`${animBase} [animation-name:glare-bottom]`}
              />
            </g>

            <rect width="24.5" height="2" fill="hsl(var(--hue),90%,50%)" />
            <rect
              x="2.5"
              y="0.5"
              width="19.5"
              height="1"
              rx="0.5"
              ry="0.5"
              fill="hsl(var(--hue),90%,57.5%)"
            />
            <rect y="31.5" width="24.5" height="2" fill="hsl(var(--hue),90%,50%)" />
            <rect
              x="2.5"
              y="32"
              width="19.5"
              height="1"
              rx="0.5"
              ry="0.5"
              fill="hsl(var(--hue),90%,57.5%)"
            />
          </g>
        </g>
        </svg>
        <h1 className="text-center text-2xl font-semibold uppercase tracking-[0.3em] text-white/90">
          Coming Soon
        </h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          <Icon icon="line-md:chevron-left" className="text-xl" aria-hidden="true" />
          <span>Back</span>
        </Link>
      </div>
    </main>
  );
}
