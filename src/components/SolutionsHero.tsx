"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Neural Network Particle System
function NeuralNetwork(props: any) {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => {
    // Generate points on a sphere for the network
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.5 + Math.random() * 1.5; // Radius variation
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

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
          color="#32D4FF"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function SolutionsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#030407] overflow-hidden pt-20">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <fog attach="fog" args={["#030407", 3, 7]} />
          <ambientLight intensity={0.5} />
          <NeuralNetwork />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Global Lighting Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#954CFF]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full shadow-2xl mb-8 bg-white/[0.02] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E572] animate-pulse"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Proactive Security Strategies</span>
          </div>
          
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] text-white tracking-tight mb-6">
            Cybersecurity Solutions Built for <span className="text-gradient">Modern Organizations</span>
          </h1>
          
          <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Protecting businesses against evolving cyber threats through proactive, intelligence-driven security architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="group relative px-8 py-4 rounded-full bg-white text-black font-body text-sm font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#32D4FF] to-[#954CFF] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#methodology" className="px-8 py-4 rounded-full glass-panel text-white font-body text-sm font-medium tracking-wide hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 shadow-lg">
              View Methodology
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
