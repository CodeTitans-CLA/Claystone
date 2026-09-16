"use client";

import React from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    category: "DISCIPLINE",
    tech: "BIM / REVIT / CAD",
    title: "Architecture & Engineering",
    description:
      "End-to-end spatial planning, architectural drafting, BIM coordination, engineering documentation, and photorealistic visualization for real-world projects.",
    tags: [
      "2D Floor Plans",
      "Architectural Drafting",
      "3D BIM Modeling",
      "Interior & Exterior",
      "Structural & MEP",
      "Photoreal Viz",
    ],
    button: "EXPLORE ARCHITECTURE",
  },

  {
    number: "02",
    category: "DISCIPLINE",
    tech: "REACT / NEXT.JS / CLOUD",
    title: "Web Design & Development",
    description:
      "Premium digital experiences focused on strong visual systems, responsive layouts, smooth interactions, and high-performance modern web development.",
    tags: [
      "UI/UX Systems",
      "Full-Stack Dev",
      "Next.js & React",
      "Shopify",
      "Responsive Design",
      "Interactive Web",
    ],
    button: "EXPLORE WEB DEVELOPMENT",
  },

  {
    number: "03",
    category: "DISCIPLINE",
    tech: "BLENDER / CAD / PBR",
    title: "Product Modeling",
    description:
      "Production-ready 3D product models with accurate proportions, clean topology, realistic PBR materials, studio lighting, and polished marketing visuals.",
    tags: [
      "3D Product Modeling",
      "Hard Surface",
      "CAD to 3D",
      "PBR Materials",
      "Studio Rendering",
      "Product Animation",
    ],
    button: "EXPLORE PRODUCT MODELING",
  },

  {
    number: "04",
    category: "DISCIPLINE",
    tech: "BRAND / SOCIAL / PRINT",
    title: "Graphics Design",
    description:
      "Clear, memorable visual communication for brands and campaigns—from identity systems and social assets to marketing graphics and print-ready layouts.",
    tags: [
      "Brand Identity",
      "Logo Design",
      "Social Media",
      "Marketing Assets",
      "Print Design",
      "UI Graphics",
    ],
    button: "EXPLORE GRAPHICS DESIGN",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const ease = [
  0.22,
  1,
  0.36,
  1,
] as const;

/* =========================================================
   COMPONENT
========================================================= */

export default function Services() {
  const reduceMotion =
    useReducedMotion();

  const [
    hoveredCard,
    setHoveredCard,
  ] = React.useState<
    string | null
  >(null);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        bg-[#050907]

        px-4
        py-10

        text-[#f1f4e9]

        sm:px-6
        sm:py-12

        lg:px-8
        lg:py-14

        xl:px-10
        xl:py-16

        2xl:px-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* CENTRAL GLOW */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [
                    1,
                    1.04,
                    1,
                  ],
                  opacity: [
                    0.34,
                    0.52,
                    0.34,
                  ],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute

            left-1/2
            top-[-430px]

            h-[780px]
            w-[980px]

            -translate-x-1/2

            rounded-full

            bg-[#0fff6e]/[0.04]

            blur-[160px]
          "
        />

        {/* LEFT AMBIENT */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [
                    0,
                    -20,
                    0,
                  ],
                  scale: [
                    1,
                    1.04,
                    1,
                  ],
                }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute

            -bottom-[280px]
            left-[4%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#0fff6e]/[0.025]

            blur-[145px]
          "
        />

        {/* RIGHT AMBIENT */}

        <div
          className="
            absolute

            -right-[300px]
            top-[18%]

            h-[680px]
            w-[680px]

            rounded-full

            bg-[#00ff88]/[0.025]

            blur-[190px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.024]

            [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)]

            [background-size:72px_72px]
          "
        />

        {/* TOP LINE */}

        <div
          className="
            absolute

            inset-x-0
            top-0

            h-px

            bg-gradient-to-r

            from-transparent

            via-[#0fff6e]/25

            to-transparent
          "
        />

        {/* BOTTOM FADE */}

        <div
          className="
            absolute

            inset-x-0
            bottom-0

            h-[220px]

            bg-gradient-to-t

            from-black/35

            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-[1600px]
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="
            mb-8

            grid

            items-end

            gap-5

            sm:mb-9

            lg:mb-10

            lg:grid-cols-[1.2fr_0.8fr]

            lg:gap-10

            xl:gap-14
          "
        >
          {/* LEFT */}

          <div>
            {/* EYEBROW */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -12,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease,
              }}
              className="
                mb-3

                flex

                items-center

                gap-2.5

                font-mono

                text-[10px]

                font-bold

                uppercase

                tracking-[0.15em]

                text-[#0fff6e]

                sm:text-[11px]

                lg:text-[12px]
              "
            >
              <span
                className="
                  h-px
                  w-6

                  bg-[#0fff6e]

                  shadow-[0_0_8px_rgba(15,255,110,0.45)]
                "
              />

              MULTI-DISCIPLINARY CREATIVE STUDIO
            </motion.div>

            {/* HEADING */}

            <h1
              className="
                m-0

                max-w-[1020px]

                text-[42px]

                font-medium

                leading-[0.98]

                tracking-[-0.052em]

                text-[#f5f8f3]

                sm:text-[54px]

                md:text-[62px]

                lg:text-[clamp(58px,4.8vw,78px)]
              "
            >
              Four Core Disciplines.

              <br />

              <span className="text-[#dce5df]">
                One Creative Partner.
              </span>
            </h1>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
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
              duration: 0.7,
              delay: 0.16,
              ease,
            }}
          >
            <div
              className="
                mb-3

                h-px
                w-12

                bg-gradient-to-r

                from-[#0fff6e]

                to-[#0fff6e]/10

                shadow-[0_0_16px_rgba(15,255,110,0.3)]
              "
            />

            <p
              className="
                m-0

                max-w-[530px]

                text-[14px]

                leading-[1.7]

                text-[#a7b9ae]

                sm:text-[15px]

                lg:text-[16px]

                xl:text-[17px]
              "
            >
              From built environments and digital products to 3D
              product experiences and visual communication, we
              combine technical precision with premium creative
              execution.
            </p>
          </motion.div>
        </motion.div>

        {/* =================================================
            CARDS GRID

            IMPORTANT:
            auto-rows-fr + items-stretch makes all cards
            equal-height inside every responsive row.
        ================================================== */}

        <div
          className="
            grid

            auto-rows-fr

            grid-cols-1

            items-stretch

            gap-4

            md:grid-cols-2
            md:gap-5

            xl:grid-cols-4
            xl:gap-4

            2xl:gap-5
          "
        >
          {services.map(
            (
              service,
              index
            ) => (
              <motion.article
                key={service.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.7,

                  delay:
                    reduceMotion
                      ? 0
                      : index *
                        0.07,

                  ease,
                }}
                onHoverStart={() =>
                  setHoveredCard(
                    service.number
                  )
                }
                onHoverEnd={() =>
                  setHoveredCard(
                    null
                  )
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale:
                          1.008,
                      }
                }
                className="
                  group

                  relative

                  h-full
                  w-full

                  overflow-hidden

                  rounded-[24px]

                  bg-[#0a110d]

                  p-px

                  shadow-[0_22px_55px_rgba(0,0,0,0.55),0_8px_25px_rgba(0,0,0,0.34),0_0_26px_rgba(15,255,110,0.04)]

                  transition-[box-shadow]

                  duration-700

                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  hover:shadow-[0_35px_90px_rgba(0,0,0,0.66),0_16px_45px_rgba(0,0,0,0.42),0_0_40px_rgba(15,255,110,0.14),0_0_80px_rgba(15,255,110,0.06)]
                "
              >
                {/* =================================================
                    STATIC BORDER
                ================================================= */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    z-0

                    rounded-[24px]

                    border
                    border-white/[0.075]

                    transition-colors

                    duration-500

                    group-hover:border-[#0fff6e]/30
                  "
                />

                {/* =================================================
                    ANIMATED BORDER
                ================================================= */}

                {!reduceMotion && (
                  <svg
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      z-[1]

                      h-full
                      w-full

                      overflow-visible
                    "
                    aria-hidden="true"
                  >
                    <defs>
                      <filter
                        id={`borderGlow-${service.number}`}
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur
                          stdDeviation="3.4"
                          result="blur"
                        />

                        <feMerge>
                          <feMergeNode in="blur" />

                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* WIDE GLOW */}

                    <motion.rect
                      x="1"
                      y="1"

                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"

                      rx="23"
                      ry="23"

                      pathLength={100}

                      fill="none"

                      stroke="#0fff6e"

                      strokeWidth="3.5"

                      strokeLinecap="round"
                      strokeLinejoin="round"

                      strokeDasharray="18 82"

                      initial={{
                        strokeDashoffset: 0,
                      }}

                      animate={
                        hoveredCard ===
                        service.number
                          ? {
                              strokeDashoffset:
                                [
                                  0,
                                  -100,
                                ],
                            }
                          : {
                              strokeDashoffset: 0,
                            }
                      }

                      transition={
                        hoveredCard ===
                        service.number
                          ? {
                              duration:
                                4.8,

                              repeat:
                                Infinity,

                              ease:
                                "linear",
                            }
                          : {
                              duration:
                                0,
                            }
                      }

                      filter={`url(#borderGlow-${service.number})`}

                      className="
                        opacity-0

                        transition-opacity

                        duration-500

                        group-hover:opacity-40
                      "
                    />

                    {/* GREEN ORBIT */}

                    <motion.rect
                      x="1"
                      y="1"

                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"

                      rx="23"
                      ry="23"

                      pathLength={100}

                      fill="none"

                      stroke="#0fff6e"

                      strokeWidth="1.6"

                      strokeLinecap="round"
                      strokeLinejoin="round"

                      strokeDasharray="12 88"

                      initial={{
                        strokeDashoffset: 0,
                      }}

                      animate={
                        hoveredCard ===
                        service.number
                          ? {
                              strokeDashoffset:
                                [
                                  0,
                                  -100,
                                ],
                            }
                          : {
                              strokeDashoffset: 0,
                            }
                      }

                      transition={
                        hoveredCard ===
                        service.number
                          ? {
                              duration:
                                4.8,

                              repeat:
                                Infinity,

                              ease:
                                "linear",
                            }
                          : {
                              duration:
                                0,
                            }
                      }

                      className="
                        opacity-0

                        transition-opacity

                        duration-300

                        group-hover:opacity-100
                      "
                    />

                    {/* BRIGHT HEAD */}

                    <motion.rect
                      x="1"
                      y="1"

                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"

                      rx="23"
                      ry="23"

                      pathLength={100}

                      fill="none"

                      stroke="#effff5"

                      strokeWidth="1.15"

                      strokeLinecap="round"
                      strokeLinejoin="round"

                      strokeDasharray="3 97"

                      initial={{
                        strokeDashoffset: 0,
                      }}

                      animate={
                        hoveredCard ===
                        service.number
                          ? {
                              strokeDashoffset:
                                [
                                  0,
                                  -100,
                                ],
                            }
                          : {
                              strokeDashoffset: 0,
                            }
                      }

                      transition={
                        hoveredCard ===
                        service.number
                          ? {
                              duration:
                                4.8,

                              repeat:
                                Infinity,

                              ease:
                                "linear",
                            }
                          : {
                              duration:
                                0,
                            }
                      }

                      className="
                        opacity-0

                        transition-opacity

                        duration-300

                        group-hover:opacity-100
                      "
                    />
                  </svg>
                )}

                {/* =================================================
                    INNER CARD

                    h-full is important.
                ================================================= */}

                <div
                  className="
                    relative
                    z-[2]

                    flex
                    h-full
                    flex-col

                    overflow-hidden

                    rounded-[23px]

                    bg-[linear-gradient(145deg,#101a14_0%,#0b140f_48%,#07100b_100%)]

                    p-5

                    sm:p-[22px]

                    xl:p-5

                    2xl:p-[22px]
                  "
                >
                  {/* PREMIUM ATMOSPHERE */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-[radial-gradient(circle_at_88%_5%,rgba(15,255,110,0.115),transparent_27%),radial-gradient(circle_at_8%_100%,rgba(15,255,110,0.04),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.028),transparent_45%)]

                      opacity-80

                      transition-opacity

                      duration-700

                      group-hover:opacity-100
                    "
                  />

                  {/* TOP RIGHT GLOW */}

                  <div
                    className="
                      pointer-events-none

                      absolute

                      -right-28
                      -top-28

                      h-[300px]
                      w-[300px]

                      rounded-full

                      bg-[#0fff6e]/[0.025]

                      blur-[85px]

                      transition-all

                      duration-1000

                      group-hover:scale-125

                      group-hover:bg-[#0fff6e]/[0.08]
                    "
                  />

                  {/* GRID */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      opacity-[0.04]

                      [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]

                      [background-size:46px_46px]
                    "
                  />

                  {/* PREMIUM TOP LINE */}

                  <div
                    className="
                      pointer-events-none

                      absolute

                      left-[8%]
                      top-0

                      h-px
                      w-[48%]

                      bg-gradient-to-r

                      from-transparent

                      via-white/[0.16]

                      to-transparent

                      transition-all

                      duration-700

                      group-hover:via-[#aaffc7]/40
                    "
                  />

                  {/* SIDE ACCENT */}

                  <span
                    className="
                      pointer-events-none

                      absolute

                      left-0
                      top-[24%]

                      h-[50%]
                      w-px

                      bg-gradient-to-b

                      from-transparent

                      via-[#0fff6e]/0

                      to-transparent

                      transition-all

                      duration-700

                      group-hover:via-[#0fff6e]/35
                    "
                  />

                  {/* =================================================
                      CONTENT

                      h-full + flex-col is the main equal-height fix.
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-full
                      flex-col
                    "
                  >
                    {/* ===============================================
                        TOP META
                    ================================================ */}

                    <div
                      className="
                        flex

                        min-h-[38px]

                        items-start

                        justify-between

                        gap-3
                      "
                    >
                      {/* DISCIPLINE */}

                      <div
                        className="
                          flex

                          items-center

                          gap-2.5

                          rounded-full

                          border
                          border-white/[0.09]

                          bg-white/[0.04]

                          px-3.5
                          py-2

                          font-mono

                          text-[10px]

                          font-bold

                          uppercase

                          tracking-[0.08em]

                          text-[#eef4f0]

                          shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]

                          backdrop-blur-md

                          transition-all

                          duration-500

                          group-hover:border-[#0fff6e]/35

                          group-hover:bg-[#0fff6e]/[0.07]

                          group-hover:shadow-[0_0_20px_rgba(15,255,110,0.05)]

                          sm:text-[10.5px]

                          2xl:text-[11px]
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5

                            shrink-0

                            rounded-full

                            bg-[#0fff6e]

                            shadow-[0_0_9px_rgba(15,255,110,0.95)]
                          "
                        />

                        {
                          service.category
                        }
                      </div>

                      {/* TECH */}

                      <span
                        className="
                          max-w-[145px]

                          pt-1

                          text-right

                          font-mono

                          text-[9px]

                          font-semibold

                          uppercase

                          leading-[1.45]

                          tracking-[0.07em]

                          text-[#82948a]

                          transition-colors

                          duration-500

                          group-hover:text-[#9eb1a5]

                          sm:text-[9.5px]

                          xl:text-[9px]

                          2xl:text-[10px]
                        "
                      >
                        {
                          service.tech
                        }
                      </span>
                    </div>

                    {/* ===============================================
                        MAIN CONTENT

                        flex-1 keeps lower CTA perfectly aligned.
                    ================================================ */}

                    <div
                      className="
                        mt-5

                        flex
                        flex-1
                        flex-col

                        sm:mt-[22px]
                      "
                    >
                      {/* SERVICE NUMBER */}

                      <div
                        className="
                          mb-2.5

                          flex

                          items-center

                          gap-2

                          font-mono

                          text-[10.5px]

                          font-black

                          uppercase

                          tracking-[0.13em]

                          text-[#0fff6e]

                          sm:text-[11px]

                          2xl:text-[11.5px]
                        "
                      >
                        <span
                          className="
                            h-px
                            w-5

                            bg-gradient-to-r

                            from-[#0fff6e]

                            to-[#0fff6e]/25

                            transition-all

                            duration-500

                            group-hover:w-8
                          "
                        />

                        {
                          service.number
                        }{" "}
                        /
                      </div>

                      {/* =================================================
                          TITLE

                          Equal reserved title area on 4-card desktop.
                      ================================================= */}

                      <h2
                        className="
                          m-0

                          max-w-[345px]

                          text-[31px]

                          font-semibold

                          leading-[1.02]

                          tracking-[-0.047em]

                          text-[#f7faf8]

                          transition-all

                          duration-700

                          ease-[cubic-bezier(0.22,1,0.36,1)]

                          group-hover:translate-x-[3px]

                          sm:text-[35px]

                          md:text-[34px]

                          lg:text-[36px]

                          xl:min-h-[64px]
                          xl:text-[31px]

                          2xl:min-h-[72px]
                          2xl:text-[35px]
                        "
                      >
                        {
                          service.title
                        }
                      </h2>

                      {/* TITLE ACCENT */}

                      <div
                        className="
                          mt-3

                          h-px
                          w-9

                          shrink-0

                          bg-gradient-to-r

                          from-[#0fff6e]/55

                          to-transparent

                          opacity-70

                          transition-all

                          duration-500

                          group-hover:w-14

                          group-hover:from-[#0fff6e]
                        "
                      />

                      {/* =================================================
                          DESCRIPTION

                          Reserved space keeps tags aligned.
                      ================================================= */}

                      <p
                        className="
                          m-0

                          mt-3.5

                          max-w-[360px]

                          text-[14px]

                          font-normal

                          leading-[1.68]

                          tracking-[-0.008em]

                          text-[#b4c2b9]

                          transition-colors

                          duration-500

                          group-hover:text-[#d0d9d3]

                          sm:text-[14.5px]

                          lg:text-[15px]

                          xl:min-h-[116px]
                          xl:text-[13.75px]

                          2xl:min-h-[118px]
                          2xl:text-[14.75px]
                        "
                      >
                        {
                          service.description
                        }
                      </p>

                      {/* =================================================
                          TAGS

                          Same tag-zone height on desktop.
                      ================================================= */}

                      <div
                        className="
                          mt-4

                          flex
                          flex-wrap

                          content-start

                          gap-1.5

                          xl:min-h-[84px]

                          2xl:min-h-[88px]
                        "
                      >
                        {service.tags.map(
                          (
                            tag
                          ) => (
                            <motion.span
                              key={
                                tag
                              }
                              whileHover={
                                reduceMotion
                                  ? undefined
                                  : {
                                      y: -2,
                                    }
                              }
                              transition={{
                                duration:
                                  0.2,
                                ease:
                                  "easeOut",
                              }}
                              className="
                                h-fit

                                cursor-default

                                rounded-full

                                border
                                border-white/[0.10]

                                bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))]

                                px-3.5
                                py-[7px]

                                text-[10.5px]

                                font-medium

                                leading-none

                                tracking-[-0.01em]

                                text-[#d5ded8]

                                shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]

                                backdrop-blur-md

                                transition-all

                                duration-300

                                hover:border-[#0fff6e]/45

                                hover:bg-[#0fff6e]/[0.09]

                                hover:text-white

                                hover:shadow-[0_5px_20px_rgba(15,255,110,0.09)]

                                sm:text-[11px]

                                xl:px-3

                                xl:text-[10px]

                                2xl:px-3.5

                                2xl:text-[11px]
                              "
                            >
                              {
                                tag
                              }
                            </motion.span>
                          )
                        )}
                      </div>

                      {/* =================================================
                          FOOTER

                          mt-auto guarantees all CTA rows align.
                      ================================================= */}

                      <div
                        className="
                          mt-auto

                          border-t
                          border-white/[0.075]

                          pt-4

                          transition-colors

                          duration-500

                          group-hover:border-[#0fff6e]/20
                        "
                      >
                        <a
                          href="#"
                          className="
                            group/button

                            flex

                            min-h-[38px]
                            w-full

                            items-center

                            justify-between

                            gap-3

                            text-[11px]

                            font-bold

                            uppercase

                            leading-[1.2]

                            tracking-[-0.012em]

                            text-[#f2f6f3]

                            no-underline

                            transition-colors

                            duration-300

                            hover:text-[#0fff6e]

                            sm:text-[11.5px]

                            xl:text-[10.5px]

                            2xl:text-[11.5px]
                          "
                        >
                          <span>
                            {
                              service.button
                            }
                          </span>

                          <span
                            className="
                              flex

                              h-9
                              w-9

                              shrink-0

                              items-center

                              justify-center

                              rounded-full

                              border
                              border-white/[0.11]

                              bg-white/[0.04]

                              text-white

                              shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]

                              transition-all

                              duration-500

                              ease-out

                              group-hover/button:translate-x-1

                              group-hover/button:border-[#0fff6e]/45

                              group-hover/button:bg-[#0fff6e]/10

                              group-hover/button:text-[#0fff6e]

                              group-hover/button:shadow-[0_0_25px_rgba(15,255,110,0.14)]
                            "
                          >
                            <ArrowRight
                              size={15}
                              strokeWidth={1.8}
                              className="
                                transition-transform

                                duration-500

                                group-hover/button:translate-x-0.5
                              "
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}