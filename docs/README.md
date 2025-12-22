# 📚 Documentation Index

Welcome to the NEXATHON 2026 documentation! **Version 2.0** with centralized data management.

## 🚀 Start Here

### New to the Project?

1. **[Quick Start Guide](QUICK_START.md)** ⭐  
   Get up and running in 5 minutes

2. **[Handover Documentation](HANDOVER.md)**  
   Complete project overview and what's new in v2.0

### Making Changes?

1. **[Data Management Guide](../lib/DATA_README.md)** 📊  
   How to update website content (NEW in v2.0!)

2. **[Contributing Guidelines](CONTRIBUTING.md)**  
   How to contribute code

---

## 📖 All Documentation

### 📕 [Quick Start Guide](QUICK_START.md)
**For:** Everyone  
**Time:** 5-10 minutes

**What you'll learn:**
- What changed in v2.0
- How to update content
- How to use the theme toggle
- Common tasks

---

### 📘 [Handover Documentation](HANDOVER.md)
**For:** Developers, Maintainers  
**Time:** 15-20 minutes

**What's included:**
- v2.0 changes and migration guide
- **Data management system** (most important!)
- Project structure
- Tech stack
- Common tasks
- Troubleshooting
- Deployment guide

---

### 📗 [Contributing Guidelines](CONTRIBUTING.md)
**For:** Contributors  
**Time:** 10-15 minutes

**What's covered:**
- Setup instructions
- **Content update workflow (v2.0)**
- Coding standards
- Component guidelines
- Commit conventions
- PR process

---

### 📙 [Architecture Guide](ARCHITECTURE.md)
**For:** Advanced developers  
**Time:** 20-30 minutes

**Deep dive into:**
- System architecture
- Component patterns
- Animation system
- Performance optimizations
- SEO and accessibility

---

### 📊 [Data Management Guide](../lib/DATA_README.md)
**For:** Content managers, Developers  
**Time:** 10-15 minutes  
**Location:** `lib/DATA_README.md`

**Essential reading for v2.0:**
- How to update all website content
- Data structure reference
- Examples and best practices
- Common tasks

---

### 📄 [Quick Reference](QUICK_REFERENCE.md)
**For:** Daily development  
**Time:** 5 minutes

**Quick lookup for:**
- Commands
- File locations
- Design tokens
- Common patterns

---

## 🎯 Find What You Need

### I want to...

| Task | Go to |
|------|-------|
| **Update website content** | [`lib/DATA_README.md`](../lib/DATA_README.md) ⭐ |
| Get started quickly | [Quick Start](QUICK_START.md) |
| Understand the project | [Handover](HANDOVER.md) |
| Contribute code | [Contributing](CONTRIBUTING.md) |
| Change theme colors | [Architecture](ARCHITECTURE.md) → Styling |
| Add a new section | [Contributing](CONTRIBUTING.md) → Adding Content |
| Deploy the site | [Handover](HANDOVER.md) → Deployment |
| Fix a bug | [Contributing](CONTRIBUTING.md) |
| Understand architecture | [Architecture](ARCHITECTURE.md) |

---

## 🆕 What's New in v2.0

### Major Changes (December 2025)

1. **Centralized Data Management** 📊
   - All content in `lib/data.tsx`
   - Update once, changes everywhere
   - See [Data Guide](../lib/DATA_README.md)

2. **New Theme System** 🎨
   - Black-White-Blue color scheme
   - Dark/Light mode toggle
   - Smoother animations

3. **Improved Documentation** 📚
   - Simplified structure
   - Focus on practical tasks
   - Better quick start

### Removed/Archived

- ❌ `RESTRUCTURING_SUMMARY.md` (merged into Handover)
- ❌ Old version-specific docs (outdated)

---

## 📝 Documentation Structure

```
docs/
├── README.md              # This file - Documentation index
├── QUICK_START.md         # 🆕 5-minute setup guide
├── HANDOVER.md            # ✨ Updated: Complete project guide
├── CONTRIBUTING.md        # ✨ Updated: Contribution guidelines
├── ARCHITECTURE.md        # Technical deep dive
├── QUICK_REFERENCE.md     # Quick lookup reference
└── PROJECT_STRUCTURE.txt  # File tree visualization

lib/
└── DATA_README.md         # 🆕 Data management guide
```

**Legend:**
- 🆕 = New in v2.0
- ✨ = Updated for v2.0

---

## 🎓 Learning Path

### For Content Managers

1. [Quick Start](QUICK_START.md) → Content Updates section
2. [Data Guide](../lib/DATA_README.md) → Complete reference
3. Practice: Update event date in `lib/data.tsx`

### For New Developers

1. [Quick Start](QUICK_START.md) → Full guide
2. [Handover](HANDOVER.md) → What's New + Data Management
3. [Contributing](CONTRIBUTING.md) → Setup and standards
4. [Architecture](ARCHITECTURE.md) → When you need deep understanding

### For Experienced Contributors

1. [Handover](HANDOVER.md) → v2.0 Changes
2. [Data Guide](../lib/DATA_README.md) → New data system
3. [Contributing](CONTRIBUTING.md) → Updated workflows

---

## 💡 Pro Tips

### Finding Information Fast

1. **Use your editor's search** (Ctrl+F / Cmd+F)
2. **Check the "I want to..." table** above
3. **Start with Quick Start** for common tasks

### Keeping Documentation Updated

When you make significant changes:
1. Update relevant doc file
2. Note it in your PR description
3. Update this index if adding new docs

### Best Practices

- ✅ Read Quick Start first
- ✅ Use Data Guide for content updates
- ✅ Check existing docs before asking
- ✅ Contribute back (fix typos, add examples)

---

## 📞 Getting Help

### Documentation Issues

- **Unclear instructions?** Open an issue
- **Found a typo?** Submit a PR
- **Need more examples?** Request in discussions

### Quick Answers

Most common questions:

**Q: How do I update the event date?**  
A: Edit `eventInfo.date` in `lib/data.tsx`

**Q: How do I add a sponsor?**  
A: See [Data Guide](../lib/DATA_README.md) → Adding Sponsors

**Q: How do I change colors?**  
A: Edit `app/globals.css` (see [Handover](HANDOVER.md))

**Q: Where are the images?**  
A: In `/public/logos/` and `/public/gallery/`

---

## 🎯 Documentation Goals

Our documentation aims to be:

- **Accessible** - Easy for beginners
- **Comprehensive** - Covers all features
- **Practical** - Focus on real tasks
- **Up-to-date** - Reflects current code
- **Searchable** - Easy to find info

---

## 📈 Version History

| Version | Date | Major Changes |
|---------|------|---------------|
| 2.0.0 | Dec 2025 | Centralized data, new theme, dark mode |
| 1.0.0 | Earlier | Initial release |

---

## 🤝 Contributing to Docs

Documentation improvements are always welcome!

**To improve docs:**

1. Make your changes
2. Test that links work
3. Submit PR with clear description
4. Tag with `documentation` label

**Good documentation PRs:**
- Fix typos and grammar
- Add missing examples
- Clarify confusing sections
- Add helpful diagrams
- Update outdated information

---

## ✨ Key Takeaway

> **For v2.0, the #1 thing to know:**  
> All website content is in `lib/data.tsx`  
> Everything else is for advanced customization!

---

**Happy coding!** 🚀

**Version:** 2.0.0  
**Last Updated:** December 22, 2025  
**Maintained By:** NEXATHON Team
