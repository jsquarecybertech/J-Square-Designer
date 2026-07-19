"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function CompanyMission() {
  const manifestoText = "We do not believe in reactive security. We believe in engineering absolute immunity. In a world where digital infrastructure dictates the flow of global economies, compromise is unacceptable. J Square Cyber Tech exists to construct unbreachable foundations for the organizations that power the future.";
  const words = manifestoText.split(" ");

  return (
    <section className="relative py-32 bg-[#030407] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <div className="mb-12">
          <span className="font-secondary text-[10px] tracking-[0.3em] text-[#32D4FF] uppercase">The Manifesto</span>
        </div>

        <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-tight text-white tracking-tight flex flex-wrap gap-x-3 gap-y-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.8, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={
                word.includes("absolute") || word.includes("immunity.") || word.includes("unbreachable")
                  ? "text-gradient"
                  : "text-white"
              }
            >
              {word}
            </motion.span>
          ))}
        </h2>

      </div>
    </section>
  );
}
