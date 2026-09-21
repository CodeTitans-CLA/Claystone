'use client';

import Hero3DScene from './Hero3DScene';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#030805] text-white flex items-center overflow-hidden">
      
      
      <Hero3DScene />

      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading, Subtext & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            
            {/* Tech Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 backdrop-blur-md pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-[#00ff87]">
                Next-Gen Architectural CAD Core
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] select-none">
              Architecting Digital <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] via-[#7BEDB4] to-white">
                Spatial Ecosystems
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-md text-gray-300 max-w-xl text-justify select-none">
              Seamlessly bridge architectural massing with real-time digital intelligence.
              Interactive 3D model clustering backed by high-performance spatial nodes.
            </p>

            {/* CTA Buttons (pointer-events-auto দেওয়া যেন বাটনে ক্লিক করা যায়) */}
            <div className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto">
              <a
                href="#explore"
                className="group relative inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide text-black rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_40px_rgba(0,255,102,0.55)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00FF66] via-[#2BFF88] to-[#00CC52] transition-all duration-500 shadow-[0_0_25px_rgba(0,255,102,0.4)] group-hover:shadow-[0_0_40px_rgba(0,255,102,0.7)]" />
                <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <span className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-[30deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Launch Platform 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </a>

              <a
                href="#documentation"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-xl overflow-hidden text-white text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,255,102,0.18)]"
              >
                <span className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-[#00FF66] via-[#2BFF88] to-[#00CC52] opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_25px_rgba(0,255,102,0.45)]">
                  <span className="block h-full w-full rounded-[11px] bg-[#030805]/85" />
                </span>
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FF66]/[0.04] via-transparent to-[#00CC52]/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute top-0 -left-[100%] h-full w-1/3 skew-x-[30deg] bg-gradient-to-r from-transparent via-[#2BFF88]/30 to-transparent transition-all duration-1000 ease-out group-hover:left-[160%]" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Architecture
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-[#2BFF88] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#00FF66]">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 w-full max-w-lg border-t border-[#00FF66]/15 pointer-events-auto">
              <div className="text-center group">
                <p className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#00FF66] via-[#2BFF88] to-[#00CC52] bg-clip-text text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,255,102,0.5)]">
                  60 FPS
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-white/65">
                  WebGL Optimized
                </p>
              </div>

              <div className="text-center group relative">
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-8 w-px bg-gradient-to-b from-transparent via-[#00FF66]/20 to-transparent" />
                <p className="text-3xl font-semibold tracking-tight text-white transition-all duration-300 group-hover:text-[#2BFF88] group-hover:drop-shadow-[0_0_12px_rgba(0,255,102,0.4)]">
                  0.02ms
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-white/65">
                  Latency Core
                </p>
                <span className="absolute -right-3 top-1/2 -translate-y-1/2 h-8 w-px bg-gradient-to-b from-transparent via-[#00FF66]/20 to-transparent" />
              </div>

              <div className="text-center group">
                <p className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#00FF66] via-[#2BFF88] to-[#00CC52] bg-clip-text text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,255,102,0.5)]">
                  100%
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-white/65">
                  CAD Interactive
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Completely transparent to mouse so user can easily rotate 3D scene */}
          <div className="hidden lg:block lg:col-span-5 h-[600px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}