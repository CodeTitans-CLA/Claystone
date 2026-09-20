import Link from "next/link";

export default function CompanyCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/30 bg-[#050706] py-14 lg:py-18">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/[0.035] blur-[120px]" />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1400px] text-center lg:w-[calc(100%-64px)]">
        <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
          07 / WHAT'S NEXT
        </span>

        <h2 className="mt-6 text-[clamp(50px,7vw,100px)] font-semibold leading-[0.92] tracking-[-0.05em] text-white">
          Let's create
          <br />
          <span className="text-[#00ff87]">something real.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-[15px] leading-7 text-[#7c8981] sm:text-[16px]">
          Have an idea that needs shape, structure or a digital experience?
          Let's build the next version of it together.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group flex items-center gap-4 border border-[#00ff87] bg-[#00ff87] px-7 py-4 font-mono text-[10px] font-bold tracking-[0.16em] text-[#050706] transition-all duration-300 hover:bg-transparent hover:text-[#00ff87]"
          >
            START A PROJECT

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/services"
            className="border border-white/[0.1] px-7 py-4 font-mono text-[10px] font-bold tracking-[0.16em] text-white transition-all duration-300 hover:border-[#00ff87]/40 hover:text-[#00ff87]"
          >
            EXPLORE SERVICES
          </Link>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl items-center justify-between border-t border-white/[0.06] pt-5">
          <span className="font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
            STUDIO / COMPANY
          </span>

          <span className="font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
            DESIGN × TECHNOLOGY
          </span>

          <span className="font-mono text-[8px] tracking-[0.16em] text-[#00ff87]">
            2026
          </span>
        </div>
      </div>
    </section>
  );
}