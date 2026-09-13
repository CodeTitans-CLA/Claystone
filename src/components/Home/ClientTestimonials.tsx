'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from 'framer-motion';

import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
} from 'lucide-react';

/* =========================================================
   CONFIG
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const GAP = 24;

const testimonials = [
  {
    id: 1,
    initials: 'MH',
    name: 'Marcus Holmberg',
    role: 'Principal',
    company: 'Nordic Horizon Developments',
    category: 'ARCHITECTURE',
    quote:
      'Claystone is the only partner we trust to take our property developments from preliminary architectural drawings into polished, presentation-ready visual experiences. Their precision saves us time at every stage.',
  },

  {
    id: 2,
    initials: 'ER',
    name: 'Elena Rostova',
    role: 'CTO',
    company: 'Chronos Platform',
    category: 'WEB DEVELOPMENT',
    quote:
      'The speed and architectural discipline behind Claystone’s web development is exceptional. They translated a complex platform into a fast, responsive, and polished digital experience.',
  },

  {
    id: 3,
    initials: 'JM',
    name: 'James Miller',
    role: 'Project Director',
    company: 'Axis Build Group',
    category: 'BIM & ENGINEERING',
    quote:
      'From BIM coordination to detailed architectural documentation, the workflow was clear, accurate, and extremely professional. Every deliverable felt carefully considered and construction-ready.',
  },

  {
    id: 4,
    initials: 'SL',
    name: 'Sophia Laurent',
    role: 'Creative Director',
    company: 'Maison Form Studio',
    category: 'INTERIOR VISUALIZATION',
    quote:
      'The interior visualization quality exceeded our expectations. Materials, lighting, proportions, and atmosphere were handled with a level of detail that made every presentation feel premium.',
  },

  {
    id: 5,
    initials: 'DK',
    name: 'Daniel Kim',
    role: 'Product Lead',
    company: 'Vertex Industrial',
    category: 'PRODUCT MODELING',
    quote:
      'Our product models required both technical accuracy and strong marketing visuals. Claystone delivered both—the geometry was precise and the final renders looked ready for a global launch.',
  },

  {
    id: 6,
    initials: 'AM',
    name: 'Amelia Morgan',
    role: 'Brand Strategist',
    company: 'Northline Collective',
    category: 'BRAND & GRAPHICS',
    quote:
      'What impressed us most was the ability to move across branding, graphics, 3D, and digital without losing consistency. The result felt like one unified premium creative system.',
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

  /*
   * 3 copies make the slider infinitely loop:
   *
   * COPY A | COPY B | COPY C
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
    useState(2);

  const [cardWidth, setCardWidth] =
    useState(0);

  const [stepWidth, setStepWidth] =
    useState(0);

  /*
   * Start at middle copy.
   */
  const [virtualIndex, setVirtualIndex] =
    useState(TOTAL);

  const virtualIndexRef =
    useRef(TOTAL);

  const animatingRef =
    useRef(false);

  /* =========================================================
     ACTIVE INDEX
  ========================================================= */

  const activeIndex =
    normalizeIndex(virtualIndex);

  /* =========================================================
     RESPONSIVE MEASUREMENT
  ========================================================= */

  useEffect(() => {
    const viewport =
      viewportRef.current;

    if (!viewport) return;

    const updateSize = () => {
      const width =
        viewport.clientWidth;

      /*
       * Mobile: 1 card
       * Tablet/Desktop: 2 cards
       */
      const nextCards =
        width < 768 ? 1 : 2;

      const nextCardWidth =
        nextCards === 1
          ? width
          : (width - GAP) / 2;

      setCardsPerView(nextCards);

      setCardWidth(nextCardWidth);

      setStepWidth(
        nextCardWidth + GAP
      );
    };

    updateSize();

    const observer =
      new ResizeObserver(
        updateSize
      );

    observer.observe(viewport);

    return () =>
      observer.disconnect();
  }, []);

  /* =========================================================
     KEEP POSITION AFTER RESIZE
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
     INFINITE POSITION NORMALIZATION
  ========================================================= */

  const normalizePosition =
    useCallback(
      (
        currentIndex: number
      ) => {
        let normalized =
          currentIndex;

        /*
         * Third copy → reset invisibly
         * into middle copy.
         */
        if (
          normalized >=
          TOTAL * 2
        ) {
          normalized -= TOTAL;
        }

        /*
         * First copy → reset invisibly
         * into middle copy.
         */
        if (
          normalized < TOTAL
        ) {
          normalized += TOTAL;
        }

        if (
          normalized !==
          currentIndex
        ) {
          virtualIndexRef.current =
            normalized;

          setVirtualIndex(
            normalized
          );

          controls.set({
            x:
              -normalized *
              stepWidth,
          });
        }
      },
      [
        controls,
        stepWidth,
      ]
    );

  /* =========================================================
     MOVE TO SLIDE
  ========================================================= */

  const moveTo =
    useCallback(
      async (
        nextIndex: number
      ) => {
        if (
          !stepWidth ||
          animatingRef.current
        ) {
          return;
        }

        animatingRef.current =
          true;

        virtualIndexRef.current =
          nextIndex;

        setVirtualIndex(
          nextIndex
        );

        if (reduceMotion) {
          controls.set({
            x:
              -nextIndex *
              stepWidth,
          });

          normalizePosition(
            nextIndex
          );

          animatingRef.current =
            false;

          return;
        }

        await controls.start({
          x:
            -nextIndex *
            stepWidth,

          transition: {
            type: 'spring',
            stiffness: 155,
            damping: 25,
            mass: 0.9,
          },
        });

        normalizePosition(
          nextIndex
        );

        animatingRef.current =
          false;
      },
      [
        controls,
        normalizePosition,
        reduceMotion,
        stepWidth,
      ]
    );

  /* =========================================================
     NEXT / PREVIOUS
  ========================================================= */

  const goNext =
    useCallback(() => {
      moveTo(
        virtualIndexRef.current +
          1
      );
    }, [moveTo]);

  const goPrevious =
    useCallback(() => {
      moveTo(
        virtualIndexRef.current -
          1
      );
    }, [moveTo]);

  /* =========================================================
     DOT NAVIGATION
  ========================================================= */

  const goToOriginalSlide =
    useCallback(
      (
        targetIndex: number
      ) => {
        moveTo(
          TOTAL +
            targetIndex
        );
      },
      [moveTo]
    );

  /* =========================================================
     DRAG END
  ========================================================= */

  const handleDragEnd =
    useCallback(
      (
        _: unknown,
        info: {
          offset: {
            x: number;
          };
          velocity: {
            x: number;
          };
        }
      ) => {
        const power =
          info.offset.x +
          info.velocity.x *
            0.12;

        if (
          power < -55
        ) {
          goNext();
          return;
        }

        if (
          power > 55
        ) {
          goPrevious();
          return;
        }

        /*
         * Small drag → snap back.
         */
        moveTo(
          virtualIndexRef.current
        );
      },
      [
        goNext,
        goPrevious,
        moveTo,
      ]
    );

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
            top-[-380px]

            h-[760px]
            w-[1200px]

            max-w-full

            -translate-x-1/2

            rounded-full

            bg-[#00FF66]/5

            blur-[180px]
          "
        />

        {/* Left Ambient Glow */}

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
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute

              -left-[240px]
              top-[42%]

              h-[480px]
              w-[480px]

              rounded-full

              bg-[#00FF66]/5

              blur-[160px]
            "
          />
        )}

        {/* Right Ambient Glow */}

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
              duration: 17,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute

              -right-[240px]
              bottom-[5%]

              h-[480px]
              w-[480px]

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

            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

            [background-size:72px_72px]
          "
        />

        {/* Top Divider */}

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
            mb-10

            grid
            items-end
            gap-8

            lg:mb-14

            lg:grid-cols-[1fr_auto]

            lg:gap-16
          "
        >
          {/* LEFT */}

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

                tracking-[0.18em]

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
                  duration: 2.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
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

            {/* Heading */}

            <h2
              className="
                max-w-[920px]

                text-[42px]

                font-medium

                leading-[0.98]

                tracking-[-0.045em]

                text-[#f5f8f3]

                sm:text-[54px]

                md:text-[62px]

                lg:text-[70px]

                xl:text-[76px]
              "
            >
              Trusted by people
              <br />

              <span
                className="
                  bg-gradient-to-r

                  from-white

                  via-[#e9f5ed]

                  to-[#70ffa7]

                  bg-clip-text

                  text-transparent
                "
              >
                building what’s next.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5

                max-w-[680px]

                text-[14px]

                leading-[1.8]

                text-[#9fb2a7]

                sm:text-[15px]

                lg:text-[16px]
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
            {/* Current Slide */}

            <div
              className="
                mr-2

                hidden

                font-mono

                text-[9px]

                tracking-[0.15em]

                text-white/25

                sm:block
              "
            >
              {String(
                activeIndex + 1
              ).padStart(
                2,
                '0'
              )}

              <span
                className="
                  mx-2

                  text-[#00FF66]/45
                "
              >
                /
              </span>

              {String(
                TOTAL
              ).padStart(
                2,
                '0'
              )}
            </div>

            {/* =================================================
                PREVIOUS BUTTON
            ================================================== */}

            <motion.button
              type="button"

              aria-label="Previous testimonial"

              onClick={goPrevious}

              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.04,
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

                touch-manipulation

                items-center

                justify-center

                rounded-full

                border

                border-white/10

                bg-[#0c1510]

                text-white/70

                shadow-[0_12px_32px_rgba(0,0,0,0.38)]

                outline-none

                transition-all

                duration-500

                hover:border-[#00FF66]/35

                hover:bg-[#00FF66]/6

                hover:text-[#00FF66]

                hover:shadow-[0_15px_40px_rgba(0,0,0,0.50),0_0_30px_rgba(0,255,102,0.10)]

                focus-visible:ring-2

                focus-visible:ring-[#00FF66]/50

                active:scale-95
              "
            >
              <ArrowLeft
                size={17}

                className="
                  transition-transform

                  duration-500

                  group-hover:-translate-x-1
                "
              />
            </motion.button>

            {/* =================================================
                NEXT BUTTON
            ================================================== */}

            <motion.button
              type="button"

              aria-label="Next testimonial"

              onClick={goNext}

              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.04,
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

                touch-manipulation

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

                outline-none

                transition-all

                duration-500

                hover:shadow-[0_0_40px_rgba(0,255,102,0.7)]

                focus-visible:ring-2

                focus-visible:ring-[#00FF66]/60

                active:scale-95
              "
            >
              {/* Shine */}

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
                size={17}

                className="
                  relative
                  z-10

                  transition-transform

                  duration-500

                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </motion.div>
        </div>

        {/* =================================================
            SLIDER SAFE SPACE
        ================================================== */}

        <div
          className="
            py-4

            sm:py-6
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
            {/* Left Fade */}

            <div
              className="
                pointer-events-none

                absolute

                inset-y-0

                left-0

                z-30

                w-4

                bg-gradient-to-r

                from-[#050907]

                to-transparent

                sm:w-8
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

                w-4

                bg-gradient-to-l

                from-[#050907]

                to-transparent

                sm:w-8
              "
            />

            {/* =================================================
                INFINITE TRACK
            ================================================== */}

            <motion.div
              drag={
                reduceMotion
                  ? false
                  : 'x'
              }

              dragElastic={0.08}

              dragMomentum={false}

              animate={controls}

              initial={{
                x: 0,
              }}

              onDragEnd={
                handleDragEnd
              }

              className="
                flex

                cursor-grab

                select-none

                gap-6

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
                        '100%',

                      flexBasis:
                        cardWidth ||
                        '100%',
                    }}

                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -7,
                            scale: 1.005,
                          }
                    }

                    transition={{
                      duration: 0.4,
                      ease,
                    }}

                    className="
                      group

                      relative

                      min-w-0
                      shrink-0

                      overflow-hidden

                      rounded-[30px]

                      border

                      border-white/7.5

                      bg-[linear-gradient(145deg,#0f1812_0%,#0a120d_55%,#07100b_100%)]

                      p-6

                      shadow-[0_24px_65px_rgba(0,0,0,0.50),0_0_25px_rgba(0,255,102,0.025)]

                      transition-[border-color,box-shadow]

                      duration-700

                      hover:border-[#00FF66]/25

                      hover:shadow-[0_38px_95px_rgba(0,0,0,0.68),0_0_45px_rgba(0,255,102,0.11)]

                      sm:p-8

                      lg:p-9
                    "
                  >
                    {/* =============================================
                        CARD ATMOSPHERE
                    ============================================== */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        bg-[radial-gradient(circle_at_92%_5%,rgba(0,255,102,0.09),transparent_27%),linear-gradient(135deg,rgba(255,255,255,0.025),transparent_42%)]
                      "
                    />

                    {/* Top Glow */}

                    <div
                      className="
                        pointer-events-none

                        absolute

                        -right-[140px]

                        -top-[140px]

                        h-[340px]
                        w-[340px]

                        rounded-full

                        bg-[#00FF66]/10

                        blur-[110px]

                        opacity-30

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

                        -bottom-[180px]

                        left-1/2

                        h-[300px]
                        w-[300px]

                        -translate-x-1/2

                        rounded-full

                        bg-[#00FF66]/5

                        blur-[110px]

                        opacity-30

                        transition-opacity

                        duration-700

                        group-hover:opacity-100
                      "
                    />

                    {/* Grid */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        opacity-[0.028]

                        [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]

                        [background-size:48px_48px]
                      "
                    />

                    {/* Top Accent */}

                    <div
                      className="
                        absolute

                        left-1/2

                        top-0

                        h-px

                        w-[20%]

                        -translate-x-1/2

                        bg-gradient-to-r

                        from-transparent

                        via-[#00FF66]/50

                        to-transparent

                        transition-all

                        duration-700

                        group-hover:w-[72%]

                        group-hover:via-[#00FF66]
                      "
                    />

                    {/* =================================================
                        TOP META
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10

                        mb-8

                        flex

                        items-center

                        justify-between

                        gap-4
                      "
                    >
                      {/* Category */}

                      <div
                        className="
                          inline-flex

                          items-center

                          gap-2

                          rounded-full

                          border

                          border-[#00FF66]/15

                          bg-[#00FF66]/4.5

                          px-3

                          py-1.5

                          font-mono

                          text-[7px]

                          font-bold

                          uppercase

                          tracking-[0.12em]

                          text-[#75ffa9]

                          sm:text-[8px]
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5

                            rounded-full

                            bg-[#00FF66]

                            shadow-[0_0_8px_rgba(0,255,102,0.8)]
                          "
                        />

                        {
                          testimonial.category
                        }
                      </div>

                      {/* Number */}

                      <span
                        className="
                          font-mono

                          text-[8px]

                          tracking-[0.14em]

                          text-white/20
                        "
                      >
                        {String(
                          testimonial.id
                        ).padStart(
                          2,
                          '0'
                        )}

                        {' / '}

                        06
                      </span>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10

                        flex

                        min-h-[310px]

                        flex-col

                        sm:min-h-[330px]

                        lg:min-h-[350px]
                      "
                    >
                      {/* Quote Icon */}

                      <div
                        className="
                          mb-6

                          flex

                          h-11
                          w-11

                          items-center

                          justify-center

                          rounded-[13px]

                          border

                          border-[#00FF66]/15

                          bg-[#00FF66]/5

                          text-[#00FF66]

                          shadow-[0_0_20px_rgba(0,255,102,0.07)]

                          transition-all

                          duration-500

                          group-hover:border-[#00FF66]/30

                          group-hover:bg-[#00FF66]/8

                          group-hover:shadow-[0_0_28px_rgba(0,255,102,0.14)]
                        "
                      >
                        <Quote
                          size={18}
                          strokeWidth={1.6}
                        />
                      </div>

                      {/* Quote */}

                      <blockquote
                        className="
                          max-w-[680px]

                          text-[16px]

                          font-normal

                          leading-[1.72]

                          tracking-[-0.018em]

                          text-[#e0e9e3]

                          transition-colors

                          duration-500

                          group-hover:text-white

                          sm:text-[17px]

                          lg:text-[18px]

                          2xl:text-[19px]
                        "
                      >
                        “
                        {
                          testimonial.quote
                        }
                        ”
                      </blockquote>

                      {/* =================================================
                          CLIENT FOOTER
                      ================================================== */}

                      <div
                        className="
                          mt-auto

                          pt-8
                        "
                      >
                        <div
                          className="
                            mb-5

                            h-px

                            w-full

                            bg-gradient-to-r

                            from-[#00FF66]/20

                            via-white/6

                            to-transparent
                          "
                        />

                        <div
                          className="
                            flex

                            items-center

                            justify-between

                            gap-4
                          "
                        >
                          {/* Person */}

                          <div
                            className="
                              flex

                              min-w-0

                              items-center

                              gap-3
                            "
                          >
                            {/* Avatar */}

                            <motion.div
                              whileHover={
                                reduceMotion
                                  ? undefined
                                  : {
                                      scale:
                                        1.08,
                                    }
                              }
                              className="
                                flex

                                h-11
                                w-11

                                shrink-0

                                items-center

                                justify-center

                                rounded-full

                                border

                                border-[#00FF66]/20

                                bg-gradient-to-br

                                from-[#0b5832]

                                to-[#052f1c]

                                text-[12px]

                                font-bold

                                text-[#32ff83]

                                shadow-[0_0_24px_rgba(0,255,102,0.10)]
                              "
                            >
                              {
                                testimonial.initials
                              }
                            </motion.div>

                            {/* Name */}

                            <div className="min-w-0">
                              <div
                                className="
                                  truncate

                                  text-[14px]

                                  font-semibold

                                  text-white

                                  sm:text-[15px]
                                "
                              >
                                {
                                  testimonial.name
                                }
                              </div>

                              <div
                                className="
                                  mt-1

                                  truncate

                                  font-mono

                                  text-[7px]

                                  uppercase

                                  tracking-[0.12em]

                                  text-[#718b7b]

                                  sm:text-[8px]
                                "
                              >
                                {
                                  testimonial.role
                                }

                                <span
                                  className="
                                    mx-1.5

                                    text-[#00FF66]/35
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

                          <Sparkles
                            size={14}

                            className="
                              shrink-0

                              text-[#00FF66]/35

                              transition-all

                              duration-500

                              group-hover:rotate-12

                              group-hover:text-[#00FF66]
                            "
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hover Shine */}

                    <div
                      className="
                        pointer-events-none

                        absolute

                        inset-y-0

                        -left-[70%]

                        w-[24%]

                        skew-x-[-22deg]

                        bg-gradient-to-r

                        from-transparent

                        via-white/3.5

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
            mt-4

            flex

            flex-col

            gap-5

            sm:flex-row

            sm:items-center

            sm:justify-between
          "
        >
          {/* Progress Dots */}

          <div
            className="
              flex

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
                    h-1.5

                    cursor-pointer

                    touch-manipulation

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
                          w-1.5

                          bg-white/15

                          hover:bg-[#00FF66]/45
                        `
                    }
                  `}
                />
              )
            )}
          </div>

          {/* Helper Text */}

          <div
            className="
              font-mono

              text-[7px]

              uppercase

              tracking-[0.16em]

              text-white/20

              sm:text-[8px]
            "
          >
            INFINITE · DRAG · SWIPE · USE ARROWS
          </div>
        </div>
      </div>
    </section>
  );
}