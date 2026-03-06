# 📸 Adding Your Profile Photo

## Quick Steps

1. **Place your photo** in the `public/images/` folder
2. **Rename it to:** `profile.jpg` (or `profile.jpeg`)
3. **Refresh your browser** to see the photo

## Photo Specifications (Recommended)

- **Format:** JPG or PNG
- **Size:** 400x400px to 800x800px (square format works best)
- **File Size:** Under 500KB for fast loading
- **Quality:** High resolution, professional headshot

## Current Location

Your photo will appear in the **Hero Section** (top of the page) with:
- ✅ Animated gradient border
- ✅ Hover effects
- ✅ Professional rounded corners
- ✅ Decorative blur effects
- ✅ Responsive sizing (scales on mobile)

## Fallback Display

If no photo is found, the site will display your initials "DM" as a placeholder.

## Alternative Names

If you want to use a different filename, edit line ~356 in `src/App.tsx`:
```jsx
src="/images/profile.jpg"
```

Change `profile.jpg` to your photo's filename.

## Copy Command Example

To copy your photo to the correct location:
```bash
cp ~/Desktop/Photo.jpeg public/images/profile.jpg
```

Or drag and drop your photo into: `public/images/` folder and rename it.

