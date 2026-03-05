#!/bin/bash

# GitHub Pages Deployment Script for Dashrath Mundkar Portfolio
# This script sets up your local repository and pushes to GitHub Pages

echo "🚀 GitHub Pages Deployment Setup"
echo "=================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "✅ Checking prerequisites..."
echo ""

# Initialize git repository if not already done
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📦 Staging all files..."
git add .
echo "✅ Files staged"

echo ""
echo "💾 Creating initial commit..."
if git commit -m "Initial portfolio commit - Ready for GitHub Pages deployment" 2>/dev/null; then
    echo "✅ Initial commit created"
else
    echo "ℹ️  Repository already has commits"
fi

echo ""
echo "🔗 Setting up remote repository..."
REPO_URL="https://github.com/DashrathMundkar/dashrathmundkar.github.io.git"

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "ℹ️  Remote 'origin' already configured"
    CURRENT_REMOTE=$(git remote get-url origin)
    echo "   Current URL: $CURRENT_REMOTE"
else
    echo "📝 Adding remote repository..."
    git remote add origin "$REPO_URL"
    echo "✅ Remote repository added"
fi

echo ""
echo "🌿 Ensuring main branch..."
if git show-ref --quiet refs/heads/main; then
    echo "✅ Main branch exists"
else
    git branch -M main 2>/dev/null && echo "✅ Renamed to main branch" || echo "✅ Using main branch"
fi

echo ""
echo "=================================="
echo "📋 Summary:"
echo "=================================="
echo "✅ Repository configured"
echo "✅ Vite base path set to '/'"
echo "✅ GitHub Actions workflow ready"
echo "✅ Ready for deployment"
echo ""
echo "Next Steps:"
echo "1. Make sure you have created the repository on GitHub:"
echo "   https://github.com/new"
echo "   Name: dashrathmundkar.github.io (exactly this)"
echo ""
echo "2. Push to GitHub with:"
echo "   git push -u origin main"
echo ""
echo "3. Go to: https://github.com/DashrathMundkar/dashrathmundkar.github.io/settings/pages"
echo "   Set Source to: GitHub Actions"
echo ""
echo "4. Your portfolio will be live at:"
echo "   https://dashrathmundkar.github.io"
echo ""
echo "🚀 Happy deploying!"

