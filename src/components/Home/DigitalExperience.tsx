"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  Layers3,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

/* =========================================================
   CONFIG
========================================================= */

const ease = [
  0.22,
  1,
  0.36,
  1,
] as const;

const devices = [
  {
    id: "desktop",
    label: "DESKTOP",
    size: "1440px",
    width: "100%",
    aspectRatio: "16 / 9",
    image:
      "/assets/digital-dashboard-desktop.png",
    icon: Monitor,
  },
  {
    id: "tablet",
    label: "TABLET",
    size: "768px",
    width: "76%",
    aspectRatio: "4 / 3",
    image:
      "/assets/digital-dashboard-tablet.png",
    icon: Tablet,
  },
  {
    id: "mobile",
    label: "MOBILE",
    size: "390px",
    width: "38%",
    aspectRatio: "9 / 16",
    image:
      "/assets/digital-dashboard-mobile.png",
    icon: Smartphone,
  },
] as const;

type DeviceId =
  (typeof devices)[number]["id"];

const scores = [
  {
    label: "PERF",
    value: 100,
  },
  {
    label: "A11Y",
    value: 100,
  },
  {
    label: "PRACTICE",
    value: 100,
  },
  {
    label: "SEO",
    value: 100,
  },
];

const tags = [
  "Next.js 15",
  "TypeScript",
  "Shopify Plus",
  "Tailwind CSS",
  "Three.js / WebGL",
];

/* =========================================================
   LIVE COUNTER
========================================================= */

