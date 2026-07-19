"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowRight, Clock, Calendar, Download, ShieldAlert, BookOpen } from "lucide-react";

// Mock data for resources
const resources = [
  {
    id: 1,
    title: "2026 Global Threat Landscape Report",
    description: "Comprehensive analysis of emerging cyber threats, APT group activities, and predictive models for the upcoming year.",
    category: "Threat Reports",
    date: "Jul 12, 2026",
    readTime: "15 min read",
    icon: ShieldAlert,
    type: "Report",
    featured: true,
  },
  {
    id: 2,
    title: "Zero Trust Architecture Implementation Guide",
    description: "A step-by-step framework for transitioning legacy infrastructure to a zero-trust model without business disruption.",
    category: "Whitepapers",
    date: "Jun 28, 2026",
    readTime: "25 min read",
    icon: FileText,
    type: "Whitepaper",
    featured: false,
  },
  {
    id: 3,
    title: "Quantum-Resistant Cryptography Primer",
    description: "Preparing your organization's encryption standards for the post-quantum computing era.",
    category: "Research",
    date: "Jun 15, 2026",
    readTime: "12 min read",
    icon: BookOpen,
    type: "Research Paper",
    featured: false,
  },
  {
    id: 4,
    title: "Ransomware Defense Playbook",
    description: "Actionable strategies for preventing, detecting, and responding to modern double-extortion ransomware attacks.",
    category: "Whitepapers",
    date: "May 30, 2026",
    readTime: "18 min read",
    icon: FileText,
    type: "Whitepaper",
    featured: false,
  },
  {
    id: 5,
    title: "AI in Cybersecurity: Automating the SOC",
    description: "How machine learning models are reducing alert fatigue and accelerating incident response times.",
    category: "Research",
    date: "May 14, 2026",
    readTime: "10 min read",
    icon: BookOpen,
    type: "Research Paper",
    featured: false,
  },
  {
    id: 6,
    title: "Q1 2026 Incident Response Statistics",
    description: "Data-driven insights from over 500 incident response engagements conducted in the first quarter.",
    category: "Threat Reports",
    date: "Apr 05, 2026",
    readTime: "8 min read",
    icon: ShieldAlert,
    type: "Report",
    featured: false,
  },
];

const categories = ["All", "Whitepapers", "Threat Reports", "Research"];

export default function ResourcesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = resources.filter(
    (resource) => activeCategory === "All" || resource.category === activeCategory
  );

  return (
    <div className="w-full mt-16 pb-20">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full font-secondary text-xs tracking-wider uppercase transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#00E572] text-black font-bold shadow-[0_0_20px_rgba(0,229,114,0.3)]"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredResources.map((resource) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={resource.id}
              className="group relative glass-panel border border-white/5 rounded-2xl p-8 hover:border-[#00E572]/30 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E572]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-grow">
                {/* Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-secondary tracking-wider text-[#00E572] uppercase">
                    <resource.icon className="w-3 h-3" />
                    {resource.type}
                  </div>
                  {resource.featured && (
                    <div className="text-[10px] font-secondary tracking-widest text-white uppercase flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#00E572] transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-8">
                  {resource.description}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-500 text-xs font-secondary">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {resource.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {resource.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
