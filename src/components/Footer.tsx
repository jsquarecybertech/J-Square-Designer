"use client";

import Link from "next/link";
import { Shield, ArrowRight, Terminal } from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#030407] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Company Info - spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex flex-col inline-block group w-fit">
              <span className="font-heading font-bold text-2xl tracking-wide text-white group-hover:text-[#32D4FF] transition-colors duration-300">
                J SQUARE
              </span>
              <span className="font-secondary text-[10px] tracking-[0.3em] text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                CYBER TECH
              </span>
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm">
              Securing Tomorrow's Digital World. We deliver elite, enterprise-grade cybersecurity solutions designed to defend global infrastructure against evolving threats.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.instagram.com/jsquare_cybertech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#32D4FF]/20 hover:border-[#32D4FF]/30 transition-all duration-300">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Links - spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-secondary text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32D4FF]"></span> Directory
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Resources', href: '/resources' },
                { name: 'Company', href: '/company' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors font-body text-sm hover:translate-x-1 inline-block transform duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-secondary text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#954CFF]"></span> Capabilities
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Industry Solutions', href: '/solutions' },
                { name: 'VAPT', href: '/solutions' },
                { name: 'Cloud Security', href: '/solutions' },
                { name: 'Network Defense', href: '/solutions' },
                { name: 'Red Teaming', href: '/solutions' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors font-body text-sm hover:translate-x-1 inline-block transform duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500 font-secondary text-[10px] tracking-widest">
            <Shield size={12} className="text-[#00E572]" />
            <span>SYSTEM SECURE // ENCRYPTED CONNECTION</span>
          </div>
          <p className="text-gray-500 font-body text-xs">
            &copy; {new Date().getFullYear()} J Square Cyber Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
