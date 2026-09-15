import type { Metadata } from "next";

import Hero from "@/components/services/product-modeling/hero";
import ProductGallery from "@/components/services/product-modeling/product-gallery";
import FeaturesGrid from "@/components/services/product-modeling/features-grid";
import InteractivePreview from "@/components/services/product-modeling/interactive-preview";
import DeliverablesMatrix from "@/components/services/product-modeling/deliverables-matrix";
import ProcessTimeline from "@/components/services/product-modeling/process-timeline";
import CtaBanner from "@/components/services/product-modeling/cta-banner";

export const metadata: Metadata = {
  title: "Product Modeling | Claystone",
  description:
    "Premium 3D product modeling, visualization and digital asset creation by Claystone.",
};

export default function ProductModelingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050706] text-white">
      <Hero />

      <ProductGallery />

      <FeaturesGrid />

      <InteractivePreview />

      <DeliverablesMatrix />

      <ProcessTimeline />

      <CtaBanner />
    </main>
  );
}