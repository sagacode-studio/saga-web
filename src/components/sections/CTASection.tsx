"use client";

import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-cyan-500/10 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0" />
          
          <div className="relative">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 mb-6">
              <Rocket className="text-white" size={32} />
            </div>
            
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Ready to Build Something <span className="gradient-text-shimmer">Amazing</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you have a project in mind or just want to chat about ideas, I&apos;m always open to connecting with like-minded people.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3.5 font-semibold text-white transition-all hover:opacity-90"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 font-semibold transition-all hover:bg-muted"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}