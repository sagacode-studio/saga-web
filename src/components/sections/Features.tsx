"use client";

import { 
  Zap, 
  Globe, 
  Palette, 
  Shield, 
  Layers, 
  Sparkles,
  Smartphone,
  Code2
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with minimal load times. Every millisecond counts.",
    accent: "purple",
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "Built for worldwide audience. Accessible everywhere, anytime.",
    accent: "cyan",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Modern aesthetics with attention to every detail and pixel.",
    accent: "purple",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Best practices in security. Your data stays protected.",
    accent: "cyan",
  },
  {
    icon: Layers,
    title: "Scalable Tech",
    description: "Built on modern stack that grows with your needs.",
    accent: "purple",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description: "Leveraging AI for smarter solutions and better results.",
    accent: "cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Perfect experience on any device, any screen size.",
    accent: "purple",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Maintainable, well-documented code that stands the test of time.",
    accent: "cyan",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container-narrow relative">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Why <span className="gradient-text-shimmer">SagaCode</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Small team, big impact. Every project crafted with precision and passion.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`rounded-xl border border-border bg-card p-6 hover-lift animate-in stagger-${(index % 8) + 1} ${
                index === 0 || index === 5 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${
                feature.accent === 'purple' 
                  ? 'bg-purple-500/20' 
                  : 'bg-cyan-500/20'
              }`}>
                <feature.icon 
                  className={`${feature.accent === 'purple' ? 'text-purple-500' : 'text-cyan-500'}`} 
                  size={24} 
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}