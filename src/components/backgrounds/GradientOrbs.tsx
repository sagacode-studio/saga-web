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
    <div className={cn("absolute inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
      <div 
        className={cn(
          "absolute -top-1/2 -left-1/2 h-[150%] w-[150%] transition-opacity duration-700",
          isDark ? "opacity-40" : "opacity-20"
        )}
        style={{ animation: "orbit-slow 60s linear infinite" }}
      >
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)"
          }} 
        />
      </div>
      <div 
        className={cn(
          "absolute -bottom-1/2 -right-1/2 h-[150%] w-[150%] transition-opacity duration-700",
          isDark ? "opacity-30" : "opacity-15"
        )}
        style={{ animation: "orbit-slower 80s linear infinite" }}
      >
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)"
          }} 
        />
      </div>
    </div>
  );
}

interface GlowCardProps {
  className?: string;
  children: React.ReactNode;
}

export function GlowCard({ className, children }: GlowCardProps) {
  return (
    <div className={cn("relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover-lift", className)}>
      {children}
    </div>
  );
}