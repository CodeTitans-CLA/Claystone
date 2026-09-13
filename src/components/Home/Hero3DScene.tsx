// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// import {
//   createArchitecturalModel,
// } from "../3d/ArchitecturalModel";

// import {
//   createCADLayer,
// } from "../3d/CADLayer";

// import {
//   createLighting,
// } from "../3d/Lighting";

// import {
//   createParticleSystem,
//   updateParticles,
// } from "../3d/ParticleSystem";

// import {
//   createScanEffect,
//   updateScanEffect,
// } from "../3d/ScanEffect";


// /*
// ====================================================
//                  HERO 3D CONTROL PANEL
// ====================================================

// Change these values to control the entire scene.
// ====================================================
// */

// const DESKTOP = {

//   /*
//    * BUILDING
//    */

//   buildingX: 5.5,
//   buildingY: -0.4,
//   buildingZ: 0,

//   buildingScale: 0.9,

//   /*
//    * EARTH
//    */

//   earthX: 7.0,
//   earthY: 0.7,
//   earthZ: 1.8,

//   earthScale: 1.0,

//   /*
//    * CAMERA
//    */

//   cameraZ: 31,

//   /*
//    * MOUSE
//    */

//   mouseTiltX: 0.14,
//   mouseTiltY: 0.09,

//   cameraMouseX: 0.75,
//   cameraMouseY: 0.45,

//   /*
//    * ANIMATION
//    */

//   buildingFloatSpeed: 0.55,
//   buildingFloatAmount: 0.16,

//   earthRotationSpeed: 0.18,

//   ringRotationSpeed: 0.08,
// };


// /*
// ====================================================
//                     COMPONENT
// ====================================================
// */

// export default function Hero3DScene() {

//   const containerRef =
//     useRef<HTMLDivElement>(null);

//   useEffect(() => {

//     const container =
//       containerRef.current;

//     if (!container) return;


//     /*
//     =================================================
//                      SCENE
//     =================================================
//     */

//     const scene =
//       new THREE.Scene();


//     /*
//     =================================================
//                      CAMERA
//     =================================================
//     */

//     const camera =
//       new THREE.PerspectiveCamera(
//         40,
//         1,
//         0.1,
//         1000
//       );

//     camera.position.set(
//       0,
//       0.4,
//       DESKTOP.cameraZ
//     );


//     /*
//     =================================================
//                     RENDERER
//     =================================================
//     */

//     const renderer =
//       new THREE.WebGLRenderer({
//         alpha: true,
//         antialias: true,
//         powerPreference:
//           "high-performance",
//       });

//     renderer.setPixelRatio(
//       Math.min(
//         window.devicePixelRatio || 1,
//         2
//       )
//     );

//     renderer.setClearColor(
//       0x000000,
//       0
//     );

//     renderer.outputColorSpace =
//       THREE.SRGBColorSpace;

//     renderer.toneMapping =
//       THREE.ACESFilmicToneMapping;

//     renderer.toneMappingExposure =
//       1.15;

//     container.appendChild(
//       renderer.domElement
//     );


//     /*
//     =================================================
//                   MASTER SCENE GROUP
//     =================================================
//     */

//     const masterGroup =
//       new THREE.Group();

//     scene.add(
//       masterGroup
//     );


//     /*
//     =================================================
//                   ARCHITECTURAL MODEL
//     =================================================
//     */

//     const architectural =
//       createArchitecturalModel();

//     architectural.group.position.set(
//       DESKTOP.buildingX,
//       DESKTOP.buildingY,
//       DESKTOP.buildingZ
//     );

//     architectural.group.scale.setScalar(
//       DESKTOP.buildingScale
//     );

//     masterGroup.add(
//       architectural.group
//     );


//     /*
//     =================================================
//                      EARTH
//     =================================================
//     */

//     const cad =
//       createCADLayer();

//     cad.group.position.set(
//       DESKTOP.earthX,
//       DESKTOP.earthY,
//       DESKTOP.earthZ
//     );

//     cad.group.scale.setScalar(
//       DESKTOP.earthScale
//     );

//     masterGroup.add(
//       cad.group
//     );


//     /*
//     =================================================
//                     PARTICLES
//     =================================================
//     */

//     const particles =
//       createParticleSystem(
//         320
//       );

//     particles.points.position.z =
//       -5;

//     masterGroup.add(
//       particles.points
//     );


