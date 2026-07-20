"use client";

import ParticleBackground from "@/components/ParticleBackground";
import CyberDashboard from "@/components/CyberDashboard";
import ThreatConsequences from "@/components/ThreatConsequences";
import AttackSimulation from "@/components/AttackSimulation";
import BeforeAfterCards from "@/components/BeforeAfterCards";
import TrustSignals from "@/components/TrustSignals";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#030407]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Refined Global Lighting Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#32D4FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#954CFF]/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Neural Network Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none mask-radial-fade"></div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            className="flex flex-col gap-6 pt-10 lg:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E572] animate-pulse"></span>
              <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">System Active // Secure</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] text-white tracking-tight">
              Securing <br />
              <span className="text-gradient">Tomorrow's</span> <br />
              Digital World.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="font-body text-gray-400 text-lg max-w-xl leading-relaxed">
              J Square Cyber Tech delivers elite, enterprise-grade cybersecurity solutions designed to defend global infrastructure against evolving digital threats. 
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-6">
              <a href="/contact" className="group relative px-8 py-4 rounded-full bg-white text-black font-body text-sm font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#32D4FF] to-[#954CFF] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative z-10">Deploy Defense</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/services" className="px-8 py-4 rounded-full glass-panel text-white font-body text-sm font-medium tracking-wide hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                Explore Capabilities
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 mt-12 pt-8 border-t border-white/5">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-bold text-white tracking-tight">99<span className="text-[#32D4FF]">%</span></span>
                <span className="font-secondary text-[10px] text-gray-500 tracking-widest">SUCCESS RATE</span>
              </div>
              <div className="w-[1px] h-10 bg-white/5"></div>
              <div className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-bold text-white tracking-tight">&lt;1<span className="text-[#32D4FF]">hr</span></span>
                <span className="font-secondary text-[10px] text-gray-500 tracking-widest">RESPONSE TIME</span>
              </div>
              <div className="w-[1px] h-10 bg-white/5"></div>
              <div className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                  <ShieldCheck size={28} className="text-[#00E572]" />
                </span>
                <span className="font-secondary text-[10px] text-gray-500 tracking-widest">ZERO BREACHES</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Dashboard Element */}
          <motion.div 
            className="relative w-full h-[500px] flex items-center justify-center lg:justify-end perspective-1000"
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <CyberDashboard />
          </motion.div>
        </div>
        
        {/* Animated scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-secondary text-[9px] tracking-[0.3em] text-gray-500 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" style={{ animationDuration: '2s' }}></div>
          </div>
        </motion.div>
      </section>

      {/* Narrative Storytelling Sections */}
      <ThreatConsequences />
      <AttackSimulation />
      <BeforeAfterCards />
      <TrustSignals />

    </div>
  );
}
