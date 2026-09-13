// import * as THREE from "three";

// export interface CADLayer {
//   group: THREE.Group;
//   earth: THREE.Group;
//   core: THREE.Mesh;
//   rings: THREE.Group;
//   outerCircle: THREE.Mesh;
// }

// export function createCADLayer(): CADLayer {
//   const group = new THREE.Group();

//   const earth = new THREE.Group();

//   group.add(earth);

//   /*
//    * ============================================
//    * DIGITAL EARTH
//    * ============================================
//    */

//   const globeGeometry =
//     new THREE.IcosahedronGeometry(
//       2.15,
//       3
//     );

//   const globeMaterial =
//     new THREE.MeshBasicMaterial({
//       color: 0x00ff91,
//       wireframe: true,
//       transparent: true,
//       opacity: 0.9,
//     });

//   const globe =
//     new THREE.Mesh(
//       globeGeometry,
//       globeMaterial
//     );

//   earth.add(globe);

//   /*
//    * Inner globe.
//    */

//   const innerGeometry =
//     new THREE.IcosahedronGeometry(
//       1.45,
//       1
//     );

//   const innerMaterial =
//     new THREE.MeshBasicMaterial({
//       color: 0x00ff91,
//       wireframe: true,
//       transparent: true,
//       opacity: 0.3,
//     });

//   const inner =
//     new THREE.Mesh(
//       innerGeometry,
//       innerMaterial
//     );

//   earth.add(inner);

//   /*
//    * Solid core.
//    */

//   const coreGeometry =
//     new THREE.IcosahedronGeometry(
//       0.9,
//       1
//     );

//   const coreMaterial =
//     new THREE.MeshStandardMaterial({
//       color: 0x031109,
//       emissive: 0x00ff91,
//       emissiveIntensity: 0.45,
//       metalness: 0.8,
//       roughness: 0.25,
//       transparent: true,
//       opacity: 0.8,
//     });

//   const core =
//     new THREE.Mesh(
//       coreGeometry,
//       coreMaterial
//     );

//   earth.add(core);

//   /*
//    * ============================================
//    * ORBITAL RING
//    * ============================================
//    */

//   const rings =
//     new THREE.Group();

//   group.add(
//     rings
//   );

//   const orbitGeometry =
//     new THREE.TorusGeometry(
//       3.1,
//       0.025,
//       12,
//       180
//     );

//   const orbitMaterial =
//     new THREE.MeshBasicMaterial({
//       color: 0x00ff91,
//       transparent: true,
//       opacity: 0.75,
//     });

//   const orbit =
//     new THREE.Mesh(
//       orbitGeometry,
//       orbitMaterial
//     );

//   orbit.rotation.x =
//     Math.PI / 2.8;

//   orbit.rotation.z =
//     -0.2;

//   rings.add(
//     orbit
//   );

//   /*
//    * Second orbit.
//    */

//   const secondOrbitGeometry =
//     new THREE.TorusGeometry(
//       3.7,
//       0.012,
//       12,
//       180
//     );

//   const secondOrbitMaterial =
//     new THREE.MeshBasicMaterial({
//       color: 0xffffff,
//       transparent: true,
//       opacity: 0.18,
//     });

//   const secondOrbit =
//     new THREE.Mesh(
//       secondOrbitGeometry,
//       secondOrbitMaterial
//     );

//   secondOrbit.rotation.y =
//     Math.PI / 2.6;

//   rings.add(
//     secondOrbit
//   );

//   /*
//    * ============================================
//    * LARGE OUTER CIRCLE
//    *
//    * This creates the big circle visible
//    * in your reference screenshot.
//    * ============================================
//    */

//   const circleGeometry =
//     new THREE.CircleGeometry(
//       5.7,
//       96
//     );

//   const circleEdges =
//     new THREE.EdgesGeometry(
//       circleGeometry
//     );

//   const circleMaterial =
//     new THREE.LineBasicMaterial({
//       color: 0xffffff,
//       transparent: true,
//       opacity: 0.16,
//     });

//   const outerCircle =
//     new THREE.LineSegments(
//       circleEdges,
//       circleMaterial
//     );

//   outerCircle.rotation.x =
//     -Math.PI / 2;

//   outerCircle.rotation.z =
//     0.15;

//   group.add(
//     outerCircle
//   );

//   /*
//    * ============================================
//    * SMALL DATA NODES
//    * ============================================
//    */

//   const nodeGeometry =
//     new THREE.SphereGeometry(
//       0.045,
//       8,
//       8
//     );

//   const nodeMaterial =
//     new THREE.MeshBasicMaterial({
//       color: 0x00ff91,
//     });

//   for (
//     let i = 0;
//     i < 14;
//     i++
//   ) {
//     const angle =
//       (i / 14) *
//       Math.PI *
//       2;

//     const node =
//       new THREE.Mesh(
//         nodeGeometry,
//         nodeMaterial
//       );

//     node.position.set(
//       Math.cos(angle) * 3.15,
//       Math.sin(angle) * 3.15,
//       0
//     );

//     rings.add(
//       node
//     );
//   }

//   group.scale.setScalar(
//     1
//   );

//   return {
//     group,
//     earth,
//     core,
//     rings,
//     outerCircle,
//   };
// }



// =============>Second Attempt by Gemini<===========================

import * as THREE from 'three';

export interface CADLayerResult {
  cadGroup: THREE.Group;
  webGroup: THREE.Group;
  sphereMesh: THREE.Mesh;
  coreMesh: THREE.Mesh;
  ring: THREE.Mesh;
  ring2: THREE.Mesh;
}

export function createCADLayer(): CADLayerResult {
  const cadGroup = new THREE.Group();

  // Digital Core & Nodes (Right Anchor Earth Wireframe)
  const webGroup = new THREE.Group();
  cadGroup.add(webGroup);
  webGroup.position.set(5.5, 0, 0);

  // Outer wireframe sphere (Earth)
  const sphereGeo = new THREE.IcosahedronGeometry(3.6, 2);
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0x00ff87,
    wireframe: true,
    transparent: true,
    opacity: 0.75,
  });
  const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
  webGroup.add(sphereMesh);

  // Inner solid glowing core
  const coreGeo = new THREE.IcosahedronGeometry(2.1, 0);
  const coreMat = new THREE.MeshPhongMaterial({
    color: 0x061109,
    emissive: 0x00ff87,
    emissiveIntensity: 0.35,
    shininess: 100,
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  webGroup.add(coreMesh);

  // Center Orbiting CAD Ring 1
  const ringGeo = new THREE.TorusGeometry(8.5, 0.05, 16, 120);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x00ff87, transparent: true, opacity: 0.6 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2.6;
  cadGroup.add(ring);

  // Orbiting Data Ring 2
  const ring2Geo = new THREE.TorusGeometry(10.5, 0.03, 16, 120);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.y = Math.PI / 3;
  cadGroup.add(ring2);

  return { cadGroup, webGroup, sphereMesh, coreMesh, ring, ring2 };
}




