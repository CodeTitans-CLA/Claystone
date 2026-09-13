import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export interface GLTFModelInstance {
  group: THREE.Group;
  update: (elapsed: number) => void;
}

export function loadArchitecturalGLTFModel(
  url: string,
  onLoadCallback?: (group: THREE.Group) => void
): GLTFModelInstance {
  const containerGroup = new THREE.Group();
  const loader = new GLTFLoader();

  loader.load(
    url,
    (gltf) => {
      const model = gltf.scene;

      // Adjust scale and center the loaded model
      model.scale.set(1.5, 1.5, 1.5);
      
      // Enhance materials for Bloom & Neon Architectural aesthetic
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          
          // Apply emissive properties so bloom ignites on specific structural parts
          if (mesh.material) {
            const mat = mesh.material as THREE.MeshStandardMaterial;
            mat.emissive = new THREE.Color(0x00ff87);
            mat.emissiveIntensity = 0.8; // High intensity triggers UnrealBloomPass
            mat.roughness = 0.2;
            mat.metalness = 0.8;
          }
        }
      });

      containerGroup.add(model);
      if (onLoadCallback) onLoadCallback(containerGroup);
    },
    (progress) => {
      console.log(`Loading 3D Model: ${((progress.loaded / progress.total) * 100).toFixed(0)}%`);
    },
    (error) => {
      console.error('Error loading GLTF architectural model:', error);
    }
  );

  return {
    group: containerGroup,
    update: (elapsed: number) => {
      containerGroup.position.y = Math.sin(elapsed * 0.8) * 0.25;
      containerGroup.rotation.y = elapsed * 0.08;
    },
  };
}