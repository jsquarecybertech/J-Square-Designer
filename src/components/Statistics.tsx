"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Success Rate", value: 99, suffix: "%", color: "#00F0FF" },
  { label: "Response Time", value: 1, suffix: " Day", color: "#B026FF" },
  { label: "Security Audits", value: 22, suffix: "+", color: "#00FF41" },
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-48 h-48 rounded-full border border-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center relative bg-black/20 backdrop-blur-sm z-10 glass-panel">
                <svg className="absolute inset-0 w-full h-full -rotate-90" aria-hidden="true">
                  <circle
                    cx="96"
                    cy="96"
                    r="90"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="96"
                    cy="96"
                    r="90"
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="4"
                    strokeDasharray={565}
                    initial={{ strokeDashoffset: 565 }}
                    animate={isInView ? { strokeDashoffset: 565 - (565 * stat.value) / 100 } : { strokeDashoffset: 565 }}
                    transition={{ type: "spring", bounce: 0.25, duration: 2, delay: index * 0.2 + 0.5 }}
                    style={{ filter: `drop-shadow(0 0 3px ${stat.color})` }}
                  />
                </svg>
                <div className="flex flex-col items-center" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
                  <div className="text-4xl font-heading font-bold text-white relative z-20 flex items-baseline" aria-hidden="true">
                    {stat.value}
                    <span className="text-xl text-gray-400" style={{ color: stat.color }}>{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-secondary tracking-widest text-gray-400 uppercase mt-2 text-center max-w-[120px]" aria-hidden="true">
                    {stat.label}
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute inset-0 rounded-full blur-[40px] -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: stat.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
