"use client";

/* eslint-disable @next/next/no-img-element */

import { Geist } from "next/font/google";

import {
  Blocks,
  Building2,
  DraftingCompass,
  Grid3X3,
  Network,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type SyntheticEvent,
} from "react";

/* =========================================================
   FONT
========================================================= */

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   TYPES
========================================================= */

type ServiceItem = {
  number: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

/* =========================================================
   DATA
========================================================= */

const FALLBACK_IMAGE =
  "/assets/imagesarchitecture-bim.png";

const services: ServiceItem[] = [
  {
    number: "01",
    category: "FEASIBILITY",
    title:
      "2D Floor Plans & Layout Optimization",
    description:
      "Detailed architectural space programming, circulation-flow analysis, structural partition planning, and human-scale ergonomics engineered for maximum spatial efficiency and usability.",
    icon: Grid3X3,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    category: "PERMITS",
    title:
      "Architectural Drafting & Permit Sets",
    description:
      "Complete CAD construction documentation including permit drawings, sections, elevations, envelope details, schedules, and coordinated code-compliance information.",
    icon: DraftingCompass,
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    category: "VIRTUAL TWIN",
    title:
      "3D BIM Modeling (LOD 100 – 400)",
    description:
      "Parametric Revit and ArchiCAD models, clash-detection workflows, multi-trade coordination, and fabrication-ready digital twins prepared for professional project delivery.",
    icon: Blocks,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    category: "FORM & LIGHT",
    title:
      "Interior & Exterior Spatial Design",
    description:
      "Volumetric massing, facade articulation, lighting strategy, material selection, environmental response, and seamless indoor-outdoor spatial design.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "05",
    category: "SYSTEMS",
    title:
      "Structural & MEP Coordination",
    description:
      "Integrated structural, HVAC, electrical, plumbing, and mechanical coordination developed directly within the architectural model to minimize construction clashes.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "06",
    category: "RENDER",
    title:
      "Photoreal Cinematic Visualization",
    description:
      "High-end exterior and interior visualization, cinematic lighting, real-time rendering, interactive presentations, and ultra-high-resolution architectural imagery.",
    icon: ScanLine,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90",
  },
];

/* =========================================================
   VIEWPORT REVEAL
========================================================= */

function useInView() {
  const ref =
    useRef<HTMLDivElement | null>(null);

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
          threshold: 0.1,
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
   SERVICE IMAGE
========================================================= */

function ServiceImage({
  item,
}: {
  item: ServiceItem;
}) {
  const handleError = (
    event: SyntheticEvent<HTMLImageElement>
  ) => {
    const image =
      event.currentTarget;

    if (
      image.src.includes(
        FALLBACK_IMAGE
      )
    ) {
      return;
    }

    image.src =
      FALLBACK_IMAGE;
  };

  return (
    <div
      className="
        group/image
        relative
        z-10

        mt-4

        aspect-square
        w-full
        shrink-0

        overflow-hidden

        rounded-[18px]

        border
        border-white/[0.08]

        bg-[#07100b]

        shadow-[0_18px_42px_rgba(0,0,0,0.38),0_0_22px_rgba(0,255,102,0.025)]

        transition-all
        duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]

        group-hover:border-[#00ff66]/30

        group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.48),0_0_35px_rgba(0,255,102,0.11)]
      "
    >
      {/* IMAGE */}

      <img
        src={item.image}
        alt={item.title}
        onError={handleError}
        draggable={false}
        className="
          absolute
          inset-0

          h-full
          w-full

          select-none

          object-cover
          object-center

          transition-transform
          duration-[1100ms]

          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover/image:scale-[1.08]
        "
      />

      {/* DARK GRADIENT */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-t

          from-[#021108]/72

          via-transparent

          to-black/[0.03]
        "
      />

      {/* GREEN TINT */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-br

          from-[#00ff66]/[0.035]

          via-transparent

          to-[#00ff66]/[0.11]
        "
      />

      {/* INNER VIGNETTE */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          shadow-[inset_0_0_70px_rgba(0,0,0,0.22)]
        "
      />

      {/* IMAGE LABEL */}

      <div
        className="
          absolute

          bottom-3
          left-3
          right-3

          truncate

          rounded-lg

          border
          border-[#00ff66]/20

          bg-[#021008]/80

          px-3
          py-2

          text-center

          font-mono

          text-[8px]

          font-black

          uppercase

          tracking-[0.1em]

          text-[#79ffab]

          shadow-[0_8px_25px_rgba(0,0,0,0.25)]

          backdrop-blur-xl

          sm:text-[9px]

          xl:text-[9.5px]
        "
      >
        {item.category}
      </div>

      {/* TOP HOVER LIGHT */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-0

          h-px
          w-0

          -translate-x-1/2

          bg-gradient-to-r

          from-transparent

          via-[#00ff66]

          to-transparent

          transition-all

          duration-700

          group-hover/image:w-[75%]
        "
      />
    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  item,
  index,
}: {
  item: ServiceItem;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <article
      style={
        {
          "--delay": `${index * 80}ms`,
        } as CSSProperties
      }
      className="
        service-card

        group

        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[22px]

        border
        border-white/[0.07]

        bg-[linear-gradient(145deg,#101813_0%,#0b120e_58%,#08100b_100%)]

        p-[18px]

        shadow-[0_24px_65px_rgba(0,0,0,0.34),0_0_25px_rgba(0,255,102,0.025),inset_0_1px_0_rgba(255,255,255,0.03)]

        backdrop-blur-xl

        transition-all

        duration-700

        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:-translate-y-2

        hover:border-[#00ff66]/25

        hover:shadow-[0_40px_100px_rgba(0,0,0,0.54),0_0_48px_rgba(0,255,102,0.11),inset_0_1px_0_rgba(255,255,255,0.045)]

        sm:p-5

        xl:p-6
      "
    >
      {/* ===================================================
          CARD BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_88%_7%,rgba(0,255,102,0.075),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.025),transparent_44%)]
        "
      />

      {/* TOP GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          -right-24
          -top-24

          h-64
          w-64

          rounded-full

          bg-[#00ff66]/[0.045]

          blur-[90px]

          transition-all
          duration-700

          group-hover:scale-125

          group-hover:bg-[#00ff66]/[0.095]
        "
      />

      {/* BOTTOM GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          -bottom-40

          left-1/2

          h-72
          w-72

          -translate-x-1/2

          rounded-full

          bg-[#00ff66]/[0.025]

          blur-[110px]

          transition-all
          duration-700

          group-hover:bg-[#00ff66]/[0.055]
        "
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.025]

          [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]

          [background-size:46px_46px]
        "
      />

      {/* TOP BORDER */}

      <div
        className="
          absolute

          left-1/2
          top-0

          h-px
          w-[20%]

          -translate-x-1/2

          bg-gradient-to-r

          from-transparent

          via-[#00ff66]/45

          to-transparent

          transition-all
          duration-700

          group-hover:w-[75%]

          group-hover:via-[#00ff66]
        "
      />

      {/* SHINE */}

      <span
        className="
          pointer-events-none

          absolute

          inset-y-0

          -left-[55%]

          w-[25%]

          skew-x-[-20deg]

          bg-gradient-to-r

          from-transparent

          via-white/[0.035]

          to-transparent

          transition-all
          duration-1000

          group-hover:left-[130%]
        "
      />

      {/* ===================================================
          TOP ROW
      =================================================== */}

      <div
        className="
          relative
          z-10

          flex

          items-start

          justify-between

          gap-3
        "
      >
        {/* ICON */}

        <div
          className="
            flex

            h-11
            w-11

            shrink-0

            items-center

            justify-center

            rounded-[11px]

            border
            border-[#00ff66]/15

            bg-[#00ff66]/[0.045]

            text-[#00ff66]

            shadow-[0_0_20px_rgba(0,255,102,0.06)]

            transition-all

            duration-500

            group-hover:rotate-6

            group-hover:scale-110

            group-hover:border-[#00ff66]/30

            group-hover:bg-[#00ff66]/[0.08]

            group-hover:shadow-[0_0_30px_rgba(0,255,102,0.13)]
          "
        >
          <Icon
            className="
              h-5
              w-5
            "
            strokeWidth={1.8}
          />
        </div>

        {/* META */}

        <div
          className="
            flex

            items-center

            gap-1.5

            pt-1

            text-right

            font-mono

            text-[9px]

            font-black

            uppercase

            tracking-[0.15em]

            text-[#00ff66]

            sm:text-[10px]

            xl:text-[10.5px]
          "
        >
          <span>
            {item.number}
          </span>

          <span className="text-[#00ff66]/40">
            //
          </span>

          <span>
            {item.category}
          </span>
        </div>
      </div>

      {/* ===================================================
          CONTENT AREA
          MORE COMPACT
      =================================================== */}

      <div
        className="
          relative
          z-10

          mt-5

          flex
          flex-col

          min-h-[158px]

          sm:min-h-[165px]

          md:min-h-[178px]

          lg:min-h-[170px]

          xl:min-h-[180px]

          2xl:min-h-[172px]
        "
      >
        {/* TITLE */}

        <h3
          className="
            min-h-[54px]

            max-w-[460px]

            text-[22px]

            font-[700]

            leading-[1.18]

            tracking-[-0.035em]

            text-[#eff8f1]

            transition-all

            duration-500

            group-hover:translate-x-1

            group-hover:text-white

            sm:min-h-[58px]

            sm:text-[24px]

            lg:text-[23px]

            xl:min-h-[60px]

            xl:text-[25px]

            2xl:text-[27px]
          "
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-3

            max-w-[470px]

            text-[14px]

            font-normal

            leading-[1.68]

            tracking-[-0.01em]

            text-[#b5c2b9]

            transition-colors

            duration-500

            group-hover:text-[#d1dcd4]

            sm:text-[14.5px]

            lg:text-[14.5px]

            xl:text-[15px]

            2xl:text-[15.5px]
          "
        >
          {item.description}
        </p>
      </div>

      {/* ===================================================
          IMAGE
      =================================================== */}

      <ServiceImage
        item={item}
      />
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function IntegratedArchitecturalExecution() {
  const {
    ref,
    visible,
  } = useInView();

  return (
    <section
      ref={ref}
      className={`
        ${geist.className}

        relative

        isolate

        overflow-hidden

        bg-[#090e0b]

        text-white
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-50

          bg-[#090e0b]
        "
      />

      {/* DOTTED GRID */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-40

          opacity-[0.13]

          [background-image:radial-gradient(rgba(129,255,171,0.5)_0.7px,transparent_0.7px)]

          [background-size:26px_26px]
        "
      />

      {/* LEFT GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          -left-[320px]

          top-[-250px]

          -z-30

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#00ff66]/[0.045]

          blur-[170px]
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          left-[45%]

          top-[40%]

          -z-30

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#00ff66]/[0.018]

          blur-[150px]
        "
      />

      {/* BOTTOM FADE */}

      <div
        className="
          pointer-events-none

          absolute

          inset-x-0
          bottom-0

          -z-20

          h-[220px]

          bg-gradient-to-t

          from-black/25

          to-transparent
        "
      />

      {/* =====================================================
          WRAPPER
          SECTION PADDING REDUCED
      ===================================================== */}

      <div
        className="
          mx-auto

          w-full
          max-w-[1600px]

          px-4

          py-10

          sm:px-6
          sm:py-12

          md:px-8
          md:py-12

          lg:px-10
          lg:py-14

          xl:px-12
          xl:py-16

          2xl:px-14
          2xl:py-[68px]
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className={`
            grid

            items-end

            gap-5

            transition-all

            duration-1000

            ease-[cubic-bezier(0.16,1,0.3,1)]

            md:grid-cols-[1.15fr_0.85fr]

            md:gap-8

            lg:grid-cols-[1.2fr_0.8fr]

            lg:gap-9

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* LEFT */}

          <div>
            {/* EYEBROW */}

            <div
              className="
                mb-3

                flex

                items-center

                gap-2.5

                text-[9px]

                font-black

                uppercase

                tracking-[0.15em]

                text-[#00ff66]

                sm:text-[10px]

                lg:text-[11px]
              "
            >
              <span
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-[#00ff66]

                  shadow-[0_0_10px_rgba(0,255,102,0.8)]
                "
              />

              Pillars of Practice
            </div>

            {/* TITLE */}

            <h2
              className="
                max-w-[820px]

                text-[44px]

                font-[700]

                leading-[1.02]

                tracking-[-0.055em]

                text-[#f0fff3]

                min-[420px]:text-[48px]

                sm:text-[56px]

                md:text-[58px]

                lg:text-[64px]

                xl:text-[70px]

                2xl:text-[74px]
              "
            >
              Integrated Architectural

              <span className="block">
                Execution
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div
            className="
              md:pb-1
              md:pl-2

              lg:pb-2
              lg:pl-5
            "
          >
            <p
              className="
                max-w-[520px]

                text-[14px]

                font-normal

                leading-[1.7]

                tracking-[-0.01em]

                text-[#b9ffc9]/80

                sm:text-[15px]

                md:ml-auto

                lg:text-[16px]

                xl:text-[17px]
              "
            >
              A coherent continuum spanning analytical space
              programming, rigid structural calculations,
              coordinated building systems, and breathtaking
              photorealistic architectural presence.
            </p>
          </div>
        </div>

        {/* ===================================================
            CARDS
            GAP + TOP SPACE REDUCED
        =================================================== */}

        <div
          className={`
            mt-8

            grid

            auto-rows-fr

            grid-cols-1

            items-stretch

            gap-4

            sm:mt-9

            md:grid-cols-2

            md:gap-4

            lg:mt-10

            xl:grid-cols-3

            xl:gap-5

            ${
              visible
                ? "[&_.service-card]:translate-y-0 [&_.service-card]:opacity-100"
                : "[&_.service-card]:translate-y-10 [&_.service-card]:opacity-0"
            }
          `}
        >
          {services.map(
            (
              item,
              index
            ) => (
              <ServiceCard
                key={item.title}
                item={item}
                index={index}
              />
            )
          )}
        </div>
      </div>

      {/* =====================================================
          COMPONENT CSS
      ===================================================== */}

      <style jsx global>{`
        .service-card {
          transition-delay: var(
            --delay
          );
        }

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .service-card {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}