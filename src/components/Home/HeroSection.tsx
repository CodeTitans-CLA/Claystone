// "use client";

// import Hero3DScene from "./Hero3DScene";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#020504] text-white">

//       {/* =====================================
//           BACKGROUND
//       ====================================== */}

//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(0,255,145,0.09),transparent_32%)]" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,145,0.045),transparent_30%)]" />

//         <div className="absolute inset-0 bg-[linear-gradient(115deg,#020504_0%,#030806_45%,#020504_100%)]" />
//       </div>

//       {/* =====================================
//           THREE.JS
//       ====================================== */}

//       <div className="pointer-events-none absolute inset-0 z-10">
//         <Hero3DScene />
//       </div>

//       {/* =====================================
//           HERO CONTENT
//       ====================================== */}

//       <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:px-16">

//         <div className="max-w-[620px]">

//           {/* Eyebrow */}

//           <div className="mb-7 flex items-center gap-3">
//             <span className="h-px w-10 bg-[#00ff91]" />

//             <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#00ff91]">
//               Architecture · Engineering · Construction
//             </span>
//           </div>

//           {/* Heading */}

//           <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[86px]">

//             We build

//             <span className="block text-white/55">
//               what comes next.
//             </span>

//           </h1>

//           {/* Description */}

//           <p className="mt-8 max-w-[540px] text-base leading-7 text-white/55 sm:text-lg">
//             From architectural vision to precision
//             construction, we transform ambitious
//             ideas into spaces built to last.
//           </p>

//           {/* CTA */}

//           <div className="mt-10 flex flex-wrap items-center gap-4">

//             <a
//               href="#projects"
//               className="group inline-flex items-center gap-4 rounded-full bg-[#00ff91] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-6 hover:bg-[#55ffb4]"
//             >
//               Explore our work

//               <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </a>

//             <a
//               href="#contact"
//               className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/75 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
//             >
//               Start a project
//             </a>

//           </div>

//           {/* Small architectural metadata */}

//           <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/35">

//             <span>
//               25+ Years
//             </span>

//             <span>
//               Residential
//             </span>

//             <span>
//               Commercial
//             </span>

//             <span>
//               Bahamas
//             </span>

//           </div>

//         </div>
//       </div>

//       {/* =====================================
//           EDGE GRADIENT
//       ====================================== */}

//       <div className="pointer-events-none absolute inset-y-0 right-0 z-[15] hidden w-[42%] bg-gradient-to-r from-[#020504] via-transparent to-transparent lg:block" />

//       {/* Bottom fade */}

//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-32 bg-gradient-to-t from-[#020504] to-transparent" />

//     </section>
//   );
// }





// =============>Second Attempt by Gemini<===========================

'use client';

import React from 'react';
import Hero3DScene from './Hero3DScene';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#030805] text-white flex items-center overflow-hidden">
      {/* Interactive 3D Background & Right-Side Visuals */}
      <Hero3DScene />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtext & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            {/* Tech Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00ff87]">
                Next-Gen Architectural CAD Core
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Architecting Digital <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] via-[#60efff] to-white">
                Spatial Ecosystems
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
              Seamlessly bridge architectural massing with real-time digital intelligence. 
              Interactive 3D model clustering backed by high-performance spatial nodes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#explore"
                className="px-8 py-4 rounded-xl bg-[#00ff87] text-[#030805] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#33ff9f] hover:shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:-translate-y-0.5"
              >
                Launch Platform
              </a>
              <a
                href="#documentation"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-medium text-sm tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5"
              >
                Explore Architecture
              </a>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <p className="text-2xl font-bold text-[#00ff87]">60 FPS</p>
                <p className="text-xs text-gray-400">WebGL Optimized</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">0.02ms</p>
                <p className="text-xs text-gray-400">Latency Core</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00ff87]">100%</p>
                <p className="text-xs text-gray-400">CAD Interactive</p>
              </div>
            </div>

          </div>

          {/* Right Column: Reserved space for 3D visual focus on desktop */}
          <div className="hidden lg:block lg:col-span-5 h-[600px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}





