# Image Optimization Guide for King Tallow

## 🚨 CRITICAL PERFORMANCE ISSUE

Your images are causing a **14.3 second LCP** (should be under 2.5s). Here's how to fix it:

---

## Current Image Problems

| Image | Current Size | Display Size | Waste | Format Issue |
|-------|--------------|--------------|-------|--------------|
| `tallow-2.png` | **6.2 MB** | ~662x441px | 5.5 MB | PNG instead of WebP |
| `tallow-vs-coconut-oil.png` | 1.9 MB | ~662x441px | 1.6 MB | PNG instead of WebP |
| `tallow.png` | 1.6 MB (1200x711) | ~662x662px | 1.4 MB | Oversized + PNG |
| `beeftallow.png` | 1.2 MB (1200x711) | ~662x441px | 1.0 MB | Oversized + PNG |
| `beef-tallow.png` | 825 KB | ~662x441px | 700 KB | PNG instead of WebP |
| `beef-tallow-jars.png` | 802 KB | ~662x441px | 680 KB | PNG instead of WebP |
| `beef-fat-chunks.png` | 671 KB | ~662x441px | 570 KB | PNG instead of WebP |
| `king.png` | 299 KB (1024x1024) | 81x81px | 296 KB | Oversized logo |
| `beef-tallow-2.png` | 188 KB | ~662x441px | 150 KB | PNG instead of WebP |

**Total waste: ~11.9 MB**

---

## ✅ SOLUTION: Convert & Resize Images

### Option 1: Online Tool (Easiest)
1. Go to https://squoosh.app/
2. Upload each PNG
3. Select **WebP** format
4. Set quality to **85**
5. Resize to appropriate dimensions (see below)
6. Download and replace in `public/` folder

### Option 2: Command Line (Batch Processing)

Install tools:
```bash
# Install cwebp (WebP converter)
npm install -g cwebp-bin

# Or use ImageMagick
brew install imagemagick  # Mac
choco install imagemagick  # Windows
```

Convert all images:
```bash
# Navigate to public folder
cd public

# Convert blog hero images (800x500 optimal)
for file in beef*.png tallow*.png; do
  cwebp -q 85 -resize 800 500 "$file" -o "${file%.png}.webp"
done

# Convert logo (150x150 is enough)
cwebp -q 90 -resize 150 150 king.png -o king.webp

# Fallback: Keep PNGs but compress them
pngquant --quality=65-80 --ext .png --force *.png
```

---

## 📐 Target Dimensions & Sizes

| Image | Target Dimensions | Target Size | Usage |
|-------|------------------|-------------|-------|
| Blog hero images | **800x500px** | <50 KB (WebP) | Post cards, blog headers |
| Homepage hero | **1200x800px** | <80 KB (WebP) | Main hero image |
| Logo | **150x150px** | <10 KB (WebP) | Header, footer, favicons |

---

## 🔧 After Converting: Update Code

### 1. Update Image Extensions
Replace `.png` with `.webp` in frontmatter:

```yaml
# Before
heroImage: '/beef-tallow.png'

# After
heroImage: '/beef-tallow.webp'
```

### 2. Or Use Picture Element (Best)
Update `BlogPost.astro` and `index.astro`:

```astro
<picture>
  <source srcset={heroImage.replace('.png', '.webp')} type="image/webp" />
  <img
    src={heroImage}
    alt={title}
    width="800"
    height="500"
    fetchpriority="high"
    decoding="async"
  />
</picture>
```

---

## 🎯 Expected Performance Improvements

**Before:**
- LCP: 14.3s ❌
- Total image size: ~12 MB
- Performance score: 56/100

**After:**
- LCP: 1.5-2.5s ✅
- Total image size: ~500 KB (96% reduction!)
- Performance score: 90-95/100
- Mobile users save 11.5 MB of data

---

## 🚀 Quick Win Checklist

- [ ] Convert all PNG images to WebP
- [ ] Resize images to appropriate dimensions
- [ ] Update image references in blog post frontmatter
- [ ] Test on mobile with Chrome DevTools throttling
- [ ] Run Lighthouse again to verify improvements
- [ ] Optional: Set up automatic image optimization in build process

---

## 🔄 Automated Solution (Future)

Add to `package.json`:
```json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js"
  },
  "devDependencies": {
    "sharp": "^0.33.0"
  }
}
```

Create `scripts/optimize-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const images = fs.readdirSync(publicDir).filter(f => f.endsWith('.png'));

images.forEach(async (file) => {
  const input = path.join(publicDir, file);
  const output = path.join(publicDir, file.replace('.png', '.webp'));

  await sharp(input)
    .resize(800, 500, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(output);

  console.log(`✓ Converted ${file} → ${file.replace('.png', '.webp')}`);
});
```

---

## 📊 Priority Order

1. **URGENT**: `tallow-2.png` (6.2 MB → ~40 KB) - 99% reduction
2. **HIGH**: `tallow-vs-coconut-oil.png` (1.9 MB → ~35 KB)
3. **HIGH**: `tallow.png` (1.6 MB → ~45 KB) - Homepage LCP image
4. **MEDIUM**: All other `beef-tallow-*.png` images
5. **LOW**: `king.png` logo (but easy win)

---

## Need Help?

The images are too large because they're:
1. **Wrong format** (PNG has no compression for photos)
2. **Oversized** (1200px width for 662px display)
3. **Not optimized** (no compression applied)

**Fix all three issues = 96% smaller images = 10x faster site**
