import HeroSection from '@/components/Home/HeroSection';
import ArchitectureShowcase from '@/components/Home/ArchitectureShowcase';
import ClientTestimonials from '@/components/Home/ClientTestimonials';
import DigitalExperience from '@/components/Home/DigitalExperience';
// import { HeroSection } from '@/components/Home/HeroSection';
import PhysicalSpaces from '@/components/Home/PhysicalSpaces';
import MoreCapabilities from '@/components/Home/MoreCapabilities';
// import Services from '@/components/Home/Services';
import StatsCounter from '@/components/Home/StatsCounter';
import TechStackSlider from '@/components/Home/TechStackSlider';


import Services from '@/components/Home/Services';
import CaseStudies from '@/components/Home/CaseStudies';
import WhyMultidisciplinary from '@/components/Home/Multidisciplinary';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Services />
      <PhysicalSpaces/>
      <ArchitectureShowcase/>
      <DigitalExperience/>
      <MoreCapabilities/>
      <TechStackSlider/>
      <StatsCounter/>
      <ClientTestimonials/>
      <CaseStudies />
      <WhyMultidisciplinary />
    </main>
  );
}
