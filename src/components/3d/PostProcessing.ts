import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export interface PostProcessingPipeline {
  composer: EffectComposer;
  bloomPass: UnrealBloomPass;
  setSize: (width: number, height: number) => void;
  render: () => void;
}

export function createPostProcessing(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  width: number,
  height: number
): PostProcessingPipeline {
  const composer = new EffectComposer(renderer);

  // 1. Scene Render Pass
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // 2. Unreal Bloom Pass (Strength, Radius, Threshold)
  const resolution = new THREE.Vector2(width, height);
  const bloomStrength = 1.6;  // Intensity of the glow
  const bloomRadius = 0.6;    // Blur spread radius
  const bloomThreshold = 0.15; // Brightness limit required to trigger glow

  const bloomPass = new UnrealBloomPass(resolution, bloomStrength, bloomRadius, bloomThreshold);
  composer.addPass(bloomPass);

  // 3. Color Management Output Pass
  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  return {
    composer,
    bloomPass,
    setSize: (w: number, h: number) => {
      composer.setSize(w, h);
      bloomPass.resolution.set(w, h);
    },
    render: () => {
      composer.render();
    },
  };
}