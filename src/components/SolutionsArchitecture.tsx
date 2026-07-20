"use client";

import { motion } from "framer-motion";
import { Globe, Shield, ShieldAlert, Cloud, Layers, Database, Eye, Crosshair } from "lucide-react";

const FLOW = [
  { id: 1, name: "Public Internet", icon: Globe, color: "text-gray-400" },
  { id: 2, name: "Next-Gen Firewall", icon: Shield, color: "text-[#FFB000]" },
  { id: 3, name: "Web App Firewall (WAF)", icon: ShieldAlert, color: "text-[#FF3344]" },
  { id: 4, name: "Cloud Infrastructure", icon: Cloud, color: "text-[#32D4FF]" },
  { id: 5, name: "Core Application", icon: Layers, color: "text-white" },
  { id: 6, name: "Encrypted Database", icon: Database, color: "text-[#00E572]" },
  { id: 7, name: "Security Operations Center", icon: Eye, color: "text-[#954CFF]" },
  { id: 8, name: "Threat Intelligence Feeds", icon: Crosshair, color: "text-[#FFB000]" },
];

export default function SolutionsArchitecture() {
  return (
    <section className="relative py-32 bg-[#030407] overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-[#32D4FF]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-5xl leading-tight text-white mb-6">
            Data Flow & <span className="text-gradient">Defense In Depth</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Every request is filtered through multiple autonomous defense layers before reaching critical data assets.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative flex flex-col items-center">
          
          {/* Central Animated Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/5"></div>
          
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#00E572] to-transparent"
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ opacity: 0.5 }}
          ></motion.div>

          {FLOW.map((node, index) => (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center mb-8 last:mb-0 w-full"
            >
              <div className="glass-panel border border-white/10 rounded-2xl p-4 flex items-center gap-4 w-64 bg-[#0A0A0C] shadow-lg">
                <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 ${node.color}`}>
                  <node.icon size={20} />
                </div>
                <span className="font-heading font-bold text-sm text-white">{node.name}</span>
              </div>
              
              {index < FLOW.length - 1 && (
                <div className="h-8 flex flex-col items-center justify-center text-gray-600 my-2">
                  <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
