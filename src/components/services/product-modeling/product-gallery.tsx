"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    src: "/images/product-modeling/product-01.jpg",
    title: "Product Visualization",
    category: "PRODUCT MODELING",
    number: "01",
    size: "large",
  },
  {
    src: "/images/product-modeling/product-02.jpg",
    title: "Technical Product",
    category: "3D MODELING",
    number: "02",
    size: "small",
  },
  {
    src: "/images/product-modeling/product-03.jpg",
    title: "Digital Asset",
    category: "VISUALIZATION",
    number: "03",
    size: "small",
  },
  {
    src: "/images/product-modeling/product-04.jpg",
    title: "Product Render",
    category: "RENDERING",
    number: "04",
    size: "medium",
  },
  {
    src: "/images/product-modeling/product-05.jpg",
    title: "Detailed Modeling",
    category: "HIGH POLY",
    number: "05",
    size: "medium",
  },
  {
    src: "/images/product-modeling/product-06.png",
    title: "Interactive Product",
    category: "WEB 3D",
    number: "06",
    size: "large",
  },
  {
    src: "/images/product-modeling/product-07.jpg",
    title: "Product Development",
    category: "DIGITAL ASSET",
    number: "07",
    size: "small",
  },
  {
    src: "/images/product-modeling/product-08.jpg",
    title: "Final Visualization",
    category: "3D RENDER",
    number: "08",
    size: "small",
  },
];

export default function ProductGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section
      id="selected-work"
      className="relative bg-[#070a08] py-14 lg:py-18
      "
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              SELECTED WORK
            </span>

            <h2 className="mt-5 text-[clamp(48px,6vw,82px)] font-semibold leading-[1.05] tracking-wide">
              Built with
              <br />
              <span className="text-[#00ff87]">precision.</span>
            </h2>
          </div>

          <div className="self-end">
            <p className="max-w-md text-sm leading-7 text-[#7c8981]">
              A selection of product models, digital assets and visualization
              work created for modern products, brands and digital
              experiences.
            </p>

            <span className="mt-6 block font-mono text-[9px] tracking-[0.15em] text-[#00ff87]">
              08 / SELECTED PROJECTS
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[110px] lg:grid-cols-12">
          {products.map((product) => {
            const sizeClasses =
              product.size === "large"
                ? "col-span-2 row-span-3 lg:col-span-7 lg:row-span-6"
                : product.size === "medium"
                  ? "col-span-2 row-span-2 lg:col-span-5 lg:row-span-3"
                  : "col-span-1 row-span-2 lg:col-span-5 lg:row-span-3";

            return (
              <button
                key={product.src}
                type="button"
                onClick={() => setActiveImage(product.src)}
                className={`group relative min-h-0 overflow-hidden border border-white/5 bg-[#090d0a] text-left ${sizeClasses}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 60vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 transition duration-500 group-hover:bg-black/20" />

                {/* Green hover glow */}
                <div className="absolute inset-0 bg-[#00ff87]/0 transition duration-500 group-hover:bg-[#00ff87]/5" />

                {/* Top data */}
                <div className="absolute left-5 right-5 top-5 flex justify-between">
                  <span className="font-mono text-[9px] text-[#00ff87]">
                    {product.number}
                  </span>

                  <span className="font-mono text-[8px] tracking-[0.12em] text-white/60 transition duration-300 group-hover:text-[#00ff87]">
                    VIEW ↗
                  </span>
                </div>

                {/* Corner */}
                <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#00ff87]/60" />

                <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#00ff87]/60" />

                {/* Bottom information */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-[8px] font-semibold tracking-[0.16em] text-[#00ff87]">
                      {product.category}
                    </span>

                    <h3 className="mt-1 text-base font-medium text-white sm:text-lg">
                      {product.title}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#00ff87]/30 text-[#00ff87] transition duration-300 group-hover:rotate-45 group-hover:bg-[#00ff87] group-hover:text-[#031008]">
                    ↗
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen viewer */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 z-10 border border-[#00ff87]/30 px-4 py-2 font-mono text-[9px] tracking-[0.12em] text-[#00ff87] transition hover:bg-[#00ff87] hover:text-[#031008] sm:right-8 sm:top-8"
          >
            CLOSE ×
          </button>

          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Product modeling project"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}