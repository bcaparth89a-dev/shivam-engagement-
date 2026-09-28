# Shivam & Upasana — Engagement Invitation

A static, single-scroll Marathi engagement invitation site built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 1. Install dependencies

```bash
npm install
```

## 2. Add your photographs

1. Place photos in `public/couple-images/` — `.webp` or `.avif`
   recommended, `.jpg`/`.png` also work.
2. Open `data/invitation.ts` and list the filenames under
   `coupleImages`. The first image is used (with priority loading) in
   the hero section; the rest populate the couple section, gallery,
   and closing section automatically. Add as many as you like (10–30
   is fine — images lazy-load except the hero).

No other file needs to change to add or swap photos.

## 3. Edit event details

All wording — names, date, venue, "invited by" — lives in
`data/invitation.ts`.

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 5. Deploy to Vercel

Push this project to a Git repository and import it at
vercel.com/new, or deploy directly:

```bash
npm i -g vercel
vercel
```

No environment variables, database, or backend are required — the
site is fully static.

## Project structure

```
app/                     Root layout, page, global styles
components/invitation/   Section components (hero, gallery, etc.)
components/motion/       Reusable animation wrappers
components/decorative/   Marathi border, floral corners, Ganesh motif
components/ui/           Shared UI elements
data/invitation.ts       All content and the couple-images list
public/couple-images/    Your photographs go here
```

## Notes

- Respects `prefers-reduced-motion` (disables crossfade/float
  animation and shortens the opening screen).
- Colour palette and type choices follow the brief exactly — see
  `tailwind.config.ts` and `app/globals.css` for the tokens.
- Built with static rendering only — no API routes, database, or
  auth.
