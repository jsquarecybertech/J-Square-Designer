"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Company", href: "/company" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 transition-all duration-500 px-6 pointer-events-none">
      <motion.div 
        className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 pointer-events-auto ${
          scrolled ? "glass-panel rounded-2xl px-6 py-4" : "bg-transparent rounded-2xl px-4 py-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col group">
            <span className="font-heading font-bold text-xl tracking-wide text-white group-hover:text-[#32D4FF] transition-colors duration-300">
              J SQUARE
            </span>
            <span className="font-secondary text-[10px] tracking-[0.3em] text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
              CYBER TECH
            </span>
          </Link>
        </div>

        {/* Center Om Symbol */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 text-gray-600 font-secondary text-2xl select-none hover:text-white transition-colors duration-500">
          ॐ
        </div>

        {/* Right Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Navigation Links */}
          <div 
            className="flex items-center gap-1 glass-panel rounded-full p-1 shadow-lg relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                className="relative px-5 py-2 text-xs font-body font-medium rounded-full outline-none"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${hoveredLink === link.name ? 'text-white' : 'text-gray-400'}`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="group relative px-6 py-2.5 rounded-full bg-white text-black font-body text-xs font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#32D4FF] to-[#954CFF] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10">Deploy Defense</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[80px] left-6 right-6 glass-panel rounded-2xl p-6 lg:hidden flex flex-col items-center gap-6 shadow-2xl pointer-events-auto origin-top"
          >
            <div className="text-gray-600 text-2xl mb-2">ॐ</div>
            <ul className="flex flex-col items-center gap-6 w-full">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <Link
                    href={link.href}
                    className="block text-sm font-body text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-4 px-8 py-3 bg-white text-black font-body text-xs font-bold w-full text-center rounded-xl hover:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Deploy Defense
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
