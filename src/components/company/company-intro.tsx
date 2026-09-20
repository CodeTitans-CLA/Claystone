import CompanyImage from "./company-image";

export default function CompanyIntroduction() {
  return (
    <section className="relative overflow-hidden border-t border-white/30 bg-[#060907] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-24">
          {/* Left image */}
          <div className="relative lg:pt-20">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#00ff87]">
                THE STUDIO
              </span>

              <span className="font-mono text-[9px] tracking-[0.15em] text-[#58655d]">
                001 / 004
              </span>
            </div>

            <CompanyImage
              src="/images/company/studio.jpg"
              alt="Our studio"
              label="STUDIO IMAGE"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full"
            />

            <div className="absolute -bottom-5 -right-4 hidden border border-[#00ff87]/15 bg-[#060907] px-5 py-4 sm:block">
              <span className="block font-mono text-[8px] tracking-[0.18em] text-[#58655d]">
                STUDIO STATUS
              </span>

              <span className="mt-2 block font-mono text-[10px] tracking-[0.12em] text-[#00ff87]">
                ACTIVE / BUILDING
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="self-center">
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              01 / OUR APPROACH
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              Different
              <br />
              disciplines.
              <br />
              <span className="text-[#00ff87]">One vision.</span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5">
              <p className="text-[15px] leading-7 text-[#7c8981] sm:text-[16px]">
                We believe the most interesting work happens between
                disciplines — where design meets technology, where
                visualization meets engineering and where ideas become
                tangible.
              </p>

              <p className="text-[15px] leading-7 text-[#7c8981] sm:text-[16px]">
                Our studio brings those disciplines together under one
                process, allowing us to approach projects from both creative
                and technical perspectives.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 border-l border-[#00ff87]/20 sm:grid-cols-3">
              {[
                ["3D", "VISUALIZATION"],
                ["DIGITAL", "EXPERIENCES"],
                ["TECH", "DEVELOPMENT"],
              ].map(([value, label]) => (
                <div key={value} className="border-r border-white/[0.06] px-4 py-3">
                  <span className="block text-[16px] font-medium text-white">
                    {value}
                  </span>

                  <span className="mt-1 block font-mono text-[8px] tracking-[0.13em] text-[#58655d]">
                    {label}
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