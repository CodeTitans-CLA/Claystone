// import * as THREE from "three";

// export interface ScanEffect {
//   group: THREE.Group;
//   scanLine: THREE.Mesh;
// }

// export function createScanEffect(): ScanEffect {

//   const group =
//     new THREE.Group();

//   const geometry =
//     new THREE.PlaneGeometry(
//       5.5,
//       0.025
//     );

//   const material =
//     new THREE.MeshBasicMaterial({
//       color: 0x00ff91,
//       transparent: true,
//       opacity: 0.6,
//       side: THREE.DoubleSide,
//       blending:
//         THREE.AdditiveBlending,
//     });

//   const scanLine =
//     new THREE.Mesh(
//       geometry,
//       material
//     );

//   scanLine.position.y =
//     -5;

//   group.add(
//     scanLine
//   );

//   return {
//     group,
//     scanLine,
//   };
// }

// export function updateScanEffect(
//   scan: ScanEffect,
//   elapsed: number
// ) {

//   const progress =
//     (elapsed * 0.45) % 1;

//   scan.scanLine.position.y =
//     -5 +
//     progress * 10;

//   const material =
//     scan.scanLine.material as
//       THREE.MeshBasicMaterial;

//   material.opacity =
//     0.35 +
//     Math.sin(
//       elapsed * 3
//     ) * 0.15;
// }




// =============>Second Attempt by Gemini<===========================

import * as THREE from 'three';

export interface ScanEffectResult {
  scanGroup: THREE.Group;
  updateScan: (elapsed: number) => void;
}

export function createScanEffect(): ScanEffectResult {
  const scanGroup = new THREE.Group();

  // Bottom perspective grid
  const gridHelper = new THREE.GridHelper(60, 40, 0x00ff87, 0x003318);
  gridHelper.position.y = -9;
  if (Array.isArray(gridHelper.material)) {
    gridHelper.material.forEach((mat) => {
      mat.transparent = true;
      mat.opacity = 0.2;
    });
  } else {
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
  }
  scanGroup.add(gridHelper);

  // Scanning radar wave
  const scanRingGeo = new THREE.RingGeometry(0.1, 16, 64);
  const scanRingMat = new THREE.MeshBasicMaterial({
    color: 0x00ff87,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.12,
    wireframe: true,
  });
  const scanRing = new THREE.Mesh(scanRingGeo, scanRingMat);
  scanRing.rotation.x = Math.PI / 2;
  scanRing.position.y = -8.9;
  scanGroup.add(scanRing);

  const updateScan = (elapsed: number) => {
    const scale = 1 + (Math.sin(elapsed * 1.5) * 0.5 + 0.5) * 0.4;
    scanRing.scale.set(scale, scale, 1);
  };

  return { scanGroup, updateScan };
}







