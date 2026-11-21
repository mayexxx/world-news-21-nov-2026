# Render

- entry.png: 162609 bytes, 1024x1024, md5 bf434a27247b8338b33364d31755e084
- Render command: google-chrome --headless=new --disable-gpu --no-sandbox --screenshot=entry.png --window-size=1024,1024 --hide-scrollbars file:///data/home/makefun/world-news-21-nov-2026/news.html
- Determinism check: main.ts run from / (MAKEFUN_OUTPUT_DIR=/tmp/det1) and from /tmp (MAKEFUN_OUTPUT_DIR=/tmp/det2); both outputs md5 bf434a27247b8338b33364d31755e084, matching entry.png. Copy is cwd-independent (paths anchored by import.meta.url).
- Visual check: front page verified by viewing the image - masthead WORLD NEWS, amber date band SATURDAY 21 NOVEMBER 2026, headline Houthi missiles target Riyadh, 3-stat strip (3 MISSILES / 3RD NIGHT / 8 ALERTS IN 24 HOURS), 6 numbered stories, navy footer. No overlap, no garbled text, all text legible.
