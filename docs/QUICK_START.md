# NEXATHON 2026 - Quick Start Guide

Welcome to the updated NEXATHON website! This guide helps you get started with the new theme and data management system.

## 🎨 What Changed?

### 1. **New Color Theme**
- **Old:** Green tech theme
- **New:** Black-White-Blue modern theme
- **Bonus:** Dark/Light mode toggle!

### 2. **Centralized Data**
- All content now in one place: `lib/data.tsx`
- No more hunting through files to update text
- Change content once, it updates everywhere

### 3. **Smoother Animations**
- All transitions extended to 500-1000ms
- New creative effects
- Better hover states

## 🚀 For Content Managers

### How to Update Website Content

1. **Open** [lib/data.tsx](lib/data.tsx)
2. **Find** your section (use Ctrl+F/Cmd+F)
3. **Edit** the values
4. **Save** and refresh browser

**Example - Change event date:**
```typescript
// In lib/data.tsx, find:
export const eventInfo = {
  date: "March 15-17, 2026",  // ← Change this
  // ...
}
```

That's it! The date updates everywhere on the site.

### Common Tasks

| Task | Location in `lib/data.tsx` |
|------|----------------------------|
| Update event date | `eventInfo.date` |
| Change prize amounts | `rewardsData.mainPrizes` |
| Add sponsors | `sponsorsData.tiers[].sponsors` |
| Edit FAQs | `faqData.questions` |
| Update contact info | `contactData.email/phone` |
| Modify schedule | `scheduleData.days` |

### Adding Images

1. **Place image** in `/public/gallery/` or `/public/logos/`
2. **Update path** in `lib/data.tsx`:
```typescript
logo: "/logos/yourlogo.svg"
```

## 💻 For Developers

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Key Files

- **Data:** `lib/data.tsx` - All content
- **Theme:** `app/globals.css` - Colors and animations
- **Layout:** `app/layout.tsx` - ThemeProvider setup
- **Components:** `components/sections/` - Page sections

### Updated Components

✅ Already using centralized data:
- Hero Section
- About Section
- Navbar

⏳ Need migration:
- Schedule, Timeline, Sponsors, Rewards, Themes, FAQ, Gallery, Contact, Footer

### Migration Pattern

```typescript
// 1. Import data
import { sectionData } from "@/lib/data"

// 2. Replace hardcoded content
// Before:
const items = [{ title: "..." }]

// After:
const items = sectionData.items
```

## 🎨 Theme Customization

### Changing Colors

Edit [app/globals.css](app/globals.css):

```css
:root {
  --primary: oklch(0.55 0.22 250);  /* Change hue (250 = blue) */
}

.dark {
  --primary: oklch(0.65 0.25 250);  /* Dark mode version */
}
```

### Using the Theme Toggle

The theme toggle is in the navbar (top right). Click Sun/Moon icon to switch between dark and light modes.

**How it works:**
- Uses `next-themes` library
- Persists user preference
- Smooth transitions
- System preference detection

## 📱 Testing

### Before Pushing Changes

- [ ] Test in both light and dark modes
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Check for console errors
- [ ] Test theme toggle
- [ ] Review animations

### Browser Testing

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [THEME_UPDATE.md](docs/THEME_UPDATE.md) | Complete technical documentation |
| [DATA_README.md](lib/DATA_README.md) | Data management guide |
| This file | Quick start guide |

## 🎯 Next Steps

### Immediate Actions

1. **Review** the new theme in both modes
2. **Update** content in `lib/data.tsx`
3. **Replace** placeholder logos with actual images
4. **Test** thoroughly

### Future Enhancements

1. Complete data migration for remaining sections
2. Add real sponsor logos
3. Implement registration form backend
4. Add gallery images
5. Optimize performance

## 💡 Tips & Tricks

### Finding Things Fast

- Use VS Code's "Go to Symbol" (Ctrl+Shift+O / Cmd+Shift+O)
- Search in `lib/data.tsx` for section names
- Check component imports to see what data they use

### Keeping Things Organized

- Follow existing data structure patterns
- Keep related data together
- Use clear, descriptive names
- Add comments for complex sections

### Avoiding Common Mistakes

❌ **Don't** hardcode content in components
✅ **Do** add it to `lib/data.tsx`

❌ **Don't** remove required fields
✅ **Do** keep data structure consistent

❌ **Don't** forget to test both themes
✅ **Do** check dark AND light modes

## 🆘 Troubleshooting

### Theme Not Switching
**Problem:** Toggle doesn't work
**Solution:** Check that ThemeProvider wraps the app in `app/layout.tsx`

### Content Not Updating
**Problem:** Changes don't show
**Solution:** Restart dev server (`npm run dev`)

### TypeScript Errors
**Problem:** Red squiggly lines in editor
**Solution:** Check data structure matches expected types

### Missing Icons
**Problem:** Icons don't display
**Solution:** Verify icon import in `lib/data.tsx`:
```typescript
import { IconName } from "lucide-react"
```

## 📞 Getting Help

1. **Check docs** in `/docs` folder
2. **Review examples** in updated components
3. **Search** this repository for similar patterns
4. **Ask** in project issues

## ✨ Summary

**For Quick Updates:**
1. Edit `lib/data.tsx`
2. Save
3. Refresh
4. Done!

**For Theme Changes:**
1. Edit `app/globals.css`
2. Test both modes
3. Save
4. Done!

**Key Principle:**
> Content in `lib/data.tsx`, styling in `app/globals.css`, logic in components

---

**Happy coding!** 🚀

---

**Version:** 2.0.0  
**Last Updated:** December 22, 2025  
**Questions?** Check [THEME_UPDATE.md](docs/THEME_UPDATE.md) for detailed docs
