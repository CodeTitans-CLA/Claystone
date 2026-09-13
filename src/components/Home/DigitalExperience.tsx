'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';

import {
  ArrowRight,
  Layers3,
} from 'lucide-react';

/* =========================================================
   CONFIG
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const devices = [
  {
    id: 'desktop',
    label: 'DESKTOP',
    size: '1440px',
    width: '100%',
    aspectRatio: '16 / 9',
    image:
      '/assets/digital-dashboard-desktop.png',
  },
  {
    id: 'tablet',
    label: 'TABLET',
    size: '768px',
    width: '76%',
    aspectRatio: '4 / 3',
    image:
      '/assets/digital-dashboard-tablet.png',
  },
  {
    id: 'mobile',
    label: 'MOBILE',
    size: '390px',
    width: '38%',
    aspectRatio: '9 / 16',
    image:
      '/assets/digital-dashboard-mobile.png',
  },
] as const;

const scores = [
  {
    label: 'PERF',
    value: 100,
  },
  {
    label: 'A11Y',
    value: 100,
  },
  {
    label: 'PRACTICE',
    value: 100,
  },
  {
    label: 'SEO',
    value: 100,
  },
];

const tags = [
  'Next.js 15',
  'TypeScript',
  'Shopify Plus',
  'Tailwind CSS',
  'Three.js / WebGL',
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
  const [count, setCount] =
    useState(0);

  useEffect(() => {
    /*
     * Outside viewport
     * instantly reset to 0.
     */
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

          /*
           * Smooth ease-out.
           */
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
      className="inline-block"
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
  ] = useState<
    'desktop'
    | 'tablet'
    | 'mobile'
  >('desktop');

  /*
   * Counter visibility is tracked
   * from the counter card itself.
   *
   * Outside viewport -> 0
   * Enter viewport   -> starts again
   */
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
            top-[-340px]

            h-[700px]
            w-[1100px]

            max-w-full

            -translate-x-1/2

            rounded-full

            bg-[#00FF66]/5

            blur-[170px]
          "
        />

        {/* Moving Glow */}
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
                'easeInOut',
            }}
            className="
              absolute

              -left-[180px]
              top-[35%]

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#00FF66]/5

              blur-[150px]
            "
          />
        )}

        {/* Right Glow */}
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

              -right-[200px]
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

            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

            [background-size:74px_74px]
          "
        />

        {/* Top separator */}
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
          1600PX CONTAINER
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

            gap-12

            lg:grid-cols-[0.8fr_1.2fr]

            lg:gap-14

            xl:grid-cols-[0.72fr_1.28fr]

            xl:gap-20
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
            {/* Label */}
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

              02 // DIGITAL
              INFRASTRUCTURE
            </div>

            {/* Heading */}
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

            {/* Description */}
            <p
              className="
                mt-6

                max-w-[560px]

                text-[14px]

                leading-[1.8]

                text-[#a7b8ae]

                sm:text-[15px]

                lg:text-[16px]
              "
            >
              We engineer
              websites that act
              like precision
              machinery. Zero
              bloat, responsive
              down to the pixel,
              and powered by
              modern JavaScript
              frameworks and
              headless backends.
            </p>

            {/* =================================================
                LIGHTHOUSE CARD
            ================================================== */}

            <motion.div
              ref={
                counterRef
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                    }
              }
              transition={{
                duration: 0.4,
                ease,
              }}
              className="
                group

                relative

                mt-8

                overflow-hidden

                rounded-[20px]

                border

                border-white/[0.07]

                bg-[#0a110d]

                p-4

                shadow-[0_20px_50px_rgba(0,0,0,0.48),0_0_25px_rgba(0,255,102,0.03)]

                transition-all

                duration-500

                hover:border-[#00FF66]/25

                hover:shadow-[0_32px_85px_rgba(0,0,0,0.62),0_0_42px_rgba(0,255,102,0.10)]

                sm:p-5
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none

                  absolute

                  -right-[100px]

                  -top-[100px]

                  h-[240px]

                  w-[240px]

                  rounded-full

                  bg-[#00FF66]/5

                  blur-[85px]

                  opacity-0

                  transition-opacity

                  duration-500

                  group-hover:opacity-100
                "
              />

              {/* Top Light */}
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

              <div
                className="
                  relative
                  z-10

                  mb-4

                  font-mono

                  text-[8px]

                  uppercase

                  tracking-[0.16em]

                  text-white/35
                "
              >
                GOOGLE LIGHTHOUSE
                AUDIT AVERAGE
              </div>

              {/* Score Cards */}
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

                        border-white/[0.04]

                        bg-white/[0.02]

                        px-3

                        py-4

                        text-center

                        shadow-[0_8px_20px_rgba(0,0,0,0.2)]

                        transition-all

                        duration-500

                        hover:-translate-y-1

                        hover:border-[#00FF66]/25

                        hover:bg-[#00FF66]/[0.04]

                        hover:shadow-[0_14px_35px_rgba(0,0,0,0.34),0_0_28px_rgba(0,255,102,0.10)]
                      "
                    >
                      {/* Green Glow */}
                      <div
                        className="
                          pointer-events-none

                          absolute

                          left-1/2

                          top-[-45px]

                          h-[85px]

                          w-[85px]

                          -translate-x-1/2

                          rounded-full

                          bg-[#00FF66]/10

                          blur-[35px]

                          opacity-0

                          transition-opacity

                          duration-500

                          group-hover/score:opacity-100
                        "
                      />

                      {/* Counter */}
                      <div
                        className="
                          relative
                          z-10

                          text-[24px]

                          font-semibold

                          tracking-[-0.04em]

                          text-[#00FF66]

                          drop-shadow-[0_0_12px_rgba(0,255,102,0.35)]

                          sm:text-[26px]
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

                      <div
                        className="
                          relative
                          z-10

                          mt-1

                          font-mono

                          text-[7px]

                          font-semibold

                          uppercase

                          tracking-[0.12em]

                          text-white/45

                          transition-colors

                          duration-300

                          group-hover/score:text-[#8affb8]
                        "
                      >
                        {score.label}
                      </div>

                      {/* Bottom Line */}
                      <div
                        className="
                          absolute

                          bottom-0

                          left-1/2

                          h-px

                          w-0

                          -translate-x-1/2

                          bg-gradient-to-r

                          from-transparent

                          via-[#00FF66]

                          to-transparent

                          transition-all

                          duration-500

                          group-hover/score:w-[70%]
                        "
                      />
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* =================================================
                TAGS
            ================================================== */}

            <div
              className="
                mt-4

                flex

                flex-wrap

                gap-2
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
                            y: -3,
                            scale:
                              1.03,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      cursor-default

                      rounded-full

                      border

                      border-white/10

                      bg-white/[0.03]

                      px-3

                      py-1.5

                      font-mono

                      text-[8px]

                      font-semibold

                      tracking-[0.08em]

                      text-[#c6d1ca]

                      transition-all

                      duration-300

                      hover:border-[#00FF66]/30

                      hover:bg-[#00FF66]/[0.06]

                      hover:text-[#8effb8]

                      hover:shadow-[0_8px_22px_rgba(0,255,102,0.09)]
                    "
                  >
                    {tag}
                  </motion.span>
                )
              )}
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

                text-[11px]

                font-bold

                text-[#031007]

                shadow-[0_0_25px_rgba(0,255,102,0.4)]

                transition-all

                duration-500

                hover:shadow-[0_0_40px_rgba(0,255,102,0.7)]

                sm:text-[12px]
              "
            >
              {/* Shine */}
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

              <span className="relative z-10">
                VIEW WEB PROJECTS
              </span>

              <ArrowRight
                size={16}
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
            ================================================== */}

            <div
              className="
                mb-4

                flex

                w-full

                items-center

                gap-1.5

                overflow-x-auto

                rounded-[14px]

                border

                border-white/[0.06]

                bg-[#0b120e]

                p-1.5

                shadow-[0_12px_35px_rgba(0,0,0,0.32)]

                [scrollbar-width:none]

                [&::-webkit-scrollbar]:hidden
              "
            >
              {devices.map(
                (
                  device
                ) => {
                  const active =
                    activeDevice ===
                    device.id;

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
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -2,
                            }
                      }
                      whileTap={{
                        scale:
                          0.96,
                      }}
                      className={`
                        relative

                        shrink-0

                        overflow-hidden

                        rounded-[9px]

                        px-3
                        py-2

                        font-mono

                        text-[7px]

                        font-bold

                        uppercase

                        tracking-[0.1em]

                        transition-all

                        duration-500

                        sm:px-4

                        sm:text-[8px]

                        ${
                          active
                            ? `
                              bg-gradient-to-r
                              from-[#00FF66]
                              via-[#2bff88]
                              to-[#00cc52]

                              text-[#031007]

                              shadow-[0_0_25px_rgba(0,255,102,0.4)]
                            `
                            : `
                              bg-white/[0.025]

                              text-white/40

                              hover:bg-white/[0.05]

                              hover:text-[#7effae]

                              hover:shadow-[0_8px_25px_rgba(0,255,102,0.07)]
                            `
                        }
                      `}
                    >
                      {
                        device.label
                      }

                      <span className="ml-1 opacity-65">
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

              <span
                className="
                  ml-auto

                  hidden

                  px-3

                  font-mono

                  text-[7px]

                  uppercase

                  tracking-[0.14em]

                  text-white/20

                  md:block
                "
              >
                DEVTOOLS_INSPECTOR
              </span>
            </div>

            {/* =================================================
                BROWSER CARD
            ================================================== */}

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -7,
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
              {/* Glow */}
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

              {/* Top Border */}
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

              {/* Browser Top */}
              <div
                className="
                  relative
                  z-10

                  flex

                  items-center

                  gap-3

                  rounded-[12px]

                  border

                  border-white/[0.04]

                  bg-[#08100c]

                  px-3

                  py-3

                  sm:px-4
                "
              >
                <div className="flex gap-1.5">
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

                    border-white/[0.05]

                    bg-white/[0.025]

                    px-3

                    py-1.5

                    text-center

                    font-mono

                    text-[7px]

                    text-white/45

                    sm:text-[8px]
                  "
                >
                  claystone.digital/dashboard
                </div>

                <span
                  className="
                    hidden

                    font-mono

                    text-[7px]

                    font-bold

                    text-[#00FF66]

                    sm:block
                  "
                >
                  LIVE
                </span>
              </div>

              {/* =================================================
                  DASHBOARD PREVIEW AREA
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
                {/* Ambient */}
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

                    bg-[#00FF66]/5

                    blur-[110px]
                  "
                />

                {/* Device Frame */}
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
                  <AnimatePresence
                    mode="wait"
                  >
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
                                'blur(10px)',
                              y: 8,
                            }
                      }
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter:
                          'blur(0px)',
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
                                'blur(5px)',
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
                      {/* ==========================================
                          DIFFERENT IMAGE PER TAB
                      ========================================== */}

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

                      {/* Dark Overlay */}
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

                      {/* Vignette */}
                      <div
                        className="
                          pointer-events-none

                          absolute

                          inset-0

                          bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.40)_100%)]
                        "
                      />

                      {/* Scanner */}
                      {!reduceMotion && (
                        <motion.div
                          animate={{
                            y: [
                              '-100%',
                              '1300%',
                            ],
                          }}
                          transition={{
                            duration: 7,
                            repeat:
                              Infinity,
                            ease:
                              'linear',
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

                      {/* Preview Label */}
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

                          border-[#00FF66]/20

                          bg-black/60

                          px-3

                          py-1.5

                          backdrop-blur-lg

                          shadow-[0_0_20px_rgba(0,255,102,0.08)]
                        "
                      >
                        <Layers3
                          size={11}
                          className="text-[#00FF66]"
                        />

                        <span
                          className="
                            font-mono

                            text-[6px]

                            font-bold

                            uppercase

                            tracking-[0.1em]

                            text-[#8effb8]

                            sm:text-[7px]
                          "
                        >
                          {
                            currentDevice.label
                          }{' '}
                          PREVIEW
                        </span>
                      </div>

                      {/* Bottom Status */}
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

                          border-white/[0.06]

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

                            text-[6px]

                            text-white/35

                            sm:text-[7px]
                          "
                        >
                          RESPONSIVE
                          DIGITAL
                          EXPERIENCE
                        </span>

                        <span
                          className="
                            ml-3

                            shrink-0

                            font-mono

                            text-[6px]

                            font-bold

                            text-[#00FF66]

                            sm:text-[7px]
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

                {/* Reflection */}
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