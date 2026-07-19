"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Shield, Server, Database, Laptop, Cloud, RadioReceiver, Network, Eye, Activity } from "lucide-react";

const NODE_DATA = {
  users: {
    label: "Global Users",
    icon: Users,
    color: "text-gray-400",
    metrics: [
      { label: "Active Sessions", value: "24,592" },
      { label: "MFA Compliance", value: "100%" },
      { label: "Anomalous", value: "0" }
    ],
    status: "Healthy",
    statusColor: "text-[#00E572]"
  },
  cloud: {
    label: "Cloud Assets",
    icon: Cloud,
    color: "text-[#32D4FF]",
    metrics: [
      { label: "Active Instances", value: "342" },
      { label: "VPC Peering", value: "Secured" },
      { label: "Data Egress", value: "1.2 TB/s" }
    ],
    status: "Monitoring",
    statusColor: "text-[#32D4FF]"
  },
  soc: {
    label: "SOC Team",
    icon: Eye,
    color: "text-[#954CFF]",
    metrics: [
      { label: "Active Analysts", value: "12" },
      { label: "Avg Response", value: "2.4m" },
      { label: "Open Incidents", value: "3" }
    ],
    status: "Active",
    statusColor: "text-[#954CFF]"
  },
  firewall: {
    label: "Firewall / WAF",
    icon: Shield,
    color: "text-[#FFB000]",
    metrics: [
      { label: "Threats Blocked", value: "142k/hr" },
      { label: "Rules Active", value: "4,092" },
      { label: "DDoS Mitigation", value: "Standby" }
    ],
    status: "Defending",
    statusColor: "text-[#FFB000]"
  },
  intel: {
    label: "Threat Intel",
    icon: RadioReceiver,
    color: "text-[#FF3344]",
    metrics: [
      { label: "IoCs Tracked", value: "14.2M" },
      { label: "Feeds Synced", value: "48" },
      { label: "Zero-Day Alerts", value: "2" }
    ],
    status: "Alert",
    statusColor: "text-[#FF3344]"
  },
  endpoints: {
    label: "Endpoints",
    icon: Laptop,
    color: "text-gray-400",
    metrics: [
      { label: "Devices Secured", value: "18,402" },
      { label: "EDR Status", value: "Active" },
      { label: "Non-Compliant", value: "14" }
    ],
    status: "Updating",
    statusColor: "text-[#FFB000]"
  },
  servers: {
    label: "Internal Servers",
    icon: Server,
    color: "text-[#32D4FF]",
    metrics: [
      { label: "Uptime", value: "99.999%" },
      { label: "Workloads", value: "1,204" },
      { label: "Microseg", value: "Enforced" }
    ],
    status: "Healthy",
    statusColor: "text-[#00E572]"
  },
  database: {
    label: "Secure Database",
    icon: Database,
    color: "text-[#00E572]",
    metrics: [
      { label: "Queries/sec", value: "84,000" },
      { label: "Encryption", value: "AES-256" },
      { label: "Access Control", value: "Strict" }
    ],
    status: "Secured",
    statusColor: "text-[#00E572]"
  },
};

export default function InfrastructureDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative py-32 bg-[#030407] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E572]"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Architecture</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-6 tracking-tight">
            Zero Trust <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            A unified, multi-layered defense architecture. Every access request is authenticated, authorized, and continuously validated.
          </p>
        </div>

        {/* Diagram Container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-video glass-panel border border-white/5 rounded-2xl p-8 bg-[#0A0A0C] overflow-hidden flex flex-col justify-between">
          
          {/* Animated Connecting Lines Removed per request */}

          {/* Top Row */}
          <div className="flex justify-between relative z-10">
            <DiagramNode id="users" data={NODE_DATA.users} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
            <DiagramNode id="cloud" data={NODE_DATA.cloud} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
            <DiagramNode id="soc" data={NODE_DATA.soc} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
          </div>

          {/* Middle Row */}
          <div className="flex justify-between relative z-10 px-20">
            <DiagramNode id="firewall" data={NODE_DATA.firewall} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
            <div className="relative z-20 group">
              {/* Central Core */}
              <div className="w-24 h-24 rounded-full bg-[#00E572]/10 border border-[#00E572]/30 flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(0,229,114,0.2)] cursor-pointer">
                <div className="absolute inset-0 rounded-full border border-[#00E572]/20 animate-ping opacity-50"></div>
                <Network className="text-[#00E572] mb-1 group-hover:scale-110 transition-transform duration-300" size={28} />
                <span className="font-secondary text-[8px] tracking-widest text-white">CORE SIEM</span>
              </div>
            </div>
            <DiagramNode id="intel" data={NODE_DATA.intel} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between relative z-10">
            <DiagramNode id="endpoints" data={NODE_DATA.endpoints} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
            <DiagramNode id="servers" data={NODE_DATA.servers} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
            <DiagramNode id="database" data={NODE_DATA.database} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
          </div>

        </div>

      </div>
    </section>
  );
}

function DiagramNode({ id, data, hoveredNode, setHoveredNode }: { id: string, data: any, hoveredNode: string | null, setHoveredNode: (id: string | null) => void }) {
  const Icon = data.icon;
  const isHovered = hoveredNode === id;
  const isDimmed = hoveredNode !== null && !isHovered;

  return (
    <div 
      className="relative flex flex-col items-center gap-3 group z-20"
      onMouseEnter={() => setHoveredNode(id)}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <div className={`w-14 h-14 rounded-xl bg-[#0A0A0C] border flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer
        ${isHovered ? `border-white/30 scale-110 shadow-[0_0_20px_rgba(255,255,255,0.1)] ${data.color}` : 'border-white/10 text-gray-500'}
        ${isDimmed ? 'opacity-30' : 'opacity-100'}
      `}>
        <Icon size={24} className="transition-colors duration-300" />
      </div>
      <span className={`font-secondary text-[10px] tracking-widest uppercase transition-colors duration-300 ${isHovered ? 'text-white font-bold' : 'text-gray-400'}`}>
        {data.label}
      </span>

      {/* Data Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 glass-panel border border-white/10 rounded-xl p-4 bg-black/80 backdrop-blur-xl shadow-2xl pointer-events-none z-50"
          >
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <span className="font-secondary text-[10px] text-gray-400 uppercase tracking-widest">Telemetry</span>
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full animate-pulse bg-current ${data.statusColor}`} />
                <span className={`text-[10px] font-bold uppercase tracking-wider ${data.statusColor}`}>{data.status}</span>
              </div>
            </div>
            <div className="space-y-3">
              {data.metrics.map((metric: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-body">{metric.label}</span>
                  <span className="text-xs font-mono font-medium text-white">{metric.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
