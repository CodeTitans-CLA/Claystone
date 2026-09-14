import React from 'react';
import {
  FiLayout,
  FiCloud,
  FiCpu,
  FiShoppingBag,
  FiSmartphone,
  FiBox,
  FiArrowRight,
  FiStar,
} from 'react-icons/fi';

interface DisciplineCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  footerText: string;
  icon: React.ReactNode;
  isPrimary?: boolean;
}

const disciplinesData = [
  {
    number: '01',
    category: 'UI/UX',
    title: 'UI/UX Systems',
    description:
      'Design systems, Figma token mapping, micro-interactions, responsive fluid typography, and accessible component architectures engineered for enterprise design parity.',
    footerText: 'FIGMA → TOKENS → CODE',
    icon: <FiLayout className="w-5 h-5 text-green-400" />,
  },
  {
    number: '02',
    category: 'CLOUD',
    title: 'Full-Stack Dev',
    description:
      'Robust serverless APIs, PostgreSQL/Prisma database design, Auth.js/OAuth integration, edge caching, and scalable cloud microservices crafted for resilience.',
    footerText: 'EDGE MICROSERVICES',
    icon: <FiCloud className="w-5 h-5 text-green-400" />,
  },
  {
    number: '03',
    category: 'REACT 19',
    title: 'Next.js & React',
    description:
      'React 19 Server Components (RSC), App Router streaming, dynamic ISR/SSG rendering, and ultra-fast client hydration yielding zero layout shift and flawless performance.',
    footerText: 'APP ROUTER + RSC',
    icon: <FiCpu className="w-5 h-5 text-green-400" />,
    isPrimary: true,
  },
  {
    number: '04',
    category: 'COMMERCE',
    title: 'Shopify & Headless Commerce',
    description:
      'Custom Liquid & Hydrogen/Storefront API storefrons, custom checkout extensions, Klaviyo syncing, and global multi-currency checkout systems engineered for scale.',
    footerText: 'SHOPIFY HYDROGEN / STOREFRONT API',
    icon: <FiShoppingBag className="w-5 h-5 text-green-400" />,
  },
  {
    number: '05',
    category: 'FLUID LAYOUT',
    title: 'Responsive Design & Cross-Device',
    description:
      'Fluid layouts, zero layout shifts (CLS < 0.01), touch-optimized gestures, Retina display asset serving, and strict cross-browser parity on iOS, macOS, Windows, and Android.',
    footerText: 'CLS < 0.01 GUARANTEED',
    icon: <FiSmartphone className="w-5 h-5 text-green-400" />,
  },
  {
    number: '06',
    category: '3D GRAPHICS',
    title: 'Interactive Web & 3D WebGL',
    description:
      'Three.js canvas integration, GLTF 3D model loaders, GSAP scroll-triggered choreography, and GPU-accelerated canvas shaders tailored for seamless tactile engagement.',
    footerText: 'THREE.JS / GLTF / GSAP',
    icon: <FiBox className="w-5 h-5 text-green-400" />,
  },
];

const CometCard: React.FC<DisciplineCardProps> = ({
  number,
  category,
  title,
  description,
  footerText,
  icon,
  isPrimary,
}) => {
  return (
    <div className="relative group rounded-2xl p-[1px] overflow-hidden bg-zinc-800/80 hover:bg-zinc-700 transition-all duration-300">
      {/* ধূমকেতু বর্ডার অ্যানিমেশন (Comet Glowing Border Effect) */}
      <span className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,transparent_0%,#22c55e_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-comet" />
      </span>

      {/* কার্ডের মূল কন্টেন্ট */}
      <div className="relative h-full bg-[#121212] rounded-2xl p-6 flex flex-col justify-between border border-zinc-800 group-hover:border-zinc-700/50 transition-colors">
        {/* প্রাইমারি কোর ব্যাজ */}
        {isPrimary && (
          <div className="absolute top-4 right-4 bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] tracking-wider px-2.5 py-1 rounded-full font-semibold uppercase flex items-center gap-1 shadow-lg shadow-green-950/50">
            <FiStar className="w-3 h-3 fill-green-400" />
            Primary Core
          </div>
        )}

        <div>
          {/* হেডার সেকশন */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-green-400 font-semibold tracking-wider">
              {number} // {category}
            </span>
            {!isPrimary && (
              <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
                {icon}
              </div>
            )}
          </div>

          {/* টাইটেল এবং ডিসক্রিপশন */}
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">{description}</p>
        </div>

        {/* ফুটার এবং অ্যারো আইকন */}
        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="truncate pr-2">{footerText}</span>
          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all duration-300 shrink-0">
            <FiArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Development() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800/60 pb-8">
          <div>
            <span className="text-xs font-mono text-green-400 font-semibold tracking-widest uppercase block mb-3">
              // Architecture Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Core Web Disciplines
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            Six unified digital engineering disciplines synthesized to create market-leading visual
            prestige and uncompromising speed.
          </p>
        </div>

        {/* কার্ড Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplinesData.map((item, index) => (
            <CometCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
