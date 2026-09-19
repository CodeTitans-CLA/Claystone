export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-t border-white/30 bg-[#08110b] py-14 lg:py-18">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,.07) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/8 blur-[110px]" />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="animation-pulse h-1.5 w-1.5 rounded-full bg-[#00ff87] shadow-[0_0_15px_#00ff87]" />

            <span className="text-[9px] font-bold tracking-[0.2em] text-[#7b8980]">
              HAVE A PRODUCT IN MIND?
            </span>
          </div>

          <h2 className="text-[clamp(48px,7vw,100px)] font-semibold leading-[1.05] tracking-wide">
            Let's turn it
            <br />
            <span className="text-[#00ff87]">into something digital.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-[15px] leading-8 text-[#819087]">
            Bring your product, concept or reference material. We'll help
            transform it into a flexible digital asset built for the next
            stage of your project.
          </p>

          <a
            href="/contact"
            className="group mt-9 inline-flex h-14 items-center gap-5 bg-[#00ff87] px-7 text-[12px] font-bold uppercase tracking-[0.08em] text-[#031008] transition duration-300 hover:-translate-y-1 hover:bg-[#42ffab]"
          >
            Discuss your project

            <span className="text-lg transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}