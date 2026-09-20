const values = [
  {
    number: "01",
    title: "Curiosity",
    text: "We question assumptions, explore new ideas and keep learning beyond our discipline.",
  },
  {
    number: "02",
    title: "Craft",
    text: "Details matter. From the first interaction to the final pixel, we care about how things are made.",
  },
  {
    number: "03",
    title: "Ownership",
    text: "We take responsibility for our work, our decisions and the outcomes they create.",
  },
  {
    number: "04",
    title: "Momentum",
    text: "We move with intent. Test, learn, refine and keep pushing the work forward.",
  },
];

export default function CareerValues() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#060907] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              02 / WHAT DRIVES US
            </span>

            <h2 className="mt-5 max-w-xl text-[clamp(46px,5vw,72px)] font-semibold leading-[1] tracking-[-0.035em] text-white">
              Good work
              <br />
              starts with
              <br />
              <span className="text-[#00ff87]">good questions.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-[15px] leading-7 text-[#7c8981]">
              We believe the strongest work comes from people who care about
              the problem as much as the final result. That means curiosity,
              responsibility and an obsession with getting the details right.
            </p>

            <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="group grid gap-5 py-7 transition duration-300 hover:bg-[#00ff87]/[0.025] lg:grid-cols-[80px_220px_1fr] lg:items-start"
                >
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#00ff87]">
                    {value.number}
                  </span>

                  <h3 className="text-xl font-medium text-white">
                    {value.title}
                  </h3>

                  <p className="max-w-lg text-[13px] leading-6 text-[#7c8981]">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}