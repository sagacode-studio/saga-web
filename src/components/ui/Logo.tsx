"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      width={width * 3}
      height={height}
      viewBox={`0 0 ${width * 3} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SagaCode"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#a855f7" : "#7c3aed"} />
          <stop offset="100%" stopColor={isDark ? "#22d3ee" : "#0891b2"} />
        </linearGradient>
      </defs>

      <text
        x="0"
        y={height * 0.75}
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize={height * 0.7}
        fill="url(#logoGrad)"
      >
        SC
      </text>
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SagaCode"
    >
      <defs>
        <linearGradient id="logoGradMark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#a855f7" : "#7c3aed"} />
          <stop offset="100%" stopColor={isDark ? "#22d3ee" : "#0891b2"} />
        </linearGradient>
      </defs>

      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#logoGradMark)"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="14"
        fill="white"
      >
        SC
      </text>
    </svg>
  );
}