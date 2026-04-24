"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code, Gamepad2, Cpu, Zap } from "lucide-react";
import { GradientOrbs } from "@/components/backgrounds/GradientOrbs";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <GradientOrbs />
      
      <div className="container-narrow py-32 text-center relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400 backdrop-blur-sm animate-in">
          <Sparkles size={14} />
          Independent Development Lab
        </span>

        <h1
          id="hero-heading"
          className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-zinc-100">Small but</span>{" "}
          <span className="gradient-text-shimmer">Mighty</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl leading-relaxed">
          One-person development lab crafting high-density experiences in{" "}
          <strong className="text-purple-400">Indie Games</strong>,{" "}
          <strong className="text-cyan-400">Frontend Design</strong>, and{" "}
          <strong className="text-purple-400">AI Solutions</strong>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
          >
            View Our Work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-8 py-3.5 font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:bg-zinc-800 hover:border-zinc-700 hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </div>

        <aside className="mt-20 flex items-center justify-center gap-12">
          {[
            { icon: Gamepad2, label: "Games", color: "text-purple-400" },
            { icon: Code, label: "Frontend", color: "text-cyan-400" },
            { icon: Cpu, label: "AI", color: "text-purple-400" },
          ].map((item) => (
            <article key={item.label} className="flex flex-col items-center gap-2">
              <item.icon size={22} className={item.color} />
              <span className="text-sm font-medium text-zinc-500">{item.label}</span>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}