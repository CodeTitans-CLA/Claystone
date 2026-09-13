'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const services = [
  {
    number: '01',
    category: 'DISCIPLINE',
    tech: 'BIM / REVIT / CAD',
    title: 'Architecture & Engineering',
    description:
      'End-to-end spatial planning, architectural drafting, BIM coordination, engineering documentation, and photorealistic visualization for real-world projects.',
    tags: [
      '2D Floor Plans',
      'Architectural Drafting',
      '3D BIM Modeling',
      'Interior & Exterior',
      'Structural & MEP',
      'Photoreal Viz',
    ],
    button: 'EXPLORE ARCHITECTURE',
    revision: 'BIM / BUILD / VISUALIZE',
  },

  {
    number: '02',
    category: 'DISCIPLINE',
    tech: 'REACT / NEXT.JS / CLOUD',
    title: 'Web Design & Development',
    description:
      'Premium digital experiences focused on strong visual systems, responsive layouts, smooth interactions, and high-performance modern web development.',
    tags: [
      'UI/UX Systems',
      'Full-Stack Dev',
      'Next.js & React',
      'Shopify',
      'Responsive Design',
      'Interactive Web',
    ],
    button: 'EXPLORE WEB DEVELOPMENT',
    revision: 'PERFORMANCE / UX / CODE',
  },

  {
    number: '03',
    category: 'DISCIPLINE',
    tech: 'BLENDER / CAD / PBR',
    title: 'Product Modeling',
    description:
      'Production-ready 3D product models with accurate proportions, clean topology, realistic PBR materials, studio lighting, and polished marketing visuals.',
    tags: [
      '3D Product Modeling',
      'Hard Surface',
      'CAD to 3D',
      'PBR Materials',
      'Studio Rendering',
      'Product Animation',
    ],
    button: 'EXPLORE PRODUCT MODELING',
    revision: 'MODEL / MATERIAL / RENDER',
  },

  {
    number: '04',
    category: 'DISCIPLINE',
    tech: 'BRAND / SOCIAL / PRINT',
    title: 'Graphics Design',
    description:
      'Clear, memorable visual communication for brands and campaigns—from identity systems and social assets to marketing graphics and print-ready layouts.',
    tags: [
      'Brand Identity',
      'Logo Design',
      'Social Media',
      'Marketing Assets',
      'Print Design',
      'UI Graphics',
    ],
    button: 'EXPLORE GRAPHICS DESIGN',
    revision: 'IDENTITY / CONTENT / PRINT',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const reduceMotion = useReducedMotion();

  const [hoveredCard, setHoveredCard] =
    React.useState<string | null>(null);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050907]

        px-4
        py-16

        text-[#f1f4e9]

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24

        xl:px-10

        2xl:px-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.04, 1],
                  opacity: [0.35, 0.55, 0.35],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-[-420px]

            h-[760px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#0fff6e]/[0.025]

            blur-[150px]
          "
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -20, 0],
                  scale: [1, 1.03, 1],
                  opacity: [0.2, 0.4, 0.2],
                }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            bottom-[-260px]
            left-[8%]

            h-[430px]
            w-[430px]

            rounded-full

            bg-[#0fff6e]/[0.018]

            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0

            opacity-[0.02]

            [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)]

            [background-size:74px_74px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0

            h-px

            bg-gradient-to-r

            from-transparent
            via-[#0fff6e]/20
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
                  y: 24,
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
            mb-11

            grid

            items-end

            gap-8

            sm:mb-14

            lg:mb-16
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-16

            xl:gap-20
          "
        >
          <div>
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
                mb-5

                flex
                items-center
                gap-2.5

                font-mono

                text-[10px]

                font-bold

                uppercase

                tracking-[1.55px]

                text-[#0fff6e]

                sm:text-[11px]

                lg:text-[11.5px]
              "
            >
              <span className="h-px w-6 bg-[#0fff6e]" />

              MULTI-DISCIPLINARY CREATIVE STUDIO
            </motion.div>

            <h1
              className="
                m-0

                max-w-[980px]

                text-[42px]

                font-medium

                leading-[0.98]

                tracking-[-2.15px]

                text-[#f5f8f3]

                sm:text-[56px]
                sm:tracking-[-3px]

                md:text-[64px]

                lg:text-[clamp(58px,4.8vw,78px)]
                lg:tracking-[-3.8px]
              "
            >
              Four Core Disciplines.

              <br />

              <span className="text-[#dce5df]">
                One Creative Partner.
              </span>
            </h1>
          </div>

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
            className="lg:pb-1"
          >
            <div
              className="
                mb-4

                h-px
                w-12

                bg-gradient-to-r

                from-[#0fff6e]

                to-[#0fff6e]/15

                shadow-[0_0_16px_rgba(15,255,110,0.3)]
              "
            />

            <p
              className="
                m-0

                max-w-[500px]

                text-[14px]

                leading-[1.75]

                text-[#9fb2a7]

                sm:text-[15px]

                lg:text-[15.5px]
              "
            >
              From built environments and digital products to 3D product
              experiences and visual communication, we combine technical
              precision with premium creative execution.
            </p>
          </motion.div>
        </motion.div>

        {/* =================================================
            CARDS
        ================================================== */}

        <div
          className="
            grid

            grid-cols-1

            gap-5

            md:grid-cols-2

            lg:gap-6

            xl:grid-cols-4
            xl:gap-5

            2xl:gap-6
          "
        >
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
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
                delay: reduceMotion
                  ? 0
                  : index * 0.07,
                ease,
              }}
              onHoverStart={() =>
                setHoveredCard(service.number)
              }
              onHoverEnd={() =>
                setHoveredCard(null)
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      scale: 1.012,
                    }
              }
              className="
                group

                relative

                min-h-[455px]

                overflow-hidden

                rounded-[26px]

                bg-[#0a110d]

                p-[1px]

                shadow-[0_22px_55px_rgba(0,0,0,0.55),0_10px_28px_rgba(0,0,0,0.38),0_0_26px_rgba(15,255,110,0.045),inset_0_1px_0_rgba(255,255,255,0.035),0_0_0_1px_rgba(255,255,255,0.035)]

                transition-[box-shadow]

                duration-700

                ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:shadow-[0_38px_95px_rgba(0,0,0,0.68),0_18px_48px_rgba(0,0,0,0.46),0_0_38px_rgba(15,255,110,0.14),0_0_80px_rgba(15,255,110,0.07),inset_0_1px_0_rgba(255,255,255,0.055),0_0_0_1px_rgba(15,255,110,0.18)]

                sm:min-h-[465px]

                xl:min-h-[475px]

                2xl:min-h-[485px]
              "
            >
              {/* =====================================================
                  STATIC BORDER
              ====================================================== */}

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  z-0

                  rounded-[26px]

                  border

                  border-white/[0.085]

                  transition-colors

                  duration-500

                  group-hover:border-[#0fff6e]/25
                "
              />

              {/* =====================================================
                  SAME TO SAME ANIMATED BORDER
              ====================================================== */}

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

                  {/* ================================================
                      1. WIDE GLOW TRAIL
                      EXACT WIDTH = 3.8
                  ================================================= */}

                  <motion.rect
                    x="1"
                    y="1"

                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"

                    rx="25"
                    ry="25"

                    pathLength={100}

                    fill="none"

                    stroke="#0fff6e"

                    strokeWidth="3.8"

                    strokeLinecap="round"
                    strokeLinejoin="round"

                    strokeDasharray="18 82"

                    initial={{
                      strokeDashoffset: 0,
                    }}

                    animate={
                      hoveredCard === service.number
                        ? {
                            strokeDashoffset: [
                              0,
                              -100,
                            ],
                          }
                        : {
                            strokeDashoffset: 0,
                          }
                    }

                    transition={
                      hoveredCard === service.number
                        ? {
                            duration: 4.8,
                            repeat: Infinity,
                            ease: 'linear',
                          }
                        : {
                            duration: 0,
                          }
                    }

                    filter={`url(#borderGlow-${service.number})`}

                    className="
                      opacity-0

                      transition-opacity

                      duration-500

                      ease-out

                      group-hover:opacity-40
                    "
                  />

                  {/* ================================================
                      2. MAIN GREEN ORBIT
                      EXACT WIDTH = 1.7
                  ================================================= */}

                  <motion.rect
                    x="1"
                    y="1"

                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"

                    rx="25"
                    ry="25"

                    pathLength={100}

                    fill="none"

                    stroke="#0fff6e"

                    strokeWidth="1.7"

                    strokeLinecap="round"
                    strokeLinejoin="round"

                    strokeDasharray="12 88"

                    initial={{
                      strokeDashoffset: 0,
                    }}

                    animate={
                      hoveredCard === service.number
                        ? {
                            strokeDashoffset: [
                              0,
                              -100,
                            ],
                          }
                        : {
                            strokeDashoffset: 0,
                          }
                    }

                    transition={
                      hoveredCard === service.number
                        ? {
                            duration: 4.8,
                            repeat: Infinity,
                            ease: 'linear',
                          }
                        : {
                            duration: 0,
                          }
                    }

                    className="
                      opacity-0

                      transition-opacity

                      duration-300

                      ease-out

                      group-hover:opacity-100
                    "
                  />

                  {/* ================================================
                      3. BRIGHT LEADING HEAD
                      EXACT WIDTH = 1.25
                  ================================================= */}

                  <motion.rect
                    x="1"
                    y="1"

                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"

                    rx="25"
                    ry="25"

                    pathLength={100}

                    fill="none"

                    stroke="#effff5"

                    strokeWidth="1.25"

                    strokeLinecap="round"
                    strokeLinejoin="round"

                    strokeDasharray="3 97"

                    initial={{
                      strokeDashoffset: 0,
                    }}

                    animate={
                      hoveredCard === service.number
                        ? {
                            strokeDashoffset: [
                              0,
                              -100,
                            ],
                          }
                        : {
                            strokeDashoffset: 0,
                          }
                    }

                    transition={
                      hoveredCard === service.number
                        ? {
                            duration: 4.8,
                            repeat: Infinity,
                            ease: 'linear',
                          }
                        : {
                            duration: 0,
                          }
                    }

                    className="
                      opacity-0

                      transition-opacity

                      duration-300

                      ease-out

                      group-hover:opacity-100
                    "
                  />
                </svg>
              )}

              {/* =====================================================
                  REDUCED MOTION
              ====================================================== */}

              {reduceMotion && (
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    z-[1]

                    rounded-[26px]

                    border

                    border-[#0fff6e]/20

                    opacity-80
                  "
                />
              )}

              {/* =====================================================
                  INNER CARD
              ====================================================== */}

              <div
                className="
                  relative

                  z-[2]

                  flex

                  h-full

                  min-h-[453px]

                  flex-col

                  overflow-hidden

                  rounded-[25px]

                  bg-[linear-gradient(145deg,#0d1510_0%,#0a110d_52%,#08100b_100%)]

                  p-5

                  sm:min-h-[463px]
                  sm:p-6

                  xl:min-h-[473px]
                  xl:p-[22px]

                  2xl:min-h-[483px]
                  2xl:p-6
                "
              >
                {/* Atmosphere */}
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    rounded-[25px]

                    bg-[radial-gradient(circle_at_88%_7%,rgba(15,255,110,0.10),transparent_25%),radial-gradient(circle_at_12%_100%,rgba(15,255,110,0.045),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.028),transparent_42%)]

                    opacity-80

                    transition-opacity

                    duration-700

                    group-hover:opacity-100
                  "
                />

                {/* Right Glow */}
                <div
                  className="
                    pointer-events-none

                    absolute

                    -right-28
                    -top-28

                    h-[300px]
                    w-[300px]

                    rounded-full

                    bg-[#0fff6e]/[0.018]

                    blur-[80px]

                    transition-all

                    duration-1000

                    ease-out

                    group-hover:scale-125

                    group-hover:bg-[#0fff6e]/[0.07]
                  "
                />

                {/* Bottom Glow */}
                <div
                  className="
                    pointer-events-none

                    absolute

                    -bottom-32

                    left-1/2

                    h-[240px]
                    w-[240px]

                    -translate-x-1/2

                    rounded-full

                    bg-[#0fff6e]/[0.012]

                    blur-[75px]

                    transition-all

                    duration-1000

                    group-hover:bg-[#0fff6e]/[0.035]
                  "
                />

                {/* Grid */}
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    rounded-[25px]

                    opacity-[0.045]

                    [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]

                    [background-size:46px_46px]
                  "
                />

                {/* Premium Highlight */}
                <div
                  className="
                    pointer-events-none

                    absolute

                    inset-x-5

                    top-0

                    h-px

                    bg-gradient-to-r

                    from-transparent

                    via-white/[0.13]

                    to-transparent

                    opacity-75

                    transition-all

                    duration-700

                    group-hover:via-[#dffff0]/30
                  "
                />

                {/* Accent Rail */}
                <div
                  className="
                    pointer-events-none

                    absolute

                    left-0

                    top-[18%]

                    h-[64%]

                    w-px

                    bg-gradient-to-b

                    from-transparent

                    via-[#0fff6e]/0

                    to-transparent

                    opacity-0

                    blur-[0.2px]

                    transition-all

                    duration-700

                    group-hover:via-[#0fff6e]/35

                    group-hover:opacity-100
                  "
                />

                {/* Number */}
                <div
                  className="
                    pointer-events-none

                    absolute

                    right-4

                    top-[72px]

                    select-none

                    font-mono

                    text-[62px]

                    font-semibold

                    leading-none

                    tracking-[-5px]

                    text-white/[0.018]

                    transition-all

                    duration-700

                    group-hover:-translate-y-1

                    group-hover:text-[#0fff6e]/[0.032]

                    sm:right-5
                    sm:text-[68px]

                    xl:text-[62px]

                    2xl:text-[70px]
                  "
                >
                  {service.number}
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative z-10 flex h-full flex-col">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="
                        flex

                        items-center

                        gap-2.5

                        rounded-full

                        border

                        border-white/[0.085]

                        bg-white/[0.03]

                        px-3

                        py-1.5

                        font-mono

                        text-[9px]

                        font-semibold

                        tracking-[0.42px]

                        text-[#e0e8e3]

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]

                        backdrop-blur-sm

                        transition-all

                        duration-500

                        group-hover:border-[#0fff6e]/28

                        group-hover:bg-[#0fff6e]/[0.055]

                        sm:text-[9.5px]

                        xl:text-[9px]

                        2xl:text-[9.5px]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5

                          shrink-0

                          rounded-full

                          bg-[#0fff6e]

                          shadow-[0_0_8px_rgba(15,255,110,0.9)]
                        "
                      />

                      {service.category} // {service.number}
                    </div>

                    <span
                      className="
                        max-w-[128px]

                        pt-0.5

                        text-right

                        font-mono

                        text-[8px]

                        font-medium

                        leading-[1.5]

                        tracking-[0.48px]

                        text-[#73847a]

                        sm:text-[8.5px]

                        xl:text-[8px]

                        2xl:text-[8.5px]
                      "
                    >
                      {service.tech}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="mt-7 sm:mt-8 xl:mt-7 2xl:mt-8">
                    <div
                      className="
                        mb-3.5

                        flex

                        items-center

                        gap-2

                        font-mono

                        text-[9px]

                        font-bold

                        tracking-[1.2px]

                        text-[#0fff6e]/70

                        transition-colors

                        duration-500

                        group-hover:text-[#0fff6e]

                        sm:text-[9.5px]
                      "
                    >
                      <span
                        className="
                          h-px
                          w-5

                          bg-[#0fff6e]/55

                          transition-all

                          duration-500

                          group-hover:w-8

                          group-hover:bg-[#0fff6e]
                        "
                      />

                      0{index + 1} /
                    </div>

                    <h2
                      className="
                        m-0

                        mb-4

                        max-w-[330px]

                        text-[34px]

                        font-medium

                        leading-[1.02]

                        tracking-[-1.8px]

                        text-[#f5f7f4]

                        transition-all

                        duration-700

                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:translate-x-[3px]

                        group-hover:text-white

                        sm:text-[37px]

                        md:text-[35px]

                        xl:text-[32px]
                        xl:tracking-[-1.6px]

                        2xl:text-[35px]
                      "
                    >
                      {service.title}
                    </h2>

                    <p
                      className="
                        m-0

                        max-w-[350px]

                        text-[13.5px]

                        leading-[1.72]

                        text-[#aab9b0]

                        transition-colors

                        duration-500

                        group-hover:text-[#c0cbc4]

                        sm:text-[14px]

                        md:text-[13.5px]

                        xl:text-[13px]
                        xl:leading-[1.7]

                        2xl:text-[13.75px]
                      "
                    >
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                }
                          }
                          transition={{
                            duration: 0.2,
                            ease: 'easeOut',
                          }}
                          className="
                            cursor-default

                            rounded-full

                            border

                            border-white/[0.075]

                            bg-white/[0.03]

                            px-3

                            py-1.5

                            text-[9px]

                            font-medium

                            leading-none

                            text-[#c8d2cc]

                            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]

                            backdrop-blur-sm

                            transition-all

                            duration-300

                            hover:-translate-y-0.5

                            hover:border-[#0fff6e]/35

                            hover:bg-[#0fff6e]/[0.08]

                            hover:text-[#e5ffee]

                            hover:shadow-[0_8px_24px_rgba(15,255,110,0.08)]

                            sm:px-3.5

                            sm:py-[7px]

                            sm:text-[9.5px]

                            xl:px-3

                            xl:text-[8.8px]

                            2xl:text-[9.4px]
                          "
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div className="mt-auto pt-6">
                    <div
                      className="
                        mb-4

                        h-px

                        w-full

                        bg-gradient-to-r

                        from-white/[0.11]

                        via-white/[0.045]

                        to-transparent

                        transition-all

                        duration-700

                        group-hover:from-[#0fff6e]/28

                        group-hover:via-[#0fff6e]/[0.08]
                      "
                    />

                    <div className="flex items-end justify-between gap-3">
                      <a
                        href="#"
                        className="
                          group/button

                          flex

                          min-w-0

                          items-center

                          gap-2.5

                          text-[10.5px]

                          font-semibold

                          leading-[1.2]

                          tracking-[0.05px]

                          text-[#f1f5f2]

                          no-underline

                          transition-colors

                          duration-300

                          hover:text-[#0fff6e]

                          sm:text-[11px]

                          xl:text-[10px]

                          2xl:text-[10.5px]
                        "
                      >
                        <span className="truncate">
                          {service.button}
                        </span>

                        <span
                          className="
                            flex

                            h-8
                            w-8

                            shrink-0

                            items-center

                            justify-center

                            rounded-full

                            border

                            border-white/10

                            bg-white/[0.03]

                            shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]

                            transition-all

                            duration-500

                            ease-out

                            group-hover/button:translate-x-1

                            group-hover/button:border-[#0fff6e]/40

                            group-hover/button:bg-[#0fff6e]/[0.1]

                            group-hover/button:shadow-[0_0_24px_rgba(15,255,110,0.13)]
                          "
                        >
                          <ArrowRight
                            size={14}
                            strokeWidth={1.7}
                            className="
                              transition-transform

                              duration-500

                              ease-out

                              group-hover/button:translate-x-0.5
                            "
                          />
                        </span>
                      </a>

                      <span
                        className="
                          hidden

                          max-w-[105px]

                          text-right

                          font-mono

                          text-[7px]

                          font-medium

                          leading-[1.5]

                          tracking-[0.68px]

                          text-[#5d6b62]

                          2xl:block
                        "
                      >
                        {service.revision}
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CORNER DETAIL
                ================================================== */}

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [
                            0.2,
                            0.4,
                            0.2,
                          ],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    pointer-events-none

                    absolute

                    right-5

                    top-[72px]

                    z-20

                    text-[#0fff6e]/25

                    transition-colors

                    duration-500

                    group-hover:text-[#0fff6e]/85
                  "
                >
                  <Plus
                    size={17}
                    strokeWidth={1}
                    className="
                      transition-transform

                      duration-700

                      ease-out

                      group-hover:rotate-45
                    "
                  />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}