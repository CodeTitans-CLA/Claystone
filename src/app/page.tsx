import HeroSection from '@/components/Home/HeroSection';
import ArchitectureShowcase from '@/components/Home/ArchitectureShowcase';
import DigitalExperience from '@/components/Home/DigitalExperience';
import Services from '@/components/Home/Services';
import CaseStudies from '@/components/Home/CaseStudies';
import WhyMultidisciplinary from '@/components/Home/Multidisciplinary';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Services />
      <ArchitectureShowcase />
      <DigitalExperience />
      <CaseStudies />
      <WhyMultidisciplinary />
    </main>
  );
}
