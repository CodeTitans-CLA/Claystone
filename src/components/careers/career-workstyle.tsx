const steps = [
  ["01", "Explore", "Understand the problem before jumping to the solution."],
  ["02", "Challenge", "Question assumptions and search for better directions."],
  ["03", "Build", "Turn ideas into tangible experiences, products and systems."],
  ["04", "Refine", "Details matter. We iterate until the work feels right."],
];

export default function CareerWorkstyle() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050706] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              05 / HOW WE WORK
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              Think.
              <br />
              Make.
              <br />
              <span className="text-[#00ff87]">Refine.</span>
            </h2>
          </div>

          <p className="self-end max-w-md text-[15px] leading-7 text-[#7c8981]">
            There is no single formula for great work. But there is a process:
            understand deeply, experiment quickly and care about every detail.
          </p>
        </div>

        <div className="grid border-y border-white/[0.08] lg:grid-cols-4">
          {steps.map(([number, title, text], index) => (
            <div
              key={number}
              className={`group relative px-6 py-8 ${
                index !== steps.length - 1
                  ? "border-b border-white/[0.08] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.15em] text-[#00ff87]">
                {number}
              </span>

              <h3 className="mt-16 text-2xl font-medium text-white transition group-hover:text-[#00ff87]">
                {title}
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-[#7c8981]">
                {text}
              </p>

              <div className="mt-8 h-px w-8 bg-[#00ff87]/40 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}