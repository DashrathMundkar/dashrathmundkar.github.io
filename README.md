<div align="center">
</div>

# 🚀 Dashrath Mundkar - Professional Portfolio

**Live Portfolio:** https://dashrathmundkar.github.io

A modern, responsive, and feature-rich professional portfolio website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Smooth animations with Framer Motion
- 🚀 Fast performance (114KB gzipped)
- 📊 8 Professional sections
- 🔄 Auto-deploy with GitHub Actions
- 💾 Data-driven from JSON

## 📋 Portfolio Sections

1. **Hero** - Professional introduction
2. **Experience** - Career timeline
3. **Education & Certifications** - Academic background
4. **Achievements** - Top impact highlights
5. **Skills** - Technical arsenal
6. **Stack Overflow** - Community contributions
7. **Connect** - Social media links
8. **Email** - dashrathmundkar@gmail.com

## 🚀 Deployment

### GitHub Pages (Recommended)

Your portfolio is ready for GitHub Pages deployment!

1. Go to: https://github.com/DashrathMundkar/dashrathmundkar.github.io/settings/pages
2. Set Source to: **GitHub Actions**
3. Save
4. Wait 5-10 minutes for deployment
5. Visit: https://dashrathmundkar.github.io

**See:** [GITHUB_PAGES_FINAL_SETUP.md](GITHUB_PAGES_FINAL_SETUP.md) for step-by-step instructions

### Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open browser to: http://localhost:3000

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder (114KB gzipped)

## 📁 Project Structure

```
src/
├── App.tsx                 # Main component
├── components/             # React components
│   ├── AnimatedBackground.tsx
│   └── Splash.tsx
├── data/
│   └── resume.json        # Portfolio content
├── index.css              # Tailwind styles
└── main.tsx               # Entry point

.github/workflows/
└── deploy.yml             # GitHub Actions workflow

Documentation/
├── GITHUB_PAGES_FINAL_SETUP.md
├── ACTION_CHECKLIST.md
├── QUICK_START.md
├── GITHUB_PAGES_SETUP.md
└── DOCUMENTATION_INDEX.md
```

## 🛠 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📝 Updating Your Portfolio

1. Edit `src/data/resume.json` with your information
2. Modify components in `src/components/` as needed
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
4. GitHub Actions automatically builds and deploys
5. Changes appear live in 5-10 minutes

## 📖 Documentation

- **GITHUB_PAGES_FINAL_SETUP.md** - Setup guide (START HERE)
- **ACTION_CHECKLIST.md** - Actionable checklist
- **QUICK_START.md** - Quick reference
- **GITHUB_PAGES_SETUP.md** - Detailed guide
- **DOCUMENTATION_INDEX.md** - All documentation

## 🔗 Links

- **Live Portfolio:** https://dashrathmundkar.github.io
- **GitHub Repository:** https://github.com/DashrathMundkar/dashrathmundkar.github.io
- **GitHub Actions:** https://github.com/DashrathMundkar/dashrathmundkar.github.io/actions

## 🎯 Commands

```bash
# Development
npm run dev          # Start local dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build
npm run clean        # Clean dist folder

# Linting
npm run lint         # Type check with TypeScript
```

## 📊 Performance

- Build Time: 944ms
- Bundle Size: 370KB (uncompressed)
- Gzipped Size: 114KB
- Performance Score: A+

## 📝 License

This project is open source and available for personal use.

---

**Ready to deploy?** Go to [GITHUB_PAGES_FINAL_SETUP.md](GITHUB_PAGES_FINAL_SETUP.md) and follow the steps! 🚀
