import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-[#0b0f0d] text-white min-h-screen flex items-center justify-center px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Area */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 bg-[#121c16] border border-[#1f3829] px-3 py-1.5 rounded-full text-xs font-medium text-[#4ade80]">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
            ARCHITECTURE • DIGITAL TECHNOLOGY
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Designing <span className="text-[#4ade80]">Spaces.</span> <br />
            Building <span className="text-white">Digital</span> <br />
            Experiences.
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            From architectural design and precision structural drafting to high-performance
            responsive web infrastructure, Claystone turns vision into engineered reality.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-2"
            >
              START A PROJECT <span>→</span>
            </Link>

            <Link
              href="/portfolio"
              className="bg-[#141b17] hover:bg-[#1f2b23] text-white border border-[#26352c] font-medium px-6 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              EXPLORE OUR WORK <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>

        {/* Right Preview / Mockup Area */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#1f2b23] bg-[#0f1712] shadow-2xl">
            {/* এখানে আপনার ডিজাইন করা স্ক্রিনশট বা ইমেজ দিতে পারেন */}
            <Image
              src="/image_56b54a.jpg"
              alt="Architecture and Digital Tech Interface Preview"
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              priority
            />
            {/* গ্রিন স্প্লিট বা ওভারলে ইফেক্ট চাইলে এখানে কাস্টম ডিভ দিতে পারেন */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-transparent to-transparent opacity-40 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
