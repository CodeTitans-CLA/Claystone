const qualities = [
  "Strong communication",
  "Curiosity beyond your role",
  "Attention to detail",
  "Independent thinking",
  "Comfort with feedback",
  "Desire to keep learning",
  "Ownership of outcomes",
  "Respect for the team",
];

export default function CareerExpectations() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#060907] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              06 / WHAT WE LOOK FOR
            </span>

            <h2 className="mt-5 text-[clamp(46px,5vw,70px)] font-semibold leading-[1] tracking-[-0.035em] text-white">
              Skills can
              <br />
              grow.
              <br />
              <span className="text-[#00ff87]">Mindset matters.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-[15px] leading-7 text-[#7c8981]">
              We do not expect everyone to know everything. We value people
              who think critically, communicate clearly and are willing to
              grow with the work.
            </p>

            <div className="mt-12 grid border-t border-white/[0.08] sm:grid-cols-2">
              {qualities.map((quality, index) => (
                <div
                  key={quality}
                  className="flex items-center gap-4 border-b border-white/[0.08] py-5 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                >
                  <span className="font-mono text-[9px] text-[#00ff87]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[13px] text-white/80">
                    {quality}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}