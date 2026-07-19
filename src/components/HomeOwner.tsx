"use client";

import { motion } from "framer-motion";
import { Mail, Quote } from "lucide-react";
import { FaLinkedin as Linkedin, FaTwitter as Twitter } from "react-icons/fa";

export default function HomeOwner() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-y border-[rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          {/* Left: Founder Image & Card */}
          <motion.div 
            className="w-full md:w-5/12 relative perspective-1000"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[4/5] glass-panel p-2 rounded-2xl transform-style-3d rotate-y-12 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full relative rounded-xl overflow-hidden border border-[rgba(0,240,255,0.2)] bg-gradient-to-b from-[#0A0F1D] to-[#04070D] flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Cyber Scanner effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] opacity-50 animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
                
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="font-heading font-bold text-2xl text-white">John Square</h3>
                  <p className="font-secondary tracking-widest text-xs text-[#00F0FF] uppercase mt-1">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Founder Info */}
          <motion.div 
            className="w-full md:w-7/12 flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#B026FF]"></span>
                <span className="font-secondary text-xs tracking-widest text-[#B026FF] uppercase">The Visionary</span>
              </div>
              <h2 className="font-heading font-bold text-4xl text-white mb-6">
                Leading the Charge in <br /> Cyber Warfare
              </h2>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-[#00F0FF]/20" size={64} />
                <p className="font-body text-gray-300 text-lg italic leading-relaxed relative z-10 pl-6 border-l-2 border-[#00F0FF]/30">
                  "In a hyper-connected world, security is not a product; it is a continuous process of staying one step ahead of the adversary. At J Square Cyber Tech, we don't just respond to threats—we anticipate and neutralize them."
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-secondary text-sm tracking-widest text-white uppercase">The Story</h4>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                With over two decades of experience in intelligence and offensive security, John founded J Square Cyber Tech to bridge the gap between military-grade defense and enterprise accessibility. His vision is to democratize elite cybersecurity, ensuring that businesses of all sizes can operate securely in an increasingly hostile digital landscape.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300 group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300 group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300 group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}} />
    </section>
  );
}
