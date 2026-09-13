import * as THREE from 'three';

export function createArchitecturalModel(): THREE.Group {
  const group = new THREE.Group();

  // Glass material for primary surfaces
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1a3a2a,
    metalness: 0.1,
    roughness: 0.2,
    transmission: 0.8,
    thickness: 0.5,
    ior: 1.5,
    side: THREE.DoubleSide,
  });

  // Structural material
  const structuralMaterial = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    metalness: 0.8,
    roughness: 0.3,
  });

  // Emissive green material for accents
  const emissiveMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff87,
    metalness: 0.3,
    roughness: 0.4,
    emissive: 0x00ff87,
    emissiveIntensity: 0.5,
  });

  // Central curved glass shell
  const shellGeometry = new THREE.IcosahedronGeometry(3, 4);
  const shell = new THREE.Mesh(shellGeometry, glassMaterial);
  shell.castShadow = true;
  shell.receiveShadow = true;
  group.add(shell);

  // Vertical structural ribs
  const ribCount = 12;
  for (let i = 0; i < ribCount; i++) {
    const angle = (i / ribCount) * Math.PI * 2;
    const x = Math.cos(angle) * 3;
    const z = Math.sin(angle) * 3;

    const ribGeometry = new THREE.CylinderGeometry(0.15, 0.15, 6, 8);
    const rib = new THREE.Mesh(ribGeometry, structuralMaterial);
    rib.position.set(x, 0, z);
    rib.castShadow = true;
    rib.receiveShadow = true;
    group.add(rib);

    // Add glowing edges to ribs
    const edgeGeometry = new THREE.EdgesGeometry(ribGeometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff87, linewidth: 2 });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    rib.add(edges);
  }

  // Horizontal floor plates
  const plateCount = 4;
  for (let i = 0; i < plateCount; i++) {
    const y = (i - plateCount / 2) * 1.5;
    const plateGeometry = new THREE.BoxGeometry(5, 0.1, 5);
    const plate = new THREE.Mesh(plateGeometry, glassMaterial);
    plate.position.y = y;
    plate.castShadow = true;
    plate.receiveShadow = true;
    group.add(plate);
  }

  // Internal structural frame
  const frameGeometry = new THREE.BoxGeometry(2.5, 4, 2.5);
  const frame = new THREE.Mesh(frameGeometry, structuralMaterial);
  frame.position.y = 0;
  frame.material = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    metalness: 0.7,
    roughness: 0.5,
    wireframe: false,
  });
  group.add(frame);

  // Parametric grid nodes
  const nodeCount = 8;
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;
    const x = Math.cos(angle) * 2.5;
    const z = Math.sin(angle) * 2.5;
    const y = Math.sin(angle * 2) * 1.5;

    const nodeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const node = new THREE.Mesh(nodeGeometry, emissiveMaterial);
    node.position.set(x, y, z);
    node.castShadow = true;
    group.add(node);
  }

  // Connecting beams between nodes
  const beamGeometry = new THREE.CylinderGeometry(0.08, 0.08, 1, 8);
  for (let i = 0; i < nodeCount; i++) {
    const angle1 = (i / nodeCount) * Math.PI * 2;
    const angle2 = ((i + 1) / nodeCount) * Math.PI * 2;

    const x1 = Math.cos(angle1) * 2.5;
    const z1 = Math.sin(angle1) * 2.5;
    const y1 = Math.sin(angle1 * 2) * 1.5;

    const x2 = Math.cos(angle2) * 2.5;
    const z2 = Math.sin(angle2) * 2.5;
    const y2 = Math.sin(angle2 * 2) * 1.5;

    const beam = new THREE.Mesh(beamGeometry, emissiveMaterial);
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const midZ = (z1 + z2) / 2;

    beam.position.set(midX, midY, midZ);

    const dx = x2 - x1;
    const dy = y2 - y1;
    const dz = z2 - z1;
    const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

    beam.lookAt(x2, y2, z2);
    beam.scale.y = length / 1;
    beam.castShadow = true;
    group.add(beam);
  }

  // Curved roof element
  const roofGeometry = new THREE.TorusGeometry(3, 0.3, 8, 32);
  const roof = new THREE.Mesh(roofGeometry, structuralMaterial);
  roof.rotation.x = Math.PI * 0.3;
  roof.position.y = 2.5;
  roof.castShadow = true;
  group.add(roof);

  // Thin glowing vertical accent beam (SPLICE)
  const spliceGeometry = new THREE.CylinderGeometry(0.1, 0.1, 5, 16);
  const splice = new THREE.Mesh(spliceGeometry, emissiveMaterial);
  splice.position.set(0, 0, 0);
  splice.castShadow = true;
  group.add(splice);

  return group;
}
