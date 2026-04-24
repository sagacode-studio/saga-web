# SagaCode Web - Project Documentation

## 📋 Project Overview

- **Project Name:** SagaCode Web
- **Description:** Portfolio website for SagaCode Studio - a One Person Company focusing on Indie Games, Frontend Design, and AI Solutions
- **Tech Stack:** Next.js 14, Tailwind CSS, TypeScript
- **Live URL:** https://saga-web-five.vercel.app
- **GitHub:** https://github.com/sagacode-studio/saga-web

---

## 🗂️ Page Structure

| Route | Page | Desc |
|-------|------|------|
| `/` | Home | Hero + Features + Testimonials + Newsletter + Social + CTA |
| `/features` | Features | Capabilities & core strengths |
| `/services` | Services | 3 main services offered |
| `/projects` | Projects | Coming soon project |
| `/blog` | Blog | 3 articles (AI, Games, Business) |
| `/process` | Process | 4-step workflow |
| `/faq` | FAQ | 6 Q&A accordion |
| `/about` | About | Vision, Mission, Philosophy |
| `/contact` | Contact | Email & social links |

---

## 🎨 Design System

### Colors
- **Background:** `#09090b` (dark), `#fafafa` (light)
- **Primary:** Purple `#a855f7` / `#7c3aed`
- **Secondary:** Cyan `#22d3ee` / `#0891b2`
- **Text:** `#fafafa` (dark), `#18181b` (light)

### Typography
- **Font:** Inter (system-ui fallback)
- **Headings:** Bold/ExtraBold
- **Body:** Regular

### Components
- Dark/Light theme toggle
- Glassmorphism navigation
- Gradient text (animated shimmer)
- Hover lift effects
- Responsive grid layouts

---

## ⚙️ Technical Details

### Features Implemented
- Theme switcher (dark/light)
- Newsletter subscription (localStorage)
- Social counters (localStorage)
- SEO: robots.txt, sitemap.xml
- OG image placeholder

### Performance
- Static generation (SSG)
- No Framer Motion (CSS-only animations)
- ~108 kB first load JS

---

## 📦 Dependencies

```json
{
  "next": "14.2.21",
  "react": "^18.3.1",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.469.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

---

## 🚀 Deployment

- **Platform:** Vercel
- **Team:** sagacode-studios-projects
- **URL:** https://saga-web-five.vercel.app

---

## 📝 Content

### Vision
"Building the future of Indie Games, Frontend Design, and AI-driven solutions through a One Person Company model."

### Philosophy
"Small but Mighty" - Quality over quantity

### Services
1. Indie Games (Unity/Godot)
2. Frontend Design (Next.js/Tailwind)
3. AI Solutions (Automation/Integration)

### Contact
- Email: sagacode86@gmail.com
- GitHub: github.com/sagacode-studio
- Location: Indonesia

---

## 🔄 Future Improvements

1. Buy custom domain (e.g., sagacode.studio)
2. Connect to Vercel Pro for custom subdomain
3. Add real backend for newsletter (optional)