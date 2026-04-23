"use client";

import { useState, useEffect } from "react";
import { Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

interface SocialData {
  github: number;
  twitter: number;
  linkedin: number;
  youtube: number;
}

export function SocialSection() {
  const [counts, setCounts] = useState<SocialData>({
    github: 0,
    twitter: 0,
    linkedin: 0,
    youtube: 0
  });

  useEffect(() => {
    const stored = localStorage.getItem("sagacode_socials");
    if (stored) {
      setCounts(JSON.parse(stored));
    }
  }, []);

  const socials = [
    { 
      href: "https://github.com/sagacode-studio", 
      icon: Github, 
      label: "GitHub",
      count: counts.github,
      accent: "purple",
    },
    { 
      href: "#", 
      icon: Twitter, 
      label: "Twitter/X",
      count: counts.twitter, 
      accent: "cyan",
    },
    { 
      href: "#", 
      icon: Linkedin, 
      label: "LinkedIn",
      count: counts.linkedin,
      accent: "purple",
    },
    { 
      href: "#", 
      icon: Youtube, 
      label: "YouTube",
      count: counts.youtube,
      accent: "cyan",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-narrow">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Let&apos;s <span className="gradient-text-shimmer">Connect</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Follow along for updates, behind-the-scenes, and tech talk.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover-lift ${
                social.accent === 'purple' ? 'hover:border-purple-500/50' : 'hover:border-cyan-500/50'
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                social.accent === 'purple' ? 'bg-purple-500/20' : 'bg-cyan-500/20'
              }`}>
                <social.icon className={`${social.accent === 'purple' ? 'text-purple-500' : 'text-cyan-500'}`} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{social.label}</div>
                <div className="text-sm text-muted-foreground">{social.count}+</div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}