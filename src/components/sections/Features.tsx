"use client";

import { Gamepad2, Code2, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Gamepad2,
    title: "Indie Games",
    description: "Custom engines, cross-platform deployment, and bespoke shaders.",
    accent: "purple",
  },
  {
    icon: Code2,
    title: "Frontend Design",
    description: "Next.js, Tailwind, and performance-first UIs.",
    accent: "cyan",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Automation, LLM fine-tuning, and RAG integration.",
    accent: "purple",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container-narrow relative">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-zinc-100">Why </span>
            <span className="gradient-text-shimmer">SagaCode</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
            Small team, massive focus. Every project crafted with precision.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 hover-lift ${
                index === 0 || index === 2 ? 'md:col-span-1' : ''
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-6 ${
                pillar.accent === 'purple' 
                  ? 'bg-purple-500/20' 
                  : 'bg-cyan-500/20'
              }`}>
                <pillar.icon 
                  className={`${pillar.accent === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`} 
                  size={28} 
                />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">{pillar.title}</h3>
              <p className="mt-3 text-sm text-zinc-500">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}