# Veer Vikram — Personal Portfolio

A retro macOS-style desktop personal site. Built with Next.js (App Router),
TypeScript, Tailwind CSS, next-themes, and lucide-react. No backend, no
database — fully static-friendly and deployable on Vercel's free tier.

The site is a single interactive desktop: a menu bar with a live clock and
theme toggle, desktop shortcut icons, a frosted-glass dock, and draggable-feel
windows (Home, About, Contact) plus a working mini terminal. Wallpapers switch
with the theme and all copy lives in `data/site.ts`.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Edit your content

Everything personal lives in one file: **`data/site.ts`**.

- `name`, `tagline`, `intro`, `bio` — your name, one-line tagline, hero intro, and bio paragraphs (add or remove paragraphs freely).
- `email` — used by the "Get in touch" mailto button.
- `url` — your site's canonical URL, used for SEO meta tags and Open Graph.
- `socials` — the icon links in the contact section. Each entry has a `label`
  (used as the accessible name), an `href`, and an `icon` (one of `github`,
  `linkedin`, `x`, `instagram`).

The navigation labels and anchors live in `nav` in the same file.

## Change the accent color

The site uses one accent color, defined in **`app/globals.css`**:

```css
@theme {
  --color-accent: #0d9488; /* light mode accent */
}

.dark {
  --color-accent: #2dd4bf; /* dark mode accent */
}
```

Change both values to your new color. Keep light-mode colors dark enough
(contrast ratio ≥ 4.5:1 on white) and dark-mode colors light enough
(≥ 4.5:1 on near-black) to stay WCAG AA — a quick check at
https://webaim.org/resources/contrastchecker/ takes ten seconds.

## Deploy on Vercel (free tier, zero config)

1. Push this project to a GitHub repository.
2. Go to https://vercel.com and sign in with GitHub.
3. Click **Add New → Project**, then **Import** your repository.
4. Leave every setting at its default (Vercel detects Next.js automatically).
5. Click **Deploy**.

That's it — no environment variables, no build settings to change. Every push
to your main branch redeploys automatically.

## Project structure

```
app/
  layout.tsx      Root layout: fonts, metadata/SEO, navbar, footer
  page.tsx        Home page — composes the sections
  globals.css     Tailwind, accent color, focus styles, reveal animation
  icon.svg        Favicon
components/
  Navbar.tsx      Sticky navbar with smooth-scroll anchors + theme toggle
  Hero.tsx        Name, tagline, intro
  About.tsx       Bio paragraphs
  Contact.tsx     Mailto button + social icon links
  Footer.tsx      Copyright + theme toggle
  ThemeToggle.tsx Light/dark switch (system default, remembered, no flash)
  Reveal.tsx      Gentle fade-in on scroll (respects reduced motion)
  Providers.tsx   next-themes provider wrapper
  icons.tsx       Brand icons as inline SVGs (current lucide-react has no brand icons)
data/
  site.ts         All content — the only file you need to edit
```
