'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createFormLighting } from './FormLighting';
import { createDynamicBuildingMesh } from './DynamicBuildingMesh';
import { createFloatingNodes } from './FloatingNodes';

interface Form3DCanvasProps {
  step: number;
  scaleFactor: number;
}

// Camera positions mapped to each form step
const CAMERA_TARGETS = [
  { x: 10, y: 4, z: 22 },  // Step 0: Overview perspective
  { x: 0, y: 8, z: 18 },   // Step 1: Overhead structural inspect
  { x: -12, y: 2, z: 20 }, // Step 2: Low-angle dramatic focus
  { x: 0, y: 0, z: 15 },   // Step 3: Direct submission alignment
];

export const Form3DCanvas: React.FC<Form3DCanvasProps> = ({ step, scaleFactor }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(CAMERA_TARGETS[0].x, CAMERA_TARGETS[0].y, CAMERA_TARGETS[0].z);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Assembly
    const lighting = createFormLighting();
    scene.add(lighting.group);

    const building = createDynamicBuildingMesh();
    scene.add(building.group);

    const particles = createFloatingNodes();
    scene.add(particles.points);

    // Mouse Tracking
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth Camera Lerp based on active form step
      const targetCam = CAMERA_TARGETS[Math.min(step, CAMERA_TARGETS.length - 1)];
      camera.position.x += (targetCam.x + mouseX * 2 - camera.position.x) * 0.04;
      camera.position.y += (targetCam.y - mouseY * 2 - camera.position.y) * 0.04;
      camera.position.z += (targetCam.z - camera.position.z) * 0.04;
      camera.lookAt(0, 0, 0);

      // Update 3D elements
      lighting.updateStepColor(step);
      building.update(elapsed, step, scaleFactor);
      particles.update(elapsed, mouseX, mouseY);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [step, scaleFactor]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};