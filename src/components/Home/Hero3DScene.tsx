'use client';

import { useEffect, useRef } from 'react';

// =====================================================
// >>> SETTINGS (ekhane value change korben) <<<
// =====================================================
// true  = page scroll korar somoy 3D animation pause hobe (scroll smooth hobe)
// false = scroll er somoy o animation cholte thakbe
const PAUSE_WHILE_SCROLLING = true;
// Scroll thamar koto ms por animation abar chalu hobe
const SCROLL_IDLE_MS = 150;

export default function Hero3DScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const iframe = iframeRef.current;
    if (!wrap || !iframe) return;

    // iframe er bhitorer animation ke ei state pathano hoy (public/three.js.html ei message shune)
    const state = { visible: true, scrolling: false };

    const send = () => {
      iframe.contentWindow?.postMessage(
        { source: 'hero-3d-scene', ...state },
        window.location.origin
      );
    };

    // iframe load hoye gele abar state pathao (load er age pathale message hariye jay)
    iframe.addEventListener('load', send);

    // Hero section screen er baire gele animation bondho
    const observer = new IntersectionObserver(
      ([entry]) => {
        state.visible = entry.isIntersecting;
        send();
      },
      { threshold: 0 }
    );
    observer.observe(wrap);

    // Scroll shuru hole pause, thamar SCROLL_IDLE_MS por resume
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      if (!state.scrolling) {
        state.scrolling = true;
        send();
      }
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        state.scrolling = false;
        send();
      }, SCROLL_IDLE_MS);
    };
    if (PAUSE_WHILE_SCROLLING) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      iframe.removeEventListener('load', send);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-auto overflow-hidden"
    >
      <iframe
        ref={iframeRef}
        src="/three.js.html"
        className="w-full h-full border-none opacity-80 will-change-transform transform-gpu"
        title="Three.js 3D Scene"
        loading="eager"
      />
    </div>
  );
}
