# Contributing to NEXATHON 2026

Thank you for your interest in contributing to NEXATHON 2026! This guide will help you get started.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Content Updates](#content-updates-v20)
- [Code Contributions](#code-contributions)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git
- Code editor (VS Code recommended)

### Setup

1. **Fork and clone:**
```bash
git clone https://github.com/YOUR_USERNAME/Nexathon-26.git
cd Nexathon-26
```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
```

3. **Start development:**
```bash
npm run dev
```

4. **Create a branch:**
```bash
git checkout -b feature/your-feature-name
```

---

## Content Updates (v2.0)

### The New Way: Centralized Data

**All content lives in `lib/data.tsx`** - This is the biggest change in v2.0!

### How to Update Content

1. **Open** `lib/data.tsx`
2. **Find** your section (Ctrl+F / Cmd+F)
3. **Edit** values
4. **Save** - Changes apply everywhere

### Example: Update Event Date

```typescript
// In lib/data.tsx
export const eventInfo = {
  date: "March 15-17, 2026",  // ← Change this
  // ...
}
```

### Adding New Content

**1. Add to `lib/data.tsx`:**
```typescript
export const newSectionData = {
  title: "New Section",
  items: [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" }
  ]
}
```

**2. Import in component:**
```typescript
import { newSectionData } from "@/lib/data"

export default function NewSection() {
  return (
    <div>
      <h2>{newSectionData.title}</h2>
      {newSectionData.items.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  )
}
```

### Adding Images/Logos

1. **Place file** in `/public/logos/` or `/public/gallery/`
2. **Reference** in `lib/data.tsx`:
```typescript
logo: "/logos/company-name.svg"  // ✅ Correct
logo: "logos/company-name.svg"   // ❌ Wrong
```

📖 **Full Guide:** See [`lib/DATA_README.md`](../lib/DATA_README.md)

---

## Code Contributions

### Component Guidelines

**1. Use centralized data:**

```typescript
// ❌ Don't hardcode content
const sponsors = [{ name: "Company" }]

// ✅ Import from lib/data.tsx
import { sponsorsData } from "@/lib/data"
const sponsors = sponsorsData.tiers[0].sponsors
```

**2. Use TypeScript:**

```typescript
// ✅ Good
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ 
  label, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}

// ❌ Avoid
export default function Button(props: any) {
  return <button>{props.label}</button>
}
```

**3. Use functional components:**

```typescript
// ✅ Good
export default function MyComponent() {
  const [state, setState] = useState(false)
  return <div>...</div>
}

// ❌ Avoid class components
class MyComponent extends React.Component {
  render() { return <div>...</div> }
}
```

### File Organization

Place files in the correct directory:

```
components/
├── layout/       # Navbar, Footer, ThemeProvider
├── sections/     # Page sections (Hero, About, etc.)
├── features/     # Reusable components (ScrollAnimation, etc.)
└── ui/           # Base UI primitives (Button, Card, etc.)
```

### Styling Guidelines

**1. Use Tailwind classes:**

```tsx
// ✅ Good
<div className="px-4 py-2 bg-primary text-white rounded-lg">
  Content
</div>

// ❌ Avoid inline styles
<div style={{ padding: '8px 16px', background: 'blue' }}>
  Content
</div>
```

**2. Use theme colors:**

```tsx
// ✅ Use CSS variables
className="text-primary bg-background"

// ❌ Don't hardcode colors
className="text-blue-500 bg-gray-900"
```

**3. Support dark mode:**

```tsx
// ✅ Theme-aware
className="bg-card text-foreground border-border"

// The theme system handles light/dark automatically
```

### Animation Guidelines

**1. Use existing animations:**

```tsx
// Available in globals.css:
className="glow-text"
className="float-3d"
className="pulse-glow"
className="shimmer"
```

**2. Consistent timing:**

```tsx
// Use standard durations
transition-all duration-500  // Standard
transition-all duration-300  // Fast
transition-all duration-1000 // Slow
```

**3. Respect reduced motion:**

Animations auto-disable for users with `prefers-reduced-motion`.

---

## Coding Standards

### TypeScript

- ✅ Use explicit types for props
- ✅ Use type inference for local variables
- ✅ Export types when reusable
- ❌ Avoid `any` type

### React

- ✅ Use functional components with hooks
- ✅ Keep components focused (single responsibility)
- ✅ Extract reusable logic into custom hooks
- ✅ Use descriptive component names

### Imports

Use absolute imports with `@/`:

```typescript
// ✅ Good
import { eventInfo } from "@/lib/data"
import Button from "@/components/ui/button"

// ❌ Avoid relative imports
import { eventInfo } from "../../lib/data"
import Button from "../ui/button"
```

### Naming Conventions

- **Components:** PascalCase (`HeroSection`, `NavBar`)
- **Files:** kebab-case (`hero-section.tsx`, `nav-bar.tsx`)
- **Variables:** camelCase (`eventInfo`, `sponsorData`)
- **Constants:** UPPER_CASE (`API_URL`, `MAX_COUNT`)

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Code style (formatting, no logic change)
- `refactor` - Code restructuring
- `perf` - Performance improvement
- `test` - Adding tests
- `chore` - Maintenance tasks

### Examples

```bash
feat(data): add sponsors section data
fix(navbar): theme toggle not persisting
docs: update CONTRIBUTING.md for v2.0
style(hero): improve animation timing
refactor(about): migrate to centralized data
```

### Best Practices

- ✅ Write clear, descriptive messages
- ✅ Use present tense ("add" not "added")
- ✅ Keep subject line under 72 characters
- ✅ Reference issues when applicable (`fixes #123`)

---

## Pull Request Process

### Before Submitting

**1. Test thoroughly:**
- [ ] Test in both light and dark modes
- [ ] Check mobile responsiveness
- [ ] Verify no console errors
- [ ] Test with slow network
- [ ] Verify all links work

**2. Code quality:**
- [ ] Run linter: `npm run lint`
- [ ] Build successfully: `npm run build`
- [ ] No TypeScript errors
- [ ] Follow coding standards

**3. Documentation:**
- [ ] Update `lib/data.tsx` if adding content
- [ ] Add comments for complex logic
- [ ] Update relevant docs if needed

### Creating a PR

1. **Push your branch:**
```bash
git push origin feature/your-feature-name
```

2. **Open PR on GitHub**

3. **Fill out PR template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Tested on mobile
- [ ] No console errors

## Screenshots
If applicable, add screenshots
```

4. **Wait for review**

### Review Process

- Maintainers will review within 2-3 days
- Address feedback promptly
- Once approved, PR will be merged

---

## Development Workflow

### Daily Development

```bash
# 1. Start dev server
npm run dev

# 2. Make changes

# 3. Test changes in browser

# 4. Commit
git add .
git commit -m "feat: your feature"

# 5. Push
git push origin your-branch
```

### Common Tasks

**Update content:**
→ Edit `lib/data.tsx`

**Change theme colors:**
→ Edit `app/globals.css`

**Add new section:**
1. Create component in `components/sections/`
2. Add data to `lib/data.tsx`
3. Import in `app/page.tsx`

**Add dependency:**
```bash
npm install package-name
# or
pnpm add package-name
```

---

## Testing Guidelines

### Manual Testing

**Theme Testing:**
- [ ] Toggle light/dark mode
- [ ] Check all sections in both modes
- [ ] Verify colors are correct

**Responsiveness:**
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

**Browser Testing:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)

### Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Proper ARIA labels
- [ ] Sufficient color contrast

---

## Getting Help

- **Quick Start:** [`docs/QUICK_START.md`](QUICK_START.md)
- **Data Guide:** [`lib/DATA_README.md`](../lib/DATA_README.md)
- **Handover Doc:** [`docs/HANDOVER.md`](HANDOVER.md)
- **Architecture:** [`docs/ARCHITECTURE.md`](ARCHITECTURE.md)

---

## Code of Conduct

### Our Standards

- ✅ Be respectful and inclusive
- ✅ Welcome newcomers
- ✅ Give constructive feedback
- ✅ Focus on what's best for the project
- ❌ No harassment or discrimination
- ❌ No trolling or insulting comments

### Enforcement

Violations may result in:
1. Warning
2. Temporary ban
3. Permanent ban

Report issues to project maintainers.

---

## Quick Reference

### Most Common Tasks

| Task | Location |
|------|----------|
| Update content | `lib/data.tsx` |
| Change colors | `app/globals.css` |
| Add component | `components/sections/` |
| Add documentation | `docs/` |

### Key Commands

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run lint     # Run linter
npm run start    # Run production build
```

### Important Files

- `lib/data.tsx` - All content
- `app/globals.css` - Theme and animations
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Main page

---

## 🎉 Thank You!

Your contributions make NEXATHON better for everyone!

**Questions?**  
Open an issue or ask in discussions.

**Version:** 2.0.0  
**Last Updated:** December 22, 2025
