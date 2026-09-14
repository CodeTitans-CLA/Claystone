"use client";

import { Geist } from "next/font/google";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

/* =========================================================
   FONT
========================================================= */

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   DATA
========================================================= */

const plans = [
  {
    tier: "TIER 01 // CONCEPT",
    title: "Schematic & Feasibility",
    description:
      "For land acquisition evaluations, preliminary investor pitch concepts, and municipal zoning exploration.",
    price: "From $6,500",
    priceNote: "/ project scope",
    features: [
      "Spatial programming & massing studies",
      "2D Floor plans with circulation metrics",
      "Initial site daylight & solar analysis",
      "Turnaround within 10 business days",
    ],
    button: "Initiate Feasibility Brief",
    featured: false,
  },
  {
    tier: "TIER 02 // COMPREHENSIVE",
    title: "Comprehensive BIM & Permit Set",
    description:
      "Full architectural drafting, complete municipal building permit sets, and clash-tested structural coordination.",
    price: "From $16,800",
    priceNote: "/ baseline build",
    features: [
      "Complete CAD & Revit construction document sets",
      "Municipal permit filing drawings & code reviews",
      "LOD 350 BIM multi-trade MEP coordination",
      "Clash detection report & resolution audit",
      "Direct engineer-of-record collaboration",
    ],
    button: "Commission Full Permit Set",
    featured: true,
  },
  {
    tier: "TIER 03 // TURNKEY PREMIER",
    title: "Turnkey Spatial & Visualization Master",
    description:
      "End-to-end luxury architectural blueprinting, LOD 400 digital fabrication twin, and cinematic visual assets.",
    price: "Custom Scope",
    priceNote: "/ retainer or project",
    features: [
      "Full LOD 400 fabrication-grade BIM twins",
      "Raytraced 8K stills & twilight drone cinematic animation",
      "Real-time WebGL interactive 3D virtual showroom",
      "On-site digital twin contractor synchronization",
    ],
    button: "Schedule Studio Briefing",
    featured: false,
  },
];

/* =========================================================
   VIEWPORT
========================================================= */

function useInView() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-5% 0px -5% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* =========================================================
   PLAN CARD
========================================================= */

