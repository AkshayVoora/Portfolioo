# Akshay Voora Portfolio

A custom one-page portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Where to edit content

Most portfolio content lives in [lib/data.ts](/Users/akshay/Desktop/Portfolio/lib/data.ts).

- `site`: name, intro, contact links, availability
- `metrics`: hero stats
- `education`: school details
- `skillGroups`: languages, frameworks, tooling
- `experience`: internships and bullet points
- `projects`: featured technical work
- `principles`: closing philosophy cards

## Privacy notes

- The portfolio currently does not publish your phone number.
- The portfolio currently does not publish your resume PDF.
- Contact is routed through email, GitHub, and LinkedIn only.

## Main files

- [app/page.tsx](/Users/akshay/Desktop/Portfolio/app/page.tsx): page structure and section layout
- [app/globals.css](/Users/akshay/Desktop/Portfolio/app/globals.css): visual system and reusable styles
- [app/layout.tsx](/Users/akshay/Desktop/Portfolio/app/layout.tsx): metadata and document shell

## Deploy

This is a standard Next.js app, so Vercel deployment is straightforward:

```bash
npm run build
```

Then connect the repo to Vercel and deploy.
