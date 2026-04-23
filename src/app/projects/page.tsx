import type { Metadata } from "next";
import { Gamepad2, Lock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | SagaCode",
  description: "Explore SagaCode's projects - from indie games to AI-driven solutions.",
};

const currentProjects = [
  {
    icon: Gamepad2,
    title: "Secret Game Project",
    description:
      "Something exciting is brewing. A new indie game that will bring fresh experiences to gaming. Still in development, but trust me — it&apos;ll be worth the wait!",
    tags: ["Indie Game", "Coming Soon", "2026"],
    status: "In Development",
  },
];

const futureIdeas = [
  {
    icon: Sparkles,
    title: "AI Side Project",
    description: "Various AI-driven tools and experiments. Stay tuned for updates!",
    tags: ["AI", "Experiment"],
  },
];

export default function ProjectsPage() {
  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            My <span className="gradient-text-shimmer">Projects</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A glimpse into what I&apos;m working on. Some things are ready to show, some are still cooking!
          </p>
        </header>

        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">Now Building 🔥</h2>
          {currentProjects.map((project, index) => (
            <article key={index} className="group relative overflow-hidden rounded-2xl border border-accent-primary/30 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10 p-8 hover-glow">
              <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/4 opacity-20 animate-pulse">
                <Lock className="h-32 w-32 text-accent-primary" />
              </div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
                  <project.icon className="text-accent-primary" size={28} />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="rounded-full bg-accent-primary/20 px-3 py-1 text-xs text-accent-primary animate-pulse">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="mb-8 text-2xl font-bold">Future Ideas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {futureIdeas.map((idea, index) => (
              <article key={index} className="group rounded-xl border border-border bg-card p-6 hover-lift">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                  <idea.icon className="text-muted-foreground" size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{idea.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{idea.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {idea.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <aside className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 to-transparent p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold">Let&apos;s Collaborate? 🚀</h2>
            <p className="mt-2 text-muted-foreground">
              Open for collaborations, partnerships, or just chatting about game development. Just reach out!
            </p>
            <a
              href="mailto:sagacode86@gmail.com"
              className="mt-6 inline-flex items-center rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-2.5 font-semibold text-white shadow-lg shadow-accent-primary/25 transition-all hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </aside>
      </section>
    </article>
  );
}