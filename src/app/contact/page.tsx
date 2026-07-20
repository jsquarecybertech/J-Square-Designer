"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mbdvljzr", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 relative min-h-screen">
      
      {/* Animated Cyber Background */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-[#04070D] z-[-2]"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none z-[-1]" style={{
        backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Animated Fog/Glow */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#00F0FF]/10 rounded-full blur-[150px] pointer-events-none z-[-1]"
        animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#B026FF]/10 rounded-full blur-[120px] pointer-events-none z-[-1]"
        animate={{ x: [50, -50, 50], y: [30, -30, 30] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#00F0FF]"></span>
            <span className="font-secondary text-xs tracking-widest text-[#00F0FF] uppercase">Secure Comms</span>
            <span className="w-8 h-[1px] bg-[#00F0FF]"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl text-white mb-6"
          >
            Initiate <span className="text-gradient">Contact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-400 text-lg"
          >
            Establish a secure channel with our command center. All communications are strictly confidential.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information & Map */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-8 rounded-2xl border-t-2 border-t-[#00F0FF]"
            >
              <h3 className="font-heading font-bold text-2xl text-white mb-8">Command Center</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#00F0FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00F0FF]/20 transition-colors">
                    <MapPin className="text-[#00F0FF]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-secondary text-xs tracking-widest text-gray-500 uppercase mb-1">HQ Location</h4>
                    <p className="font-body text-gray-300 text-sm">Borsad<br/>Anand<br/>India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#B026FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#B026FF]/20 transition-colors">
                    <Mail className="text-[#B026FF]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-secondary text-xs tracking-widest text-gray-500 uppercase mb-1">Encrypted Email</h4>
                    <a href="mailto:info@jsquarecybertech.in" className="font-body text-gray-300 text-sm hover:text-[#00F0FF] transition-colors">info@jsquarecybertech.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00FF41]/20 transition-colors">
                    <Phone className="text-[#00FF41]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-secondary text-xs tracking-widest text-gray-500 uppercase mb-1">24/7 Hotline</h4>
                    <div className="font-body text-gray-300 text-sm mb-2">+91 8128709152</div>
                    <div className="flex items-center gap-2">
                      <a href="tel:+918128709152" className="text-xs font-body px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-all text-gray-400">Call</a>
                      <a href="https://wa.me/918128709152" target="_blank" rel="noopener noreferrer" className="text-xs font-body px-3 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all text-[#25D366]">WhatsApp</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,240,255,0.15)' }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="glass-panel h-48 rounded-2xl relative overflow-hidden group cursor-pointer"
            >
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 backdrop-blur-sm group-hover:backdrop-blur-none group-hover:bg-black/10 transition-all duration-500 pointer-events-none">
                <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full border border-white/10 group-hover:border-[#00F0FF]/50 transition-colors">
                  <MapPin className="text-[#00F0FF]" size={20} />
                  <span className="font-secondary tracking-widest font-bold text-white text-xs">BORSAD HQ</span>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="absolute inset-0 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <iframe 
                  src="https://maps.google.com/maps?q=Borsad,%20Anand,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Borsad HQ Map"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full lg:w-2/3 glass-panel-glow p-8 md:p-12 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <ShieldCheck size={120} />
            </div>
            
            <h3 className="font-heading font-bold text-2xl text-white mb-8 relative z-10">Transmission Form</h3>
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-secondary text-[10px] tracking-widest text-gray-400 uppercase">Operative Name</label>
                  <input type="text" name="operative_name" className="w-full glass-panel rounded-lg p-4 text-white font-body focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all shadow-none" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-secondary text-[10px] tracking-widest text-gray-400 uppercase">Organization</label>
                  <input type="text" name="organization" className="w-full glass-panel rounded-lg p-4 text-white font-body focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all shadow-none" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-secondary text-[10px] tracking-widest text-gray-400 uppercase">Secure Email</label>
                  <input type="email" name="email" className="w-full glass-panel rounded-lg p-4 text-white font-body focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all shadow-none" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-secondary text-[10px] tracking-widest text-gray-400 uppercase">Contact Number</label>
                  <input type="tel" name="phone" className="w-full glass-panel rounded-lg p-4 text-white font-body focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all shadow-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-secondary text-[10px] tracking-widest text-gray-400 uppercase">Service Required</label>
                <select name="service" defaultValue="" className="w-full glass-panel rounded-lg p-4 text-white font-body focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all shadow-none appearance-none cursor-pointer">
                  <option value="" disabled>Select a service protocol...</option>
                  <option value="vapt" className="bg-[#0A0A0C]">Vulnerability Assessment & Penetration Testing</option>
                  <option value="cloud" className="bg-[#0A0A0C]">Cloud Security Review</option>
                  <option value="soc" className="bg-[#0A0A0C]">24/7 SOC Monitoring</option>
                  <option value="incident" className="bg-[#0A0A0C]">Incident Response (URGENT)</option>
                  <option value="other" className="bg-[#0A0A0C]">Other Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-secondary text-[10px] tracking-widest text-gray-400 uppercase">Encrypted Message</label>
                <textarea name="message" rows={5} className="w-full glass-panel rounded-lg p-4 text-white font-body focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all shadow-none resize-none" required></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="mt-4 w-full md:w-auto self-end px-8 py-4 bg-[#00F0FF] text-black font-secondary text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {status === 'submitting' ? 'Transmitting...' : 
                   status === 'success' ? 'Transmission Successful' : 
                   status === 'error' ? 'Transmission Failed' : 
                   'Transmit Data'}
                </span>
                {status !== 'success' && status !== 'submitting' && (
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