//     /*
//     =================================================
//                     SCAN EFFECT
//     =================================================
//     */

//     const scan =
//       createScanEffect();

//     scan.group.position.set(
//       DESKTOP.buildingX,
//       DESKTOP.buildingY,
//       2.7
//     );

//     scan.group.scale.set(
//       0.85,
//       0.85,
//       0.85
//     );

//     masterGroup.add(
//       scan.group
//     );


//     /*
//     =================================================
//                     LIGHTING
//     =================================================
//     */

//     createLighting(
//       scene
//     );


//     /*
//     =================================================
//              CURSOR FOLLOW LIGHT
//     =================================================

//     This makes mouse movement visually obvious.
//     =================================================
//     */

//     const cursorLight =
//       new THREE.PointLight(
//         0x00ff91,
//         3.5,
//         18
//       );

//     cursorLight.position.set(
//       0,
//       0,
//       8
//     );

//     scene.add(
//       cursorLight
//     );


//     /*
//     =================================================
//                   MOUSE STATE
//     =================================================
//     */

//     let mouseX = 0;
//     let mouseY = 0;

//     let smoothMouseX = 0;
//     let smoothMouseY = 0;


//     /*
//     =================================================
//                 POINTER MOVEMENT
//     =================================================

//     IMPORTANT:
//     We listen to WINDOW instead of only the
//     Three.js canvas.

//     Therefore the interaction works across the
//     ENTIRE HERO, including over your text.
//     =================================================
//     */

//     const handlePointerMove =
//       (event: PointerEvent) => {

//         const rect =
//           container.getBoundingClientRect();

//         /*
//          * Ignore movement outside hero.
//          */

//         if (
//           event.clientY <
//             rect.top ||
//           event.clientY >
//             rect.bottom
//         ) {
//           return;
//         }

//         const x =
//           (event.clientX -
//             rect.left) /
//           rect.width;

//         const y =
//           (event.clientY -
//             rect.top) /
//           rect.height;

//         mouseX =
//           (x - 0.5) * 2;

//         mouseY =
//           (y - 0.5) * 2;
//       };


//     window.addEventListener(
//       "pointermove",
//       handlePointerMove,
//       { passive: true }
//     );


//     /*
//     =================================================
//                   RESPONSIVE LAYOUT
//     =================================================
//     */

//     const updateLayout =
//       () => {

//         const width =
//           container.clientWidth;

//         const height =
//           container.clientHeight;

//         if (
//           width === 0 ||
//           height === 0
//         ) {
//           return;
//         }

//         camera.aspect =
//           width / height;

//         camera.updateProjectionMatrix();

//         renderer.setSize(
//           width,
//           height,
//           false
//         );


//         /*
//         =============================================
//                     LARGE DESKTOP
//         =============================================
//         */

//         if (
//           width >= 1400
//         ) {

//           camera.position.z =
//             30;

//           architectural.group.position.set(
//             5.5,
//             -0.4,
//             0
//           );

//           architectural.group.scale.setScalar(
//             0.95
//           );

//           cad.group.position.set(
//             7.1,
//             0.8,
//             1.8
//           );

//           cad.group.scale.setScalar(
//             1.05
//           );

//           scan.group.position.set(
//             5.5,
//             -0.4,
//             2.7
//           );
//         }


//         /*
//         =============================================
//                     LAPTOP
//         =============================================
//         */

//         else if (
//           width >= 1024
//         ) {

//           camera.position.z =
//             32;

//           architectural.group.position.set(
//             4.5,
//             -0.6,
//             0
//           );

//           architectural.group.scale.setScalar(
//             0.82
//           );

//           cad.group.position.set(
//             6.1,
//             0.8,
//             1.5
//           );

//           cad.group.scale.setScalar(
//             0.85
//           );

//           scan.group.position.set(
//             4.5,
//             -0.6,
//             2.5
//           );
//         }


//         /*
//         =============================================
//                     TABLET
//         =============================================
//         */

//         else if (
//           width >= 768
//         ) {

//           camera.position.z =
//             34;

//           architectural.group.position.set(
//             3.4,
//             -1,
//             0
//           );

//           architectural.group.scale.setScalar(
//             0.65
//           );

//           cad.group.position.set(
//             5.0,
//             1,
//             1
//           );

//           cad.group.scale.setScalar(
//             0.65
//           );

//           scan.group.position.set(
//             3.4,
//             -1,
//             2.3
//           );
//         }


