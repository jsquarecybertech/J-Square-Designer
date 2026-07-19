"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function BeforeAfterCards() {
  return (
    <section className="relative py-32 bg-[#030407] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">The J Square Difference</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-6 tracking-tight">
            Security <span className="text-gray-500">vs.</span> <span className="text-gradient">Immunity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Before Card */}
          <motion.div 
            className="glass-panel border border-[#FF3344]/20 rounded-2xl p-10 bg-gradient-to-b from-[#0A0A0C] to-[#FF3344]/5 flex flex-col h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#FF3344]/10 flex items-center justify-center border border-[#FF3344]/20">
                <XCircle className="text-[#FF3344]" size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">Legacy Security</h3>
            </div>
            
            <ul className="flex flex-col gap-6 flex-1">
              {[
                "Reactive threat detection resulting in massive dwell times.",
                "Siloed tools requiring manual correlation and intervention.",
                "Static defenses easily bypassed by polymorphic malware.",
                "Compliance-focused, treating security as a checklist.",
                "Unpredictable recovery times leading to severe business disruption."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3344] mt-2 shrink-0"></div>
                  <p className="font-body text-gray-400 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After Card */}
          <motion.div 
            className="glass-panel border border-[#32D4FF]/20 rounded-2xl p-10 bg-gradient-to-b from-[#0A0A0C] to-[#32D4FF]/5 flex flex-col h-full shadow-[0_20px_60px_-15px_rgba(50,212,255,0.1)] relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glossy overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#32D4FF]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#32D4FF]/10 flex items-center justify-center border border-[#32D4FF]/20">
                <CheckCircle2 className="text-[#32D4FF]" size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">J Square Architecture</h3>
            </div>
            
            <ul className="flex flex-col gap-6 flex-1 relative z-10">
              {[
                "Proactive threat hunting stopping attacks before execution.",
                "Unified SOAR platform automating containment and remediation.",
                "AI-driven heuristics identifying unknown zero-day vulnerabilities.",
                "Resilience-focused, engineering systems to withstand attacks.",
                "Guaranteed business continuity and sub-hour incident response."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#32D4FF] mt-2 shrink-0 shadow-[0_0_8px_#32D4FF]"></div>
                  <p className="font-body text-gray-300 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
