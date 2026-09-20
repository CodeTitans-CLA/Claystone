import CareerHero from "@/components/careers/career-hero";
import CareerValues from "@/components/careers/career-values";
import CareerLife from "@/components/careers/career-life";
import CareerOpenings from "@/components/careers/career-openings";
import CareerWorkstyle from "@/components/careers/career-workstyle";
import CareerExpectations from "@/components/careers/career-expectations";
import CareerCTA from "@/components/careers/career-cta";

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-[#050706] text-white">
      <CareerHero />

      <CareerValues />

      <CareerLife />

      <CareerOpenings />

      <CareerWorkstyle />

      <CareerExpectations />

      <CareerCTA />
    </main>
  );
}