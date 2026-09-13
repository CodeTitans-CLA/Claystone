// import * as THREE from "three";

// export interface ArchitecturalModel {
//   group: THREE.Group;
//   buildingGroup: THREE.Group;
//   blocks: THREE.Group[];
//   glowLines: THREE.LineSegments[];
// }

// export function createArchitecturalModel(): ArchitecturalModel {
//   const group = new THREE.Group();

//   const buildingGroup = new THREE.Group();

//   const blocks: THREE.Group[] = [];
//   const glowLines: THREE.LineSegments[] = [];

//   group.add(buildingGroup);

//   /*
//    * ============================================
//    * MATERIALS
//    * ============================================
//    */

//   const blockMaterial = new THREE.MeshStandardMaterial({
//     color: 0x062315,
//     emissive: 0x003b20,
//     emissiveIntensity: 0.45,
//     metalness: 0.55,
//     roughness: 0.28,
//     transparent: true,
//     opacity: 0.88,
//   });

//   const edgeMaterial = new THREE.LineBasicMaterial({
//     color: 0x00ff91,
//     transparent: true,
//     opacity: 0.95,
//   });

//   /*
//    * ============================================
//    * BLOCK CONFIGURATION
//    *
//    * THIS IS THE MAIN PLACE TO CONTROL
//    * THE ARCHITECTURAL MODEL.
//    * ============================================
//    */

//   const blockData = [
//     {
//       width: 4.4,
//       height: 1.8,
//       depth: 3.8,

//       x: 0.0,
//       y: -4.0,
//       z: 0,

//       rotationY: -0.035,
//       rotationZ: 0.0,
//     },

//     {
//       width: 4.8,
//       height: 1.8,
//       depth: 3.9,

//       x: -0.15,
//       y: -1.95,
//       z: 0,

//       rotationY: 0.035,
//       rotationZ: 0.0,
//     },

//     {
//       width: 4.35,
//       height: 1.75,
//       depth: 3.6,

//       x: 0.15,
//       y: 0.05,
//       z: 0,

//       rotationY: -0.025,
//       rotationZ: 0.01,
//     },

//     {
//       width: 4.0,
//       height: 1.7,
//       depth: 3.4,

//       x: -0.15,
//       y: 2.0,
//       z: 0,

//       rotationY: 0.045,
//       rotationZ: -0.01,
//     },

//     {
//       width: 3.3,
//       height: 1.65,
//       depth: 3.1,

//       x: 0.1,
//       y: 3.9,
//       z: 0,

//       rotationY: -0.035,
//       rotationZ: 0.015,
//     },
//   ];

//   /*
//    * ============================================
//    * CREATE FLOATING BLOCKS
//    * ============================================
//    */

//   blockData.forEach((data, index) => {
//     const blockGroup = new THREE.Group();

//     const geometry = new THREE.BoxGeometry(
//       data.width,
//       data.height,
//       data.depth
//     );

//     const mesh = new THREE.Mesh(
//       geometry,
//       blockMaterial
//     );

//     mesh.position.set(
//       data.x,
//       data.y,
//       data.z
//     );

//     mesh.rotation.y =
//       data.rotationY;

//     mesh.rotation.z =
//       data.rotationZ;

//     blockGroup.add(mesh);

//     /*
//      * Bright architectural edges.
//      */

//     const edges =
//       new THREE.EdgesGeometry(
//         geometry
//       );

//     const edgeLines =
//       new THREE.LineSegments(
//         edges,
//         edgeMaterial
//       );

//     edgeLines.position.copy(
//       mesh.position
//     );

//     edgeLines.rotation.copy(
//       mesh.rotation
//     );

//     blockGroup.add(
//       edgeLines
//     );

//     glowLines.push(
//       edgeLines
//     );

//     /*
//      * Put block into the main model.
//      */

//     buildingGroup.add(
//   blockGroup
// );

//     blocks.push(
//       blockGroup
//     );
//   });

//   /*
//    * ============================================
//    * SMALL CENTRAL ARCHITECTURAL SPINE
//    * ============================================
//    */

//   const spineGeometry =
//     new THREE.BoxGeometry(
//       0.22,
//       9.5,
//       0.22
//     );

//   const spineMaterial =
//     new THREE.MeshBasicMaterial({
//       color: 0x00ff91,
//       transparent: true,
//       opacity: 0.55,
//     });

//   const spine =
//     new THREE.Mesh(
//       spineGeometry,
//       spineMaterial
//     );

//   spine.position.set(
//     0,
//     0,
//     1.9
//   );

//   buildingGroup.add(spine);
  

//   /*
//    * ============================================
//    * ARCHITECTURAL LIGHT WINDOWS
//    * ============================================
//    */

//   const windowMaterial =
//     new THREE.MeshBasicMaterial({
//       color: 0x00ff91,
//       transparent: true,
//       opacity: 0.22,
//     });

//   blockData.forEach((data, blockIndex) => {
//     for (
//       let i = -1;
//       i <= 1;
//       i++
//     ) {
//       const windowGeometry =
//         new THREE.PlaneGeometry(
//           0.45,
//           0.055
//         );

//       const windowMesh =
//         new THREE.Mesh(
//           windowGeometry,
//           windowMaterial
//         );

//       windowMesh.position.set(
//         data.x + i * 1.15,
//         data.y,
//         data.depth / 2 + 0.01
//       );

//       buildingGroup.add(
//   windowMesh
// );
//     }
//   });

//   /*
//    * Overall model scale.
//    */

//   group.scale.setScalar(
//     0.95
//   );

//   return {
//   group,
//   buildingGroup,
//   blocks,
//   glowLines,
// };
// }




// =============>Second Attempt by Gemini<===========================

import * as THREE from 'three';

export function createArchitecturalModel(): THREE.Group {
  const towerGroup = new THREE.Group();

  const archBoxMat = new THREE.MeshPhongMaterial({
    color: 0x0a140d,
    emissive: 0x021408,
    specular: 0x00ff87,
    shininess: 90,
    transparent: true,
    opacity: 0.7,
  });

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x00ff87,
    transparent: true,
    opacity: 0.9,
  });

  for (let i = 0; i < 5; i++) {
    const s = 4.2 - i * 0.45;
    const h = 1.9;
    const y = (i - 2) * 2.2;
    const geom = new THREE.BoxGeometry(s, h, s);

    const mesh = new THREE.Mesh(geom, archBoxMat);
    mesh.position.set(0, y, 0);
    towerGroup.add(mesh);

    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geom), lineMat);
    edges.position.set(0, y, 0);
    towerGroup.add(edges);
  }

  // Position: Shifted slightly to the left within the right anchor cluster
  towerGroup.position.set(-5.5, 0, 0);

  return towerGroup;
}



