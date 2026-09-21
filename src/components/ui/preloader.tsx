"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logoWhite from '../../../public/assets/logo-white.png';


type PreloaderProps = {
    onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        let current = 0;

        const interval = window.setInterval(() => {
            current += Math.floor(Math.random() * 8) + 3;

            if (current >= 100) {
                current = 100;
                window.clearInterval(interval);

                window.setTimeout(() => {
                    setIsExiting(true);

                    window.setTimeout(() => {
                        onComplete?.();
                    }, 700);
                }, 250);
            }

            setProgress(current);
        }, 80);

        return () => {
            window.clearInterval(interval);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[99999] bg-[#050706] ${isExiting
                    ? "pointer-events-none animate-preloader-exit"
                    : ""
                }`}
        >
            {/* Background grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,255,135,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,.055) 1px, transparent 1px)
          `,
                    backgroundSize: "45px 45px",
                }}
            />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/[0.035] blur-[120px]" />

            {/* Main content */}
            <div className="relative flex h-full w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                {/* Top */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87] shadow-[0_0_12px_#00ff87]" />

                        <Image
                            src={logoWhite}
                            alt="Claystone logo"
                            width={160}
                            height={40}
                            className="w-[140px] sm:w-[180px] md:w-[220px] h-auto object-contain"
                            priority
                        />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#58655d]">
                        DIGITAL / CREATIVE / TECHNOLOGY
                    </span>
                </div>

                {/* Center */}
                <div className="mx-auto w-full max-w-[900px]">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <span className="font-mono text-[9px] tracking-[0.2em] text-[#00ff87]">
                                INITIALIZING EXPERIENCE
                            </span>

                            <h1 className="mt-4 text-[clamp(42px,7vw,96px)] font-semibold leading-[0.9] tracking-[-0.05em] text-white">
                                <Image
                                    src={logoWhite}
                                    alt="Claystone logo"
                                    // width={380}
                                    // height={60}
                                    className="w-[160px] sm:w-[200px] md:w-[380px] h-auto object-contain"
                                    priority
                                />                            
                            </h1>
                        </div>

                        <span className="font-mono text-[clamp(38px,6vw,82px)] font-medium leading-none tracking-[-0.05em] text-white">
                            {String(progress).padStart(3)}
                            <span className="text-[#00ff87]">%</span>
                        </span>
                    </div>

                    {/* Progress */}
                    <div className="relative h-px w-full overflow-hidden bg-white/[0.10]">
                        <div
                            className="absolute inset-y-0 left-0 bg-[#00ff87] shadow-[0_0_14px_rgba(0,255,135,.7)] transition-[width] duration-100 ease-linear"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                    <div className="mt-4 flex justify-between">
                        <span className="font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
                            SYSTEM READY
                        </span>

                        <span className="font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
                            {progress === 100
                                ? "WELCOME"
                                : "LOADING ASSETS"}
                        </span>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex items-end justify-between">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
                        EST. 2019
                    </span>

                    <span className="font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
                        © {new Date().getFullYear()} CLAYSTONE
                    </span>
                </div>
            </div>
        </div>
    );
}