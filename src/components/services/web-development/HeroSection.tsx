'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [typedCode, setTypedCode] = useState<string>('');
  const [showIframe, setShowIframe] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const isPausedRef = useRef<boolean>(false);

  // Keep ref in sync with state for timer closures
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const fullCode = `
export async function WebShowcaseViewport() {
  const head = headers();
  const token = head.get('x-edge-auth');
  
  const stream = await edgeRuntime.hydrate({
    cache: 'force-cache',
    ttl: 3600,
    region: 'global-edge'
  });

  return (
    <div className="flex flex-col gap-4 p-4 bg-black/40 rounded-xl border border-emerald-500/30">
      <Canvas3D telemetry={stream.fps} status="ONLINE" />
      <MetricsPanel latency="14ms" throughput="99.9%" />
    </div>
  );
}
}`;

  useEffect(() => {
    let typingInterval: any = null;
    let previewTimer: any = null;
    let currentIndex = 0;

    const runSequence = () => {
      // If paused by mouse hover, check back shortly
      if (isPausedRef.current) {
        typingInterval = setTimeout(runSequence, 300);
        return;
      }

      // Reset state for a new loop iteration
      setShowIframe(false);
      setTypedCode('');
      currentIndex = 0;

      // Start typing animation character by character
      typingInterval = setInterval(() => {
        if (isPausedRef.current) {
          clearInterval(typingInterval);
          // Wait and retry when unpaused
          typingInterval = setTimeout(runSequence, 300);
          return;
        }

        if (currentIndex <= fullCode.length) {
          setTypedCode(fullCode.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);

          // Finished typing, wait briefly before showing preview
          previewTimer = setTimeout(() => {
            if (!isPausedRef.current) {
              setShowIframe(true);

              // Keep preview visible for 6 seconds before looping back to typing
              previewTimer = setTimeout(() => {
                if (!isPausedRef.current) {
                  runSequence();
                } else {
                  // If paused during preview, wait until unpaused
                  const waitForUnpause = setInterval(() => {
                    if (!isPausedRef.current) {
                      clearInterval(waitForUnpause);
                      runSequence();
                    }
                  }, 500);
                }
              }, 6000);
            } else {
              // If paused, wait for unpause
              const waitForUnpause = setInterval(() => {
                if (!isPausedRef.current) {
                  clearInterval(waitForUnpause);
                  runSequence();
                }
              }, 500);
            }
          }, 600);
        }
      }, 4);
    };

    runSequence();

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (previewTimer) clearTimeout(previewTimer);
    };
  }, []);

  const renderHighlightedCode = (code: string) => {
    return code.split('\n').map((line, i) => {
      const highlighted = line
        .replace(
          /\b(export|async|function|return|const|await)\b/g,
          '<span class="text-pink-400 font-semibold">$1</span>'
        )
        .replace(
          /\b(headers|edgeRuntime|hydrate|Canvas3D|MetricsPanel)\b/g,
          '<span class="text-cyan-300">$1</span>'
        )
        .replace(/('[^']*')/g, '<span class="text-amber-300">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>');

      return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted || '&nbsp;' }} />;
    });
  };

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
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            DISCIPLINE // 02 — REACT / NEXT.JS / CLOUD
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
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
              className="px-6 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-500 text-black font-bold transition-all duration-300 shadow-lg shadow-emerald-400/20 flex items-center gap-3 text-sm"
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

        {/* Right Column: Straight Monitor Mockup with Syntax Highlighting & Hover Pause */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-8">
          <div
            className="w-full max-w-[540px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Monitor Body (Straight / Non-angled) */}
            <div className="bg-[#111614] rounded-xl border-[5px] border-[#18231d] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.18)] overflow-hidden flex flex-col relative">
              {/* Hover active indicator badge */}

              {/* Window Top Title Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#141e18] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[10px] font-mono text-gray-300 ml-2">
                    {showIframe ? 'CLAYSTONE-AGENCY // LIVE PREVIEW' : 'Code generated(...)'}
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
                  {showIframe ? 'ONLINE' : 'PROD-SYNC'}
                </div>
              </div>

              {/* Sub-Header info inside panel */}

              {/* Monitor Screen: Fixed height with hidden overflow */}
              <div className="bg-[#070b09] font-mono text-xs text-emerald-400 h-[240px] overflow-hidden relative flex flex-col border-b border-white/10">
                {!showIframe ? (
                  <div className="w-full h-full p-4 overflow-hidden flex flex-col justify-end relative">
                    <div className="absolute top-2 left-4 right-4 flex items-center justify-between text-[10px] text-gray-500 border-b border-white/5 pb-1.5 bg-[#070b09] z-20">
                      <span className="text-emerald-400/90">
                        // Server Component streaming pipeline
                      </span>
                      <span>UTF-8</span>
                    </div>

                    <div className="w-full h-full overflow-hidden flex flex-col justify-end pt-6">
                      <div className="whitespace-pre leading-relaxed font-mono text-[11px]">
                        {renderHighlightedCode(typedCode)}
                        <span className="inline-block w-2 h-3.5 bg-emerald-400 ml-1 align-middle"></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-black relative overflow-y-auto overflow-x-hidden">
                    {/* Scaled desktop wrapper to allow full desktop layout rendering & scrolling */}
                    <div className="w-[1600px] h-[800px]  origin-top-left transform md:scale-[0.315] scale-[0.200] absolute top-0 left-0">
                      <iframe
                        src="https://claystoneagency.vercel.app"
                        title="Claystone Agency Preview"
                        className="w-full h-full border-0 pointer-events-auto"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Panel Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090f0c] text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  GLOBAL EDGE NODES : 284 ONLINE
                </span>
                <span className="text-emerald-400 font-bold">LATENCY: 14MS</span>
              </div>
            </div>

            {/* Straight Monitor Stand & V-Shaped Base */}
            <div className="flex flex-col items-center relative z-0">
              {/* Stand Neck */}
              <div className="w-14 h-12 bg-gradient-to-b from-[#18231d] to-[#0c120f] shadow-lg border-x border-emerald-500/20"></div>
              {/* V-Shaped Wide Pedestal Base */}
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
