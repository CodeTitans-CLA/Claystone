import CompanyCTA from "@/components/company/company-cta";
import CompanyDisciplines from "@/components/company/company-disciplines";
import CompanyHero from "@/components/company/company-hero";
import CompanyIntroduction from "@/components/company/company-intro";
import CompanyPrinciples from "@/components/company/company-principles";
import CompanyJourney from "@/components/company/journey";
import CompanyLeadership from "@/components/company/leadership";
import CompanyTeam from "@/components/company/team-grid";


export default function CompanyPage() {
  return (
    <main className="bg-[#050706] text-white">
      <CompanyHero />

      <CompanyIntroduction />

      <CompanyLeadership />

      <CompanyTeam />

      <CompanyDisciplines />

      <CompanyJourney />

      <CompanyPrinciples />

      <CompanyCTA />
    </main>
  );
}