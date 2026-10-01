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

The navigation is the desktop itself: menu bar, desktop icons, and dock —
all defined in `components/desktop/apps.tsx`.

## Wallpapers

The light/dark desktop wallpapers are original AI-generated images stored as
base64 text in `public/wallpapers/*.webp.b64` (binary files can't be pushed
through the available tooling, so they're kept as text). They are decoded to
real `.webp` files automatically before dev/build by
`scripts/decode-wallpapers.mjs` (wired via `predev`/`prebuild` in
`package.json`). The generated `.webp` files are gitignored — never commit
them. To replace a wallpaper, overwrite the `.b64` file with new base64 data
and delete the corresponding `.webp` so it gets re-decoded.

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
  layout.tsx      Root layout: fonts, metadata/SEO, theme provider
  page.tsx        Home page — renders the desktop
  globals.css     Tailwind, theme tokens, focus styles, terminal caret
  icon.svg        Favicon
components/
  desktop/
    Desktop.tsx       Window manager + wallpaper layer
    MenuBar.tsx       Top menu bar: breadcrumb, clock, theme toggle
    DesktopIcons.tsx  Left-column shortcut icons
    Dock.tsx          Bottom frosted-glass dock
    Window.tsx        Window chrome (traffic lights, title bar, path bar)
    HeroWindow.tsx    "Hi, I'm Veer Vikram" greeting card
    AboutWindow.tsx   Bio window
    ContactWindow.tsx Contact window (email + socials)
    TerminalWindow.tsx Working mini terminal
    apps.tsx          App registry (ids, labels, icons)
  Providers.tsx   next-themes provider wrapper
  icons.tsx       Brand icons as inline SVGs (current lucide-react has no brand icons)
data/
  site.ts         All content — the only file you need to edit
public/
  wallpapers/     *.webp.b64 wallpaper sources (decoded at predev/prebuild)
scripts/
  decode-wallpapers.mjs  Decodes .b64 wallpapers to .webp
```
