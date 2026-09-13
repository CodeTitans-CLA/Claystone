'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import logoWhite from '../../../public/assets/logo-white.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Mouse tracking for interactive spotlight glow effect on the header wrapper
  const headerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 sm:pt-6 transition-all duration-500 overflow-hidden font-sans"
    >
      {/* Interactive Mouse-Following Spotlight Gradient Glow */}
      <div
        className="absolute pointer-events-none -inset-px transition-opacity duration-500 rounded-2xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 102, 0.15), transparent 70%)`,
        }}
      />

      <div
        className={`w-full max-w-[1600px] mx-auto flex items-center justify-between px-7 py-4 rounded-2xl transition-all duration-500 relative backdrop-blur-2xl ${
          scrolled
            ? 'bg-[#000000]/90 border border-[#162b1e] shadow-[0_20px_50px_rgba(0,0,0,0.9)] shadow-[0_0_30px_rgba(0,255,102,0.06)]'
            : 'bg-green-500/10 border border-[#121f17]'
        }`}
      >
        {/* Animated Gradient Border Overlay */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-gradient-to-r from-[#00FF66]/30 via-transparent to-[#00FF66]/20 opacity-80 animate-pulse" />

        {/* Logo Section with Glow Reflection */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <Image src={logoWhite} width={220} />
        </Link>

        {/* Desktop Navigation Links with Modern Hover Micro-interactions */}
        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-gray-300 relative z-10">
          {['Home', 'Service', 'Solutions', 'Company', 'Career'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative uppercase py-1 group transition-colors duration-300 hover:text-[#00FF66]"
            >
              <span className="relative z-10 flex items-center gap-1">{item}</span>
              {/* Expanding Neon Underline Glow */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF66] to-transparent transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00FF66]" />
            </a>
          ))}
        </nav>

        {/* Right Action: Ultra-Premium Glowing CTA Button */}
        <div className="hidden lg:flex items-center relative z-10">
          <a
            href="#request-demo"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider text-black uppercase rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* Neon Green Gradient Shifting Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#00FF66] via-[#2bff88] to-[#00cc52] transition-all duration-500 shadow-[0_0_25px_rgba(0,255,102,0.4)] group-hover:shadow-[0_0_40px_rgba(0,255,102,0.7)]" />

            {/* Light Beam Shimmer Effect running across button */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-[30deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />

            <Link
              href="/contact"
              className="relative z-10 flex items-center gap-2 font-bold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              Request Demo
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </a>
        </div>

        {/* Mobile Hamburger Trigger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative z-10 p-2.5 text-gray-300 hover:text-[#00FF66] transition-colors bg-white/5 rounded-xl border border-white/10 hover:border-[#00FF66]/40 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00FF66]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Modal Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-3 bg-[#0c0f0e]/95 backdrop-blur-2xl border border-[#162b1e] rounded-2xl p-6 shadow-2xl lg:hidden z-50 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-200">
            {['Platform', 'Solutions', 'Resources', 'Company'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex uppercase items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-[#00FF66] transition-colors"
              >
                <span>{item}</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FF66] via-[#2bff88] to-[#00cc52] text-black font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,255,102,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
