# Architecture Documentation

This document provides an in-depth overview of the NEXATHON 2025 website architecture, design decisions, and implementation details.

## 📐 Architecture Overview

NEXATHON 2025 is built as a **Single Page Application (SPA)** using Next.js 16 with the App Router architecture. The application follows a modern, component-based architecture with clear separation of concerns.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (Client)                    │
│  ┌───────────────────────────────────────────────────┐ │
│  │            React Components Tree                   │ │
│  │  ┌─────────────────────────────────────────────┐  │ │
│  │  │  RootLayout (Fonts, Analytics, Providers)   │  │ │
│  │  │  ├── MatrixBackground (Canvas Effects)      │  │ │
│  │  │  └── Page Components                        │  │ │
│  │  │      ├── Navbar (Layout)                    │  │ │
│  │  │      ├── Hero Section                       │  │ │
│  │  │      ├── About Section                      │  │ │
│  │  │      ├── ... (Other Sections)               │  │ │
│  │  │      └── Footer (Layout)                    │  │ │
│  │  └─────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
           │                                    │
           │  CSS (Tailwind + Custom)           │  JS (React/Next.js)
           └────────────────────────────────────┘
```

## 🏗 Core Technologies

### Next.js App Router (v16.0.10)

The application uses Next.js App Router for:
- **Server-Side Rendering (SSR)** - Initial page load optimization
- **React Server Components** - Improved performance
- **File-based routing** - Automatic route generation
- **Built-in optimization** - Image, font, and script optimization

### React 19.2.0

Modern React features utilized:
- **Functional Components** - All components are functional
- **Hooks** - useState, useEffect, useRef, custom hooks
- **Client Components** - Used for interactive elements ("use client")
- **Composition** - Component composition over inheritance

### TypeScript 5.x

Type safety throughout:
- **Strong typing** for all components
- **Interface definitions** for props
- **Type inference** where appropriate
- **Compile-time error detection**

## 📦 Component Architecture

### Component Hierarchy

```
components/
│
├── layout/              # Structural components (used once)
│   ├── navbar.tsx      # Site navigation with scroll detection
│   ├── footer.tsx      # Site footer with links
│   └── theme-provider.tsx  # Theme context provider
│
├── sections/            # Page sections (composed in page.tsx)
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── schedule-section.tsx
│   ├── timeline-section.tsx
│   ├── sponsors-section.tsx
│   ├── rewards-section.tsx
│   ├── register-section.tsx
│   ├── theme-section.tsx
│   ├── faq-section.tsx
│   ├── gallery-section.tsx
│   ├── contact-section.tsx
│   └── parallax-section.tsx
│
├── features/            # Reusable features (used multiple times)
│   ├── animated-counter.tsx
│   ├── contact-cta.tsx
│   ├── floating-particles.tsx
│   ├── matrix-background.tsx
│   ├── scroll-animation.tsx
│   ├── section-header.tsx
│   └── tilt-card.tsx
│
└── ui/                  # Base UI primitives (shadcn/ui)
    ├── shader-animation.tsx
    ├── timeline.tsx
    └── ... (accordion, button, etc.)
```

### Component Design Patterns

#### 1. Composition Pattern

Sections compose multiple feature components:

```tsx
<Section>
  <SectionHeader title="..." subtitle="..." />
  <ScrollAnimation>
    <TiltCard>
      {/* Content */}
    </TiltCard>
  </ScrollAnimation>
  <ContactCTA />
</Section>
```

#### 2. Container/Presentational Pattern

- **Layout components** - Handle structure and state
- **Section components** - Combine features with content
- **Feature components** - Provide reusable functionality
- **UI components** - Pure presentational primitives

#### 3. Client vs Server Components

```tsx
// Server Component (default) - No "use client"
export default function ServerComponent() {
  // Rendered on server, no interactivity needed
}

// Client Component - Has "use client"
"use client"
export default function ClientComponent() {
  // Interactive, uses hooks, event handlers
}
```

## 🎨 Styling Architecture

### Tailwind CSS 4.1.9

Utility-first CSS framework with:
- **Custom configuration** in `tailwind.config.ts`
- **Design tokens** via CSS variables
- **Responsive utilities** for all breakpoints
- **Custom animations** defined in globals.css

### CSS Variable System

```css
:root {
  /* Color System */
  --background: oklch(0.06 0.015 155);
  --foreground: oklch(0.97 0.01 155);
  --primary: oklch(0.78 0.22 145);
  --secondary: oklch(0.6 0.18 175);
  --accent: oklch(0.68 0.2 160);
  
  /* Spacing */
  --radius: 0.625rem;
  
  /* Fonts */
  --font-orbitron: "Orbitron", sans-serif;
  --font-rajdhani: "Rajdhani", sans-serif;
  /* ... */
}
```

### Animation System

Three levels of animations:

1. **CSS Keyframe Animations** (globals.css)
   ```css
   @keyframes float {
     /* ... */
   }
   ```

2. **Tailwind Utilities**
   ```tsx
   <div className="animate-float hover:scale-105 transition-transform">
   ```

3. **Framer Motion** (Complex animations)
   ```tsx
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
   ```

## 🔧 State Management

### Local Component State

Most state is local to components using hooks:

```tsx
const [isOpen, setIsOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)
```

### Context API

Theme provider for dark mode:

```tsx
// components/layout/theme-provider.tsx
<ThemeProvider attribute="class" defaultTheme="dark">
  {children}
