"use client";

import Image from "next/image";
import Link from "next/link";
import { Geist } from "next/font/google";
import {
  Activity,
  ArrowRight,
  Box,
  CalendarDays,
  CheckCircle2,
  Download,
  Layers3,
  MoveUpRight,
  Network,
  Ruler,
  Sparkles,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   DATA
========================================================= */

const badges = [
  {
    icon: Box,
    label: "BIM / BUILD / VISUALIZE",
  },
  {
    icon: CheckCircle2,
    label: "REVIT & ARCHICAD READY",
  },
  {
    icon: Ruler,
    label: "MILLIMETER TOLERANCE",
  },
];

const stats = [
  {
    end: 350,
    prefix: "",
    suffix: "k+",
    label: "SQ.FT DESIGNED",
    accent: false,
  },
  {
    end: 400,
    prefix: "LOD",
    suffix: "",
    label: "BIM PRECISION",
    accent: true,
  },
  {
    end: 100,
    prefix: "",
    suffix: "%",
    label: "PERMIT COMPLIANCE",
    accent: false,
  },
  {
    end: 48,
    prefix: "",
    suffix: "hr",
    label: "FEASIBILITY AUDIT",
    accent: true,
  },
];

/* =========================================================
   VIEWPORT COUNTER
========================================================= */

function ViewportCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const stopAnimation = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const startAnimation = () => {
      stopAnimation();
      setValue(0);

      let startTime: number | null = null;

      const animate = (time: number) => {
        if (startTime === null) {
          startTime = time;
        }

        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        /*
         * Smooth premium ease-out.
         * Fast at beginning, soft finish.
         */
        const eased = 1 - Math.pow(1 - progress, 4);

        setValue(Math.round(end * eased));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setValue(end);
          frameRef.current = null;
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();

          // Reset immediately when outside viewport
          setValue(0);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* =========================================================
   IMAGE / FALLBACK
========================================================= */

function BIMVisual({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#04100b]">
        {/* Background */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_42%,rgba(0,255,102,0.12),transparent_38%)]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.16]
            [background-image:linear-gradient(rgba(0,255,102,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.18)_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />

        {/* Center object */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
              architecture-fallback-core
              relative flex
              h-40 w-40
              items-center justify-center
              rounded-[34px]
              border border-[#00ff66]/20
              bg-[#00ff66]/[0.025]
              shadow-[0_0_70px_rgba(0,255,102,0.08)]
              sm:h-52 sm:w-52
            "
          >
            <div
              className="
                absolute inset-4
                rounded-[27px]
                border border-[#00ff66]/10
              "
            />

            <Layers3
              className="
                h-16 w-16
                text-[#00ff66]/65
                drop-shadow-[0_0_20px_rgba(0,255,102,0.22)]
                sm:h-20 sm:w-20
              "
            />
          </div>
        </div>

        <div
          className="
            absolute bottom-[11%]
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-center
          "
        >
          <p
            className="
                            text-[8px]
              font-black
              uppercase
              tracking-[0.2em]
              text-[#00ff66]/70
              sm:text-[9px]
            "
          >
            BIM Visualization System
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt="Architectural BIM visualization"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      onError={() => setFailed(true)}
      className="
        object-cover object-center
        transition-transform
        duration-[1800ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
        group-hover:scale-[1.035]
      "
    />
  );
}

/* =========================================================
   SMALL DATA BADGE
========================================================= */

function DataBadge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
        rounded-md
        border border-white/[0.08]
        bg-black/45
        px-2.5 py-1.5
                text-[7px]
        font-bold
        uppercase
        tracking-[0.11em]
        text-white/65
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
        backdrop-blur-xl
      "
    >
      {children}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ArchitectureHero() {
  return (
    <section
      className={`${geist.className}
        relative
        isolate
        min-h-[100svh]
        overflow-hidden
        bg-[#05100b]
        text-white
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#05100b]" />

      {/* Left ambient light */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[320px]
          -top-[350px]
          -z-40
          h-[760px]
          w-[760px]
          rounded-full
          bg-[#00ff66]/[0.075]
          blur-[175px]
        "
      />

      {/* Right ambient light */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[300px]
          top-[-100px]
          -z-40
          h-[900px]
          w-[900px]
          rounded-full
          bg-[#00ff66]/[0.06]
          blur-[210px]
        "
      />

      {/* Bottom glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-500px]
          left-[25%]
          -z-40
          h-[800px]
          w-[800px]
          rounded-full
          bg-emerald-300/[0.035]
          blur-[180px]
        "
      />

      {/* Dotted background */}
      <div
        className="
          architecture-grid
          pointer-events-none
          absolute inset-0
          -z-30
          opacity-[0.105]
          [background-image:radial-gradient(rgba(179,255,206,0.55)_1px,transparent_1px)]
          [background-size:26px_26px]
        "
      />

      {/* Subtle horizontal line */}
      <div
        className="
          pointer-events-none
          absolute left-0 top-[42%]
          -z-20
          h-px w-full
          bg-gradient-to-r
          from-transparent
          via-[#00ff66]/[0.06]
          to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[300px]
          bg-gradient-to-t
          from-black/25
          to-transparent
        "
      />

      {/* =====================================================
          MAIN WRAPPER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]
          px-4
          py-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-8
        "
      >
        {/* ===================================================
            TOP BREADCRUMB / STATUS BAR
        =================================================== */}

        <div
          className="
            hero-reveal
            flex
            flex-col
            gap-3
            rounded-[18px]
            border border-white/[0.05]
            bg-white/[0.016]
            px-4 py-3
            shadow-[0_12px_40px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.025)]
            backdrop-blur-2xl
            sm:flex-row
            sm:items-center
            sm:justify-between
            md:px-5
          "
        >
          {/* Breadcrumb */}
          <div
            className="
              flex flex-wrap
              items-center
              gap-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.13em]
              text-white/35
              sm:text-[10px]
            "
          >
            <Link
              href="/"
              className="
                transition-colors
                duration-300
                hover:text-[#00ff66]
              "
            >
              Home
            </Link>

            <span className="text-white/15">/</span>

            <Link
              href="/services"
              className="
                transition-colors
                duration-300
                hover:text-[#00ff66]
              "
            >
              Services
            </Link>

            <span className="text-white/15">/</span>

            <span className="text-white/65">
              Architecture & Engineering
            </span>
          </div>

          {/* Active */}
          <div
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border border-[#00ff66]/15
              bg-[#00ff66]/[0.045]
              px-3 py-1.5
              text-[8px]
              font-black
              uppercase
              tracking-[0.14em]
              text-[#00ff66]
              shadow-[0_0_30px_rgba(0,255,102,0.06)]
              sm:text-[9px]
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full w-full
                  animate-ping
                  rounded-full
                  bg-[#00ff66]
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2 w-2
                  rounded-full
                  bg-[#00ff66]
                  shadow-[0_0_10px_rgba(0,255,102,0.9)]
                "
              />
            </span>

            Active Discipline // Q3/Q4 Commissions Open
          </div>
        </div>

        {/* ===================================================
            HERO GRID
        =================================================== */}

        <div
          className="
            grid
            items-center
            gap-10
            py-10

            md:gap-12
            md:py-12

            lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]
            lg:gap-10
            lg:py-14

            xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]
            xl:gap-16
            xl:py-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              w-full
              max-w-[760px]
              lg:pr-1
              xl:pr-3
            "
          >
            {/* Eyebrow */}

            <div
              className="
                hero-reveal-delay-1
                group
                mb-5
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border border-[#00ff66]/20
                bg-gradient-to-r
                from-[#00ff66]/[0.07]
                via-[#00ff66]/[0.03]
                to-transparent
                px-3.5
                py-2
                text-[8px]
                font-black
                uppercase
                tracking-[0.17em]
                text-[#59ff9b]
                shadow-[0_0_30px_rgba(0,255,102,0.055)]
                backdrop-blur-xl
                transition-all
                duration-500

                hover:border-[#00ff66]/35
                hover:bg-[#00ff66]/[0.07]
                hover:shadow-[0_0_38px_rgba(0,255,102,0.11)]

                sm:text-[9px]
              "
            >
              <Network
                className="
                  h-3.5 w-3.5
                  transition-transform
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              />

              Core Discipline // Spatial Architecture & BIM
            </div>

            {/* ===============================================
                HEADING - CLIPPING FIXED
            =============================================== */}

            <div
              className="
                hero-title-reveal
                relative
                max-w-[760px]
                overflow-visible
                pb-2
                pt-2
              "
            >
              {/* Text ambient glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[5%]
                  top-[20%]
                  -z-10
                  h-[160px]
                  w-[70%]
                  rounded-full
                  bg-[#00ff66]/[0.045]
                  blur-[95px]
                "
              />

              <h1
                className="
                  relative
                  !overflow-visible
                  font-black
                  tracking-[-0.052em]
                  text-[#effff3]

                  text-[46px]
                  leading-[1.06]

                  min-[420px]:text-[50px]

                  sm:text-[58px]
                  sm:leading-[1.055]

                  md:text-[64px]

                  lg:text-[52px]
                  lg:leading-[1.05]

                  xl:text-[64px]

                  2xl:text-[72px]
                "
              >
                {/* Architecture */}

                <span
                  className="
                    block
                    !overflow-visible
                    pb-[0.06em]
                    pt-[0.1em]
                    lg:whitespace-nowrap
                  "
                >
                  <span
                    className="
                      text-[#effff3]
                      drop-shadow-[0_4px_30px_rgba(230,255,238,0.035)]
                    "
                  >
                    Architecture
                  </span>

                  <span
                    className="
                      ml-[0.13em]
                      inline-block
                      text-[#e7faec]
                    "
                  >
                    &amp;
                  </span>
                </span>

                {/* Engineering */}

                <span
                  className="
                    relative
                    mt-[0.01em]
                    block
                    !overflow-visible
                    pb-[0.14em]
                  "
                >
                  <span
                    className="
                      inline-block
                      bg-gradient-to-r
                      from-[#00ff66]
                      via-[#36ff91]
                      to-[#00d859]
                      bg-clip-text
                      text-transparent
                      drop-shadow-[0_0_24px_rgba(0,255,102,0.10)]
                    "
                  >
                    Engineering
                  </span>

                  {/* Bottom decorative light */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1
                      h-px
                      w-[38%]
                      bg-gradient-to-r
                      from-[#00ff66]/70
                      via-[#00ff66]/20
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-[-2px]
                      left-1
                      h-[5px]
                      w-[16%]
                      bg-[#00ff66]/15
                      blur-md
                    "
                  />
                </span>
              </h1>
            </div>

            {/* Description */}

            <p
              className="
                hero-reveal-delay-3
                mt-5
                max-w-[630px]
                text-[14px]
                font-normal
                leading-[1.8]
                tracking-[-0.01em]
                text-white/55

                sm:text-[15px]

                md:text-[16px]

                lg:text-[15px]

                xl:text-[16px]
              "
            >
              End-to-end spatial planning, architectural drafting,
              BIM coordination, engineering documentation, and
              photorealistic visualization for real-world landmark
              projects.
            </p>

            {/* ===============================================
                BADGES
            =============================================== */}

            <div
              className="
                hero-reveal-delay-4
                mt-6
                flex
                max-w-[690px]
                flex-wrap
                gap-2.5
              "
            >
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border border-white/[0.075]
                    bg-white/[0.032]
                    px-3.5
                    py-2
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.145em]
                    text-white/70
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    hover:-translate-y-0.5
                    hover:border-[#00ff66]/30
                    hover:bg-[#00ff66]/[0.055]
                    hover:text-white
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.20),0_0_28px_rgba(0,255,102,0.09)]

                    sm:text-[9px]
                  "
                >
                  {/* light sweep */}

                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-[125%]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.07]
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-[125%]
                    "
                  />

                  <Icon
                    className="
                      relative
                      z-10
                      h-3.5 w-3.5
                      text-[#55ff9c]
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:scale-110
                    "
                  />

                  <span className="relative z-10">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* ===============================================
                CTA BUTTONS
            =============================================== */}

            <div
              className="
                hero-reveal-delay-5
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* Primary */}

              <Link
                href="/services/architecture"
                className="
                  group
                  relative
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  px-6
                  text-[13px]
                  font-bold
                  text-[#02140a]
                  sm:w-fit
                "
              >
                {/* Green BG */}

                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#00FF66]
                    via-[#2bff88]
                    to-[#00cc52]
                    transition-all
                    duration-500
                    group-hover:scale-[1.04]
                  "
                />

                {/* White shine */}

                <span
                  className="
                    absolute
                    -left-[100%]
                    top-0
                    h-full
                    w-[45%]
                    skew-x-[-24deg]
                    bg-white/35
                    blur-md
                    transition-all
                    duration-700
                    group-hover:left-[135%]
                  "
                />

                {/* Glow */}

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    shadow-[0_0_25px_rgba(0,255,102,0.4)]
                    transition-all
                    duration-500
                    group-hover:shadow-[0_0_42px_rgba(0,255,102,0.68)]
                  "
                />

                <span className="relative z-10">
                  Explore Architecture
                </span>

                <ArrowRight
                  className="
                    relative
                    z-10
                    h-4 w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary */}

              <Link
                href="/contact"
                className="
                  group
                  relative
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  border border-white/10
                  bg-white/[0.032]
                  px-6
                  text-[13px]
                  font-semibold
                  text-white/85
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-0.5
                  hover:border-[#00ff66]/25
                  hover:bg-[#00ff66]/[0.035]
                  hover:text-white
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.30),0_0_30px_rgba(0,255,102,0.08)]

                  sm:w-fit
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    translate-x-[-120%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.04]
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-[120%]
                  "
                />

                <CalendarDays
                  className="
                    relative
                    z-10
                    h-4 w-4
                    text-[#00ff66]
                  "
                />

                <span className="relative z-10">
                  Request BIM Consultation
                </span>

                <MoveUpRight
                  className="
                    relative
                    z-10
                    h-3.5 w-3.5
                    opacity-0
                    transition-all
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>
            </div>

            {/* Download */}

            <Link
              href="/architecture-spec-sheet.pdf"
              className="
                hero-reveal-delay-5
                group
                mt-5
                inline-flex
                items-center
                gap-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-white/40
                transition-all
                duration-300
                hover:text-[#92ffba]
              "
            >
              <Download
                className="
                  h-3.5 w-3.5
                  text-[#60ffa0]
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />

              Specs Sheet (PDF)
            </Link>
          </div>

          {/* =================================================
              RIGHT BIM PANEL
          ================================================= */}

          <div
            className="
              architecture-card-float
              relative
              mx-auto
              w-full
              max-w-[720px]
              lg:ml-auto
            "
          >
            {/* Glow behind card */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[70%]
                w-[75%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#00ff66]/[0.085]
                blur-[105px]
              "
            />

            {/* Hoverable card */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border border-[#8fffb5]/[0.09]
                bg-[#07130e]/95

                shadow-[0_35px_90px_rgba(0,0,0,0.48),0_0_60px_rgba(0,255,102,0.05),inset_0_1px_0_rgba(255,255,255,0.04)]

                backdrop-blur-2xl
                transition-all
                duration-700

                hover:-translate-y-1
                hover:border-[#00ff66]/25
                hover:shadow-[0_45px_110px_rgba(0,0,0,0.54),0_0_80px_rgba(0,255,102,0.1),inset_0_1px_0_rgba(255,255,255,0.055)]
              "
            >
              {/* Neon top highlight */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[10%]
                  top-0
                  z-30
                  h-px
                  w-[35%]
                  bg-gradient-to-r
                  from-transparent
                  via-[#00ff66]/60
                  to-transparent
                  shadow-[0_0_15px_rgba(0,255,102,0.55)]
                "
              />

              {/* =============================================
                  PANEL HEADER
              ============================================= */}

              <div
                className="
                  relative
                  z-20
                  flex
                  min-h-[45px]
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-white/[0.055]
                  bg-white/[0.018]
                  px-4
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                  "
                >
                  {/* window dots */}

                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-1.5
                    "
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff8585] shadow-[0_0_6px_rgba(255,133,133,0.18)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffd37d] shadow-[0_0_6px_rgba(255,211,125,0.18)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#53ffa0] shadow-[0_0_8px_rgba(83,255,160,0.25)]" />
                  </div>

                  <span
                    className="
                      hidden
                      truncate
                                            text-[8px]
                      font-bold
                      tracking-[0.08em]
                      text-white/38
                      sm:block
                    "
                  >
                    HUD_VIEWPORT // SPEC_ID #VRTX-8809
                  </span>
                </div>

                <span
                  className="
                    shrink-0
                    rounded-md
                    border
                    border-[#00ff66]/10
                    bg-[#00ff66]/[0.055]
                    px-2.5
                    py-1
                                        text-[8px]
                    font-black
                    tracking-[0.08em]
                    text-[#00ff66]
                    shadow-[0_0_15px_rgba(0,255,102,0.04)]
                  "
                >
                  BIM LOD: 400
                </span>
              </div>

              {/* =============================================
                  VISUAL
              ============================================= */}

              <div
                className="
                  relative
                  aspect-[1.25/1]
                  overflow-hidden

                  sm:aspect-[1.52/1]

                  lg:aspect-[1.48/1]
                "
              >
              <BIMVisual src="/assets/imagesarchitecture-bim.png" />

                {/* Image overlays */}

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#031009]/90
                    via-transparent
                    to-black/15
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-r
                    from-[#00ff66]/[0.035]
                    via-transparent
                    to-transparent
                  "
                />

                {/* subtle vignette */}

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]
                  "
                />

                {/* Telemetry */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    z-10
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-[#00ff66]/20
                    bg-[#03130a]/75
                    px-3
                    py-2
                                        text-[8px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#7dffae]
                    shadow-[0_0_30px_rgba(0,255,102,0.07)]
                    backdrop-blur-xl

                    sm:left-5
                    sm:top-5
                    sm:text-[9px]
                  "
                >
                  <Sparkles className="h-3 w-3 text-[#00ff66]" />

                  Live Revit Spatial Telemetry
                </div>

                {/* Scanning line */}

                <div
                  className="
                    architecture-scan
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-10
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-[#00ff66]
                    to-transparent
                    opacity-50
                    shadow-[0_0_18px_rgba(0,255,102,0.85)]
                  "
                />

                {/* left measurement decoration */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[22%]
                    left-5
                    hidden
                    h-16
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-[#00ff66]/30
                    to-transparent
                    sm:block
                  "
                />

                {/* Bottom data */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    z-20
                    flex
                    flex-col
                    gap-3

                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                  "
                >
                  <div>
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                                                text-[8px]
                        font-black
                        uppercase
                        tracking-[0.15em]
                        text-[#00ff66]

                        sm:text-[9px]
                      "
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className="
                            absolute
                            h-full
                            w-full
                            animate-ping
                            rounded-full
                            bg-[#00ff66]
                          "
                        />

                        <span
                          className="
                            relative
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#00ff66]
                            shadow-[0_0_8px_rgba(0,255,102,0.9)]
                          "
                        />
                      </span>

                      Coordination Engine Ready
                    </div>

                    <p
                      className="
                        mt-1.5
                                                text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.11em]
                        text-white/30
                        sm:text-[8px]
                      "
                    >
                      Clash Detection: Zero Critical Defects
                    </p>
                  </div>

                  <DataBadge>
                    Unreal Engine Live Sync
                  </DataBadge>
                </div>
              </div>

              {/* =============================================
                  PANEL FOOTER
              ============================================= */}

              <div
                className="
                  relative
                  z-20
                  flex
                  min-h-[46px]
                  flex-wrap
                  items-center
                  justify-between
                  gap-3
                  border-t
                  border-white/[0.055]
                  bg-[#06120d]
                  px-4
                  py-2.5
                                    text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.09em]
                  text-white/35
                "
              >
                <div
                  className="
                    flex
                    flex-wrap
                    gap-x-5
                    gap-y-2
                  "
                >
                  <span className="flex items-center gap-1.5">
                    <Layers3 className="h-3 w-3 text-[#00ff66]" />

                    18 BIM Layers Active
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Activity className="h-3 w-3 text-[#00ff66]" />

                    Tolerance: ±1.2mm
                  </span>
                </div>

                <span className="text-white/55">
                  Realtime Sync
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            STAT COUNTERS
        =================================================== */}

        <div
          className="
            stats-reveal
            relative
            grid
            overflow-hidden
            rounded-[18px]
            border
            border-white/[0.065]
            bg-white/[0.021]

            shadow-[0_25px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.035)]

            backdrop-blur-xl

            sm:grid-cols-2

            lg:max-w-[760px]
            lg:grid-cols-4
          "
        >
          {/* top glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-[8%]
              top-0
              h-px
              w-[30%]
              bg-gradient-to-r
              from-transparent
              via-[#00ff66]/40
              to-transparent
            "
          />

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group
                relative
                min-h-[104px]
                overflow-hidden
                px-5
                py-5
                transition-all
                duration-500

                hover:bg-[#00ff66]/[0.035]
                hover:shadow-[inset_0_0_35px_rgba(0,255,102,0.025)]

                ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-white/[0.055]"
                    : ""
                }

                ${
                  index < 2
                    ? "sm:border-b sm:border-white/[0.055] lg:border-b-0"
                    : ""
                }

                ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-white/[0.055]"
                    : ""
                }
              `}
            >
              {/* animated top border */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-[#00ff66]
                  via-[#5dffa0]
                  to-transparent
                  shadow-[0_0_12px_rgba(0,255,102,0.65)]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* corner glow */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-32
                  w-32
                  rounded-full
                  bg-[#00ff66]/0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#00ff66]/[0.075]
                "
              />

              {/* Count */}

              <p
                className={`
                  relative
                  z-10
                  text-[23px]
                  font-black
                  tracking-[-0.04em]
                  transition-transform
                  duration-500

                  group-hover:translate-x-0.5

                  sm:text-[25px]

                  ${
                    stat.accent
                      ? "text-[#19ef79]"
                      : "text-[#efffed]"
                  }
                `}
              >
                <ViewportCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>

              {/* Label */}

              <p
                className="
                  relative
                  z-10
                  mt-1.5
                  text-[8px]
                  font-extrabold
                  uppercase
                  leading-[1.4]
                  tracking-[0.15em]
                  text-[#baf5c8]/50
                  transition-colors
                  duration-500
                  group-hover:text-[#baf5c8]/75
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="h-8 sm:h-10 lg:h-14" />
      </div>
    </section>
  );
}