"use client";

import Image from "next/image";

interface CompanyImageProps {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function CompanyImage({
  src,
  alt,
  label = "IMAGE PLACEHOLDER",
  className = "",
  sizes = "100vw",
  priority = false,
}: CompanyImageProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#070b08] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,135,.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,135,.07) 1px, transparent 1px)
              `,
              backgroundSize: "45px 45px",
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/[0.04] blur-[90px]" />

          <div className="absolute inset-6 border border-[#00ff87]/10" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#00ff87]/25">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87] shadow-[0_0_14px_#00ff87]" />
            </div>

            <span className="mt-5 block whitespace-nowrap font-mono text-[9px] tracking-[0.2em] text-[#00ff87]/70">
              {label}
            </span>
          </div>
        </>
      )}

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030604]/50 via-transparent to-transparent opacity-70" />

      {/* Technical corners */}
      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[#00ff87]/50" />
      <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-[#00ff87]/50" />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#00ff87]/50" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#00ff87]/50" />
    </div>
  );
}