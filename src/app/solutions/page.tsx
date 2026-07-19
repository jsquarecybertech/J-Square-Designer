"use client";

import { motion } from "framer-motion";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsCategories from "@/components/SolutionsCategories";
import IndustrySolutions from "@/components/IndustrySolutions";
import SolutionsArchitecture from "@/components/SolutionsArchitecture";
import ZeroTrustCards from "@/components/ZeroTrustCards";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#030407] selection:bg-[#32D4FF]/30 selection:text-white flex flex-col">
      
      {/* 1. Hero with Three.js Neural Network */}
      <SolutionsHero />

      {/* 2. Premium Animated Cards for Core Domains */}
      <SolutionsCategories />

      {/* 3. Industry-Specific Defense Modules */}
      <IndustrySolutions />

      {/* 4. Animated Interactive Data Flow Diagram */}
      <SolutionsArchitecture />

      {/* 5. Interactive 3D Zero Trust Cards */}
      <ZeroTrustCards />

      {/* 6. Ending CTA */}
      <section className="relative py-32 bg-[#0A0A0C] border-t border-white/5 overflow-hidden">
        {/* Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E572]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to secure your business?
            </h2>
            <p className="font-body text-gray-400 text-lg mb-10">
              Schedule a strategic consultation with our architects to design a resilient defense framework for your infrastructure.
            </p>
            <a href="/contact" className="inline-block px-10 py-5 rounded-full bg-white text-black font-body text-sm font-bold tracking-wide transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Book a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
