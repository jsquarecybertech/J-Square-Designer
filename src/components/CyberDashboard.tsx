"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, Shield, Lock, Activity, Server, Network } from "lucide-react";

const TERMINAL_LINES = [
  { text: "Initializing J Square Cyber Tech protocols...", delay: 0 },
  { text: "Establishing encrypted tunnel [AES-256-GCM]...", delay: 800 },
  { text: "Bypassing external firewalls...", delay: 1500, color: "text-[#FFB000]" },
  { text: "Accessing mainframe...", delay: 2200 },
  { text: "Analyzing threat vectors...", delay: 2700 },
  { text: "Scanning global network topology...", delay: 3200 },
  { text: "Vulnerabilities detected: 0", delay: 4000, color: "text-[#00E572]" },
  { text: "System fully secured.", delay: 4500, color: "text-[#32D4FF]" },
  { text: "Awaiting next command...", delay: 5200 }
];

export default function CyberDashboard() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    const timeouts = TERMINAL_LINES.map((line, index) => {
      return setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center perspective-1000">
      {/* 3D Floating Terminal Container */}
      <motion.div
        className="w-[105%] h-[105%] relative transform-style-3d"
        animate={{
          rotateX: [2, -2, 2],
          rotateY: [-4, 4, -4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main Dashboard Panel */}
        <div className="absolute inset-4 glass-panel rounded-2xl overflow-hidden flex flex-col bg-[#0A0A0C]/90 backdrop-blur-3xl border border-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
          
          {/* Header bar */}
          <div className="h-12 bg-white/[0.02] border-b border-white/5 flex items-center px-5 justify-between">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3344]/50 border border-[#FF3344]/50"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB000]/50 border border-[#FFB000]/50"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E572]/50 border border-[#00E572]/50"></span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Terminal size={14} />
              <span className="font-mono text-[10px] tracking-widest uppercase">root@jsquare-sys:~</span>
            </div>
            <div className="w-14"></div> {/* Spacer */}
          </div>

          {/* Grid Layout inside Main Panel */}
          <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-px bg-white/5 p-px">
            
            {/* Terminal Window (Spans 2 rows, 1 col) */}
            <div className="row-span-2 bg-[#0A0A0C] p-6 font-mono text-xs flex flex-col gap-3 overflow-hidden relative">
              {TERMINAL_LINES.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: visibleLines.includes(index) ? 1 : 0, x: visibleLines.includes(index) ? 0 : -5 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-3 ${visibleLines.includes(index) ? 'flex' : 'hidden'}`}
                >
                  <span className="text-gray-600 select-none">{'>'}</span>
                  <span className={line.color || "text-gray-400"}>{line.text}</span>
                </motion.div>
              ))}
              
              {/* Blinking Cursor */}
              {visibleLines.includes(TERMINAL_LINES.length - 1) && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-3 bg-gray-500 mt-1 ml-5"
                ></motion.div>
              )}
            </div>

            {/* Top Right Widget */}
            <div className="bg-[#0A0A0C] p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase">Threat Level</span>
                <Activity size={14} className="text-[#00E572]" />
              </div>
              <div>
                <div className="font-heading text-4xl font-bold text-white tracking-tight">MIN</div>
                <div className="h-1 w-full bg-white/5 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-[#00E572] w-1/12 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Middle Right Widget */}
            <div className="bg-[#0A0A0C] p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase">Network Load</span>
                <Server size={14} className="text-[#32D4FF]" />
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-white tracking-tight flex items-baseline gap-1">
                  14.2 <span className="text-xs text-gray-500 font-secondary tracking-widest">TB/s</span>
                </div>
                {/* Mini Graph */}
                <div className="flex items-end gap-1 mt-3 h-6">
                  {[40, 70, 45, 90, 60, 30, 80, 50].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="w-full bg-[#32D4FF]/20 rounded-sm" 
                      initial={{ height: "10%" }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Full Width Widget */}
            <div className="col-span-2 bg-[#0A0A0C] p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <Network size={16} className="text-gray-400" />
                </div>
                <div>
                  <div className="font-body text-sm font-medium text-white">Global Routing</div>
                  <div className="font-secondary text-[10px] tracking-widest text-gray-500 mt-0.5">74 NODES ACTIVE</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E572] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E572]"></span>
                </span>
                <span className="font-secondary text-[10px] tracking-widest text-[#00E572]">SYNCED</span>
              </div>
            </div>

          </div>
        </div>

        {/* Floating element 1 (Subtle, refined) */}
        <motion.div 
          className="absolute top-4 -right-8 glass-panel border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-xl bg-[#111114]/90 backdrop-blur-md"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 rounded bg-[#954CFF]/10 border border-[#954CFF]/20 flex items-center justify-center">
            <Shield className="text-[#954CFF]" size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-500 font-secondary tracking-widest">FIREWALL</span>
            <span className="text-sm font-bold text-white tracking-wide">ACTIVE</span>
          </div>
        </motion.div>

        {/* Floating element 2 */}
        <motion.div 
          className="absolute -bottom-2 -left-8 glass-panel border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-xl bg-[#111114]/90 backdrop-blur-md"
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex flex-col text-right">
            <span className="text-[9px] text-gray-500 font-secondary tracking-widest">ENCRYPTION</span>
            <span className="text-sm font-bold text-[#00E572] tracking-wide">SECURE</span>
          </div>
          <div className="w-8 h-8 rounded bg-[#00E572]/10 border border-[#00E572]/20 flex items-center justify-center">
            <Lock size={14} className="text-[#00E572]" />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
