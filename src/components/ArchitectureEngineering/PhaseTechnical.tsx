"use client";

import Image from "next/image";
import { Geist } from "next/font/google";
import {
  Activity,
  Box,
  Check,
  ChevronRight,
  CircleDot,
  FileBox,
  Layers3,
  MoveUpRight,
  Network,
  ScanLine,
  Sparkles,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   DATA
========================================================= */

const phases = [
  {
    number: "PHASE 01",
    timing: "WEEKS 1 - 2",
    title: "Schematic Space Programming",
    description:
      "Spatial volume feasibility, site zoning checks, massing models, preliminary circulation corridors, and sun study diagrams.",
  },
  {
    number: "PHASE 02",
    timing: "WEEKS 3 - 5",
    title: "Design Development & Envelopes",
    description:
      "Full 3D massing in Revit, facade system engineering, window-to-wall ratios, material selections, and parametric framing.",
  },
  {
    number: "PHASE 03",
    timing: "WEEKS 6 - 9",
    title: "Construction Documents & Permits",
    description:
      "Full municipal submission sets: foundation plans, structural sections, MEP integration layers, door/window schedules, and assembly notes.",
  },
  {
    number: "PHASE 04",
    timing: "ONGOING BUILD",
    title: "BIM Field Coordination (LOD 400)",
    description:
      "Live Navisworks collision detection, subcontractor submittal audits, digital twin maintenance, and as-built verification.",
  },
];

const formatBadges = [
  ".RVT",
  ".DWG / .DXF",
  ".IFC OPEN BIM",
  ".NWD / .NWC",
  "UE 5.4 EXR",
];

const tabs = [
  "Schematic",
  "Wireframe",
  "MEP Sync",
  "Photoreal",
];

const bottomStats = [
  {
    label: "COORDINATION",
    value: "ISO 19650 STD",
  },
  {
    label: "ACCURACY LEVEL",
    value: "LOD 400 FAB",
  },
  {
    label: "INTEGRATION",
    value: "OPEN-BIM IFC 4",
  },
];

/* =========================================================
   VIEWPORT HOOK
========================================================= */

function useSectionVisible() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.13,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return {
    ref,
    visible,
  };
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PhaseTechnicalMatrix() {
  const { ref, visible } = useSectionVisible();

  const [activeTab, setActiveTab] = useState("Schematic");
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      ref={ref}
      className={`
        ${geist.className}
        relative
        isolate
        overflow-hidden
        bg-[#080d0a]
        py-12
        text-white

        sm:py-16
        md:py-20
        lg:py-24
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#080d0a]" />

      {/* Dotted background */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          -z-40
          opacity-[0.10]
          [background-image:radial-gradient(rgba(86,255,145,0.65)_0.75px,transparent_0.75px)]
          [background-size:26px_26px]
        "
      />

      {/* Top glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-[330px]
          left-[10%]
          -z-40
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#00ff66]/[0.04]
          blur-[180px]
        "
      />

      {/* Right glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[380px]
          top-[15%]
          -z-40
          h-[800px]
          w-[800px]
          rounded-full
          bg-[#00ff66]/[0.035]
          blur-[190px]
        "
      />

      {/* Bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          -z-30
          h-[320px]
          bg-gradient-to-t
          from-black/35
          to-transparent
        "
      />

      {/* =====================================================
          MAIN WRAPPER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]
          px-4

          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ===================================================
            OUTER PANEL
        =================================================== */}

        <div
          className={`
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-white/[0.055]
            bg-[#0a0f0c]/90

            p-4
            shadow-[0_30px_100px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.025)]
            backdrop-blur-xl

            transition-all
            duration-1000
            ease-[cubic-bezier(0.16,1,0.3,1)]

            sm:p-5
            md:p-7
            lg:p-8
            xl:p-9

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* top neon */}

          <div
            className="
              pointer-events-none
              absolute
              left-[5%]
              top-0
              h-px
              w-[32%]
              bg-gradient-to-r
              from-transparent
              via-[#00ff66]/60
              to-transparent
              shadow-[0_0_16px_rgba(0,255,102,0.45)]
            "
          />

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              grid
              gap-7

              md:grid-cols-[1fr_auto]
              md:items-center
              md:gap-10

              lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]
            "
          >
            {/* Left */}

            <div>
              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.17em]
                  text-[#00ff66]

                  sm:text-[9px]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#00ff66]
                    shadow-[0_0_10px_rgba(0,255,102,0.9)]
                  "
                />

                Pipeline • Interactive Inspector
              </div>

              <h2
                className="
                  max-w-[760px]
                  text-[38px]
                  font-[700]
                  leading-[1.02]
                  tracking-[-0.055em]
                  text-[#f1fff4]

                  min-[420px]:text-[42px]

                  sm:text-[50px]

                  md:text-[54px]

                  lg:text-[58px]

                  xl:text-[64px]
                "
              >
                Phase-by-Phase Technical
                <span className="block">
                  Matrix
                </span>
              </h2>
            </div>

            {/* Format badges */}

            <div
              className="
                flex
                flex-wrap
                gap-2

                md:max-w-[430px]
                md:justify-end
              "
            >
              {formatBadges.map((badge, index) => (
                <div
                  key={badge}
                  style={
                    {
                      "--badgeDelay": `${index * 80}ms`,
                    } as CSSProperties
                  }
                  className={`
                    format-badge
                    group
                    relative
                    overflow-hidden
                    rounded-[5px]
                    border
                    border-white/[0.04]
                    bg-white/[0.065]

                    px-3
                    py-2

                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.14em]
                    text-white/85

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]

                    transition-all
                    duration-500

                    hover:-translate-y-0.5
                    hover:border-[#00ff66]/20
                    hover:bg-[#00ff66]/[0.06]
                    hover:text-[#00ff66]

                    sm:text-[8px]

                    ${
                      badge.includes("IFC") ||
                      badge.includes("UE")
                        ? "text-[#00ff66]"
                        : ""
                    }

                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }
                  `}
                >
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-[130%]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.07]
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-[130%]
                    "
                  />

                  <span className="relative z-10">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <div
            className="
              mt-10
              grid
              gap-4

              lg:grid-cols-[minmax(330px,0.82fr)_minmax(0,1.18fr)]

              xl:grid-cols-[minmax(380px,0.78fr)_minmax(0,1.22fr)]

              xl:gap-5
            "
          >
            {/* =================================================
                LEFT PHASES
            ================================================= */}

            <div className="flex flex-col gap-3">
              {phases.map((phase, index) => (
                <article
                  key={phase.number}
                  style={
                    {
                      "--phaseDelay": `${index * 90}ms`,
                    } as CSSProperties
                  }
                  className={`
                    phase-card
                    group
                    relative
                    overflow-hidden
                    rounded-[12px]
                    border
                    border-white/[0.045]
                    bg-[#151b17]/95
                    px-4
                    py-4

                    shadow-[0_16px_36px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.02)]

                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    hover:-translate-y-1
                    hover:border-[#00ff66]/20
                    hover:bg-[#182019]
                    hover:shadow-[0_20px_55px_rgba(0,0,0,0.28),0_0_35px_rgba(0,255,102,0.04)]

                    sm:px-5
                    sm:py-5

                    ${
                      visible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-6 opacity-0"
                    }
                  `}
                >
                  {/* hover top line */}

                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-[#00ff66]
                      via-[#4cff8e]
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* hover glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -right-14
                      -top-14
                      h-28
                      w-28
                      rounded-full
                      bg-[#00ff66]/0
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#00ff66]/[0.07]
                    "
                  />

                  {/* Header */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[#00ff66]

                        sm:text-[8px]
                      "
                    >
                      {phase.number}
                    </span>

                    <span
                      className="
                        text-right
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[#b7ffc9]/80

                        sm:text-[8px]
                      "
                    >
                      {phase.timing}
                    </span>
                  </div>

                  {/* title */}

                  <h3
                    className="
                      relative
                      z-10
                      mt-2
                      pr-5
                      text-[17px]
                      font-[700]
                      leading-[1.25]
                      tracking-[-0.03em]
                      text-[#f1fff3]

                      transition-colors
                      duration-500

                      group-hover:text-white

                      sm:text-[18px]

                      lg:text-[17px]

                      xl:text-[19px]
                    "
                  >
                    {phase.title}
                  </h3>

                  {/* description */}

                  <p
                    className="
                      relative
                      z-10
                      mt-1.5
                      max-w-[620px]
                      text-[11px]
                      font-normal
                      leading-[1.6]
                      tracking-[-0.008em]
                      text-[#b6ffc7]/75

                      transition-colors
                      duration-500

                      group-hover:text-[#d0ffdc]/90

                      sm:text-[12px]

                      xl:text-[12.5px]
                    "
                  >
                    {phase.description}
                  </p>

                  {/* arrow */}

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-7
                      w-7
                      translate-x-2
                      items-center
                      justify-center
                      rounded-full

                      text-[#00ff66]
                      opacity-0

                      transition-all
                      duration-500

                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </article>
              ))}
            </div>

            {/* =================================================
                RIGHT INSPECTOR
            ================================================= */}

            <div
              className={`
                inspector-enter
                group/inspector
                relative
                overflow-hidden
                rounded-[14px]
                border
                border-white/[0.055]
                bg-[#191f1b]

                p-3

                shadow-[0_25px_70px_rgba(0,0,0,0.23),inset_0_1px_0_rgba(255,255,255,0.025)]

                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]

                hover:border-[#00ff66]/16
                hover:shadow-[0_32px_95px_rgba(0,0,0,0.32),0_0_50px_rgba(0,255,102,0.045)]

                sm:p-4

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-7 opacity-0"
                }
              `}
            >
              {/* top glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  top-0
                  h-px
                  w-[34%]
                  bg-gradient-to-r
                  from-transparent
                  via-[#00ff66]/60
                  to-transparent
                "
              />

              {/* =================================================
                  INSPECTOR HEADER
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                  "
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[#00ff66]
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2
                        w-2
                        rounded-full
                        bg-[#00ff66]
                        shadow-[0_0_10px_rgba(0,255,102,0.85)]
                      "
                    />
                  </span>

                  <p
                    className="
                      truncate
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.14em]
                      text-white/85

                      sm:text-[8px]
                    "
                  >
                    Specimen Inspector: "The Aeon Research Arch"
                  </p>
                </div>

                <Network
                  className="
                    hidden
                    h-4
                    w-4
                    text-[#00ff66]/45

                    sm:block
                  "
                />
              </div>

              {/* =================================================
                  TABS
              ================================================= */}

              <div
                className="
                  mt-3
                  flex
                  w-full
                  overflow-x-auto
                  rounded-[7px]
                  bg-[#080d0a]
                  p-1
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden

                  sm:w-fit
                "
              >
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`
                      relative
                      shrink-0
                      rounded-[5px]
                      px-3
                      py-1.5

                      text-[7px]
                      font-black
                      tracking-[0.13em]

                      transition-all
                      duration-300

                      sm:px-4

                      ${
                        activeTab === tab
                          ? "bg-[#00ff66] text-[#021208] shadow-[0_0_18px_rgba(0,255,102,0.2)]"
                          : "text-[#c4ffd3]/70 hover:bg-white/[0.035] hover:text-white"
                      }
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* =================================================
                  IMAGE VIEWPORT
              ================================================= */}

              <div
                className="
                  relative
                  mt-4
                  aspect-[1.15/1]
                  overflow-hidden
                  rounded-[9px]
                  border
                  border-white/[0.06]
                  bg-[#07100b]

                  sm:aspect-[1.55/1]

                  md:aspect-[1.75/1]

                  lg:aspect-[1.55/1]

                  xl:aspect-[1.75/1]
                "
              >
                {!imageFailed ? (
                  <Image
                    src="/assets/imagesarchitecture-bim.png"
                    alt="BIM architectural technical visualization"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    onError={() => setImageFailed(true)}
                    className="
                      object-cover
                      object-center

                      transition-all
                      duration-[1400ms]
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      group-hover/inspector:scale-[1.025]
                    "
                  />
                ) : (
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-[#05100a]
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.17]
                        [background-image:linear-gradient(rgba(0,255,102,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.25)_1px,transparent_1px)]
                        [background-size:32px_32px]
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        h-28
                        w-28
                        items-center
                        justify-center
                        rounded-[24px]
                        border
                        border-[#00ff66]/15
                        bg-[#00ff66]/[0.025]
                        shadow-[0_0_60px_rgba(0,255,102,0.07)]
                      "
                    >
                      <Layers3
                        className="
                          h-12
                          w-12
                          text-[#00ff66]/70
                        "
                      />
                    </div>
                  </div>
                )}

                {/* image dark overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#021008]/70
                    via-transparent
                    to-black/15
                  "
                />

                {/* green overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-r
                    from-[#00ff66]/[0.025]
                    via-transparent
                    to-[#00ff66]/[0.035]
                  "
                />

                {/* scanning line */}

                <div
                  className="
                    matrix-scan
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-20
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-[#00ff66]
                    to-transparent
                    opacity-60
                    shadow-[0_0_18px_rgba(0,255,102,0.7)]
                  "
                />

                {/* Top HUD */}

                <div
                  className="
                    absolute
                    left-3
                    top-3
                    z-20
                    max-w-[86%]
                    rounded-[5px]
                    border
                    border-[#00ff66]/10
                    bg-[#04120b]/80
                    px-2.5
                    py-1.5

                    text-[6px]
                    font-black
                    uppercase
                    tracking-[0.1em]
                    text-[#00ff66]

                    backdrop-blur-md

                    sm:text-[7px]
                  "
                >
                  Layer 01: 2D/3D Combined Schematics Active
                </div>

                {/* corner marks */}

                <span
                  className="
                    absolute
                    left-3
                    top-12
                    z-20
                    h-5
                    w-5
                    border-l
                    border-t
                    border-[#00ff66]/35
                  "
                />

                <span
                  className="
                    absolute
                    right-3
                    top-3
                    z-20
                    h-5
                    w-5
                    border-r
                    border-t
                    border-[#00ff66]/35
                  "
                />

                {/* bottom HUD */}

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    z-20
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-2

                    text-[6px]
                    font-black
                    uppercase
                    tracking-[0.08em]
                    text-[#b9ffc9]/75

                    sm:text-[7px]
                  "
                >
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span>
                      Nodes:{" "}
                      <span className="text-white">
                        14,290
                      </span>
                    </span>

                    <span>
                      Clashes:{" "}
                      <span className="text-[#00ff66]">
                        0
                      </span>
                    </span>

                    <span>
                      Revision:{" "}
                      <span className="text-[#00ff66]">
                        REV-C4
                      </span>
                    </span>
                  </div>

                  <span className="text-[#00ff66]">
                    Tolerance: &lt; 0.5MM
                  </span>
                </div>
              </div>

              {/* =================================================
                  BOTTOM STATS
              ================================================= */}

              <div
                className="
                  mt-3
                  grid
                  gap-2

                  sm:grid-cols-3
                "
              >
                {bottomStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="
                      group/stat
                      relative
                      overflow-hidden
                      rounded-[6px]
                      border
                      border-white/[0.04]
                      bg-[#080d0a]
                      px-3
                      py-2.5

                      transition-all
                      duration-400

                      hover:border-[#00ff66]/15
                      hover:bg-[#0b120e]
                    "
                  >
                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-px
                        w-0
                        bg-[#00ff66]
                        transition-all
                        duration-500
                        group-hover/stat:w-full
                      "
                    />

                    <p
                      className="
                        text-[6px]
                        font-black
                        uppercase
                        tracking-[0.13em]
                        text-white/55

                        sm:text-[7px]
                      "
                    >
                      {stat.label}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.11em]
                        text-[#00ff66]

                        sm:text-[8px]
                      "
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATION
      ===================================================== */}

      <style jsx global>{`
        .phase-card {
          transition-delay: var(--phaseDelay);
        }

        .format-badge {
          transition-delay: var(--badgeDelay);
        }

        @keyframes matrixScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          8% {
            opacity: 0.6;
          }

          50% {
            opacity: 0.45;
          }

          92% {
            opacity: 0.6;
          }

          100% {
            transform: translateY(480px);
            opacity: 0;
          }
        }

        .matrix-scan {
          animation: matrixScan 5.5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .matrix-scan {
            animation: none !important;
          }

          .phase-card,
          .format-badge,
          .inspector-enter {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}