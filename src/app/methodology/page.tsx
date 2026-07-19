"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Radar, List, ShieldAlert, Crosshair, CheckCircle, AlertTriangle, FileText, Wrench, RefreshCw, Award } from "lucide-react";

const STEPS = [
  { id: 1, title: "Reconnaissance", icon: Search, desc: "Gathering intelligence and mapping the attack surface without actively engaging the target systems.", color: "#00F0FF" },
  { id: 2, title: "Scanning", icon: Radar, desc: "Active probing to identify live hosts, open ports, and running services across the infrastructure.", color: "#08F7FE" },
  { id: 3, title: "Enumeration", icon: List, desc: "Extracting detailed information such as user names, network shares, and system routing tables.", color: "#B026FF" },
  { id: 4, title: "Vulnerability Assessment", icon: ShieldAlert, desc: "Systematic review of security weaknesses using automated tools and manual verification.", color: "#FF003C" },
  { id: 5, title: "Exploitation", icon: Crosshair, desc: "Safe execution of attacks to verify vulnerabilities and determine the potential business impact.", color: "#FF003C" },
  { id: 6, title: "Validation", icon: CheckCircle, desc: "Confirming successful exploitation and documenting the attack vectors and compromised data.", color: "#FFB000" },
  { id: 7, title: "Risk Analysis", icon: AlertTriangle, desc: "Evaluating the severity of findings based on exploitability, impact, and business context.", color: "#FFB000" },
  { id: 8, title: "Report Generation", icon: FileText, desc: "Creating comprehensive documentation detailing findings, risks, and actionable remediation steps.", color: "#00F0FF" },
  { id: 9, title: "Remediation", icon: Wrench, desc: "Collaborating with your team to patch vulnerabilities, update configurations, and secure systems.", color: "#00FF41" },
  { id: 10, title: "Retesting", icon: RefreshCw, desc: "Secondary assessment to verify that all identified vulnerabilities have been successfully resolved.", color: "#00FF41" },
  { id: 11, title: "Certification", icon: Award, desc: "Issuing formal compliance and security certification upon successful remediation.", color: "#08F7FE" },
];

export default function MethodologyPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <div className="pt-32 pb-24 relative min-h-screen" ref={containerRef}>
      
      {/* Background Neural Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#B026FF]"></span>
            <span className="font-secondary text-xs tracking-widest text-[#B026FF] uppercase">The Approach</span>
            <span className="w-8 h-[1px] bg-[#B026FF]"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl text-white mb-6"
          >
            Tactical <span className="text-gradient">Methodology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-400 text-lg"
          >
            Our battle-tested, structured approach to dismantling security perimeters and fortifying digital assets.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Center Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full hidden md:block"></div>
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#00F0FF] via-[#B026FF] to-[#00FF41] -translate-x-1/2 rounded-full hidden md:block shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="flex flex-col gap-12 md:gap-24">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[45%]"></div>
                  
                  {/* Center Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0A0F1D] border-2 flex items-center justify-center z-20 shadow-lg hidden md:flex"
                    style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}40` }}
                  >
                    <step.icon size={20} color={step.color} />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-[45%] pl-16 md:pl-0"
                  >
                    <div className="glass-panel p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-white/20 transition-colors group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: step.color }}></div>
                      
                      {/* Step Number Watermark */}
                      <div className="absolute -right-4 -bottom-8 text-9xl font-heading font-black opacity-[0.03] select-none text-white pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                        {step.id < 10 ? `0${step.id}` : step.id}
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/40 border border-white/5 md:hidden" style={{ borderColor: `${step.color}40` }}>
                          <step.icon size={18} color={step.color} />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(45deg, ${step.color}, #ffffff)` }}>
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="font-body text-gray-400 text-sm leading-relaxed relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
