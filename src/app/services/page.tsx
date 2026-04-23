import type { Metadata } from "next";
import Link from "next/link";
import { Gamepad2, Palette, Sparkles, ArrowRight } from "lucide-react";
import { GlowCard } from "@/components/backgrounds/GradientOrbs";

export const metadata: Metadata = {
  title: "Services | SagaCode",
  description: "Services offered by SagaCode - Indie Games, Frontend Design, and AI Solutions for global projects.",
};

const services = [
  {
    icon: Gamepad2,
    title: "Indie Games",
    description:
      "Crafting immersive gaming experiences from concept to release. Every game tells a story, and I&apos;m here to bring your vision to life.",
    tags: ["Unity", "Godot"],
    accent: "accent-primary",
  },
  {
    icon: Palette,
    title: "Frontend Design",
    description:
      "Modern, responsive, and performant. Not just pretty, but ensuring smooth and memorable user experiences.",
    tags: ["Next.js", "Tailwind"],
    accent: "accent-secondary",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Leveraging AI to optimize workflows and build smarter tools. Because why not let AI handle the heavy lifting?",
    tags: ["Automation", "Integration"],
    accent: "accent-primary",
  },
];

export default function ServicesPage() {
  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            What I <span className="gradient-text-shimmer">Do</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Three core services, one commitment: quality over quantity. Here&apos;s how I can help bring your vision to life.
          </p>
        </header>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <GlowCard key={index} className="hover-glow">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
                <service.icon className="text-accent-primary" size={28} />
              </div>
              <h2 className="mt-6 text-xl font-bold">{service.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </section>

        <aside className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold">Have an idea?</h2>
            <p className="mt-2 text-muted-foreground">
              Whether it&apos;s a project you want to discuss or just want to chat about ideas, don&apos;t hesitate to reach out!
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-2.5 font-semibold text-white shadow-lg shadow-accent-primary/25 transition-all hover:shadow-xl"
            >
              Let&apos;s Chat
              <ArrowRight size={18} />
            </Link>
          </div>
        </aside>
      </section>
    </article>
  );
}