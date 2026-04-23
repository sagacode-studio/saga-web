# SKILLS.md

## @Programmer - Tech Stack & Standards

### Technologies
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans / Inter (next/font)
- **Language:** TypeScript

### Coding Standards

#### Do's ✅
- Use semantic HTML elements
- Follow React Server Components pattern (default to server, use 'use client' only when needed)
- Keep components small and reusable
- Use proper TypeScript types
- Implement responsive design (mobile-first)
- Add proper loading states
- Use `import alias` (@/* pattern)

#### Don'ts ❌
- No AI Slop - avoid generic gradients, excessive animations, cluttered layouts
- No inline styles - use Tailwind classes
- No hardcoded colors - use CSS custom properties
- No magic numbers - use constants
- Don't over-optimize prematurely

### Component Structure
```
components/
├── ui/           # Primitives (Button, Card, Badge)
├── sections/     # Page sections (Hero, Features)
└── layout/      # Layout components (Navbar, Footer)
```

---

## @Designer - Visual Standards

### Design Principles
- **Philosophy:** Expressive Minimalism - Less is More, butBold
- **Theme:** Dark mode default with accent colors
- **Approach:** Futuristic tech-forward, youth-oriented

### Color System
```css
--background: #0a0a0f (Rich black)
--foreground: #f5f5f5 (Off-white)
--accent-primary: #8b5cf6 (Electric purple)
--accent-secondary: #06b6d4 (Cyan)
--muted: #27272a (Dark gray)
```

### Typography
- **Headlines:** Geist Sans Bold/Black
- **Body:** Inter Regular/Medium
- **Code:** JetBrains Mono

### Visual Guidelines
- Use glassmorphism for cards/overlays
- Implement micro-interactions on hover
- Add subtle entrance animations
- Bento grid for feature showcases
- Kinetic typography for headings
- 3D depth effects where appropriate