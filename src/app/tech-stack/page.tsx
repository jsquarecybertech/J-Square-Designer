"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

const TECH_CATEGORIES = [
  {
    name: "Offensive Tools",
    tools: [
      { name: "Burp Suite", color: "#FF6633" },
      { name: "Metasploit", color: "#0055FF" },
      { name: "Nmap", color: "#22B14C" },
      { name: "OWASP ZAP", color: "#0055FF" },
      { name: "Kali Linux", color: "#557C94" },
    ]
  },
  {
    name: "Scanning & Enumeration",
    tools: [
      { name: "Nessus", color: "#0071C5" },
      { name: "OpenVAS", color: "#33CC99" },
      { name: "Wireshark", color: "#165C9D" },
    ]
  },
  {
    name: "Defense & SIEM",
    tools: [
      { name: "Splunk", color: "#FF0080" },
      { name: "Elastic Stack", color: "#00BFB3" },
      { name: "CrowdStrike", color: "#FF0000" },
      { name: "Microsoft Defender", color: "#00A4EF" },
    ]
  },
  {
    name: "Infrastructure & Cloud",
    tools: [
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "AWS", color: "#FF9900" },
      { name: "Azure", color: "#0089D6" },
      { name: "Google Cloud", color: "#4285F4" },
    ]
  },
  {
    name: "Scripting & OS",
    tools: [
      { name: "Python", color: "#3776AB" },
      { name: "PowerShell", color: "#5391FE" },
      { name: "Linux", color: "#FCC624" },
      { name: "Windows", color: "#0078D6" },
    ]
  }
];

export default function TechStackPage() {
  return (
    <div className="pt-32 pb-24 relative min-h-screen">
      
      {/* Background Particles / Grid */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-[#04070D] z-[-2]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none z-[-1]" style={{ backgroundSize: '60px 60px' }}></div>
      <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-[#00F0FF]/5 rounded-full blur-[150px] pointer-events-none z-[-1]"></div>
      <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vw] bg-[#B026FF]/5 rounded-full blur-[150px] pointer-events-none z-[-1]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#00FF41]"></span>
            <span className="font-secondary text-xs tracking-widest text-[#00FF41] uppercase">Arsenal</span>
            <span className="w-8 h-[1px] bg-[#00FF41]"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl text-white mb-6"
          >
            Technology <span className="text-gradient-cyan">Stack</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-400 text-lg"
          >
            We leverage industry-leading commercial and proprietary tools to uncover the deepest vulnerabilities and construct the strongest defenses.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {TECH_CATEGORIES.map((category, catIndex) => (
            <div key={category.name} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-heading font-bold text-2xl text-white whitespace-nowrap">{category.name}</h2>
                <div className="w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 5) * 0.1 }}
                    className="group"
                  >
                    <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center h-40 border border-[rgba(255,255,255,0.05)] hover:border-transparent transition-all duration-300 relative overflow-hidden text-center cursor-crosshair">
                      
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[20px]"
                        style={{ backgroundColor: `${tool.color}20` }}
                      ></div>
                      
                      {/* Animated border */}
                      <div 
                        className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-105 group-hover:scale-100"
                        style={{ borderColor: `${tool.color}80` }}
                      ></div>

                      {/* Initial placeholder icon using CSS shapes */}
                      <div 
                        className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                        style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}40` }}
                      >
                        <div 
                          className="w-6 h-6 rounded-sm opacity-80"
                          style={{ backgroundColor: tool.color, boxShadow: `0 0 10px ${tool.color}` }}
                        ></div>
                      </div>

                      <h3 className="font-heading font-bold text-sm text-gray-300 group-hover:text-white transition-colors relative z-10">
                        {tool.name}
                      </h3>
                      
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
