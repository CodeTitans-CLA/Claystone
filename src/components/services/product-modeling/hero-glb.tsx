"use client";

import dynamic from "next/dynamic";

const GLBViewer = dynamic(() => import("./glb-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[520px] items-center justify-center">
      <div className="h-20 w-20 animate-pulse rounded-full border border-[#00ff87]/30 bg-[#00ff87]/5" />
    </div>
  ),
});

export default function HeroGLB() {
  return (
    <div className="relative h-[520px] w-full lg:h-[620px]">
      <GLBViewer
        modelPath="/models/product-modeling/model-04.glb"
        autoRotate
        scale={2.3}
        position={[0, -0.8, 0]}
        rotation={[0, 0, 0]}
      />
    </div>
  );
}