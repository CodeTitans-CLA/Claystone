import * as THREE from 'three';

export function createCADLayer(targetModel: THREE.Group): THREE.Group {
  const cadGroup = new THREE.Group();

  // Wireframe overlay material
  const wireframeMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff87,
    linewidth: 1,
    transparent: true,
    opacity: 0.4,
  });

  // Grid floor plane
  const gridSize = 15;
  const gridDivisions = 30;
  const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x00ff87, 0x1a1a1a);
  gridHelper.position.y = -3.5;
  gridHelper.material.opacity = 0.2;
  gridHelper.material.transparent = true;
  cadGroup.add(gridHelper);

  // Structural axis lines
  const axisLength = 8;
  const axisGeometry = new THREE.BufferGeometry();
  const axisPositions = new Float32Array([
    0, -axisLength, 0, 0, axisLength, 0, // Y axis (vertical)
    -axisLength, 0, 0, axisLength, 0, 0, // X axis
    0, 0, -axisLength, 0, 0, axisLength, // Z axis
  ]);
  axisGeometry.setAttribute('position', new THREE.BufferAttribute(axisPositions, 3));

  const axisMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff87,
    transparent: true,
    opacity: 0.3,
  });

  const axisLines = new THREE.LineSegments(axisGeometry, axisMaterial);
  cadGroup.add(axisLines);

  // Dimension lines and markers
  const markerGeometry = new THREE.BufferGeometry();
  const markerPositions: number[] = [];

  // Create dimension markers around the model
  const markerCount = 12;
  const markerRadius = 4.5;

  for (let i = 0; i < markerCount; i++) {
    const angle = (i / markerCount) * Math.PI * 2;
    const x = Math.cos(angle) * markerRadius;
    const z = Math.sin(angle) * markerRadius;
    markerPositions.push(x, 0, z);
  }

  markerGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(markerPositions), 3)
  );

  const markerMaterial = new THREE.PointsMaterial({
    color: 0x00ff87,
    size: 0.15,
    sizeAttenuation: true,
  });

  const markers = new THREE.Points(markerGeometry, markerMaterial);
  cadGroup.add(markers);

  // Dimension line connecting markers
  for (let i = 0; i < markerCount; i++) {
    const angle1 = (i / markerCount) * Math.PI * 2;
    const angle2 = ((i + 1) / markerCount) * Math.PI * 2;

    const x1 = Math.cos(angle1) * markerRadius;
    const z1 = Math.sin(angle1) * markerRadius;

    const x2 = Math.cos(angle2) * markerRadius;
    const z2 = Math.sin(angle2) * markerRadius;

    const dimGeometry = new THREE.BufferGeometry();
    dimGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array([x1, 0, z1, x2, 0, z2]),
        3
      )
    );

    const dimLine = new THREE.Line(dimGeometry, wireframeMaterial);
    cadGroup.add(dimLine);
  }

  // Wireframe representation of the architectural model
  targetModel.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const wireframe = new THREE.Mesh(
        child.geometry,
        new THREE.MeshBasicMaterial({
          color: 0x00ff87,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        })
      );
      wireframe.position.copy(child.position);
      wireframe.rotation.copy(child.rotation);
      wireframe.scale.copy(child.scale);
      cadGroup.add(wireframe);
    }
  });

  // Vertical scanning guides
  for (let i = -3; i <= 3; i += 1.5) {
    const guideGeometry = new THREE.BufferGeometry();
    guideGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array([i, -4, -4, i, -4, 4]),
        3
      )
    );

    const guideLine = new THREE.Line(guideGeometry, wireframeMaterial);
    cadGroup.add(guideLine);
  }

  // Add technical labels as small text (via canvas texture)
  const createLabel = (text: string, position: THREE.Vector3) => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'rgba(0, 255, 135, 0.8)';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(text, 10, 30);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 1);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    mesh.lookAt(0, 0, 0);
    return mesh;
  };

  // Add some technical labels
  cadGroup.add(createLabel('SPAN: 42.400m', new THREE.Vector3(5, 2, 0)));
  cadGroup.add(createLabel('STRUCT: REINFORCED', new THREE.Vector3(-5, -2, 0)));
  cadGroup.add(createLabel('TOLERANCE: ±0.5mm', new THREE.Vector3(0, 3, 5)));

  return cadGroup;
}
