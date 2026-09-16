"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
} from "lucide-react";

/* =========================================================
   CONFIG
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const GAP = 20;

const testimonials = [
  {
    id: 1,
    initials: "MH",
    name: "Marcus Holmberg",
    role: "Principal",
    company: "Nordic Horizon Developments",
    category: "ARCHITECTURE",
    quote:
      "Claystone is the partner we trust to move from early architectural ideas into precise, presentation-ready project documentation. The process feels organized, technical, and consistently polished.",
  },

  {
    id: 2,
    initials: "ER",
    name: "Elena Rostova",
    role: "CTO",
    company: "Chronos Platform",
    category: "WEB DEVELOPMENT",
    quote:
      "Their web development process combines strong visual thinking with technical discipline. The finished platform feels fast, refined, responsive, and thoughtfully engineered.",
  },

  {
    id: 3,
    initials: "JM",
    name: "James Miller",
    role: "Project Director",
    company: "Axis Build Group",
    category: "BIM & ENGINEERING",
    quote:
      "The BIM coordination and architectural documentation were extremely well organized. Every drawing and model update felt deliberate, accurate, and ready for project coordination.",
  },

  {
    id: 4,
    initials: "SL",
    name: "Sophia Laurent",
    role: "Creative Director",
    company: "Maison Form Studio",
    category: "INTERIOR VISUALIZATION",
    quote:
      "Materials, lighting, proportions, and atmosphere were handled beautifully. The final interior visuals gave our presentations the premium quality we were looking for.",
  },

  {
    id: 5,
    initials: "DK",
    name: "Daniel Kim",
    role: "Product Lead",
    company: "Vertex Industrial",
    category: "PRODUCT MODELING",
    quote:
      "We needed product models that were technically accurate but still strong enough for marketing. Claystone delivered clean geometry and polished visuals in one workflow.",
  },

  {
    id: 6,
    initials: "AM",
    name: "Amelia Morgan",
    role: "Brand Strategist",
    company: "Northline Collective",
    category: "BRAND & GRAPHICS",
    quote:
      "The team moved confidently across branding, graphics, digital, and 3D while keeping the entire visual system consistent. The final result felt cohesive and premium.",
  },

  {
    id: 7,
    initials: "TH",
    name: "Thomas Hayes",
    role: "Development Manager",
    company: "Everline Properties",
    category: "PERMIT DRAWINGS",
    quote:
      "The permit drawing package was structured clearly and professionally. Coordination between plans, elevations, schedules, and technical notes was handled very carefully.",
  },

  {
    id: 8,
    initials: "NC",
    name: "Natalie Chen",
    role: "E-commerce Director",
    company: "Atelier Commerce",
    category: "E-COMMERCE",
    quote:
      "Our storefront became cleaner, easier to navigate, and much stronger visually. The mobile experience in particular feels significantly more considered and premium.",
  },

  {
    id: 9,
    initials: "RB",
    name: "Richard Bennett",
    role: "Design Partner",
    company: "Bennett Architectural Studio",
    category: "EXTERIOR VISUALIZATION",
    quote:
      "The exterior renders communicated the architecture exactly as intended. Materials, landscaping, daylight, and overall composition were resolved with impressive care.",
  },

  {
    id: 10,
    initials: "FA",
    name: "Farah Al-Mansour",
    role: "MEP Coordinator",
    company: "Nova Engineering",
    category: "REVIT MEP",
    quote:
      "The Revit coordination work was clean and dependable. System organization, model accuracy, and coordination between disciplines made the technical workflow much easier.",
  },

  {
    id: 11,
    initials: "LP",
    name: "Lucas Pereira",
    role: "Marketing Director",
    company: "Forma Objects",
    category: "3D ANIMATION",
    quote:
      "The animation presented our product with exactly the right balance of technical clarity and cinematic polish. It immediately elevated the launch presentation.",
  },

  {
    id: 12,
    initials: "IK",
    name: "Isabella König",
    role: "Product Manager",
    company: "Nexa Digital",
    category: "DIGITAL PRODUCTS",
    quote:
      "Claystone translated a complicated product concept into a digital experience that feels simple, elegant, and fast. The attention to interaction details was excellent.",
  },
];

/* =========================================================
   HELPERS
========================================================= */

