const values = [
  {
    number: "01",
    title: "Precision",
    description:
      "We care about the details because small decisions often define the quality of the final experience.",
  },
  {
    number: "02",
    title: "Curiosity",
    description:
      "We continuously explore new tools, technologies and ways of solving creative and technical problems.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "The strongest work comes from different disciplines working together toward the same objective.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "Beautiful work matters, but meaningful results matter more. We design with purpose behind every decision.",
  },
];

export default function Values() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050706] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-24">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              06 / WHAT DRIVES US
            </span>

            <h2 className="mt-5 text-[clamp(44px,5vw,70px)] font-semibold leading-[1] tracking-[-0.04em] text-white">
              The way
              <br />
              <span className="text-[#00ff87]">we work.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="border-b border-white/[0.07] p-6 first:border-t sm:p-8 sm:[&:nth-child(2)]:border-t"
              >
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#00ff87]">
                  {value.number}
                </span>

                <h3 className="mt-10 text-[22px] font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-[#8f9a93]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}