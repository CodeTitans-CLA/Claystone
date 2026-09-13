
import ArchitectureShowcase from '@/components/Home/ArchitectureShowcase';
import DigitalExperience from '@/components/Home/DigitalExperience';
import { HeroSection } from '@/components/Home/HeroSection';
import MoreCapabilities from '@/components/Home/MoreCapabilities';
import Services from '@/components/Home/Services';
import TechStackSlider from '@/components/Home/TechStackSlider';



export default function Home() {
  return (
    <main className="w-full">
      <HeroSection></HeroSection>
      <Services />
      <ArchitectureShowcase/>
      <DigitalExperience/>
      <MoreCapabilities/>
      <TechStackSlider/>
      
      {/* Additional sections can be added here */}
      <section className="w-full min-h-screen bg-white border-t border-[#00ff87]/10 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            More content coming soon
          </h2>
          <p className="text-gray-400">Explore our work and services</p>
        </div>
      </section>
    </main>
  );
}