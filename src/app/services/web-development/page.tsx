'use client';

import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [typedCode, setTypedCode] = useState<string>('');

  // A comprehensive block of code to trigger vertical scrolling inside the fixed-height monitor screen
  const fullCode = `// Server Component streaming data pipeline & edge runtime initialization
import { cache } from 'react';
import { headers } from 'next/headers';

export async function WebShowcaseViewport() {
  const head = headers();
  const token = head.get('x-edge-auth');
  
  // Initializing high-performance edge compute cache
  const stream = await edgeRuntime.hydrate({
    cache: 'force-cache',
    ttl: 3600,
    region: 'global-edge'
  });

  console.log('[EDGE_TELEMETRY]: Active streams connected at 60.0 FPS');
  console.log('[SECURITY]: Auth token verified successfully.');
  
  return (
    <div className="flex flex-col gap-4 p-4 bg-black/40 rounded-xl border border-emerald-500/30">
      <Canvas3D telemetry={stream.fps} status="ONLINE" />
      <MetricsPanel latency="14ms" throughput="99.9%" />
    </div>
  );
}

export function initializeWorkerCluster() {
  return {
    nodesActive: 284,
    loadBalance: 'optimal',
    fallbackReady: true
  };
}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCode.length) {
        setTypedCode(fullCode.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
        }, 3000);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b09] text-white font-sans selection:bg-emerald-500 selection:text-white relative overflow-x-hidden flex flex-col justify-between p-6 md:p-12">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Hero Container */}
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
        {/* Left Column: Typography, Badges & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111f18] border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            DISCIPLINE // 02 — REACT / NEXT.JS / CLOUD
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Web Design <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              & Development
            </span>
          </h1>

          {/* Subtitle description */}
          <p className="text-gray-400 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            Premium digital experiences focused on strong visual systems, responsive layouts, smooth
            interactions, and high-performance modern web development.
          </p>

          {/* Feature Badges Row */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-300">
            <div className="px-3 py-1.5 rounded-lg bg-[#111814] border border-white/10 flex items-center gap-2">
              <i className="fa-solid fa-bolt text-emerald-400"></i>
              <span>PERFORMANCE / UX / CODE</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#111814] border border-white/10 flex items-center gap-2">
              <i className="fa-solid fa-gauge-high text-emerald-400"></i>
              <span>SUB-100MS TTFB</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#111814] border border-white/10 flex items-center gap-2">
              <i className="fa-solid fa-shield-check text-emerald-400"></i>
              <span>LIGHTHOUSE 100/100</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#111814] border border-white/10 flex items-center gap-2">
              <i className="fa-solid fa-cloud text-emerald-400"></i>
              <span>EDGE READY</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#explore"
              className="px-8 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-500 text-black font-bold transition-all duration-300 shadow-lg shadow-emerald-400/20 flex items-center gap-3 text-sm"
            >
              <span>Explore Web Development</span>
              <i className="fa-solid fa-arrow-down text-xs"></i>
            </a>
            <a
              href="#audit"
              className="px-6 py-4 rounded-xl bg-[#121c17] hover:bg-[#1a2922] border border-white/10 text-gray-200 font-semibold transition-all duration-300 flex items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-code text-emerald-400"></i>
              <span>Request Code Architecture Audit</span>
            </a>
          </div>

          {/* Live Tech Benchmark link */}
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Tech Benchmark (Lighthouse Report)</span>
            <i className="fa-solid fa-arrow-right text-[10px] text-emerald-400"></i>
          </div>

          {/* Bottom Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="bg-[#0e1612] border border-white/10 rounded-xl p-4">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                100/100
              </div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wide mt-1">
                Lighthouse Scores
              </div>
            </div>
            <div className="bg-[#0e1612] border border-white/10 rounded-xl p-4">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                &lt;50ms
              </div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wide mt-1">
                Global Edge TTFB
              </div>
            </div>
            <div className="bg-[#0e1612] border border-white/10 rounded-xl p-4">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                99.99%
              </div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wide mt-1">
                Uptime SLA
              </div>
            </div>
            <div className="bg-[#0e1612] border border-white/10 rounded-xl p-4">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                60+ FPS
              </div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wide mt-1">
                WebGL 3D Smoothness
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic 3D Side-Angled Samsung-style Monitor Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-8">
          <div className="w-full max-w-[540px] perspective-[1200px]">
            {/* Angled Monitor Body */}
            <div className="bg-[#111614] rounded-xl border-[5px] border-[#18231d] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.18)] transform rotate-y-[-14deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0 overflow-hidden flex flex-col">
              {/* Window Top Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#141e18] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[11px] font-mono text-gray-300 ml-2">
                    VERTEX-NODE-OBSERVER // V4.18
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
                  PROD-SYNC
                </div>
              </div>

              {/* Sub-Header info inside panel */}
              <div className="flex items-center justify-between px-4 py-2 text-[11px] font-mono text-gray-400 border-b border-white/5 bg-[#0b120f]">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <i className="fa-solid fa-cube"></i> REACT NEXT.JS ARCHITECTURE
                </span>
                <span>3D VIRTUAL ENGINE</span>
              </div>

              {/* Monitor Screen containing Live Typing Code Animation with strictly fixed height and upward scrolling/hiding */}
              <div className="p-5 bg-[#070b09] font-mono text-xs text-emerald-400 h-[220px] overflow-hidden relative flex flex-col justify-end border-b border-white/10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="absolute top-2 left-5 right-5 flex items-center justify-between text-[10px] text-gray-500 border-b border-white/5 pb-2 bg-[#070b09]/95 z-20">
                  <span className="text-emerald-400/90">
                    // Server Component streaming pipeline
                  </span>
                  <span>UTF-8</span>
                </div>

                <div className="w-full h-full overflow-hidden flex flex-col justify-end pt-8">
                  <pre className="whitespace-pre-wrap leading-relaxed text-gray-200 z-10 font-mono text-[11px]">
                    {typedCode}
                    <span className="inline-block w-2 h-3.5 bg-emerald-400 ml-1 animate-pulse align-middle"></span>
                  </pre>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090f0c] text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  GLOBAL EDGE NODES : 284 ONLINE
                </span>
                <span className="text-emerald-400 font-bold">LATENCY: 14MS</span>
              </div>
            </div>

            {/* Realistic Angled Monitor Stand & V-Shaped Base */}
            <div className="flex flex-col items-center relative z-0">
              {/* Stand Neck (Slanted angle) */}
              <div className="w-14 h-12 bg-gradient-to-b from-[#18231d] to-[#0c120f] transform skew-x-[-6deg] shadow-lg border-x border-emerald-500/20"></div>
              {/* V-Shaped Wide Gaming Pedestal Base */}
              <div className="w-64 h-5 bg-gradient-to-r from-[#0a0f0d] via-[#1c2923] to-[#0a0f0d] rounded-t-xl shadow-[0_20px_30px_rgba(0,0,0,0.8)] border-t border-emerald-500/30 flex justify-center items-center">
                <div className="w-12 h-1 bg-emerald-500/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
