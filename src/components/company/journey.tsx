const milestones = [
  {
    year: "2019",
    title: "THE BEGINNING",
    text: "The foundation is established around design, visualization and technical creativity.",
  },
  {
    year: "2020",
    title: "FIRST MILESTONE",
    text: "The studio begins taking on larger multidisciplinary projects.",
  },
  {
    year: "2022",
    title: "EXPANSION",
    text: "New capabilities and collaborators expand the studio's creative and technical range.",
  },
  {
    year: "2024",
    title: "DIGITAL EVOLUTION",
    text: "Interactive 3D, WebGL and digital experiences become a larger part of the studio.",
  },
  {
    year: "2025",
    title: "NEW DIRECTION",
    text: "The studio moves toward a more integrated design and technology model.",
  },
  {
    year: "2026",
    title: "BUILDING FORWARD",
    text: "The next chapter begins with bigger ideas, stronger systems and ambitious work.",
  },
];

export default function CompanyJourney() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#060907] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1400px] lg:w-[calc(100%-64px)]">
        <div className="text-center">
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
            05 / THE JOURNEY
          </span>

          <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
            Built over
            <br />
            <span className="text-[#00ff87]">time.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[#7c8981]">
            Every stage has added another layer to the studio.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Central line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#00ff87]/40 via-[#00ff87]/15 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="relative md:grid md:min-h-[210px] md:grid-cols-2"
                >
                  {/* Node */}
                  <div className="absolute left-[10px] top-5 z-10 h-2.5 w-2.5 rounded-full border border-[#00ff87] bg-[#060907] shadow-[0_0_14px_rgba(0,255,135,.45)] md:left-1/2 md:-translate-x-1/2" />

                  <div
                    className={`pl-10 md:pl-0 ${
                      left
                        ? "md:pr-20 md:text-right"
                        : "md:col-start-2 md:pl-20"
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[#00ff87]">
                      {item.year}
                    </span>

                    <h3 className="mt-3 text-[20px] font-medium tracking-wide text-white">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 max-w-md text-[14px] leading-6 text-[#7c8981] ${
                        left ? "ml-auto" : ""
                      }`}
                    >
                      {item.text}
                    </p>

                    <span className="mt-4 block font-mono text-[8px] tracking-[0.15em] text-[#58655d]">
                      PHASE / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}