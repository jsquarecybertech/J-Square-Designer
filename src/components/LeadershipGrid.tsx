"use client";

import { motion } from "framer-motion";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const LEADERS = [
  {
    name: "Jeel Makwana",
    role: "Founder & CEO",
    bg: "Leading the vision and strategy for next-generation cyber defense.",
    avatar: "JM",
    linkedin: "https://www.linkedin.com/in/jeel-makwana-110267231/"
  },
  {
    name: "Hetvi Darji",
    role: "Jr Cyber Security Analyst",
    bg: "Specializing in threat intelligence and proactive vulnerability assessments.",
    avatar: "HD",
    linkedin: "https://www.linkedin.com/in/hetvi-darji-15380b266/"
  }
];

export default function LeadershipGrid() {
  return (
    <section className="relative py-24 bg-[#0A0A0C]">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
              Executive Leadership
            </h2>
            <p className="font-body text-gray-400 text-lg">
              Guided by veterans of global intelligence and elite security research.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {LEADERS.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative glass-panel border border-white/5 rounded-2xl overflow-hidden bg-[#030407]"
            >
              {/* Avatar Placeholder (Since we don't have images) */}
              <div className="w-full h-64 bg-white/[0.02] border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] to-transparent opacity-80 z-10"></div>
                
                {/* Monochromatic stylized text as avatar */}
                <span className="font-heading font-bold text-9xl text-white/5 select-none scale-150 group-hover:scale-110 transition-transform duration-700">
                  {leader.avatar}
                </span>

                {/* Socials on hover */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#32D4FF]/20 hover:text-[#32D4FF] transition-colors"><Linkedin size={14} /></a>
                  )}
                </div>
              </div>

              <div className="p-6 relative z-20 bg-[#0A0A0C]">
                <h3 className="font-heading font-bold text-xl text-white mb-1">{leader.name}</h3>
                <p className="font-secondary text-[10px] tracking-widest text-[#32D4FF] uppercase mb-4">{leader.role}</p>
                
                <div className="pt-4 border-t border-white/5">
                  <p className="font-body text-xs text-gray-500 leading-relaxed">
                    {leader.bg}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
