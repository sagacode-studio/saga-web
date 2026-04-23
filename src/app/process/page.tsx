"use client";

import { 
  MessageSquare, 
  Lightbulb, 
  Code2, 
  Rocket, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We hop on a call (or exchange emails) to discuss your project. I listen to understand your vision, goals, and requirements. No pressure, just a conversation.",
    accent: "purple",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Planning & Proposal",
    description: "Within 2-3 days, I send you a detailed proposal with scope, timeline, and pricing. Clear terms, no hidden surprises.",
    accent: "cyan",
  },
  {
    num: "03",
    icon: Code2,
    title: "Development",
    description: "Once approved, I dive into building. I share regular updates and demos so you're always in the loop. Feedback is welcome.",
    accent: "purple",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Your project goes live! I help with deployment and offer ongoing support if needed. We're not done until you're satisfied.",
    accent: "cyan",
  },
];

const values = [
  {
    title: "Clear Communication",
    description: "No jargon, no confusion. I keep you updated every step of the way.",
  },
  {
    title: "Quality First",
    description: "Every line of code matters. I don't cut corners.",
  },
  {
    title: "Flexible",
    description: "Plans change. I'm adaptable and understand startup realities.",
  },
  {
    title: "Long-term Thinking",
    description: "I build with the future in mind. Scalable, maintainable code.",
  },
];

export default function ProcessPage() {
  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            How I <span className="gradient-text-shimmer">Work</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, transparent process designed to get results without the headache.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-border bg-card p-6 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  step.accent === 'purple' ? 'bg-purple-500/20' : 'bg-cyan-500/20'
                }`}>
                  <step.icon className={`${step.accent === 'purple' ? 'text-purple-500' : 'text-cyan-500'}`} size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">{step.num}</div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground/30" size={20} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-10">My Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="text-center p-4">
                <CheckCircle className="mx-auto mb-2 text-purple-500" size={24} />
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to start?</h2>
          <p className="mt-2 text-muted-foreground">
            Let&apos;s skip the formalities and just talk about your idea.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-6 py-2.5 font-semibold text-white">
              Let&apos;s Talk
            </a>
            <a href="/faq" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-2.5 font-semibold">
              Read FAQ
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}