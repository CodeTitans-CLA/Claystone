const steps = [
  {
    number: "01",
    title: "Reference & Brief",
    description:
      "We review your product, dimensions, references and intended digital application.",
  },
  {
    number: "02",
    title: "Base Modeling",
    description:
      "Initial geometry is created with focus on proportions, structure and accuracy.",
  },
  {
    number: "03",
    title: "Detail & Materials",
    description:
      "Surface details, textures, materials and visual characteristics are developed.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "The model is optimized according to its final environment and technical requirements.",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "Final assets are organized and delivered in the required formats and specifications.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative bg-[#070a08] py-14 lg:py-18 border border-white/10"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
            OUR PROCESS
          </span>

          <h2 className="mt-5 text-[clamp(48px,5.5vw,72px)] font-semibold leading-[1.05] tracking-wide">
            Structured for
            <br />
            <span className="text-[#00ff87]">better outcomes.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-[#00ff87] to-[#00ff87]/5" />

          <div className="space-y-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative grid min-h-[190px] grid-cols-[48px_1fr] gap-7 sm:grid-cols-[48px_1fr] sm:gap-12"
              >
                {/* Number */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#00ff87]/60 bg-[#070a08]">
                  <span className="font-mono text-[11px] text-[#00ff87]">
                    {step.number}
                  </span>
                </div>

                <div className="max-w-xl pb-16">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#58665e]">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-md leading-7 text-[#718078]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}