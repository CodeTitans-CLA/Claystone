'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -100, y: -100 });
    const trail = useRef({ x: -100, y: -100 });
    const rotation = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const handleResize = () => {
            // High-DPI Display (Retina) support
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const render = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // --- ULTRA SMOOTH ELASTIC LERP (No Stutter/Lag) ---
            // 0.12 ভ্যালুটি মাউসের পেছনে নিখুঁত ফ্লুইড ও স্মুথ মোশন দেয়
            trail.current.x += (mouse.current.x - trail.current.x) * 0.12;
            trail.current.y += (mouse.current.y - trail.current.y) * 0.12;

            const mx = mouse.current.x;
            const my = mouse.current.y;
            const tx = trail.current.x;
            const ty = trail.current.y;

            rotation.current += 0.02;

            // --- 1. Connecting Vector Dotted Line ---
            ctx.strokeStyle = 'rgba(0, 255, 102, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(tx, ty);
            ctx.stroke();
            ctx.setLineDash([]); // Reset line dash

            // --- 2. Main Pointer: Glowing Architectural Crosshair ---
            ctx.shadowColor = '#00FF66';
            ctx.shadowBlur = 18; // High Brightness Glow

            // Bright Core Center Dot
            ctx.fillStyle = '#00FF66';
            ctx.beginPath();
            ctx.arc(mx, my, 5, 0, Math.PI * 2);
            ctx.fill();

            // Outer Target Circle
            ctx.strokeStyle = '#00FF66';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(mx, my, 16, 0, Math.PI * 2);
            ctx.stroke();

            // Crosshair Measurement Lines
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(mx - 24, my); ctx.lineTo(mx - 10, my);
            ctx.moveTo(mx + 10, my); ctx.lineTo(mx + 24, my);
            ctx.moveTo(mx, my - 24); ctx.lineTo(mx, my - 10);
            ctx.moveTo(mx, my + 10); ctx.lineTo(mx, my + 24);
            ctx.stroke();

            // Reset Shadow
            ctx.shadowBlur = 0;

            // --- 3. Trailing 3D Wireframe Node (Smooth Follower) ---
            ctx.save();
            ctx.translate(tx, ty);
            ctx.shadowColor = '#00FF66';
            ctx.shadowBlur = 12;

            const size = 24;
            const rot = rotation.current;

            for (let i = 0; i < 3; i++) {
                const angle = rot + (i * Math.PI * 2) / 3;
                const px = Math.cos(angle) * size;
                const py = Math.sin(angle) * size;

                // Spoke Vector Line
                ctx.strokeStyle = 'rgba(0, 255, 102, 0.8)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(px, py);
                ctx.stroke();

                // Structural Joint Dots
                ctx.fillStyle = '#00FF66';
                ctx.beginPath();
                ctx.arc(px, py, 3.5, 0, Math.PI * 2);
                ctx.fill();
            }

            // Outer Structural Blueprint Ring
            ctx.strokeStyle = 'rgba(0, 255, 102, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, size * 1.25, 0, Math.PI * 2);
            ctx.stroke();

            ctx.restore();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        />
    );
}