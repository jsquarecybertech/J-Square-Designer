"use client";

import { motion } from "framer-motion";
import India from "@svg-maps/india";

export default function GlobalPresence() {
  return (
    <section className="relative py-32 bg-[#030407] border-t border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-[#00E572]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E572]"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Command Center</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl leading-tight text-white mb-6">
            Always Online. <span className="text-gradient">Always Vigilant.</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Our autonomous systems are backed by elite human analysts stationed at our central Security Operations Center in Gujarat, providing relentless, 24/7 protection.
          </p>
        </div>

        {/* Global Map Container */}
        <div className="relative w-full max-w-3xl mx-auto aspect-square glass-panel border border-white/5 rounded-3xl p-8 bg-[#0A0A0C]/50 flex items-center justify-center">
          
          <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(0,229,114,0.1)]" viewBox={India.viewBox} preserveAspectRatio="xMidYMid meet">
            {India.locations.map((loc: any) => {
              const isGujarat = loc.id === "gj";
              return (
                <motion.path
                  key={loc.id}
                  id={loc.id}
                  name={loc.name}
                  d={loc.path}
                  fill={isGujarat ? "#00E572" : "#ffffff"}
                  fillOpacity={isGujarat ? 0.3 : 0.05}
                  stroke={isGujarat ? "#00E572" : "#ffffff"}
                  strokeWidth="1"
                  strokeOpacity={isGujarat ? 1 : 0.2}
                  className="cursor-pointer"
                  style={{ transformOrigin: "center" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    fillOpacity: isGujarat ? 0.5 : 0.2,
                    strokeOpacity: 1,
                    filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.8)) drop-shadow(0px 0px 10px rgba(255,255,255,0.1))",
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}

            {/* Pulsing Beacon for Anand, Gujarat */}
            <motion.circle
              cx="105" 
              cy="350" 
              r="5"
              fill="#00E572"
              className="drop-shadow-[0_0_10px_#00E572]"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Label for Anand, Gujarat */}
            <foreignObject x="120" y="335" width="160" height="60">
              <div className="whitespace-nowrap bg-[#0A0A0C] border border-[#00E572]/50 px-3 py-1.5 rounded-lg shadow-xl w-fit">
                <div className="font-heading font-bold text-white text-[12px] leading-tight">Anand, Gujarat</div>
                <div className="font-secondary text-[7px] text-[#00E572] tracking-widest uppercase mt-0.5">Global HQ & SOC</div>
              </div>
            </foreignObject>
          </svg>
          
        </div>

      </div>
    </section>
  );
}
