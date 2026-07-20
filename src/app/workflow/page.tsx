"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, PenTool, Shield, Zap, Activity, FileBarChart, Wrench, CheckSquare, LifeBuoy } from "lucide-react";

const WORKFLOW = [
  { id: 1, name: "Consultation", icon: MessageSquare, color: "#00F0FF" },
  { id: 2, name: "Requirement Gathering", icon: ClipboardList, color: "#00F0FF" },
  { id: 3, name: "Planning", icon: PenTool, color: "#B026FF" },
  { id: 4, name: "Assessment", icon: Shield, color: "#B026FF" },
  { id: 5, name: "Testing", icon: Zap, color: "#FF003C" },
  { id: 6, name: "Analysis", icon: Activity, color: "#FF003C" },
  { id: 7, name: "Reporting", icon: FileBarChart, color: "#FFB000" },
  { id: 8, name: "Remediation", icon: Wrench, color: "#00FF41" },
  { id: 9, name: "Verification", icon: CheckSquare, color: "#00FF41" },
  { id: 10, name: "Support", icon: LifeBuoy, color: "#08F7FE" },
];

export default function WorkflowPage() {
  return (
    <div className="pt-32 pb-24 relative min-h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#04070D] via-[#04070D]/90 to-[#0A0F1D]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 rounded-full bg-[#08F7FE]/10 mb-6"
          >
            <Activity className="text-[#08F7FE]" size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-5xl text-white mb-6"
          >
            Engagement <span className="text-gradient-cyan">Workflow</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-400 text-lg"
          >
            A seamless, transparent process designed to integrate elite security measures into your operations with minimal friction.
          </motion.p>
        </div>

        {/* Workflow Path */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-8 relative">
            
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="hidden md:block absolute top-[280px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {WORKFLOW.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
                className="flex flex-col items-center text-center relative group z-10"
              >
                {/* Number Badge */}
                <div 
                  className="absolute -top-3 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-20 text-black shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  {step.id}
                </div>

                {/* Hexagon / Node */}
                <div className="w-24 h-24 mb-6 relative flex items-center justify-center perspective-1000">
                  <div 
                    className="absolute inset-0 bg-black/50 border rounded-xl transform rotate-45 group-hover:rotate-90 transition-all duration-700 ease-in-out shadow-lg"
                    style={{ borderColor: `${step.color}40`, boxShadow: `0 0 20px ${step.color}20` }}
                  ></div>
                  <div 
                    className="absolute inset-2 border border-dashed rounded-xl transform rotate-45 group-hover:rotate-12 transition-all duration-700 ease-in-out opacity-50"
                    style={{ borderColor: step.color }}
                  ></div>
                  
                  <div className="relative z-10 p-4">
                    <step.icon size={28} color={step.color} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_currentColor]" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2">{step.name}</h3>
                
                {/* Arrow to next (mobile only) */}
                {index % 2 === 0 && index < WORKFLOW.length - 1 && (
                  <div className="md:hidden absolute top-1/2 -right-4 -translate-y-1/2 text-white/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
