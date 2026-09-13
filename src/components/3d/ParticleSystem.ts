// import * as THREE from "three";

// export interface ParticleSystem {
//   points: THREE.Points;
//   positions: Float32Array;
//   velocities: Float32Array;
// }

// export function createParticleSystem(
//   count = 300
// ): ParticleSystem {
//   const geometry =
//     new THREE.BufferGeometry();

//   const positions =
//     new Float32Array(
//       count * 3
//     );

//   const velocities =
//     new Float32Array(
//       count * 3
//     );

//   for (
//     let i = 0;
//     i < count;
//     i++
//   ) {
//     const i3 = i * 3;

//     positions[i3] =
//       (Math.random() - 0.5) * 42;

//     positions[i3 + 1] =
//       (Math.random() - 0.5) * 25;

//     positions[i3 + 2] =
//       (Math.random() - 0.5) * 18;

//     velocities[i3] =
//       (Math.random() - 0.5) * 0.008;

//     velocities[i3 + 1] =
//       (Math.random() * 0.006) +
//       0.001;

//     velocities[i3 + 2] =
//       (Math.random() - 0.5) * 0.004;
//   }

//   geometry.setAttribute(
//     "position",
//     new THREE.BufferAttribute(
//       positions,
//       3
//     )
//   );

//   const material =
//     new THREE.PointsMaterial({
//       color: 0x00ff91,
//       size: 0.08,
//       transparent: true,
//       opacity: 0.72,
//       depthWrite: false,
//       blending:
//         THREE.AdditiveBlending,
//     });

//   const points =
//     new THREE.Points(
//       geometry,
//       material
//     );

//   return {
//     points,
//     positions,
//     velocities,
//   };
// }

// export function updateParticles(
//   system: ParticleSystem,
//   mouseX: number,
//   mouseY: number,
//   delta: number
// ) {
//   const {
//     points,
//     positions,
//     velocities,
//   } = system;

//   const count =
//     positions.length / 3;

//   /*
//    * Convert mouse into a larger
//    * interaction area.
//    */

//   const mouseWorldX =
//     mouseX * 14;

//   const mouseWorldY =
//     -mouseY * 8;

//   const interactionRadius = 6;

//   for (
//     let i = 0;
//     i < count;
//     i++
//   ) {
//     const i3 = i * 3;

//     /*
//      * Normal floating.
//      */

//     positions[i3] +=
//       velocities[i3] *
//       delta *
//       60;

//     positions[i3 + 1] +=
//       velocities[i3 + 1] *
//       delta *
//       60;

//     positions[i3 + 2] +=
//       velocities[i3 + 2] *
//       delta *
//       60;

//     /*
//      * Wrap.
//      */

//     if (
//       positions[i3 + 1] >
//       14
//     ) {
//       positions[i3 + 1] =
//         -14;
//     }

//     if (
//       positions[i3] >
//       22
//     ) {
//       positions[i3] =
//         -22;
//     }

//     if (
//       positions[i3] <
//       -22
//     ) {
//       positions[i3] =
//         22;
//     }

//     /*
//      * ========================================
//      * MOUSE FORCE
//      * ========================================
//      */

//     const dx =
//       positions[i3] -
//       mouseWorldX;

//     const dy =
//       positions[i3 + 1] -
//       mouseWorldY;

//     const distance =
//       Math.sqrt(
//         dx * dx +
//         dy * dy
//       );

//     if (
//       distance <
//       interactionRadius
//     ) {
//       const force =
//         (1 -
//           distance /
//             interactionRadius) *
//         0.08;

//       const safeDistance =
//         Math.max(
//           distance,
//           0.001
//         );

//       positions[i3] +=
//         (dx / safeDistance) *
//         force;

//       positions[i3 + 1] +=
//         (dy / safeDistance) *
//         force;
//     }
//   }

//   points.geometry.attributes.position.needsUpdate =
//     true;
// }






// =============>Second Attempt by Gemini<===========================

import * as THREE from 'three';

export interface ParticleSystemResult {
  particles: THREE.Points;
  updateParticles: (elapsed: number, mouseX: number, mouseY: number) => void;
}

export function createParticleSystem(count = 150): ParticleSystemResult {
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(count * 3);
  const originalPositions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    const x = (Math.random() - 0.5) * 48;
    const y = (Math.random() - 0.5) * 28;
    const z = (Math.random() - 0.5) * 22;

    pPos[i] = x;
    pPos[i + 1] = y;
    pPos[i + 2] = z;

    originalPositions[i] = x;
    originalPositions[i + 1] = y;
    originalPositions[i + 2] = z;
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));

  // Circular texture generator for glowing bubbles
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(0, 255, 135, 1)');
    gradient.addColorStop(0.4, 'rgba(0, 255, 135, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 255, 135, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);

  const pMat = new THREE.PointsMaterial({
    color: 0x00ff87,
    size: 0.55,
    map: texture,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particles = new THREE.Points(pGeo, pMat);

  const updateParticles = (elapsed: number, mouseX: number, mouseY: number) => {
    const positions = pGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Gentle floating animation
      const origX = originalPositions[idx];
      const origY = originalPositions[idx + 1];
      const origZ = originalPositions[idx + 2];

      positions[idx] = origX + Math.sin(elapsed * 0.5 + i) * 0.4 + mouseX * (1 + (i % 3) * 0.5);
      positions[idx + 1] = origY + Math.cos(elapsed * 0.6 + i) * 0.4 - mouseY * (1 + (i % 3) * 0.5);
      positions[idx + 2] = origZ + Math.sin(elapsed * 0.3 + i) * 0.3;
    }
    pGeo.attributes.position.needsUpdate = true;
  };

  return { particles, updateParticles };
}