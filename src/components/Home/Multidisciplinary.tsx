'use client';
import React, { useState } from 'react';

interface Pillar {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProtocolStage {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export default function WhyMultidisciplinary(): React.ReactElement {
  const [activeStage, setActiveStage] = useState<number>(5); // Index 5 is Deliver (06)

  const pillars: Pillar[] = [
    {
      id: 1,
      icon: (
        <svg
          className="w-5 h-5 text-[#00e676]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: 'Architectural Rigor',
      description:
        'Every pixel and beam is bound to strict structural tolerances, eliminating costly site adjustments or digital technical debt.',
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-5 h-5 text-[#00e676]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {}
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Pure Performance',
      description:
        'We reject slow website frameworks and inefficient CAD files. Our deliverables are optimized for hyper-velocity and zero latency.',
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-5 h-5 text-[#00e676]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: 'Unified Pipeline',
      description:
        'One team that understands both Revit files and GitHub pull requests. Seamless coordination across design disciplines.',
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-5 h-5 text-[#00e676]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Venture Grade Finish',
      description:
        'Bespoke aesthetic pedigree that gives your projects instant institutional credibility and market distinction.',
    },
  ];

  const stages: ProtocolStage[] = [
    {
      number: '01 //',
      title: 'DISCOVER',
      description: 'Spatial audit & technology scoping.',
    },
    {
      number: '02 //',
      title: 'PLAN',
      description: 'Zoning, schematics & UX wireframes.',
    },
    {
      number: '03 //',
      title: 'DESIGN',
      description: 'BIM 3D modeling & hi-fi UI prototypes.',
    },
    {
      number: '04 //',
      title: 'BUILD',
      description: 'CAD drawings & full-stack code implementation.',
    },
    {
      number: '05 //',
      title: 'REFINE',
      description: 'MEP coordination & performance QA audits.',
    },
    {
      number: '06 //',
      title: 'DELIVER',
      description: 'Permits approved & production cloud deployment.',
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0f0e] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00e676]/10 via-[#0c0f0e] to-[#0c0f0e] text-white font-sans py-16 px-4 sm:px-6 lg:px-12 antialiased selection:bg-[#00e676] selection:text-[#0c0f0e] relative overflow-hidden">
      {}
      <style>{`
        @keyframes comet-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .comet-card {
          position: relative;
          border-radius: 1.5rem;
          background: #141816;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .comet-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: conic-gradient(
            from 0deg at 50% 50%,
            rgba(0, 230, 118, 0) 0deg,
            rgba(0, 230, 118, 0) 280deg,
            rgba(0, 230, 118, 0.5) 330deg,
            #00e676 360deg
          );
          border-radius: calc(1.5rem + 2px);
          animation: comet-rotate 3s linear infinite;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .comet-card:hover::before {
          opacity: 1;
        }
        .comet-card-inner {
          position: relative;
          z-index: 1;
          border-radius: 1.5rem;
          background: #141816;
          height: 100%;
        }
      `}</style>

      {}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e676]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-[#00e676] font-semibold text-xs tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00e676] inline-block shadow-[0_0_8px_rgba(0,230,118,0.8)]"></span>
            THE CLAYSTONE STANDARD
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            Why Multidisciplinary Works Better.
          </h1>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="comet-card group hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(0,230,118,0.3)] cursor-pointer"
            >
              <div className="comet-card-inner p-8 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-green-500/30 flex items-center justify-center mb-6 group-hover:border-[#00e676]/50 transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00e676] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[#9ca3af] text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="bg-[#141816] rounded-[32px] border border-zinc-800/80 p-6 sm:p-10 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800/80">
            <div>
              <div className="flex items-center gap-2 text-[#00e676] font-semibold text-[11px] tracking-widest uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] inline-block"></span>
                METHODOLOGY
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                The 6-Stage Execution Protocol
              </h2>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-zinc-400">
              <span className="hover:text-white transition-colors cursor-pointer">ITERATIVE</span>
              <span className="text-zinc-600">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">TRANSPARENT</span>
              <span className="text-zinc-600">•</span>
              <span className="text-[#00e676]">PRECISE</span>
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {stages.map((stage, index) => {
              const isActive = activeStage === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    stage.highlight || isActive
                      ? 'bg-zinc-900/90 border-[#00e676]/50 shadow-[0_0_20px_rgba(0,230,118,0.15)]'
                      : 'bg-zinc-950/60 border-zinc-800/80 hover:border-green-700 hover:shadow-[0_0_20px_rgba(0,230,118,0.15)]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-[#00e676] mb-4 tracking-wider">
                      {stage.number}
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-wide mb-2">
                      {stage.title}
                    </h4>
                    <p
                      className={`text-[11px] sm:text-xs leading-relaxed ${stage.highlight || isActive ? 'text-[#00e676]/90 font-medium' : 'text-[#9ca3af]'}`}
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
