"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

type Position = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
};

const positions: Position[] = [
  {
    id: "01",
    title: "Senior Frontend Developer",
    department: "ENGINEERING",
    location: "REMOTE / HYBRID",
    type: "FULL-TIME",
    description:
      "Build high-quality digital experiences using modern frontend technologies. You will work closely with designers and developers from concept through launch.",
    skills: ["React", "Next.js", "TypeScript", "Animation"],
  },
  {
    id: "02",
    title: "UI/UX Designer",
    department: "DESIGN",
    location: "REMOTE / HYBRID",
    type: "FULL-TIME",
    description:
      "Design thoughtful digital products and experiences while collaborating with strategy, development and visual teams.",
    skills: ["Figma", "UX", "UI", "Prototyping"],
  },
  {
    id: "03",
    title: "3D / Motion Designer",
    department: "CREATIVE",
    location: "REMOTE / HYBRID",
    type: "FULL-TIME",
    description:
      "Create immersive visual systems, motion experiences and 3D content for digital products and brand experiences.",
    skills: ["Blender", "Three.js", "Motion", "3D"],
  },
];

export default function CareerOpenings() {
  const [open, setOpen] = useState<string | null>(positions[0]?.id ?? null);

  return (
    <section
      id="open-positions"
      className="relative overflow-hidden border-b border-white/10 bg-[#060907] py-14 lg:py-18"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* LEFT */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              04 / OPEN POSITIONS
            </span>

            <h2 className="mt-5 text-[clamp(48px,5vw,72px)] font-semibold leading-[1] tracking-[-0.035em] text-white">
              Find your
              <br />
              <span className="text-[#00ff87]">place.</span>
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-[#7c8981]">
              We are always interested in meeting people who are curious,
              thoughtful and serious about their craft.
            </p>

            <div className="mt-10 border border-[#00ff87]/20 bg-[#00ff87]/[0.025] p-5">
              <span className="font-mono text-[9px] tracking-[0.16em] text-[#58655d]">
                CURRENT OPENINGS
              </span>

              <div className="mt-3 text-4xl font-semibold text-white">
                {String(positions.length).padStart(2, "0")}
              </div>

              <span className="mt-2 block text-[11px] text-[#7c8981]">
                opportunities across our studio
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border-t border-white/[0.08]">
            {positions.map((position) => {
              const active = open === position.id;

              return (
                <div
                  key={position.id}
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpen(active ? null : position.id)
                    }
                    className="group grid w-full gap-4 py-6 text-left lg:grid-cols-[60px_1fr_auto] lg:items-center"
                  >
                    <span className="font-mono text-[10px] tracking-[0.15em] text-[#00ff87]">
                      {position.id}
                    </span>

                    <div>
                      <h3 className="text-xl font-medium text-white transition group-hover:text-[#00ff87] lg:text-2xl">
                        {position.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[8px] tracking-[0.14em] text-[#68756d]">
                        <span>{position.department}</span>
                        <span>{position.location}</span>
                        <span>{position.type}</span>
                      </div>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center border border-white/[0.08] text-[#68756d] transition group-hover:border-[#00ff87]/40 group-hover:text-[#00ff87]">
                      <Plus
                        size={15}
                        className={`transition-transform duration-300 ${
                          active ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                      active
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-8 lg:grid-cols-[1fr_0.7fr] lg:pl-[60px]">
                        <p className="max-w-xl text-[13px] leading-6 text-[#7c8981]">
                          {position.description}
                        </p>

                        <div>
                          <span className="font-mono text-[9px] tracking-[0.16em] text-[#58655d]">
                            FOCUS AREAS
                          </span>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {position.skills.map((skill) => (
                              <span
                                key={skill}
                                className="border border-white/[0.08] px-3 py-2 font-mono text-[9px] tracking-[0.08em] text-[#7c8981]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <a
                            href={`mailto:careers@yourdomain.com?subject=${encodeURIComponent(
                              position.title,
                            )}`}
                            className="mt-6 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.14em] text-[#00ff87] transition hover:text-white"
                          >
                            APPLY FOR THIS ROLE
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}