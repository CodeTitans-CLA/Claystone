"use client";

import Link from "next/link";
import { Geist } from "next/font/google";

import {
  ArrowRight,
  CalendarDays,
  Cloud,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   FONT
========================================================= */

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   VIEWPORT REVEAL
========================================================= */

function useInView() {
  const ref =
    useRef<HTMLElement | null>(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "-4% 0px -4% 0px",
        }
      );

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);

  return {
    ref,
    visible,
  };
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ArchitectureFinalCTA() {
  const {
    ref,
    visible,
  } = useInView();

  return (
    <section
      ref={ref}
      className={`
        ${geist.className}

        relative
        isolate

        w-full

        overflow-hidden

        bg-[#07100b]

        px-4
        py-8

        text-white

        sm:px-6
        sm:py-10

        md:px-8
        md:py-12

        lg:px-10
        lg:py-14

        xl:px-12
        xl:py-16
      `}
    >
      {/* =====================================================
          BASE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-50

          bg-[#07100b]
        "
      />

      {/* =====================================================
          DOT GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-40

          opacity-[0.10]

          [background-image:radial-gradient(rgba(123,255,168,0.5)_0.7px,transparent_0.7px)]

          [background-size:27px_27px]
        "
      />

      {/* =====================================================
          CENTER AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-[48%]

          -z-30

          h-[500px]
          w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#00ff66]/[0.045]

          blur-[150px]

          sm:h-[560px]
          sm:w-[820px]

          lg:h-[620px]
          lg:w-[950px]
        "
      />

      {/* =====================================================
          LEFT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          -left-[300px]

          top-[20%]

          -z-30

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#00ff66]/[0.018]

          blur-[170px]
        "
      />

      {/* =====================================================
          RIGHT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          -right-[300px]

          top-[20%]

          -z-30

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#00ff66]/[0.018]

          blur-[170px]
        "
      />

      {/* =====================================================
          OUTER BORDER PANEL
          PADDING REDUCED
      ===================================================== */}

      <div
        className={`
          relative

          mx-auto

          w-full

          max-w-[1540px]

          overflow-hidden

          rounded-[22px]

          border
          border-white/[0.055]

          bg-[#07100b]/75

          px-4
          py-8

          shadow-[0_30px_100px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.025)]

          backdrop-blur-xl

          transition-all

          duration-1000

          ease-[cubic-bezier(0.16,1,0.3,1)]

          sm:px-6
          sm:py-10

          md:px-8
          md:py-12

          lg:px-10
          lg:py-14

          xl:px-12
          xl:py-16

          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-7 opacity-0"
          }

          motion-reduce:transform-none
          motion-reduce:transition-none
        `}
      >
        {/* Top Highlight */}

        <div
          className="
            pointer-events-none

            absolute

            left-1/2
            top-0

            h-px
            w-[35%]

            -translate-x-1/2

            bg-gradient-to-r

            from-transparent

            via-[#00ff66]/45

            to-transparent
          "
        />

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10

            mx-auto

            flex

            max-w-[1180px]

            flex-col

            items-center

            text-center
          "
        >
          {/* =================================================
              STATUS
              BOTTOM GAP REDUCED
          ================================================= */}

          <div
            className={`
              mb-4

              inline-flex

              items-center

              gap-2

              rounded-full

              border
              border-white/[0.05]

              bg-white/[0.055]

              px-3.5
              py-2

              text-[9px]

              font-black

              uppercase

              leading-none

              tracking-[0.15em]

              text-[#00ff66]

              shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]

              backdrop-blur-xl

              transition-all

              duration-700

              min-[420px]:text-[9.5px]

              sm:px-4
              sm:text-[10px]

              md:text-[10.5px]

              lg:text-[11px]

              xl:text-[11.5px]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{
              transitionDelay:
                visible
                  ? "80ms"
                  : "0ms",
            }}
          >
            <span
              className="
                relative

                flex

                h-2
                w-2
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

                  bg-[#00ff66]

                  opacity-40
                "
              />

              <span
                className="
                  relative

                  inline-flex

                  h-2
                  w-2

                  rounded-full

                  bg-[#00ff66]

                  shadow-[0_0_10px_rgba(0,255,102,0.85)]
                "
              />
            </span>

            Next Available Sprint:
            14 Days
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h2
            className={`
              max-w-[1080px]

              text-[42px]

              font-bold

              leading-[1.02]

              tracking-[-0.055em]

              text-[#effff1]

              transition-all

              duration-1000

              ease-[cubic-bezier(0.16,1,0.3,1)]

              min-[390px]:text-[46px]

              min-[460px]:text-[52px]

              sm:text-[60px]

              md:text-[68px]

              lg:text-[76px]

              xl:text-[84px]

              2xl:text-[80px]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay:
                visible
                  ? "130ms"
                  : "0ms",
            }}
          >
            Ready to engineer
            your next

            <span className="block">
              spatial landmark?
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
              TOP GAP REDUCED
          ================================================= */}

          <p
            className={`
              mt-4

              max-w-[860px]

              text-[14px]

              font-normal

              leading-[1.65]

              tracking-[-0.008em]

              text-[#d7e4d9]/72

              transition-all

              duration-1000

              ease-[cubic-bezier(0.16,1,0.3,1)]

              min-[420px]:text-[14.5px]

              sm:text-[16px]

              md:text-[17px]

              lg:text-[18px]

              xl:text-[19px]

              2xl:text-[20px]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay:
                visible
                  ? "180ms"
                  : "0ms",
            }}
          >
            From initial napkin sketch to permit-ready BIM
            documentation and cinematic visual twins. Let our
            technical studio translate your vision into millimeter
            precision.
          </p>

          {/* =================================================
              BUTTONS
              TOP GAP + BUTTON GAP REDUCED
          ================================================= */}

          <div
            className={`
              mt-6

              flex

              w-full

              max-w-[760px]

              flex-col

              items-stretch

              justify-center

              gap-2.5

              transition-all

              duration-1000

              ease-[cubic-bezier(0.16,1,0.3,1)]

              sm:w-auto
              sm:flex-row
              sm:items-center

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay:
                visible
                  ? "240ms"
                  : "0ms",
            }}
          >
            {/* =================================================
                PRIMARY CTA
            ================================================= */}

            <Link
              href="/contact"
              className="
                group/primary

                relative

                flex

                min-h-[52px]

                cursor-pointer

                touch-manipulation

                select-none

                items-center

                justify-center

                gap-2

                overflow-hidden

                rounded-full

                px-6
                py-3

                text-[14px]

                font-bold

                tracking-[-0.015em]

                text-[#03200d]

                outline-none

                transition-all

                duration-500

                hover:-translate-y-0.5

                active:scale-[0.98]

                focus-visible:ring-2

                focus-visible:ring-[#00ff66]/70

                focus-visible:ring-offset-3

                focus-visible:ring-offset-[#07100b]

                sm:min-w-[260px]
                sm:text-[14.5px]

                md:min-h-[54px]
                md:text-[15px]

                lg:min-w-[280px]
                lg:text-[15.5px]

                xl:min-w-[295px]
                xl:text-[16px]

                2xl:text-[16.5px]
              "
            >
              {/* Green Base */}

              <span
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r

                  from-[#00e85c]

                  via-[#00ff66]

                  to-[#00d957]

                  transition-transform

                  duration-500

                  group-hover/primary:scale-[1.04]
                "
              />

              {/* Glow */}

              <span
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  rounded-full

                  shadow-[0_0_26px_rgba(0,255,102,0.38)]

                  transition-shadow

                  duration-500

                  group-hover/primary:shadow-[0_0_42px_rgba(0,255,102,0.62)]
                "
              />

              {/* Shine */}

              <span
                className="
                  pointer-events-none

                  absolute

                  -left-[45%]

                  top-0

                  h-full
                  w-[30%]

                  skew-x-[-22deg]

                  bg-white/35

                  blur-md

                  transition-all

                  duration-700

                  group-hover/primary:left-[125%]
                "
              />

              <span
                className="
                  relative
                  z-10
                "
              >
                Initiate Architecture Brief
              </span>

              <ArrowRight
                className="
                  relative
                  z-10

                  h-[18px]
                  w-[18px]

                  shrink-0

                  transition-transform

                  duration-300

                  group-hover/primary:translate-x-1

                  sm:h-5
                  sm:w-5
                "
              />
            </Link>

            {/* =================================================
                SECONDARY CTA
            ================================================= */}

            <Link
              href="/contact"
              className="
                group/secondary

                relative

                flex

                min-h-[52px]

                cursor-pointer

                touch-manipulation

                select-none

                items-center

                justify-center

                gap-2

                overflow-hidden

                rounded-full

                border
                border-white/[0.06]

                bg-white/[0.065]

                px-6
                py-3

                text-[14px]

                font-bold

                tracking-[-0.015em]

                text-[#effff2]

                backdrop-blur-xl

                outline-none

                transition-all

                duration-500

                hover:-translate-y-0.5

                hover:border-[#00ff66]/20

                hover:bg-[#00ff66]/[0.045]

                hover:shadow-[0_16px_38px_rgba(0,0,0,0.25),0_0_30px_rgba(0,255,102,0.06)]

                active:scale-[0.98]

                focus-visible:ring-2

                focus-visible:ring-[#00ff66]/55

                focus-visible:ring-offset-3

                focus-visible:ring-offset-[#07100b]

                sm:min-w-[260px]
                sm:text-[14.5px]

                md:min-h-[54px]
                md:text-[15px]

                lg:min-w-[290px]
                lg:text-[15.5px]

                xl:min-w-[305px]
                xl:text-[16px]

                2xl:text-[16.5px]
              "
            >
              {/* Shine */}

              <span
                className="
                  pointer-events-none

                  absolute

                  inset-0

                  -translate-x-[120%]

                  bg-gradient-to-r

                  from-transparent

                  via-white/[0.06]

                  to-transparent

                  transition-transform

                  duration-700

                  group-hover/secondary:translate-x-[120%]
                "
              />

              <CalendarDays
                className="
                  relative
                  z-10

                  h-[18px]
                  w-[18px]

                  shrink-0

                  text-[#00ff66]

                  transition-transform

                  duration-300

                  group-hover/secondary:scale-110

                  sm:h-5
                  sm:w-5
                "
              />

              <span
                className="
                  relative
                  z-10
                "
              >
                Book Technical Discovery Call
              </span>
            </Link>
          </div>

          {/* =================================================
              TRUST POINTS
              TOP GAP REDUCED
          ================================================= */}

          <div
            className={`
              mt-5

              flex

              max-w-[900px]

              flex-wrap

              items-center

              justify-center

              gap-x-4
              gap-y-2

              transition-all

              duration-1000

              ease-[cubic-bezier(0.16,1,0.3,1)]

              sm:gap-x-5

              lg:gap-x-6

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{
              transitionDelay:
                visible
                  ? "300ms"
                  : "0ms",
            }}
          >
            <TrustItem
              icon={ShieldCheck}
              label="NDA Guaranteed"
            />

            <TrustItem
              icon={KeyRound}
              label="Full IP Ownership"
            />

            <TrustItem
              icon={Cloud}
              label="Cloud BIM Handoff"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
  label: string;
}) {
  return (
    <div
      className="
        group/trust

        flex

        items-center

        gap-1.5

        text-[9px]

        font-black

        uppercase

        leading-none

        tracking-[0.145em]

        text-[#d7e6da]/68

        transition-all

        duration-300

        hover:text-[#bfffd0]

        min-[420px]:text-[9.5px]

        sm:text-[10px]

        md:text-[10.5px]

        lg:text-[11px]

        xl:text-[11.5px]

        2xl:text-[12px]
      "
    >
      <Icon
        className="
          h-4
          w-4

          shrink-0

          text-[#00ff66]/80

          transition-all

          duration-300

          group-hover/trust:scale-110

          group-hover/trust:text-[#00ff66]

          sm:h-[17px]
          sm:w-[17px]

          lg:h-[18px]
          lg:w-[18px]
        "
        strokeWidth={2.2}
      />

      <span>
        {label}
      </span>
    </div>
  );
}