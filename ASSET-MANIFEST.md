# AXION Hub — Asset Manifest

This is the final deployable package. The supplied image/QR assets are preserved; the AXION logo is optimized for web delivery without changing its role in the site.

## Logo

- `assets/images/axion-logo.webp` — optimized 512×512 web logo used by the site.

## Intentionally omitted media

The following official MP4 files are not bundled to avoid unnecessarily increasing ZIP size. Add the original files at the listed paths when available:

- `assets/media/romance-engine.mp4`
- `assets/media/axion.mp4`

The HTML/JS includes a graceful missing-media fallback, so the pages remain functional without these files.

## Payment / social QR assets

- `paypal1.png` — PayPal QR; decodes to `https://paypal.me/AXIONNeuralis`
- `paypal2.png` — supplied PayPal QR asset and exposed through the QR modal
- `dana.png` — supplied DANA QR asset and exposed through the QR modal
- `azriel.jpg` — TikTok `@azriel.py` QR
- `wa-comunity.jpg` — WhatsApp Community QR
- `wa-group.jpg` — WhatsApp Group QR
- `tel-channel.png` — Telegram Channel QR
- `tel-group.png` — Telegram Group QR
