import CompanyImage from "./company-image";

const team = [
  {
    name: "Team Member",
    role: "Creative Director",
    department: "CREATIVE",
    image: "/images/company/team-01.jpg",
  },
  {
    name: "Team Member",
    role: "3D Artist",
    department: "3D / VISUALIZATION",
    image: "/images/company/team-02.jpg",
  },
  {
    name: "Team Member",
    role: "Product Designer",
    department: "DESIGN",
    image: "/images/company/team-03.jpg",
  },
  {
    name: "Team Member",
    role: "Developer",
    department: "TECHNOLOGY",
    image: "/images/company/team-04.jpg",
  },
  {
    name: "Team Member",
    role: "3D Generalist",
    department: "3D / MODELING",
    image: "/images/company/team-05.jpg",
  },
  {
    name: "Team Member",
    role: "Architect",
    department: "ARCHITECTURE",
    image: "/images/company/team-06.jpg",
  },
  {
    name: "Team Member",
    role: "Project Manager",
    department: "OPERATIONS",
    image: "/images/company/team-07.jpg",
  },
  {
    name: "Team Member",
    role: "Visual Designer",
    department: "CREATIVE",
    image: "/images/company/team-08.jpg",
  },
];

export default function CompanyTeam() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#060907] py-14 lg:py-18">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              03 / THE COLLECTIVE
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide text-white">
              Meet
              <br />
              <span className="text-[#00ff87]">the studio.</span>
            </h2>
          </div>

          <p className="self-end text-[15px] leading-7 text-[#7c8981]">
            Different backgrounds. Different disciplines. One shared obsession
            with creating work that matters.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {team.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="group relative overflow-hidden border border-white/[0.06] bg-[#070b08] transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff87]/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <CompanyImage
                  src={member.image}
                  alt={member.name}
                  label={`TEAM / ${String(index + 1).padStart(2, "0")}`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="h-full w-full"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#030504] via-[#030504]/70 to-transparent px-4 pb-4 pt-20 sm:px-5 sm:pb-5">
                  <span className="font-mono text-[8px] tracking-[0.16em] text-[#00ff87]">
                    {member.department}
                  </span>

                  <h3 className="mt-2 text-[13px] font-medium text-white sm:text-[15px]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-[#7c8981]">
                    {member.role}
                  </p>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#00ff87] transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-5">
          <span className="font-mono text-[8px] tracking-[0.16em] text-[#58655d]">
            PEOPLE / DISCIPLINES / COLLABORATION
          </span>

          <span className="font-mono text-[8px] tracking-[0.16em] text-[#00ff87]">
            {String(team.length).padStart(2, "0")} MEMBERS
          </span>
        </div>
      </div>
    </section>
  );
}