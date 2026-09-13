'use client';

import { motion, useReducedMotion } from 'framer-motion';

import {
  Box,
  Braces,
  Boxes,
  Code2,
  Component,
  DraftingCompass,
  Layers3,
  Palette,
  PenTool,
  Settings2,
} from 'lucide-react';

/* =========================================================
   TECH STACK DATA
========================================================= */

const techStack = [
  {
    name: 'AUTODESK REVIT',
    icon: Layers3,
    featured: false,
  },
  {
    name: 'AUTOCAD',
    icon: DraftingCompass,
    featured: false,
  },
  {
    name: 'NEXT.JS 15',
    icon: Code2,
    featured: true,
  },
  {
    name: 'TYPESCRIPT',
    icon: Braces,
    featured: true,
  },
  {
    name: 'RHINOCEROS 3D',
    icon: Component,
    featured: false,
  },
  {
    name: 'SOLIDWORKS',
    icon: Settings2,
    featured: false,
  },
  {
    name: 'THREE.JS / WEBGL',
    icon: Boxes,
    featured: true,
  },
  {
    name: 'TAILWIND CSS',
    icon: Palette,
    featured: true,
  },
  {
    name: 'D5 RENDER',
    icon: Box,
    featured: false,
  },
  {
    name: 'BLENDER',
    icon: Component,
    featured: false,
  },
  {
    name: 'SKETCHUP',
    icon: PenTool,
    featured: false,
  },
];

/* =========================================================
   SLIDER GROUP
========================================================= */