</ThemeProvider>
```

### No Global State Library

The application doesn't require Redux/Zustand because:
- Simple, linear page flow
- Minimal shared state
- Most interactions are local to sections

## 🎭 Visual Effects System

### Matrix Background

Canvas-based matrix effect:
- Renders falling characters
- Uses requestAnimationFrame
- Optimized with column-based rendering
- Cleanup on unmount

### Floating Particles

Custom particle system:
- Random position and movement
- CSS transform-based animation
- Configurable count and speed

### Scroll Animations

Intersection Observer API:
- Detects elements entering viewport
- Triggers CSS classes
- Smooth reveal animations
- Performance-optimized

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  // ...
}, [])
```

### 3D Tilt Effect

Mouse tracking with transform:
```tsx
const handleMouseMove = (e) => {
  const rect = ref.current.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const rotateX = (y / rect.height - 0.5) * 20
  const rotateY = (x / rect.width - 0.5) * -20
  
  setRotation({ x: rotateX, y: rotateY })
}
```

## 📊 Data Flow

### Props Down, Events Up

```
Page (app/page.tsx)
  ↓ (props)
Section Component
  ↓ (props)
Feature Component
  ↑ (callbacks/events)
User Interaction
```

### Example Flow

1. User scrolls page
2. Navbar component detects scroll (useEffect)
3. Updates local state (setScrolled)
4. Re-renders with new styles
5. No parent component affected

## 🚀 Performance Optimizations

### 1. Code Splitting

Next.js automatically splits code:
- Each section is a separate chunk
- Dynamic imports for heavy components
- Lazy loading where appropriate

### 2. Image Optimization

```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  width={800}
  height={600}
  alt="Description"
  loading="lazy"  // Lazy load
  placeholder="blur"  // Blur placeholder
/>
```

### 3. Font Optimization

Using next/font for optimal loading:
```tsx
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",  // FOUT prevention
})
```

### 4. Animation Performance

- Use `transform` and `opacity` (GPU-accelerated)
- Avoid animating layout properties
- Use `will-change` sparingly
- Cleanup animations on unmount

### 5. Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🔍 SEO & Accessibility

### SEO Features

1. **Metadata** in layout.tsx
   ```tsx
   export const metadata: Metadata = {
     title: "NEXATHON 2025 | Code. Create. Conquer.",
     description: "Join the ultimate 36-hour hackathon...",
     keywords: [...],
   }
   ```

2. **Semantic HTML**
   - Proper heading hierarchy (h1 → h6)
   - Section elements with IDs
   - Article/nav/footer elements

3. **Structured Data** (potential addition)
   - JSON-LD for events
   - Schema.org markup

### Accessibility Features

1. **ARIA Labels**
   ```tsx
   <button aria-label="Open menu" aria-expanded={isOpen}>
   ```

2. **Keyboard Navigation**
   - Tab order maintained
   - Focus visible states
   - Escape key handlers

3. **Color Contrast**
   - WCAG AA compliant
   - Tested with contrast checkers

4. **Screen Reader Support**
   - Descriptive alt text
   - Skip links
   - Heading structure

## 🧪 Testing Strategy

While not currently implemented, recommended testing approach:

### Unit Tests (Jest + React Testing Library)
```tsx
test('Button renders with correct text', () => {
  render(<Button label="Click me" />)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

### Integration Tests
- Test section interactions
- Form submissions
- Navigation flow

### E2E Tests (Playwright/Cypress)
- Complete user journeys
- Cross-browser testing
- Responsive testing

## 📈 Build & Deployment

### Build Process

1. TypeScript compilation
2. Next.js optimization
3. Tailwind CSS purging
4. Asset optimization
5. Static generation

### Deployment (Vercel)

```
git push → GitHub → Vercel
  │
  ├─ Build triggered
  ├─ Environment set up
  ├─ Dependencies installed
  ├─ next build executed
  ├─ Assets uploaded to CDN
  └─ Deployment complete
```

### Environment Variables

Currently none required, but structure supports:
```env
NEXT_PUBLIC_API_URL=...
NEXT_PUBLIC_ANALYTICS_ID=...
```

## 🔒 Security Considerations

1. **No sensitive data** in client code
2. **Environment variables** for secrets
3. **Content Security Policy** headers
4. **HTTPS only** in production
5. **Dependency auditing** (`npm audit`)

## 🔮 Future Enhancements

Potential architectural improvements:

1. **API Integration**
   - Dedicated API routes in app/api
   - Backend for form submissions
   - Database for registrations

2. **State Management**
   - Add Zustand/Redux if needed
   - Form state management at app level

3. **Testing Suite**
   - Comprehensive test coverage
   - CI/CD integration
   - Visual regression testing

4. **Performance**
   - Service worker for offline support
   - Advanced caching strategies
   - Progressive Web App features

5. **Analytics**
   - Enhanced event tracking
   - User behavior analysis
   - A/B testing framework

---

This architecture provides a solid foundation for a performant, maintainable, and scalable web application.
