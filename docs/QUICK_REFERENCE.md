# Quick Reference Guide

This is a quick reference for developers working on the NEXATHON 2025 project.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start

# Lint code
pnpm lint
```

## 📁 Project Structure at a Glance

```
Nexathon-26/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Homepage (imports all sections)
│   └── globals.css         # Global styles & animations
│
├── components/
│   ├── layout/             # Navbar, Footer, Providers
│   ├── sections/           # 12 page sections
│   ├── features/           # Reusable components
│   └── ui/                 # Base UI components
│
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
│
├── public/                 # Static assets (images, icons)
│
├── ARCHITECTURE.md         # Technical architecture docs
├── CONTRIBUTING.md         # Contribution guidelines
├── HANDOVER.md            # Detailed component docs
└── README.md              # Main documentation
```

## 🎯 Common Tasks

### Adding a New Section

1. Create file: `components/sections/my-section.tsx`
2. Import shared components:
   ```tsx
   "use client"
   import SectionHeader from "@/components/features/section-header"
   import ScrollAnimation from "@/components/features/scroll-animation"
   ```
3. Add to `app/page.tsx`:
   ```tsx
   import MySection from "@/components/sections/my-section"
   // ... add <MySection /> in the return
   ```

### Adding a Reusable Component

1. Create file: `components/features/my-feature.tsx`
2. Define TypeScript interface:
   ```tsx
   interface MyFeatureProps {
     title: string
     description?: string
   }
   
   export default function MyFeature({ title, description }: MyFeatureProps) {
     return <div>{title}</div>
   }
   ```
3. Import where needed using `@/components/features/my-feature`

### Modifying Styles

- **Colors**: Edit CSS variables in `app/globals.css`
- **Animations**: Add keyframes in `app/globals.css`
- **Components**: Use Tailwind utilities in component classes

### Adding Navigation Links

Edit `components/layout/navbar.tsx`:
```tsx
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#new-section", label: "New Section" }, // Add here
  // ...
]
```

## 🎨 Design System

### Colors (CSS Variables)

```css
--background: Dark background (#0a0f0a)
--foreground: Light text (#f5f5f5)
--primary: Green accent (#00ff88)
--secondary: Cyan accent (#00d4ff)
--accent: Teal accent (#00ffcc)
```

### Typography

- **Headers**: Orbitron (--font-orbitron)
- **Subheadings**: Rajdhani (--font-rajdhani)
- **Body**: Plus Jakarta Sans (--font-sans)
- **Code**: JetBrains Mono (--font-jetbrains)
- **Special**: Space Grotesk (--font-space)

### Breakpoints (Tailwind)

```
sm:  640px   (Small devices)
md:  768px   (Medium devices)
lg:  1024px  (Large devices)
xl:  1280px  (Extra large)
2xl: 1536px  (2X Extra large)
```

## 🧩 Key Components

### Layout Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `Navbar` | Site navigation | `components/layout/navbar.tsx` |
| `Footer` | Site footer | `components/layout/footer.tsx` |
| `ThemeProvider` | Theme context | `components/layout/theme-provider.tsx` |

### Feature Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `SectionHeader` | Section titles | `components/features/section-header.tsx` |
| `ScrollAnimation` | Reveal animations | `components/features/scroll-animation.tsx` |
| `TiltCard` | 3D tilt effect | `components/features/tilt-card.tsx` |
| `AnimatedCounter` | Number animations | `components/features/animated-counter.tsx` |
| `MatrixBackground` | Matrix effect | `components/features/matrix-background.tsx` |
| `FloatingParticles` | Particle system | `components/features/floating-particles.tsx` |

### Section Components

All 12 sections in `components/sections/`:
- hero-section
- about-section
- schedule-section
- timeline-section
- sponsors-section
- rewards-section
- register-section
- theme-section
- faq-section
- gallery-section
- contact-section
- parallax-section

## 🔧 Utility Functions

### `cn()` - Class Name Merger

```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // Props className
)}>
```

## 📝 Import Aliases

```tsx
@/components/*  → components/*
@/lib/*        → lib/*
@/app/*        → app/*
```

## 🎭 Animations

### CSS Classes Available

```tsx
// Fade animations
<div className="animate-fade-in">
<div className="animate-fade-up">
<div className="animate-fade-down">

// Float animation
<div className="animate-float">

// Glow effects
<div className="glow-text">
<div className="glow-border">

// Gradient text
<div className="gradient-text">
```

### Scroll Animations

Wrap content in `ScrollAnimation`:
```tsx
<ScrollAnimation delay={0.2}>
  <YourContent />
</ScrollAnimation>
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
pnpm install
pnpm build
```

### Import Errors

- Check path alias starts with `@/`
- Verify file exists at the path
- Ensure TypeScript extension is `.tsx` for React components

### Styling Issues

- Run `pnpm dev` to see styles update
- Check browser console for CSS errors
- Verify Tailwind classes are spelled correctly

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `ARCHITECTURE.md` | Technical architecture details |
| `CONTRIBUTING.md` | Contribution guidelines |
| `HANDOVER.md` | Detailed component documentation |
| `QUICK_REFERENCE.md` | This file |

## 🔗 Important Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 Tips

1. **Use "use client"** only when component needs interactivity
2. **Prefer Tailwind** over custom CSS
3. **Keep components small** and focused
4. **Use TypeScript interfaces** for all props
5. **Follow existing patterns** when adding new components
6. **Test responsiveness** on mobile and desktop
7. **Check accessibility** with keyboard navigation

---

For detailed information, see the full documentation files listed above.
