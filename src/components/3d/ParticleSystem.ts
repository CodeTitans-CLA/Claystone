import * as THREE from 'three';

export function createParticleSystem(isMobile: boolean = false): THREE.Points {
  const particleCount = isMobile ? 600 : 1500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // Distribute particles around the architecture with bias toward center
    const radius = 4 + Math.random() * 8;
    const angle = Math.random() * Math.PI * 2;
    const height = (Math.random() - 0.5) * 8;

    positions[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
    positions[i3 + 1] = height;
    positions[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;

    // Color variation: mostly dark with some green accents
    if (Math.random() > 0.85) {
      // 15% green particles
      colors[i3] = 0;
      colors[i3 + 1] = 1;
      colors[i3 + 2] = 0.5;
    } else {
      // Dim white particles
      colors[i3] = 0.3 + Math.random() * 0.3;
      colors[i3 + 1] = 0.3 + Math.random() * 0.3;
      colors[i3 + 2] = 0.3 + Math.random() * 0.3;
    }
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.08 : 0.1,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: isMobile ? 0.4 : 0.6,
    fog: true,
  });

  const points = new THREE.Points(geometry, material);
  return points;
}
