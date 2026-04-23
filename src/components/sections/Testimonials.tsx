"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Incredible work ethic and attention to detail. Delivered beyond expectations.",
    author: "Anonymous Client",
    role: "Startup Founder",
    accent: "purple",
  },
  {
    quote: "Fast, reliable, and creative. Exactly what we needed for our project.",
    author: "Anonymous Client", 
    role: "Tech Lead",
    accent: "cyan",
  },
  {
    quote: "A young developer with fresh ideas and professional execution. Highly recommend!",
    author: "Anonymous Client",
    role: "Product Manager",
    accent: "purple",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container-narrow">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            What <span className="gradient-text-shimmer">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiences from working together on various projects.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-border bg-card p-6 hover-lift"
            >
              <Quote className={`h-8 w-8 mb-4 ${item.accent === 'purple' ? 'text-purple-500' : 'text-cyan-500'}`} />
              <blockquote className="text-muted-foreground leading-relaxed">
                &quot;{item.quote}&quot;
              </blockquote>
              <footer className="mt-6 pt-4 border-t border-border">
                <div className="font-semibold">{item.author}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}