//         /*
//         =============================================
//                      MOBILE
//         =============================================
//         */

//         else {

//           camera.position.z =
//             37;

//           architectural.group.position.set(
//             1.8,
//             -3.4,
//             0
//           );

//           architectural.group.scale.setScalar(
//             0.43
//           );

//           cad.group.position.set(
//             3.3,
//             1.8,
//             1
//           );

//           cad.group.scale.setScalar(
//             0.46
//           );

//           scan.group.position.set(
//             1.8,
//             -3.4,
//             2
//           );
//         }
//       };


//     updateLayout();


//     const resizeObserver =
//       new ResizeObserver(
//         updateLayout
//       );

//     resizeObserver.observe(
//       container
//     );


//     /*
//     =================================================
//                     ANIMATION
//     =================================================
//     */

//     const clock =
//       new THREE.Clock();

//     let animationFrame =
//       0;


//     const animate =
//       () => {

//         animationFrame =
//           requestAnimationFrame(
//             animate
//           );

//         const elapsed =
//           clock.getElapsedTime();


//         /*
//         =============================================
//                 SMOOTH CURSOR MOVEMENT
//         =============================================
//         */

//         smoothMouseX +=
//           (
//             mouseX -
//             smoothMouseX
//           ) * 0.055;

//         smoothMouseY +=
//           (
//             mouseY -
//             smoothMouseY
//           ) * 0.055;


//         /*
//         =============================================
//               1. WHOLE SCENE PARALLAX
//         =============================================
//         */

//         masterGroup.rotation.y =
//           smoothMouseX *
//           DESKTOP.mouseTiltX;

//         masterGroup.rotation.x =
//           -smoothMouseY *
//           DESKTOP.mouseTiltY;


//         /*
//         =============================================
//               2. SCENE FLOATING
//         =============================================
//         */

//         masterGroup.position.y =
//           Math.sin(
//             elapsed * 0.3
//           ) * 0.08;


//         /*
//         =============================================
//               3. BUILDING FLOAT
//         =============================================
//         */

//         architectural.buildingGroup.position.y =
//           Math.sin(
//             elapsed *
//             DESKTOP.buildingFloatSpeed
//           ) *
//           DESKTOP.buildingFloatAmount;


//         /*
//         =============================================
//               4. BUILDING ROTATION
//         =============================================
//         */

//         architectural.group.rotation.y =
//           smoothMouseX *
//           0.045;

//         architectural.group.rotation.x =
//           smoothMouseY *
//           0.025;


//         /*
//         =============================================
//               5. EARTH ROTATION
//         =============================================
//         */

//         cad.earth.rotation.y =
//           elapsed *
//           DESKTOP.earthRotationSpeed;

//         cad.earth.rotation.x =
//           Math.sin(
//             elapsed * 0.25
//           ) * 0.08;


//         /*
//         =============================================
//               6. EARTH MOUSE RESPONSE
//         =============================================
//         */

//         cad.group.rotation.y +=
//           (
//             smoothMouseX *
//               0.28 -
//             cad.group.rotation.y
//           ) * 0.035;

//         cad.group.rotation.x +=
//           (
//             -smoothMouseY *
//               0.18 -
//             cad.group.rotation.x
//           ) * 0.035;


//         /*
//         =============================================
//               7. ORBITING RINGS
//         =============================================
//         */

//         cad.rings.rotation.z =
//           elapsed *
//           DESKTOP.ringRotationSpeed;

//         cad.rings.rotation.y =
//           Math.sin(
//             elapsed * 0.2
//           ) * 0.12;


//         /*
//         =============================================
//               8. OUTER CIRCLE
//         =============================================
//         */

//         cad.outerCircle.rotation.z =
//           Math.sin(
//             elapsed * 0.12
//           ) * 0.04;


//         /*
//         =============================================
//               9. PARTICLES
//         =============================================
//         */

//         updateParticles(
//           particles,
//           smoothMouseX,
//           smoothMouseY,
//           0.016
//         );

//         particles.points.rotation.y =
//           elapsed * 0.006;


//         /*
//         =============================================
//               10. CURSOR LIGHT
//         =============================================
//         */

//         cursorLight.position.x +=
//           (
//             smoothMouseX * 12 -
//             cursorLight.position.x
//           ) * 0.06;

//         cursorLight.position.y +=
//           (
//             -smoothMouseY * 7 -
//             cursorLight.position.y
//           ) * 0.06;

//         cursorLight.position.z = 7;


