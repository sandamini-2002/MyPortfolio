# Upeka-style Portfolio

This is a static HTML/CSS portfolio scaffold modeled after the requested design.

To preview locally:

```bash
# from project root
python -m http.server 3000
# then open http://localhost:3000
```

To deploy on Vercel:

1. Install the Vercel CLI: `npm i -g vercel` or push this repo to GitHub and connect in the Vercel dashboard.
2. Run `vercel` and follow prompts.

Customize `index.html`, `styles.css`, and `script.js` with your text, projects, and images.

To edit content quickly:

- Projects: edit `data/projects.json` (title, description, url, image).
- Contact form: replace the `action` in `index.html` with your Formspree endpoint or use your email provider.

Deploy tip: Vercel will serve the static files as-is when pushed. The included `vercel.json` config is minimal for static hosting.

Quick deploy (CLI)

1. Install the Vercel CLI if you haven't:

```bash
npm i -g vercel
```

2. From the project root run:

```bash
bash deploy.sh
# or
npm run deploy
```

Or push this repository to GitHub and connect it in the Vercel dashboard (recommended for continuous deploy).
