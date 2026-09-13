// import * as THREE from "three";

// export function createLighting(
//   scene: THREE.Scene
// ): THREE.Group {

//   const group =
//     new THREE.Group();

//   /*
//    * Very dark ambient light.
//    */

//   const ambient =
//     new THREE.AmbientLight(
//       0xffffff,
//       0.35
//     );

//   group.add(
//     ambient
//   );


//   /*
//    * Green architectural light.
//    */

//   const key =
//     new THREE.DirectionalLight(
//       0x00ff91,
//       2.8
//     );

//   key.position.set(
//     8,
//     12,
//     12
//   );

//   group.add(
//     key
//   );


//   /*
//    * Side light.
//    */

//   const side =
//     new THREE.PointLight(
//       0x00ff91,
//       2.5,
//       35
//     );

//   side.position.set(
//     -8,
//     3,
//     8
//   );

//   group.add(
//     side
//   );


//   /*
//    * Very soft white rim.
//    */

//   const rim =
//     new THREE.PointLight(
//       0xffffff,
//       0.7,
//       30
//     );

//   rim.position.set(
//     8,
//     -5,
//     -10
//   );

//   group.add(
//     rim
//   );

//   scene.add(
//     group
//   );

//   return group;
// }




// =============>Second Attempt by Gemini<===========================
import * as THREE from 'three';

export interface SceneLights {
  ambientLight: THREE.AmbientLight;
  dirLight: THREE.DirectionalLight;
  pointLight: THREE.PointLight;
}

export function setupLighting(scene: THREE.Scene): SceneLights {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x00ff87, 2.5);
  dirLight.position.set(15, 25, 20);
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0x00ff87, 2.5, 40);
  pointLight.position.set(-10, -5, 15);
  scene.add(pointLight);

  return { ambientLight, dirLight, pointLight };
}





