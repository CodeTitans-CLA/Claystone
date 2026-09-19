"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { Geist } from "next/font/google";

import {
  ChevronRight,
  Layers3,
  Network,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

/* =========================================================
   FONT
========================================================= */

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

/* =========================================================
   TAB DATA
========================================================= */

const tabs = [
  {
    id: "schematic",
    label: "Schematic",
    image: "/assets/imagesarchitecture-bim.png",
    fallback:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=90",
    alt: "Architectural schematic BIM visualization",
    hud:
      "Layer 01: 2D/300D Combined Schematics Active",
  },
  {
    id: "wireframe",
    label: "Wireframe",
    image: "/assets/architecture-wireframe.png",
    fallback:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90",
    alt: "Architectural wireframe and technical building visualization",
    hud:
      "Layer 02: Architectural Wireframe Geometry Active",
  },
  {
    id: "mep-sync",
    label: "MEP Sync",
    image: "/assets/architecture-mep-sync.png",
    fallback:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=90",
    alt: "MEP engineering coordination and BIM systems visualization",
    hud:
      "Layer 03: MEP Coordination & Clash Sync Active",
  },
  {
    id: "photoreal",
    label: "Photoreal",
    image: "/assets/architecture-photoreal.png",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    alt: "Photorealistic modern architectural rendering",
    hud:
      "Layer 04: Photoreal Material & Lighting Output Active",
  },
] as const;

type TabId =
  (typeof tabs)[number]["id"];

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
  const ref =
    useRef<HTMLElement | null>(null);

  const [
    visible,
    setVisible,
  ] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
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
  const {
    ref,
    visible,
  } = useSectionVisible();

  const [
    activeTab,
    setActiveTab,
  ] =
    useState<TabId>("schematic");

  const [
    imageFailed,
    setImageFailed,
  ] = useState(false);

  const [
    fallbackFailed,
    setFallbackFailed,
  ] = useState(false);

  const activeTabData =
    tabs.find(
      (tab) =>
        tab.id === activeTab
    ) ?? tabs[0];

  /* =========================================================
     RESET IMAGE STATE ON TAB CHANGE
  ========================================================= */

  useEffect(() => {
    setImageFailed(false);
    setFallbackFailed(false);
  }, [activeTab]);

  return (
    <section
      ref={ref}
      className={`
        ${geist.className}

        relative
        isolate
        overflow-hidden

        bg-[linear-gradient(135deg,#020503_0%,#06100a_24%,#0a1a11_52%,#07130c_74%,#020503_100%)]

        py-8

        text-white

        sm:py-10
        md:py-12
        lg:py-14
        xl:py-16
      `}
    >
      {/* =====================================================
          BASE GRADIENT
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-0

          -z-50

          bg-[linear-gradient(135deg,#020503_0%,#06100a_24%,#0a1a11_52%,#07130c_74%,#020503_100%)]
        `}
      />

      {/* =====================================================
          TOP LEFT GREEN AMBIENT
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute

          -left-[320px]
          -top-[360px]

          -z-40

          h-[820px]
          w-[820px]

          rounded-full

          bg-[#00ff66]/10

          blur-[190px]
        `}
      />

      {/* =====================================================
          CENTER EMERALD AMBIENT
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute

          left-[48%]
          top-[36%]

          -z-40

          h-[700px]
          w-[900px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#00ff66]/5

          blur-[200px]
        `}
      />

      {/* =====================================================
          RIGHT GREEN AMBIENT
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute

          -right-[360px]
          top-[8%]

          -z-40

          h-[850px]
          w-[850px]

          rounded-full

          bg-[#18ff7b]/5

          blur-[220px]
        `}
      />

      {/* =====================================================
          LOWER CENTER DARK DEPTH
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute

          bottom-[-280px]
          left-1/2

          -z-40

          h-[620px]
          w-[1100px]

          -translate-x-1/2

          rounded-full

          bg-black/45

          blur-[180px]
        `}
      />

      {/* =====================================================
          DOT GRID
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-0

          -z-30

          opacity-[0.105]

          [background-image:radial-gradient(rgba(112,255,164,0.68)_0.75px,transparent_0.75px)]

          [background-size:26px_26px]

          [mask-image:linear-gradient(to_bottom,black_5%,rgba(0,0,0,0.85)_60%,transparent_100%)]
        `}
      />

      {/* =====================================================
          SUBTLE DIAGONAL LIGHT
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute

          -left-[20%]
          top-[23%]

          -z-30

          h-[220px]
          w-[140%]

          rotate-[-7deg]

          bg-gradient-to-r

          from-transparent

          via-[#00ff66]/5

          to-transparent

          blur-[60px]
        `}
      />

      {/* =====================================================
          TOP SHADE
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute

          inset-x-0
          top-0

          -z-20

          h-[220px]

          bg-gradient-to-b

          from-black/30

          via-black/10

          to-transparent
        `}
      />

      {/* =====================================================
          BOTTOM SHADE
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute

          inset-x-0
          bottom-0

          -z-20

          h-[240px]

          bg-gradient-to-t

          from-[#010302]/90

          via-[#041008]/35

          to-transparent
        `}
      />

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div
        className={`
          relative
          z-10

          mx-auto

          w-full
          max-w-[1600px]

          px-4

          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-14
        `}
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
            border-white/5

            bg-[linear-gradient(145deg,rgba(14,25,18,0.93)_0%,rgba(7,15,10,0.94)_48%,rgba(10,22,14,0.94)_100%)]

            p-4

            shadow-[0_35px_110px_rgba(0,0,0,0.40),0_0_80px_rgba(0,255,102,0.035),inset_0_1px_0_rgba(255,255,255,0.035)]

            backdrop-blur-2xl

            transition-all

            duration-1000

            ease-[cubic-bezier(0.16,1,0.3,1)]

            sm:p-5
            md:p-5
            lg:p-6
            xl:p-7

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* PANEL LEFT GLOW */}

          <div
            className={`
              pointer-events-none

              absolute

              -left-[180px]
              -top-[220px]

              h-[520px]
              w-[560px]

              rounded-full

              bg-[#00ff66]/5

              blur-[140px]
            `}
          />

          {/* PANEL RIGHT GLOW */}

          <div
            className={`
              pointer-events-none

              absolute

              -right-[200px]
              bottom-[-250px]

              h-[600px]
              w-[600px]

              rounded-full

              bg-[#00ff66]/5

              blur-[160px]
            `}
          />

          {/* PANEL INNER SHADE */}

          <div
            className={`
              pointer-events-none

              absolute
              inset-0

              bg-[radial-gradient(circle_at_55%_35%,rgba(0,255,102,0.025),transparent_48%)]
            `}
          />

          {/* NEON TOP LINE */}

          <div
            className={`
              pointer-events-none

              absolute

              left-[5%]
              top-0

              h-px
              w-[32%]

              bg-gradient-to-r

              from-transparent

              via-[#00ff66]/75

              to-transparent

              shadow-[0_0_18px_rgba(0,255,102,0.5)]
            `}
          />

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className={`
              relative
              z-10

              max-w-[1100px]
            `}
          >
            {/* Eyebrow */}

            <div
              className={`
                mb-3

                flex

                items-center

                gap-2.5

                text-[10px]

                font-black

                uppercase

                tracking-[0.15em]

                text-[#00ff66]

                sm:text-[11px]

                lg:text-[12px]

                xl:text-[13px]
              `}
            >
              <span
                className={`
                  h-2
                  w-2

                  shrink-0

                  rounded-full

                  bg-[#00ff66]

                  shadow-[0_0_10px_rgba(0,255,102,0.9)]
                `}
              />

              Pipeline • Interactive Inspector
            </div>

            {/* Heading */}

            <h2
              className={`
                max-w-[1000px]

                text-[44px]

                font-[700]

                leading-[1.01]

                tracking-[-0.055em]

                text-[#f1fff4]

                min-[420px]:text-[48px]

                sm:text-[58px]

                md:text-[64px]

                lg:text-[72px]

                xl:text-[80px]
              `}
            >
              Phase-by-Phase Technical

              <span className="block">
                Matrix
              </span>
            </h2>

            {/* Description */}

            <p
              className={`
                mt-4

                max-w-[800px]

                text-[15px]

                leading-[1.72]

                text-white/50

                sm:text-[16px]

                lg:text-[17px]

                xl:text-[18px]
              `}
            >
              A coordinated project pipeline connecting early
              feasibility, design development, permit documentation,
              and construction-stage BIM coordination within one
              integrated technical workflow.
            </p>
          </div>

          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <div
            className={`
              relative
              z-10

              mt-7

              grid

              gap-4

              lg:mt-8

              lg:grid-cols-[minmax(350px,0.78fr)_minmax(0,1.22fr)]

              xl:grid-cols-[minmax(410px,0.75fr)_minmax(0,1.25fr)]

              xl:gap-5
            `}
          >
            {/* =================================================
                LEFT PHASES
            ================================================= */}

            <div
              className={`
                flex
                flex-col

                gap-3
              `}
            >
              {phases.map(
                (
                  phase,
                  index
                ) => (
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

                      rounded-[15px]

                      border
                      border-white/5

                      bg-[linear-gradient(135deg,rgba(25,37,29,0.96)_0%,rgba(14,24,18,0.96)_100%)]

                      px-4
                      py-4

                      shadow-[0_16px_36px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.025)]

                      transition-all

                      duration-500

                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      hover:-translate-y-1

                      hover:border-[#00ff66]/25

                      hover:bg-[linear-gradient(135deg,rgba(29,46,34,0.98)_0%,rgba(15,31,21,0.98)_100%)]

                      hover:shadow-[0_22px_60px_rgba(0,0,0,0.32),0_0_38px_rgba(0,255,102,0.08)]

                      sm:px-5
                      sm:py-5

                      ${
                        visible
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-6 opacity-0"
                      }
                    `}
                  >
                    {/* Top Line */}

                    <span
                      className={`
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
                      `}
                    />

                    {/* Glow */}

                    <span
                      className={`
                        pointer-events-none

                        absolute

                        -right-14
                        -top-14

                        h-32
                        w-32

                        rounded-full

                        bg-[#00ff66]/0

                        blur-3xl

                        transition-all

                        duration-500

                        group-hover:bg-[#00ff66]/10
                      `}
                    />

                    {/* Meta */}

                    <div
                      className={`
                        relative
                        z-10

                        flex

                        items-center
                        justify-between

                        gap-3
                      `}
                    >
                      <span
                        className={`
                          text-[10px]

                          font-black

                          uppercase

                          tracking-[0.15em]

                          text-[#00ff66]

                          sm:text-[11px]

                          xl:text-[12px]
                        `}
                      >
                        {phase.number}
                      </span>

                      <span
                        className={`
                          text-right

                          text-[10px]

                          font-black

                          uppercase

                          tracking-[0.13em]

                          text-[#b7ffc9]/75

                          sm:text-[11px]

                          xl:text-[12px]
                        `}
                      >
                        {phase.timing}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className={`
                        relative
                        z-10

                        mt-2.5

                        pr-8

                        text-[21px]

                        font-[700]

                        leading-[1.2]

                        tracking-[-0.03em]

                        text-[#f1fff3]

                        transition-colors

                        duration-500

                        group-hover:text-white

                        sm:text-[23px]

                        lg:text-[22px]

                        xl:text-[24px]

                        2xl:text-[26px]
                      `}
                    >
                      {phase.title}
                    </h3>

                    {/* Description */}

                    <p
                      className={`
                        relative
                        z-10

                        mt-2.5

                        max-w-[700px]

                        text-[14px]

                        font-normal

                        leading-[1.65]

                        tracking-[-0.008em]

                        text-[#b6ffc7]/70

                        transition-colors

                        duration-500

                        group-hover:text-[#d0ffdc]/90

                        sm:text-[15px]

                        xl:text-[15.5px]

                        2xl:text-[16px]
                      `}
                    >
                      {phase.description}
                    </p>

                    {/* Arrow */}

                    <div
                      className={`
                        absolute

                        bottom-4
                        right-4

                        flex

                        h-8
                        w-8

                        translate-x-2

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#00ff66]/0

                        text-[#00ff66]

                        opacity-0

                        transition-all

                        duration-500

                        group-hover:translate-x-0

                        group-hover:border-[#00ff66]/20

                        group-hover:bg-[#00ff66]/5

                        group-hover:opacity-100
                      `}
                    >
                      <ChevronRight
                        className={`
                          h-4
                          w-4
                        `}
                      />
                    </div>
                  </article>
                )
              )}
            </div>

            {/* =================================================
                RIGHT INSPECTOR
            ================================================= */}

            <div
              className={`
                inspector-enter

                group

                relative

                overflow-hidden

                rounded-[16px]

                border
                border-white/5

                bg-[linear-gradient(145deg,rgba(29,41,34,0.97)_0%,rgba(15,24,18,0.98)_100%)]

                p-3.5

                shadow-[0_25px_70px_rgba(0,0,0,0.30),0_0_40px_rgba(0,255,102,0.03),inset_0_1px_0_rgba(255,255,255,0.03)]

                transition-all

                duration-700

                ease-[cubic-bezier(0.16,1,0.3,1)]

                hover:border-[#00ff66]/20

                hover:shadow-[0_34px_100px_rgba(0,0,0,0.40),0_0_55px_rgba(0,255,102,0.07)]

                sm:p-4
                lg:p-4
                xl:p-5

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-7 opacity-0"
                }
              `}
            >
              {/* Inspector Top Line */}

              <div
                className={`
                  pointer-events-none

                  absolute

                  left-[8%]
                  top-0

                  h-px
                  w-[34%]

                  bg-gradient-to-r

                  from-transparent

                  via-[#00ff66]/70

                  to-transparent
                `}
              />

              {/* =================================================
                  INSPECTOR HEADER
              ================================================= */}

              <div
                className={`
                  flex

                  flex-col

                  gap-3

                  sm:flex-row

                  sm:items-center
                  sm:justify-between
                `}
              >
                <div
                  className={`
                    flex

                    min-w-0

                    items-center

                    gap-2.5
                  `}
                >
                  <span
                    className={`
                      relative

                      flex

                      h-2.5
                      w-2.5

                      shrink-0
                    `}
                  >
                    <span
                      className={`
                        absolute

                        inline-flex

                        h-full
                        w-full

                        animate-ping

                        rounded-full

                        bg-[#00ff66]

                        opacity-50
                      `}
                    />

                    <span
                      className={`
                        relative

                        inline-flex

                        h-2.5
                        w-2.5

                        rounded-full

                        bg-[#00ff66]

                        shadow-[0_0_10px_rgba(0,255,102,0.85)]
                      `}
                    />
                  </span>

                  <p
                    className={`
                      truncate

                      text-[11px]

                      font-black

                      uppercase

                      tracking-[0.11em]

                      text-white/90

                      sm:text-[12px]

                      lg:text-[12px]

                      xl:text-[13px]
                    `}
                  >
                    Specimen Inspector: &quot;The Aeon Research Arch&quot;
                  </p>
                </div>

                <Network
                  className={`
                    hidden

                    h-5
                    w-5

                    shrink-0

                    text-[#00ff66]/55

                    sm:block

                    xl:h-6
                    xl:w-6
                  `}
                />
              </div>

              {/* =================================================
                  TABS
              ================================================= */}

              <div
                className={`
                  mt-3.5

                  flex

                  w-full

                  overflow-x-auto

                  rounded-[9px]

                  border
                  border-white/5

                  bg-black/35

                  p-1

                  shadow-[inset_0_1px_8px_rgba(0,0,0,0.3)]

                  [scrollbar-width:none]

                  [&::-webkit-scrollbar]:hidden

                  sm:w-fit
                `}
              >
                {tabs.map(
                  (tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() =>
                        setActiveTab(
                          tab.id
                        )
                      }
                      className={`
                        relative

                        shrink-0

                        cursor-pointer

                        rounded-[7px]

                        px-3.5
                        py-2

                        text-[10px]

                        font-black

                        tracking-[0.10em]

                        transition-all

                        duration-300

                        sm:px-4

                        sm:text-[11px]

                        xl:px-5

                        xl:text-[12px]

                        ${
                          activeTab ===
                          tab.id
                            ? "bg-gradient-to-r from-[#00FF66] via-[#2bff88] to-[#00cc52] text-[#021208] shadow-[0_0_22px_rgba(0,255,102,0.32)]"
                            : "text-[#c4ffd3]/75 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  )
                )}
              </div>

              {/* =================================================
                  IMAGE VIEWPORT
              ================================================= */}

              <div
                className={`
                  relative

                  mt-3.5

                  aspect-[1.08/100]

                  overflow-hidden

                  rounded-[11px]

                  border
                  border-white/5

                  bg-[#07100b]

                  shadow-[0_20px_45px_rgba(0,0,0,0.22)]

                  sm:aspect-[1.45/100]

                  md:aspect-[1.62/100]

                  lg:aspect-[1.48/100]

                  xl:aspect-[1.70/100]
                `}
              >
                {/* PRIMARY */}

                {!imageFailed ? (
                  <Image
                    key={`${activeTabData.id}-primary`}
                    src={
                      activeTabData.image
                    }
                    alt={
                      activeTabData.alt
                    }
                    fill
                    priority={
                      activeTab ===
                      "schematic"
                    }
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    onError={() =>
                      setImageFailed(true)
                    }
                    className={`
                      inspector-image-swap

                      object-cover
                      object-center

                      transition-transform

                      duration-[1400ms]

                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      group-hover:scale-[1.025]
                    `}
                  />
                ) : !fallbackFailed ? (
                  /* FALLBACK */

                  <img
                    key={`${activeTabData.id}-fallback`}
                    src={
                      activeTabData.fallback
                    }
                    alt={
                      activeTabData.alt
                    }
                    onError={() =>
                      setFallbackFailed(true)
                    }
                    className={`
                      inspector-image-swap

                      absolute
                      inset-0

                      h-full
                      w-full

                      object-cover
                      object-center

                      transition-transform

                      duration-[1400ms]

                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      group-hover:scale-[1.025]
                    `}
                  />
                ) : (
                  /* FINAL FALLBACK */

                  <div
                    className={`
                      inspector-image-swap

                      absolute
                      inset-0

                      flex

                      items-center
                      justify-center

                      bg-[#05100a]
                    `}
                  >
                    <div
                      className={`
                        absolute
                        inset-0

                        opacity-[0.17]

                        [background-image:linear-gradient(rgba(0,255,102,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.25)_1px,transparent_1px)]

                        [background-size:32px_32px]
                      `}
                    />

                    <div
                      className={`
                        relative

                        flex

                        h-28
                        w-28

                        items-center
                        justify-center

                        rounded-[24px]

                        border
                        border-[#00ff66]/15

                        bg-[#00ff66]/5

                        shadow-[0_0_60px_rgba(0,255,102,0.07)]
                      `}
                    >
                      <Layers3
                        className={`
                          h-12
                          w-12

                          text-[#00ff66]/70
                        `}
                      />
                    </div>
                  </div>
                )}

                {/* Dark Overlay */}

                <div
                  className={`
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-[#021008]/75

                    via-transparent

                    to-black/15
                  `}
                />

                {/* Green Overlay */}

                <div
                  className={`
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-r

                    from-[#00ff66]/5

                    via-transparent

                    to-[#00ff66]/5
                  `}
                />

                {/* Scan */}

                <div
                  key={`scan-${activeTab}`}
                  className={`
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
                  `}
                />

                {/* TOP HUD */}

                <div
                  key={`hud-${activeTab}`}
                  className={`
                    inspector-hud-swap

                    absolute

                    left-3
                    top-3

                    z-20

                    max-w-[92%]

                    rounded-[8px]

                    border
                    border-[#00ff66]/20

                    bg-[#04120b]/90

                    px-3
                    py-2

                    text-[10px]

                    font-black

                    uppercase

                    tracking-[0.08em]

                    text-[#00ff66]

                    shadow-[0_10px_28px_rgba(0,0,0,0.28),0_0_20px_rgba(0,255,102,0.06)]

                    backdrop-blur-xl

                    sm:text-[11px]

                    lg:text-[11.5px]

                    xl:text-[12.5px]
                  `}
                >
                  {
                    activeTabData.hud
                  }
                </div>

                {/* LEFT CORNER */}

                <span
                  className={`
                    absolute

                    left-3
                    top-[64px]

                    z-20

                    h-6
                    w-6

                    border-l
                    border-t

                    border-[#00ff66]/45
                  `}
                />

                {/* RIGHT CORNER */}

                <span
                  className={`
                    absolute

                    right-3
                    top-3

                    z-20

                    h-6
                    w-6

                    border-r
                    border-t

                    border-[#00ff66]/45
                  `}
                />

                {/* BOTTOM HUD */}

                <div
                  className={`
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

                    rounded-[8px]

                    border
                    border-white/5

                    bg-[#031009]/70

                    px-3
                    py-2

                    text-[9px]

                    font-black

                    uppercase

                    tracking-[0.065em]

                    text-[#b9ffc9]/80

                    shadow-[0_8px_30px_rgba(0,0,0,0.22)]

                    backdrop-blur-lg

                    sm:text-[10px]

                    lg:text-[10.5px]

                    xl:text-[11px]
                  `}
                >
                  <div
                    className={`
                      flex
                      flex-wrap

                      gap-x-4
                      gap-y-1.5
                    `}
                  >
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
                className={`
                  mt-3

                  grid

                  gap-2

                  sm:grid-cols-3
                `}
              >
                {bottomStats.map(
                  (stat) => (
                    <div
                      key={stat.label}
                      className={`
                        group

                        relative

                        overflow-hidden

                        rounded-[8px]

                        border
                        border-white/5

                        bg-[linear-gradient(135deg,rgba(8,16,11,0.94),rgba(13,25,17,0.94))]

                        px-3.5
                        py-3

                        transition-all

                        duration-500

                        hover:border-[#00ff66]/20

                        hover:bg-[linear-gradient(135deg,rgba(10,24,15,0.98),rgba(14,32,20,0.98))]

                        hover:shadow-[0_10px_30px_rgba(0,0,0,0.20),0_0_22px_rgba(0,255,102,0.05)]
                      `}
                    >
                      {/* Accent */}

                      <span
                        className={`
                          absolute

                          left-0
                          top-0

                          h-px
                          w-0

                          bg-[#00ff66]

                          transition-all

                          duration-500

                          group-hover:w-full
                        `}
                      />

                      {/* Label */}

                      <p
                        className={`
                          text-[9px]

                          font-black

                          uppercase

                          tracking-[0.10em]

                          text-white/60

                          sm:text-[9.5px]

                          lg:text-[10px]

                          xl:text-[10.5px]
                        `}
                      >
                        {stat.label}
                      </p>

                      {/* Value */}

                      <p
                        className={`
                          mt-1.5

                          text-[11px]

                          font-black

                          uppercase

                          tracking-[0.09em]

                          text-[#00ff66]

                          sm:text-[11.5px]

                          lg:text-[12px]

                          xl:text-[13px]
                        `}
                      >
                        {stat.value}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATION
      ====================================================== */}

      <style jsx global>{`
        .phase-card {
          transition-delay: var(
            --phaseDelay
          );
        }

        @keyframes inspectorImageSwap {
          0% {
            opacity: 0;
            transform: scale(
              1.035
            );
            filter: blur(4px);
          }

          45% {
            opacity: 0.75;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        .inspector-image-swap {
          animation:
            inspectorImageSwap
            650ms
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            )
            both;
        }

        @keyframes inspectorHudSwap {
          0% {
            opacity: 0;
            transform: translateY(
              -6px
            );
          }

          100% {
            opacity: 1;
            transform: translateY(
              0
            );
          }
        }

        .inspector-hud-swap {
          animation:
            inspectorHudSwap
            450ms
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            )
            both;
        }

        @keyframes matrixScan {
          0% {
            transform: translateY(
              0
            );
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
            transform: translateY(
              700px
            );
            opacity: 0;
          }
        }

        .matrix-scan {
          animation:
            matrixScan
            5.5s
            linear
            infinite;
        }

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .matrix-scan,
          .inspector-image-swap,
          .inspector-hud-swap {
            animation: none !important;
          }

          .phase-card,
          .inspector-enter {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}