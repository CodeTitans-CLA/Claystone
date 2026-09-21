'use client';

import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: -100, y: -100 });
  
  // 3-ti circle er alada position
  const [circle1, setCircle1] = useState<Position>({ x: -100, y: -100 });
  const [circle2, setCircle2] = useState<Position>({ x: -100, y: -100 });
  const [circle3, setCircle3] = useState<Position>({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setCircle1((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.2,
        y: prev.y + (mousePosition.y - prev.y) * 0.2,
      }));

      setCircle2((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));

      setCircle3((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.05,
        y: prev.y + (mousePosition.y - prev.y) * 0.05,
      }));

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1st Circle - Main Pointer */}
      <div
        className="fixed h-4 w-4 rounded-full bg-[#00FF66] shadow-[0_0_15px_#00FF66] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${circle1.x}px`,
          top: `${circle1.y}px`,
        }}
      />

      {/* 2nd Circle - Medium Ring */}
      <div
        className="fixed h-8 w-8 rounded-full border border-[#2BFF88]/60 bg-[#00FF66]/10 backdrop-blur-[1px] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${circle2.x}px`,
          top: `${circle2.y}px`,
        }}
      />

      {/* 3rd Circle - Outer Glow */}
      <div
        className="fixed h-14 w-14 rounded-full border border-[#00CC52]/30 bg-[#00FF66]/5 blur-[2px] transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${circle3.x}px`,
          top: `${circle3.y}px`,
        }}
      />
    </div>
  );
}