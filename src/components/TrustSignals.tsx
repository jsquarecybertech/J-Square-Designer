"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, FileKey, Target } from "lucide-react";

const CERTIFICATIONS = [
  "ISO/IEC 27001:2022",
  "SOC 2 Type II",
  "NIST Cybersecurity Framework",
  "PCI DSS Level 1",
  "CIS Controls v8"
];

const LOGOS = ["ACME Corp", "Stark Ind.", "Wayne Ent.", "Cyberdyne", "Umbrella", "Initech"];

export default function TrustSignals() {
  return (
    <section className="relative py-24 bg-[#030407] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Trust Header */}
        <div className="text-center mb-16">
          <p className="font-secondary text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-4">Trusted by industry leaders globally</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Uncompromising Standards
          </h2>
        </div>

        {/* Client Logos (Placeholder) */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 mb-32 grayscale">
          {LOGOS.map((logo, i) => (
            <motion.div 
              key={i} 
              className="font-heading font-bold text-xl text-gray-400 select-none"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {logo}
            </motion.div>
          ))}
        </div>

        {/* Compliance and Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="glass-panel border border-white/5 rounded-2xl p-8 bg-[#0A0A0C]">
            <ShieldCheck className="text-[#00E572] mb-6" size={32} />
            <h3 className="font-heading text-xl font-bold text-white mb-4">Compliance Frameworks</h3>
            <ul className="flex flex-col gap-2">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i} className="font-body text-xs text-gray-400 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#00E572]"></div>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel border border-white/5 rounded-2xl p-8 bg-[#0A0A0C]">
            <FileKey className="text-[#FFB000] mb-6" size={32} />
            <h3 className="font-heading text-xl font-bold text-white mb-2">Security Research</h3>
            <p className="font-body text-sm text-gray-400 mb-4 leading-relaxed">
              Zero-day disclosures and deep-dive threat reports published quarterly.
            </p>
            <a href="/resources" className="inline-flex items-center gap-2 font-secondary text-[10px] tracking-widest text-[#FFB000] hover:text-white transition-colors">
              VIEW PUBLICATIONS <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>

          <div className="glass-panel border border-white/5 rounded-2xl p-8 bg-[#0A0A0C]">
            <Target className="text-[#954CFF] mb-6" size={32} />
            <h3 className="font-heading text-xl font-bold text-white mb-2">Years of Excellence</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-heading font-bold text-5xl text-white tracking-tighter">2<span className="text-[#954CFF]">+</span></span>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              2 years of securing the most targeted organizations on the planet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
