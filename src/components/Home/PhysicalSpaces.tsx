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

/**
 * A single bright "comet" of light that continuously travels around
 * the border, always on — no hover needed. Built with the padding +
 * overflow-hidden trick: the outer box's padding is the border
 * thickness, an oversized rotating conic-gradient comet lives
 * underneath, and the inner box covers everything but that thin ring.
 */
function BorderBeam({
  children,
  radiusClassName = 'rounded-2xl',
  duration = 4,
  color = '#00DD6F',
  tailColor = '#eafff5',
}: {
  children: React.ReactNode;
  radiusClassName?: string;
  duration?: number;
  color?: string;
  tailColor?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const cometGradient = `conic-gradient(from 0deg, transparent 0%, transparent 82%, ${color}55 90%, ${tailColor} 96%, transparent 100%)`;

  return (
    <div className={`relative h-full ${radiusClassName} p-[1.5px]`}>
      {/* faint always-on base ring so the shape reads even between comet passes */}
      <div
        className={`absolute inset-0 ${radiusClassName}`}
        style={{ boxShadow: `inset 0 0 0 1px ${color}25` }}
      />

      {/* the moving comet, clipped to a thin ring by overflow-hidden */}
      <div className={`absolute inset-0 ${radiusClassName} overflow-hidden`}>
        <motion.div
          aria-hidden="true"
          className="absolute -inset-full"
          style={{ background: cometGradient }}
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration, repeat: Infinity, ease: 'linear' }
          }
        />
      </div>

      {/* actual content sits on top, covering everything but the thin ring */}
      <div className={`relative z-10 h-full w-full ${radiusClassName}`}>{children}</div>
    </div>
  );
}

function ChecklistCard({
  title,
  titleClassName,
  icon,
  items,
  borderClassName,
  cardVariants,
  listContainerVariants,
  listItemVariants,
  beamColor = '#00DD6F',
  beamDuration = 4,
}: {
  title: string;
  titleClassName: string;
  icon: React.ReactNode;
  items: ChecklistItem[];
  borderClassName: string;
  cardVariants: Variants;
  listContainerVariants: Variants;
  listItemVariants: Variants;
  beamColor?: string;
  beamDuration?: number;
}) {
  const cardInner = (
    <div
      className={`h-full rounded-2xl border ${borderClassName} bg-[#10141b]/90 p-6 backdrop-blur-sm transition-[box-shadow,border-color,transform] duration-500 group-hover:-translate-y-1 group-hover:border-(--glow-color) group-hover:[box-shadow:0_0_0_1px_var(--glow-color),0_0_34px_8px_var(--glow-color)]`}
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
    </div>
  );

  return (
    <motion.div
      variants={cardVariants}
      className="group h-full"
      style={{ '--glow-color': beamColor } as React.CSSProperties}
    >
      <BorderBeam color={beamColor} duration={beamDuration}>
        {cardInner}
      </BorderBeam>
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
  const BRAND = '#00DD6F';
  const glowAnimate = shouldReduceMotion
    ? { opacity: 0.5 }
    : { scale: [1, 1.6], opacity: [0.55, 0] };
  const glowTransition = shouldReduceMotion
    ? undefined
    : { duration: 2.4, repeat: Infinity, ease: 'easeOut' as const };

  const glowAnimateSlow = shouldReduceMotion
    ? { opacity: 0.3 }
    : { scale: [1, 1.9], opacity: [0.35, 0] };
  const glowTransitionSlow = shouldReduceMotion
    ? undefined
    : { duration: 2.4, repeat: Infinity, ease: 'easeOut' as const, delay: 0.8 };

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
            beamColor="#00DD6F"
            beamDuration={4}
          />

          {/* ---------- Data sync badge (premium animated core) ---------- */}
          <motion.div
            variants={cardVariants}
            className="relative z-10 flex flex-col items-center justify-self-center"
          >
            <div className="relative flex h-28 w-28 items-center justify-center">
              {/* outer double pulse rings, staggered, two-tone-of-brand */}
              <motion.span
                className="absolute inset-2 rounded-full border"
                style={{ borderColor: `${BRAND}80` }}
                animate={glowAnimate}
                transition={glowTransition}
              />
              <motion.span
                className="absolute inset-2 rounded-full border"
                style={{ borderColor: `${BRAND}55` }}
                animate={glowAnimateSlow}
                transition={glowTransitionSlow}
              />

              {/* slow-spinning conic gradient ring, forms a thin rotating rim */}
              <div className="absolute inset-2 rounded-full p-0.5">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <motion.div
                    aria-hidden="true"
                    className="absolute -inset-full"
                    style={{
                      background: `conic-gradient(from 0deg, ${BRAND}00, ${BRAND}, #eafff5, ${BRAND}00)`,
                    }}
                    animate={shouldReduceMotion ? {} : { rotate: 360 }}
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { duration: 4, repeat: Infinity, ease: 'linear' }
                    }
                  />
                </div>
              </div>

              {/* two orbiting particles, opposite directions, different speeds */}
              <motion.div
                className="absolute inset-0"
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 5, repeat: Infinity, ease: 'linear' }
                }
              >
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                  style={{ backgroundColor: BRAND, boxShadow: `0 0 10px 3px ${BRAND}BF` }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                animate={shouldReduceMotion ? {} : { rotate: -360 }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 7.5, repeat: Infinity, ease: 'linear' }
                }
              >
                <span
                  className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                  style={{ backgroundColor: '#eafff5', boxShadow: `0 0 8px 2px ${BRAND}B3` }}
                />
              </motion.div>

              {/* solid core */}
              <div
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0a0e13]"
                style={{ border: `1px solid ${BRAND}59` }}
              >
                <motion.div animate={arrowsAnimate} transition={arrowsTransition}>
                  <ArrowLeftRight className="h-6 w-6" style={{ color: BRAND }} />
                </motion.div>
              </div>
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
            beamColor="#00DD6F"
            beamDuration={4.6}
          />
        </motion.div>
      </div>
    </section>
  );
}