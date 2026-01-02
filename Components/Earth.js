"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function EarthMesh() {
  const texture = new THREE.TextureLoader().load(
    "/assets/textures/earth.jpg" // you add this texture
  );

  return (
    <Sphere args={[1.2, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function TorontoPin() {
  // Approx Toronto lat/long converted to XYZ
  const lat = 43.6532;
  const lon = -79.3832;

  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const radius = 1.25;

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial color="#22c55e" emissive="#22c55e" />
    </mesh>
  );
}

export default function Earth() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <hemisphereLight
        skyColor="#ffffff"
        groundColor="#0f172a"
        intensity={0.8}
      />
      <pointLight position={[5, 3, 5]} intensity={1.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />

      <Suspense fallback={null}>
        <EarthMesh />
        <TorontoPin />
      </Suspense>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
