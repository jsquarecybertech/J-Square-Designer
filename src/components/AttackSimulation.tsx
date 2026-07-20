"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Search, Zap, Unlock, ShieldAlert, Eye, ShieldCheck, Wrench, RefreshCcw, Terminal } from "lucide-react";

const STAGES = [
  { 
    id: "recon", 
    name: "Reconnaissance", 
    icon: Crosshair, 
    color: "text-gray-500", 
    bg: "bg-gray-500/10", 
    border: "border-gray-500/20",
    description: "Adversaries passively gather information on the target's infrastructure, identifying exposed assets, open ports, and potential vulnerabilities.",
    stats: [ { label: "Target Assets", value: "1,402" }, { label: "Open Ports", value: "22, 80, 443" } ],
    log: "nmap -sS -p- 192.168.1.0/24\nHost is up (0.0020s latency).\nNot shown: 65532 closed ports\nPORT    STATE SERVICE\n22/tcp  open  ssh\n80/tcp  open  http\n443/tcp open  https"
  },
  { 
    id: "scan", 
    name: "Scanning", 
    icon: Search, 
    color: "text-gray-400", 
    bg: "bg-gray-400/10", 
    border: "border-gray-400/20",
    description: "Active probing of identified ports and services to find specific software versions and exploitable CVEs.",
    stats: [ { label: "Vulnerabilities", value: "3 Critical" }, { label: "CVE ID", value: "CVE-2024-XXXX" } ],
    log: "[*] Initializing vulnerability scanner\n[*] Target: 192.168.1.45\n[+] Found vulnerable service: Apache 2.4.49\n[!] CVE-2021-41773 Path Traversal detected"
  },
  { 
    id: "exploit", 
    name: "Exploitation", 
    icon: Zap, 
    color: "text-[#FFB000]", 
    bg: "bg-[#FFB000]/10", 
    border: "border-[#FFB000]/20",
    description: "Weaponized payloads are delivered to the vulnerable services, attempting to execute arbitrary code and gain a foothold.",
    stats: [ { label: "Payload", value: "Reverse Shell" }, { label: "Status", value: "Executed" } ],
    log: "[*] Sending payload to target...\n[*] Meterpreter session 1 opened (10.0.0.5:4444 -> 192.168.1.45:49153)\nmeterpreter > getuid\nServer username: www-data"
  },
  { 
    id: "privilege", 
    name: "Privilege Escalation", 
    icon: Unlock, 
    color: "text-[#FF3344]", 
    bg: "bg-[#FF3344]/10", 
    border: "border-[#FF3344]/20",
    description: "The attacker exploits local misconfigurations or kernel vulnerabilities to escalate from a low-privileged user to root/SYSTEM.",
    stats: [ { label: "Current User", value: "root" }, { label: "Method", value: "Kernel Exploit" } ],
    log: "meterpreter > shell\n$ uname -a\nLinux web-prod 5.4.0-72-generic\n$ ./exploit_pkexec\n# id\nuid=0(root) gid=0(root) groups=0(root)"
  },
  { 
    id: "persistence", 
    name: "Persistence", 
    icon: ShieldAlert, 
    color: "text-[#FF3344]", 
    bg: "bg-[#FF3344]/10", 
    border: "border-[#FF3344]/20",
    description: "Backdoors, registry keys, or scheduled tasks are created to ensure access is maintained even after system reboots.",
    stats: [ { label: "Technique", value: "Cron Job" }, { label: "Persistence", value: "Established" } ],
    log: "# echo '* * * * * root /tmp/backdoor' >> /etc/crontab\n# systemctl restart cron\n[*] Persistence mechanism deployed successfully.\n[*] Awaiting callback..."
  },
  { 
    id: "detect", 
    name: "Detection (J Square)", 
    icon: Eye, 
    color: "text-[#32D4FF]", 
    bg: "bg-[#32D4FF]/10", 
    border: "border-[#32D4FF]/20",
    description: "J Square's AI-driven telemetry analyzes behavioral anomalies, correlating seemingly unrelated events into a high-confidence alert.",
    stats: [ { label: "AI Confidence", value: "99.8%" }, { label: "Threat Score", value: "CRITICAL (9.5)" } ],
    log: "[J-SQUARE-XDR] ALERT TRIGGERED\nAnomaly: Process 'bash' spawned by 'apache2'\nBehavior: Unauthorized binary execution (/tmp/backdoor)\nAction: Alerting SOC Analysts. Generating incident timeline."
  },
  { 
    id: "contain", 
    name: "Containment", 
    icon: ShieldCheck, 
    color: "text-[#00E572]", 
    bg: "bg-[#00E572]/10", 
    border: "border-[#00E572]/20",
    description: "Automated response playbooks are executed instantly, micro-segmenting the network to isolate the compromised endpoint.",
    stats: [ { label: "Response Time", value: "140ms" }, { label: "Action", value: "Host Isolated" } ],
    log: "[J-SQUARE-SOAR] Executing Playbook: Rapid Containment\n> Quarantining IP: 192.168.1.45\n> Updating Network Firewall Rules: DENY ALL from 192.168.1.45\n[SUCCESS] Host network access revoked."
  },
  { 
    id: "remediate", 
    name: "Remediation", 
    icon: Wrench, 
    color: "text-[#00E572]", 
    bg: "bg-[#00E572]/10", 
    border: "border-[#00E572]/20",
    description: "Malicious artifacts are systematically removed, reverse shells are killed, and the exploited vulnerability is patched or mitigated.",
    stats: [ { label: "Artifacts Removed", value: "4" }, { label: "Processes Killed", value: "2" } ],
    log: "[J-SQUARE-EDR] Commencing Remediation...\n> Terminating process ID 4519 (/tmp/backdoor)\n> Deleting artifact: /tmp/backdoor\n> Removing cron entry from /etc/crontab\n[SUCCESS] Threat neutralized."
  },
  { 
    id: "recover", 
    name: "Recovery", 
    icon: RefreshCcw, 
    color: "text-[#00E572]", 
    bg: "bg-[#00E572]/10", 
    border: "border-[#00E572]/20",
    description: "The system is safely restored to a known good state, services are verified, and the endpoint is reintegrated into the network.",
    stats: [ { label: "System Status", value: "Healthy" }, { label: "Downtime", value: "Minimal" } ],
    log: "[J-SQUARE-OPS] Verifying system integrity...\n> All checks passed.\n> Restoring network connectivity to 192.168.1.45\n> Closing incident ticket #INC-29411\n[SUCCESS] Operations normalized."
  },
];

