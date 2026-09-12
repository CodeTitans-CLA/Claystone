'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f0d]/80 backdrop-blur-md border-b border-[#1f2b23]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wider text-white flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-[#4ade80]"></span>
          CLAY<span className="text-[#4ade80]">STONE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-[#4ade80] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#4ade80] transition-colors">
            Architecture
          </Link>
          <Link href="/services" className="hover:text-[#4ade80] transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-[#4ade80] transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-[#4ade80] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Action Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#141b17] hover:bg-[#1f2b23] text-white border border-[#26352c] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 group"
          >
            Let{`&apos`}s Talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0b0f0d] border-b border-[#1f2b23] px-6 py-6 space-y-4 shadow-2xl">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#4ade80] font-medium py-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#4ade80] font-medium py-2"
          >
            Architecture
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#4ade80] font-medium py-2"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#4ade80] font-medium py-2"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#4ade80] font-medium py-2"
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-[#1f2b23]">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#22c55e] text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2"
            >
              Let{`&apos`}s Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
