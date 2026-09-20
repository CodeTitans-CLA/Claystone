"use client";

import { useState } from "react";

const disciplines = [
  {
    number: "01",
    title: "Product Modeling",
    description:
      "High-detail digital product models built for visualization, presentation, manufacturing and interactive experiences.",
    tags: ["CAD", "HIGH POLY", "PBR"],
  },
  {
    number: "02",
    title: "3D Visualization",
    description:
      "Photorealistic and stylized visual experiences that communicate products, spaces and concepts.",
    tags: ["RENDERING", "LIGHTING", "LOOK DEV"],
  },
  {
    number: "03",
    title: "Architecture",
    description:
      "Digital architectural visualization and spatial experiences that help communicate ideas before they become physical.",
    tags: ["SPATIAL", "3D", "VISUALIZATION"],
  },
  {
    number: "04",
    title: "Digital Experiences",
    description:
      "Websites, interactive interfaces and WebGL experiences that turn complex ideas into intuitive digital products.",
    tags: ["WEB", "WEBGL", "INTERACTION"],
  },
];

export default function CompanyDisciplines() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050706] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              04 / WHAT WE DO
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              One studio.
              <br />
              <span className="text-[#00ff87]">Many disciplines.</span>
            </h2>
          </div>

          <p className="self-end text-[15px] leading-7 text-[#7c8981]">
            We connect creative and technical capabilities so a project can
            move from the first idea to the final experience without losing
            its original intent.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[#00ff87]/15 lg:grid-cols-[0.72fr_1fr]">
          {/* Navigation */}
          <div className="bg-[#060907]">
            {disciplines.map((discipline, index) => {
              const isActive = active === index;

              return (
                <button
                  key={discipline.number}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group relative flex w-full items-center gap-5 border-b border-white/[0.06] p-5 text-left transition duration-300 last:border-b-0 sm:p-7 ${
                    isActive
                      ? "bg-[#00ff87]/[0.04]"
                      : "hover:bg-white/[0.015]"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-[#00ff87]" : "text-[#58655d]"
                    }`}
                  >
                    {discipline.number}
                  </span>

                  <span
                    className={`text-[16px] font-medium transition ${
                      isActive
                        ? "text-white"
                        : "text-[#7c8981] group-hover:text-white"
                    }`}
                  >
                    {discipline.title}
                  </span>

                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#00ff87] shadow-[0_0_12px_#00ff87]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active information */}
          <div className="relative min-h-[390px] overflow-hidden bg-[#070b08] p-7 sm:p-10 lg:p-14">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,255,135,.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,135,.05) 1px, transparent 1px)
                `,
                backgroundSize: "42px 42px",
              }}
            />

            <div className="relative">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#00ff87]">
                DISCIPLINE / {disciplines[active].number}
              </span>

              <h3 className="mt-6 text-[clamp(34px,4vw,56px)] font-semibold leading-[1] tracking-[-0.03em] text-white">
                {disciplines[active].title}
              </h3>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#7c8981]">
                {disciplines[active].description}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {disciplines[active].tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#00ff87]/15 bg-[#00ff87]/[0.025] px-4 py-2 font-mono text-[9px] tracking-[0.13em] text-[#00ff87]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00ff87]" />

                <span className="font-mono text-[8px] tracking-[0.15em] text-[#58655d]">
                  CREATIVE + TECHNICAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}