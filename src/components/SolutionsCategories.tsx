"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Cloud, Lock, Server, Eye, Zap, Crosshair, FileSearch, Scale, Wrench, Search, Target, ChevronDown, CheckCircle2 } from "lucide-react";

const CATEGORIES = [
  {
    id: "enterprise",
    title: "Enterprise Security",
    icon: Shield,
    color: "text-[#32D4FF]",
    bg: "bg-[#32D4FF]/10",
    problem: "Massive attack surfaces with complex, legacy infrastructure vulnerable to sophisticated APTs.",
    solution: "Unified, AI-driven defense platforms that integrate seamlessly across on-prem and cloud environments.",
    benefits: ["Centralized visibility", "Automated threat response", "Reduced operational overhead"],
    tech: ["Next-Gen SIEM", "XDR", "Behavioral Analytics"]
  },
  {
    id: "cloud",
    title: "Cloud Protection",
    icon: Cloud,
    color: "text-[#00E572]",
    bg: "bg-[#00E572]/10",
    problem: "Misconfigurations and lack of visibility in multi-cloud deployments leading to data breaches.",
    solution: "Continuous Cloud Security Posture Management (CSPM) and runtime workload protection.",
    benefits: ["Real-time compliance checks", "Container security", "API protection"],
    tech: ["CSPM", "CWPP", "CNAPP"]
  },
  {
    id: "zerotrust",
    title: "Zero Trust Architecture",
    icon: Lock,
    color: "text-[#954CFF]",
    bg: "bg-[#954CFF]/10",
    problem: "Implicit trust models allowing lateral movement once the perimeter is breached.",
    solution: "Strict identity verification, device health checks, and micro-segmentation for every access request.",
    benefits: ["Minimized blast radius", "Secure remote access", "Identity-first security"],
    tech: ["ZTNA", "Micro-segmentation", "IAM"]
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    icon: Server,
    color: "text-[#FFB000]",
    bg: "bg-[#FFB000]/10",
    problem: "Security bottlenecks slowing down deployment pipelines and resulting in vulnerable releases.",
    solution: "Shift-left security integrating automated testing directly into the CI/CD pipeline.",
    benefits: ["Faster secure releases", "Reduced remediation costs", "Developer empowerment"],
    tech: ["SAST/DAST", "Container Scanning", "IaC Security"]
  },
  {
    id: "soc",
    title: "SOC Monitoring",
    icon: Eye,
    color: "text-[#32D4FF]",
    bg: "bg-[#32D4FF]/10",
    problem: "Alert fatigue and lack of in-house expertise to monitor networks 24/7.",
    solution: "Managed Detection and Response (MDR) backed by elite analysts and machine learning.",
    benefits: ["24/7/365 coverage", "Rapid triage", "Proactive threat hunting"],
    tech: ["MDR", "SOAR", "Threat Intel Feeds"]
  },
  {
    id: "ir",
    title: "Incident Response",
    icon: Zap,
    color: "text-[#FF3344]",
    bg: "bg-[#FF3344]/10",
    problem: "Chaotic, delayed responses to active breaches causing massive data and financial loss.",
    solution: "Retained elite response teams ready to deploy instantly to contain and eradicate threats.",
    benefits: ["Sub-hour SLA", "Forensic preservation", "Business continuity"],
    tech: ["EDR", "Digital Forensics", "Crisis Management"]
  },
  {
    id: "threat",
    title: "Threat Intelligence",
    icon: Crosshair,
    color: "text-[#954CFF]",
    bg: "bg-[#954CFF]/10",
    problem: "Operating blindly without knowledge of emerging industry-specific attack vectors.",
    solution: "Actionable, tailored intelligence gathered from the dark web and global sensor networks.",
    benefits: ["Proactive defense", "Strategic planning", "Adversary profiling"],
    tech: ["Dark Web Monitoring", "OSINT", "STIX/TAXII"]
  },
  {
    id: "vuln",
    title: "Vulnerability Management",
    icon: Wrench,
    color: "text-[#00E572]",
    bg: "bg-[#00E572]/10",
    problem: "Unpatched systems and unknown assets leaving critical entry points open.",
    solution: "Continuous, automated scanning and risk-based prioritization of patches.",
    benefits: ["Reduced attack surface", "Compliance adherence", "Prioritized workflows"],
    tech: ["ASVM", "Risk Scoring", "Automated Patching"]
  },
  {
    id: "forensics",
    title: "Digital Forensics",
    icon: Search,
    color: "text-[#32D4FF]",
    bg: "bg-[#32D4FF]/10",
    problem: "Inability to determine the root cause, scope, and timeline of a cyber incident.",
    solution: "Deep-dive forensic analysis to reconstruct events and gather legally admissible evidence.",
    benefits: ["Root cause identification", "Post-incident hardening", "Litigation support"],
    tech: ["Memory Forensics", "Disk Imaging", "Malware Reverse Engineering"]
  },
  {
    id: "compliance",
    title: "Compliance Management",
    icon: Scale,
    color: "text-[#FFB000]",
    bg: "bg-[#FFB000]/10",
    problem: "Navigating complex, ever-changing regulatory requirements across multiple jurisdictions.",
    solution: "Automated mapping of security controls to global frameworks (ISO, SOC2, HIPAA).",
    benefits: ["Audit readiness", "Avoided fines", "Streamlined reporting"],
    tech: ["GRC Platforms", "Continuous Auditing", "Control Mapping"]
  },
  {
    id: "redteam",
    title: "Red Team Operations",
    icon: Target,
    color: "text-[#FF3344]",
    bg: "bg-[#FF3344]/10",
    problem: "Uncertainty about whether defenses can withstand a targeted, real-world attack.",
    solution: "Full-scope, objective-based simulated attacks to stress-test people, processes, and tech.",
    benefits: ["Realistic readiness assessment", "Identified blind spots", "Improved blue team skills"],
    tech: ["Social Engineering", "Physical Breach", "Advanced Persistent Simulation"]
  },
  {
    id: "smb",
    title: "Small Business Security",
    icon: FileSearch,
    color: "text-[#00E572]",
    bg: "bg-[#00E572]/10",
    problem: "Lack of enterprise budget resulting in inadequate defenses against automated attacks.",
    solution: "Packaged, turnkey security solutions delivering enterprise-grade protection at scale.",
    benefits: ["Predictable costs", "Zero management overhead", "Immediate protection"],
    tech: ["Turnkey XDR", "Cloud Backup", "Managed Antivirus"]
  }
];

