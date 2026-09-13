import * as THREE from 'three';

export interface FloatingNodes {
  points: THREE.Points;
  update: (elapsed: number, mouseX: number, mouseY: number) => void;
}

export function createFloatingNodes(count = 150): FloatingNodes {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    pos[i] = (Math.random() - 0.5) * 40;
    pos[i + 1] = (Math.random() - 0.5) * 30;
    pos[i + 2] = (Math.random() - 0.5) * 20;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const mat = new THREE.PointsMaterial({
    color: 0x00ff87,
    size: 0.25,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);

  return {
    points,
    update: (elapsed: number, mouseX: number, mouseY: number) => {
      points.rotation.y = elapsed * 0.02 + mouseX * 0.1;
      points.rotation.x = mouseY * 0.1;
    },
  };
}