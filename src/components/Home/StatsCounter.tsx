'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';

import {
  BriefcaseBusiness,
  Clock3,
  Globe2,
  UsersRound,
} from 'lucide-react';

/* =========================================================
   CONFIG
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  {
    id: 'projects',
    label: 'PROJECTS COMPLETED',
    value: 120,
    suffix: '+',
    description: 'Arch & Digital Builds',
    icon: BriefcaseBusiness,
  },
  {
    id: 'clients',
    label: 'GLOBAL CLIENTS',
    value: 45,
    suffix: '+',
    description: 'Enterprises & Founders',
    icon: UsersRound,
  },
  {
    id: 'experience',
    label: 'EXPERIENCE',
    value: 12,
    suffix: '+',
    description: 'Years Cumulative Craft',
    icon: Clock3,
  },
  {
    id: 'countries',
    label: 'COUNTRIES SERVED',
    value: 18,
    suffix: '',
    description: 'Global Jurisdiction Coverage',
    icon: Globe2,
  },
];

/* =========================================================
   LIVE COUNTER
========================================================= */

function LiveCounter({
  value,
  suffix,
  start,
  delay = 0,
  reduceMotion = false,
}: {
  value: number;
  suffix?: string;
  start: boolean;
  delay?: number;
  reduceMotion?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;

    const duration = 1450;

    const timer = window.setTimeout(() => {
      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        const eased =
          1 - Math.pow(1 - progress, 3);

        setCount(
          Math.round(value * eased)
        );

        if (progress < 1) {
          frame = requestAnimationFrame(
            animate
          );
        }
      };

      frame = requestAnimationFrame(
        animate
      );
    }, delay);

    return () => {
      window.clearTimeout(timer);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [
    start,
    value,
    delay,
    reduceMotion,
  ]);

  return (
    <motion.span
      initial={false}
      animate={
        start && !reduceMotion
          ? {
              scale: [1, 1.05, 1],
            }
          : {
              scale: 1,
            }
      }
      transition={{
        duration: 0.5,
        delay: delay / 1000 + 1,
        ease,
      }}
      className="inline-block"
    >
      {count}
      {suffix}
    </motion.span>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function StatsCounter() {
  const reduceMotion = useReducedMotion();

  const statsRef =
    useRef<HTMLDivElement | null>(null);

  const [hoveredCard, setHoveredCard] =
    useState<string | null>(null);

  /*
   * Enter viewport -> counter starts
   * Leave viewport -> reset to zero
   * Enter again -> starts again
   */
  const isVisible = useInView(statsRef, {
    once: false,
  });

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        border-y
        border-white/3.5

        bg-[#050907]

        py-12
        text-white

        sm:py-14
        lg:py-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Center ambient glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[340px]
            w-[1200px]
            max-w-full

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#00FF66]/4

            blur-[140px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.018]

            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

            [background-size:70px_70px]
          "
        />

        {/* Top divider */}
        <div
          className="
            absolute
            left-1/2
            top-0

            h-px
            w-[82%]
            max-w-[1450px]

            -translate-x-1/2

            bg-gradient-to-r
            from-transparent
            via-[#00FF66]/25
            to-transparent
          "
        />

        {/* Bottom divider */}
        <div
          className="
            absolute
            bottom-0
            left-1/2

            h-px
            w-[82%]
            max-w-[1450px]

            -translate-x-1/2

            bg-gradient-to-r
            from-transparent
            via-[#00FF66]/15
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
            CARDS
        ================================================== */}

        <div
          ref={statsRef}
          className="
            grid

            grid-cols-1
            gap-5

            sm:grid-cols-2
            sm:gap-5

            xl:grid-cols-4

            2xl:gap-6
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            const isHovered =
              hoveredCard === stat.id;

            return (
              <motion.article
                key={stat.id}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                animate={
                  isVisible
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0.8,
                        y: 8,
                      }
                }
                transition={{
                  duration: 0.65,
                  delay: isVisible
                    ? index * 0.07
                    : 0,
                  ease,
                }}
                onHoverStart={() =>
                  setHoveredCard(stat.id)
                }
                onHoverEnd={() =>
                  setHoveredCard(null)
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                        scale: 1.008,
                      }
                }
                className="
                  group

                  relative

                  min-h-[190px]

                  overflow-hidden

                  rounded-[24px]

                  bg-[#0a110d]

                  p-[1px]

                  shadow-[0_28px_70px_rgba(0,0,0,0.58),0_12px_32px_rgba(0,0,0,0.35),0_0_32px_rgba(0,255,102,0.08),0_0_0_1px_rgba(0,255,102,0.13)]

                  transition-[box-shadow]
                  duration-700

                  hover:shadow-[0_38px_95px_rgba(0,0,0,0.70),0_18px_48px_rgba(0,0,0,0.42),0_0_45px_rgba(0,255,102,0.16),0_0_85px_rgba(0,255,102,0.07),0_0_0_1px_rgba(0,255,102,0.20)]

                  sm:min-h-[200px]

                  lg:min-h-[210px]
                "
              >
                {/* =================================================
                    STATIC PREMIUM BORDER
                    Always visible
                ================================================= */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    z-0

                    rounded-[24px]

                    border
                    border-[#00FF66]/20
                  "
                />

                {/* =================================================
                    HOVER BORDER ORBIT
                    Only starts when hovered
                ================================================= */}

                {!reduceMotion && (
                  <svg
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      z-[3]

                      h-full
                      w-full

                      overflow-visible
                    "
                    aria-hidden="true"
                  >
                    <defs>
                      <filter
                        id={`statsGlow-${stat.id}`}
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

                    {/* 1. Wide Glow Trail */}
                    <motion.rect
                      x="1"
                      y="1"

                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"

                      rx="23"
                      ry="23"

                      pathLength={100}

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
                        isHovered
                          ? {
                              duration: 4.8,
                              repeat: Infinity,
                              ease: 'linear',
                            }
                          : {
                              duration: 0,
                            }
                      }

                      filter={`url(#statsGlow-${stat.id})`}

                      className="
                        opacity-0

                        transition-opacity
                        duration-500

                        group-hover:opacity-40
                      "
                    />

                    {/* 2. Main Green Orbit */}
                    <motion.rect
                      x="1"
                      y="1"

                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"

                      rx="23"
                      ry="23"

                      pathLength={100}

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
                        isHovered
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

                        group-hover:opacity-100
                      "
                    />

                    {/* 3. Bright Leading Head */}
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

                      strokeWidth="1.25"

                      strokeLinecap="round"

                      strokeDasharray="3 97"

                      initial={{
                        strokeDashoffset: 0,
                      }}

                      animate={
                        isHovered
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
                        isHovered
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

                        group-hover:opacity-100
                      "
                    />
                  </svg>
                )}

                {/* =================================================
                    INNER CARD
                ================================================= */}

                <div
                  className="
                    relative
                    z-[1]

                    flex
                    h-full
                    min-h-[188px]
                    flex-col

                    overflow-hidden

                    rounded-[23px]

                    bg-[linear-gradient(145deg,#0e1711_0%,#09120d_55%,#07100b_100%)]

                    p-5

                    sm:min-h-[198px]
                    sm:p-6

                    lg:min-h-[208px]

                    xl:p-6

                    2xl:p-7
                  "
                >
                  {/* =================================================
                      ALWAYS ACTIVE EFFECTS
                  ================================================= */}

                  {/* Permanent Green Glow */}
                  <div
                    className="
                      pointer-events-none

                      absolute

                      -right-[110px]
                      -top-[110px]

                      h-[270px]
                      w-[270px]

                      rounded-full

                      bg-[#00FF66]/10

                      blur-[90px]

                      opacity-100
                    "
                  />

                  {/* Permanent Bottom Glow */}
                  <div
                    className="
                      pointer-events-none

                      absolute

                      -bottom-[150px]

                      left-1/2

                      h-[240px]
                      w-[240px]

                      -translate-x-1/2

                      rounded-full

                      bg-[#00FF66]/5

                      blur-[90px]
                    "
                  />

                  {/* Permanent Glass Highlight */}
                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-[radial-gradient(circle_at_90%_5%,rgba(0,255,102,0.08),transparent_27%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%)]
                    "
                  />

                  {/* Permanent Grid */}
                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      opacity-[0.035]

                      [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]

                      [background-size:42px_42px]
                    "
                  />

                  {/* Permanent Top Green Line */}
                  <div
                    className="
                      pointer-events-none

                      absolute

                      left-1/2
                      top-0

                      h-px
                      w-[55%]

                      -translate-x-1/2

                      bg-gradient-to-r

                      from-transparent

                      via-[#00FF66]/60

                      to-transparent

                      shadow-[0_0_14px_rgba(0,255,102,0.20)]
                    "
                  />

                  {/* Slow shine always active */}
                  {!reduceMotion && (
                    <motion.div
                      animate={{
                        x: [
                          '-180%',
                          '420%',
                        ],
                      }}
                      transition={{
                        duration: 4.8,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                      }}
                      className="
                        pointer-events-none

                        absolute

                        inset-y-0
                        left-0

                        w-[20%]

                        skew-x-[-22deg]

                        bg-gradient-to-r

                        from-transparent

                        via-white/3.5

                        to-transparent
                      "
                    />
                  )}

                  {/* =================================================
                      ICON - ALWAYS ACTIVE STYLE
                  ================================================= */}

                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              '0 0 18px rgba(0,255,102,0.08)',
                              '0 0 28px rgba(0,255,102,0.15)',
                              '0 0 18px rgba(0,255,102,0.08)',
                            ],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute

                      right-5
                      top-5

                      z-20

                      flex

                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-[11px]

                      border

                      border-[#00FF66]/25

                      bg-[#00FF66]/6.5

                      text-[#00FF66]

                      opacity-100

                      shadow-[0_0_24px_rgba(0,255,102,0.12)]

                      transition-transform

                      duration-500

                      group-hover:rotate-6

                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* =================================================
                      CONTENT
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
                    {/* Label - already highlighted */}
                    <div
                      className="
                        mb-3

                        font-mono

                        text-[8px]

                        font-semibold

                        uppercase

                        tracking-[0.16em]

                        text-[#00FF66]/75

                        sm:text-[9px]
                      "
                    >
                      {stat.label}
                    </div>

                    {/* Number + Description */}
                    <div
                      className="
                        flex

                        flex-wrap

                        items-end

                        gap-x-2.5
                        gap-y-1
                      "
                    >
                      {/* Number */}
                      <div
                        className="
                          text-[52px]

                          font-medium

                          leading-[0.88]

                          tracking-[-0.05em]

                          text-white

                          drop-shadow-[0_0_20px_rgba(0,255,102,0.12)]

                          sm:text-[58px]

                          lg:text-[62px]

                          xl:text-[58px]

                          2xl:text-[64px]
                        "
                      >
                        <LiveCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          start={isVisible}
                          delay={
                            index * 120
                          }
                          reduceMotion={Boolean(
                            reduceMotion
                          )}
                        />
                      </div>

                      {/* Description */}
                      <p
                        className="
                          max-w-[155px]

                          pb-0.5

                          text-[11px]

                          leading-[1.65]

                          text-[#bfffd4]

                          sm:text-[12px]
                        "
                      >
                        {stat.description}
                      </p>
                    </div>

                    {/* =================================================
                        PERMANENT BOTTOM ACCENT
                    ================================================= */}

                    <div className="mt-auto pt-6">
                      <div
                        className="
                          h-px
                          w-full

                          bg-gradient-to-r

                          from-[#00FF66]/25

                          via-white/7

                          to-transparent
                        "
                      />

                      <div
                        className="
                          mt-3

                          h-px

                          w-[55%]

                          bg-gradient-to-r

                          from-[#00FF66]

                          via-[#00FF66]/45

                          to-transparent

                          shadow-[0_0_12px_rgba(0,255,102,0.18)]
                        "
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}