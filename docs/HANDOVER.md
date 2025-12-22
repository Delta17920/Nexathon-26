# 🚀 NEXATHON 2026 Website - Complete Handover Documentation

> **Project:** NEXATHON 2026 Hackathon Website  
> **Framework:** Next.js 16.0.10 (App Router)  
> **Version:** 2.0.0 (December 2025 Update)  
> **Theme:** Black-White-Blue with Dark/Light Mode  
> **Status:** Production Ready

---

## 📋 Quick Navigation

| Section | Purpose |
|---------|---------|
| [What's New in v2.0](#-whats-new-in-v20) | Latest updates and changes |
| [Data Management](#-data-management-new) | How to update content |
| [Project Structure](#-project-structure) | File organization |
| [Tech Stack](#-tech-stack--dependencies) | Technologies used |
| [Common Tasks](#-common-tasks--workflows) | Daily operations |
| [Deployment](#-deployment) | Going live |

---

## 🎉 What's New in v2.0

### Major Updates (December 2025)

#### 1. **New Color Theme** 🎨
- **Changed from:** Green tech theme  
- **Changed to:** Black-White-Blue modern theme
- **Added:** Dark/Light mode toggle with `next-themes`
- **Impact:** Complete CSS overhaul in `app/globals.css`

#### 2. **Centralized Data Management** 📊
- **New file:** `lib/data.tsx` - Single source of truth for all content
- **Benefits:**
  - Update content in ONE place
  - No more hunting through components
  - Type-safe with TypeScript
  - Easy to maintain

#### 3. **Enhanced Animations** ✨
- Smoother transitions (500-1000ms vs 300-500ms)
- Better hover states
- Improved 3D effects
- Performance optimizations

#### 4. **Updated Branding** 🏷️
- Event year: 2025 → 2026
- Updated metadata and SEO
- New logo placeholders
- Refreshed content

---

## 📊 Data Management (NEW!)

### **IMPORTANT:** All Content Lives in `lib/data.tsx`

This is the **biggest change** in v2.0. Instead of hardcoding content in components:

```typescript
// ❌ OLD WAY (v1.0)
const title = "NEXATHON 2025"
const date = "March 15-17, 2025"

// ✅ NEW WAY (v2.0)
import { eventInfo } from "@/lib/data"
// Use eventInfo.name, eventInfo.date, etc.
```

### How to Update Content

1. **Open** `lib/data.tsx`
2. **Find** your section (use Ctrl+F / Cmd+F)
3. **Edit** the values
4. **Save** - Changes apply everywhere automatically

### Available Data Sections

| Section | Variable | What It Contains |
|---------|----------|------------------|
| Event Info | `eventInfo` | Basic details (name, date, venue) |
| Hero | `heroData` | Landing page content |
| About | `aboutData` | Features and statistics |
| Schedule | `scheduleData` | 3-day event timeline |
| Timeline | `timelineData` | Registration milestones |
| Sponsors | `sponsorsData` | Partner organizations |
| Rewards | `rewardsData` | Prizes and categories |
| Themes | `themesData` | Hackathon tracks |
| FAQ | `faqData` | Questions and answers |
| Gallery | `galleryData` | Event images |
| Contact | `contactData` | Contact details |
| Navigation | `navigationData` | Menu links |
| Footer | `footerData` | Footer content |

📖 **Full Guide:** See [`lib/DATA_README.md`](../lib/DATA_README.md)

---

## 📁 Project Structure

```
Nexathon-26/
├── app/
│   ├── globals.css          # 🎨 THEME & ANIMATIONS (Blue color scheme)
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Main page (imports all sections)
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # ✨ Updated: Theme toggle, data-driven
│   │   └── footer.tsx
│   ├── sections/            # Page sections
│   │   ├── hero-section.tsx      # ✨ Updated: Uses heroData
│   │   ├── about-section.tsx     # ✨ Updated: Uses aboutData
│   │   └── ...              # ⏳ Needs migration to centralized data
│   ├── features/            # Reusable components
│   └── ui/                  # Base UI primitives
│
├── lib/
│   ├── data.tsx             # 🆕 ALL CONTENT HERE!
│   ├── DATA_README.md       # 🆕 Data management guide
│   └── utils.ts
│
├── public/
│   ├── logos/              # 🆕 Sponsor and brand logos
│   └── gallery/            # 🆕 Event images
│
└── docs/
    ├── QUICK_START.md      # 🆕 Quick start guide
    ├── HANDOVER.md         # This file
    ├── CONTRIBUTING.md     # Contribution guidelines
    └── ARCHITECTURE.md     # Technical architecture
```

---

## 🛠 Tech Stack & Dependencies

- **Next.js 16.0.10** - React framework
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4.1.9** - Styling
- **next-themes 0.4.5** - 🆕 Dark/Light mode
- **Framer Motion 12.23.26** - Animations
- **Lucide React** - Icons

---

## 🎨 Theme System (v2.0)

### Color Palette

**Light Mode:**
- Primary: Blue (oklch 0.55 0.22 250)
- Background: White
- Foreground: Black

**Dark Mode:**
- Primary: Bright Blue (oklch 0.65 0.25 250)
- Background: Deep Black
- Foreground: White

### Theme Toggle

Located in navbar (top-right):
- Sun icon = Light mode
- Moon icon = Dark mode
- Persists user preference

---

## 🔧 Common Tasks

### Content Updates (NEW Workflow)

**Old Way:**
1. Find component file
2. Edit hardcoded text
3. Repeat for each occurrence

**New Way:**
1. Open `lib/data.tsx`
2. Edit value
3. Save - Done! ✅

### Adding Sponsors

1. Add logo to `/public/logos/company-name.svg`
2. Update `lib/data.tsx`:
```typescript
sponsorsData.tiers[0].sponsors.push({
  name: "Company Name",
  logo: "/logos/company-name.svg",
  website: "https://company.com"
})
```

### Updating Colors

Edit `app/globals.css`:
```css
:root {
  --primary: oklch(0.55 0.22 250);  /* Change hue */
}
```

---

## 🚀 Deployment

### Vercel
1. Push to GitHub
2. Vercel auto-deploys
3. Verify at production URL

### Manual
```bash
npm run build
npm start
```

---

## 🐛 Troubleshooting

**Theme not switching?**
- Check ThemeProvider in `app/layout.tsx`

**Content not updating?**
- Restart dev server

**Build errors?**
- Check TypeScript types in `lib/data.tsx`

---

## 📝 Migration Guide

**Components needing migration:**
- Schedule, Timeline, Sponsors, Rewards, Themes, FAQ, Gallery, Contact, Footer

**Steps:**
1. Move hardcoded data to `lib/data.tsx`
2. Import in component
3. Replace references
4. Test

---

## 📚 Key Files

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `lib/data.tsx` | All content | Frequent |
| `app/globals.css` | Theme | Rarely |
| `app/page.tsx` | Section imports | When adding sections |

---

## 🎓 Key Principles

✅ **Content** → `lib/data.tsx`  
✅ **Styling** → `app/globals.css`  
✅ **Logic** → Components

---

## 📞 Getting Help

- **Quick Start:** [`docs/QUICK_START.md`](QUICK_START.md)
- **Data Guide:** [`lib/DATA_README.md`](../lib/DATA_README.md)
- **Contributing:** [`docs/CONTRIBUTING.md`](CONTRIBUTING.md)

---

## 🎉 Summary

> **To update website content, edit `lib/data.tsx` - that's it!**

**Version:** 2.0.0  
**Last Updated:** December 22, 2025

Happy coding! 🚀

