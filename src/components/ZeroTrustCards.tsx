"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { UserCheck, MonitorSmartphone, LayoutGrid, Database, Network, Eye, Cpu } from "lucide-react";

const PILLARS = [
  { id: "identity", name: "Identity", icon: UserCheck, color: "text-[#32D4FF]" },
  { id: "device", name: "Device", icon: MonitorSmartphone, color: "text-[#00E572]" },
  { id: "network", name: "Network", icon: Network, color: "text-[#FFB000]" },
  { id: "app", name: "Application", icon: LayoutGrid, color: "text-[#954CFF]" },
  { id: "data", name: "Data", icon: Database, color: "text-[#FF3344]" },
  { id: "visibility", name: "Visibility", icon: Eye, color: "text-[#32D4FF]" },
  { id: "automation", name: "Automation", icon: Cpu, color: "text-[#00E572]" }
];

export default function ZeroTrustCards() {
  return (
    <section className="relative py-32 bg-[#030407] border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3344]"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Never Trust, Always Verify</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl leading-tight text-white mb-6">
            The 7 Pillars of <span className="text-gradient">Zero Trust</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {PILLARS.map((pillar) => (
            <TiltCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function TiltCard({ pillar }: { pillar: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="w-40 h-40 md:w-48 md:h-48 cursor-crosshair"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full glass-panel border border-white/10 rounded-2xl bg-[#0A0A0C]/80 flex flex-col items-center justify-center gap-4 shadow-xl hover:border-white/30 transition-colors duration-500"
      >
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/5 flex items-center justify-center relative shadow-inner">
          <pillar.icon className={pillar.color} size={32} />
        </div>
        <span className="font-heading font-bold text-sm text-white tracking-wide">{pillar.name}</span>
      </motion.div>
    </motion.div>
  );
}
