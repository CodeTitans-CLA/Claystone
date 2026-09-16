"use client";

import Image from "next/image";
import { Geist } from "next/font/google";

import {
  ArrowUpRight,
  ImageIcon,
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

const projects = [
  {
    badge: "LOD 400 // REVIT & UNREAL 5",
    category: "RESIDENTIAL",
    type: "HIGH-END PAVILION",
    title: "The Monolith Pavilion — Zurich",
    description:
      "Brutalist architectural cantilever floating over continuous reflective water basins. Designed with custom thermal broken glazing, post-tensioned board-formed concrete slabs, and concealed perimeter luminescent raceways.",
    location: "ZURICH, SWITZERLAND",
    statLeft: "Total: 8,400 Sq.Ft",
    statRight: "Clash Clearance: 100%",
    image: "/assets/case-study-zurich.png",
  },
  {
    badge: "PARAMETRIC RHINO // BIM REVIT",
    category: "INSTITUTIONAL",
    type: "RESEARCH BIOME",
    title: "Aeon Parametric Research Hub",
    description:
      "An organic double-curved glass lattice enclosing state-of-the-art biophilic laboratories. Engineered via computational Grasshopper scripts, converted directly to IFC BIM elements with zero tolerance discrepancy on site.",
    location: "KYOTO CIVIC PARK",
    statLeft: "Total: 42,000 Sq.Ft",
    statRight: "Carbon Neutral Timber",
    image: "/assets/case-study-aeon.png",
  },
];

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
          threshold: 0.1,
          rootMargin:
            "-5% 0px -5% 0px",
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
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: (typeof projects)[number];
  index: number;
  visible: boolean;
}) {
  const [
    imageFailed,
    setImageFailed,
  ] = useState(false);

  return (
    <article
      style={
        {
          transitionDelay: `${index * 130}ms`,
        } as CSSProperties
      }
      className={`
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden

        rounded-[16px]

        border
        border-white/[0.055]

        bg-[#121814]

        shadow-[0_25px_70px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.025)]

        transition-all
        duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:-translate-y-1

        hover:border-[#00ff66]/20

        hover:shadow-[0_38px_100px_rgba(0,0,0,0.42),0_0_55px_rgba(0,255,102,0.055),inset_0_1px_0_rgba(255,255,255,0.04)]

        sm:rounded-[18px]

        lg:hover:-translate-y-2

        motion-reduce:transform-none
        motion-reduce:transition-none

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
      `}
    >
      {/* =====================================================
          TOP HOVER LINE
      ===================================================== */}

      <span
        className="
          pointer-events-none

          absolute
          left-0
          top-0
          z-40

          h-[2px]
          w-0

          bg-gradient-to-r

          from-[#00ff66]
          via-[#62ffa0]
          to-transparent

          shadow-[0_0_16px_rgba(0,255,102,0.6)]

          transition-all
          duration-700

          group-hover:w-full
        "
      />

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative

          aspect-[1.22/1]

          w-full

          overflow-hidden

          bg-[#07100b]

          min-[420px]:aspect-[1.35/1]

          sm:aspect-[1.48/1]

          md:aspect-[1.62/1]

          lg:aspect-[1.5/1]

          xl:aspect-[1.62/1]

          2xl:aspect-[1.68/1]
        "
      >
        {!imageFailed ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            quality={92}
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 100vw,
              50vw
            "
            onError={() =>
              setImageFailed(true)
            }
            className="
              select-none

              object-cover
              object-center

              transition-transform

              duration-[1200ms]

              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:scale-[1.045]

              lg:group-hover:scale-[1.055]

              motion-reduce:transform-none

              motion-reduce:transition-none
            "
          />
        ) : (
          <div
            className="
              absolute
              inset-0

              flex

              items-center
              justify-center

              overflow-hidden

              bg-[#07110b]
            "
          >
            <div
              className="
                pointer-events-none

                absolute
                inset-0

                opacity-[0.16]

                [background-image:linear-gradient(rgba(0,255,102,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.18)_1px,transparent_1px)]

                [background-size:34px_34px]
              "
            />

            <div
              className="
                pointer-events-none

                absolute

                h-44
                w-44

                rounded-full

                bg-[#00ff66]/10

                blur-[90px]
              "
            />

            <div
              className="
                relative
                z-10

                flex

                h-14
                w-14

                items-center
                justify-center

                rounded-[16px]

                border
                border-[#00ff66]/15

                bg-[#00ff66]/[0.035]

                shadow-[0_0_45px_rgba(0,255,102,0.08)]

                sm:h-16
                sm:w-16

                sm:rounded-[18px]
              "
            >
              <ImageIcon
                className="
                  h-5
                  w-5

                  text-[#00ff66]/70

                  sm:h-6
                  sm:w-6
                "
              />
            </div>
          </div>
        )}

        {/* Cinematic Overlay */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-t

            from-black/60
            via-black/[0.02]
            to-black/10
          "
        />

        {/* Green Tint */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-r

            from-[#00ff66]/[0.03]
            via-transparent
            to-transparent
          "
        />

        {/* Vignette */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            shadow-[inset_0_0_90px_rgba(0,0,0,0.34)]
          "
        />

        {/* =====================================================
            BADGE
        ===================================================== */}

        <div
          className="
            absolute

            left-3
            top-3
            z-30

            max-w-[calc(100%_-_24px)]

            rounded-full

            border
            border-[#00ff66]/20

            bg-[#03120a]/80

            px-3
            py-2

            text-[8.5px]

            font-black
            uppercase

            leading-none

            tracking-[0.11em]

            text-[#00ff66]

            shadow-[0_0_24px_rgba(0,255,102,0.08)]

            backdrop-blur-xl

            transition-all
            duration-500

            group-hover:border-[#00ff66]/35

            group-hover:bg-[#03170c]/90

            min-[420px]:text-[9px]

            sm:left-4
            sm:top-4

            sm:px-3.5
            sm:py-2

            sm:text-[9.5px]

            lg:text-[10px]

            xl:text-[10.5px]

            2xl:text-[11px]
          "
        >
          {project.badge}
        </div>

        {/* =====================================================
            LOCATION
        ===================================================== */}

        <div
          className="
            absolute

            bottom-3
            right-3

            z-30

            rounded-[5px]

            border
            border-white/[0.06]

            bg-black/70

            px-2.5
            py-1.5

            text-[8px]

            font-black
            uppercase

            leading-none

            tracking-[0.1em]

            text-white/80

            backdrop-blur-lg

            min-[420px]:text-[8.5px]

            sm:bottom-4
            sm:right-4

            sm:px-3

            sm:text-[9px]

            lg:text-[9.5px]

            xl:text-[10px]
          "
        >
          {project.location}
        </div>

        {/* =====================================================
            SCAN
        ===================================================== */}

        <span
          className="
            pointer-events-none

            absolute

            left-0
            top-0
            z-20

            h-px
            w-full

            -translate-y-full

            bg-gradient-to-r

            from-transparent
            via-[#00ff66]
            to-transparent

            opacity-0

            shadow-[0_0_20px_rgba(0,255,102,0.8)]

            transition-all

            duration-[1300ms]

            ease-out

            group-hover:translate-y-[320px]

            group-hover:opacity-40

            motion-reduce:hidden
          "
        />

        <div
          className="
            pointer-events-none

            absolute

            inset-x-[12%]

            bottom-0

            h-px

            bg-gradient-to-r

            from-transparent
            via-[#00ff66]/35
            to-transparent

            opacity-0

            transition-opacity

            duration-700

            group-hover:opacity-100
          "
        />
      </div>

      {/* =====================================================
          CONTENT
          PADDING REDUCED
      ===================================================== */}

      <div
        className="
          relative

          flex
          flex-1
          flex-col

          p-4

          sm:p-5

          lg:p-5

          xl:p-5

          2xl:p-6
        "
      >
        {/* Ambient Glow */}

        <div
          className="
            pointer-events-none

            absolute

            -right-20
            -top-20

            h-48
            w-48

            rounded-full

            bg-[#00ff66]/0

            blur-[65px]

            transition-all
            duration-700

            group-hover:bg-[#00ff66]/[0.055]
          "
        />

        {/* CATEGORY */}

        <div
          className="
            relative
            z-10

            flex
            flex-wrap
            items-center

            gap-1.5

            text-[9px]

            font-black
            uppercase

            leading-[1.45]

            tracking-[0.13em]

            text-[#00ff66]

            min-[420px]:text-[9.5px]

            sm:gap-2

            sm:text-[10px]

            lg:text-[10.5px]

            xl:text-[11px]

            2xl:text-[11.5px]
          "
        >
          <span>
            {project.category}
          </span>

          <span
            className="
              h-1.5
              w-1.5

              shrink-0

              rounded-full

              bg-[#00ff66]

              shadow-[0_0_8px_rgba(0,255,102,0.65)]
            "
          />

          <span>
            {project.type}
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            relative
            z-10

            mt-2

            text-[22px]

            font-bold

            leading-[1.2]

            tracking-[-0.04em]

            text-[#effff2]

            transition-colors

            duration-500

            group-hover:text-white

            min-[390px]:text-[23px]

            min-[480px]:text-[24px]

            sm:text-[26px]

            md:text-[28px]

            lg:text-[25px]

            xl:text-[28px]

            2xl:text-[30px]
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            relative
            z-10

            mt-2.5

            max-w-[760px]

            text-[14px]

            font-normal

            leading-[1.65]

            tracking-[-0.008em]

            text-[#d2dfd5]/72

            transition-colors

            duration-500

            group-hover:text-[#e4eee6]/88

            min-[420px]:text-[14.5px]

            sm:text-[15px]

            md:text-[15.5px]

            lg:text-[14.5px]

            xl:text-[15.5px]

            2xl:text-[16px]
          "
        >
          {project.description}
        </p>

        {/* =====================================================
            BOTTOM AREA
            GAP REDUCED
        ===================================================== */}

        <div
          className="
            relative
            z-10

            mt-auto

            flex
            flex-col

            gap-2.5

            pt-4

            sm:pt-4

            md:flex-row
            md:items-end
            md:justify-between

            lg:flex-col
            lg:items-start

            xl:flex-row
            xl:items-end
            xl:justify-between
          "
        >
          {/* STATS */}

          <div
            className="
              flex
              flex-wrap
              items-center

              gap-x-2
              gap-y-1

              text-[9px]

              font-black

              leading-[1.5]

              tracking-[0.095em]

              text-[#caffd6]/78

              min-[420px]:text-[9.5px]

              sm:text-[10px]

              lg:text-[10px]

              xl:text-[10.5px]

              2xl:text-[11px]
            "
          >
            <span>
              {project.statLeft}
            </span>

            <span className="text-[#00ff66]/60">
              •
            </span>

            <span>
              {project.statRight}
            </span>
          </div>

          {/* BUTTON */}

          <button
            type="button"
            aria-label={`View blueprint for ${project.title}`}
            className="
              group/button

              relative

              flex

              min-h-[40px]

              w-fit

              shrink-0

              cursor-pointer

              touch-manipulation

              select-none

              items-center

              justify-center

              gap-1.5

              overflow-hidden

              rounded-md

              px-1

              text-[13px]

              font-bold

              tracking-[-0.02em]

              text-[#00ff66]

              transition-all

              duration-300

              hover:text-[#7dffad]

              active:scale-[0.97]

              focus-visible:outline-none

              focus-visible:ring-2

              focus-visible:ring-[#00ff66]/60

              focus-visible:ring-offset-2

              focus-visible:ring-offset-[#121814]

              sm:text-[13.5px]

              lg:text-[14px]

              xl:text-[14.5px]

              2xl:text-[15px]
            "
          >
            <span>
              View Blueprint
            </span>

            <ArrowUpRight
              className="
                h-4
                w-4

                shrink-0

                transition-transform

                duration-300

                group-hover/button:-translate-y-0.5

                group-hover/button:translate-x-0.5

                lg:group-hover/button:-translate-y-1

                lg:group-hover/button:translate-x-1
              "
            />

            <span
              className="
                pointer-events-none

                absolute

                bottom-[2px]
                left-1

                h-px
                w-0

                bg-[#00ff66]

                transition-all

                duration-300

                group-hover/button:w-[calc(100%_-_8px)]
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FeaturedArchitectureCaseStudies() {
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

        bg-[#090e0b]

        py-8

        text-white

        sm:py-10

        md:py-12

        lg:py-14

        xl:py-16
      `}
    >
      {/* BASE */}

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

          opacity-[0.11]

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
          -top-[300px]

          -z-30

          h-[800px]
          w-[800px]

          rounded-full

          bg-[#00ff66]/[0.04]

          blur-[180px]
        "
      />

      {/* RIGHT GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          -right-[350px]

          top-[20%]

          -z-30

          h-[750px]
          w-[750px]

          rounded-full

          bg-[#00ff66]/[0.03]

          blur-[190px]
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-[42%]

          -z-30

          h-[450px]
          w-[450px]

          -translate-x-1/2

          rounded-full

          bg-[#00ff66]/[0.015]

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

          h-[200px]

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
            HEADER
            GAP REDUCED
        =================================================== */}

        <div
          className={`
            grid

            gap-4

            transition-all

            duration-1000

            ease-[cubic-bezier(0.16,1,0.3,1)]

            md:grid-cols-[1.2fr_0.8fr]

            md:items-end

            md:gap-6

            lg:grid-cols-[1.28fr_0.72fr]

            lg:gap-8

            motion-reduce:transform-none

            motion-reduce:transition-none

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }
          `}
        >
          {/* LEFT */}

          <div className="min-w-0">
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

                tracking-[0.15em]

                text-[#00ff66]

                min-[420px]:text-[10.5px]

                sm:mb-3

                sm:text-[11px]

                lg:text-[11.5px]

                xl:text-[12px]

                2xl:text-[12.5px]
              "
            >
              <Sparkles
                className="
                  h-4
                  w-4

                  shrink-0

                  text-[#00ff66]

                  drop-shadow-[0_0_7px_rgba(0,255,102,0.5)]
                "
              />

              Portfolio // Blueprints in Production
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[900px]

                break-words

                pb-1

                text-[40px]

                font-bold

                leading-[1.04]

                tracking-[-0.05em]

                text-[#f1fff3]

                min-[390px]:text-[43px]

                min-[460px]:text-[47px]

                sm:text-[54px]

                md:text-[58px]

                lg:text-[64px]

                xl:text-[70px]

                2xl:text-[73px]
              "
            >
              Featured Architecture Case

              <span className="block">
                Studies
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}

          <div
            className="
              min-w-0

              md:flex

              md:justify-end
            "
          >
            <p
              className="
                max-w-[470px]

                text-[14px]

                font-normal

                leading-[1.7]

                tracking-[-0.008em]

                text-[#c5ffd3]/78

                min-[420px]:text-[14.5px]

                sm:text-[15.5px]

                lg:text-[16px]

                xl:text-[16.5px]

                2xl:text-[17px]
              "
            >
              A showcase of computational spatial precision
              translated into executed landmarks and virtual
              masterworks.
            </p>
          </div>
        </div>

        {/* ===================================================
            PROJECT GRID
            TOP/GAP REDUCED
        =================================================== */}

        <div
          className="
            mt-6

            grid
            grid-cols-1

            gap-3

            sm:mt-7

            md:gap-4

            lg:mt-8

            lg:grid-cols-2

            xl:mt-9
          "
        >
          {projects.map(
            (
              project,
              index
            ) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                visible={visible}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}