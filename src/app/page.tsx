import HeroSection from '@/components/Home/HeroSection';
import ArchitectureShowcase from '@/components/Home/ArchitectureShowcase';
import ClientTestimonials from '@/components/Home/ClientTestimonials';
import DigitalExperience from '@/components/Home/DigitalExperience';
import { HeroSection } from '@/components/Home/HeroSection';
import MoreCapabilities from '@/components/Home/MoreCapabilities';
import Services from '@/components/Home/Services';
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
      <ArchitectureShowcase/>
      <DigitalExperience/>
      <MoreCapabilities/>
      <TechStackSlider/>
      <StatsCounter/>
      <ClientTestimonials/>
      
      {/* Additional sections can be added here */}
      <section className="w-full min-h-screen bg-white border-t border-[#00ff87]/10 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            More content coming soon
          </h2>
          <p className="text-gray-400">Explore our work and services</p>
        </div>
      </section>
      <ArchitectureShowcase />
      <DigitalExperience />
      <CaseStudies />
      <WhyMultidisciplinary />
    </main>
  );
}
