"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, ShieldAlert, Activity } from "lucide-react";

const STATS = [
  { label: "Global Attacks per Day", value: "30,000+", icon: Activity, color: "text-[#32D4FF]" },
  { label: "Average Breach Cost", value: "$4.45M", icon: TrendingUp, color: "text-[#FF3344]" },
  { label: "Ransomware Increase", value: "73%", icon: AlertTriangle, color: "text-[#FFB000]" },
  { label: "Days to Identify Breach", value: "204", icon: ShieldAlert, color: "text-[#954CFF]" },
];

export default function ThreatConsequences() {
  return (
    <section className="relative py-32 bg-[#030407] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF3344]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3344]"></span>
              <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">The Threat Landscape</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-6 tracking-tight">
              Cyberattacks are no longer a possibility. <br />
              <span className="text-gray-500">They are a certainty.</span>
            </h2>
            
            <p className="font-body text-gray-400 text-lg leading-relaxed mb-8">
              In a hyper-connected global economy, conventional firewalls and legacy antivirus solutions fail to stop sophisticated state-sponsored actors and automated ransomware syndicates. The cost of a breach extends beyond capital—it destroys trust.
            </p>

            <div className="flex gap-4">
              <div className="h-16 w-1 bg-[#FF3344] rounded-full"></div>
              <div>
                <p className="font-heading font-bold text-white text-xl">The Consequence of Inaction</p>
                <p className="font-body text-gray-500 text-sm mt-1">Loss of IP, crippling regulatory fines, and permanent reputational damage.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {STATS.map((stat, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 bg-[#0A0A0C] hover:bg-[#111114] hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)] group cursor-default"
              >
                <stat.icon className={`${stat.color} mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300`} size={24} strokeWidth={1.5} />
                <div className="font-heading font-bold text-3xl text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{stat.value}</div>
                <div className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