function SliderGroup({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <div
      className="
        flex
        shrink-0
        items-center

        gap-3
        pr-3

        sm:gap-4
        sm:pr-4

        lg:gap-5
        lg:pr-5
      "
    >
      {techStack.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.name}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -6,
                    scale: 1.04,
                  }
            }
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative

              shrink-0

              cursor-default
            "
          >
            {/* =================================================
                OUTER HOVER GLOW
            ================================================== */}

            <div
              className="
                pointer-events-none

                absolute

                -inset-3

                rounded-full

                bg-[#00FF66]/10

                opacity-0

                blur-xl

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:opacity-100
              "
            />

            {/* =================================================
                PILL
            ================================================== */}

            <div
              className={`
                relative

                flex
                items-center

                gap-2.5

                overflow-hidden

                rounded-full

                border

                px-5
                py-2.5

                font-mono

                text-[8px]

                font-bold

                uppercase

                tracking-[0.08em]

                backdrop-blur-md

                transition-all
                duration-500

                sm:px-6
                sm:py-3
                sm:text-[9px]

                lg:px-7
                lg:py-3.5
                lg:text-[10px]

                ${
                  item.featured
                    ? `
                      border-[#00FF66]/15

                      bg-[#00FF66]/4.5

                      text-[#29ff7e]

                      shadow-[0_8px_20px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.03)]

                      group-hover:border-[#00FF66]/45

                      group-hover:bg-[#00FF66]/8.5

                      group-hover:text-[#70ffab]

                      group-hover:shadow-[0_14px_35px_rgba(0,0,0,0.38),0_0_28px_rgba(0,255,102,0.14),inset_0_1px_0_rgba(255,255,255,0.05)]
                    `
                    : `
                      border-white/6

                      bg-[#111813]

                      text-[#87978e]

                      shadow-[0_8px_20px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.025)]

                      group-hover:border-[#00FF66]/30

                      group-hover:bg-[#0d1811]

                      group-hover:text-[#d8e3dc]

                      group-hover:shadow-[0_14px_35px_rgba(0,0,0,0.38),0_0_26px_rgba(0,255,102,0.09)]
                    `
                }
              `}
            >
              {/* Shine */}
              <span
                className="
                  pointer-events-none

                  absolute

                  inset-y-0

                  -left-[70%]

                  w-[35%]

                  skew-x-[-22deg]

                  bg-gradient-to-r

                  from-transparent

                  via-white/15

                  to-transparent

                  transition-all

                  duration-700

                  group-hover:left-[130%]
                "
              />

              {/* Icon */}
              <Icon
                size={14}
                strokeWidth={1.7}
                className="
                  relative
                  z-10

                  hidden

                  shrink-0

                  text-[#00FF66]/50

                  transition-all

                  duration-500

                  group-hover:scale-110

                  group-hover:text-[#00FF66]

                  sm:block
                "
              />

              {/* Text */}
              <span
                className="
                  relative
                  z-10

                  whitespace-nowrap
                "
              >
                {item.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechStackSlider() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative

        w-full

        overflow-hidden

        border-y
        border-white/3.5

        bg-[#07100b]

        py-12

        sm:py-14

        lg:py-16
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
        {/* Main Glow */}
        <div
          className="
            absolute

            left-1/2
            top-1/2

            h-[250px]
            w-[1100px]

            max-w-full

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#00FF66]/3.5

            blur-[120px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.018]

            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

            [background-size:64px_64px]
          "
        />

        {/* Top Highlight */}
        <div
          className="
            absolute

            left-1/2
            top-0

            h-px

            w-[75%]

            max-w-[1400px]

            -translate-x-1/2

            bg-gradient-to-r

            from-transparent

            via-[#00FF66]/25

            to-transparent
          "
        />

        {/* Bottom Highlight */}
        <div
          className="
            absolute

            bottom-0
            left-1/2

            h-px

            w-[75%]

            max-w-[1400px]

            -translate-x-1/2

            bg-gradient-to-r

            from-transparent

            via-[#00FF66]/12

            to-transparent
          "
        />
      </div>

      {/* =====================================================
          HEADER CONTAINER
          PADDING INCREASED
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto

          mb-7

          w-full
          max-w-[1600px]

          px-6

          text-center

          sm:px-8

          md:px-10

          lg:mb-8
          lg:px-12

          xl:px-16

          2xl:px-20
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
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
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-flex

            items-center

            justify-center

            gap-3

            font-mono

            text-[8px]

            font-semibold

            uppercase

            tracking-[0.18em]

            text-[#72947f]

            sm:text-[9px]

            lg:text-[10px]
          "
        >
          {/* Left Line */}
          <span
            className="
              h-px

              w-6

              bg-gradient-to-r

              from-transparent

              to-[#00FF66]/60

              sm:w-8
            "
          />

          PRECISION TECH STACK & CAD SOFTWARE SUITE

          {/* Right Line */}
          <span
            className="
              h-px

              w-6

              bg-gradient-to-l

              from-transparent

              to-[#00FF66]/60

              sm:w-8
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          SLIDER SAFE AREA

          IMPORTANT:
          py-6 / py-7 gives hover movement enough room,
          so pill no longer gets clipped.
      ====================================================== */}

      <div
        className="
          relative
          z-10

          w-full

          py-6

          sm:py-7

          lg:py-8
        "
      >
        {/* =================================================
            HORIZONTAL CLIPPING LAYER
        ================================================== */}

        <div
          className="
            relative

            w-full

            overflow-hidden
          "
        >
          {/* Left Fade */}
          <div
            className="
              pointer-events-none

              absolute

              inset-y-0
              left-0

              z-30

              w-10

              bg-gradient-to-r

              from-[#07100b]

              via-[#07100b]/90

              to-transparent

              sm:w-20

              md:w-24

              lg:w-32

              xl:w-40
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none

              absolute

              inset-y-0
              right-0

              z-30

              w-10

              bg-gradient-to-l

              from-[#07100b]

              via-[#07100b]/90

              to-transparent

              sm:w-20

              md:w-24

              lg:w-32

              xl:w-40
            "
          />

          {/* =================================================
              MOVING TRACK

              py-4 gives additional vertical safety
              inside overflow-hidden wrapper.
          ================================================== */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ['0%', '-50%'],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 32,
                    repeat: Infinity,
                    ease: 'linear',
                  }
            }
            className="
              flex

              w-max

              items-center

              py-4

              will-change-transform
            "
          >
            {/* First copy */}
            <SliderGroup
              reduceMotion={
                Boolean(reduceMotion)
              }
            />

            {/* Second identical copy */}
            <SliderGroup
              reduceMotion={
                Boolean(reduceMotion)
              }
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM DETAIL
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto

          mt-2

          flex

          w-full
          max-w-[1600px]

          items-center

          justify-center

          px-6

          sm:px-8

          lg:px-12

          xl:px-16

          2xl:px-20
        "
      >
        <div
          className="
            flex

            items-center

            gap-2

            font-mono

            text-[7px]

            uppercase

            tracking-[0.16em]

            text-white/15

            sm:text-[8px]
          "
        >
          <span
            className="
              h-1
              w-1

              rounded-full

              bg-[#00FF66]

              shadow-[0_0_8px_rgba(0,255,102,0.6)]
            "
          />

          Architecture · Development · Visualization · Engineering
        </div>
      </div>

    </section>
  );
}