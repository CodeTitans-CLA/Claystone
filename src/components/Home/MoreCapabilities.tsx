'use client';

import React from 'react';

import {
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  ArrowUpRight,
  Box,
  Boxes,
  Code2,
  Palette,
  Wrench,
} from 'lucide-react';

/* =========================================================
   CONFIG
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    number: '01',
    icon: Box,

    title:
      '3D Design & Animation',

    description:
      'Photorealistic CGI, cinematic animations, interactive 3D models, procedural shaders, and motion graphics for architectural presentations and products.',

    link:
      'EXPLORE 3D ANIMATION',
  },

  {
    number: '02',
    icon: Wrench,

    title:
      'Mechanical CAD & Engineering',

    description:
      'SolidWorks and Rhino modeling, precision tolerance analysis, exploded assembly schematics, DFM documentation, and production-ready manufacturing drawings.',

    link:
      'EXPLORE CAD SERVICES',
  },

  {
    number: '03',
    icon: Palette,

    title:
      'Graphic Design & Branding',

    description:
      'Architectural monographs, visual identity systems, editorial presentations, typography, brand assets, and premium communication systems built for impact.',

    link:
      'EXPLORE BRANDING',
  },

  {
    number: '04',
    icon: Code2,

    title:
      'Web Design & Development',

    description:
      'Premium responsive websites, UI/UX systems, Next.js and React development, Shopify experiences, modern interactions, and performance-focused digital platforms.',

    link:
      'EXPLORE WEB DESIGN',
  },

  {
    number: '05',
    icon: Boxes,

    title:
      'Product Modeling',

    description:
      'Production-ready 3D product models with accurate proportions, clean topology, realistic PBR materials, studio lighting, product visualization, and animation.',

    link:
      'EXPLORE PRODUCT MODELING',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function MoreCapabilities() {
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

        py-16

        text-white

        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Glow */}
        <div
          className="
            absolute

            left-1/2
            top-[-350px]

            h-[700px]
            w-[1050px]

            max-w-full

            -translate-x-1/2

            rounded-full

            bg-[#00FF66]/5

            blur-[170px]
          "
        />

        {/* Left Floating Glow */}
        {!reduceMotion && (
          <motion.div
            animate={{
              x: [
                0,
                35,
                0,
              ],

              y: [
                0,
                18,
                0,
              ],

              scale: [
                1,
                1.06,
                1,
              ],
            }}
            transition={{
              duration: 14,
              repeat:
                Infinity,
              ease:
                'easeInOut',
            }}
            className="
              absolute

              -left-[220px]
              top-[28%]

              h-[450px]
              w-[450px]

              rounded-full

              bg-[#00FF66]/5

              blur-[150px]
            "
          />
        )}

        {/* Right Floating Glow */}
        {!reduceMotion && (
          <motion.div
            animate={{
              x: [
                0,
                -35,
                0,
              ],

              y: [
                0,
                -20,
                0,
              ],
            }}
            transition={{
              duration: 16,
              repeat:
                Infinity,
              ease:
                'easeInOut',
            }}
            className="
              absolute

              -right-[220px]
              bottom-[5%]

              h-[460px]
              w-[460px]

              rounded-full

              bg-[#00FF66]/5

              blur-[160px]
            "
          />
        )}

        {/* Grid */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.018]

            [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]

            [background-size:74px_74px]
          "
        />

        {/* Section Divider */}
        <div
          className="
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

          px-4

          sm:px-6

          lg:px-8

          xl:px-10

          2xl:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            mb-12

            grid

            items-end

            gap-8

            lg:mb-16

            lg:grid-cols-[1.15fr_0.85fr]

            lg:gap-16

            xl:gap-24
          "
        >
          {/* Left */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
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
          >
            {/* Eyebrow */}
            <div
              className="
                mb-5

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
              "
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [
                          0.4,
                          1,
                          0.4,
                        ],

                        scale: [
                          0.9,
                          1.15,
                          0.9,
                        ],
                      }
                }
                transition={{
                  duration: 2.4,
                  repeat:
                    Infinity,
                  ease:
                    'easeInOut',
                }}
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-[#00FF66]

                  shadow-[0_0_14px_rgba(0,255,102,0.9)]
                "
              />

              EXPANDED TOOLSET
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[900px]

                text-[42px]

                font-medium

                leading-[0.98]

                tracking-[-0.045em]

                text-[#f4f7f3]

                sm:text-[54px]

                md:text-[62px]

                lg:text-[68px]

                xl:text-[76px]
              "
            >
              More Capabilities.

              <br />

              <span className="text-[#dce5df]">
                More Possibilities.
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
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
              delay: 0.12,
              ease,
            }}
            className="
              lg:justify-self-end
              lg:pb-2
            "
          >
            <div
              className="
                mb-4

                h-px
                w-12

                bg-gradient-to-r

                from-[#00FF66]

                to-transparent

                shadow-[0_0_16px_rgba(0,255,102,0.30)]
              "
            />

            <p
              className="
                max-w-[520px]

                text-[14px]

                leading-[1.8]

                text-[#a3b5aa]

                sm:text-[15px]

                lg:text-[16px]
              "
            >
              Our specialized supplementary
              capabilities integrate
              seamlessly into client projects
              without requiring multiple
              fragmented vendors.
            </p>
          </motion.div>
        </div>

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

            xl:grid-cols-3

            2xl:gap-7
          "
        >
          {capabilities.map(
            (
              item,
              index
            ) => {
              const Icon =
                item.icon;

              const isHovered =
                hoveredCard ===
                item.number;

              return (
                <motion.article
                  key={
                    item.number
                  }
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 35,
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
                      item.number
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
                          y: -10,
                          scale:
                            1.008,
                        }
                  }
                  className="
                    group

                    relative

                    min-h-[400px]

                    overflow-hidden

                    rounded-[26px]

                    bg-[#0a110d]

                    p-[1px]

                    shadow-[0_24px_60px_rgba(0,0,0,0.52),0_10px_30px_rgba(0,0,0,0.30),0_0_26px_rgba(15,255,110,0.035),0_0_0_1px_rgba(255,255,255,0.04)]

                    transition-[box-shadow]

                    duration-700

                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    hover:shadow-[0_42px_100px_rgba(0,0,0,0.68),0_20px_55px_rgba(0,0,0,0.45),0_0_38px_rgba(15,255,110,0.14),0_0_80px_rgba(15,255,110,0.07),0_0_0_1px_rgba(15,255,110,0.18)]

                    sm:min-h-[410px]

                    lg:min-h-[430px]
                  "
                >
                  {/* =========================================
                      STATIC PREMIUM BORDER
                  ========================================== */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      z-0

                      rounded-[26px]

                      border

                      border-white/8.5

                      transition-colors

                      duration-500

                      group-hover:border-[#00FF66]/20
                    "
                  />

                  {/* =========================================
                      CONTINUOUS BORDER ORBIT
                  ========================================== */}

                  {!reduceMotion && (
                    <svg
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        z-[2]

                        h-full
                        w-full

                        overflow-visible
                      "
                      aria-hidden="true"
                    >
                      <defs>
                        <filter
                          id={`capabilityGlow-${item.number}`}
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
                            <feMergeNode
                              in="blur"
                            />

                            <feMergeNode
                              in="SourceGraphic"
                            />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Wide Glow Trail */}
                      <motion.rect
                        x="1"
                        y="1"

                        width="calc(100% - 2px)"

                        height="calc(100% - 2px)"

                        rx="25"
                        ry="25"

                        pathLength={
                          100
                        }

                        fill="none"

                        stroke="#00FF66"

                        strokeWidth="3.8"

                        strokeLinecap="round"

                        strokeDasharray="18 82"

                        initial={{
                          strokeDashoffset: 0,
                        }}

                        animate={
                          isHovered
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
                          isHovered
                            ? {
                                duration:
                                  4.8,

                                repeat:
                                  Infinity,

                                ease:
                                  'linear',
                              }
                            : {
                                duration: 0,
                              }
                        }

                        filter={`url(#capabilityGlow-${item.number})`}

                        className="
                          opacity-0

                          transition-opacity

                          duration-500

                          group-hover:opacity-40
                        "
                      />

                      {/* Main Green Orbit */}
                      <motion.rect
                        x="1"
                        y="1"

                        width="calc(100% - 2px)"

                        height="calc(100% - 2px)"

                        rx="25"
                        ry="25"

                        pathLength={
                          100
                        }

                        fill="none"

                        stroke="#00FF66"

                        strokeWidth="1.7"

                        strokeLinecap="round"

                        strokeDasharray="12 88"

                        initial={{
                          strokeDashoffset: 0,
                        }}

                        animate={
                          isHovered
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
                          isHovered
                            ? {
                                duration:
                                  4.8,

                                repeat:
                                  Infinity,

                                ease:
                                  'linear',
                              }
                            : {
                                duration: 0,
                              }
                        }

                        className="
                          opacity-0

                          transition-opacity

                          duration-300

                          group-hover:opacity-100
                        "
                      />

                      {/* Bright Leading Head */}
                      <motion.rect
                        x="1"
                        y="1"

                        width="calc(100% - 2px)"

                        height="calc(100% - 2px)"

                        rx="25"
                        ry="25"

                        pathLength={
                          100
                        }

                        fill="none"

                        stroke="#effff5"

                        strokeWidth="1.25"

                        strokeLinecap="round"

                        strokeDasharray="3 97"

                        initial={{
                          strokeDashoffset: 0,
                        }}

                        animate={
                          isHovered
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
                          isHovered
                            ? {
                                duration:
                                  4.8,

                                repeat:
                                  Infinity,

                                ease:
                                  'linear',
                              }
                            : {
                                duration: 0,
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

                  {/* Reduced Motion Border */}
                  {reduceMotion && (
                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        z-[2]

                        rounded-[26px]

                        border

                        border-[#00FF66]/20
                      "
                    />
                  )}

                  {/* =========================================
                      INNER CARD
                  ========================================== */}

                  <div
                    className="
                      relative

                      z-[1]

                      flex

                      h-full

                      min-h-[398px]

                      flex-col

                      overflow-hidden

                      rounded-[25px]

                      bg-[linear-gradient(145deg,#0d1510_0%,#0a110d_50%,#07100b_100%)]

                      p-6

                      sm:min-h-[408px]

                      sm:p-7

                      lg:min-h-[428px]

                      xl:p-8
                    "
                  >
                    {/* Card Atmosphere */}
                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        bg-[radial-gradient(circle_at_90%_5%,rgba(15,255,110,0.09),transparent_26%),radial-gradient(circle_at_10%_100%,rgba(15,255,110,0.04),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.025),transparent_42%)]

                        opacity-70

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

                        -right-[120px]

                        -top-[120px]

                        h-[300px]

                        w-[300px]

                        rounded-full

                        bg-[#00FF66]/5

                        blur-[95px]

                        opacity-0

                        transition-all

                        duration-700

                        group-hover:scale-125

                        group-hover:opacity-100
                      "
                    />

                    {/* Bottom Glow */}
                    <div
                      className="
                        pointer-events-none

                        absolute

                        -bottom-[150px]

                        left-1/2

                        h-[270px]

                        w-[270px]

                        -translate-x-1/2

                        rounded-full

                        bg-[#00FF66]/5

                        blur-[95px]

                        opacity-0

                        transition-opacity

                        duration-700

                        group-hover:opacity-100
                      "
                    />

                    {/* Subtle Grid */}
                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        opacity-[0.035]

                        [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]

                        [background-size:46px_46px]
                      "
                    />

                    {/* Top Inner Highlight */}
                    <div
                      className="
                        pointer-events-none

                        absolute

                        inset-x-6

                        top-0

                        h-px

                        bg-gradient-to-r

                        from-transparent

                        via-white/14

                        to-transparent

                        transition-all

                        duration-700

                        group-hover:via-[#cffff0]/30
                      "
                    />

                    {/* Editorial Number */}
                    <div
                      className="
                        pointer-events-none

                        absolute

                        right-6

                        top-5

                        select-none

                        font-mono

                        text-[58px]

                        font-semibold

                        leading-none

                        tracking-[-0.08em]

                        text-white/1.8

                        transition-all

                        duration-700

                        group-hover:-translate-y-1

                        group-hover:text-[#00FF66]/4.5

                        lg:text-[66px]
                      "
                    >
                      {
                        item.number
                      }
                    </div>

                    {/* =========================================
                        CONTENT
                    ========================================== */}

                    <div
                      className="
                        relative
                        z-10

                        flex

                        h-full

                        flex-col
                      "
                    >
                      {/* Icon */}
                      <motion.div
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                rotate:
                                  7,

                                scale:
                                  1.08,
                              }
                        }
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                        className="
                          mb-8

                          flex

                          h-12
                          w-12

                          items-center

                          justify-center

                          rounded-[12px]

                          border

                          border-white/7

                          bg-white/3.5

                          text-[#00FF66]

                          shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]

                          transition-all

                          duration-500

                          group-hover:border-[#00FF66]/30

                          group-hover:bg-[#00FF66]/7.5

                          group-hover:shadow-[0_0_30px_rgba(0,255,102,0.14)]
                        "
                      >
                        <Icon
                          size={21}

                          strokeWidth={
                            1.6
                          }
                        />
                      </motion.div>

                      {/* Small Label */}
                      <div
                        className="
                          mb-3

                          flex

                          items-center

                          gap-2

                          font-mono

                          text-[8px]

                          font-bold

                          uppercase

                          tracking-[0.13em]

                          text-[#00FF66]/60

                          transition-colors

                          duration-500

                          group-hover:text-[#00FF66]
                        "
                      >
                        <span
                          className="
                            h-px

                            w-4

                            bg-[#00FF66]/50

                            transition-all

                            duration-500

                            group-hover:w-7

                            group-hover:bg-[#00FF66]
                          "
                        />

                        CAPABILITY{' '}
                        {
                          item.number
                        }
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          max-w-[410px]

                          text-[27px]

                          font-medium

                          leading-[1.08]

                          tracking-[-0.035em]

                          text-[#f5f8f4]

                          transition-all

                          duration-500

                          group-hover:translate-x-1

                          group-hover:text-white

                          sm:text-[29px]

                          lg:text-[30px]

                          2xl:text-[32px]
                        "
                      >
                        {
                          item.title
                        }
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-5

                          max-w-[440px]

                          text-[13px]

                          leading-[1.8]

                          text-[#a8b7ae]

                          transition-colors

                          duration-500

                          group-hover:text-[#c7d2cb]

                          sm:text-[14px]
                        "
                      >
                        {
                          item.description
                        }
                      </p>

                      {/* CTA */}
                      <div
                        className="
                          mt-auto

                          pt-8
                        "
                      >
                        <motion.a
                          href="#"
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  x: 3,
                                  y: -2,
                                }
                          }
                          whileTap={{
                            scale:
                              0.98,
                          }}
                          className="
                            group/link

                            relative

                            inline-flex

                            items-center

                            gap-2.5

                            overflow-hidden

                            rounded-xl

                            bg-gradient-to-r

                            from-[#00FF66]

                            via-[#2bff88]

                            to-[#00cc52]

                            px-4

                            py-2.5

                            font-mono

                            text-[8px]

                            font-bold

                            uppercase

                            tracking-[0.08em]

                            text-[#031007]

                            shadow-[0_0_25px_rgba(0,255,102,0.4)]

                            transition-all

                            duration-500

                            group-hover:opacity-100

                            hover:shadow-[0_0_40px_rgba(0,255,102,0.7)]

                            sm:text-[9px]

                            2xl:text-[10px]
                          "
                        >
                          {/* Shine */}
                          <span
                            className="
                              absolute

                              inset-y-0

                              -left-[90%]

                              w-[45%]

                              skew-x-[-25deg]

                              bg-gradient-to-r

                              from-transparent

                              via-white/50

                              to-transparent

                              transition-all

                              duration-700

                              group-hover/link:left-[130%]
                            "
                          />

                          <span className="relative z-10">
                            {
                              item.link
                            }
                          </span>

                          <ArrowUpRight
                            size={
                              14
                            }

                            strokeWidth={
                              2
                            }

                            className="
                              relative
                              z-10

                              transition-transform

                              duration-500

                              group-hover/link:translate-x-0.5

                              group-hover/link:-translate-y-0.5
                            "
                          />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }
          )}
        </div>

        {/* =================================================
            BOTTOM DETAIL
        ================================================== */}

        <div
          className="
            mx-auto

            mt-14

            h-px

            w-full

            max-w-[1200px]

            bg-gradient-to-r

            from-transparent

            via-white/7

            to-transparent
          "
        />
      </div>
    </section>
  );
}