const expertise = [
  {
    number: "01",
    title: "Product Modeling",
    description:
      "Detailed 3D product models built for visualization, presentation, manufacturing and interactive digital experiences.",
  },
  {
    number: "02",
    title: "3D Visualization",
    description:
      "High-quality product and architectural visualization that communicates form, material and atmosphere.",
  },
  {
    number: "03",
    title: "Architecture",
    description:
      "Architectural concepts, digital models and visual experiences that help ideas become tangible.",
  },
  {
    number: "04",
    title: "Digital Experiences",
    description:
      "Interactive websites and WebGL experiences designed to make complex products and ideas easier to understand.",
  },
  {
    number: "05",
    title: "Technical Development",
    description:
      "Reliable technical systems that connect design, data and user experience into one cohesive platform.",
  },
  {
    number: "06",
    title: "Creative Strategy",
    description:
      "Clear creative direction and structured thinking that connects visual execution with business objectives.",
  },
];

export default function Expertise() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050706] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              04 / EXPERTISE
            </span>

            <h2 className="mt-5 text-[clamp(44px,5.5vw,76px)] font-semibold leading-[1] tracking-[-0.04em] text-white">
              What we
              <br />
              <span className="text-[#00ff87]">do.</span>
            </h2>
          </div>

          <p className="self-end text-[15px] leading-7 text-[#929e97] sm:text-[16px]">
            Our capabilities are designed to work independently or as one
            connected creative and technical system.
          </p>
        </div>

        <div className="grid border-l border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.number}
              className="group relative min-h-[250px] border-b border-r border-white/[0.07] p-6 transition-colors duration-300 hover:bg-[#00ff87]/[0.025] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#00ff87]">
                  {item.number}
                </span>

                <span className="text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#00ff87]">
                  ↗
                </span>
              </div>

              <h3 className="mt-16 text-[21px] font-semibold text-white sm:text-[23px]">
                {item.title}
              </h3>

              <p className="mt-4 max-w-sm text-[14px] leading-6 text-[#8d9992]">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#00ff87] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}