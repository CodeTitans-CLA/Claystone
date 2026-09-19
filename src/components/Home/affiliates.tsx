"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { Network, Sparkles } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Affiliate = {
  id: number;
  name: string;
  logo: string;
};

/* =========================================================
   LOGO CACHE VERSION

   If you replace any logo file later but keep the same
   filename, just change this value once.
========================================================= */

const LOGO_CACHE_VERSION = "20260916-v3";

/* =========================================================
   AFFILIATE DATA

   public/
   └── assets/
       └── affiliates/
           ├── logo 1.png
           ├── logo 2.png
           ├── logo 3.png
           ├── logo 4.png
           ├── logo 5.png
           ├── logo 6.png
           ├── logo 7.png
           ├── logo 8.png
           ├── logo 9.png
           ├── logo 10.png
           ├── logo 11.png
           └── logo 12.png
========================================================= */

const affiliates: Affiliate[] = [
  {
    id: 1,
    name: "Affiliate 01",
    logo: "/assets/affiliates/logo 1.png",
  },
  {
    id: 2,
    name: "Affiliate 02",
    logo: "/assets/affiliates/logo 2.png",
  },
  {
    id: 3,
    name: "Affiliate 03",
    logo: "/assets/affiliates/logo 3.png",
  },
  {
    id: 4,
    name: "Affiliate 04",
    logo: "/assets/affiliates/logo 4.png",
  },
  {
    id: 5,
    name: "Affiliate 05",
    logo: "/assets/affiliates/logo 5.png",
  },
  {
    id: 6,
    name: "Affiliate 06",
    logo: "/assets/affiliates/logo 6.png",
  },
  {
    id: 7,
    name: "Affiliate 07",
    logo: "/assets/affiliates/logo 7.png",
  },
  {
    id: 8,
    name: "Affiliate 08",
    logo: "/assets/affiliates/logo 8.png",
  },
  {
    id: 9,
    name: "Affiliate 09",
    logo: "/assets/affiliates/logo 9.png",
  },
  {
    id: 10,
    name: "Affiliate 10",
    logo: "/assets/affiliates/logo 10.png",
  },
  {
    id: 11,
    name: "Affiliate 11",
    logo: "/assets/affiliates/logo 11.png",
  },
  {
    id: 12,
    name: "Affiliate 12",
    logo: "/assets/affiliates/logo 12.png",
  },
];

/* =========================================================
   TWO UNIQUE ROWS
========================================================= */

const rowOne = affiliates.slice(0, 6);
const rowTwo = affiliates.slice(6, 12);

/* =========================================================
   AFFILIATE CARD
========================================================= */

