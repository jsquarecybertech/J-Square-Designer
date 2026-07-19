"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, Lock } from "lucide-react";

export default function HomeAbout() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-[#00F0FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                Redefining <span className="text-gradient">Security</span> <br />
                Standards
              </h2>
              <p className="font-body text-gray-400 text-lg leading-relaxed mb-6">
                J Square Cyber Tech is a premier cybersecurity firm dedicated to protecting enterprises from advanced persistent threats. We combine cutting-edge AI technology with elite human intelligence to deliver uncompromising digital defense.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="glass-panel p-6 rounded-xl border-l-4 border-l-[#00F0FF] hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Target className="text-[#00F0FF] mb-4" size={28} />
                <h3 className="font-secondary tracking-widest text-sm text-white mb-2 uppercase">Our Mission</h3>
                <p className="font-body text-gray-400 text-sm">To provide impenetrable cybersecurity solutions that empower organizations to innovate without fear.</p>
              </motion.div>
              
              <motion.div 
                className="glass-panel p-6 rounded-xl border-l-4 border-l-[#B026FF] hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Eye className="text-[#B026FF] mb-4" size={28} />
                <h3 className="font-secondary tracking-widest text-sm text-white mb-2 uppercase">Our Vision</h3>
                <p className="font-body text-gray-400 text-sm">To be the global vanguard of digital security, anticipating threats before they materialize.</p>
              </motion.div>
            </div>
          </div>
          
          {/* Right: Core Values Cards */}
          <div className="w-full lg:w-1/2 relative h-full">
            <motion.div style={{ y }} className="flex flex-col gap-6">
              
              <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 border border-[rgba(255,255,255,0.05)] hover:border-[#08F7FE]/50 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-[#08F7FE]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-[#08F7FE]" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white font-bold mb-2">Uncompromising Integrity</h3>
                  <p className="font-body text-gray-400 text-sm">We maintain the highest ethical standards in every engagement, ensuring complete confidentiality and trust.</p>
                </div>
              </div>
              
              <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 border border-[rgba(255,255,255,0.05)] hover:border-[#00FF41]/50 transition-colors group ml-0 lg:ml-12">
                <div className="w-16 h-16 rounded-full bg-[#00FF41]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="text-[#00FF41]" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white font-bold mb-2">Proactive Innovation</h3>
                  <p className="font-body text-gray-400 text-sm">We continuously evolve our methodologies to stay ahead of zero-day vulnerabilities and emerging attack vectors.</p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 border border-[rgba(255,255,255,0.05)] hover:border-[#FF003C]/50 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-[#FF003C]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Lock className="text-[#FF003C]" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white font-bold mb-2">Absolute Protection</h3>
                  <p className="font-body text-gray-400 text-sm">Our defense-in-depth approach ensures multi-layered security that leaves no stone unturned.</p>
                </div>
              </div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
