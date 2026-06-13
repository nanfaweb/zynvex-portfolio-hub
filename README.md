# Portfolio Hub

A responsive, multi-page developer portfolio built for Week 1 of the Zynvex Full Stack internship.

**Live:** https://zynvex-portfolio-hub.vercel.app

## Features

- **Atomic, typed components.** `ProfileCard`, `ProjectCard`, `SiteHeader` and friends take typed props, and data lives in `src/data`.
- **Mobile-first layout.** The page goes from a single column on phones to a desktop grid, and the header has a mobile menu.
- **Animated hero** with a staggered reveal and a skills marquee. Both respect `prefers-reduced-motion`.
- **Project showcase** with tag filtering on `/projects`. Each project has its own statically generated page at `/projects/[slug]`.
- **Contact form** using a Server Action, `useActionState`, field-level validation and a honeypot field against spam.
- **Server and Client Components split on purpose.** Only interactive pieces (menu, filter, live clock, form) ship JavaScript.
- **Polish:** light and dark themes, focus styles, a generated Open Graph image, a sitemap, robots.txt and a custom 404 page.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`.

## Structure

```
src/app         routes: /, /about, /projects, /projects/[slug], /contact
src/components  UI building blocks
src/data        profile, about and project content
src/lib         types and helpers
```
