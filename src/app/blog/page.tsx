import type { Metadata } from "next";
import { FileText, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | SagaCode",
  description: "Thoughts on game development, web development, AI, and building cool stuff.",
};

const posts = [
  {
    slug: "building-future-with-ai",
    title: "Building the Future with AI as Your Co-Pilot",
    excerpt: "How I'm using AI to accelerate development without sacrificing quality. The tools have changed, but the craft remains.",
    date: "2026-04-20",
    tag: "AI",
    content: "AI has changed the game. But not in the way most people think.\n\nIt's not about replacing developers—it's about amplifying them. The best developers I've seen aren't fighting AI; they're collaborating with it.\n\nHere's my approach:\n\n1. **Use AI for the repetitive stuff** - boilerplate code, documentation, testing. Save your brain for the creative decisions.\n\n2. **Treat AI as a junior dev** - it can write code, but it needs guidance. Review everything. Question everything.\n\n3. **The craft still matters** - understanding architecture, design patterns, performance. AI is a tool, not a replacement for skill.\n\nThe future isn't AI vs humans. It's AI + humans, working together. And honestly? That's pretty exciting.",
  },
  {
    slug: "why-indie-games-matter",
    title: "Why Indie Games Matter in 2026",
    excerpt: "The gaming industry is dominated by huge studios, but there's always room for small teams with big ideas.",
    date: "2026-04-15",
    tag: "Games",
    content: "Every great game started with someone who thought, \"What if we did it differently?\"\n\nIndie games aren't just smaller versions of big games. They're experiments. They're risks that big studios won't take.\n\nHere's why I believe in indie games:\n\n1. **Fresh ideas** - Without corporate oversight, indies can take risks. The weird games often become the cult classics.\n\n2. **Personal touch** - When one person or small team makes a game, you feel it. There's vision behind every pixel.\n\n3. **Community** - Indie games build communities, not just player bases. People don't just play; they belong.\n\n4. **Innovation** - Big studios optimize. Indies invent. Every major shift in gaming came from the fringes.\n\nI'm building something in this space. Not just games—experiences that matter.",
  },
  {
    slug: "one-person-company",
    title: "The One Person Company Model",
    excerpt: "How a single developer with the right tools can compete with traditional teams. Quality over quantity.",
    date: "2026-04-10",
    tag: "Business",
    content: "The traditional company model is broken. Too many meetings. Too much overhead. Too many cooks.\n\nI've chosen a different path: the One Person Company.\n\nWhat it means:\n\n1. **No bureaucracy** - I make decisions fast. No approval chains.\n\n2. **Quality over quantity** - One great project beats three mediocre ones.\n\n3. **Direct relationships** - You talk to me. Not a project manager.\n\n4. **Sustainable** - I'm in it for the long run. No VC pressure to exit.\n\nTools that make this possible:\n- AI for acceleration\n- Modern frameworks for speed  \n- Cloud infrastructure for scale\n- Global market for reach\n\nThe future of work isn't freelance. It's the high-quality solo operator. And I'm here for it.",
  },
];

export default function BlogPage() {
  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-500 mb-6">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-purple-500/20 mb-6">
            <FileText className="text-purple-500" size={32} />
          </div>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            <span className="gradient-text-shimmer">Thoughts</span> & Insights
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Musings on building things, solving problems, and the future of development.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-border bg-card p-6 hover-lift"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar size={14} />
                <time dateTime={post.date}>{post.date}</time>
                <span className="text-purple-500">{post.tag}</span>
              </div>
              <h2 className="text-lg font-bold group-hover:text-purple-500 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-purple-500">
                Read more <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">More posts coming soon...</p>
        </div>
      </section>
    </article>
  );
}