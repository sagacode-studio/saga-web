"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface GradientOrbsProps {
  className?: string;
}

export function GradientOrbs({ className }: GradientOrbsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className={cn(
        "absolute -top-1/2 -left-1/2 h-[150%] w-[150%] animate-orbit-slow",
        isDark ? "opacity-30" : "opacity-20"
      )}>
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />
      </div>
      <div className={cn(
        "absolute -bottom-1/2 -right-1/2 h-[150%] w-[150%] animate-orbit-slower",
        isDark ? "opacity-20" : "opacity-15"
      )}>
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tl from-cyan-500/20 to-transparent blur-3xl" />
      </div>
    </div>
  );
}

export function GlowCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative rounded-xl border border-border bg-card p-6 hover-lift", className)}>
      {children}
    </div>
  );
}