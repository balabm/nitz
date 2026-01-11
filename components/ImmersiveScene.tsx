"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function RotatingSphere() {
  const ref = useRef<any>();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial color={'#b88746'} metalness={0.4} roughness={0.3} />
    </mesh>
  );
}

export default function ImmersiveScene() {
  return (
    <section aria-label="Immersive scene" className="w-full h-96 md:h-[560px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <RotatingSphere />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </section>
  );
}
