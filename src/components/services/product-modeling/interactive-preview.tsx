"use client";

import { useRef } from "react";

export default function InteractivePreview() {
  const stageRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const stage = stageRef.current;

    if (!stage) return;

    const rect = stage.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    stage.style.setProperty("--mouse-x", `${x * 25}px`);
    stage.style.setProperty("--mouse-y", `${y * 25}px`);
    stage.style.setProperty("--rotate-x", `${y * -5}deg`);
    stage.style.setProperty("--rotate-y", `${x * 7}deg`);
  };

  const handlePointerLeave = () => {
    const stage = stageRef.current;

    if (!stage) return;

    stage.style.setProperty("--mouse-x", "0px");
    stage.style.setProperty("--mouse-y", "0px");
    stage.style.setProperty("--rotate-x", "0deg");
    stage.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <section className="relative bg-[#070a08] py-28 lg:py-36">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              DIGITAL PREVIEW
            </span>

            <h2 className="mt-5 text-[clamp(45px,5.5vw,72px)] font-medium leading-[0.95] tracking-[-0.055em]">
              Designed in 3D.
              <br />
              <span className="text-[#00ff87]">Experienced in space.</span>
            </h2>
          </div>

          <p className="self-end text-sm leading-7 text-[#7c8981]">
            Your product model can become the foundation for interactive
            commerce, product configurators, visualization and immersive
            digital experiences.
          </p>
        </div>

        <div
          ref={stageRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="group relative h-[520px] overflow-hidden border border-[#00ff87]/15 bg-[#050806] sm:h-[650px]"
          style={{
            ["--mouse-x" as string]: "0px",
            ["--mouse-y" as string]: "0px",
            ["--rotate-x" as string]: "0deg",
            ["--rotate-y" as string]: "0deg",
          }}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-40 transition-transform duration-500 ease-out"
            style={{
              transform:
                "translate3d(var(--mouse-x), var(--mouse-y), 0) scale(1.05)",
              backgroundImage: `
                linear-gradient(rgba(0,255,135,.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,135,.07) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Green center glow */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/10 blur-[100px]" />

          {/* Orbit */}
          <div
            className="absolute left-1/2 top-1/2 h-[180px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#00ff87]/20"
            style={{
              transform:
                "translate(-50%, -50%) rotate(-25deg)",
              animation: "pm-orbit 14s linear infinite",
            }}
          />

          {/* Main placeholder */}
          <div
            className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out sm:h-[340px] sm:w-[340px]"
            style={{
              transform: `
                translate(-50%, -50%)
                translate3d(var(--mouse-x), var(--mouse-y), 0)
                rotateX(var(--rotate-x))
                rotateY(var(--rotate-y))
                rotateZ(-35deg)
              `,
            }}
          >
            <div className="absolute inset-0 border border-[#00ff87]/60 bg-[#00ff87]/[0.025] shadow-[0_0_60px_rgba(0,255,135,0.08)]" />

            <div className="absolute left-5 top-5 right-5 bottom-5 border border-[#00ff87]/20" />

            <div className="absolute left-10 top-1/2 h-px w-[70%] bg-[#00ff87]/70" />

            <div className="absolute left-1/2 top-10 h-[70%] w-px bg-[#00ff87]/30" />

            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-[#00ff87]/50 sm:h-28 sm:w-28" />
          </div>

          {/* Top data */}
          <div className="absolute left-5 right-5 top-5 flex justify-between">
            <span className="font-mono text-[8px] tracking-[0.15em] text-[#00ff87]">
              3D / PRODUCT / PREVIEW
            </span>

            <span className="font-mono text-[8px] text-[#56635b]">
              X 084.22
            </span>
          </div>

          {/* Bottom data */}
          <div className="absolute bottom-5 left-5 flex flex-col gap-1">
            <span className="font-mono text-[8px] tracking-[0.15em] text-[#00ff87]">
              INTERACTIVE MODEL
            </span>

            <span className="text-[8px] uppercase tracking-[0.12em] text-[#59665e]">
              Move your cursor to explore
            </span>
          </div>

          <div className="absolute bottom-5 right-5 hidden gap-6 font-mono text-[8px] text-[#56635b] sm:flex">
            <span>Y 129.04</span>
            <span>Z 042.88</span>
          </div>

          {/* Crosshair */}
          <div className="absolute left-[15%] top-[25%] h-8 w-8">
            <span className="absolute left-1/2 top-0 h-full w-px bg-[#00ff87]/40" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-[#00ff87]/40" />
          </div>

          <div className="absolute bottom-[22%] right-[15%] h-8 w-8">
            <span className="absolute left-1/2 top-0 h-full w-px bg-[#00ff87]/40" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-[#00ff87]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}