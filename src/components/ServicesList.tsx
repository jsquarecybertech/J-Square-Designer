"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, Lock, Server, Eye, Zap, Crosshair, Wrench, Search, Scale, Target, FileSearch } from "lucide-react";

const SERVICES = [
  {
    id: "enterprise",
    title: "Enterprise Security",
    icon: Shield,
    color: "text-[#32D4FF]",
    desc: "Unified, AI-driven defense platforms that integrate seamlessly across on-prem and cloud environments to protect against sophisticated APTs.",
    deliverables: ["Centralized visibility", "Automated threat response", "Reduced operational overhead"]
  },
  {
    id: "cloud",
    title: "Cloud Protection",
    icon: Cloud,
    color: "text-[#00E572]",
    desc: "Continuous Cloud Security Posture Management (CSPM) and runtime workload protection to secure multi-cloud deployments.",
    deliverables: ["Real-time compliance checks", "Container security", "API protection"]
  },
  {
    id: "zerotrust",
    title: "Zero Trust Architecture",
    icon: Lock,
    color: "text-[#954CFF]",
    desc: "Strict identity verification, device health checks, and micro-segmentation for every access request to minimize lateral movement.",
    deliverables: ["Minimized blast radius", "Secure remote access", "Identity-first security"]
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    icon: Server,
    color: "text-[#FFB000]",
    desc: "Shift-left security integrating automated testing directly into the CI/CD pipeline for faster, secure releases.",
    deliverables: ["Faster secure releases", "Reduced remediation costs", "Developer empowerment"]
  },
  {
    id: "soc",
    title: "SOC Monitoring",
    icon: Eye,
    color: "text-[#32D4FF]",
    desc: "Managed Detection and Response (MDR) backed by elite analysts and machine learning for 24/7/365 network coverage.",
    deliverables: ["24/7/365 coverage", "Rapid triage", "Proactive threat hunting"]
  },
  {
    id: "ir",
    title: "Incident Response",
    icon: Zap,
    color: "text-[#FF3344]",
    desc: "Retained elite response teams ready to deploy instantly to contain and eradicate threats with guaranteed SLAs.",
    deliverables: ["Sub-hour SLA", "Forensic preservation", "Business continuity"]
  },
  {
    id: "threat",
    title: "Threat Intelligence",
    icon: Crosshair,
    color: "text-[#954CFF]",
    desc: "Actionable, tailored intelligence gathered from the dark web and global sensor networks for proactive defense.",
    deliverables: ["Proactive defense", "Strategic planning", "Adversary profiling"]
  },
  {
    id: "vuln",
    title: "Vulnerability Management",
    icon: Wrench,
    color: "text-[#00E572]",
    desc: "Continuous, automated scanning and risk-based prioritization of patches to reduce attack surfaces.",
    deliverables: ["Reduced attack surface", "Compliance adherence", "Prioritized workflows"]
  },
  {
    id: "forensics",
    title: "Digital Forensics",
    icon: Search,
    color: "text-[#32D4FF]",
    desc: "Deep-dive forensic analysis to reconstruct events, determine root causes, and gather legally admissible evidence.",
    deliverables: ["Root cause identification", "Post-incident hardening", "Litigation support"]
  },
  {
    id: "compliance",
    title: "Compliance Management",
    icon: Scale,
    color: "text-[#FFB000]",
    desc: "Automated mapping of security controls to global frameworks (ISO, SOC2, HIPAA) to navigate complex regulatory requirements.",
    deliverables: ["Audit readiness", "Avoided fines", "Streamlined reporting"]
  },
  {
    id: "redteam",
    title: "Red Team Operations",
    icon: Target,
    color: "text-[#FF3344]",
    desc: "Full-scope, objective-based simulated attacks to stress-test people, processes, and technology against real-world threats.",
    deliverables: ["Realistic readiness assessment", "Identified blind spots", "Improved blue team skills"]
  },
  {
    id: "smb",
    title: "Small Business Security",
    icon: FileSearch,
    color: "text-[#00E572]",
    desc: "Packaged, turnkey security solutions delivering enterprise-grade protection at scale with predictable costs.",
    deliverables: ["Predictable costs", "Zero management overhead", "Immediate protection"]
  }
];

export default function ServicesList() {
  return (
    <section className="relative py-24 bg-[#0A0A0C]">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel border border-white/5 rounded-3xl p-8 bg-[#030407] hover:border-white/20 transition-colors group flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <service.icon className={`${service.color} group-hover:scale-110 transition-transform`} size={28} />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                {service.title}
              </h3>
              
              <p className="font-body text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div>
                <h4 className="font-secondary text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-3 border-b border-white/5 pb-2">
                  Deliverables
                </h4>
                <ul className="flex flex-col gap-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-body text-xs text-gray-300">
                      <span className="text-[#32D4FF] mt-0.5">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
