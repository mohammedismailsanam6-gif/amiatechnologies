# Amia Technologies — Website (scaffold)

This repository contains a starter Next.js + Tailwind site scaffold for Amia Technologies.

What I added in the site-scaffold branch:
- Next.js app scaffold (pages, components)
- TailwindCSS config
- A small script to extract the ZIP you uploaded (New folder (3).zip) into public/media
- Placeholder product data (src/data/products.json) and page templates (/pages)

Quick start (local):
1. Install deps: npm install
2. Import images from the ZIP in the repo: npm run import-images
   - This extracts the uploaded ZIP (New folder (3).zip) into `public/media`.
3. Run dev server: npm run dev
4. Open http://localhost:3000

Notes:
- Contact form: update `FORM_ENDPOINT` in `pages/contact.js` with your Formspree form id or other endpoint.
- Product JSON: src/data/products.json contains sample entries. Replace or expand with the full catalog JSON when ready.
- Images: the unzip script will copy images into `public/media`. Images should be named to match product `image` fields (e.g. `dell-precision-5680.jpg`).

Next steps I will take (after your review):
- Populate the full product JSON from your conversation content if you want me to (I can do it for free).
- Map each uploaded image file to its product entry (I attempted automatic mapping in the scaffold).
- Create a PR on branch `site-scaffold` → `main` (already prepared).

If you want a Vercel preview created instead of PR-only, tell me and I'll connect and deploy the preview.

---

If you need help running the project locally or want me to finish the product data mapping, reply and I will continue.
