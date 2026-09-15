"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

type Vector3Tuple = [number, number, number];

interface GLBViewerProps {
  modelPath?: string;
  autoRotate?: boolean;
  scale?: number;
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
}

function ProductModel({
  modelPath,
  scale = 2,
  position = [0, -2, 0],
  rotation = [0, 0, 0],
}: {
  modelPath: string;
  scale?: number;
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
}) {
  const { scene } = useGLTF(modelPath);

  const modelRef = useRef<THREE.Group>(null);

  const mouseTarget = useRef({
    x: 0,
    y: 0,
  });

  const currentRotation = useRef({
    x: rotation[0],
    y: rotation[1],
  });

  /*
   * Track mouse movement
   */
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseTarget.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouseTarget.current.y =
        (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /*
   * Smooth mouse-follow animation
   */
  useFrame(() => {
    if (!modelRef.current) return;

    const targetX = rotation[0] + mouseTarget.current.y * 0.22;

    const targetY = rotation[1] + mouseTarget.current.x * 0.45;

    currentRotation.current.x = THREE.MathUtils.lerp(
      currentRotation.current.x,
      targetX,
      0.06
    );

    currentRotation.current.y = THREE.MathUtils.lerp(
      currentRotation.current.y,
      targetY,
      0.06
    );

    modelRef.current.rotation.x =
      currentRotation.current.x;

    modelRef.current.rotation.y =
      currentRotation.current.y;
  });

  const model = scene.clone();

  return (
    <Float
      speed={1.2}
      rotationIntensity={0}
      floatIntensity={0.2}
    >
      <primitive
        ref={modelRef}
        object={model}
        scale={scale}
        position={position}
      />
    </Float>
  );
}

function LoadingPlaceholder() {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.1}
      floatIntensity={0.25}
    >
      <mesh>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshStandardMaterial
          color="#00ff87"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

export default function GLBViewer({
  modelPath,
  autoRotate = true,
  scale = 1,
  position = [0, -1, 0],
  rotation = [0, 0, 0],
}: GLBViewerProps) {
  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,.06) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/10 blur-[110px]" />

      <Canvas
        camera={{
          position: [0, 0.8, 6],
          fov: 40,
        }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={1.4} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={2.5}
        />

        <pointLight
          position={[-4, 2, 4]}
          intensity={3}
          color="#00ff87"
        />

        <pointLight
          position={[4, -2, -2]}
          intensity={1.5}
        />

        <Suspense fallback={<LoadingPlaceholder />}>
          {modelPath ? (
            <ProductModel
              modelPath={modelPath}
              scale={scale}
              position={position}
              rotation={rotation}
            />
          ) : (
            <LoadingPlaceholder />
          )}

          <Environment preset="city" />

          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.3}
            scale={6}
            blur={2.5}
            far={4}
          />
        </Suspense>

        {/* Keep zoom, but disable drag rotation */}
        <OrbitControls
          enablePan={false}
          enableZoom
          enableRotate={true}
          minDistance={3}
          maxDistance={9}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Corners */}
      <span className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l border-t border-[#00ff87]/50" />
      <span className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-[#00ff87]/50" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-7 w-7 border-b border-l border-[#00ff87]/50" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b border-r border-[#00ff87]/50" />

      {/* Label */}
      <div className="pointer-events-none absolute bottom-5 left-5">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#00ff87]">
          3D PRODUCT MODEL
        </span>

        <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/35">
          Move cursor to explore
        </p>
      </div>
    </div>
  );
}