# GitHub Pages Deployment Guide

## Overview
Your portfolio is now configured to be deployed to GitHub Pages at `https://dashrathmundkar.github.io`

## Setup Instructions

### Step 1: Create GitHub Repository
1. Go to GitHub (https://github.com)
2. Create a **new public repository** named `dashrathmundkar.github.io`
   - This is the special naming convention for user/organization GitHub Pages
3. Do NOT initialize with README, .gitignore, or license

### Step 2: Initialize Git and Push to GitHub

Run these commands from your project directory:

```bash
cd /Users/dashrath.mundkar/Desktop/dashrath-mundkar---portfolio

# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add the remote repository
git remote add origin https://github.com/DashrathMundkar/dashrathmundkar.github.io.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages (if needed)

1. Go to your repository: https://github.com/DashrathMundkar/dashrathmundkar.github.io
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - This will use the deploy.yml workflow we created

### Step 4: Automatic Deployment

The GitHub Actions workflow will:
1. **Automatically trigger** when you push to the `main` branch
2. **Install dependencies** (npm ci)
3. **Build the project** (npm run build)
4. **Deploy to GitHub Pages** from the `dist/` folder

### Step 5: Access Your Portfolio

Your portfolio will be accessible at:
- **URL:** https://dashrathmundkar.github.io
- **Build Status:** Check at https://github.com/DashrathMundkar/dashrathmundkar.github.io/actions

## Updating Your Portfolio

To make updates and deploy:

```bash
# Make your changes to the code

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update portfolio with new section"

# Push to GitHub
git push
```

The GitHub Actions workflow will automatically build and deploy your changes!

## What's Configured

✅ **Vite Configuration**
- Base path set to `/` for GitHub Pages root deployment
- Build output directory: `dist/`

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Triggers on push to `main` branch
- Node.js 18 environment
- Automatic npm dependencies caching
- Builds the project
- Deploys to GitHub Pages

✅ **.gitignore**
- Already configured to exclude `node_modules/`, `dist/`, `.env` files

## Troubleshooting

### 1. Deployment takes a while (5-10 minutes)
This is normal. GitHub needs time to build and deploy.

### 2. Check deployment status
- Visit: https://github.com/DashrathMundkar/dashrathmundkar.github.io/actions
- Look for the "Deploy to GitHub Pages" workflow

### 3. Site not appearing at URL
- Wait 5-10 minutes after first deployment
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check GitHub Pages settings are set to use GitHub Actions

### 4. Custom domain (optional)
If you want to use a custom domain:
1. Go to Settings → Pages → Custom domain
2. Enter your domain
3. Follow GitHub's instructions for DNS setup

## File Structure

```
dashrathmundkar.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          (GitHub Actions workflow)
├── src/
│   ├── App.tsx
│   ├── components/
│   ├── data/
│   └── ...
├── index.html
├── vite.config.ts              (Updated with base path)
├── package.json
└── .gitignore
```

## Quick Reference Commands

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DashrathMundkar/dashrathmundkar.github.io.git
git branch -M main
git push -u origin main

# For future updates
git add .
git commit -m "Your commit message"
git push
```

## Support

If you encounter issues:
1. Check GitHub Actions logs: https://github.com/DashrathMundkar/dashrathmundkar.github.io/actions
2. Verify repository name is exactly: `dashrathmundkar.github.io`
3. Ensure `main` branch is the default branch
4. Check Pages settings are configured for GitHub Actions deployment

Your portfolio is now ready for GitHub Pages! 🚀

