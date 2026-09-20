import CompanyImage from "./company-image";

export default function CompanyLeadership() {
  return (
    <>
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050706] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              02 / LEADERSHIP
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              People
              <br />
              <span className="text-[#00ff87]">behind</span> the work.
            </h2>
          </div>

          <p className="self-end max-w-md text-[15px] leading-7 text-[#7c8981]">
            A studio is defined by the people who shape its thinking,
            challenge its assumptions and turn ideas into reality.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[#00ff87]/15 bg-[#070b08] lg:grid-cols-[0.85fr_1fr]">
          {/* Image */}
          <div className="relative min-h-[520px]">
            <CompanyImage
              src="/images/company/founder.jpg"
              alt="Founder"
              label="FOUNDER IMAGE"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full"
            />

            <div className="absolute bottom-5 left-5 border border-[#00ff87]/20 bg-[#050706]/90 px-5 py-4 backdrop-blur-md">
              <span className="block font-mono text-[8px] tracking-[0.18em] text-[#58655d]">
                POSITION
              </span>

              <span className="mt-2 block text-[13px] font-medium text-white">
                Founder / Creative Director
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-7 sm:p-10 lg:p-14">
            <span className="font-mono text-[9px] tracking-[0.2em] text-[#00ff87]">
              LEADING WITH VISION
            </span>

            <h3 className="mt-7 text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1] tracking-[-0.03em] text-white">
              Building
              <br />
              with <span className="text-[#00ff87]">purpose.</span>
            </h3>

            <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#7c8981] sm:text-[16px]">
              Our approach starts with a simple question: what should this
              idea become?
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#7c8981] sm:text-[16px]">
              From that question, we create a path that connects strategy,
              visual language, technology and execution.
            </p>

            {/* Quote */}
            <div className="mt-10 border-l border-[#00ff87] pl-5">
              <p className="text-[15px] leading-7 text-white/80">
                We don't just create deliverables. We create systems,
                experiences and things people can understand.
              </p>
            </div>

            {/* Technical footer */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["VISION", "LONG TERM"],
                ["PROCESS", "CONNECTED"],
                ["OUTPUT", "PRECISE"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border border-white/[0.06] bg-white/[0.015] px-4 py-4"
                >
                  <span className="block font-mono text-[8px] tracking-[0.15em] text-[#58655d]">
                    {label}
                  </span>

                  <span className="mt-2 block font-mono text-[9px] tracking-[0.1em] text-[#00ff87]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <span className="absolute right-5 top-5 font-mono text-[8px] tracking-[0.15em] text-[#37423b]">
              02 / 04
            </span>
          </div>
        </div>
      </div>
    </section>




    {/* MD */}
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050706] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              02 / LEADERSHIP
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              People
              <br />
              <span className="text-[#00ff87]">behind</span> the work.
            </h2>
          </div>

          <p className="self-end max-w-md text-[15px] leading-7 text-[#7c8981]">
            A studio is defined by the people who shape its thinking,
            challenge its assumptions and turn ideas into reality.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[#00ff87]/15 bg-[#070b08] lg:grid-cols-[0.85fr_1fr]">
          

          {/* Content */}
          <div className="relative p-7 sm:p-10 lg:p-14">
            <span className="font-mono text-[9px] tracking-[0.2em] text-[#00ff87]">
              LEADING WITH VISION
            </span>

            <h3 className="mt-7 text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1] tracking-[-0.03em] text-white">
              Empowering Growth,
              <br />
              Inspiring <span className="text-[#00ff87]">Innovation.</span>
            </h3>

            <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#7c8981] sm:text-[16px]">
              As the Chairman of Betopia Group, Sabina Akter plays a vital role in shaping the company's long-term direction and success.  
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#7c8981] sm:text-[16px]">
              She is passionate about building an inclusive ecosystem where innovation and collaboration go hand in hand. 
            </p>

            {/* Quote */}
            <div className="mt-10 border-l border-[#00ff87] pl-5">
              <p className="text-[15px] leading-7 text-white/80">
                With her focus on people-centric leadership, she empowers teams to explore new opportunities, adapt to market changes, and consistently deliver value. Her vision emphasizes sustainable growth, ethical practices, and creating a culture that inspires innovation at every level.
              </p>
            </div>

            {/* Technical footer */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["VISION", "LONG TERM"],
                ["PROCESS", "CONNECTED"],
                ["OUTPUT", "PRECISE"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border border-white/[0.06] bg-white/[0.015] px-4 py-4"
                >
                  <span className="block font-mono text-[8px] tracking-[0.15em] text-[#58655d]">
                    {label}
                  </span>

                  <span className="mt-2 block font-mono text-[9px] tracking-[0.1em] text-[#00ff87]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <span className="absolute right-5 top-5 font-mono text-[8px] tracking-[0.15em] text-[#37423b]">
              02 / 04
            </span>
          </div>


          {/* Image */}
          <div className="relative min-h-[520px]">
            <CompanyImage
              src="/images/company/creative-director.png"
              alt="Founder"
              label="FOUNDER IMAGE"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full"
            />

            <div className="absolute bottom-5 left-5 border border-[#00ff87]/20 bg-[#050706]/90 px-5 py-4 backdrop-blur-md">
              <span className="block font-mono text-[8px] tracking-[0.18em] text-[#58655d]">
                POSITION
              </span>

              <span className="mt-2 block text-[13px] font-medium text-white">
                Founder / Creative Director
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}