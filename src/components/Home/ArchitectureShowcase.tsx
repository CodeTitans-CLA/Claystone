"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  MoveHorizontal,
  Sparkles,
} from "lucide-react";

/* =========================================================
   REAL IMAGE PLACEHOLDERS
========================================================= */

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85";

const images = {
  drawing:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",

  architecture:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",

  architectureModel:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85",

  modernHouse:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",

  interiorPlanning:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",

  premiumInterior:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",

  interiorTwo:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",

  luxuryInterior:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85",

  exterior:
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1800&q=85",

  technical:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85",

  visualization:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85",
};

/* =========================================================
   DATA
========================================================= */

const showcaseData = [
  {
    id: "drawings",
    tab: "2D DRAWINGS & BLUEPRINTS",
    code: "01 // STRUCTURAL CRAFT",

    title:
      "Architecture Designed With Precision.",

    description:
      "From early planning and zoning studies to construction-ready architectural documentation and coordinated engineering systems, every detail is developed with technical accuracy.",

    leftImage: images.drawing,
    rightImage: images.architecture,

    leftStage:
      "STAGE 01: ARCHITECTURAL STUDY",

    rightStage:
      "STAGE 04: FINAL ARCHITECTURE",

    stats: [
      {
        label: "TOTAL AREA",
        value: "1,850 m²",
      },
      {
        label: "COORDINATION",
        value: "BIM LOD 400",
      },
      {
        label: "COMPLIANCE",
        value: "EN 1992-1 / ISO",
      },
    ],
  },

  {
    id: "architecture",
    tab: "3D ARCHITECTURE",
    code: "02 // DIGITAL BUILD",

    title:
      "Ideas Built Into Digital Space.",

    description:
      "Technical drawings are transformed into accurate three-dimensional environments with carefully resolved proportions, materials, details and spatial relationships.",

    leftImage:
      images.architectureModel,
    rightImage: images.modernHouse,

    leftStage:
      "STAGE 01: DESIGN DEVELOPMENT",

    rightStage:
      "STAGE 04: FINAL ARCHITECTURE",

    stats: [
      {
        label: "MODEL LEVEL",
        value: "LOD 350+",
      },
      {
        label: "WORKFLOW",
        value: "REVIT / SKP",
      },
      {
        label: "OUTPUT",
        value: "4K READY",
      },
    ],
  },

  {
    id: "interior",
    tab: "INTERIOR CONCEPTS",
    code:
      "03 // SPATIAL EXPERIENCE",

    title:
      "Interiors Crafted Around Experience.",

    description:
      "Thoughtful layouts, premium materials, lighting and visual hierarchy are combined to create refined, functional and memorable interior environments.",

    leftImage:
      images.interiorPlanning,
    rightImage:
      images.premiumInterior,

    leftStage:
      "STAGE 01: INTERIOR PLANNING",

    rightStage:
      "STAGE 04: FINAL INTERIOR",

    stats: [
      {
        label: "DESIGN STYLE",
        value: "PREMIUM",
      },
      {
        label: "MATERIALS",
        value: "PBR READY",
      },
      {
        label: "OUTPUT",
        value: "4K / 8K",
      },
    ],
  },

  {
    id: "exterior",
    tab: "EXTERIOR FACADES",
    code:
      "04 // ENVELOPE DESIGN",

    title:
      "Facades With Strong Architectural Identity.",

    description:
      "Material selection, massing, landscape and architectural lighting are developed together to create distinctive and sophisticated exterior compositions.",

    leftImage: images.exterior,
    rightImage: images.modernHouse,

    leftStage:
      "STAGE 01: FACADE DEVELOPMENT",

    rightStage:
      "STAGE 04: FINAL EXTERIOR",

    stats: [
      {
        label: "FACADE SYSTEM",
        value: "CUSTOM",
      },
      {
        label: "DETAIL LEVEL",
        value: "HIGH",
      },
      {
        label: "VISUAL",
        value: "REAL-TIME",
      },
    ],
  },

  {
    id: "engineering",
    tab: "STRUCTURAL & MEP",
    code:
      "05 // TECHNICAL SYSTEMS",

    title:
      "Engineering Integrated Into Design.",

    description:
      "Structural, HVAC, electrical and plumbing systems are coordinated within a unified BIM workflow for accurate documentation and efficient construction delivery.",

    leftImage: images.technical,
    rightImage: images.interiorTwo,

    leftStage:
      "STAGE 01: TECHNICAL COORDINATION",

    rightStage:
      "STAGE 04: INTEGRATED SYSTEM",

    stats: [
      {
        label: "SYSTEM",
        value: "MEP",
      },
      {
        label: "COORDINATION",
        value: "CLASH CHECK",
      },
      {
        label: "MODEL",
        value: "LOD 300+",
      },
    ],
  },

  {
    id: "visualization",
    tab:
      "PHOTOREAL VISUALIZATION",
    code:
      "06 // VISUAL REALISM",

    title:
      "Visualization That Feels Real.",

    description:
      "Advanced materials, lighting, atmosphere and cinematic composition transform architectural concepts into premium photorealistic presentations.",

    leftImage:
      images.luxuryInterior,
    rightImage:
      images.visualization,

    leftStage:
      "STAGE 01: VISUAL DEVELOPMENT",

    rightStage:
      "STAGE 04: FINAL VISUAL",

    stats: [
      {
        label: "QUALITY",
        value: "PHOTOREAL",
      },
      {
        label: "ENGINE",
        value: "D5 / BLENDER",
      },
      {
        label: "OUTPUT",
        value: "4K / 8K",
      },
    ],
  },
];

