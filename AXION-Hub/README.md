# AXION Hub

Static website for Cloudflare Pages.

## Pages

- `index.html` — Home
- `donate.html` — Donate
- `social-media.html` — Social Media
- `romance-engine.html` — Romance Engine
- `axion.html` — AXION Neuralis
- `settings.html` — Settings
- `404.html` — Not Found

## Features

- Responsive, lightweight interface
- Dark / Light theme with persisted preference
- Indonesian / English language switching
- Mobile navigation that opens/closes, closes on Escape/outside click/navigation, and updates its accessibility state
- Current-page navigation state and `aria-current`
- QR modal with keyboard Escape support and focus restoration
- PayPal, DANA, WhatsApp, Telegram, and TikTok QR actions using the supplied assets
- Video playback when official MP4 assets are present, with a graceful fallback when they are missing or empty
- SVG interface icons
- External links use `target="_blank"` + `rel="noopener noreferrer"`
- Cloudflare Pages security headers in `_headers`

## Video assets

The two official MP4 files are intentionally **not bundled** in this package to keep the ZIP small. Place the original files at these exact paths before deployment if video playback is required:

- `assets/media/romance-engine.mp4`
- `assets/media/axion.mp4`

The site does not depend on zero-byte placeholder MP4 files; when the files are absent, the UI displays a proper fallback instead of a broken player.
