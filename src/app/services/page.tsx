import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServiceMethodology from "@/components/ServiceMethodology";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#030407] selection:bg-[#FF3344]/30 selection:text-white flex flex-col">
      
      <ServicesHero />
      <ServicesList />
      <ServiceMethodology />

      {/* Services CTA */}
      <section className="relative py-32 bg-[#0A0A0C] border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF3344]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Initialize an <span className="text-[#FF3344]">Engagement</span>
            </h2>
            <p className="font-body text-gray-400 text-lg mb-10">
              Deploy our elite red teams or incident responders to fortify your infrastructure today.
            </p>
            <a href="/contact" className="inline-block px-10 py-5 rounded-full bg-white text-black font-body text-sm font-bold tracking-wide transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,51,68,0.2)]">
              Schedule a Briefing
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
