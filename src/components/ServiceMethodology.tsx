"use client";

import { motion } from "framer-motion";
import { Search, ShieldAlert, Cpu, TerminalSquare } from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "Discovery & Scoping",
    desc: "Mapping the attack surface, identifying critical assets, and defining the rules of engagement.",
    icon: Search
  },
  {
    step: "02",
    name: "Active Reconnaissance",
    desc: "Gathering threat intelligence, identifying misconfigurations, and weaponizing exploits tailored to your stack.",
    icon: ShieldAlert
  },
  {
    step: "03",
    name: "Exploitation & Lateral Movement",
    desc: "Executing the attack chain, bypassing perimeter defenses, and attempting privilege escalation.",
    icon: Cpu
  },
  {
    step: "04",
    name: "Remediation & Debrief",
    desc: "Delivering actionable technical reports, patching vulnerabilities, and fortifying the architecture.",
    icon: TerminalSquare
  }
];

export default function ServiceMethodology() {
  return (
    <section className="relative py-24 bg-[#030407] border-t border-white/5 overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-[#FF3344]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
            Engagement <span className="text-gradient">Lifecycle</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Our offensive security teams execute a rigorous, battle-tested methodology designed to emulate advanced persistent threats.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STAGES.map((stage, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number & Icon Node */}
                <div className="w-24 h-24 rounded-full bg-[#0A0A0C] border border-white/10 flex items-center justify-center relative z-10 mb-8 shadow-xl group-hover:border-[#FF3344]/50 transition-colors">
                  <div className="absolute inset-0 bg-[#FF3344]/0 group-hover:bg-[#FF3344]/10 rounded-full transition-colors"></div>
                  <stage.icon className="text-[#FF3344] opacity-80 group-hover:opacity-100 transition-opacity" size={32} />
                  
                  {/* Floating Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-black font-heading font-bold flex items-center justify-center text-xs shadow-lg">
                    {stage.step}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-4">{stage.name}</h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
