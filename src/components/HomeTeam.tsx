"use client";

import { motion } from "framer-motion";
import { FaLinkedin as Linkedin, FaTwitter as Twitter, FaGithub as Github } from "react-icons/fa";

const TEAM = [
  {
    name: "Alex Vance",
    role: "Head of Offensive Security",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    skills: ["Red Teaming", "Exploit Dev", "Social Engineering"],
    exp: "12+ Years",
    color: "#FF003C"
  },
  {
    name: "Sarah Chen",
    role: "Director of Cloud Security",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    skills: ["AWS/Azure/GCP", "Kubernetes", "DevSecOps"],
    exp: "10+ Years",
    color: "#08F7FE"
  },
  {
    name: "Marcus Thorne",
    role: "Lead Forensics Investigator",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    skills: ["Incident Response", "Malware Analysis", "DFIR"],
    exp: "15+ Years",
    color: "#B026FF"
  }
];

export default function HomeTeam() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" style={{ backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#00FF41]"></span>
            <span className="font-secondary text-xs tracking-widest text-[#00FF41] uppercase">Elite Operatives</span>
            <span className="w-8 h-[1px] bg-[#00FF41]"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl text-white mb-6"
          >
            Meet the <span className="text-gradient">Core Command</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-400 text-lg"
          >
            Our team comprises former military intelligence officers, elite white-hat hackers, and industry-leading security architects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group perspective-1000"
            >
              <div className="glass-panel p-1 rounded-2xl relative overflow-hidden transform-style-3d transition-transform duration-500 hover:rotate-y-5 hover:rotate-x-5">
                {/* Glowing Border effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"
                  style={{ backgroundColor: member.color }}
                ></div>
                
                <div className="relative bg-[#0A0F1D] rounded-xl overflow-hidden z-10 h-full flex flex-col">
                  {/* Image */}
                  <div className="h-64 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] to-transparent z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                    
                    <div 
                      className="absolute top-4 right-4 z-20 px-3 py-1 rounded bg-black/60 backdrop-blur-sm border text-[10px] font-secondary tracking-widest font-bold"
                      style={{ borderColor: `${member.color}40`, color: member.color }}
                    >
                      {member.exp}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                    <h3 className="font-heading font-bold text-2xl text-white mb-1">{member.name}</h3>
                    <p className="font-secondary text-xs tracking-widest text-gray-400 uppercase mb-4">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-body text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex gap-3">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
                      </div>
                      
                      <div 
                        className="w-8 h-8 rounded-full border border-dashed flex items-center justify-center animate-spin-slow"
                        style={{ borderColor: member.color }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: member.color, boxShadow: `0 0 10px ${member.color}` }}></div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
