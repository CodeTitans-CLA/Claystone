const principles = [
  {
    number: "01",
    title: "PRECISION",
    text: "Details are not decoration. They are part of the experience.",
  },
  {
    number: "02",
    title: "CURIOSITY",
    text: "We continuously explore new tools, technologies and ways of thinking.",
  },
  {
    number: "03",
    title: "COLLABORATION",
    text: "Different perspectives create stronger solutions.",
  },
  {
    number: "04",
    title: "PURPOSE",
    text: "Every creative decision should have a reason behind it.",
  },
];

export default function CompanyPrinciples() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050706] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1fr] lg:gap-24">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              06 / OUR PRINCIPLES
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              How we
              <br />
              <span className="text-[#00ff87]">think.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.number}
                className="group border-b border-white/[0.06] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#00ff87]">
                    {item.number}
                  </span>

                  <span className="text-white/20 transition group-hover:text-[#00ff87]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-14 text-[18px] font-medium tracking-[0.08em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-[#7c8981]">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-0 bg-[#00ff87] transition-all duration-500 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}