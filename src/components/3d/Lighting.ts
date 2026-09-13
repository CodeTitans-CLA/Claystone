import * as THREE from 'three';

export function setupLighting(scene: THREE.Scene): void {
  // Ambient light - very soft
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  // Directional key light - cooler tone
  const directionalLight = new THREE.DirectionalLight(0x8899ff, 0.7);
  directionalLight.position.set(5, 8, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.far = 50;
  directionalLight.shadow.camera.left = -10;
  directionalLight.shadow.camera.right = 10;
  directionalLight.shadow.camera.top = 10;
  directionalLight.shadow.camera.bottom = -10;
  scene.add(directionalLight);

  // Green rim light - accent
  const rimLight = new THREE.DirectionalLight(0x00ff87, 0.4);
  rimLight.position.set(-5, 3, -8);
  scene.add(rimLight);

  // Cool fill light
  const fillLight = new THREE.DirectionalLight(0x4488dd, 0.3);
  fillLight.position.set(-8, 2, 5);
  scene.add(fillLight);

  // Point lights around the scene for depth
  const pointLight1 = new THREE.PointLight(0x00ff87, 0.4, 15);
  pointLight1.position.set(5, 2, 0);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x00ff87, 0.3, 15);
  pointLight2.position.set(-5, -2, 0);
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0x4488dd, 0.2, 15);
  pointLight3.position.set(0, 3, -5);
  scene.add(pointLight3);
}
