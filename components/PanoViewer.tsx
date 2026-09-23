"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';
import { panos } from '../lib/mediaAssets';

function Sphere({ src, onError }: { src: string; onError: () => void }) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let alive = true;
    let loaded: THREE.Texture | null = null;
    new THREE.TextureLoader().load(
      src,
      (t) => {
        if (!alive) {
          t.dispose();
          return;
        }
        t.colorSpace = THREE.SRGBColorSpace;
        loaded = t;
        setTexture(t);
      },
      undefined,
      () => {
        if (alive) onError();
      }
    );
    return () => {
      alive = false;
      loaded?.dispose();
    };
  }, [src, onError]);

  if (!texture) return null;

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[50, 64, 32]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} toneMapped={false} />
    </mesh>
  );
}

export default function PanoViewer() {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleError = useCallback(() => setFailed(true), []);

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void el.requestFullscreen();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[70vh] min-h-[420px] rounded-xl overflow-hidden bg-black shadow-2xl">
      {failed ? (
        <div className="w-full h-full overflow-x-auto">
          <div className="relative h-full min-w-[200%]">
            <Image
              src={panos[active].src}
              alt={`${panos[active].label} — panoramic view of Nitz The Loft`}
              fill
              className="object-cover"
              sizes="200vw"
            />
          </div>
        </div>
      ) : (
        <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }} dpr={[1, 2]}>
          <Sphere src={panos[active].src} onError={handleError} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            rotateSpeed={-0.35}
            autoRotate
            autoRotateSpeed={0.4}
            enableDamping
            dampingFactor={0.08}
            minPolarAngle={Math.PI / 2 - 0.9}
            maxPolarAngle={Math.PI / 2 + 0.9}
          />
        </Canvas>
      )}

      <div className="absolute top-4 left-4 flex gap-2">
        {panos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur transition ${
              i === active
                ? 'bg-resort-orange text-white'
                : 'bg-black/50 text-white/80 hover:bg-black/70'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-black/70 transition"
        aria-label="Toggle fullscreen"
      >
        ⛶ Fullscreen
      </button>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs bg-black/40 backdrop-blur px-3 py-1.5 rounded-full pointer-events-none">
        Drag to look around{failed ? ' · scroll sideways to pan' : ''}
      </p>
    </div>
  );
}
