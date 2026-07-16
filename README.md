# 💝 Premium Interactive Birthday Surprise

A luxury, cinematic, mobile-first birthday experience built with **pure HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no build step.

## ▶️ How to run

Open `index.html` in any modern browser — or serve the folder for the best experience (music autoplay behaves better over http):

```bash
cd app
python3 -m http.server 8000
# then visit http://localhost:8000
```

## ✏️ How to customize (no code knowledge needed)

**Everything personal lives in one place: the `CONFIG` object at the top of `script.js`.**

| What | Where |
|---|---|
| Recipient name | `CONFIG.name` |
| Welcome tagline | `CONFIG.tagline` |
| Hero photo + text | `CONFIG.heroPhoto`, `heroHeading`, `heroText` |
| Wish cards | `CONFIG.wishes` |
| Envelope letter | `CONFIG.letter` |
| Timeline memories | `CONFIG.timeline` |
| Gallery photos + captions | `CONFIG.gallery` |
| Gift secret message | `CONFIG.giftSecret` |
| Handwritten love letter | `CONFIG.loveLetter` |
| 100 reasons | `CONFIG.reasons` (add/remove freely — counter adapts) |
| Coupons | `CONFIG.coupons` |
| Ending lines | `CONFIG.finaleLines`, `finaleLove` |
| Easter-egg texts | `tapSecrets`, `loveNotes`, `secretMessage`, `miniGiftMessage` |

**Photos** — replace the files in `assets/photos/` (keep the same names, or update the paths in CONFIG). Portrait ~3:4 works best for `hero.jpg`; anything works for timeline/gallery.

**Music** — replace `assets/music/birthday-melody.mp3` with your song (or set `CONFIG.music` to the new path). The included track is a gentle music-box rendition of the Happy Birthday melody (public domain).

**Stickers & icons** — the site uses emoji by default; drop image files into `assets/stickers/` or `assets/icons/` and reference them in CONFIG / CSS if you prefer real artwork.

## 🎁 What's inside

- Cinematic loading screen → floating welcome screen → 10 story sections
- Envelope with wax seal + typewriter letter
- Memory timeline, polaroid gallery with fullscreen swipe lightbox
- Blow-out-the-candles cake, opening gift box, handwritten love letter
- Swipeable 100-reasons deck, redeemable love coupons
- Gestures: tap ❤, swipe ✨, long-press 🎆, double-tap 🌹, triple-tap 💌, shake 🎉
- Fireworks finale + hidden easter eggs (find the tiny heart… and tap the big one 7 times)
- Synthesized sound effects (Web Audio), looping music-box birthday melody
- Responsive, lazy-loading, `prefers-reduced-motion` friendly, semantic HTML

## 📁 Structure

```
app/
├── index.html
├── style.css
├── script.js          ← CONFIG at the top = your customization panel
├── README.md
└── assets/
    ├── photos/        ← replace with your photos
    ├── music/         ← replace with your song
    ├── stickers/      ← optional custom stickers
    └── icons/         ← optional custom icons
```