function PlanCard({
  plan,
  index,
  visible,
}: {
  plan: (typeof plans)[number];
  index: number;
  visible: boolean;
}) {
  return (
    <article
      style={
        {
          transitionDelay: `${index * 120}ms`,
        } as CSSProperties
      }
      className={`
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-visible

        rounded-[18px]
        border

        ${
          plan.featured
            ? "border-[#00ff66]/20 bg-[#171e19]"
            : "border-white/[0.055] bg-[#121714]"
        }

        p-5

        shadow-[0_24px_70px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.025)]

        transition-all
        duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:-translate-y-1.5
        hover:border-[#00ff66]/22
        hover:shadow-[0_36px_95px_rgba(0,0,0,0.4),0_0_45px_rgba(0,255,102,0.055),inset_0_1px_0_rgba(255,255,255,0.04)]

        sm:p-6

        lg:p-5

        xl:p-6

        2xl:p-7

        ${
          plan.featured
            ? "lg:scale-[1.015] lg:hover:scale-[1.025]"
            : ""
        }

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }

        motion-reduce:transform-none
        motion-reduce:transition-none
      `}
    >
      {/* =====================================================
          FEATURED BADGE
      ===================================================== */}

      {plan.featured && (
        <div
          className="
            absolute
            left-1/2
            top-0
            z-30

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            rounded-full

            border
            border-[#54ff96]/50

            bg-gradient-to-r
            from-[#00e85c]
            via-[#00ff66]
            to-[#20f77a]

            px-4
            py-1.5

            text-[7px]
            font-black
            uppercase
            tracking-[0.11em]

            text-[#03200d]

            shadow-[0_0_25px_rgba(0,255,102,0.35)]

            sm:px-5
            sm:text-[7.5px]

            xl:text-[8px]
          "
        >
          Most Recommended for Builders
        </div>
      )}

      {/* =====================================================
          TOP HOVER LINE
      ===================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-0
          z-20

          h-[2px]
          w-0

          bg-gradient-to-r
          from-transparent
          via-[#00ff66]
          to-transparent

          shadow-[0_0_14px_rgba(0,255,102,0.6)]

          transition-all
          duration-700

          group-hover:w-[84%]
        "
      />

      {/* =====================================================
          HOVER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -right-20
          -top-20

          h-52
          w-52

          rounded-full

          bg-[#00ff66]/0

          blur-[75px]

          transition-all
          duration-700

          group-hover:bg-[#00ff66]/[0.065]
        "
      />

      {/* =====================================================
          TIER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          text-[7px]
          font-black
          uppercase
          leading-[1.4]
          tracking-[0.17em]

          text-[#00ff66]

          sm:text-[7.5px]

          xl:text-[8px]
        "
      >
        {plan.tier}
      </div>

      {/* =====================================================
          TITLE
      ===================================================== */}

      <h3
        className="
          relative
          z-10

          mt-2.5

          text-[18px]
          font-bold
          leading-[1.22]
          tracking-[-0.035em]

          text-[#effff2]

          transition-colors
          duration-500

          group-hover:text-white

          min-[420px]:text-[19px]

          sm:text-[20px]

          md:text-[21px]

          lg:text-[18px]

          xl:text-[20px]

          2xl:text-[22px]
        "
      >
        {plan.title}
      </h3>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          relative
          z-10

          mt-2.5

          text-[11.5px]
          font-normal
          leading-[1.65]

          text-[#cfe1d3]/72

          transition-colors
          duration-500

          group-hover:text-[#e4eee6]/85

          min-[420px]:text-[12px]

          sm:text-[12.5px]

          xl:text-[13px]
        "
      >
        {plan.description}
      </p>

      {/* =====================================================
          PRICE
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mt-5

          flex
          flex-wrap
          items-end
          gap-x-1.5
          gap-y-1
        "
      >
        <span
          className="
            text-[28px]
            font-bold
            leading-none
            tracking-[-0.055em]

            text-[#f1fff3]

            min-[420px]:text-[30px]

            sm:text-[32px]

            lg:text-[27px]

            xl:text-[30px]

            2xl:text-[34px]
          "
        >
          {plan.price}
        </span>

        <span
          className="
            pb-[2px]

            text-[8px]
            font-medium
            leading-[1.4]

            text-[#c6ffd4]/70

            sm:text-[8.5px]

            xl:text-[9px]
          "
        >
          {plan.priceNote}
        </span>
      </div>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mt-5

          flex
          flex-col
          gap-3
        "
      >
        {plan.features.map((feature, featureIndex) => (
          <div
            key={feature}
            style={
              {
                transitionDelay: `${featureIndex * 45}ms`,
              } as CSSProperties
            }
            className="
              group/feature

              flex
              items-start
              gap-2.5

              text-[11px]
              font-normal
              leading-[1.45]

              text-[#d9e6dc]/82

              transition-all
              duration-300

              hover:translate-x-0.5
              hover:text-white

              sm:text-[11.5px]

              xl:text-[12px]
            "
          >
            <CheckCircle2
              className="
                mt-[1px]

                h-3.5
                w-3.5
                shrink-0

                text-[#00ff66]

                transition-all
                duration-300

                group-hover/feature:scale-110
                group-hover/feature:drop-shadow-[0_0_7px_rgba(0,255,102,0.7)]
              "
              strokeWidth={2.5}
            />

            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="relative z-10 mt-auto pt-7">
        <button
          type="button"
          className={`
            group/button
            relative

            flex
            min-h-[48px]
            w-full

            cursor-pointer
            touch-manipulation
            select-none

            items-center
            justify-center

            gap-2

            overflow-hidden

            rounded-[10px]

            px-4
            py-3

            text-center
            text-[12px]
            font-bold
            leading-[1.2]

            transition-all
            duration-500

            active:scale-[0.985]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#00ff66]/60
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#121714]

            sm:text-[12.5px]

            xl:text-[13px]

            ${
              plan.featured
                ? `
                  border border-[#00ff66]/60
                  bg-gradient-to-r
                  from-[#00e85c]
                  via-[#00ff66]
                  to-[#13ee6c]
                  text-[#04200d]

                  shadow-[0_0_25px_rgba(0,255,102,0.2)]

                  hover:-translate-y-0.5
                  hover:shadow-[0_0_38px_rgba(0,255,102,0.38)]
                `
                : `
                  border border-white/[0.035]
                  bg-white/[0.025]
                  text-[#f0fff3]

                  hover:-translate-y-0.5
                  hover:border-[#00ff66]/20
                  hover:bg-[#00ff66]/[0.045]
                  hover:text-[#7dffad]
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
              -left-[35%]

              w-[25%]

              skew-x-[-20deg]

              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent

              opacity-0

              transition-all
              duration-700

              group-hover/button:left-[120%]
              group-hover/button:opacity-100
            "
          />

          <span className="relative z-10">
            {plan.button}
          </span>

          <ArrowUpRight
            className="
              relative
              z-10

              h-3.5
              w-3.5

              shrink-0

              opacity-0

              transition-all
              duration-300

              group-hover/button:-translate-y-0.5
              group-hover/button:translate-x-0.5
              group-hover/button:opacity-100
            "
          />
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PrecisionCommissionModels() {
  const { ref, visible } = useInView();

  return (
    <section
      ref={ref}
      className={`
        ${geist.className}

        relative
        isolate

        w-full
        overflow-hidden

        bg-[#090e0b]

        py-14
        text-white

        sm:py-16
        md:py-20
        lg:py-24
        xl:py-28
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-50

          bg-[#090e0b]
        "
      />

      {/* Dot grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-40

          opacity-[0.11]

          [background-image:radial-gradient(rgba(123,255,168,0.5)_0.7px,transparent_0.7px)]
          [background-size:27px_27px]
        "
      />

      {/* Top ambient */}

      <div
        className="
          pointer-events-none
          absolute

          -top-[420px]
          left-1/2
          -z-30

          h-[800px]
          w-[900px]

          -translate-x-1/2

          rounded-full

          bg-[#00ff66]/[0.035]

          blur-[190px]
        "
      />

      {/* Left glow */}

      <div
        className="
          pointer-events-none
          absolute

          -left-[380px]
          top-[25%]
          -z-30

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#00ff66]/[0.025]

          blur-[180px]
        "
      />

      {/* Right glow */}

      <div
        className="
          pointer-events-none
          absolute

          -right-[380px]
          top-[25%]
          -z-30

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#00ff66]/[0.025]

          blur-[180px]
        "
      />

      {/* bottom */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          -z-20

          h-[300px]

          bg-gradient-to-t
          from-black/25
          to-transparent
        "
      />

      {/* =====================================================
          WRAPPER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]

          px-4

          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-8
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className={`
            mx-auto
            max-w-[850px]

            text-center

            transition-all
            duration-1000
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }

            motion-reduce:transform-none
            motion-reduce:transition-none
          `}
        >
          {/* eyebrow */}

          <div
            className="
              mb-3

              flex
              items-center
              justify-center
              gap-2

              text-[7px]
              font-black
              uppercase
              tracking-[0.17em]

              text-[#00ff66]

              sm:text-[8px]

              xl:text-[8.5px]
            "
          >
            <Sparkles
              className="
                h-3
                w-3

                text-[#00ff66]

                drop-shadow-[0_0_7px_rgba(0,255,102,0.6)]
              "
            />

            Engagement Frameworks
          </div>

          {/* heading */}

          <h2
            className="
              mx-auto
              max-w-[760px]

              text-[36px]
              font-bold
              leading-[1.03]
              tracking-[-0.052em]

              text-[#f1fff3]

              min-[390px]:text-[39px]

              min-[460px]:text-[43px]

              sm:text-[48px]

              md:text-[52px]

              lg:text-[56px]

              xl:text-[60px]

              2xl:text-[64px]
            "
          >
            Precision Commission

            <span className="block">
              Models
            </span>
          </h2>

          {/* description */}

          <p
            className="
              mx-auto
              mt-4

              max-w-[650px]

              text-[12px]
              font-normal
              leading-[1.65]

              text-[#c8ffd5]/75

              min-[420px]:text-[12.5px]

              sm:text-[13.5px]

              lg:text-[14px]

              xl:text-[14.5px]
            "
          >
            Transparent, rigorous architectural workflows tailored
            to developer scale, design firms, and visionary private
            clients.
          </p>
        </div>

        {/* ===================================================
            CARDS
        =================================================== */}

        <div
          className="
            mt-11

            grid
            grid-cols-1

            gap-5

            sm:mt-12

            md:grid-cols-2

            lg:mt-14
            lg:grid-cols-3
            lg:gap-4

            xl:gap-5

            2xl:gap-6
          "
        >
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.title}
              plan={plan}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}