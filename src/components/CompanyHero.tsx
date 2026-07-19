"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowDown } from "lucide-react";

export default function CompanyHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#030407] overflow-hidden pt-20">
      <ParticleBackground />
      
      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#32D4FF]/50 to-transparent shadow-[0_0_20px_#32D4FF]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#954CFF]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full shadow-2xl mb-8 bg-[#0A0A0C]/50 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3344] animate-pulse"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Mission Control</span>
          </div>
          
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white tracking-tight mb-8">
            Securing the <br />
            <span className="text-gradient">Digital Future</span>
          </h1>
          
          <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            We are a global collective of elite security researchers and engineers dedicated to providing absolute immunity for the world's most critical infrastructure.
          </p>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="font-secondary text-[9px] tracking-[0.3em] text-gray-400 uppercase">Discover J Square</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-gray-500" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