export default function AttackSimulation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative py-32 bg-[#030407] overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#FF3344]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-panel border-white/5 w-fit rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000]"></span>
            <span className="font-secondary text-[10px] tracking-[0.2em] text-gray-400 uppercase">Kill Chain Disruption</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-white mb-6 tracking-tight">
            Anatomy of a <span className="text-gradient">Cyber Attack</span>
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Watch how our active defense grid detects, contains, and remediates threats in real-time, severing the attack lifecycle before damage occurs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Timeline List */}
          <div className="lg:col-span-4 flex flex-col gap-2 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5"></div>
            {STAGES.map((stage, i) => {
              const isActive = i === activeStage;
              const isPast = i < activeStage;
              return (
                <div 
                  key={stage.id} 
                  className={`relative flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'hover:bg-white/[0.02]'}`}
                  onClick={() => { setActiveStage(i); setIsPlaying(false); }}
                >
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 relative z-10 transition-colors duration-500 ${isActive ? stage.bg + ' ' + stage.border : isPast ? 'bg-white/5 border-white/10' : 'bg-[#0A0A0C] border-white/5'}`}>
                    <stage.icon className={`transition-colors duration-500 ${isActive ? stage.color : isPast ? 'text-gray-500' : 'text-gray-700'}`} size={16} />
                  </div>
                  <span className={`font-body text-sm font-medium transition-colors duration-500 ${isActive ? 'text-white' : isPast ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stage.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Simulation Visualization */}
          <div className="lg:col-span-8 glass-panel border border-white/5 rounded-2xl h-[550px] flex flex-col relative overflow-hidden bg-[#0A0A0C]">
            {/* Header controls */}
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02] shrink-0">
              <span className="font-secondary text-[10px] tracking-widest text-gray-500 uppercase flex items-center gap-2">
                <Terminal size={14} className="text-gray-400" />
                Simulation Canvas
              </span>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-xs font-body font-medium text-gray-400 hover:text-white px-3 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative p-6 overflow-hidden flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full gap-6"
                >
                  {(() => {
                    const stage = STAGES[activeStage];
                    const StageIcon = stage.icon;
                    return (
                      <>
                        {/* Top Info Section */}
                        <div className="flex gap-6 items-start">
                          <div className={`w-20 h-20 shrink-0 rounded-2xl border ${stage.border} ${stage.bg} flex items-center justify-center relative`}>
                            <div className={`absolute inset-0 rounded-2xl border ${stage.border} animate-ping opacity-20`}></div>
                            <StageIcon className={stage.color} size={32} strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className={`font-heading text-2xl font-bold mb-2 ${stage.color}`}>{stage.name}</h3>
                            <p className="font-body text-gray-400 text-sm leading-relaxed mb-4">
                              {stage.description}
                            </p>
                            
                            <div className="flex gap-6">
                              {stage.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                  <span className="text-[10px] font-secondary text-gray-500 uppercase tracking-widest">{stat.label}</span>
                                  <span className="text-sm font-medium text-white">{stat.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Terminal / Log Output */}
                        <div className="flex-1 bg-black/50 rounded-xl border border-white/5 p-4 overflow-hidden relative group">
                           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <pre className="font-mono text-xs text-gray-400 leading-relaxed whitespace-pre-wrap">
                             {stage.log.split('\n').map((line, idx) => {
                               let color = "text-gray-400";
                               if (line.includes("[SUCCESS]") || line.includes("Found vulnerable") || line.includes("Target:")) color = "text-[#00E572]";
                               if (line.includes("[!]") || line.includes("ALERT") || line.includes("CRITICAL")) color = "text-[#FF3344]";
                               if (line.includes("[*]") || line.includes("meterpreter") || line.includes("nmap")) color = "text-[#32D4FF]";
                               
                               return (
                                 <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.2 }}
                                    className={color}
                                 >
                                    {line}
                                 </motion.div>
                               )
                             })}
                           </pre>
                        </div>
                      </>
                    )
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