function LiveCounter({
  value,
  start,
  delay = 0,
  reduceMotion = false,
}: {
  value: number;
  start: boolean;
  delay?: number;
  reduceMotion?: boolean;
}) {
  const [
    count,
    setCount,
  ] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let animationFrame = 0;

    let startTime:
      | number
      | null = null;

    const duration = 1450;

    const timer =
      window.setTimeout(() => {
        const animateCounter = (
          currentTime: number
        ) => {
          if (
            startTime === null
          ) {
            startTime =
              currentTime;
          }

          const elapsed =
            currentTime -
            startTime;

          const progress =
            Math.min(
              elapsed /
                duration,
              1
            );

          const eased =
            1 -
            Math.pow(
              1 - progress,
              3
            );

          const nextCount =
            Math.round(
              eased * value
            );

          setCount(
            nextCount
          );

          if (
            progress < 1
          ) {
            animationFrame =
              requestAnimationFrame(
                animateCounter
              );
          }
        };

        animationFrame =
          requestAnimationFrame(
            animateCounter
          );
      }, delay);

    return () => {
      window.clearTimeout(
        timer
      );

      if (
        animationFrame
      ) {
        cancelAnimationFrame(
          animationFrame
        );
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
        start &&
        !reduceMotion
          ? {
              scale: [
                1,
                1.08,
                1,
              ],
            }
          : {
              scale: 1,
            }
      }
      transition={{
        duration: 0.5,

        delay:
          delay / 1000 +
          1.05,

        ease,
      }}
      className="
        inline-block
      "
    >
      {count}
    </motion.span>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function DigitalExperience() {
  const reduceMotion =
    useReducedMotion();

  const [
    activeDevice,
    setActiveDevice,
  ] =
    useState<DeviceId>(
      "desktop"
    );

  const counterRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const counterVisible =
    useInView(
      counterRef,
      {
        once: false,
        amount: 0.4,
      }
    );

  const currentDevice =
    devices.find(
      (device) =>
        device.id ===
        activeDevice
    ) ?? devices[0];

  return (
    <section
      className="
        relative

        w-full
        overflow-hidden

        bg-[#050907]

        py-14

        text-white

        sm:py-16

        lg:py-20
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
        {/* TOP GLOW */}

        <div
          className="
            absolute

            left-1/2
            top-[-340px]

            h-[700px]
            w-[1100px]

            max-w-full

            -translate-x-1/2

            rounded-full

            bg-[#00FF66]/[0.05]

            blur-[170px]
          "
        />

        {/* LEFT MOVING GLOW */}

        {!reduceMotion && (
          <motion.div
            animate={{
              x: [
                0,
                40,
                0,
              ],

              y: [
                0,
                24,
                0,
              ],

              scale: [
                1,
                1.08,
                1,
              ],
            }}
            transition={{
              duration: 14,

              repeat:
                Infinity,

              ease:
                "easeInOut",
            }}
            className="
              absolute

              -left-[180px]
              top-[35%]

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#00FF66]/[0.05]

              blur-[150px]
            "
          />
        )}

        {/* RIGHT MOVING GLOW */}

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
                "easeInOut",
            }}
            className="
              absolute

              -right-[200px]
              bottom-[5%]

              h-[460px]
              w-[460px]

              rounded-full

              bg-[#00FF66]/[0.05]

              blur-[160px]
            "
          />
        )}

        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.018]

            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

            [background-size:74px_74px]
          "
        />

        {/* TOP SEPARATOR */}

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
        <div
          className="
            grid

            items-center

            gap-10

            lg:grid-cols-[0.8fr_1.2fr]

            lg:gap-12

            xl:grid-cols-[0.72fr_1.28fr]

            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease,
            }}
          >
            {/* LABEL */}

            <div
              className="
                mb-4

                flex

                items-center

                gap-3

                font-mono

                text-[10px]

                font-black

                uppercase

                tracking-[0.16em]

                text-[#00FF66]

                sm:text-[11px]

                lg:text-[12px]
              "
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

                  repeat:
                    Infinity,

                  ease:
                    "easeInOut",
                }}
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-[#00FF66]

                  shadow-[0_0_14px_rgba(0,255,102,0.9)]
                "
              />

              02 // DIGITAL INFRASTRUCTURE
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[650px]

                text-[42px]

                font-medium

                leading-[0.98]

                tracking-[-0.045em]

                text-[#f5f8f3]

                sm:text-[52px]

                md:text-[60px]

                lg:text-[58px]

                xl:text-[66px]

                2xl:text-[72px]
              "
            >
              Digital
              <br />

              Experiences Built
              <br />

              To Perform.
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5

                max-w-[570px]

                text-[14.5px]

                leading-[1.75]

                text-[#b0c0b6]

                sm:text-[15.5px]

                lg:text-[16.5px]

                xl:text-[17px]
              "
            >
              We engineer websites that act
              like precision machinery. Zero
              bloat, responsive down to the
              pixel, and powered by modern
              JavaScript frameworks and
              headless backends.
            </p>

            {/* =================================================
                LIGHTHOUSE CARD
            ================================================== */}

            <motion.div
              ref={counterRef}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              transition={{
                duration: 0.4,
                ease,
              }}
              className="
                group

                relative

                mt-7

                overflow-hidden

                rounded-[20px]

                border
                border-white/[0.075]

                bg-[linear-gradient(145deg,#0d1711_0%,#09110d_100%)]

                p-4

                shadow-[0_20px_50px_rgba(0,0,0,0.48),0_0_25px_rgba(0,255,102,0.03)]

                transition-all

                duration-500

                hover:border-[#00FF66]/25

                hover:shadow-[0_32px_85px_rgba(0,0,0,0.62),0_0_42px_rgba(0,255,102,0.10)]

                sm:p-5
              "
            >
              {/* GLOW */}

              <div
                className="
                  pointer-events-none

                  absolute

                  -right-[100px]
                  -top-[100px]

                  h-[240px]
                  w-[240px]

                  rounded-full

                  bg-[#00FF66]/[0.05]

                  blur-[85px]

                  opacity-0

                  transition-opacity

                  duration-500

                  group-hover:opacity-100
                "
              />

              {/* TOP LIGHT */}

              <div
                className="
                  absolute

                  left-1/2
                  top-0

                  h-px
                  w-0

                  -translate-x-1/2

                  bg-gradient-to-r

                  from-transparent

                  via-[#00FF66]

                  to-transparent

                  transition-all

                  duration-700

                  group-hover:w-[70%]
                "
              />

              {/* LABEL */}

              <div
                className="
                  relative
                  z-10

                  mb-4

                  font-mono

                  text-[9px]

                  font-bold

                  uppercase

                  tracking-[0.15em]

                  text-white/50

                  sm:text-[10px]

                  lg:text-[10.5px]
                "
              >
                GOOGLE LIGHTHOUSE AUDIT AVERAGE
              </div>

              {/* SCORE CARDS */}

              <div
                className="
                  relative
                  z-10

                  grid

                  grid-cols-2

                  gap-2.5

                  sm:grid-cols-4
                "
              >
                {scores.map(
                  (
                    score,
                    index
                  ) => (
                    <motion.div
                      key={
                        score.label
                      }
                      animate={
                        counterVisible &&
                        !reduceMotion
                          ? {
                              y: [
                                8,
                                0,
                              ],

                              opacity: [
                                0,
                                1,
                              ],
                            }
                          : {
                              y: 0,
                              opacity: 1,
                            }
                      }
                      transition={{
                        duration:
                          0.45,

                        delay:
                          index *
                          0.08,

                        ease,
                      }}
                      className="
                        group/score

                        relative

                        overflow-hidden

                        rounded-[14px]

                        border
                        border-white/[0.06]

                        bg-white/[0.025]

                        px-3
                        py-4

                        text-center

                        shadow-[0_8px_20px_rgba(0,0,0,0.2)]

                        transition-all

                        duration-500

                        hover:-translate-y-1

                        hover:border-[#00FF66]/25

                        hover:bg-[#00FF66]/[0.045]

                        hover:shadow-[0_14px_35px_rgba(0,0,0,0.34),0_0_28px_rgba(0,255,102,0.10)]
                      "
                    >
                      {/* COUNTER */}

                      <div
                        className="
                          relative
                          z-10

                          text-[26px]

                          font-bold

                          tracking-[-0.04em]

                          text-[#00FF66]

                          drop-shadow-[0_0_12px_rgba(0,255,102,0.35)]

                          sm:text-[28px]

                          xl:text-[30px]
                        "
                      >
                        <LiveCounter
                          value={
                            score.value
                          }
                          start={
                            counterVisible
                          }
                          delay={
                            index *
                            130
                          }
                          reduceMotion={
                            Boolean(
                              reduceMotion
                            )
                          }
                        />
                      </div>

                      {/* SCORE LABEL */}

                      <div
                        className="
                          relative
                          z-10

                          mt-1.5

                          font-mono

                          text-[8px]

                          font-bold

                          uppercase

                          tracking-[0.11em]

                          text-white/55

                          sm:text-[8.5px]

                          xl:text-[9px]
                        "
                      >
                        {
                          score.label
                        }
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* =================================================
                TECHNOLOGY TAGS
            ================================================== */}

            <div
              className="
                relative

                mt-5
              "
            >
              <div
                className="
                  pointer-events-none

                  absolute

                  left-[5%]
                  top-1/2

                  h-[70px]
                  w-[80%]

                  -translate-y-1/2

                  rounded-full

                  bg-[#00FF66]/[0.035]

                  blur-[45px]
                "
              />

              <div
                className="
                  relative

                  flex

                  flex-wrap

                  gap-2.5
                "
              >
                {tags.map(
                  (tag) => (
                    <motion.span
                      key={tag}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale:
                                1.025,
                            }
                      }
                      transition={{
                        duration:
                          0.25,

                        ease,
                      }}
                      className="
                        group/tag

                        relative

                        flex

                        cursor-default

                        items-center

                        gap-2

                        overflow-hidden

                        rounded-full

                        border
                        border-white/[0.11]

                        bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))]

                        px-3.5
                        py-2.5

                        font-mono

                        text-[9.5px]

                        font-bold

                        tracking-[0.045em]

                        text-[#d8e2dc]

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_7px_20px_rgba(0,0,0,0.16)]

                        backdrop-blur-xl

                        transition-all

                        duration-300

                        hover:border-[#00FF66]/45

                        hover:bg-[#00FF66]/[0.075]

                        hover:text-white

                        hover:shadow-[0_9px_28px_rgba(0,0,0,0.24),0_0_22px_rgba(0,255,102,0.10)]

                        sm:px-4

                        sm:text-[10px]

                        lg:text-[10.5px]

                        xl:text-[11px]
                      "
                    >
                      <span
                        className="
                          relative

                          h-1.5
                          w-1.5

                          shrink-0

                          rounded-full

                          bg-[#00FF66]/80

                          shadow-[0_0_7px_rgba(0,255,102,0.55)]
                        "
                      />

                      <span
                        className="
                          relative
                          z-10
                        "
                      >
                        {tag}
                      </span>
                    </motion.span>
                  )
                )}
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.button
              type="button"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale:
                        1.015,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
              className="
                group/button

                relative

                mt-6

                flex

                items-center

                gap-2.5

                overflow-hidden

                rounded-xl

                bg-gradient-to-r

                from-[#00FF66]

                via-[#2bff88]

                to-[#00cc52]

                px-6
                py-3.5

                text-[12px]

                font-bold

                text-[#031007]

                shadow-[0_0_25px_rgba(0,255,102,0.4)]

                transition-all

                duration-500

                hover:shadow-[0_0_40px_rgba(0,255,102,0.7)]

                sm:text-[12.5px]

                lg:text-[13px]
              "
            >
              <span
                className="
                  absolute

                  inset-y-0

                  -left-[70%]

                  w-[35%]

                  skew-x-[-24deg]

                  bg-gradient-to-r

                  from-transparent

                  via-white/50

                  to-transparent

                  transition-all

                  duration-700

                  group-hover/button:left-[130%]
                "
              />

              <span
                className="
                  relative
                  z-10
                "
              >
                VIEW WEB PROJECTS
              </span>

              <ArrowRight
                size={17}
                className="
                  relative
                  z-10

                  transition-transform

                  duration-500

                  group-hover/button:translate-x-1
                "
              />
            </motion.button>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 35,
                    scale:
                      0.98,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease,
            }}
            className="
              relative

              min-w-0

              lg:pl-3
            "
          >
            {/* =================================================
                DEVICE SWITCHER
                HOVER CLIPPING FIXED
            ================================================== */}

            <div
              className="
                relative

                mb-4

                overflow-visible

                rounded-[18px]

                border
                border-[#00FF66]/[0.13]

                bg-[linear-gradient(135deg,rgba(14,25,18,0.96),rgba(7,14,10,0.98))]

                p-1.5

                shadow-[0_14px_40px_rgba(0,0,0,0.34),0_0_35px_rgba(0,255,102,0.045),inset_0_1px_0_rgba(255,255,255,0.045)]

                backdrop-blur-2xl

                sm:p-2
              "
            >
              {/* TOP LIGHT */}

              <span
                className="
                  pointer-events-none

                  absolute

                  left-[4%]
                  top-0

                  h-px
                  w-[30%]

                  bg-gradient-to-r

                  from-transparent

                  via-[#00FF66]/70

                  to-transparent

                  shadow-[0_0_12px_rgba(0,255,102,0.35)]
                "
              />

              {/* AMBIENT GLOW */}

              <div
                className="
                  pointer-events-none

                  absolute

                  -left-16
                  top-1/2

                  h-28
                  w-52

                  -translate-y-1/2

                  rounded-full

                  bg-[#00FF66]/[0.055]

                  blur-[45px]
                "
              />

              <div
                className="
                  relative
                  z-10

                  flex

                  items-center

                  justify-between

                  gap-3
                "
              >
                {/* =================================================
                    SCROLL SAFE AREA
                ================================================== */}

                <div
                  className="
                    min-w-0

                    flex-1

                    overflow-x-auto

                    [scrollbar-width:none]

                    [&::-webkit-scrollbar]:hidden
                  "
                >
                  <div
                    className="
                      -my-2

                      flex

                      w-max

                      items-center

                      gap-1.5

                      py-2

                      sm:gap-2
                    "
                  >
                    {devices.map(
                      (
                        device
                      ) => {
                        const active =
                          activeDevice ===
                          device.id;

                        const Icon =
                          device.icon;

                        return (
                          <motion.button
                            key={
                              device.id
                            }
                            type="button"
                            onClick={() =>
                              setActiveDevice(
                                device.id
                              )
                            }

                            /* IMPORTANT:
                               Removed y:-2 because the
                               translated button was being
                               clipped by scroll overflow. */

                            whileHover={
                              reduceMotion
                                ? undefined
                                : {
                                    scale:
                                      1.018,
                                  }
                            }
                            whileTap={{
                              scale:
                                0.97,
                            }}
                            transition={{
                              duration:
                                0.25,

                              ease,
                            }}
                            className={`
                              group/device

                              relative

                              flex

                              min-h-[42px]

                              shrink-0

                              origin-center

                              items-center

                              gap-2

                              overflow-hidden

                              rounded-[11px]

                              border

                              px-3.5
                              py-2.5

                              font-mono

                              text-[8.5px]

                              font-black

                              uppercase

                              tracking-[0.075em]

                              will-change-transform

                              transition-[background-color,border-color,color,box-shadow]

                              duration-500

                              sm:min-h-[44px]

                              sm:px-4

                              sm:text-[9.5px]

                              md:text-[10px]

                              xl:px-5

                              xl:text-[10.5px]

                              ${
                                active
                                  ? `
                                    border-[#65ffa1]/60

                                    bg-gradient-to-r
                                    from-[#00FF66]
                                    via-[#35ff8d]
                                    to-[#00d957]

                                    text-[#031007]

                                    shadow-[0_0_28px_rgba(0,255,102,0.34),0_8px_22px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.35)]
                                  `
                                  : `
                                    border-white/[0.08]

                                    bg-white/[0.04]

                                    text-white/65

                                    shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]

                                    hover:border-[#00FF66]/35

                                    hover:bg-[#00FF66]/[0.07]

                                    hover:text-white

                                    hover:shadow-[0_0_24px_rgba(0,255,102,0.10)]
                                  `
                              }
                            `}
                          >
                            {/* ACTIVE SHINE */}

                            {active &&
                              !reduceMotion && (
                                <motion.span
                                  initial={{
                                    x: "-180%",
                                  }}
                                  animate={{
                                    x: "320%",
                                  }}
                                  transition={{
                                    duration:
                                      1.4,

                                    repeat:
                                      Infinity,

                                    repeatDelay:
                                      3.2,

                                    ease:
                                      "easeInOut",
                                  }}
                                  className="
                                    pointer-events-none

                                    absolute

                                    inset-y-0
                                    left-0

                                    w-[28%]

                                    skew-x-[-22deg]

                                    bg-gradient-to-r

                                    from-transparent

                                    via-white/45

                                    to-transparent
                                  "
                                />
                              )}

                            {/* ICON */}

                            <Icon
                              className={`
                                relative
                                z-10

                                h-3.5
                                w-3.5

                                shrink-0

                                sm:h-4
                                sm:w-4

                                ${
                                  active
                                    ? "text-[#031007]"
                                    : "text-[#00FF66]/80 group-hover/device:text-[#00FF66]"
                                }
                              `}
                              strokeWidth={
                                2
                              }
                            />

                            {/* LABEL */}

                            <span
                              className="
                                relative
                                z-10
                              "
                            >
                              {
                                device.label
                              }
                            </span>

                            {/* SIZE */}

                            <span
                              className={`
                                relative
                                z-10

                                hidden

                                text-[0.88em]

                                sm:inline

                                ${
                                  active
                                    ? "opacity-65"
                                    : "opacity-45"
                                }
                              `}
                            >
                              (
                              {
                                device.size
                              }
                              )
                            </span>
                          </motion.button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* INSPECTOR */}

                <div
                  className="
                    hidden

                    shrink-0

                    items-center

                    gap-2

                    border-l
                    border-white/[0.07]

                    px-3

                    font-mono

                    text-[8px]

                    font-bold

                    uppercase

                    tracking-[0.12em]

                    text-white/35

                    md:flex

                    lg:hidden

                    xl:flex

                    2xl:text-[9px]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5

                      rounded-full

                      bg-[#00FF66]

                      shadow-[0_0_8px_rgba(0,255,102,0.85)]
                    "
                  />

                  RESPONSIVE INSPECTOR
                </div>
              </div>
            </div>

            {/* =================================================
                BROWSER CARD
            ================================================== */}

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
              transition={{
                duration: 0.5,
                ease,
              }}
              className="
                group/browser

                relative

                overflow-hidden

                rounded-[24px]

                border
                border-white/[0.08]

                bg-[#07100b]

                p-3

                shadow-[0_32px_90px_rgba(0,0,0,0.62),0_0_32px_rgba(0,255,102,0.04)]

                transition-all

                duration-700

                hover:border-[#00FF66]/25

                hover:shadow-[0_45px_125px_rgba(0,0,0,0.72),0_0_55px_rgba(0,255,102,0.11)]

                sm:p-4
              "
            >
              {/* GLOW */}

              <div
                className="
                  pointer-events-none

                  absolute

                  -right-[180px]
                  -top-[180px]

                  h-[450px]
                  w-[450px]

                  rounded-full

                  bg-[#00FF66]/[0.07]

                  blur-[130px]

                  opacity-0

                  transition-opacity

                  duration-700

                  group-hover/browser:opacity-100
                "
              />

              {/* TOP BORDER */}

              <div
                className="
                  pointer-events-none

                  absolute

                  left-1/2
                  top-0

                  h-px
                  w-[18%]

                  -translate-x-1/2

                  bg-gradient-to-r

                  from-transparent

                  via-[#00FF66]

                  to-transparent

                  opacity-50

                  transition-all

                  duration-700

                  group-hover/browser:w-[70%]

                  group-hover/browser:opacity-100
                "
              />

              {/* BROWSER TOP */}

              <div
                className="
                  relative
                  z-10

                  flex

                  items-center

                  gap-3

                  rounded-[12px]

                  border
                  border-white/[0.05]

                  bg-[#08100c]

                  px-3
                  py-3

                  sm:px-4
                "
              >
                <div
                  className="
                    flex
                    gap-1.5
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />

                  <span className="h-2 w-2 rounded-full bg-[#ffd45e]" />

                  <span className="h-2 w-2 rounded-full bg-[#00FF66]" />
                </div>

                <div
                  className="
                    mx-auto

                    max-w-[330px]

                    flex-1

                    truncate

                    rounded-full

                    border
                    border-white/[0.06]

                    bg-white/[0.03]

                    px-3
                    py-1.5

                    text-center

                    font-mono

                    text-[7.5px]

                    text-white/50

                    sm:text-[8.5px]

                    lg:text-[9px]
                  "
                >
                  claystone.digital/dashboard
                </div>

                <span
                  className="
                    hidden

                    font-mono

                    text-[8px]

                    font-bold

                    text-[#00FF66]

                    sm:block

                    lg:text-[8.5px]
                  "
                >
                  LIVE
                </span>
              </div>

              {/* =================================================
                  DASHBOARD PREVIEW
              ================================================== */}

              <div
                className="
                  relative

                  mt-3

                  min-h-[400px]

                  overflow-hidden

                  rounded-[18px]

                  border
                  border-white/[0.06]

                  bg-[#040806]

                  sm:min-h-[460px]

                  lg:min-h-[500px]

                  xl:min-h-[540px]
                "
              >
                {/* AMBIENT */}

                <div
                  className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[70%]
                    w-[75%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#00FF66]/[0.05]

                    blur-[110px]
                  "
                />

                {/* DEVICE FRAME */}

                <motion.div
                  animate={{
                    width:
                      currentDevice.width,
                  }}
                  transition={{
                    duration: 0.65,
                    ease,
                  }}
                  style={{
                    aspectRatio:
                      currentDevice.aspectRatio,
                  }}
                  className="
                    absolute

                    left-1/2
                    top-1/2

                    max-h-[90%]
                    max-w-[96%]

                    -translate-x-1/2
                    -translate-y-1/2

                    overflow-hidden

                    rounded-[16px]

                    border
                    border-white/[0.09]

                    bg-[#07100b]

                    shadow-[0_22px_60px_rgba(0,0,0,0.68),0_0_35px_rgba(0,255,102,0.07)]

                    transition-shadow

                    duration-500

                    hover:shadow-[0_30px_85px_rgba(0,0,0,0.75),0_0_50px_rgba(0,255,102,0.13)]
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={
                        activeDevice
                      }
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,

                              scale:
                                0.965,

                              filter:
                                "blur(10px)",

                              y: 8,
                            }
                      }
                      animate={{
                        opacity: 1,

                        scale: 1,

                        filter:
                          "blur(0px)",

                        y: 0,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,

                              scale:
                                0.98,

                              filter:
                                "blur(5px)",
                            }
                      }
                      transition={{
                        duration: 0.6,
                        ease,
                      }}
                      className="
                        group/image

                        absolute
                        inset-0
                      "
                    >
                      {/* IMAGE */}

                      <motion.img
                        key={
                          currentDevice.image
                        }
                        src={
                          currentDevice.image
                        }
                        alt={`${currentDevice.label} dashboard`}
                        draggable={
                          false
                        }
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                scale:
                                  1.025,
                              }
                        }
                        transition={{
                          duration: 0.8,
                          ease,
                        }}
                        className="
                          h-full
                          w-full

                          select-none

                          object-cover
                          object-center
                        "
                      />

                      {/* DARK */}

                      <div
                        className="
                          pointer-events-none

                          absolute
                          inset-0

                          bg-gradient-to-b

                          from-black/[0.02]

                          via-transparent

                          to-black/25
                        "
                      />

                      {/* VIGNETTE */}

                      <div
                        className="
                          pointer-events-none

                          absolute
                          inset-0

                          bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.40)_100%)]
                        "
                      />

                      {/* SCANNER */}

                      {!reduceMotion && (
                        <motion.div
                          animate={{
                            y: [
                              "-100%",
                              "1300%",
                            ],
                          }}
                          transition={{
                            duration: 7,

                            repeat:
                              Infinity,

                            ease:
                              "linear",
                          }}
                          className="
                            pointer-events-none

                            absolute

                            left-0
                            top-0

                            h-[7%]
                            w-full

                            bg-gradient-to-b

                            from-transparent

                            via-[#00FF66]/[0.06]

                            to-transparent
                          "
                        />
                      )}

                      {/* PREVIEW LABEL */}

                      <div
                        className="
                          absolute

                          left-3
                          top-3

                          flex

                          items-center

                          gap-2

                          rounded-full

                          border
                          border-[#00FF66]/25

                          bg-black/65

                          px-3
                          py-2

                          backdrop-blur-lg

                          shadow-[0_0_20px_rgba(0,255,102,0.08)]
                        "
                      >
                        <Layers3
                          size={12}
                          className="text-[#00FF66]"
                        />

                        <span
                          className="
                            font-mono

                            text-[7px]

                            font-bold

                            uppercase

                            tracking-[0.1em]

                            text-[#8effb8]

                            sm:text-[8px]
                          "
                        >
                          {
                            currentDevice.label
                          }{" "}
                          PREVIEW
                        </span>
                      </div>

                      {/* BOTTOM STATUS */}

                      <div
                        className="
                          absolute

                          bottom-3
                          left-3
                          right-3

                          flex

                          items-center
                          justify-between

                          rounded-[10px]

                          border
                          border-white/[0.07]

                          bg-[#050907]/80

                          px-3
                          py-2

                          backdrop-blur-lg
                        "
                      >
                        <span
                          className="
                            truncate

                            font-mono

                            text-[7px]

                            text-white/40

                            sm:text-[8px]
                          "
                        >
                          RESPONSIVE DIGITAL EXPERIENCE
                        </span>

                        <span
                          className="
                            ml-3

                            shrink-0

                            font-mono

                            text-[7px]

                            font-bold

                            text-[#00FF66]

                            sm:text-[8px]
                          "
                        >
                          {
                            currentDevice.size
                          }
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* REFLECTION */}

                <div
                  className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[-30%]

                    h-[50%]
                    w-[80%]

                    -translate-x-1/2

                    rotate-[-8deg]

                    bg-gradient-to-r

                    from-transparent

                    via-white/[0.035]

                    to-transparent

                    blur-xl
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}