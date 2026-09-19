const deliverables = [
  {
    number: "01",
    format: "3D",
    title: "High-Poly Model",
    description:
      "Detailed geometry for close-up visualization, rendering and presentation.",
  },
  {
    number: "02",
    format: "WEB",
    title: "Optimized Web Model",
    description:
      "Lightweight geometry prepared for interactive web experiences.",
  },
  {
    number: "03",
    format: "PBR",
    title: "PBR Materials",
    description:
      "Physically based materials for realistic digital product presentation.",
  },
  {
    number: "04",
    format: "IMG",
    title: "Product Renders",
    description:
      "High-resolution imagery for marketing, e-commerce and presentations.",
  },
  {
    number: "05",
    format: "UX",
    title: "Configurator Ready",
    description:
      "Structured assets prepared for product customization workflows.",
  },
  {
    number: "06",
    format: "SRC",
    title: "Source Files",
    description:
      "Organized project files that make future edits and iterations easier.",
  },
];

export default function DeliverablesMatrix() {
  return (
    <section className="relative border-t border-white/30 bg-[#050706] py-14 lg:py-18
    ">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              DELIVERABLES
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,72px)] font-semibold leading-[1.05] tracking-wide">
              One model.
              <br />
              <span className="text-[#00ff87]">
                Multiple possibilities.
              </span>
            </h2>
          </div>

          <p className="self-end text-md -mt-5 leading-7 text-[#7c8981]">
            Flexible assets designed to move between visualization, commerce,
            interactive experiences and future digital applications.
          </p>
        </div>

        <div className="">
          {deliverables.map((item) => (
            <div
              key={item.number}
              className="group grid min-h-[135px] grid-cols-[50px_1fr_25px] items-center gap-4 border-b border-white/40 px-2 transition duration-300 hover:bg-[#00ff87]/[0.025] sm:grid-cols-[80px_1fr_30px] sm:gap-8 lg:grid-cols-[100px_1fr_30px]"
            >
              <span className="font-mono text-[12px] text-[#00ff87]">
                {item.number}
              </span>

              <div className="grid gap-2 sm:grid-cols-[100px_1fr_1.5fr] sm:items-center sm:gap-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/70">
                  {item.format}
                </span>

                <h3 className="text-lg font-medium">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-6 text-white/70">
                  {item.description}
                </p>
              </div>

              {/* <span className="text-[#00ff87] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}