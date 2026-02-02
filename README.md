# Portfolio

A minimal, professional personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

1. **Site info and socials**  
   Edit `lib/data.ts`: `site` (name, tagline, email, LinkedIn, GitHub, resume).

2. **Projects**  
   Edit `lib/data.ts`: `projects` array. Or paste your data using the structure in `content/projects-template.json`. Categories: `Full-stack`, `AI`, `Frontend`, `Backend`.

3. **Experience**  
   Edit `lib/data.ts`: `experience` array.

4. **Skills**  
   Edit `lib/data.ts`: `skillsByGroup` (Frontend, Backend, DevOps, AI).

## Features

- Sticky navbar with active section highlight
- Project filter chips (All, Full-stack, AI, Frontend, Backend)
- Project detail modal (problem, what you built, tech stack, key wins, GitHub/demo links)
- Quick jump: **⌘K** (Mac) or **Ctrl+K** (Windows/Linux)
- Scroll indicator on hero
- Analytics placeholder in `lib/analytics.ts` (wire to your provider)
- SEO: meta tags and Open Graph (optional: add `public/og.png` 1200×630 for social previews)

## Deploy to Vercel

- [ ] Push your repo to GitHub (or GitLab/Bitbucket).
- [ ] Go to [vercel.com](https://vercel.com) and sign in.
- [ ] Click **Add New** → **Project** and import your repo.
- [ ] Leave **Framework Preset** as Next.js and **Root Directory** as `.`
- [ ] Click **Deploy**. Vercel will run `npm run build` and deploy.
- [ ] (Optional) Add a custom domain under **Settings** → **Domains**.
- [ ] (Optional) Add `og.png` to `public/` and redeploy for social previews.

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
