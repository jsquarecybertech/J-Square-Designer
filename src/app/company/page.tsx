import CompanyHero from "@/components/CompanyHero";
import CompanyMission from "@/components/CompanyMission";
import GlobalPresence from "@/components/GlobalPresence";
import LeadershipGrid from "@/components/LeadershipGrid";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#030407] selection:bg-[#32D4FF]/30 selection:text-white flex flex-col">
      
      {/* 1. Cinematic Hero */}
      <CompanyHero />

      {/* 2. Bold Typography Manifesto */}
      <CompanyMission />

      {/* 3. Global Map Simulation */}
      <GlobalPresence />

      {/* 4. Executive Profiles */}
      <LeadershipGrid />

    </main>
  );
}
