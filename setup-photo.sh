#!/bin/bash

# Profile Photo Setup Script
# This script helps you add your profile photo to the portfolio

echo "🖼️  Profile Photo Setup"
echo "====================="
echo ""

# Check if photo exists in common locations
PHOTO_FOUND=""

# Check Desktop
if [ -f ~/Desktop/Photo.jpeg ]; then
    PHOTO_FOUND=~/Desktop/Photo.jpeg
elif [ -f ~/Desktop/photo.jpeg ]; then
    PHOTO_FOUND=~/Desktop/photo.jpeg
elif [ -f ~/Desktop/Photo.jpg ]; then
    PHOTO_FOUND=~/Desktop/Photo.jpg
elif [ -f ~/Desktop/photo.jpg ]; then
    PHOTO_FOUND=~/Desktop/photo.jpg
fi

# Check Downloads
if [ -z "$PHOTO_FOUND" ]; then
    if [ -f ~/Downloads/Photo.jpeg ]; then
        PHOTO_FOUND=~/Downloads/Photo.jpeg
    elif [ -f ~/Downloads/photo.jpeg ]; then
        PHOTO_FOUND=~/Downloads/photo.jpeg
    elif [ -f ~/Downloads/Photo.jpg ]; then
        PHOTO_FOUND=~/Downloads/Photo.jpg
    elif [ -f ~/Downloads/photo.jpg ]; then
        PHOTO_FOUND=~/Downloads/photo.jpg
    fi
fi

if [ -n "$PHOTO_FOUND" ]; then
    echo "✅ Found photo at: $PHOTO_FOUND"
    echo ""
    read -p "Copy this photo to your portfolio? (y/n) " -n 1 -r
    echo ""

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cp "$PHOTO_FOUND" public/images/profile.jpg
        echo "✅ Photo copied successfully!"
        echo "📍 Location: public/images/profile.jpg"
        echo ""
        echo "🚀 Next steps:"
        echo "   1. Run: npm run dev"
        echo "   2. Open: http://localhost:5173"
        echo "   3. See your photo in the hero section!"
    else
        echo "❌ Cancelled"
    fi
else
    echo "❓ Photo not found in common locations"
    echo ""
    echo "Please manually copy your photo:"
    echo "   cp /path/to/your/Photo.jpeg public/images/profile.jpg"
    echo ""
    echo "Or drag and drop your photo into:"
    echo "   $(pwd)/public/images/"
    echo ""
    echo "Then rename it to: profile.jpg"
fi

echo ""
echo "📖 For more help, see: PHOTO_SETUP.md"

