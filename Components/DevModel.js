"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense } from "react";

function Model() {
  const obj = useLoader(OBJLoader, "/assets/models/dev.obj");

  return (
    <primitive
      object={obj}
      scale={2.5}
      position={[0, -1.2, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function DevModel() {
  return (
    <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}
