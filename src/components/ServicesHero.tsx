"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import { Terminal } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-[#030407] overflow-hidden pt-32 pb-20">
      <ParticleBackground />
      
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none mask-radial-fade"></div>
      
      {/* Sharp Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#FF3344]/50 to-transparent shadow-[0_0_20px_#FF3344]"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#FF3344]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full shadow-2xl mb-8 bg-[#0A0A0C]/50 backdrop-blur-md">
            <Terminal size={14} className="text-[#FF3344]" />
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Tactical Engagements</span>
          </div>
          
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] text-white tracking-tight mb-8">
            Expert-Led <br />
            <span className="text-gradient">Cyber Operations</span>
          </h1>
          
          <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            Beyond automated defenses, we deploy elite red teams, incident responders, and compliance auditors to actively hunt threats and validate your security posture.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
