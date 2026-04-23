"use client";

import { 
  Zap, 
  Globe, 
  Palette, 
  Shield, 
  Layers, 
  Sparkles,
  Smartphone,
  Code2,
  Rocket,
  Heart,
  Coffee
} from "lucide-react";

const mainFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with minimal load times. Every millisecond counts for the best user experience.",
    accent: "purple",
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "Built for worldwide audience. Accessible everywhere, anytime with reliable uptime.",
    accent: "cyan",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Modern aesthetics with attention to every detail. Not just functional, but visually stunning.",
    accent: "purple",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Best practices in security. Your data stays protected with industry-standard measures.",
    accent: "cyan",
  },
  {
    icon: Layers,
    title: "Scalable Tech",
    description: "Built on modern stack that grows with your needs. From MVP to production-ready.",
    accent: "purple",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description: "Leveraging AI for smarter solutions and better results. The future is here.",
    accent: "cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Perfect experience on any device. Responsive design that looks great everywhere.",
    accent: "purple",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Maintainable, well-documented code that stands the test of time. Built to last.",
    accent: "cyan",
  },
];

const stats = [
  { icon: Rocket, value: "100%", label: "Performance", color: "purple" },
  { icon: Heart, value: "24/7", label: "Availability", color: "cyan" },
  { icon: Coffee, value: "∞", label: "Passion", color: "purple" },
];

export default function FeaturesPage() {
  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold md:text-5xl animate-in">
            What <span className="gradient-text-shimmer">Makes Me</span> Different
          </h1>
          <p className="mt-6 text-lg text-muted-foreground animate-in stagger-1">
            Small team, big impact. Every project crafted with precision and passion. 
            Here&apos;s what you get when you work with SagaCode.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl border border-border bg-card animate-in stagger-${index + 1}`}
            >
              <div className={`flex h-12 w-12 mx-auto items-center justify-center rounded-xl mb-3 ${
                stat.color === 'purple' ? 'bg-purple-500/20' : 'bg-cyan-500/20'
              }`}>
                <stat.icon className={`${stat.color === 'purple' ? 'text-purple-500' : 'text-cyan-500'}`} size={24} />
              </div>
              <div className={`text-3xl font-extrabold ${stat.color === 'purple' ? 'text-purple-500' : 'text-cyan-500'}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-10 animate-in">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 hover-lift animate-in"
                style={{ animationDelay: `${index * 0.05}s` }}
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

        <aside className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-8 text-center animate-in">
          <h2 className="text-2xl font-bold">Want to see it in action?</h2>
          <p className="mt-2 text-muted-foreground">
            Check out my projects or let&apos;s discuss how I can help bring your vision to life.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a 
              href="/projects" 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2.5 font-semibold text-white"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-2.5 font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </aside>
      </section>
    </article>
  );
}