function AffiliateCard({
  affiliate,
}: {
  affiliate: Affiliate;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  /*
   * IMPORTANT:
   * Unique query value forces browser to load the correct
   * logo file instead of showing an older cached image.
   */

  const logoSrc = `${affiliate.logo}?v=${LOGO_CACHE_VERSION}-${affiliate.id}`;

  return (
    <article
      className={`
        affiliate-glass-card
        group
        relative

        h-[108px]
        w-[205px]

        shrink-0
        overflow-hidden

        rounded-[20px]

        border
        border-white/10

        bg-[linear-gradient(145deg,rgba(15,29,21,0.92)_0%,rgba(8,20,13,0.96)_55%,rgba(4,12,8,0.98)_100%)]

        p-[6px]

        shadow-[0_12px_34px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.045)]

        backdrop-blur-2xl

        transition-all
        duration-500

        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:-translate-y-[4px]
        hover:border-[#00FF66]/30

        hover:shadow-[0_22px_52px_rgba(0,0,0,0.42),0_0_34px_rgba(0,255,102,0.09),inset_0_1px_0_rgba(255,255,255,0.07)]

        sm:h-[116px]
        sm:w-[225px]

        md:h-[122px]
        md:w-[245px]

        lg:h-[128px]
        lg:w-[270px]

        xl:h-[132px]
        xl:w-[300px]

        2xl:h-[136px]
        2xl:w-[325px]
      `}
    >
      {/* BACKGROUND DEPTH */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_88%_7%,rgba(0,255,102,0.11),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_48%)]
        `}
      />

      {/* INNER BORDER */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-[1px]

          rounded-[19px]

          border
          border-white/5
        `}
      />

      {/* TOP NEON ACCENT */}

      <span
        className={`
          pointer-events-none

          absolute
          left-1/2
          top-0
          z-30

          h-[2px]
          w-[16%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#00FF66]/60
          to-transparent

          opacity-80

          shadow-[0_0_14px_rgba(0,255,102,0.48)]

          transition-all
          duration-500

          group-hover:w-[74%]
          group-hover:via-[#00FF66]
        `}
      />

      {/* UPPER GREEN GLOW */}

      <div
        className={`
          pointer-events-none

          absolute
          -right-16
          -top-16

          h-36
          w-36

          rounded-full

          bg-[#00FF66]/0

          blur-[52px]

          transition-all
          duration-700

          group-hover:bg-[#00FF66]/15
        `}
      />

      {/* LOWER AMBIENT */}

      <div
        className={`
          pointer-events-none

          absolute
          -bottom-20
          left-1/2

          h-32
          w-44

          -translate-x-1/2

          rounded-full

          bg-[#00FF66]/0

          blur-[55px]

          transition-all
          duration-700

          group-hover:bg-[#00FF66]/5
        `}
      />

      {/* MOVING SHINE */}

      <span
        className={`
          pointer-events-none

          absolute
          inset-y-0

          -left-[70%]
          z-30

          w-[24%]

          skew-x-[-22deg]

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent

          transition-all
          duration-700

          group-hover:left-[135%]
        `}
      />

      {/* LOGO STAGE */}

      <div
        className={`
          relative
          z-10

          flex

          h-full
          w-full

          items-center
          justify-center

          overflow-hidden

          rounded-[15px]

          border
          border-white/50

          bg-[linear-gradient(145deg,rgba(255,255,255,0.99)_0%,rgba(244,250,246,0.98)_48%,rgba(228,242,234,0.965)_100%)]

          px-5
          py-4

          shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.035),0_7px_20px_rgba(0,0,0,0.16)]

          transition-all
          duration-500

          group-hover:border-[#8affb4]/70

          group-hover:bg-[linear-gradient(145deg,#ffffff_0%,#f7fff9_52%,#e7f8ec_100%)]

          group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_10px_30px_rgba(0,0,0,0.20),0_0_22px_rgba(0,255,102,0.085)]

          sm:px-6
        `}
      >
        {/* DOT TEXTURE */}

        <div
          className={`
            pointer-events-none

            absolute
            inset-0

            opacity-[0.022]

            [background-image:radial-gradient(rgba(0,55,25,0.65)_0.7px,transparent_0.7px)]
            [background-size:17px_17px]
          `}
        />

        {/* GREEN REFLECTION */}

        <div
          className={`
            pointer-events-none

            absolute
            -bottom-14
            right-[8%]

            h-28
            w-28

            rounded-full

            bg-[#00FF66]/10

            blur-[38px]
          `}
        />

        {/* TOP REFLECTION */}

        <div
          className={`
            pointer-events-none

            absolute
            inset-x-[10%]
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent

            opacity-60
          `}
        />

        {/* LOGO */}

        {!imageFailed ? (
          <Image
            key={`${affiliate.id}-${LOGO_CACHE_VERSION}`}
            src={logoSrc}
            alt={affiliate.name}
            width={320}
            height={120}
            unoptimized
            draggable={false}
            sizes="
              (max-width: 640px) 165px,
              (max-width: 1024px) 210px,
              270px
            "
            onError={() => setImageFailed(true)}
            className={`
              relative
              z-10

              h-auto

              max-h-[52px]

              w-auto

              max-w-[160px]

              select-none

              object-contain

              opacity-100

              saturate-[1.06]
              contrast-[1.09]

              transition-all
              duration-500

              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:scale-[1.055]

              sm:max-h-[58px]
              sm:max-w-[180px]

              md:max-h-[64px]
              md:max-w-[200px]

              lg:max-h-[68px]
              lg:max-w-[225px]

              xl:max-h-[72px]
              xl:max-w-[250px]

              2xl:max-h-[76px]
              2xl:max-w-[270px]
            `}
          />
        ) : (
          <span
            className={`
              relative
              z-10

              text-center

              text-[15px]

              font-bold

              tracking-[-0.025em]

              text-[#0b2516]

              sm:text-[16px]
              lg:text-[17px]
            `}
          >
            {affiliate.name}
          </span>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   ONE COMPLETE LOGO GROUP
========================================================= */

function AffiliateCopy({
  items,
  prefix,
  hidden = false,
}: {
  items: Affiliate[];
  prefix: string;
  hidden?: boolean;
}) {
  return (
    <div
      aria-hidden={hidden ? true : undefined}
      className={`
        affiliate-copy

        flex

        shrink-0

        items-center

        gap-3
        pr-3

        sm:gap-4
        sm:pr-4

        lg:gap-5
        lg:pr-5
      `}
    >
      {items.map((affiliate) => (
        <AffiliateCard
          key={`${prefix}-${affiliate.id}-${affiliate.logo}`}
          affiliate={affiliate}
        />
      ))}
    </div>
  );
}

/* =========================================================
   MARQUEE ROW
========================================================= */

function AffiliateRow({
  items,
  reverse = false,
  duration = 36,
}: {
  items: Affiliate[];
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div
      className={`
        affiliate-row

        relative

        mx-auto

        w-[calc(100%_-_32px)]
        max-w-[1800px]

        overflow-hidden

        py-3.5

        sm:w-[calc(100%_-_48px)]
        sm:py-4

        lg:w-[calc(100%_-_64px)]
      `}
    >
      {/* LEFT FADE */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-y-0
          left-0
          z-40

          w-[35px]

          bg-gradient-to-r
          from-[#040806]
          via-[#040806]/70
          to-transparent

          sm:w-[65px]
          lg:w-[95px]
        `}
      />

      {/* RIGHT FADE */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-y-0
          right-0
          z-40

          w-[35px]

          bg-gradient-to-l
          from-[#040806]
          via-[#040806]/70
          to-transparent

          sm:w-[65px]
          lg:w-[95px]
        `}
      />

      {/* TRACK */}

      <div
        className={`
          affiliate-track

          flex

          w-max

          ${
            reverse
              ? "affiliate-track-reverse"
              : "affiliate-track-forward"
          }
        `}
        style={
          {
            "--affiliate-speed": `${duration}s`,
          } as CSSProperties
        }
      >
        {/* REAL SET */}

        <AffiliateCopy
          items={items}
          prefix={`real-${reverse ? "reverse" : "forward"}`}
        />

        {/* LOOP COPY
            This exists only for seamless animation.
            It is not another affiliate dataset.
        */}

        <AffiliateCopy
          items={items}
          prefix={`clone-${reverse ? "reverse" : "forward"}`}
          hidden
        />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AffiliatesSection() {
  return (
    <section
      className={`
        relative
        isolate

        w-full

        overflow-hidden

        bg-[#040806]

        py-10

        text-white

        sm:py-12
        md:py-14
        lg:py-16
        xl:py-[68px]
      `}
    >
      {/* BACKGROUND */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-0

          -z-50

          bg-[linear-gradient(135deg,#020503_0%,#041009_24%,#071b0f_50%,#041109_76%,#020503_100%)]
        `}
      />

      {/* CENTER AMBIENT */}

      <div
        className={`
          pointer-events-none

          absolute

          left-1/2
          top-[-420px]

          -z-40

          h-[820px]
          w-[1180px]

          -translate-x-1/2

          rounded-full

          bg-[#00FF66]/10

          blur-[205px]
        `}
      />

      {/* MIDDLE AMBIENT */}

      <div
        className={`
          pointer-events-none

          absolute

          left-1/2
          top-[48%]

          -z-40

          h-[480px]
          w-[950px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#00FF66]/5

          blur-[165px]
        `}
      />

      {/* LEFT GLOW */}

      <div
        className={`
          pointer-events-none

          absolute

          -left-[320px]
          top-[25%]

          -z-40

          h-[680px]
          w-[680px]

          rounded-full

          bg-[#00FF66]/5

          blur-[185px]
        `}
      />

      {/* RIGHT GLOW */}

      <div
        className={`
          pointer-events-none

          absolute

          -right-[320px]
          bottom-[4%]

          -z-40

          h-[680px]
          w-[680px]

          rounded-full

          bg-[#00FF66]/5

          blur-[190px]
        `}
      />

      {/* DOT GRID */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-0

          -z-30

          opacity-[0.07]

          [background-image:radial-gradient(rgba(134,255,176,0.58)_0.7px,transparent_0.7px)]
          [background-size:28px_28px]

          [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,.72),transparent)]
        `}
      />

      {/* TOP LINE */}

      <div
        className={`
          pointer-events-none

          absolute

          left-1/2
          top-0

          -z-20

          h-px
          w-[85%]

          max-w-[1450px]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#00FF66]/35
          to-transparent

          shadow-[0_0_12px_rgba(0,255,102,0.2)]
        `}
      />

      {/* BOTTOM SHADE */}

      <div
        className={`
          pointer-events-none

          absolute

          inset-x-0
          bottom-0

          -z-20

          h-[220px]

          bg-gradient-to-t
          from-black/30
          to-transparent
        `}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className={`
          relative
          z-10

          mx-auto

          mb-7

          max-w-[960px]

          px-4

          text-center

          sm:mb-8
          sm:px-6

          lg:mb-9
        `}
      >
        {/* EYEBROW */}

        <div
          className={`
            mb-3

            inline-flex

            items-center

            gap-2.5

            rounded-full

            border
            border-[#00FF66]/20

            bg-[#00FF66]/5

            px-4
            py-2.5

            font-mono

            text-[9px]

            font-black

            uppercase

            tracking-[0.15em]

            text-[#45ff8b]

            shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_0_22px_rgba(0,255,102,0.05)]

            backdrop-blur-xl

            sm:text-[10px]
            lg:text-[11px]
          `}
        >
          <Network
            className={`
              h-3.5
              w-3.5

              sm:h-4
              sm:w-4
            `}
          />

          TRUSTED NETWORK
        </div>

        {/* TITLE */}

        <h2
          className={`
            text-[40px]

            font-bold

            leading-[0.98]

            tracking-[-0.055em]

            text-[#f4f8f5]

            sm:text-[48px]
            md:text-[56px]
            lg:text-[62px]
            xl:text-[68px]
          `}
        >
          Our{" "}
          <span
            className={`
              bg-gradient-to-r

              from-[#00FF66]
              via-[#37ff8c]
              to-[#86ffbb]

              bg-clip-text

              text-transparent

              drop-shadow-[0_0_26px_rgba(0,255,102,0.13)]
            `}
          >
            Affiliates
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p
          className={`
            mx-auto

            mt-4

            max-w-[730px]

            text-[14px]

            leading-[1.75]

            text-[#b0c0b6]

            sm:text-[15px]
            md:text-[15.5px]
            lg:text-[16px]
          `}
        >
          A curated network of studios, technology partners,
          builders and creative teams connected through precision,
          innovation and premium execution.
        </p>
      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div
        className={`
          relative
          z-10

          w-full
        `}
      >
        <AffiliateRow
          items={rowOne}
          duration={34}
        />

        <AffiliateRow
          items={rowTwo}
          reverse
          duration={37}
        />
      </div>

      {/* =====================================================
          STATUS
      ===================================================== */}

      <div
        className={`
          relative
          z-10

          mx-auto

          mt-6

          flex

          w-fit

          items-center

          gap-2.5

          rounded-full

          border
          border-white/5

          bg-white/5

          px-4
          py-2.5

          font-mono

          text-[8px]

          font-semibold

          uppercase

          tracking-[0.14em]

          text-white/40

          shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_8px_25px_rgba(0,0,0,0.14)]

          backdrop-blur-xl

          sm:text-[9px]
          lg:text-[10px]
        `}
      >
        <span
          className={`
            relative

            flex

            h-2
            w-2
          `}
        >
          <span
            className={`
              absolute

              inline-flex

              h-full
              w-full

              animate-ping

              rounded-full

              bg-[#00FF66]

              opacity-30
            `}
          />

          <span
            className={`
              relative

              inline-flex

              h-2
              w-2

              rounded-full

              bg-[#00FF66]

              shadow-[0_0_8px_rgba(0,255,102,0.8)]
            `}
          />
        </span>

        {affiliates.length} AFFILIATE PARTNERS

        <Sparkles
          className={`
            h-3.5
            w-3.5

            text-[#00FF66]/60
          `}
        />
      </div>

      {/* =====================================================
          MARQUEE CSS
      ===================================================== */}

      <style jsx global>{`
        @keyframes affiliate-marquee-forward {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes affiliate-marquee-reverse {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .affiliate-track-forward {
          animation: affiliate-marquee-forward
            var(--affiliate-speed) linear infinite;
        }

        .affiliate-track-reverse {
          animation: affiliate-marquee-reverse
            var(--affiliate-speed) linear infinite;
        }

        /*
         * Keep animation perfectly smooth.
         */

        .affiliate-track {
          will-change: transform;

          transform: translate3d(0, 0, 0);

          backface-visibility: hidden;

          -webkit-backface-visibility: hidden;

          perspective: 1000px;

          -webkit-perspective: 1000px;
        }

        /*
         * Each copy has exactly one unique row.
         * Clone is only used after the first complete row.
         */

        .affiliate-copy {
          flex: 0 0 auto;

          box-sizing: border-box;
        }

        /*
         * Pause only when user intentionally inspects.
         */

        .affiliate-row:hover .affiliate-track {
          animation-play-state: paused;
        }

        /*
         * Edge fading.
         */

        .affiliate-row {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 3.5%,
            black 96.5%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 3.5%,
            black 96.5%,
            transparent 100%
          );
        }

        /*
         * Prevent rendering artifacts on logo cards.
         */

        .affiliate-glass-card {
          -webkit-font-smoothing: antialiased;

          backface-visibility: hidden;

          -webkit-backface-visibility: hidden;

          transform: translateZ(0);
        }

        @media (max-width: 640px) {
          .affiliate-row {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 1.5%,
              black 98.5%,
              transparent 100%
            );

            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 1.5%,
              black 98.5%,
              transparent 100%
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .affiliate-track {
            animation-play-state: paused !important;
          }

          .affiliate-glass-card {
            transform: none !important;

            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}