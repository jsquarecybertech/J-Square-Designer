"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import ResourcesGrid from "@/components/ResourcesGrid";

export default function Resources() {
  return (
    <div className="relative min-h-screen bg-[#030407] pt-32 pb-20">
      <ParticleBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E572]"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Knowledge Base</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] text-white tracking-tight mb-6">
            Threat Intelligence & <span className="text-gradient">Resources</span>
          </h1>
          <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
            Access our latest research, whitepapers, and global threat reports.
          </p>
        </motion.div>
        
        <ResourcesGrid />
      </div>
    </div>
  );
}
