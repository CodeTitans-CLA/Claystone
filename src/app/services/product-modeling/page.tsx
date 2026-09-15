import ProductModelingHero from "@/components/services/product-modeling/hero";
import ProductGallery from "@/components/services/product-modeling/product-gallery";
import FeaturesGrid from "@/components/services/product-modeling/features-grid";
import Interactive3DShowcase from "@/components/services/product-modeling/interactive-3d-showcase";
import DeliverablesMatrix from "@/components/services/product-modeling/deliverables-matrix";
import ProcessTimeline from "@/components/services/product-modeling/process-timeline";
import CTABanner from "@/components/services/product-modeling/cta-banner";

export default function ProductModelingPage() {
  return (
    <main className="min-h-screen bg-[#050806] text-white">
      <ProductModelingHero />

      <ProductGallery />

      <FeaturesGrid />

      <Interactive3DShowcase />

      <DeliverablesMatrix />

      <ProcessTimeline />

      <CTABanner />
    </main>
  );
}