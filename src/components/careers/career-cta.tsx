import { ArrowUpRight } from "lucide-react";

export default function CareerCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050706] py-20 lg:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/[0.035] blur-[130px]" />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="border-y border-white/[0.08] py-16 text-center lg:py-24">
          <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
            07 / YOUR NEXT MOVE
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-[clamp(48px,7vw,100px)] font-semibold leading-[0.95] tracking-[-0.045em] text-white">
            Don&apos;t see
            <br />
            your role?
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-[15px] leading-7 text-[#7c8981]">
            Great people do not always fit neatly into a job description.
            Introduce yourself and tell us what you would love to build.
          </p>

          <a
            href="mailto:careers@yourdomain.com"
            className="group mt-10 inline-flex items-center gap-4 border border-[#00ff87]/40 bg-[#00ff87]/[0.06] px-7 py-5 text-[10px] font-medium tracking-[0.16em] text-white transition duration-300 hover:border-[#00ff87] hover:bg-[#00ff87]/10"
          >
            START A CONVERSATION

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}