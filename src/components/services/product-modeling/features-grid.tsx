const features = [
  {
    number: "01",
    tag: "ACCURACY",
    title: "Precision Modeling",
    description:
      "Detailed digital models built around your product's dimensions, proportions and visual characteristics.",
  },
  {
    number: "02",
    tag: "REALISM",
    title: "Photoreal Visualization",
    description:
      "High-quality materials, lighting and surface details designed for realistic product presentation.",
  },
  {
    number: "03",
    tag: "COMMERCE",
    title: "E-commerce Ready",
    description:
      "Optimized assets for product pages, marketing campaigns, configurators and modern commerce experiences.",
  },
  {
    number: "04",
    tag: "INTERACTIVE",
    title: "Interactive 3D",
    description:
      "Models prepared for WebGL, Three.js, product configurators, AR and other interactive environments.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative bg-[#050706] py-28 lg:py-36">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.6fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              CAPABILITIES
            </span>

            <h2 className="mt-5 text-[clamp(45px,5.5vw,72px)] font-medium leading-[0.95] tracking-[-0.055em]">
              From physical object
              <br />
              <span className="text-[#00ff87]">to digital asset.</span>
            </h2>
          </div>

          <p className="self-end text-sm leading-7 text-[#7c8981]">
            We combine technical precision with visual craftsmanship to create
            product models that work across visualization, commerce and
            interactive digital experiences.
          </p>
        </div>

        <div className="grid border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative min-h-[390px] border-b border-r border-white/[0.08] p-6 transition duration-500 hover:bg-[#00ff87]/[0.025] lg:min-h-[430px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#00ff87]">
                  {feature.number}
                </span>

                <span className="text-[8px] tracking-[0.15em] text-[#536058]">
                  {feature.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-16 h-16 w-16 rotate-45 border border-[#00ff87]/30 transition duration-500 group-hover:rotate-[135deg] group-hover:border-[#00ff87]/70">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#00ff87]/30" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#00ff87]/30" />
              </div>

              <h3 className="mt-10 text-xl font-medium">
                {feature.title}
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-[#718078]">
                {feature.description}
              </p>

              <span className="absolute bottom-6 right-6 text-lg text-[#00ff87] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}