# Data Management Guide

This file ([lib/data.tsx](lib/data.tsx)) is the central hub for all static content on the NEXATHON website.

## 📖 Purpose

Instead of searching through multiple component files to update text, images, or other content, **everything is centralized here**. This makes updates fast, consistent, and error-free.

## 🎯 How to Use

### Finding What to Update

The file is organized into clear sections with comments:

```typescript
// =============================================================================
// SECTION NAME
// =============================================================================
```

Use your editor's search (Ctrl+F / Cmd+F) to find sections quickly.

### Updating Content

1. **Find** the section you want to modify (e.g., "EVENT INFORMATION")
2. **Edit** the values directly
3. **Save** the file
4. **Refresh** your browser

Changes take effect immediately in development mode.

## 📚 Available Data Sections

| Section | Variable Name | What It Contains |
|---------|--------------|------------------|
| Event Info | `eventInfo` | Basic hackathon details (name, date, venue, etc.) |
| Hero | `heroData` | Landing page content, taglines, CTAs |
| About | `aboutData` | Features, statistics, descriptions |
| Schedule | `scheduleData` | Event timeline for all 3 days |
| Timeline | `timelineData` | Registration & milestone dates |
| Sponsors | `sponsorsData` | Partner organizations by tier |
| Rewards | `rewardsData` | Prizes and categories |
| Themes | `themesData` | Hackathon tracks |
| FAQ | `faqData` | Questions and answers |
| Gallery | `galleryData` | Event images |
| Contact | `contactData` | Organization details & team |
| Navigation | `navigationData` | Menu links |
| Footer | `footerData` | Footer content |

## 🔥 Common Updates

### Change Event Date
```typescript
eventInfo.date = "March 15-17, 2026"
```

### Update Prize Money
```typescript
rewardsData.mainPrizes[0].prize = "₹2,50,000"
```

### Add a Sponsor
```typescript
sponsorsData.tiers[0].sponsors.push({
  name: "Your Company",
  logo: "/logos/yourcompany.svg",
  website: "https://yourcompany.com"
})
```

### Add FAQ
```typescript
faqData.questions.push({
  question: "Your question?",
  answer: "Your answer..."
})
```

### Update Contact Email
```typescript
contactData.email = "newemail@nexathon.com"
```

## 💡 Pro Tips

### Adding Images/Logos

1. Place files in `/public/logos/` or `/public/gallery/`
2. Reference them with absolute paths starting with `/`

```typescript
logo: "/logos/company-name.svg"  // ✅ Correct
logo: "logos/company-name.svg"   // ❌ Wrong
logo: "./logos/company-name.svg" // ❌ Wrong
```

### TypeScript Support

The file includes type exports for autocomplete:

```typescript
export type EventInfo = typeof eventInfo
```

Import these in components for type safety.

### Icons

Icons use `lucide-react`. Available icons are imported at the top:

```typescript
import { Calendar, MapPin, Users, Terminal, ... } from "lucide-react"
```

To use an icon in data:
```typescript
{ icon: Calendar, label: "Date", value: "..." }
```

## 🎨 Formatting Guidelines

### Text Content
- Keep descriptions concise but informative
- Use proper grammar and punctuation
- Avoid excessive jargon

### Dates
- Format: "Month Day-Day, Year" (e.g., "March 15-17, 2026")
- Be consistent across all sections

### Numbers
- Use Indian number system for prizes: ₹5,00,000
- Use + suffix for counts: 500+

### URLs
- Always use HTTPS
- Validate links before adding

## 🚨 Important Notes

### Don't Remove Required Fields

Some fields are required by components. Removing them will cause errors:
- `title` in section data
- `icon` in feature lists
- `href` in navigation links

### Array Order Matters

Items appear on the page in the order they're listed in arrays. Reorder items in the array to change display order.

### Consistency

Keep data structure consistent. If one sponsor has a `website` field, all should have it (use empty string if not applicable).

## 🔍 Validation

Before committing changes:

1. ✅ Save the file without TypeScript errors
2. ✅ Check the website in browser
3. ✅ Test in both light and dark modes
4. ✅ Verify all links work
5. ✅ Check for typos

## 📞 Need Help?

- **Documentation:** See [/docs/THEME_UPDATE.md](docs/THEME_UPDATE.md)
- **Examples:** Check how existing data is structured
- **Issues:** Report bugs or request features

## 🎓 Example: Adding a New Sponsor

```typescript
// 1. Find the sponsors section
export const sponsorsData = {
  // ...
  tiers: [
    {
      tier: "Gold Partners",
      sponsors: [
        // Existing sponsors...
        
        // 2. Add your new sponsor
        {
          name: "TechStartup Inc",
          logo: "/logos/techstartup.svg",  // Add logo to /public/logos/
          website: "https://techstartup.com"
        }
      ],
      size: "medium"  // large, medium, or small
    }
  ]
}
```

Save, refresh, done! 🎉

---

**Remember:** This file is the single source of truth for website content. Keep it organized and updated!
