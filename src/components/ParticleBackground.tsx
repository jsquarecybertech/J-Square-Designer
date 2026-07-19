"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, PointsProps } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-expect-error maath does not have types
import * as random from "maath/random/dist/maath-random.esm";

function ParticleCloud(props: PointsProps) {
  const ref = useRef<THREE.Points>(null);
  // Generate random points in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#08F7FE"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
}
