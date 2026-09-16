"use client";

import Link from "next/link";
import HeroGLB from "./hero-glb";

export default function ProductModelingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050806]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Green ambient glow */}
      <div className="pointer-events-none absolute right-[5%] top-[15%] h-137.5 w-137.5 rounded-full bg-[#00ff87]/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 pt-34 pb-14 sm:px-10 lg:px-16 lg:pt-28 lg:pb-18">
        <div className="grid min-h-180 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-38">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00ff87]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#00ff87]">
                Product Modeling
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-wide text-white sm:text-6xl lg:text-7xl xl:text-[88px]">
              Products,
              <br />

              <span className="text-white/35">
                engineered
              </span>

              <br />

              <span className="text-[#00ff87]">
                in 3D.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
              High-quality 3D product modeling built for visualization,
              product development, marketing, e-commerce, and immersive
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#interactive-3d"
                className="group inline-flex items-center gap-3 rounded-full bg-[#00ff87] px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#55ffb0]"
              >
                Explore 3D Models

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#selected-work"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/70 transition-all duration-300 hover:border-[#00ff87]/40 hover:text-white"
              >
                View Our Work
              </Link>
            </div>

            {/* Technical details */}
            <div className="mt-14 grid max-w-lg grid-cols-3 border-y border-white/[0.08] py-5">
              <div>
                <p className="font-mono text-[9px] tracking-[0.18em] text-white/30">
                  FORMAT
                </p>
                <p className="mt-2 text-sm text-white/70">
                  GLB / FBX
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-5">
                <p className="font-mono text-[9px] tracking-[0.18em] text-white/30">
                  QUALITY
                </p>
                <p className="mt-2 text-sm text-white/70">
                  PBR Ready
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-5">
                <p className="font-mono text-[9px] tracking-[0.18em] text-white/30">
                  OUTPUT
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Production
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — 3D MODEL */}
          <div className="relative z-10 lg:-mr-10">
            <div className="relative">
              {/* Large technical frame */}
              <div className="absolute -inset-5 rounded-[32px] border border-[#00ff87]/10" />

              <div className="absolute -inset-10 rounded-full bg-[#00ff87]/[0.035] blur-3xl" />

              <HeroGLB />
            </div>

            {/* Floating technical label */}
            <div className="absolute right-4 top-10 hidden rounded border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md sm:block">
              <p className="font-mono text-[8px] tracking-[0.18em] text-[#00ff87]">
                LIVE MODEL
              </p>
              <p className="mt-1 font-mono text-[8px] text-white/30">
                GLB / PBR
              </p>
            </div>

            <div className="absolute bottom-10 right-4 hidden font-mono text-[8px] tracking-[0.15em] text-white/20 sm:block">
              3D_VIEW_001
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
          Scroll to explore
        </span>

        <span className="h-10 w-px bg-gradient-to-b from-[#00ff87]/60 to-transparent" />
      </div>
    </section>
  );
}