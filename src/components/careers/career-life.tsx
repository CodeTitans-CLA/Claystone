"use client";

import Image from "next/image";

const images = [
  {
    src: "/images/careers/studio-01.jpg",
    label: "STUDIO / 001",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    src: "/images/careers/studio-02.jpg",
    label: "TEAM / 002",
    className: "lg:col-span-5",
  },
  {
    src: "/images/careers/studio-03.jpg",
    label: "PROCESS / 003",
    className: "lg:col-span-5",
  },
  {
    src: "/images/careers/studio-04.jpg",
    label: "MOMENTS / 004",
    className: "lg:col-span-4",
  },
  {
    src: "/images/careers/team-01.jpg",
    label: "PEOPLE / 005",
    className: "lg:col-span-8",
  },
];

export default function CareerLife() {
  return (
    <section
      id="life-at-studio"
      className="relative overflow-hidden border-b border-white/10 bg-[#050706] py-14 lg:py-18"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              03 / LIFE AT THE STUDIO
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1] tracking-[-0.035em] text-white">
              Work is only
              <br />
              <span className="text-[#00ff87]">part of it.</span>
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#7c8981]">
            We build together, learn together and occasionally step away from
            the screen. The studio is designed around people first.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-12">
          {images.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden border border-white/[0.08] bg-[#070b08] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.16em] text-white/70">
                {image.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}