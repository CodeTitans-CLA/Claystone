'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Building2, Terminal, Check, ArrowLeftRight } from 'lucide-react';


interface ChecklistItem {
  label: string;
}

const physicalItems: ChecklistItem[] = [
  { label: 'Spatial Zoning' },
  { label: 'CAD & BIM Drafting' },
  { label: 'Structural Engineering' },
  { label: 'Photoreal Visualization' },
];

const digitalItems: ChecklistItem[] = [
  { label: 'UX Discovery' },
  { label: 'Design Systems' },
  { label: 'Full-Stack Web Dev' },
  { label: 'Cloud Launch & Scale' },
];

function ChecklistCard({
  title,
  titleClassName,
  icon,
  items,
  borderClassName,
  cardVariants,
  listContainerVariants,
  listItemVariants,
}: {
  title: string;
  titleClassName: string;
  icon: React.ReactNode;
  items: ChecklistItem[];
  borderClassName: string;
  cardVariants: Variants;
  listContainerVariants: Variants;
  listItemVariants: Variants;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className={`rounded-2xl border ${borderClassName} bg-[#10141b]/80 p-6 backdrop-blur-sm`}
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className={`text-lg font-semibold ${titleClassName}`}>{title}</h3>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10">
          {icon}
        </div>
      </div>

      <motion.ul variants={listContainerVariants} className="space-y-2.5">
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            variants={listItemVariants}
            className="flex items-center justify-between rounded-lg border border-[#1c212b] bg-[#0b0e13] px-4 py-3"
          >
            <span className="flex items-center gap-3 text-sm text-zinc-300">
              <span className="font-mono text-xs text-emerald-500/70">
                {String(i + 1).padStart(2, '0')}.
              </span>
              {item.label}
            </span>
            <Check className="h-4 w-4 shrink-0 text-emerald-400" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function PhysicalSpaces() {
  const shouldReduceMotion = useReducedMotion();

  // ---------- scroll-reveal variants ----------
  const headerVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.7, ease: 'easeOut' },
    },
  };

  const rowContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.7, ease: 'easeOut' },
    },
  };

  const listContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09 },
    },
  };

  const listItemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.5, ease: 'easeOut' },
    },
  };

  // ---------- ambient "data sync" animations ----------
  const glowAnimate = shouldReduceMotion
    ? { opacity: 0.5 }
    : { scale: [1, 1.6], opacity: [0.55, 0] };
  const glowTransition = shouldReduceMotion
    ? undefined
    : { duration: 2.4, repeat: Infinity, ease: 'easeOut' as const };

  const arrowsAnimate = shouldReduceMotion ? { x: 0 } : { x: [-2, 2, -2] };
  const arrowsTransition = shouldReduceMotion
    ? undefined
    : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' as const };

  const dashAnimate = shouldReduceMotion ? {} : { strokeDashoffset: [0, -20] };
  const dashTransition = shouldReduceMotion
    ? undefined
    : { duration: 2.2, repeat: Infinity, ease: 'linear' as const };
  const dashTransitionDelayed = shouldReduceMotion
    ? undefined
    : { ...dashTransition, delay: 0.7 };

  return (
    <section className="relative overflow-hidden bg-[#0a0e13] px-6 py-24 sm:py-32">
      {/* soft ambient glow behind the headline */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(16,185,129,0.10),transparent)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* ---------- Header ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center"
        >
          <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-emerald-400">
            CROSS-DISCIPLINARY COHESION
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            Physical Spaces. Digital Worlds. One Team.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Most agencies isolate architecture from digital media. We unify
            them — enabling developers, architects, and brands to deploy
            spatial projects and their interactive digital twins
            simultaneously.
          </p>
        </motion.div>

        {/* ---------- Cards + sync badge ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={rowContainerVariants}
          className="relative mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8"
        >
          {/* animated connecting lines, desktop only */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            <motion.line
              x1="2%"
              y1="50%"
              x2="48%"
              y2="50%"
              strokeWidth={1}
              strokeDasharray="4 6"
              className="stroke-emerald-400/25"
              animate={dashAnimate}
              transition={dashTransition}
            />
            <motion.line
              x1="52%"
              y1="50%"
              x2="98%"
              y2="50%"
              strokeWidth={1}
              strokeDasharray="4 6"
              className="stroke-emerald-400/25"
              animate={dashAnimate}
              transition={dashTransitionDelayed}
            />
          </svg>

          <ChecklistCard
            title="Physical Build"
            titleClassName="text-zinc-100"
            icon={<Building2 className="h-4 w-4 text-emerald-400" />}
            items={physicalItems}
            borderClassName="border-[#1f242f]"
            cardVariants={cardVariants}
            listContainerVariants={listContainerVariants}
            listItemVariants={listItemVariants}
          />

          {/* ---------- Data sync badge ---------- */}
          <motion.div
            variants={cardVariants}
            className="relative z-10 flex flex-col items-center justify-self-center"
          >
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-emerald-500/35 bg-[#0a0e13]">
              <motion.span
                className="absolute inset-0 rounded-full border border-emerald-400/50"
                animate={glowAnimate}
                transition={glowTransition}
              />
              <motion.div animate={arrowsAnimate} transition={arrowsTransition}>
                <ArrowLeftRight className="h-6 w-6 text-emerald-400" />
              </motion.div>
            </div>
            <span className="mt-3 font-mono text-[11px] font-bold tracking-wider text-zinc-100">
              DATA_SYNC
            </span>
            <span className="mt-2 text-center font-mono text-[10px] uppercase leading-relaxed tracking-wider text-emerald-500/70">
              Common Repository
              <br />
              BIM × WEB-GL
            </span>
          </motion.div>

          <ChecklistCard
            title="Digital Platform"
            titleClassName="text-emerald-400"
            icon={<Terminal className="h-4 w-4 text-emerald-400" />}
            items={digitalItems}
            borderClassName="border-emerald-900/40"
            cardVariants={cardVariants}
            listContainerVariants={listContainerVariants}
            listItemVariants={listItemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
}
