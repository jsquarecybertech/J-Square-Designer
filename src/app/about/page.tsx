import HomeAbout from "@/components/HomeAbout";
import Link from "next/link";
import { Users } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24 relative min-h-screen">
      <ParticleBackground />
      <HomeAbout />
      
      {/* Team Link Section */}
      <div className="container mx-auto px-6 relative z-10 mt-20 border-t border-white/10 pt-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between glass-panel p-10 rounded-2xl border-l-4 border-l-[#00F0FF]">
          <div>
            <h2 className="font-heading font-bold text-3xl text-white mb-2">Meet Our Operatives</h2>
            <p className="font-body text-gray-400">Discover the elite cybersecurity professionals behind J Square Cyber Tech.</p>
          </div>
          <Link href="/team" className="mt-8 md:mt-0 px-8 py-4 bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] rounded-xl font-secondary text-sm font-bold tracking-widest uppercase flex items-center gap-3 hover:bg-[#00F0FF] hover:text-black transition-all duration-300">
            <Users size={20} />
            <span>View Team</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
