'use client';

import { useState, useRef } from 'react';
import { Hero3DScene } from './Hero3DScene';

export function HeroSection() {
  const [sceneReady, setSceneReady] = useState(false);

  const handleSceneReady = () => {
    setSceneReady(true);
  };

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden bg-transparent">
      {/* 3D Scene Background - Single Canvas */}
      <Hero3DScene onReady={handleSceneReady} />

      {/* Dark vignette gradient - protects text readability on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent/95 to-transparent pointer-events-none z-5" />

      {/* Content Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-start transition-opacity duration-1000 pointer-events-none ${
          sceneReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pointer-events-auto">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">
            {/* Left Content - Clean, readable, prominent */}
            <div className="w-full md:w-[45%] space-y-7 md:space-y-9">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#00ff87]/40 bg-black/50 backdrop-blur">
                <div className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                <span className="text-xs md:text-sm font-mono text-[#00ff87] tracking-wide">
                  ARCHITECTURE × DIGITAL TECHNOLOGY
                </span>
              </div>

              {/* Main Headline - Maximum readability */}
              <div className="space-y-4 md:space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tighter">
                  Designing Spaces.
                  <br className="hidden sm:block" />
                  Building Digital
                  <br className="hidden sm:block" />
                  Experiences.
                </h1>
                <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed max-w-lg font-light">
                  We transform architectural vision into immersive digital experiences. 
                  Premium interaction meets parametric design.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full bg-[#00ff87] text-black font-semibold text-sm md:text-base hover:bg-[#00dd6f] active:bg-[#00cc5f] transition-colors duration-200 whitespace-nowrap"
                >
                  START A PROJECT
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full border border-[#00ff87]/60 text-[#00ff87] font-semibold text-sm md:text-base hover:bg-[#00ff87]/15 active:bg-[#00ff87]/20 transition-colors duration-200 whitespace-nowrap"
                >
                  EXPLORE OUR WORK
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Technical Status - Subtle information */}
              <div className="pt-6 md:pt-8 border-t border-[#00ff87]/15 grid grid-cols-3 gap-6 text-xs md:text-sm">
                <div>
                  <div className="text-[#00ff87] font-mono font-semibold">STATUS</div>
                  <div className="text-gray-500 text-[11px] md:text-xs mt-1 font-light">SYNCHRONIZED</div>
                </div>
                <div>
                  <div className="text-[#00ff87] font-mono font-semibold">GEOMETRY</div>
                  <div className="text-gray-500 text-[11px] md:text-xs mt-1 font-light">PARAMETRIC</div>
                </div>
                <div>
                  <div className="text-[#00ff87] font-mono font-semibold">SYSTEM</div>
                  <div className="text-gray-500 text-[11px] md:text-xs mt-1 font-light">ONLINE</div>
                </div>
              </div>
            </div>

            {/* Right Side - Reserve space for 3D scene */}
            <div className="hidden md:block md:w-[90%] " />
          </div>
        </div>
      </div>

      {/* Floating Tech Panel - Subtle corner element */}
      <div className="fixed bottom-8 right-8 bg-black/70 backdrop-blur-lg border border-[#00ff87]/25 rounded-lg p-4 max-w-xs text-xs font-mono text-[#00ff87] shadow-2xl hidden xl:block pointer-events-auto z-20">
        <div className="text-[11px] text-gray-600 mb-3 tracking-wider">DIGITAL TWIN</div>
        <div className="space-y-1.5 text-[#00ff87] text-xs">
          <div>const studio = {'{'}</div>
          <div className="ml-3 text-gray-400">arch: <span className="text-[#00ff87]">&quot;parametric&quot;,</span></div>
          <div className="ml-3 text-gray-400">web: <span className="text-[#00ff87]">&quot;premium&quot;</span></div>
          <div>{'}'}</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none hidden md:flex">
        <div className="flex flex-col items-center gap-2.5 animate-pulse">
          <span className="text-xs text-gray-700 font-mono tracking-wider">SCROLL</span>
          <svg className="w-5 h-5 text-[#00ff87] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
