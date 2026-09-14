"use client";

import Image from "next/image";
import { Geist } from "next/font/google";
import {
  ArrowRight,
  Blocks,
  Building2,
  DraftingCompass,
  Grid3X3,
  Network,
  ScanLine,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   DATA
========================================================= */

type ServiceItem = {
  number: string;
  category: string;
  title: string;
  description: string;
  footer: string;
  icon: LucideIcon;
  image?: string;
};

const services: ServiceItem[] = [
  {
    number: "01",
    category: "FEASIBILITY",
    title: "2D Floor Plans & Layout Optimization",
    description:
      "Detailed architectural space programming, circulation flow analysis, structural partition diagrams, and human-scale ergonomics engineered for maximum spatial yield and usability.",
    footer: "CIRCULATION • FLOW OPTIMIZATION",
    icon: Grid3X3,
  },
  {
    number: "02",
    category: "PERMITS",
    title: "Architectural Drafting & Permit Sets",
    description:
      "Full CAD construction blueprints, municipal building department permit documentation, section cuts, structural elevations, envelope details, and code compliance schedules.",
    footer: "IBC • EUROCODE • LOCAL BYLAWS",
    icon: DraftingCompass,
  },
  {
    number: "03",
    category: "VIRTUAL TWIN",
    title: "3D BIM Modeling (LOD 100 – 400)",
    description:
      "Full parametric Revit / ArchiCAD models, automated clash detection reports, multi-trade coordination, and fabrication-ready digital twins prepared for general contractor handoff.",
    footer: "CLASH DETECTION • IFC PIPELINE",
    icon: Blocks,
  },
  {
    number: "04",
    category: "FORM & LIGHT",
    title: "Interior & Exterior Spatial Design",
    description:
      "Volumetric massing, facade articulation, sunlight & thermal daylighting simulation, bespoke materiality specs, and seamless indoor-outdoor landscape biophilic continuity.",
    footer: "SOLAR HELIODON • BIOPHILIC",
    icon: Building2,
  },
  {
    number: "05",
    category: "SYSTEMS",
    title: "Structural & MEP Coordination",
    description:
      "Seamless spatial integration of mechanical, electrical, plumbing, and HVAC systems directly into structural geometries, eliminating field clashes and costly change orders.",
    footer: "HVAC • CONDUITS • STRUCTURAL STEEL",
    icon: Network,
  },
  {
    number: "06",
    category: "RENDER",
    title: "Photoreal Cinematic Visualization",
    description:
      "Real-time raytraced exterior and interior twilight renders, interactive WebGL digital walkthroughs, and ultra-high-definition investor showcases.",
    footer: "UNREAL ENGINE • 8K RESOLUTION",
    icon: ScanLine,
    image: "/assets/imagesarchitecture-bim.png",
  },
];

/* =========================================================
   VIEWPORT REVEAL
========================================================= */

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  item,
  index,
}: {
  item: ServiceItem;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <article
      style={
        {
          "--delay": `${index * 90}ms`,
        } as CSSProperties
      }
      className="
        service-card
        group
        relative
        flex
        min-h-[300px]
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        border-white/[0.055]
        bg-[#111714]/90
        p-5

        shadow-[0_20px_55px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.025)]

        backdrop-blur-xl

        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:-translate-y-1.5
        hover:border-[#00ff66]/20
        hover:bg-[#131c17]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.30),0_0_45px_rgba(0,255,102,0.055),inset_0_1px_0_rgba(255,255,255,0.04)]

        sm:min-h-[320px]
        sm:p-6

        lg:min-h-[310px]

        xl:min-h-[330px]
        xl:p-7
      "
    >
      {/* Hover glow */}

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
          blur-[70px]
          transition-all
          duration-700
          group-hover:bg-[#00ff66]/[0.08]
        "
      />

      {/* Top animated line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-[#00ff66]
          via-[#68ffa4]
          to-transparent
          shadow-[0_0_18px_rgba(0,255,102,0.65)]
          transition-all
          duration-700
          group-hover:w-full
        "
      />

      {/* Shine */}

      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-[45%]
          w-[30%]
          skew-x-[-18deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.025]
          to-transparent
          transition-all
          duration-1000
          group-hover:left-[120%]
        "
      />

      {/* ===================================================
          TOP
      =================================================== */}

      <div className="relative z-10 flex items-start justify-between gap-5">
        {/* Icon */}

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-[10px]
            border
            border-white/[0.035]
            bg-white/[0.025]

            shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]

            transition-all
            duration-500

            group-hover:scale-105
            group-hover:border-[#00ff66]/15
            group-hover:bg-[#00ff66]/[0.055]
            group-hover:shadow-[0_0_25px_rgba(0,255,102,0.07)]
          "
        >
          <Icon
            className="
              h-[17px]
              w-[17px]
              text-[#00ff66]

              transition-all
              duration-500

              group-hover:rotate-[5deg]
              group-hover:scale-110
              group-hover:drop-shadow-[0_0_8px_rgba(0,255,102,0.5)]
            "
            strokeWidth={2}
          />
        </div>

        {/* Number */}

        <div
          className="
            flex
            items-center
            gap-2
            pt-1
            text-[8px]
            font-black
            uppercase
            tracking-[0.18em]
            text-[#00ff66]

            sm:text-[9px]
          "
        >
          <span>{item.number}</span>

          <span className="text-[#00ff66]/45">//</span>

          <span>{item.category}</span>
        </div>
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="relative z-10 mt-5">
        <h3
          className="
            max-w-[360px]
            text-[17px]
            font-[700]
            leading-[1.28]
            tracking-[-0.035em]
            text-[#eaf7ed]

            transition-colors
            duration-500

            group-hover:text-white

            sm:text-[18px]

            lg:text-[17px]

            xl:text-[18px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-2.5
            max-w-[390px]
            text-[12px]
            font-normal
            leading-[1.65]
            tracking-[-0.01em]
            text-[#c6d0c8]/70

            transition-colors
            duration-500

            group-hover:text-[#d7e0d9]/80

            sm:text-[12.5px]

            xl:text-[13px]
          "
        >
          {item.description}
        </p>
      </div>

      {/* ===================================================
          OPTIONAL IMAGE
      =================================================== */}

      {item.image && (
        <div
          className="
            relative
            z-10
            mt-4
            h-[72px]
            overflow-hidden
            rounded-[7px]
            border
            border-white/[0.04]
            bg-black/30

            sm:h-[78px]
          "
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="
              object-cover
              object-center
              opacity-80

              transition-all
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:scale-[1.06]
              group-hover:opacity-100
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-[#031009]/20
              via-transparent
              to-[#00ff66]/[0.06]
            "
          />

          <div
            className="
              absolute
              bottom-1.5
              left-2
              rounded-[3px]
              bg-[#00ff66]
              px-1.5
              py-[3px]
              text-[5px]
              font-black
              uppercase
              tracking-[0.1em]
              text-[#011307]
            "
          >
            Raytraced Visualization
          </div>
        </div>
      )}

      {/* ===================================================
          FOOTER
      =================================================== */}

      <div
        className="
          relative
          z-10
          mt-auto
          flex
          items-end
          justify-between
          gap-4
          pt-6
        "
      >
        <span
          className="
            max-w-[80%]
            text-[7px]
            font-black
            uppercase
            leading-[1.5]
            tracking-[0.16em]
            text-[#00ff66]/85

            sm:text-[8px]
          "
        >
          {item.footer}
        </span>

        <span
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full

            text-[#00ff66]

            transition-all
            duration-500

            group-hover:translate-x-1
            group-hover:bg-[#00ff66]/[0.06]
          "
        >
          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-500

              group-hover:scale-110
            "
          />
        </span>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function IntegratedArchitecturalExecution() {
  const { ref, visible } = useInView();

  return (
    <section
      ref={ref}
      className={`
        ${geist.className}
        relative
        isolate
        overflow-hidden
        bg-[#090e0b]
        text-white
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-50 bg-[#090e0b]" />

      {/* dotted grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-40
          opacity-[0.13]

          [background-image:radial-gradient(rgba(129,255,171,0.5)_0.7px,transparent_0.7px)]
          [background-size:26px_26px]
        "
      />

      {/* left glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[320px]
          top-[-250px]
          -z-30
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#00ff66]/[0.045]
          blur-[170px]
        "
      />

      {/* center glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[45%]
          top-[40%]
          -z-30
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#00ff66]/[0.018]
          blur-[150px]
        "
      />

      {/* bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          -z-20
          h-[260px]
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
          py-16

          sm:px-6
          sm:py-20

          md:px-8

          lg:px-10
          lg:py-24

          xl:px-12
          xl:py-28
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className={`
            grid
            items-end
            gap-8

            transition-all
            duration-1000
            ease-[cubic-bezier(0.16,1,0.3,1)]

            md:grid-cols-[1.15fr_0.85fr]
            md:gap-12

            lg:grid-cols-[1.2fr_0.8fr]

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* Left heading */}

          <div>
            <div
              className="
                mb-4
                flex
                items-center
                gap-2
                text-[8px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#00ff66]

                sm:text-[9px]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#00ff66]
                  shadow-[0_0_10px_rgba(0,255,102,0.8)]
                "
              />

              Pillars of Practice
            </div>

            <h2
              className="
                max-w-[760px]
                text-[38px]
                font-[700]
                leading-[1.03]
                tracking-[-0.055em]
                text-[#f0fff3]

                min-[420px]:text-[42px]

                sm:text-[50px]

                md:text-[52px]

                lg:text-[58px]

                xl:text-[62px]
              "
            >
              Integrated Architectural
              <span className="block">
                Execution
              </span>
            </h2>
          </div>

          {/* Right description */}

          <div
            className="
              md:pb-2
              md:pl-4

              lg:pb-3
              lg:pl-8
            "
          >
            <p
              className="
                max-w-[470px]
                text-[13px]
                font-normal
                leading-[1.7]
                tracking-[-0.01em]
                text-[#b9ffc9]/80

                sm:text-[14px]

                md:ml-auto

                lg:text-[15px]
              "
            >
              A coherent continuum spanning analytical space
              programming, rigid structural calculations, and
              breathtaking photorealistic presence.
            </p>
          </div>
        </div>

        {/* ===================================================
            CARDS
        =================================================== */}

        <div
          className={`
            mt-10
            grid
            grid-cols-1
            gap-3

            sm:mt-12
            sm:grid-cols-2
            sm:gap-4

            lg:grid-cols-3

            xl:mt-14
            xl:gap-4

            ${
              visible
                ? "[&_.service-card]:translate-y-0 [&_.service-card]:opacity-100"
                : "[&_.service-card]:translate-y-10 [&_.service-card]:opacity-0"
            }
          `}
        >
          {services.map((item, index) => (
            <ServiceCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          COMPONENT CSS
      ===================================================== */}

      <style jsx global>{`
        .service-card {
          transition-delay: var(--delay);
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}