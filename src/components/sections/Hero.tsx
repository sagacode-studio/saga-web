"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code, Gamepad2, Layers } from "lucide-react";
import { GradientOrbs } from "@/components/backgrounds/GradientOrbs";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <GradientOrbs />
      
      <div className="container-narrow py-32 text-center relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400 backdrop-blur-sm animate-in">
          <Sparkles size={14} />
          Building the Future
        </span>

        <h1
          id="hero-heading"
          className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl lg:text-8xl animate-in stagger-1"
        >
          <span className="text-foreground">Small but</span>{" "}
          <span className="gradient-text-shimmer">Mighty</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl animate-in stagger-2">
          Crafting the future of{" "}
          <strong className="text-purple-400">Indie Games</strong>,{" "}
          <strong className="text-cyan-400">Frontend Design</strong>, and{" "}
          <strong className="text-purple-400">AI-driven solutions</strong> through human-AI collaboration.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in stagger-3">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-8 py-3.5 font-semibold backdrop-blur-sm transition-all hover:bg-card hover:border-purple-500/30 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <aside className="mt-20 flex items-center justify-center gap-10 animate-in stagger-4">
          <article className="flex flex-col items-center gap-2">
            <Gamepad2 size={24} className="text-purple-400" />
            <span className="text-sm font-medium text-muted-foreground">Games</span>
          </article>
          <article className="flex flex-col items-center gap-2">
            <Code size={24} className="text-cyan-400" />
            <span className="text-sm font-medium text-muted-foreground">Design</span>
          </article>
          <article className="flex flex-col items-center gap-2">
            <Layers size={24} className="text-purple-400" />
            <span className="text-sm font-medium text-muted-foreground">AI</span>
          </article>
        </aside>
      </div>
    </section>
  );
}