'use client';
import React, { useState } from 'react';

type ProjectCategory = 'all' | 'architecture' | 'webdev' | 'cad';
type ProjectType = 'image' | 'dashboard' | 'ecommerce' | 'cad';

interface Project {
  id: number;
  category: ProjectCategory;
  colSpan: string;
  image?: string;
  fallbackImage?: string;
  tag: string;
  year?: string;
  title: string;
  description: string;
  type: ProjectType;
}

interface FilterTab {
  id: ProjectCategory;
  label: string;
}

export default function CaseStudies(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      id: 1,
      category: 'architecture',
      colSpan: 'lg:col-span-8',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://placehold.co/1200x800/141816/00e676?text=Vestra+Pavilion',
      tag: 'ARCHITECTURE // BERLIN • MUNICH',
      year: '2024',
      title: 'Vestra Pavilion & Spatial Labs',
      description:
        'Complete 3D architectural design, full BIM coordination, and exterior envelope engineering for a 4,200m² experimental computing facility.',
      type: 'image',
    },
    {
      id: 2,
      category: 'webdev',
      colSpan: 'lg:col-span-4',
      tag: 'WEB DEV // SAN FRANCISCO',
      title: 'Chronos Quantum Engine',
      description:
        'Full-stack Next.js web application with 60fps real-time data streaming and custom WebGL visualization canvases.',
      type: 'dashboard',
    },
    {
      id: 3,
      category: 'architecture',
      colSpan: 'lg:col-span-4',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'https://placehold.co/800x600/141816/00e676?text=Nordic+Horizon',
      tag: 'ARCHITECTURE // OSLO',
      title: 'Nordic Horizon Residence',
      description:
        'Structural cantilever engineering and photoreal rendering for an alpine coastal private residence.',
      type: 'image',
    },
    {
      id: 4,
      category: 'webdev',
      colSpan: 'lg:col-span-4',
      tag: 'E-COMMERCE // LONDON',
      title: 'Aethelgard Commerce',
      description:
        'Headless Shopify storefront with Sub-50ms page transitions and customized 3D product visualizer.',
      type: 'ecommerce',
    },
    {
      id: 5,
      category: 'cad',
      colSpan: 'lg:col-span-4',
      tag: '3D CAD // ENGINEERING',
      title: 'Kinetix Modular Robotic Arm',
      description:
        'Precision mechanical assembly drawings, exploded view simulations, and 3D promotional animation.',
      type: 'cad',
    },
  ];

  const filterTabs: FilterTab[] = [
    { id: 'all', label: 'ALL (65)' },
    { id: 'architecture', label: 'ARCHITECTURE (40)' },
    { id: 'webdev', label: 'WEB DEV (48)' },
    { id: 'cad', label: '3D & CAD (28)' },
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0c0f0e] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00e676]/10 via-[#0c0f0e]/95 to-[#0c0f0e] text-white font-sans py-16 px-4 sm:px-6 lg:px-12 antialiased selection:bg-[#00e676] selection:text-[#0c0f0e] relative overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00e676]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#00e676]/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header and Filters Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#00e676] font-semibold text-xs tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00e676] inline-block shadow-[0_0_8px_rgba(0,230,118,0.8)]"></span>
              SELECTED CASE STUDIES
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.15]">
              Work That Connects Design &amp; Technology.
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                  activeFilter === tab.id
                    ? 'bg-[#00e676] text-[#0c0f0e] border-[#00e676] shadow-lg shadow-[#00e676]/25 font-bold'
                    : 'bg-[#141816]/90 backdrop-blur-sm text-[#9ca3af] hover:text-white hover:bg-zinc-800 border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${project.colSpan} bg-[#141816]/90 backdrop-blur-md rounded-3xl border border-zinc-800/80 overflow-hidden transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 hover:border-[#00e676]/40 hover:shadow-[0_10px_30px_-10px_rgba(0,230,118,0.25)]`}
            >
              {/* Type 1: Image / Pavilion View */}
              {project.type === 'image' && (
                <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      if (project.fallbackImage) {
                        e.currentTarget.src = project.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141816] via-transparent to-black/20"></div>
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#00e676]/90 text-[#0c0f0e] text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-md">
                      {project.tag}
                    </span>
                    {project.year && (
                      <span className="text-xs font-medium text-white/90 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                        YEAR: {project.year}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Type 2: Web Dev Dashboard Visual */}
              {project.type === 'dashboard' && (
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-zinc-950 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-zinc-800 pb-3">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e676]"></span> Chronos Studio
                    </span>
                    <span className="text-[#00e676] font-semibold">LIVE STREAMING</span>
                  </div>
                  <div className="my-auto py-4">
                    <div className="flex items-end justify-between h-20 gap-1">
                      {['40%', '75%', '60%', '90%', '50%', '80%', '30%', '85%'].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: h }}
                          className="w-full bg-[#00e676]/60 rounded-t group-hover:bg-[#00e676] transition-all"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-400">
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[#00e676]">
                      {project.tag}
                    </span>
                    <span>LATENCY: 12ms</span>
                  </div>
                </div>
              )}

              {/* Type 3: E-Commerce Storefront */}
              {project.type === 'ecommerce' && (
                <div className="relative w-full h-64 overflow-hidden bg-zinc-950 p-4 flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div
                      className="absolute right-0 top-0 w-32 h-full opacity-40 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80')`,
                      }}
                    ></div>
                    <div className="flex justify-between items-center z-10 text-[10px] text-zinc-400">
                      <span className="font-bold text-white tracking-widest">FLAGSHIP STORE</span>
                      <span>v2.4</span>
                    </div>
                    <div className="z-10">
                      <span className="px-2.5 py-1 rounded-full bg-[#00e676] text-[#0c0f0e] text-[10px] font-bold tracking-wider uppercase inline-block mb-2 shadow">
                        {project.tag}
                      </span>
                      <div className="text-xs text-white font-semibold">Aethelgard Commerce</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Type 4: 3D CAD Schematic Visual */}
              {project.type === 'cad' && (
                <div className="relative w-full h-64 overflow-hidden bg-zinc-950 p-4 flex flex-col justify-between font-mono">
                  <div className="text-[10px] text-[#00e676]/70 flex justify-between">
                    <span>Assembly | Exploded View</span>
                    <span>Tolerance: ±0.01</span>
                  </div>
                  <div className="my-auto flex items-center justify-center text-[#00e676]/80">
                    <svg
                      className="w-36 h-36 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 011 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></circle>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-400">
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[#00e676]">
                      {project.tag}
                    </span>
                    <span>ISO-9001</span>
                  </div>
                </div>
              )}

              {/* Project Card Text Details Footer */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#00e676] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#9ca3af] text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
