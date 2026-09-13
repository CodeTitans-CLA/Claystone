'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const services = [
  {
    number: '01',
    category: 'DISCIPLINE',
    tech: 'BIM / REVIT / CAD',
    title: (
      <>
        Architecture &
        <br />
        Engineering
      </>
    ),
    description:
      'End-to-end spatial planning, schematic drafting, building information modeling (BIM), and hyper-detailed photorealistic visualizations that bring projects from planning permission to construction.',
    tags: [
      '2D Floor Plans',
      'Architectural Drafting',
      '3D BIM Modeling',
      'Interior & Exterior',
      'Structural & MEP',
      'Photoreal Viz',
    ],
    button: 'EXPLORE ARCHITECTURE',
    revision: 'LAT. REV. 2024',
  },
  {
    number: '02',
    category: 'DISCIPLINE',
    tech: 'REACT / NEXT.JS / CLOUD',
    title: (
      <>
        Web Design &
        <br />
        Development
      </>
    ),
    description:
      'Engineered digital experiences with brutalist precision and frictionless performance. We architect lightning-fast Next.js applications, bespoke headless Shopify setups, and interactive web graphics.',
    tags: [
      'UI/UX Systems',
      'Full-Stack Dev',
      'Next.js & React',
      'Shopify Headless',
      'Cloud Architecture',
      'WebGL & 3D Web',
    ],
    button: 'EXPLORE WEB DEVELOPMENT',
    revision: 'CORE_WEB_VITALS: 99+',
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#070b09] px-4 py-16 text-[#f1f4e9] sm:px-6 sm:py-20 lg:px-10 lg:py-28">

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-350px]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#26ff9b]/[0.025]
            blur-[140px]
          "
        />

        {/* Fine grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10
            grid
            items-end
            gap-8
            sm:mb-12
            lg:mb-14
            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-20
          "
        >

          {/* LEFT */}
          <div>

            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                mb-4
                flex
                items-center
                gap-2
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-[1.2px]
                text-[#26ff9b]
                sm:text-[10px]
              "
            >
              <span className="h-px w-5 bg-[#26ff9b]" />

              PILLAR DISCIPLINE ARCHITECTURE
            </motion.div>

            {/* Heading */}
            <h1
              className="
                m-0
                max-w-[850px]
                text-[43px]
                font-medium
                leading-[0.96]
                tracking-[-2.5px]
                text-[#f2f4e8]
                sm:text-[56px]
                sm:tracking-[-3px]
                md:text-[68px]
                lg:text-[clamp(58px,5vw,76px)]
                lg:tracking-[-4px]
              "
            >
              Two Core Disciplines.
              <br />

              <span className="text-[#dfe8de]">
                One Creative Partner.
              </span>
            </h1>

          </div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="lg:pb-2"
          >
            <div className="mb-4 h-px w-10 bg-[#26ff9b]/60" />

            <p
              className="
                m-0
                max-w-[430px]
                text-[13px]
                leading-[1.7]
                text-[#a9c1b0]
                sm:text-[14px]
                sm:leading-[1.65]
                lg:text-[15px]
              "
            >
              Our studio collapses the boundary between physical
              environments and software architecture, bringing
              architectural precision to code and digital dynamism
              to built form.
            </p>
          </motion.div>

        </motion.div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              whileHover={{
                y: -10,
                scale: 1.012,
              }}
              className="
                group
                relative
                min-h-[500px]
                overflow-hidden
                rounded-[24px]
                border
                border-white/[0.055]
                bg-[#121713]
                p-6
                shadow-[0_20px_70px_rgba(0,0,0,0.28)]
                transition-all
                duration-500
                hover:border-[#26ff9b]/20
                hover:shadow-[0_30px_90px_rgba(0,0,0,0.45),0_0_60px_rgba(38,255,155,0.035)]
                sm:min-h-[520px]
                sm:rounded-[28px]
                sm:p-8
                lg:min-h-[535px]
                lg:p-9
              "
            >

              {/* =================================================
                  CARD BACKGROUND
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_85%_10%,rgba(38,255,155,0.075),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.025),transparent_55%)]
                "
              />

              {/* Animated glow */}
              <motion.div
                animate={{
                  scale: activeCard === index ? 1.4 : 1,
                  opacity: activeCard === index ? 1 : 0.5,
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-[420px]
                  w-[420px]
                  rounded-full
                  bg-[#26ff9b]/[0.035]
                  blur-[100px]
                "
              />

              {/* Card grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.12]
                  [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                  [background-size:55px_55px]
                  [mask-image:linear-gradient(to_bottom_right,black,transparent_65%)]
                "
              />

              {/* =================================================
                  TOP
              ================================================= */}

              <div className="relative z-10 flex items-start justify-between gap-5">

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/[0.05]
                    bg-[#252d28]
                    px-3
                    py-1.5
                    font-mono
                    text-[8px]
                    font-bold
                    tracking-[0.4px]
                    text-[#d0dad3]
                    sm:text-[9px]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#26ff9b] shadow-[0_0_10px_#26ff9b]" />

                  {service.category} // {service.number}
                </motion.div>

                <span
                  className="
                    text-right
                    font-mono
                    text-[8px]
                    leading-[1.5]
                    tracking-[0.5px]
                    text-[#71897a]
                    sm:text-[9px]
                  "
                >
                  {service.tech}
                </span>

              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="relative z-10 mt-12 sm:mt-14">

                {/* Small index */}
                <motion.div
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                    x: activeCard === index ? 5 : 0,
                  }}
                  className="
                    mb-4
                    font-mono
                    text-[9px]
                    tracking-[1px]
                    text-[#26ff9b]
                  "
                >
                  0{index + 1} /
                </motion.div>

                {/* Title */}
                <h2
                  className="
                    m-0
                    mb-6
                    text-[38px]
                    font-medium
                    leading-[0.96]
                    tracking-[-2px]
                    text-[#f4f6ed]
                    sm:text-[48px]
                    sm:tracking-[-2.5px]
                    lg:text-[52px]
                  "
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p
                  className="
                    m-0
                    max-w-[570px]
                    text-[13px]
                    leading-[1.7]
                    text-[#b6c7bb]
                    sm:text-[14px]
                    sm:leading-[1.7]
                    lg:text-[14px]
                  "
                >
                  {service.description}
                </p>

                {/* =================================================
                    TAGS
                ================================================= */}

                <div className="mt-7 flex max-w-[600px] flex-wrap gap-2">

                  {service.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.45,
                        delay:
                          0.35 +
                          index * 0.12 +
                          tagIndex * 0.055,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.04,
                      }}
                      className="
                        cursor-default
                        rounded-full
                        border
                        border-white/[0.045]
                        bg-[#242b27]
                        px-3
                        py-2
                        text-[9px]
                        font-medium
                        text-[#c5d0c8]
                        shadow-[0_5px_20px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-300
                        hover:border-[#26ff9b]/25
                        hover:bg-[#26ff9b]/10
                        hover:text-[#43ffac]
                        hover:shadow-[0_5px_25px_rgba(38,255,155,0.08)]
                        sm:px-3.5
                        sm:py-2.5
                        sm:text-[10px]
                      "
                    >
                      {tag}
                    </motion.span>
                  ))}

                </div>

              </div>

              {/* =================================================
                  BOTTOM
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-7
                  left-6
                  right-6
                  z-10
                  flex
                  items-end
                  justify-between
                  gap-5
                  sm:bottom-8
                  sm:left-8
                  sm:right-8
                  lg:bottom-9
                  lg:left-9
                  lg:right-9
                "
              >

                {/* CTA */}
                <motion.a
                  href="#"
                  whileHover={{
                    x: 7,
                  }}
                  className="
                    group/button
                    flex
                    items-center
                    gap-3
                    text-[12px]
                    font-semibold
                    tracking-[-0.2px]
                    text-[#f2f4e9]
                    no-underline
                    transition-colors
                    duration-300
                    hover:text-[#26ff9b]
                    sm:text-[13px]
                  "
                >
                  <span>{service.button}</span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.025]
                      transition-all
                      duration-300
                      group-hover/button:border-[#26ff9b]/30
                      group-hover/button:bg-[#26ff9b]/10
                    "
                  >
                    <ArrowRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                    />
                  </span>
                </motion.a>

                {/* Revision */}
                <span
                  className="
                    hidden
                    font-mono
                    text-[7px]
                    tracking-[0.8px]
                    text-[#69786e]
                    sm:block
                  "
                >
                  {service.revision}
                </span>

              </div>

              {/* =================================================
                  CORNER DETAILS
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-16
                  w-16
                  border-r
                  border-t
                  border-[#26ff9b]/40
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:h-24
                  group-hover:w-24
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-16
                  w-16
                  border-b
                  border-l
                  border-[#26ff9b]/40
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:h-24
                  group-hover:w-24
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  SIDE INDICATOR
              ================================================= */}

              <motion.div
                initial={{
                  height: 0,
                }}
                whileHover={{
                  height: '65%',
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  w-[2px]
                  bg-[#26ff9b]
                  shadow-[0_0_18px_rgba(38,255,155,0.8)]
                "
              />

              {/* =================================================
                  BOTTOM GLOW LINE
              ================================================= */}

              <motion.div
                initial={{
                  width: '0%',
                  opacity: 0,
                }}
                whileHover={{
                  width: '100%',
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  h-[1px]
                  bg-[#26ff9b]
                  shadow-[0_0_20px_rgba(38,255,155,0.9)]
                "
              />

              {/* =================================================
                  PLUS ICON
              ================================================= */}

              <motion.div
                animate={{
                  rotate: activeCard === index ? 90 : 0,
                  opacity: activeCard === index ? 1 : 0.25,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  absolute
                  right-8
                  top-24
                  z-10
                  hidden
                  sm:block
                "
              >
                <Plus
                  size={18}
                  strokeWidth={1}
                  className="text-[#26ff9b]"
                />
              </motion.div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}