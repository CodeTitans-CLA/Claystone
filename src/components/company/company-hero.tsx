"use client";

import { useEffect, useState } from "react";

export default function CompanyHero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 700, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050706] py-14 lg:py-18">
      {/* Ambient light */}
      <div className="pointer-events-none absolute left-[60%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/[0.035] blur-[140px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,.045) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Moving horizontal scan */}
      <div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff87]/30 to-transparent"
        style={{
          top: `${25 + scrollProgress * 40}%`,
        }}
      />

      <div className="relative mx-auto min-h-[760px] w-[calc(100%-32px)] max-w-[1600px] lg:min-h-[820px] lg:w-[calc(100%-64px)]">
        {/* Top technical info */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#00ff87]">
            COMPANY / 001
          </span>

          <span className="font-mono text-[9px] tracking-[0.15em] text-[#5d6962]">
            EST. / STUDIO
          </span>
        </div>

        {/* Main composition */}
        <div className="relative flex min-h-[650px] items-center">
          {/* Vertical label */}
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
            <span className="font-mono text-[8px] tracking-[0.25em] text-[#58655d]">
              DESIGN / TECHNOLOGY / ENGINEERING
            </span>
          </div>

          <div className="w-full">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.65fr] lg:gap-24">
              <div>
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
                  WHO WE ARE
                </span>

                <h1 className="mt-6 text-[clamp(56px,8vw,120px)] font-semibold leading-[0.88] tracking-[-0.055em] text-white">
                  We make
                  <br />
                  <span className="text-[#00ff87]">ideas</span>
                  <br />
                  tangible.
                </h1>

                <p className="mt-10 max-w-xl text-[15px] leading-7 text-[#7c8981] sm:text-[16px] sm:leading-8">
                  We are a multidisciplinary studio combining design,
                  visualization, technology and engineering to transform
                  ambitious ideas into meaningful experiences.
                </p>

                <div className="mt-9 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#00ff87]" />

                  <span className="font-mono text-[9px] tracking-[0.16em] text-[#5d6962]">
                    SCROLL TO EXPLORE
                  </span>
                </div>
              </div>

              {/* Right visual */}
              <div className="relative mx-auto hidden h-[430px] w-full max-w-[420px] lg:block">
                {/* Rings */}
                <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff87]/10" />

                <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border border-[#00ff87]/15" />

                <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/[0.025] shadow-[0_0_100px_rgba(0,255,135,0.08)]" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border border-[#00ff87]/40 bg-[#050706]">
                  <div className="absolute inset-3 border border-[#00ff87]/20" />

                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87] shadow-[0_0_18px_#00ff87]" />
                </div>

                {/* Orbit markers */}
                <span className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-[#00ff87] shadow-[0_0_15px_#00ff87]" />
                <span className="absolute right-[10%] top-[42%] h-1.5 w-1.5 rounded-full bg-[#00ff87]/70" />
                <span className="absolute bottom-[17%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#00ff87]/50" />

                {/* Coordinate labels */}
                <span className="absolute left-0 top-0 font-mono text-[8px] tracking-[0.15em] text-[#58655d]">
                  23.781 / 90.407
                </span>

                <span className="absolute bottom-0 right-0 font-mono text-[8px] tracking-[0.15em] text-[#58655d]">
                  SYSTEM / ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="grid border-t border-white/[0.06] sm:grid-cols-3">
          {[
            ["01", "CREATIVE", "Ideas into direction"],
            ["02", "TECHNICAL", "Precision into systems"],
            ["03", "CONNECTED", "Design into experience"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="border-b border-white/[0.06] py-5 sm:border-r sm:px-5 sm:last:border-r-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-[#00ff87]">
                  {number}
                </span>

                <span className="font-mono text-[9px] tracking-[0.16em] text-[#58655d]">
                  {title}
                </span>
              </div>

              <p className="mt-2 text-[12px] text-[#7c8981]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}