import type { Metadata } from "next";
import { Brain, Target, Rocket, Sparkles } from "lucide-react";
import { GlowCard } from "@/components/backgrounds/GradientOrbs";

export const metadata: Metadata = {
  title: "About | SagaCode",
  description: "Learn about SagaCode's vision, mission, and philosophy of building impact through human-AI collaboration.",
};

export default function AboutPage() {
  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            About <span className="gradient-text-shimmer">SagaCode</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Building the future of Indie Games, Frontend Design, and AI-driven solutions through a{" "}
            <strong className="text-foreground font-semibold">&quot;One Person Company&quot;</strong> model.
          </p>
        </header>

        <section className="mt-16 space-y-10 max-w-3xl">
          <GlowCard>
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-primary/20">
                <Brain className="text-accent-primary" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Vision</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  To revolutionize the gaming industry by combining passion with AI technology. 
                  Every line of code crafted with intention, every project built for impact.
                </p>
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-secondary/20">
                <Target className="text-accent-secondary" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Mission</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Creating high-quality indie games and frontend solutions that showcase the power of human-AI collaboration. 
                  Proving that small teams can make a big impact.
                </p>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-20">
              <Sparkles className="h-40 w-40 text-accent-primary" />
            </div>
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl gradient-bg">
                <Rocket className="text-white" size={28} />
              </div>
              <div className="relative">
                <h2 className="text-xl font-bold text-foreground">Philosophy</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  <span className="gradient-text-shimmer text-2xl font-extrabold">&quot;Small but Mighty&quot;</span> — 
                  Quality over quantity. Every pixel perfect, every feature intentional.
                </p>
              </div>
            </div>
          </GlowCard>
        </section>

        <aside className="mt-16 max-w-3xl rounded-2xl border border-border bg-card p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-bold">Hi, I&apos;m Saga 👋</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A young Indonesian founder with a dream to build something meaningful in the gaming industry. 
              Self-taught with AI assistance, I believe that determination + the right tools can create something extraordinary.
              Welcome to my digital headquarters.
            </p>
          </div>
        </aside>
      </section>
    </article>
  );
}