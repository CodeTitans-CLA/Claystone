"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      setMouse({
        x: x * 2,
        y: y * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[850px] overflow-hidden bg-[#050706]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-[#00ff87]/8 blur-[120px]" />

      <div className="pointer-events-none absolute -left-60 bottom-[-200px] h-[500px] w-[500px] rounded-full bg-[#00ff87]/5 blur-[120px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to right, black 0%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[850px] w-[calc(100%-32px)] max-w-[1240px] items-center lg:w-[calc(100%-64px)]">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff87]/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ff87]" />
              </span>

              <span className="text-[10px] font-semibold tracking-[0.22em] text-[#91a097]">
                PRODUCT MODELING
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(52px,7vw,94px)] font-medium leading-[0.92] tracking-[-0.06em]">
              Digital models
              <br />
              <span className="text-[#00ff87]">built to perform.</span>
            </h1>

            <p className="mt-8 max-w-xl text-[16px] leading-8 text-[#829087]">
              High-quality 3D product models created for visualization,
              e-commerce, product configurators, marketing and interactive
              digital experiences.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/quote"
                className="group inline-flex h-14 items-center justify-center gap-5 bg-[#00ff87] px-7 text-[12px] font-bold uppercase tracking-[0.08em] text-[#031008] transition duration-300 hover:-translate-y-1 hover:bg-[#42ffab]"
              >
                Start a project
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="#selected-work"
                className="inline-flex h-14 items-center justify-center border border-white/10 bg-white/[0.025] px-7 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-1 hover:border-[#00ff87]/30 hover:bg-[#00ff87]/5"
              >
                View selected work
              </a>
            </div>

            <div className="mt-16 flex gap-8 sm:gap-12">
              {[
                ["01", "MODEL"],
                ["02", "VISUALIZE"],
                ["03", "DELIVER"],
              ].map(([number, label]) => (
                <div key={number} className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-[#00ff87]">
                    {number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#69766e]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="relative h-[540px] w-full transition-transform duration-300 ease-out lg:h-[680px]"
            style={{
              transform: `perspective(1200px) rotateX(${-mouse.y * 3}deg) rotateY(${mouse.x * 4}deg)`,
            }}
          >
            {/* Large orbit */}
            <div
              className="absolute left-1/2 top-1/2 h-[330px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#00ff87]/20"
              style={{
                transform: "translate(-50%, -50%) rotate(-20deg)",
                animation: "pm-orbit 16s linear infinite",
              }}
            />

            {/* Second orbit */}
            <div
              className="absolute left-1/2 top-1/2 h-[400px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/5"
              style={{
                transform: "translate(-50%, -50%) rotate(50deg)",
                animation: "pm-orbit-reverse 22s linear infinite",
              }}
            />

            {/* Center image placeholder */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 sm:h-[500px] sm:w-[500px]">
              <div className="absolute inset-0 rounded-full bg-[#00ff87]/5 blur-3xl" />

              <div className="absolute inset-[12%] overflow-hidden border border-[#00ff87]/20 bg-[#08100b] shadow-[0_0_100px_rgba(0,255,135,0.06)]">
                {/* Replace this block with your main product image */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,135,0.14),transparent_45%)]" />

                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,255,135,.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,255,135,.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "35px 35px",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#00ff87]/60 sm:h-52 sm:w-52" />

                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#00ff87]/30 sm:h-36 sm:w-36" />

                <div className="absolute bottom-6 left-6">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-[#00ff87]">
                    IMAGE / 3D MODEL
                  </span>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#68756d]">
                    Replace with product render
                  </p>
                </div>
              </div>
            </div>

            {/* Data cards */}
            <div className="absolute right-0 top-20 border border-[#00ff87]/15 bg-[#050706]/80 p-4 backdrop-blur-xl">
              <span className="block font-mono text-[8px] tracking-[0.15em] text-[#68756d]">
                POLYGON
              </span>

              <strong className="mt-1 block font-mono text-[11px] text-[#00ff87]">
                48.2K
              </strong>
            </div>

            <div className="absolute bottom-24 left-0 border border-[#00ff87]/15 bg-[#050706]/80 p-4 backdrop-blur-xl">
              <span className="block font-mono text-[8px] tracking-[0.15em] text-[#68756d]">
                STATUS
              </span>

              <strong className="mt-1 block font-mono text-[11px] text-[#00ff87]">
                READY
              </strong>
            </div>

            <div className="absolute right-5 top-1/2 border-l border-[#00ff87] bg-[#050706]/70 px-4 py-3 backdrop-blur-xl">
              <span className="block font-mono text-[8px] tracking-[0.15em] text-[#68756d]">
                FORMAT
              </span>

              <strong className="mt-1 block font-mono text-[10px] text-white">
                3D / PBR
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex">
        <span className="text-[8px] tracking-[0.2em] text-[#536058]">
          SCROLL TO EXPLORE
        </span>

        <span className="h-px w-12 bg-[#00ff87]/60" />
      </div>
    </section>
  );
}