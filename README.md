# Silent Orchestration - Architecture & Positioning

Internal documentation for Silence Laboratories engineering team.

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deployment to Vercel

### First-Time Setup

1. Push this repo to GitHub (private recommended)
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import from GitHub → Select this repo
4. Deploy (default settings work)

### Updating the Document

When updates are made in Claude chat:

1. Get the updated `App.jsx` from Claude
2. Replace `src/App.jsx` with the new file
3. Commit and push:
   ```bash
   git add src/App.jsx
   git commit -m "Update documentation"
   git push
   ```
4. Vercel auto-deploys in ~30 seconds

## Password Protection (Optional)

For Vercel Pro users: Settings → General → Password Protection

For free tier: A client-side password gate can be added to `src/main.jsx`

## Structure

```
silent-orchestration/
├── src/
│   ├── App.jsx          ← THE DOCUMENT (update this file)
│   ├── main.jsx         ← React entry point
│   └── index.css        ← Tailwind styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

---

*Silence Laboratories - Confidential*
