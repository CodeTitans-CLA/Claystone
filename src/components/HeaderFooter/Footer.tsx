'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logoWhite from '../../../public/assets/logo-white.png';

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0c0f0e] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00e676]/5 via-[#0c0f0e] to-[#0c0f0e] text-white font-sans pt-20 pb-12 px-4 sm:px-6 lg:px-12 antialiased border-t border-zinc-800/80 relative overflow-hidden">
      {/* Background Glow Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#00e676]/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Top Newsletter / CTA Row */}
        <div className="bg-[#141816] rounded-3xl border border-zinc-800/80 p-8 sm:p-12 mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e676]/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#00e676] font-semibold text-xs tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00e676] inline-block shadow-[0_0_8px_rgba(0,230,118,0.8)]"></span>
              STAY AHEAD OF THE CURVE
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              Ready to engineer your next milestone?
            </h3>
            <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed">
              Subscribe for exclusive architectural briefings, engineering notes, and advanced
              technical insights directly to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="bg-zinc-900/90 border border-[#00e676]/50 rounded-2xl p-4 text-center text-[#00e676] text-sm font-semibold shadow-[0_0_20px_rgba(0,230,118,0.15)]">
                ✓ Successfully subscribed to the Claystone briefing.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00e676] transition-colors flex-grow"
                />
                <button
                  type="submit"
                  className="bg-[#00e676] text-[#0c0f0e] font-bold px-7 py-3.5 rounded-2xl text-sm transition-all hover:bg-[#1de9b6] shadow-lg shadow-[#00e676]/20 cursor-pointer whitespace-nowrap"
                >
                  Get Access
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 pb-12 border-b border-zinc-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src={logoWhite} width={200} />
            </div>
            <p className="text-[#9ca3af] text-sm leading-relaxed max-w-sm mb-6">
              A multidisciplinary practice fusing high-performance web engineering, BIM
              architectural design, and venture-grade execution.
            </p>
            <div className="flex items-center gap-4 text-zinc-400 text-xs font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00e676]"></span> BERLIN
              </span>
              <span>•</span>
              <span>SAN FRANCISCO</span>
              <span>•</span>
              <span>LONDON</span>
            </div>
          </div>

          {/* Links Col 1: Disciplines */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-widest text-[#00e676] uppercase mb-5">
              Disciplines
            </h4>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Architecture &amp; BIM
                </a>
              </li>
              <li>
                <a href="#webdev" className="hover:text-white transition-colors">
                  Full-Stack Web Dev
                </a>
              </li>
              <li>
                <a href="#cad" className="hover:text-white transition-colors">
                  3D CAD &amp; Engineering
                </a>
              </li>
              <li>
                <a href="#spatial" className="hover:text-white transition-colors">
                  Spatial Computing
                </a>
              </li>
              <li>
                <a href="#ecommerce" className="hover:text-white transition-colors">
                  Headless Commerce
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Company */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-widest text-[#00e676] uppercase mb-5">
              Protocol
            </h4>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  6-Stage Protocol
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors">
                  The Claystone Standard
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Selected Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  Careers{' '}
                  <span className="text-[10px] bg-[#00e676]/20 text-[#00e676] px-2 py-0.5 rounded-full font-bold">
                    HIRING
                  </span>
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition-colors">
                  Press &amp; Media
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Connect */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-widest text-[#00e676] uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Network
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Discord Community
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Direct Inquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Claystone Group Inc. All rights reserved. Built with
            precision.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#security" className="hover:text-zinc-300 transition-colors">
              Security Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