/* =========================================================
   SAFE IMAGE
========================================================= */

function ShowcaseImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      initial={{
        scale: 1.045,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 1.15,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      onError={(event) => {
        const image =
          event.currentTarget;

        if (
          image.src !==
          FALLBACK_IMAGE
        ) {
          image.src =
            FALLBACK_IMAGE;
        }
      }}
      className={`
        absolute
        inset-0

        h-full
        w-full

        select-none

        object-cover

        transition-transform

        duration-[1200ms]

        ease-out

        group-hover:scale-[1.035]
      `}
    />
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ArchitectureShowcase() {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    sliderPosition,
    setSliderPosition,
  ] = useState(52);

  const reduceMotion =
    useReducedMotion();

  const current =
    showcaseData[activeIndex];

  const changeTab = (
    index: number
  ) => {
    if (
      index === activeIndex
    ) {
      return;
    }

    setActiveIndex(index);
    setSliderPosition(52);
  };

  return (
    <section
      className={`
        relative

        w-full
        overflow-hidden

        bg-[#050907]

        py-12

        text-white

        sm:py-16

        lg:py-20
      `}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-0

          overflow-hidden
        `}
      >
        <div
          className={`
            absolute

            left-1/2
            top-[-350px]

            h-[700px]
            w-[1100px]

            max-w-full

            -translate-x-1/2

            rounded-full

            bg-[#00FF66]/5

            blur-[160px]
          `}
        />

        {!reduceMotion && (
          <motion.div
            animate={{
              x: [
                0,
                45,
                0,
              ],
              y: [
                0,
                25,
                0,
              ],
              scale: [
                1,
                1.08,
                1,
              ],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              absolute

              left-[3%]
              top-[30%]

              h-[350px]
              w-[350px]

              rounded-full

              bg-[#00FF66]/5

              blur-[140px]
            `}
          />
        )}

        {!reduceMotion && (
          <motion.div
            animate={{
              x: [
                0,
                -40,
                0,
              ],
              y: [
                0,
                -25,
                0,
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              absolute

              bottom-[5%]
              right-[2%]

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#00FF66]/5

              blur-[150px]
            `}
          />
        )}

        <div
          className={`
            absolute
            inset-0

            opacity-[0.02]

            [background-image:linear-gradient(rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.11)_1px,transparent_1px)]

            [background-size:72px_72px]
          `}
        />

        <div
          className={`
            absolute

            left-1/2
            top-0

            h-px
            w-[90%]

            max-w-[1500px]

            -translate-x-1/2

            bg-gradient-to-r

            from-transparent

            via-[#00FF66]/20

            to-transparent
          `}
        />
      </div>

      {/* =====================================================
          CONTAINER
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

          lg:px-8

          xl:px-10

          2xl:px-12
        `}
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={`header-${current.id}`}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            transition={{
              duration: 0.5,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className={`
              mb-6

              max-w-[1000px]

              sm:mb-8

              lg:mb-9
            `}
          >
            <div
              className={`
                mb-4

                flex
                items-center

                gap-3

                font-mono

                text-[9px]

                font-bold

                uppercase

                tracking-[0.16em]

                text-[#00FF66]

                sm:text-[10px]

                lg:text-[11px]
              `}
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [
                          0.45,
                          1,
                          0.45,
                        ],

                        scale: [
                          0.9,
                          1.15,
                          0.9,
                        ],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  h-2
                  w-2

                  rounded-full

                  bg-[#00FF66]

                  shadow-[0_0_14px_rgba(0,255,102,0.9)]
                `}
              />

              {current.code}
            </div>

            <h2
              className={`
                max-w-[950px]

                text-[38px]

                font-semibold

                leading-[0.98]

                tracking-[-0.045em]

                text-[#f4f7f3]

                sm:text-[50px]

                md:text-[58px]

                lg:text-[68px]

                xl:text-[74px]
              `}
            >
              {current.title}
            </h2>

            <p
              className={`
                mt-5

                max-w-[820px]

                text-[13px]

                leading-[1.8]

                text-[#9eafa5]

                sm:text-[14px]

                md:text-[15px]

                lg:text-[16px]
              `}
            >
              {
                current.description
              }
            </p>
          </motion.div>
        </AnimatePresence>

        {/* =================================================
            PREMIUM TAB NAVIGATION
        ================================================== */}

        <div
          className={`
            relative

            mb-6

            sm:mb-7

            lg:mb-8
          `}
        >
          {/* GLOW */}

          <div
            className={`
              pointer-events-none

              absolute

              left-[15%]
              top-1/2

              h-[90px]
              w-[70%]

              -translate-y-1/2

              rounded-full

              bg-[#00FF66]/5

              blur-[55px]
            `}
          />

          {/* TAB RAIL */}

          <div
            className={`
              relative

              rounded-[20px]

              border
              border-white/5

              bg-[linear-gradient(135deg,rgba(14,25,18,0.92),rgba(5,11,8,0.96))]

              p-2

              shadow-[0_18px_50px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.035),0_0_35px_rgba(0,255,102,0.035)]

              backdrop-blur-2xl

              sm:p-2.5
            `}
          >
            {/* TOP LIGHT */}

            <span
              className={`
                pointer-events-none

                absolute

                left-[4%]
                top-0

                h-px
                w-[26%]

                bg-gradient-to-r

                from-transparent

                via-[#00FF66]/60

                to-transparent
              `}
            />

            <div
              className={`
                flex

                w-full

                items-center

                gap-2

                overflow-x-auto
                overflow-y-hidden

                scroll-smooth

                [scrollbar-width:none]

                [-ms-overflow-style:none]

                [&::-webkit-scrollbar]:hidden

                touch-pan-x

                lg:flex-wrap
                lg:overflow-visible
              `}
            >
              {showcaseData.map(
                (
                  item,
                  index
                ) => {
                  const isActive =
                    activeIndex ===
                    index;

                  return (
                    <motion.button
                      key={
                        item.id
                      }
                      type="button"
                      onClick={() =>
                        changeTab(
                          index
                        )
                      }
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -2,
                            }
                      }
                      whileTap={{
                        scale:
                          0.98,
                      }}
                      transition={{
                        duration:
                          0.28,

                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className={`
                        group

                        relative

                        shrink-0

                        overflow-hidden

                        whitespace-nowrap

                        rounded-[13px]

                        border

                        px-4
                        py-3

                        font-mono

                        text-[9px]

                        font-black

                        uppercase

                        tracking-[0.075em]

                        transition-all

                        duration-500

                        sm:px-5

                        sm:text-[10px]

                        md:px-5

                        md:text-[10.5px]

                        lg:px-5

                        xl:px-6

                        xl:text-[11px]

                        ${
                          isActive
                            ? `
                              border-[#5dff9c]/55

                              bg-gradient-to-r
                              from-[#00FF66]
                              via-[#35ff8d]
                              to-[#00dc59]

                              text-[#031008]

                              shadow-[0_0_28px_rgba(0,255,102,0.34),0_8px_25px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]
                            `
                            : `
                              border-white/10

                              bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))]

                              text-[#e1ece5]

                              shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]

                              hover:border-[#00FF66]/35

                              hover:bg-[#00FF66]/5

                              hover:text-white

                              hover:shadow-[0_0_24px_rgba(0,255,102,0.08)]
                            `
                        }
                      `}
                    >
                      {/* ACTIVE INNER GLOW */}

                      {isActive && (
                        <span
                          className={`
                            pointer-events-none

                            absolute
                            inset-0

                            rounded-[13px]

                            shadow-[inset_0_0_16px_rgba(255,255,255,0.12)]
                          `}
                        />
                      )}

                      {/* HOVER GLOW */}

                      {!isActive && (
                        <span
                          className={`
                            pointer-events-none

                            absolute

                            -right-8
                            -top-8

                            h-16
                            w-16

                            rounded-full

                            bg-[#00FF66]/0

                            blur-2xl

                            transition-all

                            duration-500

                            group-hover:bg-[#00FF66]/10
                          `}
                        />
                      )}

                      {/* ACTIVE SHINE */}

                      {isActive &&
                        !reduceMotion && (
                          <motion.span
                            initial={{
                              x: "-180%",
                            }}
                            animate={{
                              x: "300%",
                            }}
                            transition={{
                              duration:
                                1.4,

                              repeat:
                                Infinity,

                              repeatDelay:
                                3,

                              ease:
                                "easeInOut",
                            }}
                            className={`
                              pointer-events-none

                              absolute

                              inset-y-0
                              left-0

                              w-[32%]

                              skew-x-[-22deg]

                              bg-gradient-to-r

                              from-transparent

                              via-white/45

                              to-transparent
                            `}
                          />
                        )}

                      <span
                        className={`
                          relative
                          z-10
                        `}
                      >
                        {
                          item.tab
                        }
                      </span>
                    </motion.button>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            MAIN CARD
        ================================================== */}

        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -4,
                }
          }
          transition={{
            duration: 0.45,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className={`
            group

            relative

            overflow-hidden

            rounded-[24px]

            border
            border-white/10

            bg-[#0a120d]

            p-2.5

            shadow-[0_30px_90px_rgba(0,0,0,0.45)]

            transition-all

            duration-700

            hover:border-[#00FF66]/30

            hover:shadow-[0_40px_120px_rgba(0,255,102,0.11)]

            sm:rounded-[28px]

            sm:p-4

            lg:p-5
          `}
        >
          {/* PANEL GLOW */}

          <div
            className={`
              pointer-events-none

              absolute

              left-1/2
              top-[-300px]

              h-[520px]
              w-[900px]

              max-w-full

              -translate-x-1/2

              rounded-full

              bg-[#00FF66]/10

              blur-[150px]

              opacity-0

              transition-opacity

              duration-700

              group-hover:opacity-100
            `}
          />

          {/* GLASS */}

          <div
            className={`
              pointer-events-none

              absolute
              inset-0

              rounded-[28px]

              bg-gradient-to-br

              from-white/5

              via-transparent

              to-[#00FF66]/5
            `}
          />

          {/* TOP BORDER */}

          <div
            className={`
              pointer-events-none

              absolute

              left-1/2
              top-0

              h-px

              w-[14%]

              -translate-x-1/2

              bg-gradient-to-r

              from-transparent

              via-[#00FF66]

              to-transparent

              opacity-60

              transition-all

              duration-700

              group-hover:w-[72%]

              group-hover:opacity-100
            `}
          />

          {/* VIEWER HEADER */}

          <div
            className={`
              relative
              z-10

              mb-3

              flex

              flex-col

              gap-2

              px-1

              sm:flex-row

              sm:items-center
              sm:justify-between

              sm:px-2
            `}
          >
            <div
              className={`
                flex

                items-center

                gap-2

                font-mono

                text-[8px]

                font-semibold

                tracking-[0.12em]

                text-white/80

                sm:text-[9px]
              `}
            >
              <span
                className={`
                  h-2
                  w-2

                  rounded-full

                  bg-[#00FF66]

                  shadow-[0_0_10px_rgba(0,255,102,0.8)]
                `}
              />

              TRANSFORMATION STAGE VIEWER
            </div>

            <div
              className={`
                font-mono

                text-[6px]

                uppercase

                tracking-[0.14em]

                text-white/30

                sm:text-[7px]

                lg:text-[8px]
              `}
            >
              SCALE 1:100 · BIM READY · PRECISION WORKFLOW
            </div>
          </div>

          {/* =================================================
              IMAGE VIEWER
          ================================================== */}

          <div
            className={`
              group

              relative
              z-10

              aspect-[4/3]

              w-full

              overflow-hidden

              rounded-[16px]

              border
              border-white/10

              bg-[#050907]

              shadow-[inset_0_0_60px_rgba(0,0,0,0.65)]

              sm:aspect-[16/9]

              sm:rounded-[20px]

              lg:aspect-[16/7]
            `}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`viewer-${current.id}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale:
                          1.025,
                        filter:
                          "blur(8px)",
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter:
                    "blur(0px)",
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale:
                          0.985,
                      }
                }
                transition={{
                  duration: 0.6,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className={`
                  absolute
                  inset-0
                `}
              >
                {/* LEFT */}

                <ShowcaseImage
                  src={
                    current.leftImage
                  }
                  alt={
                    current.leftStage
                  }
                />

                <div
                  className={`
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[#00FF66]/0
                  `}
                />

                {/* RIGHT */}

                <div
                  className={`
                    absolute
                    inset-0

                    overflow-hidden
                  `}
                  style={{
                    clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                  }}
                >
                  <ShowcaseImage
                    src={
                      current.rightImage
                    }
                    alt={
                      current.rightStage
                    }
                  />
                </div>

                {/* VIGNETTE */}

                <div
                  className={`
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]
                  `}
                />

                {/* TOP GRADIENT */}

                <div
                  className={`
                    pointer-events-none

                    absolute

                    inset-x-0
                    top-0

                    h-[25%]

                    bg-gradient-to-b

                    from-black/25

                    to-transparent
                  `}
                />

                {/* SCAN */}

                {!reduceMotion && (
                  <motion.div
                    animate={{
                      y: [
                        "-100%",
                        "800%",
                      ],
                    }}
                    transition={{
                      duration: 7,

                      repeat:
                        Infinity,

                      ease:
                        "linear",
                    }}
                    className={`
                      pointer-events-none

                      absolute

                      left-0
                      top-0

                      h-[12%]
                      w-full

                      bg-gradient-to-b

                      from-transparent

                      via-[#00FF66]/5

                      to-transparent
                    `}
                  />
                )}

                {/* LABELS */}

                <div
                  className={`
                    absolute

                    bottom-3
                    left-3

                    z-20

                    max-w-[46%]

                    rounded-full

                    border
                    border-[#00FF66]/20

                    bg-black/60

                    px-3
                    py-1.5

                    font-mono

                    text-[6px]

                    font-semibold

                    uppercase

                    tracking-[0.07em]

                    text-[#7dffb0]

                    backdrop-blur-lg

                    sm:bottom-4
                    sm:left-4

                    sm:text-[7px]

                    lg:text-[8px]
                  `}
                >
                  {
                    current.leftStage
                  }
                </div>

                <div
                  className={`
                    absolute

                    bottom-3
                    right-3

                    z-20

                    max-w-[46%]

                    rounded-full

                    border
                    border-[#00FF66]/25

                    bg-black/65

                    px-3
                    py-1.5

                    text-right

                    font-mono

                    text-[6px]

                    font-semibold

                    uppercase

                    tracking-[0.07em]

                    text-[#00FF66]

                    backdrop-blur-lg

                    sm:bottom-4
                    sm:right-4

                    sm:text-[7px]

                    lg:text-[8px]
                  `}
                >
                  {
                    current.rightStage
                  }
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                SLIDER
            ================================================== */}

            <div
              className={`
                pointer-events-none

                absolute

                bottom-0
                top-0

                z-30

                w-[2px]

                bg-[#00FF66]

                shadow-[0_0_20px_rgba(0,255,102,0.95)]
              `}
              style={{
                left: `${sliderPosition}%`,
              }}
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow:
                          [
                            "0 0 18px rgba(0,255,102,.25)",

                            "0 0 38px rgba(0,255,102,.58)",

                            "0 0 18px rgba(0,255,102,.25)",
                          ],
                      }
                }
                transition={{
                  duration: 2.2,

                  repeat:
                    Infinity,

                  ease:
                    "easeInOut",
                }}
                className={`
                  absolute

                  left-1/2
                  top-1/2

                  flex

                  h-10
                  w-10

                  -translate-x-1/2
                  -translate-y-1/2

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#00FF66]/50

                  bg-[#07110b]/95

                  text-[#00FF66]

                  backdrop-blur-lg

                  sm:h-12
                  sm:w-12
                `}
              >
                <MoveHorizontal
                  size={17}
                  strokeWidth={
                    1.8
                  }
                />
              </motion.div>
            </div>

            <input
              type="range"
              min="12"
              max="88"
              step="1"
              value={
                sliderPosition
              }
              onChange={(
                event
              ) =>
                setSliderPosition(
                  Number(
                    event.target
                      .value
                  )
                )
              }
              aria-label="Compare design stages"
              className={`
                absolute
                inset-0

                z-40

                h-full
                w-full

                cursor-ew-resize

                opacity-0
              `}
            />
          </div>

          {/* =================================================
              STATISTICS
          ================================================== */}

          <div
            className={`
              relative
              z-10

              grid

              grid-cols-2

              gap-x-4
              gap-y-5

              px-2

              pb-2
              pt-6

              sm:grid-cols-4

              sm:items-end

              lg:px-3
              lg:pt-7
            `}
          >
            {current.stats.map(
              (
                stat,
                index
              ) => (
                <motion.div
                  key={`${current.id}-${stat.label}`}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration:
                      0.45,

                    delay:
                      0.08 +
                      index *
                        0.08,
                  }}
                  className={`
                    group

                    relative
                  `}
                >
                  <div
                    className={`
                      mb-1

                      font-mono

                      text-[7px]

                      uppercase

                      tracking-[0.13em]

                      text-white/30

                      transition-colors

                      duration-500

                      group-hover:text-[#00FF66]/70

                      sm:text-[8px]
                    `}
                  >
                    {
                      stat.label
                    }
                  </div>

                  <div
                    className={`
                      text-[14px]

                      font-semibold

                      tracking-[-0.02em]

                      text-white

                      transition-all

                      duration-500

                      group-hover:translate-x-1

                      group-hover:text-[#87ffb6]

                      sm:text-[16px]

                      lg:text-[18px]
                    `}
                  >
                    {
                      stat.value
                    }
                  </div>

                  <div
                    className={`
                      mt-2

                      h-px
                      w-0

                      bg-gradient-to-r

                      from-[#00FF66]

                      to-transparent

                      transition-all

                      duration-500

                      group-hover:w-[65%]
                    `}
                  />
                </motion.div>
              )
            )}

            {/* CTA */}

            <div
              className={`
                col-span-2

                flex

                items-end

                justify-start

                sm:col-span-1

                sm:justify-end
              `}
            >
              <motion.button
                type="button"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        scale:
                          1.025,
                      }
                }
                whileTap={{
                  scale: 0.97,
                }}
                className={`
                  relative

                  flex

                  items-center

                  gap-2.5

                  overflow-hidden

                  rounded-full

                  bg-gradient-to-r

                  from-[#00FF66]

                  via-[#2bff88]

                  to-[#00cc52]

                  px-5
                  py-3

                  text-[9px]

                  font-bold

                  text-[#031007]

                  shadow-[0_0_25px_rgba(0,255,102,0.4)]

                  transition-all

                  duration-500

                  hover:shadow-[0_0_40px_rgba(0,255,102,0.7)]

                  sm:text-[10px]

                  lg:px-6

                  lg:text-[11px]
                `}
              >
                <span
                  className={`
                    relative
                    z-10
                  `}
                >
                  ALL ARCH PROJECTS
                </span>

                <ArrowRight
                  size={14}
                  className={`
                    relative
                    z-10
                  `}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM DETAIL
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className={`
            mt-5

            flex

            items-center
            justify-center

            gap-2.5

            text-center

            font-mono

            text-[7px]

            uppercase

            tracking-[0.17em]

            text-white/20

            sm:text-[8px]
          `}
        >
          <Sparkles
            size={12}
            className="text-[#00FF66]/50"
          />

          Precision · Creativity · Technology
        </motion.div>
      </div>
    </section>
  );
}