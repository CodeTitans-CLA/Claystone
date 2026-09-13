'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DSceneProps {
  onReady?: () => void;
}

export function Hero3DScene({ onReady }: Hero3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const timeRef = useRef(0);
  const baseParticlePositionsRef = useRef<Float32Array | null>(null);
  const movingLightRef = useRef<THREE.PointLight | null>(null);
  const backLightRef = useRef<THREE.PointLight | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Check device type and accessibility settings at initialization time
    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================================
    // SCENE SETUP - DARK CHARCOAL WITH SUBTLE GRADIENT
    // ============================================================
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x070a08);
    scene.fog = new THREE.Fog(0x070a08, 150, 280);

    // ============================================================
    // CAMERA - THREE-QUARTER ARCHITECTURAL VIEW
    // ============================================================
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 55 : 65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(isMobile ? 1 : 2.5, isMobile ? 1.2 : 1.8, isMobile ? 6.5 : 8.5);
    camera.lookAt(0, 0.3, 0);

    // ============================================================
    // RENDERER
    // ============================================================
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x070a08, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMappingExposure = 1.2;

    containerRef.current.appendChild(renderer.domElement);

    // ============================================================
    // PROFESSIONAL ARCHITECTURAL LIGHTING - ENHANCED FOR VISIBILITY
    // ============================================================
    // Soft ambient for general illumination - increased
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.32);
    scene.add(ambientLight);

    // Main key light - powerful directional illumination
    const keyLight = new THREE.DirectionalLight(0xe8f0ff, 1.35);
    keyLight.position.set(9, 14, 9);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.1;
    keyLight.shadow.camera.far = 10;
    keyLight.shadow.camera.left = -25;
    keyLight.shadow.camera.right = 25;
    keyLight.shadow.camera.top = 25;
    keyLight.shadow.camera.bottom = -25;
    keyLight.shadow.bias = -0.0002;
    scene.add(keyLight);

    // Strong fill light from front - more intensity
    const fillLight = new THREE.DirectionalLight(0x99aadd, 0.7);
    fillLight.position.set(-10, 6, 12);
    scene.add(fillLight);

    // Powerful rim light for edge definition
    const rimLight = new THREE.DirectionalLight(0x00ff87, 0.5);
    rimLight.position.set(12, 8, -12);
    scene.add(rimLight);

    // Side accent light - adds modeling
    const sideLight = new THREE.DirectionalLight(0xddddff, 0.35);
    sideLight.position.set(-15, 10, 5);
    scene.add(sideLight);

    // Dynamic point light moving around the architecture
    const movingLight = new THREE.PointLight(0xf0f8ff, 1.1, 30);
    movingLight.castShadow = true;
    movingLight.position.set(5, 3, 4);
    scene.add(movingLight);
    movingLightRef.current = movingLight;

    // Powerful back spotlight creating cinematic vignette behind building
    const backLight = new THREE.PointLight(0x00ff87, 0.5, 22);
    backLight.position.set(0, 3, -10);
    scene.add(backLight);
    backLightRef.current = backLight;

    // Additional radial fill light for cinematic depth
    const radialLight = new THREE.PointLight(0xccddff, 0.6, 35);
    radialLight.position.set(0, 1, 0);
    scene.add(radialLight);

    // ============================================================
    // BUILD PREMIUM ARCHITECTURAL PAVILION
    // ============================================================
    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;
    scene.add(modelGroup);

    // ---- Materials - Enhanced for clarity ----
    // Concrete - Darker but more visible with stronger response to lighting
    const concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0x404040,
      roughness: 0.65,
      metalness: 0.15,
      envMapIntensity: 0.4,
      side: THREE.FrontSide,
    });

    // Metal - Brighter gunmetal with more reflectivity
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x505050,
      roughness: 0.35,
      metalness: 0.85,
      envMapIntensity: 0.5,
    });

    // Glass - More visible with enhanced transmission and reflection
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2a4a45,
      transmission: 0.95,
      thickness: 1.5,
      roughness: 0.08,
      metalness: 0.05,
      ior: 1.55,
      side: THREE.DoubleSide,
      envMapIntensity: 0.6,
      opacity: 0.95,
      transparent: true,
    });

    // Glass with stronger visibility for key surfaces
    const glassVisibleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3a5a50,
      transmission: 0.92,
      thickness: 1.8,
      roughness: 0.06,
      metalness: 0.08,
      ior: 1.6,
      side: THREE.DoubleSide,
      envMapIntensity: 0.7,
      opacity: 0.98,
      transparent: true,
    });

    // Accent material - Bright green with emission
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff87,
      emissive: 0x00ff87,
      emissiveIntensity: 0.45,
      metalness: 0.4,
      roughness: 0.4,
    });

    // Wireframe - More visible, brighter green
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.32,
      linewidth: 1.5,
    });

    // ---- Base/Podium ----
    const baseGeometry = new THREE.BoxGeometry(3.5, 0.6, 3.5);
    const base = new THREE.Mesh(baseGeometry, concreteMaterial);
    base.position.y = -1.5;
    base.castShadow = true;
    base.receiveShadow = true;
    modelGroup.add(base);

    const baseEdges = new THREE.EdgesGeometry(baseGeometry);
    const baseWire = new THREE.LineSegments(baseEdges, wireframeMaterial);
    base.add(baseWire);

    // ---- Vertical Columns (6x) ----
    const columnCount = 6;
    const columnsRef: THREE.Mesh[] = [];
    for (let i = 0; i < columnCount; i++) {
      const angle = (i / columnCount) * Math.PI * 2;
      const radius = 1.6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const columnGeometry = new THREE.CylinderGeometry(0.12, 0.15, 4, 16);
      const column = new THREE.Mesh(columnGeometry, metalMaterial);
      column.position.set(x, 0.5, z);
      column.castShadow = true;
      column.receiveShadow = true;
      modelGroup.add(column);
      columnsRef.push(column);

      const colEdges = new THREE.EdgesGeometry(columnGeometry);
      const colWire = new THREE.LineSegments(colEdges, wireframeMaterial);
      column.add(colWire);
    }

    // ---- Horizontal Floor Plates (4 levels) ----
    for (let level = 0; level < 4; level++) {
      const y = 0.8 + level * 1.1;
      const scaleFactor = 1 - level * 0.12;
      const plateGeometry = new THREE.BoxGeometry(3 * scaleFactor, 0.15, 3 * scaleFactor);
      
      // Use enhanced glass for lower levels, standard for upper
      const plateMaterial = level < 2 ? glassVisibleMaterial : glassMaterial;
      const plate = new THREE.Mesh(plateGeometry, plateMaterial);
      plate.position.y = y;
      plate.castShadow = true;
      plate.receiveShadow = true;
      modelGroup.add(plate);

      const plateEdges = new THREE.EdgesGeometry(plateGeometry);
      const plateWire = new THREE.LineSegments(plateEdges, wireframeMaterial);
      plate.add(plateWire);
    }

    // ---- Parametric Roof/Crown ----
    const roofGeometry = new THREE.ConeGeometry(1.8, 1.2, 32);
    const roof = new THREE.Mesh(roofGeometry, metalMaterial);
    roof.position.y = 5.2;
    roof.castShadow = true;
    roof.receiveShadow = true;
    modelGroup.add(roof);

    const roofEdges = new THREE.EdgesGeometry(roofGeometry);
    const roofWire = new THREE.LineSegments(roofEdges, wireframeMaterial);
    roof.add(roofWire);

    // ---- Central Vertical Accent Beam ----
    const beamGeometry = new THREE.CylinderGeometry(0.08, 0.08, 6.5, 20);
    const beam = new THREE.Mesh(beamGeometry, accentMaterial);
    beam.position.y = 1.2;
    beam.castShadow = true;
    modelGroup.add(beam);

    // ---- Architectural Grid Floor ----
    const gridGeometry = new THREE.PlaneGeometry(10, 10);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
    });
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -1.51;
    modelGroup.add(grid);

    // Enhanced grid helper with visible lines
    const gridHelper = new THREE.GridHelper(10, 20, 0x00ff87, 0x00ff87);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    gridHelper.position.y = -1.5;
    gridHelper.scale.set(1, 1, 1);
    modelGroup.add(gridHelper);

    // ---- Structural Nodes ----
    const nodeCount = isMobile ? 4 : 8;
    const nodesRef: THREE.Mesh[] = [];
    const nodeBasePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 1.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = 1.5 + Math.sin(angle * 2) * 0.8;

      const nodeGeometry = new THREE.SphereGeometry(0.12, 12, 12);
      const node = new THREE.Mesh(nodeGeometry, accentMaterial);
      node.position.set(x, y, z);
      node.castShadow = true;
      modelGroup.add(node);
      nodesRef.push(node);
      nodeBasePositions.push(new THREE.Vector3(x, y, z));
    }

    // ---- Architectural Data Labels (small point indicators) ----
    const dataLabels = [
      { pos: new THREE.Vector3(1.8, 2.8, 0.5), label: 'ARCH_01' },
      { pos: new THREE.Vector3(-1.6, 1.2, 1.4), label: 'SPAN_42M' },
      { pos: new THREE.Vector3(-0.3, 4.5, -1.2), label: 'REV_03' },
      { pos: new THREE.Vector3(1.2, 0.3, -1.8), label: 'SYS_PARAMETRIC' },
    ];

    const labelIndicators: THREE.Mesh[] = [];
    dataLabels.forEach((labelData, idx) => {
      if (isMobile && idx > 1) return; // Reduce on mobile

      const labelGeometry = new THREE.SphereGeometry(0.06, 8, 8);
      const labelMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ff87,
        emissive: 0x00ff87,
        emissiveIntensity: 0.5,
        metalness: 0.5,
        roughness: 0.3,
      });
      
      const labelPoint = new THREE.Mesh(labelGeometry, labelMaterial);
      labelPoint.position.copy(labelData.pos);
      labelPoint.castShadow = true;
      modelGroup.add(labelPoint);
      labelIndicators.push(labelPoint);

      // Small glow ring around label
      const ringGeometry = new THREE.TorusGeometry(0.08, 0.01, 8, 20);
      const ringMaterial = new THREE.LineBasicMaterial({
        color: 0x00ff87,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({
        color: 0x00ff87,
        transparent: true,
        opacity: 0.2,
      }));
      ring.position.copy(labelData.pos);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      modelGroup.add(ring);
    });

    // ---- Data Connection Lines ----
    if (!isMobile) {
      for (let i = 0; i < nodeCount; i++) {
        const next = (i + 1) % nodeCount;
        const n1 = nodesRef[i];
        const n2 = nodesRef[next];

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute(
          'position',
          new THREE.BufferAttribute(
            new Float32Array([n1.position.x, n1.position.y, n1.position.z, n2.position.x, n2.position.y, n2.position.z]),
            3
          )
        );

        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x00ff87,
          transparent: true,
          opacity: 0.3,
        });

        const line = new THREE.Line(lineGeometry, lineMaterial);
        modelGroup.add(line);
      }
    }

    // ============================================================
    // MINIMAL PARTICLE SYSTEM
    // ============================================================
    const particleCount = isMobile ? 15 : 35;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 4;
      const height = (Math.random() - 0.5) * 5;

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * radius;

      if (Math.random() > 0.9) {
        colors[i3] = 0;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 0.5;
      } else {
        const c = 0.25 + Math.random() * 0.25;
        colors[i3] = c;
        colors[i3 + 1] = c;
        colors[i3 + 2] = c;
      }
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    baseParticlePositionsRef.current = new Float32Array(positions);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      fog: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ============================================================
    // ANIMATION SYSTEM - MULTIPLE INDEPENDENT LOOPS
    // ============================================================
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseTargetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseTargetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      timeRef.current += 0.016;

      if (!document.hidden && !prefersReducedMotion) {
        // ---- Mouse interaction with smooth interpolation ----
        smoothMouseX += (mouseTargetX - smoothMouseX) * 0.12;
        smoothMouseY += (mouseTargetY - smoothMouseY) * 0.12;
        mousePositionRef.current = { x: smoothMouseX, y: smoothMouseY };

        // ---- ROTATION: Slow continuous rotation (~60 seconds per cycle) ----
        if (modelGroup) {
          modelGroup.rotation.y += 0.000262; // More precise for 60-second cycle
          // Subtle roll adds visual interest
          modelGroup.rotation.z += Math.sin(timeRef.current * 0.05) * 0.00015;
        }

        // ---- FLOATING: Independent cycle (11 second period) ----
        if (modelGroup) {
          const floatCycle = 11; // seconds
          const floatingMotion = Math.sin((timeRef.current / floatCycle) * Math.PI * 2) * 0.35;
          modelGroup.position.y = floatingMotion;
        }

        // ---- CAMERA CINEMATIC DRIFT: Multiple independent frequencies ----
        // Primary drift on X (slow)
        const cameraDriftX = Math.sin(timeRef.current * 0.07) * 0.7;
        // Secondary drift on Y (slower)
        const cameraDriftY = Math.cos(timeRef.current * 0.09) * 0.5;
        // Tertiary drift on Z (medium speed)
        const cameraDriftZ = Math.sin(timeRef.current * 0.05) * 0.6;

        const baseX = isMobile ? 1.2 : 2.8;
        const baseY = isMobile ? 1.3 : 1.9;
        const baseZ = isMobile ? 6.8 : 8.8;

        camera.position.x = baseX + cameraDriftX + smoothMouseX * 0.25;
        camera.position.y = baseY + cameraDriftY + smoothMouseY * 0.18;
        camera.position.z = baseZ + cameraDriftZ;
        camera.lookAt(0, 0.2, 0);

        // ---- DYNAMIC MOVING LIGHT: Orbit around building (20 second cycle) ----
        if (movingLightRef.current) {
          const orbitCycle = 20; // seconds
          const orbitAngle = (timeRef.current / orbitCycle) * Math.PI * 2;
          const orbitRadius = 6;
          
          movingLightRef.current.position.x = Math.cos(orbitAngle) * orbitRadius;
          movingLightRef.current.position.y = 2.5 + Math.sin(orbitAngle * 1.5) * 2; // Height variation
          movingLightRef.current.position.z = Math.sin(orbitAngle) * orbitRadius;
          
          // Intensity pulsing with orbit
          movingLightRef.current.intensity = 0.8 + Math.sin(orbitAngle) * 0.4;
        }

        // ---- GLASS REFLECTION ANIMATION ----
        // Subtle opacity variation creates reflection illusion
        if (Array.isArray(base.material)) {
          // skip
        } else if (base.material instanceof THREE.MeshPhysicalMaterial) {
          const reflectPulse = 0.92 + Math.sin(timeRef.current * 0.35) * 0.06;
          base.material.transmission = reflectPulse;
        }

        // ---- WIREFRAME BREATHING: Unified opacity pulse ----
        let allWireframes: THREE.LineSegments[] = [];
        modelGroup.traverse((child) => {
          if (child instanceof THREE.LineSegments && child.material instanceof THREE.LineBasicMaterial) {
            allWireframes.push(child);
          }
        });

        // Independent wireframe cycle (5.5 second period)
        const wireframeCycle = 5.5;
        const breathingOpacity = 0.18 + Math.sin((timeRef.current / wireframeCycle) * Math.PI * 2) * 0.18;
        allWireframes.forEach((wire) => {
          if (wire.material instanceof THREE.LineBasicMaterial) {
            wire.material.opacity = breathingOpacity;
          }
        });

        // ---- CENTRAL BEAM: Independent pulsing ----
        if (beam.material instanceof THREE.MeshStandardMaterial) {
          const beamCycle = 4.2; // seconds
          const beamPulse = 0.35 + Math.sin((timeRef.current / beamCycle) * Math.PI * 2) * 0.25;
          beam.material.emissiveIntensity = beamPulse;
        }

        // ---- ACCENT NODES: Independent pulsing with offset ----
        nodesRef.forEach((node, idx) => {
          if (node.material instanceof THREE.MeshStandardMaterial) {
            const nodePhase = idx * 0.15; // Stagger each node
            const nodeCycle = 3.8;
            const nodePulse = 0.4 + Math.sin((timeRef.current / nodeCycle + nodePhase) * Math.PI * 2) * 0.2;
            node.material.emissiveIntensity = nodePulse;

            // Subtle vertical oscillation relative to base position
            const nodeBounce = Math.sin((timeRef.current / nodeCycle + nodePhase) * Math.PI * 2) * 0.08;
            const basePos = nodeBasePositions[idx];
            node.position.y = basePos.y + nodeBounce;
          }
        });

        // ---- ARCHITECTURAL DATA LABELS: Pulsing indicators ----
        labelIndicators.forEach((label, idx) => {
          const labelCycle = 2.8 + idx * 0.3;
          const labelPulse = 0.5 + Math.sin((timeRef.current / labelCycle) * Math.PI * 2) * 0.3;
          if (label.material instanceof THREE.MeshStandardMaterial) {
            label.material.emissiveIntensity = labelPulse;
          }
        });

        // ---- CAD SCAN EFFECT: Horizontal scan line every 7.5 seconds, active for 1 second ----
        const scanCycle = 7.5; // seconds
        const scanPhase = (timeRef.current % scanCycle) / scanCycle;
        const isScanActive = scanPhase > 0.15 && scanPhase < 0.3; // 1/7.5 ≈ 0.13 seconds active
        const scanIntensity = isScanActive ? (Math.sin((scanPhase - 0.15) * Math.PI / 0.15) * 0.6) : 0;

        if (isScanActive) {
          // Heighten nodes during scan
          nodesRef.forEach((node) => {
            if (node.material instanceof THREE.MeshStandardMaterial) {
              node.material.emissiveIntensity = Math.min(node.material.emissiveIntensity + 0.4, 0.8);
            }
          });

          // Brighten wireframes
          allWireframes.forEach((wire) => {
            if (wire.material instanceof THREE.LineBasicMaterial) {
              wire.material.opacity = Math.min(breathingOpacity + 0.35, 0.65);
            }
          });

          // Pulse back light
          if (backLightRef.current) {
            backLightRef.current.intensity = 0.5 + scanIntensity;
          }
        } else {
          if (backLightRef.current) {
            backLightRef.current.intensity = 0.5;
          }
        }

        // ---- MOUSE PROXIMITY LIGHT RESPONSE ----
        if (movingLightRef.current) {
          const mouseInfluence = Math.sqrt(smoothMouseX ** 2 + smoothMouseY ** 2);
          movingLightRef.current.intensity = Math.max(0.8 - mouseInfluence * 0.3, 0.4);
        }

        // ---- PARTICLE ANIMATION: Subtle drift and wave ----
        if (particles && particles.geometry.attributes.position && baseParticlePositionsRef.current) {
          const posAttr = particles.geometry.attributes.position;
          const pos = posAttr.array as Float32Array;
          const basePosArray = baseParticlePositionsRef.current;

          for (let i = 0; i < pos.length; i += 3) {
            const particlePhase = i * 0.3; // Offset for organic motion
            
            // Slow X drift
            const driftX = Math.sin(timeRef.current * 0.15 + particlePhase) * 0.15;
            // Vertical wave
            const driftY = Math.cos(timeRef.current * 0.12 + particlePhase) * 0.12;
            // Z motion
            const driftZ = Math.sin(timeRef.current * 0.18 + particlePhase * 0.7) * 0.1;

            pos[i] = basePosArray[i] + driftX;
            pos[i + 1] = basePosArray[i + 1] + driftY;
            pos[i + 2] = basePosArray[i + 2] + driftZ;
          }
          posAttr.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // ============================================================
    // EVENT HANDLERS
    // ============================================================
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    if (onReady) {
      requestAnimationFrame(() => onReady());
    }

    // ============================================================
    // CLEANUP
    // ============================================================
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      renderer.dispose();
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        } else if (child instanceof THREE.LineSegments || child instanceof THREE.Line) {
          child.geometry.dispose();
          if (child.material) child.material.dispose();
        }
      });

      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onReady]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        background: '#070a08',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
