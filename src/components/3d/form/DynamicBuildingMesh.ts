import * as THREE from 'three';

export interface DynamicBuildingMesh {
  group: THREE.Group;
  update: (elapsed: number, step: number, scaleFactor: number) => void;
}

export function createDynamicBuildingMesh(): DynamicBuildingMesh {
  const group = new THREE.Group();

  const material = new THREE.MeshPhongMaterial({
    color: 0x081c10,
    emissive: 0x00ff87,
    emissiveIntensity: 0.2,
    wireframe: false,
    transparent: true,
    opacity: 0.85,
    shininess: 80,
  });

  const wireframeMat = new THREE.LineBasicMaterial({
    color: 0x00ff87,
    transparent: true,
    opacity: 0.9,
  });

  const blocks: THREE.Mesh[] = [];
  const count = 7;

  for (let i = 0; i < count; i++) {
    const geo = new THREE.BoxGeometry(4 - i * 0.4, 1.8, 4 - i * 0.4);
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.y = (i - count / 2) * 2.0;

    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), wireframeMat);
    mesh.add(edges);

    blocks.push(mesh);
    group.add(mesh);
  }

  let currentScale = 1;

  return {
    group,
    update: (elapsed: number, step: number, scaleFactor: number) => {
      // Smoothly interpolate scale based on selected budget/scale in form
      currentScale += (scaleFactor - currentScale) * 0.05;
      group.scale.set(currentScale, currentScale, currentScale);

      // Morph individual levels
      blocks.forEach((block, index) => {
        block.rotation.y = Math.sin(elapsed * 0.5 + index * 0.3) * (0.1 + step * 0.05);
        block.position.x = Math.cos(elapsed * 0.4 + index) * 0.2 * step;
      });

      group.rotation.y = elapsed * 0.1;
    },
  };
}