export default function SolutionsCategories() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-[#030407]" id="methodology">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-5xl leading-tight text-white mb-6">
            Core <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Comprehensive security domains engineered to protect every layer of your digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const isExpanded = expandedId === cat.id;
            return (
              <motion.div 
                key={cat.id}
                layout
                initial={{ borderRadius: 16 }}
                className={`glass-panel border overflow-hidden transition-colors duration-300 ${isExpanded ? 'border-white/20 bg-[#0A0A0C]' : 'border-white/5 bg-[#0A0A0C]/50 hover:bg-[#0A0A0C] hover:border-white/10'}`}
              >
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between"
                  onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${cat.bg} border border-white/5 flex items-center justify-center`}>
                      <cat.icon className={cat.color} size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">{cat.title}</h3>
                  </div>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronDown className="text-gray-500" size={20} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <div className="space-y-6">
                          
                          <div>
                            <span className="font-secondary text-[10px] tracking-widest text-[#FF3344] uppercase block mb-2">The Problem</span>
                            <p className="font-body text-sm text-gray-400 leading-relaxed">{cat.problem}</p>
                          </div>
                          
                          <div>
                            <span className="font-secondary text-[10px] tracking-widest text-[#00E572] uppercase block mb-2">Our Solution</span>
                            <p className="font-body text-sm text-gray-300 leading-relaxed">{cat.solution}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase block mb-2">Benefits</span>
                              <ul className="space-y-2">
                                {cat.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-start gap-2 font-body text-xs text-gray-400">
                                    <CheckCircle2 size={14} className="text-[#32D4FF] shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <span className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase block mb-2">Tech Stack</span>
                              <div className="flex flex-wrap gap-2">
                                {cat.tech.map((tech, i) => (
                                  <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 font-mono text-[9px] text-gray-300">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-2">
                            <a href="/contact" className="w-full inline-block text-center px-4 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 font-body text-xs text-white transition-colors">
                              Deploy {cat.title} &rarr;
                            </a>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
