"use client";

import Link from "next/link";
import { Geist } from "next/font/google";
import {
  ChevronDown,
  Mail,
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
   FAQ DATA
========================================================= */

const faqs = [
  {
    question:
      "How do you coordinate with local licensed engineers of record (EOR) and general contractors?",
    answer:
      "We structure the architectural and BIM package so it can be reviewed efficiently by the locally licensed Engineer of Record and contractor team. Our workflow includes coordinated architectural backgrounds, structural and MEP interfaces, drawing references, revision tracking, clash-review documentation, and clearly organized model handoff files. Final stamping, jurisdictional approval, and professional certification remain with the appropriately licensed local professionals.",
  },
  {
    question:
      "What level of development (LOD) do you provide for BIM models?",
    answer:
      "We can develop BIM models from early concept-level geometry through detailed construction coordination. Typical deliverables range from LOD 100–200 for feasibility and design development, LOD 300–350 for coordinated documentation, and up to LOD 400 where fabrication-level geometry, system coordination, and project-specific detailing are required.",
  },
  {
    question:
      "Can your 3D architectural models be directly integrated into web or interactive showroom apps?",
    answer:
      "Yes. Models can be optimized for interactive presentation workflows including WebGL, Three.js, Unreal Engine, Unity, real-time walkthroughs, digital showrooms, and browser-based visualization. Geometry, materials, textures, naming conventions, polygon density, and export formats can be prepared according to the target platform.",
  },
  {
    question:
      "What is your standard turnaround for municipal permit drafting sets?",
    answer:
      "Turnaround depends on project size, existing documentation, jurisdictional requirements, and the level of engineering coordination required. Smaller permit packages may be prepared within approximately 7–10 business days, while larger residential or commercial documentation sets typically require a longer coordinated schedule.",
  },
  {
    question:
      "Which architectural and BIM file formats can you deliver?",
    answer:
      "Common deliverables include RVT, DWG, DXF, IFC, PDF, SKP, FBX, OBJ, DAE, and other coordination or visualization formats when required. The final package can also be organized into separate architectural, structural, MEP, presentation, and contractor-reference deliverables.",
  },
  {
    question:
      "Can you revise the BIM model after contractor or consultant feedback?",
    answer:
      "Yes. Consultant markups, contractor RFIs, coordination comments, design changes, and client revisions can be incorporated into the model and drawing set. Revisions can be tracked systematically so the latest issue remains clear across drawings, schedules, and coordinated BIM files.",
  },
];

/* =========================================================
   VIEWPORT HOOK
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
          threshold: 0.08,
          rootMargin:
            "-3% 0px -3% 0px",
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
   FAQ ITEM
========================================================= */

function FAQItem({
  faq,
  index,
  open,
  onToggle,
  visible,
}: {
  faq: (typeof faqs)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
  visible: boolean;
}) {
  return (
    <div
      style={
        {
          transitionDelay: visible
            ? `${index * 70}ms`
            : "0ms",
        } as CSSProperties
      }
      className={`
        transition-all
        duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          visible
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-4 translate-y-3 opacity-0"
        }

        motion-reduce:transform-none
        motion-reduce:transition-none
      `}
    >
      <article
        className={`
          group
          relative
          overflow-hidden

          rounded-[12px]

          border

          ${
            open
              ? "border-[#00ff66]/[0.20] bg-[#171e19]"
              : "border-white/[0.045] bg-[#141916]"
          }

          shadow-[0_14px_40px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.02)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]

          hover:-translate-y-0.5

          hover:border-[#00ff66]/[0.18]

          hover:bg-[#181f1a]

          hover:shadow-[0_20px_55px_rgba(0,0,0,0.25),0_0_30px_rgba(0,255,102,0.04),inset_0_1px_0_rgba(255,255,255,0.025)]
        `}
      >
        {/* TOP ACTIVE / HOVER LINE */}

        <span
          className={`
            pointer-events-none

            absolute
            left-0
            top-0
            z-20

            h-[2px]

            bg-gradient-to-r
            from-[#00ff66]
            via-[#64ffa0]
            to-transparent

            shadow-[0_0_14px_rgba(0,255,102,0.5)]

            transition-all
            duration-500

            ${
              open
                ? "w-full opacity-100"
                : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
            }
          `}
        />

        {/* AMBIENT HOVER GLOW */}

        <div
          className="
            pointer-events-none

            absolute

            -right-20
            -top-20

            h-44
            w-44

            rounded-full

            bg-[#00ff66]/0

            blur-[65px]

            transition-all
            duration-700

            group-hover:bg-[#00ff66]/[0.05]
          "
        />

        {/* ===================================================
            QUESTION BUTTON
            PADDING REDUCED
        =================================================== */}

        <button
          id={`faq-button-${index}`}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          className="
            relative
            z-10

            flex

            min-h-[64px]
            w-full

            cursor-pointer
            touch-manipulation
            select-none

            items-center
            justify-between

            gap-3

            px-4
            py-3.5

            text-left

            outline-none

            transition-colors
            duration-300

            active:bg-white/[0.015]

            focus-visible:ring-2
            focus-visible:ring-inset
            focus-visible:ring-[#00ff66]/60

            sm:min-h-[68px]
            sm:px-5
            sm:py-4

            lg:min-h-[70px]
            lg:px-5
            lg:py-4

            xl:min-h-[72px]
            xl:px-6
            xl:py-[17px]
          "
        >
          {/* QUESTION */}

          <span
            className="
              min-w-0
              flex-1

              pr-1

              text-[16px]
              font-bold

              leading-[1.35]

              tracking-[-0.025em]

              text-[#effff2]

              transition-colors
              duration-300

              group-hover:text-white

              min-[420px]:text-[16.5px]

              sm:text-[17.5px]

              md:text-[18px]

              lg:text-[17.5px]

              xl:text-[19px]

              2xl:text-[20px]
            "
          >
            {faq.question}
          </span>

          {/* CHEVRON */}

          <span
            className={`
              flex

              h-8
              w-8

              shrink-0

              items-center
              justify-center

              rounded-full

              border

              transition-all
              duration-300

              sm:h-9
              sm:w-9

              ${
                open
                  ? `
                    rotate-180

                    border-[#00ff66]/25

                    bg-[#00ff66]/[0.08]

                    text-[#00ff66]

                    shadow-[0_0_18px_rgba(0,255,102,0.06)]
                  `
                  : `
                    border-transparent

                    bg-transparent

                    text-[#00ff66]

                    group-hover:border-[#00ff66]/15

                    group-hover:bg-[#00ff66]/[0.055]
                  `
              }
            `}
          >
            <ChevronDown
              className="
                h-4
                w-4

                sm:h-[18px]
                sm:w-[18px]
              "
              strokeWidth={2.3}
            />
          </span>
        </button>

        {/* ===================================================
            ANSWER
        =================================================== */}

        <div
          id={`faq-panel-${index}`}
          role="region"
          aria-labelledby={`faq-button-${index}`}
          aria-hidden={!open}
          className={`
            grid

            transition-[grid-template-rows,opacity]

            duration-500

            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              open
                ? "grid-rows-[1fr] opacity-100"
                : "pointer-events-none grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div
            className="
              min-h-0
              overflow-hidden
            "
          >
            {/* ANSWER PADDING REDUCED */}

            <div
              className="
                px-4
                pb-4

                sm:px-5
                sm:pb-5

                lg:px-5
                lg:pb-5

                xl:px-6
                xl:pb-5
              "
            >
              {/* Divider */}

              <div
                className="
                  mb-3

                  h-px
                  w-full

                  bg-gradient-to-r

                  from-[#00ff66]/20

                  via-white/[0.045]

                  to-transparent
                "
              />

              <p
                className="
                  max-w-[980px]

                  text-[14px]
                  font-normal

                  leading-[1.68]

                  tracking-[-0.004em]

                  text-[#cddbd0]/78

                  min-[420px]:text-[14.5px]

                  sm:text-[15px]

                  md:text-[15.5px]

                  lg:text-[15px]

                  xl:text-[16px]

                  2xl:text-[17px]
                "
              >
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechnicalFAQ() {
  const {
    ref,
    visible,
  } = useInView();

  const [
    activeIndex,
    setActiveIndex,
  ] =
    useState<number | null>(
      null
    );

  const toggleFAQ = (
    index: number
  ) => {
    setActiveIndex(
      (current) =>
        current === index
          ? null
          : index
    );
  };

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

        text-white

        py-8

        sm:py-10

        md:py-12

        lg:py-14

        xl:py-16
      `}
    >
      {/* BASE BACKGROUND */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-50

          bg-[#090e0b]
        "
      />

      {/* DOT GRID */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-40

          opacity-[0.105]

          [background-image:radial-gradient(rgba(123,255,168,0.5)_0.7px,transparent_0.7px)]

          [background-size:27px_27px]
        "
      />

      {/* LEFT GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          -left-[350px]
          -top-[260px]

          -z-30

          h-[720px]
          w-[720px]

          rounded-full

          bg-[#00ff66]/[0.032]

          blur-[180px]
        "
      />

      {/* RIGHT GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          -right-[400px]

          top-[10%]

          -z-30

          h-[780px]
          w-[780px]

          rounded-full

          bg-[#00ff66]/[0.022]

          blur-[200px]
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          left-[52%]
          top-[45%]

          -z-30

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#00ff66]/[0.012]

          blur-[150px]
        "
      />

      {/* BOTTOM FADE */}

      <div
        className="
          pointer-events-none

          absolute

          inset-x-0
          bottom-0

          -z-20

          h-[180px]

          bg-gradient-to-t

          from-black/25

          to-transparent
        "
      />

      {/* =====================================================
          CONTAINER
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
            MAIN GRID
            GAP REDUCED
        =================================================== */}

        <div
          className="
            grid

            items-start

            gap-6

            sm:gap-7

            lg:grid-cols-[minmax(300px,0.34fr)_minmax(0,0.66fr)]

            lg:gap-8

            xl:grid-cols-[minmax(340px,0.32fr)_minmax(0,0.68fr)]

            xl:gap-10

            2xl:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className={`
              min-w-0

              transition-all

              duration-1000

              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }

              motion-reduce:transform-none

              motion-reduce:transition-none
            `}
          >
            {/* EYEBROW */}

            <div
              className="
                mb-2.5

                flex

                items-center

                gap-2.5

                text-[10px]

                font-black

                uppercase

                leading-[1.4]

                tracking-[0.16em]

                text-[#00ff66]

                min-[420px]:text-[10.5px]

                sm:text-[11px]

                lg:text-[11.5px]

                xl:text-[12px]
              "
            >
              <Sparkles
                className="
                  h-4
                  w-4

                  shrink-0

                  text-[#00ff66]

                  drop-shadow-[0_0_7px_rgba(0,255,102,0.55)]
                "
              />

              Knowledge Base
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[560px]

                text-[40px]

                font-bold

                leading-[1.04]

                tracking-[-0.05em]

                text-[#f1fff3]

                min-[390px]:text-[43px]

                min-[460px]:text-[47px]

                sm:text-[52px]

                md:text-[56px]

                lg:max-w-[430px]

                lg:text-[46px]

                xl:max-w-[480px]

                xl:text-[52px]

                2xl:text-[58px]
              "
            >
              Technical &amp; Statutory

              <span className="block">
                FAQ
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-3.5

                max-w-[450px]

                text-[14px]

                font-normal

                leading-[1.7]

                tracking-[-0.004em]

                text-[#c5ffd3]/78

                min-[420px]:text-[14.5px]

                sm:text-[15px]

                md:text-[15.5px]

                lg:max-w-[390px]

                lg:text-[15px]

                xl:max-w-[430px]

                xl:text-[16px]

                2xl:text-[17px]
              "
            >
              Everything you need to know about our BIM
              integration protocols, licensing alignment,
              project handoffs, and technical delivery
              standards.
            </p>

            {/* CONTACT CTA */}

            <Link
              href="/contact"
              className="
                group/contact

                mt-4

                flex

                w-fit

                max-w-[420px]

                cursor-pointer

                touch-manipulation

                select-none

                items-start

                gap-2.5

                rounded-[8px]

                outline-none

                transition-all

                duration-300

                hover:translate-x-1

                active:scale-[0.985]

                focus-visible:ring-2

                focus-visible:ring-[#00ff66]/50

                focus-visible:ring-offset-4

                focus-visible:ring-offset-[#090e0b]
              "
            >
              {/* Mail Icon */}

              <span
                className="
                  flex

                  h-8
                  w-8

                  shrink-0

                  items-center

                  justify-center

                  rounded-[8px]

                  border
                  border-[#00ff66]/10

                  bg-[#00ff66]/[0.035]

                  text-[#00ff66]

                  transition-all

                  duration-300

                  group-hover/contact:border-[#00ff66]/25

                  group-hover/contact:bg-[#00ff66]/[0.075]

                  group-hover/contact:shadow-[0_0_22px_rgba(0,255,102,0.08)]

                  sm:h-9
                  sm:w-9
                "
              >
                <Mail
                  className="
                    h-4
                    w-4
                  "
                />
              </span>

              <span
                className="
                  pt-[1px]

                  text-[10px]

                  font-black

                  uppercase

                  leading-[1.5]

                  tracking-[0.13em]

                  text-[#00ff66]

                  transition-colors

                  duration-300

                  group-hover/contact:text-[#7dffad]

                  min-[420px]:text-[10.5px]

                  sm:text-[11px]

                  lg:text-[10.5px]

                  xl:text-[11.5px]

                  2xl:text-[12px]
                "
              >
                Need custom stamping specifications? Inquire
                directly
              </span>
            </Link>
          </div>

          {/* =================================================
              FAQ LIST
              GAP REDUCED
          ================================================= */}

          <div
            className="
              flex

              min-w-0

              flex-col

              gap-2

              sm:gap-2.5

              xl:gap-3
            "
          >
            {faqs.map(
              (
                faq,
                index
              ) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  open={
                    activeIndex ===
                    index
                  }
                  onToggle={() =>
                    toggleFAQ(
                      index
                    )
                  }
                  visible={
                    visible
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}