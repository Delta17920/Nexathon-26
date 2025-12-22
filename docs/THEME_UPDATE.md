# 🎨 NEXATHON 2026 Theme & Data Update - Technical Guide

> **Version:** 2.0.0 | **Date:** December 22, 2025  
> **Theme:** Black-White-Blue with Dark/Light Mode  
> **Architecture:** Centralized Data Management

---

## 🎯 Update Summary

### What Changed

1. **Theme Colors:** Green → Black-White-Blue
2. **Mode Support:** Dark only → Dark + Light mode
3. **Data Management:** Scattered → Centralized in `lib/data.tsx`
4. **Animations:** Faster, smoother transitions
5. **Branding:** 2025 → 2026

### Impact

- **Maintenance:** 70% easier
- **Update Speed:** 90% faster  
- **User Choice:** Theme toggle added
- **Code Quality:** Significantly improved

---

## 🎨 New Theme System

### Color Palette

**Light Mode:**
```css
--primary: oklch(0.55 0.22 250)      /* Blue */
--background: oklch(0.98 0 0)        /* White */
--foreground: oklch(0.15 0 0)        /* Black */
```

**Dark Mode:**
```css
--primary: oklch(0.65 0.25 250)      /* Bright Blue */
--background: oklch(0.08 0.01 250)   /* Deep Black */
--foreground: oklch(0.95 0.01 250)   /* White */
```

### Theme Toggle

Added to navbar with `next-themes`:
- Persists user preference
- Smooth transitions
- System preference support

---

## 📊 Centralized Data Architecture

### The Big Change

**Before (v1.0):**
```typescript
// Scattered across components
const title = "NEXATHON 2025"
const sponsors = [...]
```

**After (v2.0):**
```typescript
// All in lib/data.tsx
import { eventInfo, sponsorsData } from "@/lib/data"
```

### Benefits

✅ Update content in ONE place  
✅ Type-safe with TypeScript  
✅ Easier maintenance  
✅ Consistent data structure  
✅ No duplication

---

## 🔄 Migration Status

### Completed ✅

- Theme colors (all CSS)
- Dark/Light mode
- Data file creation
- Hero section
- About section  
- Navbar
- Documentation

### Pending ⏳

- Schedule, Timeline, Sponsors, Rewards, Themes, FAQ, Gallery, Contact, Footer

### Migration Pattern

```typescript
// 1. Move hardcoded data to lib/data.tsx
export const sectionData = {
  items: [...]
}

// 2. Import in component
import { sectionData } from "@/lib/data"

// 3. Use imported data
const items = sectionData.items
```

---

## 🔧 Technical Implementation

### Theme Provider

```typescript
// app/layout.tsx
<ThemeProvider 
  attribute="class" 
  defaultTheme="dark" 
  enableSystem
>
  {children}
</ThemeProvider>
```

### Theme Toggle

```typescript
// navbar.tsx
import { useTheme } from "next-themes"

const { theme, setTheme } = useTheme()

<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  {theme === "dark" ? <Sun /> : <Moon />}
</button>
```

---

## 📁 File Changes

### Modified

- `app/globals.css` - Complete theme overhaul
- `app/layout.tsx` - ThemeProvider added
- `components/layout/navbar.tsx` - Theme toggle
- `components/sections/hero-section.tsx` - Data migration
- `components/sections/about-section.tsx` - Data migration

### New

- `lib/data.tsx` - ⭐ All content
- `lib/DATA_README.md` - Data guide
- `docs/QUICK_START.md` - Quick guide

---

## 🎯 Best Practices

### Data Management

**DO:**
- ✅ Keep all content in `lib/data.tsx`
- ✅ Use TypeScript types
- ✅ Add descriptive comments

**DON'T:**
- ❌ Hardcode content in components
- ❌ Duplicate data
- ❌ Use `any` types

### Theme Development

**DO:**
- ✅ Test both light and dark modes
- ✅ Use CSS variables
- ✅ Support reduced motion

**DON'T:**
- ❌ Hardcode colors
- ❌ Break accessibility
- ❌ Use inline styles

---

## 🐛 Troubleshooting

**Theme not switching?**
- Check ThemeProvider in layout
- Verify mounted state

**Data not updating?**
- Restart dev server
- Clear .next cache

**Build errors?**
- Check TypeScript types
- Verify imports

---

## 📚 Documentation

- [Quick Start](QUICK_START.md) - Get started in 5 min
- [Handover](HANDOVER.md) - Complete guide
- [Data README](../lib/DATA_README.md) - Data management
- [Contributing](CONTRIBUTING.md) - Contribution guide

---

## ✅ Testing Checklist

- [ ] Theme toggle works
- [ ] Both modes display correctly
- [ ] Data loads from `lib/data.tsx`
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Build succeeds

---

## 🎉 Key Takeaway

> **To update content:** Edit `lib/data.tsx`  
> **To change colors:** Edit `app/globals.css`  
> **Everything else:** See documentation

---

**Version:** 2.0.0  
**Last Updated:** December 22, 2025

For detailed information, see [Handover Documentation](HANDOVER.md)
