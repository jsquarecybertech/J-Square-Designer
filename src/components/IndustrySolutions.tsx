"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Landmark, GraduationCap, Building2, Factory, ShoppingBag, Rocket, LayoutDashboard, ArrowRight } from "lucide-react";

const INDUSTRIES = [
  { 
    id: "healthcare", 
    name: "Healthcare", 
    icon: Stethoscope, 
    color: "#00E572", 
    desc: "HIPAA-compliant architectures securing patient data and critical IoMT devices from ransomware.",
    threats: ["Ransomware targeting hospitals", "Patient data exfiltration", "Compromised IoMT devices"],
    capabilities: ["IoMT Micro-segmentation", "EHR Database Encryption", "24/7 Threat Hunting"],
    compliance: ["HIPAA", "HITECH", "GDPR"]
  },
  { 
    id: "finance", 
    name: "Finance", 
    icon: Landmark, 
    color: "#32D4FF", 
    desc: "PCI-DSS and SOX compliant defense securing high-frequency transactions and financial data.",
    threats: ["High-frequency trading manipulation", "SWIFT network attacks", "Insider threats"],
    capabilities: ["Real-time Transaction Monitoring", "Fraud Detection AI", "Network Anomaly Detection"],
    compliance: ["PCI-DSS", "SOX", "GLBA"]
  },
  { 
    id: "education", 
    name: "Education", 
    icon: GraduationCap, 
    color: "#FFB000", 
    desc: "Protecting expansive campus networks, student data, and research IP against distributed threats.",
    threats: ["DDoS against campus networks", "Research IP theft", "Phishing campaigns"],
    capabilities: ["Campus-wide Segmentation", "Identity Access Management", "Cloud Data Loss Prevention"],
    compliance: ["FERPA", "CIPA", "GDPR"]
  },
  { 
    id: "gov", 
    name: "Government", 
    icon: Building2, 
    color: "#954CFF", 
    desc: "NIST and CMMC aligned Zero Trust frameworks for municipal and federal infrastructure.",
    threats: ["Nation-state APTs", "Critical infrastructure sabotage", "Supply chain compromise"],
    capabilities: ["Air-gapped Network Security", "Advanced Threat Intelligence", "Military-grade Encryption"],
    compliance: ["NIST", "CMMC", "FedRAMP"]
  },
  { 
    id: "manufacturing", 
    name: "Manufacturing", 
    icon: Factory, 
    color: "#FF3344", 
    desc: "IT/OT convergence security protecting supply chains and industrial control systems (ICS).",
    threats: ["ICS/SCADA hijacking", "Supply chain disruption", "Industrial espionage"],
    capabilities: ["IT/OT Convergence Security", "SCADA Anomaly Detection", "Secure Remote Access"],
    compliance: ["IEC 62443", "NIST CSF"]
  },
  { 
    id: "retail", 
    name: "Retail", 
    icon: ShoppingBag, 
    color: "#00E572", 
    desc: "Securing omnichannel POS systems and customer PII across global storefronts.",
    threats: ["POS malware", "Credential stuffing", "Omnichannel fraud"],
    capabilities: ["POS Endpoint Protection", "Web Application Firewall (WAF)", "Customer PII Encryption"],
    compliance: ["PCI-DSS", "GDPR", "CCPA"]
  },
  { 
    id: "startup", 
    name: "Startups", 
    icon: Rocket, 
    color: "#32D4FF", 
    desc: "Scalable, out-of-the-box cloud security designed to protect IP without slowing down development.",
    threats: ["Rapid cloud misconfigurations", "Codebase IP theft", "Account takeovers"],
    capabilities: ["Automated CSPM", "Shift-left CI/CD Security", "Managed XDR"],
    compliance: ["SOC 2 Type II", "ISO 27001"]
  },
  { 
    id: "saas", 
    name: "SaaS", 
    icon: LayoutDashboard, 
    color: "#954CFF", 
    desc: "Tenant isolation and API security to protect multi-tenant architectures and user data.",
    threats: ["Cross-tenant data leakage", "API abuse and scraping", "DDoS attacks"],
    capabilities: ["Tenant Data Isolation", "API Rate Limiting & Auth", "Automated DAST/SAST"],
    compliance: ["SOC 2", "ISO 27001", "GDPR"]
  }
];

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);

  const activeData = INDUSTRIES.find(i => i.id === activeTab) || INDUSTRIES[0];

  return (
    <section className="relative py-24 bg-[#030407] border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl leading-tight text-white mb-6">
            <span className="text-gray-500">Industry-Specific</span> <br /> Defense Architectures
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Tab List */}
          <motion.div 
            className="lg:col-span-4 flex flex-col gap-2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {INDUSTRIES.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <motion.button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border border-transparent z-10 group`}
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl z-[-1] shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover background for inactive tabs */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity z-[-1]" />
                  )}

                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500 relative ${isActive ? 'bg-transparent' : 'bg-[#0A0A0C] border border-white/5'}`}>
                    {isActive && (
                       <motion.div 
                         layoutId="activeIconBg" 
                         className="absolute inset-0 bg-white/10 rounded-lg"
                         transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                       />
                    )}
                    <ind.icon className="relative z-10" color={isActive ? ind.color : "#6b7280"} size={20} />
                  </div>
                  <span className={`font-heading font-bold text-lg transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {ind.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right: Active Content & Illustration */}
          <div className="lg:col-span-8 h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full glass-panel border border-white/5 rounded-3xl p-10 flex flex-col justify-between bg-gradient-to-b from-[#0A0A0C] to-transparent relative overflow-hidden"
              >
                {/* Abstract Illustration Background */}
                <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
                  <motion.svg 
                    width="400" height="400" viewBox="0 0 400 400" 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <circle cx="200" cy="200" r="150" fill="none" stroke={activeData.color} strokeWidth="1" strokeDasharray="4 12" />
                    <circle cx="200" cy="200" r="100" fill="none" stroke={activeData.color} strokeWidth="2" strokeDasharray="20 40" />
                    <motion.circle 
                      cx="200" cy="200" r="50" fill="none" stroke={activeData.color} strokeWidth="4"
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      animate={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.svg>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <activeData.icon color={activeData.color} size={32} />
                    <h3 className="font-heading font-bold text-3xl text-white">{activeData.name} Security</h3>
                  </div>
                  <p className="font-body text-gray-300 text-lg leading-relaxed mb-8">
                    {activeData.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-8 flex-grow">
                    <div>
                      <h4 className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase mb-4">Key Threats</h4>
                      <ul className="space-y-3">
                        {activeData.threats.map((threat, i) => (
                          <li key={i} className="font-body text-sm text-gray-300 flex items-start gap-3">
                            <span className="text-[#FF3344] mt-1 shrink-0">▹</span> 
                            <span>{threat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase mb-4">Capabilities</h4>
                      <ul className="space-y-3">
                        {activeData.capabilities.map((cap, i) => (
                          <li key={i} className="font-body text-sm text-gray-300 flex items-start gap-3">
                            <span style={{ color: activeData.color }} className="mt-1 shrink-0">▹</span> 
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div>
                      <h4 className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase mb-3">Compliance</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeData.compliance.map((comp, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-gray-300">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Miniature Data flow UI to keep the nice animation but save space */}
                    <div className="relative w-32 h-12 rounded-xl flex items-end justify-between px-2 overflow-hidden">
                       <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none mix-blend-overlay"></div>
                       {[
                         [20, 60, 30, 80, 40],
                         [40, 80, 50, 90, 60],
                         [30, 70, 40, 80, 50],
                         [60, 30, 80, 40, 70],
                         [50, 90, 60, 40, 80]
                       ].map((sequence, i) => (
                         <motion.div 
                           key={i} 
                           className="w-3 rounded-t-sm relative z-10 shadow-[0_0_10px_currentColor]" 
                           style={{ backgroundColor: activeData.color, color: activeData.color }}
                           initial={{ height: "10%" }}
                           animate={{ height: sequence.map(h => `${h}%`) }}
                           transition={{ 
                             duration: 4, 
                             repeat: Infinity, 
                             ease: "easeInOut",
                             times: [0, 0.25, 0.5, 0.75, 1],
                             delay: i * 0.15 
                           }}
                         ></motion.div>
                       ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