//         /*
//         =============================================
//               11. CAMERA PARALLAX
//         =============================================
//         */

//         camera.position.x +=
//           (
//             smoothMouseX *
//               DESKTOP.cameraMouseX -
//             camera.position.x
//           ) * 0.025;

//         camera.position.y +=
//           (
//             0.4 -
//             smoothMouseY *
//               DESKTOP.cameraMouseY -
//             camera.position.y
//           ) * 0.025;


//         /*
//         =============================================
//               12. SCAN EFFECT
//         =============================================
//         */

//         updateScanEffect(
//           scan,
//           elapsed
//         );


//         /*
//         =============================================
//                     RENDER
//         =============================================
//         */

//         renderer.render(
//           scene,
//           camera
//         );
//       };


//     animate();


//     /*
//     =================================================
//                       CLEANUP
//     =================================================
//     */

//     return () => {

//       cancelAnimationFrame(
//         animationFrame
//       );

//       window.removeEventListener(
//         "pointermove",
//         handlePointerMove
//       );

//       resizeObserver.disconnect();

//       scene.traverse(
//         (object) => {

//           const mesh =
//             object as THREE.Mesh;

//           if (
//             mesh.geometry
//           ) {
//             mesh.geometry.dispose();
//           }

//           if (
//             mesh.material
//           ) {

//             const materials =
//               Array.isArray(
//                 mesh.material
//               )
//                 ? mesh.material
//                 : [
//                     mesh.material,
//                   ];

//             materials.forEach(
//               (material) =>
//                 material.dispose()
//             );
//           }
//         }
//       );

//       renderer.dispose();

//       if (
//         renderer.domElement
//           .parentNode ===
//         container
//       ) {
//         container.removeChild(
//           renderer.domElement
//         );
//       }
//     };

//   }, []);


//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 h-full w-full"
//       aria-hidden="true"
//     />
//   );
// }





// =============>Second Attempt by Gemini<===========================

'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { setupLighting } from '../3d/Lighting';
import { createArchitecturalModel } from '../3d/ArchitecturalModel';
import { createCADLayer } from '../3d/CADLayer';
import { createParticleSystem } from '../3d/ParticleSystem';
import { createScanEffect } from '../3d/ScanEffect';

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2, 34);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 1. Setup Lighting
    setupLighting(scene);

    // 2. Master Group for Right-anchored Models (Building Block + Earth Globe)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Responsive positioning: Shift the master model group to the right on larger screens
    const adjustGroupPosition = () => {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        masterGroup.position.set(0, -2, 0);
        masterGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        // Shifted to the RIGHT side of the screen
        masterGroup.position.set(10.5, 0, 0);
        masterGroup.scale.set(1, 1, 1);
      }
    };
    adjustGroupPosition();

    // 3. Add Architectural Building Model
    const towerGroup = createArchitecturalModel();
    masterGroup.add(towerGroup);

    // 4. Add CAD Layer (Earth Globe + Core + Rings)
    const { cadGroup, webGroup, sphereMesh, coreMesh, ring, ring2 } = createCADLayer();
    masterGroup.add(cadGroup);

    // 5. Add Background Interactive Particles/Bubbles (Spans across full screen)
    const { particles, updateParticles } = createParticleSystem(160);
    scene.add(particles);

    // 6. Add Grid Scanning Effect
    const { scanGroup, updateScan } = createScanEffect();
    scene.add(scanGroup);

    // Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX = (x - 0.5) * 2;
      mouseY = (y - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      adjustGroupPosition();
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Master 3D Model rotation & floating motion
      masterGroup.rotation.y = targetX * 0.35 + elapsed * 0.08;
      masterGroup.rotation.x = -targetY * 0.25 + Math.sin(elapsed * 0.4) * 0.03;

      // Earth Globe & Core infinite rotations
      sphereMesh.rotation.y -= 0.015;
      sphereMesh.rotation.x += 0.01;
      coreMesh.rotation.y += 0.02;

      // Floating animations for tower & earth globe
      towerGroup.position.y = Math.sin(elapsed * 0.7) * 0.35;
      webGroup.position.y = Math.cos(elapsed * 0.7) * 0.35;

      // Ring rotations
      ring.rotation.z += 0.005;
      ring2.rotation.z -= 0.004;

      // Interactive background particles update
      updateParticles(elapsed, targetX, targetY);

      // Scan effect update
      updateScan(elapsed);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}