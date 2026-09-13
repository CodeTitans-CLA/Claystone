import * as THREE from 'three';

export function createScanEffect(): THREE.Mesh {
  const scanGeometry = new THREE.PlaneGeometry(8, 0.2);

  const scanCanvas = document.createElement('canvas');
  scanCanvas.width = 512;
  scanCanvas.height = 64;
  const ctx = scanCanvas.getContext('2d')!;

  ctx.fillStyle = 'rgba(0, 255, 135, 0.6)';
  ctx.fillRect(0, 0, 512, 64);

  ctx.fillStyle = 'rgba(0, 255, 135, 0.2)';
  for (let i = 0; i < 512; i += 20) {
    ctx.fillRect(i, 0, 10, 64);
  }

  const scanTexture = new THREE.CanvasTexture(scanCanvas);
  scanTexture.wrapS = THREE.RepeatWrapping;
  scanTexture.wrapT = THREE.ClampToEdgeWrapping;

  const scanMaterial = new THREE.MeshBasicMaterial({
    map: scanTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  const scan = new THREE.Mesh(scanGeometry, scanMaterial);
  scan.position.y = -2;
  scan.rotation.x = Math.PI * 0.1;

  return scan;
}
