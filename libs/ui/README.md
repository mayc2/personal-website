# @chrismay/ui

Shared component library for the site: shadcn/ui components (Radix primitives + Tailwind v4), owned in-repo.

- `src/theme.css`: design tokens (colors, radius, fonts) as CSS variables plus the Tailwind `@theme` mapping. Import it once from the app's stylesheet.
- `src/components/*`: one file per component. Edit freely; they are yours.
- Add more with the shadcn CLI from this folder: `npx shadcn@latest add dialog` (uses `components.json` here).