const TOTAL = testimonials.length;

function normalizeIndex(value: number) {
  return ((value % TOTAL) + TOTAL) % TOTAL;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ClientTestimonials() {
  const reduceMotion = useReducedMotion();

  const viewportRef =
    useRef<HTMLDivElement | null>(null);

  const controls = useAnimationControls();

  const [sliderPaused, setSliderPaused] =
    useState(false);

  const [isDragging, setIsDragging] =
    useState(false);

  /*
   * Three copies:
   *
   * COPY A | COPY B | COPY C
   *
   * Middle copy is the main working area.
   */
  const extendedTestimonials = useMemo(
    () => [
      ...testimonials,
      ...testimonials,
      ...testimonials,
    ],
    []
  );

  const [cardsPerView, setCardsPerView] =
    useState(4);

  const [cardWidth, setCardWidth] =
    useState(0);

  const [stepWidth, setStepWidth] =
    useState(0);

  const [virtualIndex, setVirtualIndex] =
    useState(TOTAL);

  const virtualIndexRef = useRef(TOTAL);

  const animatingRef = useRef(false);

  const activeIndex =
    normalizeIndex(virtualIndex);

  /* =========================================================
     RESPONSIVE CARD SIZE
  ========================================================= */

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const updateSize = () => {
      const width = viewport.clientWidth;

      let nextCards = 4;

      if (width < 700) {
        nextCards = 1;
      } else if (width < 1180) {
        nextCards = 2;
      }

      const totalGaps =
        GAP * (nextCards - 1);

      const nextCardWidth =
        (width - totalGaps) / nextCards;

      setCardsPerView(nextCards);

      setCardWidth(nextCardWidth);

      setStepWidth(nextCardWidth + GAP);
    };

    updateSize();

    const observer =
      new ResizeObserver(updateSize);

    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     KEEP CURRENT POSITION AFTER RESIZE
  ========================================================= */

  useEffect(() => {
    if (!stepWidth) return;

    controls.set({
      x:
        -virtualIndexRef.current *
        stepWidth,
    });
  }, [
    stepWidth,
    cardsPerView,
    controls,
  ]);

  /* =========================================================
     INFINITE LOOP NORMALIZATION
  ========================================================= */

  const normalizePosition = useCallback(
    (currentIndex: number) => {
      /*
       * Always reset invisibly to the
       * corresponding slide inside
       * the middle copy.
       *
       * Works even when user drags
       * many cards at once.
       */
      const originalIndex =
        normalizeIndex(currentIndex);

      const normalized =
        TOTAL + originalIndex;

      if (normalized !== currentIndex) {
        virtualIndexRef.current =
          normalized;

        setVirtualIndex(normalized);

        controls.set({
          x:
            -normalized *
            stepWidth,
        });
      }
    },
    [controls, stepWidth]
  );

  /* =========================================================
     MOVE TO INDEX
  ========================================================= */

  const moveTo = useCallback(
    async (nextIndex: number) => {
      if (
        !stepWidth ||
        animatingRef.current
      ) {
        return;
      }

      animatingRef.current = true;

      virtualIndexRef.current =
        nextIndex;

      setVirtualIndex(nextIndex);

      if (reduceMotion) {
        controls.set({
          x:
            -nextIndex *
            stepWidth,
        });

        normalizePosition(nextIndex);

        animatingRef.current = false;

        return;
      }

      await controls.start({
        x:
          -nextIndex *
          stepWidth,

        transition: {
          duration: 0.68,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        },
      });

      normalizePosition(nextIndex);

      animatingRef.current = false;
    },
    [
      controls,
      normalizePosition,
      reduceMotion,
      stepWidth,
    ]
  );

  /* =========================================================
     ARROW CONTROLS

     IMPORTANT:
     Arrow always moves EXACTLY ONE card.
  ========================================================= */

  const goNext = useCallback(() => {
    moveTo(
      virtualIndexRef.current + 1
    );
  }, [moveTo]);

  const goPrevious =
    useCallback(() => {
      moveTo(
        virtualIndexRef.current - 1
      );
    }, [moveTo]);

  /* =========================================================
     AUTOPLAY

     Auto play also moves one card.
  ========================================================= */

  useEffect(() => {
    if (
      reduceMotion ||
      !stepWidth ||
      sliderPaused ||
      isDragging
    ) {
      return;
    }

    const timer =
      window.setInterval(() => {
        if (!animatingRef.current) {
          goNext();
        }
      }, 5800);

    return () =>
      window.clearInterval(timer);
  }, [
    goNext,
    reduceMotion,
    sliderPaused,
    isDragging,
    stepWidth,
  ]);

  /* =========================================================
     DOT NAVIGATION
  ========================================================= */

  const goToOriginalSlide =
    useCallback(
      (targetIndex: number) => {
        moveTo(
          TOTAL + targetIndex
        );
      },
      [moveTo]
    );

  /* =========================================================
     DRAG START
  ========================================================= */

  const handleDragStart =
    useCallback(() => {
      setIsDragging(true);
    }, []);

  /* =========================================================
     DRAG END

     Drag distance determines how many
     testimonial cards will slide.

     Example:
     0.3 card drag  -> 1 card
     1.4 card drag  -> 1 card
     2.4 card drag  -> 2 cards
     3.7 card drag  -> 4 cards

     Fast swipe velocity is also included.
  ========================================================= */

  const handleDragEnd = useCallback(
    (
      _: unknown,
      info: {
        offset: {
          x: number;
          y: number;
        };

        velocity: {
          x: number;
          y: number;
        };
      }
    ) => {
      setIsDragging(false);

      if (!stepWidth) return;

      /*
       * Velocity projection makes a
       * fast swipe travel farther.
       */
      const projectedDistance =
        info.offset.x +
        info.velocity.x * 0.14;

      const absoluteDistance =
        Math.abs(projectedDistance);

      /*
       * Very small movement:
       * snap back to current slide.
       */
      const minimumDrag =
        Math.min(
          70,
          stepWidth * 0.2
        );

      if (
        absoluteDistance <
        minimumDrag
      ) {
        moveTo(
          virtualIndexRef.current
        );

        return;
      }

      /*
       * Calculate how many full card
       * widths were dragged.

       * Minimum = 1
       * Maximum = all 12 testimonials
       */
      const cardsToMove =
        Math.min(
          TOTAL,
          Math.max(
            1,
            Math.round(
              absoluteDistance /
                stepWidth
            )
          )
        );

      /*
       * Drag LEFT:
       * move forward.

       * Drag RIGHT:
       * move backward.
       */
      if (projectedDistance < 0) {
        moveTo(
          virtualIndexRef.current +
            cardsToMove
        );

        return;
      }

      moveTo(
        virtualIndexRef.current -
          cardsToMove
      );
    },
    [
      moveTo,
      stepWidth,
    ]
  );

  return (
    <section
      className="
        relative

        w-full
        overflow-hidden

        bg-[#050907]

        py-12

        text-white

        sm:py-14

        lg:py-16

        xl:py-[72px]
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
            top-[-420px]

            h-[820px]
            w-[1250px]

            max-w-full

            -translate-x-1/2

            rounded-full

            bg-[#00FF66]/[0.05]

            blur-[190px]
          "
        />

        {/* LEFT GLOW */}

        {!reduceMotion && (
          <motion.div
            animate={{
              x: [0, 45, 0],
              y: [0, 24, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease:
                "easeInOut",
            }}
            className="
              absolute

              -left-[260px]
              top-[35%]

              h-[520px]
              w-[520px]

              rounded-full

              bg-[#00FF66]/[0.045]

              blur-[170px]
            "
          />
        )}

        {/* RIGHT GLOW */}

        {!reduceMotion && (
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease:
                "easeInOut",
            }}
            className="
              absolute

              -right-[260px]
              bottom-[4%]

              h-[520px]
              w-[520px]

              rounded-full

              bg-[#00FF66]/[0.04]

              blur-[170px]
            "
          />
        )}

        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.02]

            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

            [background-size:72px_72px]
          "
        />

        {/* TOP LINE */}

        <div
          className="
            absolute

            left-1/2
            top-0

            h-px
            w-[86%]

            max-w-[1450px]

            -translate-x-1/2

            bg-gradient-to-r

            from-transparent

            via-[#00FF66]/25

            to-transparent
          "
        />

        {/* BOTTOM SHADE */}

        <div
          className="
            absolute

            inset-x-0
            bottom-0

            h-[260px]

            bg-gradient-to-t

            from-black/30

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
            mb-8

            grid
            items-end

            gap-6

            sm:mb-10

            lg:grid-cols-[1fr_auto]

            lg:gap-12

            xl:mb-12
          "
        >
          {/* LEFT */}

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
          >
            {/* EYEBROW */}

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

                tracking-[0.17em]

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
                  duration: 2.3,
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

              CLIENT TELEMETRY
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[940px]

                text-[42px]

                font-medium

                leading-[0.98]

                tracking-[-0.05em]

                text-[#f5f8f3]

                sm:text-[54px]

                md:text-[62px]

                lg:text-[68px]

                xl:text-[74px]
              "
            >
              Trusted by people
              <br />

              <span
                className="
                  bg-gradient-to-r

                  from-white

                  via-[#e8f8ed]

                  to-[#63ffa0]

                  bg-clip-text

                  text-transparent
                "
              >
                building what’s next.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4

                max-w-[760px]

                text-[16px]

                leading-[1.8]

                text-[#a7b8ae]

                sm:text-[17px]

                lg:text-[18px]
              "
            >
              Real experiences across architecture,
              digital development, visualization,
              product modeling and creative design.
            </p>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
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
              delay: 0.12,
              ease,
            }}
            className="
              flex

              items-center

              gap-3

              lg:pb-2
            "
          >
            {/* CURRENT */}

            <div
              className="
                mr-2

                hidden

                font-mono

                text-[11px]

                font-semibold

                tracking-[0.16em]

                text-white/40

                sm:block
              "
            >
              {String(
                activeIndex + 1
              ).padStart(
                2,
                "0"
              )}

              <span
                className="
                  mx-2

                  text-[#00FF66]/55
                "
              >
                /
              </span>

              {String(
                TOTAL
              ).padStart(
                2,
                "0"
              )}
            </div>

            {/* =================================================
                PREVIOUS
                EXACTLY ONE CARD
            ================================================== */}

            <motion.button
              type="button"
              aria-label="Previous testimonial"
              onClick={goPrevious}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.045,
                    }
              }
              whileTap={{
                scale: 0.95,
              }}
              className="
                group

                flex

                h-12
                w-12

                shrink-0

                cursor-pointer

                items-center
                justify-center

                rounded-full

                border
                border-white/[0.11]

                bg-[linear-gradient(145deg,#101913,#09110d)]

                text-white/75

                shadow-[0_12px_32px_rgba(0,0,0,0.38)]

                transition-all

                duration-500

                hover:border-[#00FF66]/40

                hover:bg-[#00FF66]/[0.07]

                hover:text-[#00FF66]

                hover:shadow-[0_15px_40px_rgba(0,0,0,0.50),0_0_28px_rgba(0,255,102,0.10)]
              "
            >
              <ArrowLeft
                size={18}
                className="
                  transition-transform

                  duration-500

                  group-hover:-translate-x-0.5
                "
              />
            </motion.button>

            {/* =================================================
                NEXT
                EXACTLY ONE CARD
            ================================================== */}

            <motion.button
              type="button"
              aria-label="Next testimonial"
              onClick={goNext}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.045,
                    }
              }
              whileTap={{
                scale: 0.95,
              }}
              className="
                group

                relative

                flex

                h-12
                w-12

                shrink-0

                cursor-pointer

                items-center
                justify-center

                overflow-hidden

                rounded-full

                bg-gradient-to-r

                from-[#00FF66]

                via-[#2bff88]

                to-[#00cc52]

                text-[#031007]

                shadow-[0_0_25px_rgba(0,255,102,0.4)]

                transition-all

                duration-500

                hover:shadow-[0_0_42px_rgba(0,255,102,0.7)]
              "
            >
              <span
                className="
                  pointer-events-none

                  absolute

                  inset-y-0

                  -left-[100%]

                  w-[55%]

                  skew-x-[-24deg]

                  bg-gradient-to-r

                  from-transparent

                  via-white/50

                  to-transparent

                  transition-all

                  duration-700

                  group-hover:left-[150%]
                "
              />

              <ArrowRight
                size={18}
                className="
                  relative
                  z-10

                  transition-transform

                  duration-500

                  group-hover:translate-x-0.5
                "
              />
            </motion.button>
          </motion.div>
        </div>

        {/* =================================================
            SLIDER
        ================================================== */}

        <div
          onMouseEnter={() =>
            setSliderPaused(
              true
            )
          }
          onMouseLeave={() =>
            setSliderPaused(
              false
            )
          }
          className="
            py-3

            sm:py-4
          "
        >
          <div
            ref={viewportRef}
            className="
              relative

              w-full

              overflow-hidden
            "
          >
            {/* LEFT FADE */}

            <div
              className="
                pointer-events-none

                absolute

                inset-y-0
                left-0

                z-30

                w-3

                bg-gradient-to-r

                from-[#050907]

                to-transparent

                sm:w-5
              "
            />

            {/* RIGHT FADE */}

            <div
              className="
                pointer-events-none

                absolute

                inset-y-0
                right-0

                z-30

                w-3

                bg-gradient-to-l

                from-[#050907]

                to-transparent

                sm:w-5
              "
            />

            {/* =================================================
                DRAGGABLE TRACK
            ================================================== */}

            <motion.div
              drag={
                reduceMotion
                  ? false
                  : "x"
              }
              dragElastic={0}
              dragMomentum={false}

              animate={controls}

              initial={{
                x: 0,
              }}

              onDragStart={
                handleDragStart
              }

              onDragEnd={
                handleDragEnd
              }

              className="
                flex

                cursor-grab

                items-stretch

                gap-[20px]

                py-5

                active:cursor-grabbing

                will-change-transform

                touch-pan-y
              "
            >
              {extendedTestimonials.map(
                (
                  testimonial,
                  cardIndex
                ) => (
                  <motion.article
                    key={`${testimonial.id}-${cardIndex}`}
                    style={{
                      width:
                        cardWidth ||
                        "100%",

                      flexBasis:
                        cardWidth ||
                        "100%",
                    }}
                    whileHover={
                      reduceMotion ||
                      isDragging
                        ? undefined
                        : {
                            y: -5,
                            scale:
                              1.006,
                          }
                    }
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="
                      group

                      relative

                      min-h-[440px]

                      min-w-0
                      shrink-0

                      overflow-hidden

                      rounded-[24px]

                      border
                      border-white/[0.075]

                      bg-[linear-gradient(145deg,#101a14_0%,#0b140f_52%,#07100b_100%)]

                      p-5

                      shadow-[0_22px_55px_rgba(0,0,0,0.50),0_8px_25px_rgba(0,0,0,0.28),0_0_24px_rgba(0,255,102,0.025),inset_0_1px_0_rgba(255,255,255,0.03)]

                      transition-[border-color,box-shadow]

                      duration-700

                      hover:border-[#00FF66]/30

                      hover:shadow-[0_34px_85px_rgba(0,0,0,0.67),0_0_42px_rgba(0,255,102,0.12),0_0_80px_rgba(0,255,102,0.045)]

                      sm:min-h-[460px]

                      sm:p-6

                      xl:min-h-[485px]

                      xl:p-[22px]

                      2xl:p-6
                    "
                  >
                    {/* PREMIUM BACKGROUND */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        bg-[radial-gradient(circle_at_92%_6%,rgba(0,255,102,0.11),transparent_27%),radial-gradient(circle_at_8%_100%,rgba(0,255,102,0.04),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.025),transparent_45%)]
                      "
                    />

                    {/* TOP RIGHT GLOW */}

                    <div
                      className="
                        pointer-events-none

                        absolute

                        -right-[140px]
                        -top-[140px]

                        h-[340px]
                        w-[340px]

                        rounded-full

                        bg-[#00FF66]/[0.08]

                        blur-[115px]

                        opacity-35

                        transition-all

                        duration-700

                        group-hover:scale-125

                        group-hover:opacity-100
                      "
                    />

                    {/* LOWER GLOW */}

                    <div
                      className="
                        pointer-events-none

                        absolute

                        -bottom-[190px]
                        left-1/2

                        h-[320px]
                        w-[320px]

                        -translate-x-1/2

                        rounded-full

                        bg-[#00FF66]/[0.04]

                        blur-[120px]

                        opacity-40

                        transition-opacity

                        duration-700

                        group-hover:opacity-100
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

                        [background-size:48px_48px]
                      "
                    />

                    {/* TOP ACCENT */}

                    <div
                      className="
                        pointer-events-none

                        absolute

                        left-1/2
                        top-0

                        h-[2px]
                        w-[16%]

                        -translate-x-1/2

                        bg-gradient-to-r

                        from-transparent

                        via-[#00FF66]/65

                        to-transparent

                        opacity-75

                        shadow-[0_0_12px_rgba(0,255,102,0.35)]

                        transition-all

                        duration-700

                        group-hover:w-[72%]

                        group-hover:via-[#00FF66]
                      "
                    />

                    {/* LEFT ACCENT */}

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

                        via-[#00FF66]/0

                        to-transparent

                        transition-all

                        duration-700

                        group-hover:via-[#00FF66]/35
                      "
                    />

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10

                        flex

                        h-full

                        flex-col
                      "
                    >
                      {/* TOP */}

                      <div
                        className="
                          flex

                          items-start

                          justify-between

                          gap-3
                        "
                      >
                        {/* CATEGORY */}

                        <div
                          className="
                            inline-flex

                            min-w-0

                            items-center

                            gap-2

                            rounded-full

                            border
                            border-[#00FF66]/20

                            bg-[#00FF66]/[0.05]

                            px-3.5
                            py-2

                            font-mono

                            text-[9px]

                            font-bold

                            uppercase

                            tracking-[0.10em]

                            text-[#8effb8]

                            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]

                            backdrop-blur-md

                            transition-all

                            duration-500

                            group-hover:border-[#00FF66]/35

                            group-hover:bg-[#00FF66]/[0.075]

                            sm:text-[9.5px]

                            2xl:text-[10px]
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5

                              shrink-0

                              rounded-full

                              bg-[#00FF66]

                              shadow-[0_0_8px_rgba(0,255,102,0.9)]
                            "
                          />

                          <span className="truncate">
                            {
                              testimonial.category
                            }
                          </span>
                        </div>

                        {/* NUMBER */}

                        <span
                          className="
                            shrink-0

                            pt-1.5

                            font-mono

                            text-[9px]

                            font-bold

                            tracking-[0.13em]

                            text-white/30

                            2xl:text-[9.5px]
                          "
                        >
                          {String(
                            testimonial.id
                          ).padStart(
                            2,
                            "0"
                          )}

                          <span
                            className="
                              mx-1

                              text-[#00FF66]/40
                            "
                          >
                            /
                          </span>

                          12
                        </span>
                      </div>

                      {/* QUOTE ICON */}

                      <div
                        className="
                          mt-6

                          flex

                          h-12
                          w-12

                          items-center
                          justify-center

                          rounded-[14px]

                          border
                          border-[#00FF66]/18

                          bg-[linear-gradient(145deg,rgba(0,255,102,0.10),rgba(0,255,102,0.035))]

                          text-[#00FF66]

                          shadow-[0_0_22px_rgba(0,255,102,0.08),inset_0_1px_0_rgba(255,255,255,0.04)]

                          transition-all

                          duration-500

                          group-hover:scale-105

                          group-hover:border-[#00FF66]/35

                          group-hover:bg-[#00FF66]/[0.10]

                          group-hover:shadow-[0_0_30px_rgba(0,255,102,0.16)]
                        "
                      >
                        <Quote
                          size={19}
                          strokeWidth={
                            1.7
                          }
                        />
                      </div>

                      {/* QUOTE TEXT */}

                      <blockquote
                        className="
                          mt-5

                          text-[17px]

                          font-normal

                          leading-[1.72]

                          tracking-[-0.018em]

                          text-[#dce6df]

                          transition-colors

                          duration-500

                          group-hover:text-white

                          sm:text-[18px]

                          xl:text-[16.5px]

                          2xl:text-[17.5px]
                        "
                      >
                        “
                        {
                          testimonial.quote
                        }
                        ”
                      </blockquote>

                      {/* CLIENT FOOTER */}

                      <div
                        className="
                          mt-auto

                          pt-7
                        "
                      >
                        <div
                          className="
                            mb-4

                            h-px
                            w-full

                            bg-gradient-to-r

                            from-[#00FF66]/25

                            via-white/[0.07]

                            to-transparent

                            transition-all

                            duration-700

                            group-hover:from-[#00FF66]/45

                            group-hover:via-[#00FF66]/10
                          "
                        />

                        <div
                          className="
                            flex

                            items-center

                            justify-between

                            gap-3
                          "
                        >
                          {/* PERSON */}

                          <div
                            className="
                              flex

                              min-w-0

                              items-center

                              gap-3
                            "
                          >
                            {/* AVATAR */}

                            <motion.div
                              whileHover={
                                reduceMotion
                                  ? undefined
                                  : {
                                      scale:
                                        1.07,
                                    }
                              }
                              className="
                                relative

                                flex

                                h-12
                                w-12

                                shrink-0

                                items-center
                                justify-center

                                overflow-hidden

                                rounded-full

                                border
                                border-[#00FF66]/25

                                bg-[linear-gradient(145deg,#0e6139,#06321e)]

                                text-[12px]

                                font-black

                                tracking-[0.03em]

                                text-[#52ff94]

                                shadow-[0_0_24px_rgba(0,255,102,0.10),inset_0_1px_0_rgba(255,255,255,0.06)]
                              "
                            >
                              <span
                                className="
                                  pointer-events-none

                                  absolute

                                  -right-3
                                  -top-3

                                  h-8
                                  w-8

                                  rounded-full

                                  bg-white/15

                                  blur-xl
                                "
                              />

                              <span
                                className="
                                  relative
                                  z-10
                                "
                              >
                                {
                                  testimonial.initials
                                }
                              </span>
                            </motion.div>

                            {/* CLIENT INFO */}

                            <div
                              className="
                                min-w-0
                              "
                            >
                              <div
                                className="
                                  truncate

                                  text-[15px]

                                  font-semibold

                                  tracking-[-0.015em]

                                  text-white

                                  sm:text-[16px]

                                  2xl:text-[16.5px]
                                "
                              >
                                {
                                  testimonial.name
                                }
                              </div>

                              <div
                                className="
                                  mt-1

                                  line-clamp-2

                                  font-mono

                                  text-[8.5px]

                                  font-medium

                                  uppercase

                                  leading-[1.5]

                                  tracking-[0.09em]

                                  text-[#779084]

                                  sm:text-[9px]

                                  2xl:text-[9.5px]
                                "
                              >
                                {
                                  testimonial.role
                                }

                                <span
                                  className="
                                    mx-1

                                    text-[#00FF66]/40
                                  "
                                >
                                  /
                                </span>

                                {
                                  testimonial.company
                                }
                              </div>
                            </div>
                          </div>

                          {/* SPARK */}

                          <Sparkles
                            size={15}
                            className="
                              shrink-0

                              text-[#00FF66]/30

                              transition-all

                              duration-500

                              group-hover:rotate-12

                              group-hover:scale-110

                              group-hover:text-[#00FF66]
                            "
                          />
                        </div>
                      </div>
                    </div>

                    {/* HOVER SHINE */}

                    <span
                      className="
                        pointer-events-none

                        absolute

                        inset-y-0

                        -left-[70%]

                        w-[25%]

                        skew-x-[-22deg]

                        bg-gradient-to-r

                        from-transparent

                        via-white/[0.035]

                        to-transparent

                        transition-all

                        duration-1000

                        group-hover:left-[130%]
                      "
                    />
                  </motion.article>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* =================================================
            BOTTOM CONTROLS
        ================================================== */}

        <div
          className="
            mt-5

            flex

            flex-col

            gap-4

            sm:flex-row

            sm:items-center

            sm:justify-between
          "
        >
          {/* DOT NAVIGATION */}

          <div
            className="
              flex

              flex-wrap

              items-center

              gap-2
            "
          >
            {testimonials.map(
              (
                testimonial,
                dotIndex
              ) => (
                <button
                  key={
                    testimonial.id
                  }
                  type="button"
                  aria-label={`Go to testimonial ${
                    dotIndex +
                    1
                  }`}
                  onClick={() =>
                    goToOriginalSlide(
                      dotIndex
                    )
                  }
                  className={`
                    h-2

                    cursor-pointer

                    rounded-full

                    transition-all

                    duration-500

                    ${
                      activeIndex ===
                      dotIndex
                        ? `
                          w-8

                          bg-[#00FF66]

                          shadow-[0_0_14px_rgba(0,255,102,0.55)]
                        `
                        : `
                          w-2

                          bg-white/15

                          hover:bg-[#00FF66]/50
                        `
                    }
                  `}
                />
              )
            )}
          </div>

          {/* HELPER STATUS */}

          <div
            className="
              relative

              flex

              items-center

              gap-2.5

              rounded-full

              border
              border-white/[0.07]

              bg-white/[0.025]

              px-4
              py-2.5

              font-mono

              text-[9px]

              font-semibold

              uppercase

              tracking-[0.13em]

              text-white/40

              shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]

              backdrop-blur-lg

              sm:text-[10px]

              lg:text-[10.5px]
            "
          >
            <span
              className="
                relative

                flex

                h-2
                w-2

                shrink-0
              "
            >
              <span
                className="
                  absolute

                  inline-flex

                  h-full
                  w-full

                  animate-ping

                  rounded-full

                  bg-[#00FF66]

                  opacity-35
                "
              />

              <span
                className="
                  relative

                  inline-flex

                  h-2
                  w-2

                  rounded-full

                  bg-[#00FF66]

                  shadow-[0_0_8px_rgba(0,255,102,0.8)]
                "
              />
            </span>

            12 CLIENT STORIES

            <span
              className="
                text-[#00FF66]/45
              "
            >
              •
            </span>

            DRAG

            <span
              className="
                text-[#00FF66]/45
              "
            >
              •
            </span>

            MULTI-CARD

            <span
              className="
                text-[#00FF66]/45
              "
            >
              •
            </span>

            AUTO PLAY
          </div>
        </div>
      </div>
    </section>
  );
}