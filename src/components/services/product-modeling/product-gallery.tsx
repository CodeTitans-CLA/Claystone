"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  src: string;
  title: string;
  category: string;
  number: string;
};

const products: Product[] = [
  {
    src: "/images/product-modeling/product-01.jpg",
    title: "Product Visualization",
    category: "PRODUCT MODELING",
    number: "01",
  },
  {
    src: "/images/product-modeling/product-02.jpg",
    title: "Technical Product",
    category: "3D MODELING",
    number: "02",
  },
  {
    src: "/images/product-modeling/product-03.jpg",
    title: "Digital Asset",
    category: "VISUALIZATION",
    number: "03",
  },
  {
    src: "/images/product-modeling/product-04.jpg",
    title: "Product Render",
    category: "RENDERING",
    number: "04",
  },
  {
    src: "/images/product-modeling/product-05.jpg",
    title: "Detailed Modeling",
    category: "HIGH POLY",
    number: "05",
  },
  {
    src: "/images/product-modeling/product-06.png",
    title: "Interactive Product",
    category: "WEB 3D",
    number: "06",
  },
  {
    src: "/images/product-modeling/product-07.jpg",
    title: "Product Development",
    category: "DIGITAL ASSET",
    number: "07",
  },
  {
    src: "/images/product-modeling/product-08.jpg",
    title: "Final Visualization",
    category: "3D RENDER",
    number: "08",
  },
];

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeProduct =
    activeIndex !== null ? products[activeIndex] : null;

  const activeProjectNumber =
    activeIndex !== null ? activeIndex + 1 : 0;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (current + 1) % products.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (
            (current - 1 + products.length) %
            products.length
          );
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section
      id="selected-work"
      className="relative overflow-hidden bg-[#070a08] py-14 lg:py-18 border-y border-white/30"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute right-[-200px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#00ff87]/[0.035] blur-[140px]" />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#00ff87]" />

              <span className="font-mono text-[9px] tracking-[0.24em] text-">
                SELECTED WORK
              </span>
            </div>

            <h2 className="text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              Built with{" "}
              <span className="text-[#00ff87]">
                Precision.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            {/* <p className="text-sm leading-7 text-white/45">
              A curated selection of product models, digital
              assets and visualization work created for modern
              products, brands and digital experiences.
            </p> */}

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#00ff87]/60" />

              <span className="font-mono text-[8px] tracking-[0.16em] text-[#00ff87]">
                08 / SELECTED PROJECTS
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            REGULAR CARD GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <button
              key={product.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-sm border border-white/40 bg-[#0a0e0b] text-left outline-none transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff87]/40 hover:shadow-[0_20px_60px_rgba(0,255,135,0.08)] focus-visible:border-[#00ff87]"
            >
              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="relative aspect-[4/3] overflow-hidden bg-[#0c100d]">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Green hover tint */}
                <div className="absolute inset-0 bg-[#00ff87]/0 transition-colors duration-500 group-hover:bg-[#00ff87]/[0.035]" />

               

                {/* View indicator */}
                <div className="absolute right-4 top-4 flex items-center gap-2 opacity-60 transition-all duration-500 group-hover:opacity-100">
                  <span className="font-mono text-[7px] tracking-[0.16em] text-white/70">
                    VIEW
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[#00ff87] group-hover:bg-[#00ff87] group-hover:text-[#031008]">
                    ↗
                  </span>
                </div>

                {/* Corner frame */}
                <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#00ff87]/0 transition-all duration-500 group-hover:border-[#00ff87]/70" />

                <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-[#00ff87]/0 transition-all duration-500 group-hover:border-[#00ff87]/70" />

                <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#00ff87]/0 transition-all duration-500 group-hover:border-[#00ff87]/70" />

                <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#00ff87]/0 transition-all duration-500 group-hover:border-[#00ff87]/70" />

                {/* Center hover icon */}
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-[#00ff87]/60 bg-black/30 text-[#00ff87] opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  ↗
                </div>
              </div>

              {/* =================================================
                  CARD INFORMATION
              ================================================== */}

              <div className="relative border-t border-white/[0.06] px-4 py-4">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#00ff87]">
                  {product.category}
                </span>

                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-[-0.01em] text-white">
                    {product.title}
                  </h3>

                  <span className="shrink-0 text-xs text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#00ff87]">
                    →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}


      </div>

      {/* =========================================================
          FULLSCREEN VIEWER
      ========================================================== */}

      {activeProduct && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/[0.97] p-4 backdrop-blur-xl sm:p-8 lg:p-12"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProduct.title} preview`}
          onClick={() => setActiveIndex(null)}
        >
          {/* Top left information */}
          <div className="absolute left-5 top-5 z-30 sm:left-8 sm:top-8">
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#00ff87]">
              {activeProduct.number} / {activeProduct.category}
            </span>

            <h3 className="mt-2 text-lg font-medium text-white sm:text-xl">
              {activeProduct.title}
            </h3>
          </div>

          {/* Close */}
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 z-40 flex h-11 w-11 items-center justify-center border border-white/15 bg-black/40 text-xl text-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#00ff87] hover:bg-[#00ff87] hover:text-[#031008] sm:right-8 sm:top-8"
          >
            ×
          </button>

          {/* Image */}
          <div
            className="relative h-[72vh] w-full max-w-[1500px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeProduct.src}
              alt={activeProduct.title}
              fill
              priority
              sizes="95vw"
              className="object-contain"
            />
          </div>

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous project"
            onClick={(event) => {
              event.stopPropagation();

              setActiveIndex((current) => {
                if (current === null) return current;

                return (
                  (current - 1 + products.length) %
                  products.length
                );
              });
            }}
            className="absolute left-4 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/50 text-lg text-white/60 backdrop-blur-md transition-all duration-300 hover:border-[#00ff87] hover:bg-[#00ff87] hover:text-[#031008] sm:left-8"
          >
            ←
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next project"
            onClick={(event) => {
              event.stopPropagation();

              setActiveIndex((current) => {
                if (current === null) return current;

                return (current + 1) % products.length;
              });
            }}
            className="absolute right-4 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/50 text-lg text-white/60 backdrop-blur-md transition-all duration-300 hover:border-[#00ff87] hover:bg-[#00ff87] hover:text-[#031008] sm:right-8"
          >
            →
          </button>

          {/* Bottom info */}
          <div className="absolute bottom-5 left-5 right-5 z-30 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="font-mono text-[8px] tracking-[0.16em] text-white/30">
                PRODUCT MODELING PORTFOLIO
              </p>

              <p className="mt-1 font-mono text-[8px] tracking-[0.14em] text-white/20">
                ← → NAVIGATE &nbsp;&nbsp; ESC CLOSE
              </p>
            </div>

            <span className="font-mono text-[9px] text-[#00ff87]">
              {String(activeProjectNumber).padStart(2, "0")} /{" "}
              {String(products.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}