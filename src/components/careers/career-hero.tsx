"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050706] py-14 lg:py-18">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#00ff87]/[0.04] blur-[140px]" />

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        {/* Top technical line */}
        <div className="mb-14 flex items-center justify-between border-b border-white/[0.08] pb-5">
          <span className="font-mono text-[10px] tracking-[0.22em] text-[#00ff87]">
            CAREERS / PIXELARA STUDIO
          </span>

          <span className="font-mono text-[9px] tracking-[0.16em] text-[#58655d]">
            01 — JOIN THE STUDIO
          </span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* LEFT */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              WE ARE LOOKING FOR
            </span>

            <h1 className="mt-6 max-w-[850px] text-[clamp(54px,7vw,110px)] font-semibold leading-[0.94] tracking-[-0.045em] text-white">
              People who
              <br />
              <span className="text-[#00ff87]">build</span> what&apos;s
              <br />
              next.
            </h1>

            <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#7c8981] lg:text-[16px]">
              We bring together designers, developers, strategists and
              problem-solvers to create digital experiences, products and
              systems that move businesses forward.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#open-positions"
                className="group inline-flex items-center gap-4 border border-[#00ff87]/40 bg-[#00ff87]/[0.06] px-6 py-4 text-[11px] font-medium tracking-[0.12em] text-white transition duration-300 hover:border-[#00ff87] hover:bg-[#00ff87]/10"
              >
                VIEW OPEN POSITIONS

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#life-at-studio"
                className="inline-flex items-center gap-3 px-3 py-4 text-[10px] font-mono tracking-[0.16em] text-[#68756d] transition hover:text-[#00ff87]"
              >
                LIFE AT THE STUDIO
                <ArrowDownRight size={14} />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/[0.08]">
              <div className="border-r border-white/[0.08] py-5">
                <span className="block text-2xl font-semibold text-white">
                  01
                </span>

                <span className="mt-2 block font-mono text-[8px] tracking-[0.14em] text-[#58655d]">
                  STUDIO
                </span>
              </div>

              <div className="border-r border-white/[0.08] px-5 py-5">
                <span className="block text-2xl font-semibold text-white">
                  04+
                </span>

                <span className="mt-2 block font-mono text-[8px] tracking-[0.14em] text-[#58655d]">
                  DISCIPLINES
                </span>
              </div>

              <div className="px-5 py-5">
                <span className="block text-2xl font-semibold text-[#00ff87]">
                  ∞
                </span>

                <span className="mt-2 block font-mono text-[8px] tracking-[0.14em] text-[#58655d]">
                  IDEAS
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative aspect-[0.82] overflow-hidden border border-[#00ff87]/20 bg-[#070b08]">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,255,135,.07) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,255,135,.07) 1px, transparent 1px)
                  `,
                  backgroundSize: "45px 45px",
                }}
              />

              {/* Image placeholder */}
              <div className="absolute inset-[10%] overflow-hidden border border-white/[0.08]">
                <Image
                  src="/images/careers/career-hero.jpg"
                  alt="Pixelara Studio team"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/80 via-transparent to-[#00ff87]/[0.04]" />
              </div>

              {/* Technical markers */}
              <div className="absolute left-4 top-4 font-mono text-[8px] tracking-[0.16em] text-[#00ff87]">
                PX / 001
              </div>

              <div className="absolute right-4 top-4 font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
                06.2026
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87] shadow-[0_0_12px_#00ff87]" />

                <span className="font-mono text-[8px] tracking-[0.16em] text-[#7c8981]">
                  OPEN TO NEW TALENT
                </span>
              </div>
            </div>

            {/* Floating technical box */}
            <div className="absolute -bottom-5 -left-5 border border-[#00ff87]/20 bg-[#060907] px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,.4)]">
              <span className="block font-mono text-[8px] tracking-[0.15em] text-[#58655d]">
                CURRENT STATUS
              </span>

              <span className="mt-2 block text-[12px] font-medium text-[#00ff87]">
                BUILDING THE NEXT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}