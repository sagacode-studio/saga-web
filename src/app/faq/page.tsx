"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I mainly focus on three areas: Indie Games (Unity/Godot), Frontend Design (Next.js, React, Tailwind), and AI Solutions. Whether you need a game, a website, or an AI-powered tool, let's talk!",
  },
  {
    question: "How do we collaborate?",
    answer: "Simple! Just reach out via email or the contact form. We'll discuss your project, I provide a quote and timeline, and we get started. I believe in clear communication and regular updates.",
  },
  {
    question: "What's your turnaround time?",
    answer: "It depends on the project scope. Small projects take 1-2 weeks, larger ones 1-3 months. I'll give you a realistic timeline upfront and stick to it.",
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely! I love working with startups and early-stage companies. Building something from scratch is exciting, and I'm always open to equity-based arrangements for the right opportunities.",
  },
  {
    question: "What's your tech stack?",
    answer: "For web: Next.js, React, Tailwind CSS, TypeScript. For games: Unity or Godot. For AI: Various LLM APIs and automation tools. I pick the best tool for each job.",
  },
  {
    question: "Are you available for ongoing work?",
    answer: "Yes! I'm open to retainer arrangements, hourly consulting, or project-based work. If you need regular updates or maintenance, we can set that up.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-purple-500/20 mb-6">
            <HelpCircle className="text-purple-500" size={32} />
          </div>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Frequently <span className="gradient-text-shimmer">Asked Questions</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about working together.
          </p>
        </header>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                  size={20}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all",
                  openIndex === index ? "max-h-40" : "max-h-0"
                )}
              >
                <p className="px-5 pb-5 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="/contact" className="text-purple-500 hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}