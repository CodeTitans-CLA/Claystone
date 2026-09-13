import * as THREE from 'three';

export interface FormLighting {
  group: THREE.Group;
  updateStepColor: (step: number) => void;
}

export function createFormLighting(): FormLighting {
  const group = new THREE.Group();

  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  group.add(ambient);

  const mainLight = new THREE.DirectionalLight(0x00ff87, 3.0);
  mainLight.position.set(12, 18, 15);
  group.add(mainLight);

  const accentLight = new THREE.PointLight(0x60efff, 2.0, 30);
  accentLight.position.set(-10, -5, 10);
  group.add(accentLight);

  // Step color themes (Step 1: Emerald, Step 2: Cyan, Step 3: Cyber Violet)
  const colors = [
    { main: 0x00ff87, accent: 0x60efff },
    { main: 0x00e5ff, accent: 0x00ff87 },
    { main: 0xa855f7, accent: 0x00ff87 },
  ];

  return {
    group,
    updateStepColor: (step: number) => {
      const targetColor = colors[Math.min(step, colors.length - 1)];
      mainLight.color.setHex(targetColor.main);
      accentLight.color.setHex(targetColor.accent);
    },
  };
}