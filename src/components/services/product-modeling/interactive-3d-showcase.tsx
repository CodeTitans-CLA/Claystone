"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const GLBViewer = dynamic(
  () => import("./glb-viewer"),
  {
    ssr: false,
    loading: () => <ViewerPlaceholder />,
  },
);
type ProductModelConfig = {
  id: number;
  name: string;
  type: string;
  path: string;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

function ViewerPlaceholder() {
  return (
    <div className="relative flex h-full min-h-[500px] items-center justify-center overflow-hidden bg-[#060907]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,.07) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative flex flex-col items-center">
        <div className="h-32 w-32 animate-pulse rounded-full border border-[#00ff87]/30 bg-[#00ff87]/5 shadow-[0_0_80px_rgba(0,255,135,0.08)]" />

        <span className="mt-6 font-mono text-[11px] tracking-[0.2em] text-[#00ff87]">
          LOADING 3D ENGINE
        </span>
      </div>
    </div>
  );
}

const models: ProductModelConfig[] = [
  {
    id: 1,
    name: "Product Model 01",
    type: "GLB / PBR",
    path: "/models/product-modeling/model-01.glb",
    // MODEL CONTROLS
    scale: 28.2,
    position: [0, -1, 0],
    rotation: [0, 0, 0],
  },
  {
    id: 2,
    name: "Product Model 02",
    type: "GLB / PBR",
    path: "/models/product-modeling/model-02.glb",
    // MODEL CONTROLS
    scale: 3.7,
    position: [0, -2, 0],
    rotation: [0, 0, 0],
  },
  {
    id: 3,
    name: "Product Model 03",
    type: "GLB / PBR",
    path: "/models/product-modeling/model-03.glb",
    // MODEL CONTROLS
    scale: 3.4,
    position: [0, -2, 0],
    rotation: [0, 0, 0],
  },
];

export default function Interactive3DShowcase() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <section
      id="interactive-3d"
      className="relative overflow-hidden border-t border-white/30 bg-[#050706] py-14 lg:py-18"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] lg:w-[calc(100%-64px)]">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00ff87]">
              INTERACTIVE 3D
            </span>

            <h2 className="mt-5 text-[clamp(48px,5.5vw,76px)] font-semibold leading-[1.05] tracking-wide">
              Don't just <span className="text-[#00ff87]">
              look at it.
              </span>
              <br />
              Explore it.
            </h2>
          </div>

          <div className="self-end">
            <p className="max-w-md text-md leading-7 text-[#7c8981]">
              Interactive 3D models allow your customers to inspect products,
              understand details and interact with them directly in the
              browser.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87] shadow-[0_0_12px_#00ff87]" />

              <span className="font-mono text-[8px] tracking-[0.15em] text-[#5d6962]">
                WEBGL / GLB / PBR
              </span>
            </div>
          </div>
        </div>

        {/* Main viewer */}
        <div className="grid overflow-hidden border border-[#00ff87]/15 bg-[#070b08] lg:grid-cols-[1fr_280px]">
          {/* 3D VIEW */}
          <div className="min-h-[500px] lg:min-h-[650px]">
            {selectedModel.path ? (
              <GLBViewer
                modelPath={selectedModel.path}
                autoRotate
                scale={selectedModel.scale}
                position={selectedModel.position}
                rotation={selectedModel.rotation}
              />
            ) : (
              <ViewerPlaceholder />
            )}
          </div>

          {/* MODEL SELECTOR */}
          <aside className="border-t border-[#00ff87]/10 bg-[#060907] lg:border-l lg:border-t-0">
            <div className="border-b border-white/[0.06] p-5">
              <span className="font-mono text-[10px] tracking-[0.18em] text-white/50">
                AVAILABLE MODELS
              </span>
            </div>

            <div className="p-3">
              {models.map((model) => {
                const active = selectedModel.id === model.id;

                return (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => setSelectedModel(model)}
                    className={`group relative mb-2 w-full border p-4 text-left transition duration-300 ${active
                        ? "border-[#00ff87]/40 bg-[#00ff87]/[0.05]"
                        : "border-white/[0.06] hover:border-[#00ff87]/20 hover:bg-white/[0.02]"
                      }`}
                  >
                    <div className="flex items-start justify-between">
                      

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${active
                            ? "bg-[#00ff87] shadow-[0_0_10px_#00ff87]"
                            : "bg-[#37423b]"
                          }`}
                      />
                    </div>

                    <h3 className="mt-5 text-md font-medium text-white">
                      {model.name}
                    </h3>

                    <span className="mt-2 block font-mono text-[12px] tracking-[0.12em] text-white/60">
                      {model.type}
                    </span>

                    {active && (
                      <span className="absolute bottom-0 left-0 h-px w-full bg-[#00ff87]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-auto border-t border-white/[0.06] p-5">
              <span className="block font-mono text-[10px] tracking-[0.15em] text-[#58655d]">
                CONTROLS
              </span>

              <div className="mt-4 space-y-3 text-[11px] text-[#68756d]">
                <div className="flex justify-between">
                  <span>ROTATE</span>
                  <span className="text-[#00ff87]">
                    DRAG
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>ZOOM</span>
                  <span className="text-[#00ff87]">
                    SCROLL
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>AUTO ROTATE</span>
                  <span className="text-[#00ff87]">
                    ON
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom information */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["FORMAT", "GLB / GLTF"],
            ["MATERIAL", "PBR READY"],
            ["EXPERIENCE", "WEB INTERACTIVE"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between border border-white/[0.06] bg-white/[0.015] px-5 py-4"
            >
              <span className="font-mono text-[10One model.px] tracking-[0.15em] text-[#536058]">
                {label}
              </span>

              <span className="font-mono text-[10px] tracking-[0.1em] text-[#00ff87]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}