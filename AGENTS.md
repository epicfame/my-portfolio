# AGENTS.md

Instructions for AI coding agents (Claude Code, Codex, Cursor, Copilot, etc.) working in this repository.
Read this file fully before making changes. When these rules conflict with a generic habit, follow these rules.

## 1. Project Overview

Personal portfolio website for **Giovanni Jose Ricardo** (Software Engineer · Application Developer).

- **Goal:** a fast, accessible, responsive, single-page portfolio that presents profile, skills, experience, projects, education, certifications, and a contact section.
- **Source of truth for content:** `README.md`. Never invent facts (employers, dates, metrics, projects, certifications). If something is missing, leave a clearly marked placeholder and tell the owner.
- **Site URL (temporary):** `https://giovannijose.vercel.app`. It is defined once in `src/lib/constants.ts` (`SITE_URL`) and in `index.html`. If the owner changes the domain, update those places only.

### Page Sections

Single page. Sections render in the default order below; each has an anchor `id` used by the nav (add `scroll-mt-*` so a sticky header never covers a heading). Define the order in one place (`App.tsx`) so it can be rearranged easily.

| # | Section | `id` | Content (from `README.md`) | Data file |
| :-: | :-- | :-- | :-- | :-- |
| 0 | Header / Nav | n/a | Name or logo, section links, theme toggle (light/dark), mobile menu | n/a |
| 1 | Hero | `home` | Name, role, one-line value proposition (full-stack: database and REST APIs to responsive web interfaces), CTAs (View Projects, Download CV, Contact), social links, profile picture | `src/data/profile.ts` |
| 2 | About | `about` | Short summary plus key numbers: 3+ years, 20+ REST APIs, 50% faster processing, 10+ analyzed projects | `src/data/profile.ts` |
| 3 | Skills | `skills` | Grouped Frontend, Backend, Database, Tools, with equal visual weight | `src/data/skills.ts` |
| 4 | Experience | `experience` | PT. Hartono Istana Teknologi (Polytron) roles as a timeline, newest first | `src/data/experience.ts` |
| 5 | Projects | `projects` | CashierLess, Landezy, Kingdom of Glory, GKMI Anugerah: role, period, description, tech tags, live link | `src/data/projects.ts` |
| 6 | Education & Certifications | `education` | Binus University (GPA 3.85 / 4.00), KodingUp Bootcamp (in progress), two certifications | `src/data/education.ts` |
| 7 | Contact | `contact` | `mailto:` contact form (see section 12), email, LinkedIn, GitHub | `src/data/profile.ts` |
| 8 | Footer | n/a | Social links, copyright | n/a |

Rules:

- Position the owner as **full-stack**. Do not headline frontend only, and give frontend and backend skills equal weight.
- The "Download CV" button appears in Hero and Contact and uses the `CV_URL` constant (see Assets and file naming).
- Projects may be moved before Experience if the owner asks; only change the order array, not the components.

## 2. Tech Stack

| Area | Choice |
| :-- | :-- |
| Build tool | Vite |
| UI | React + TypeScript (strict) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Theme | Light and dark, user-switchable (class strategy, see section 8) |
| Visual style | Glassmorphism exactly as defined in `DESIGN.md`, with rules from `SKILL.md` |
| Fonts | Plus Jakarta Sans (display and body), JetBrains Mono (mono). Installed by the owner (see section 13) |
| Lint | ESLint (flat config) + `typescript-eslint` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` |
| Format | Not part of the base setup. Prettier (+ `prettier-plugin-tailwindcss`) may be added later, only if the owner asks |
| Package manager | npm (keep `package-lock.json`; do not mix in yarn/pnpm) |
| Deploy | Vercel (static build output in `dist/`) |

Do not add a new framework, state library, UI kit, or CSS-in-JS library without asking the owner first.

## 3. Commands

Use these exact scripts. If one is missing from `package.json`, add the **script** (not a dependency).

```bash
npm run dev          # start dev server (http://localhost:5173)
npm run lint         # ESLint, must report 0 errors and 0 warnings
npm run typecheck    # tsc -b (the Vite template tsconfig already sets noEmit), must pass
npm run build        # production build, must pass
npm run preview      # preview the production build
```

`npm install` (no arguments) is allowed to restore dependencies already listed in `package.json`. Adding or removing packages is the owner's job (see section 13).

## 4. Definition of Done (mandatory)

A task is **not finished** until all of the following pass locally:

1. `npm run lint` → 0 errors, **0 warnings**
2. `npm run typecheck` → no errors
3. `npm run build` → succeeds
4. The changed UI was checked at mobile (≈375px), tablet (≈768px), and desktop (≥1280px) widths
5. The changed UI was checked in **both light and dark** themes
6. No `console.log`, commented-out code, or unused files/exports left behind

Run these yourself and report the real result. Never claim "lint passes" without running it.

### ESLint rules of engagement

- Fix the root cause. **Do not** silence problems with `// eslint-disable`, `@ts-ignore`, `@ts-nocheck`, or by loosening the ESLint/tsconfig config.
- `@ts-expect-error` is allowed only with a one-line reason and only when unavoidable.
- Do not edit `eslint.config.js` to make errors disappear. Config changes need a stated reason and owner approval.
- Auto-fix first (`npm run lint -- --fix`), then fix the rest by hand.

## 5. Project Structure

```
.
├── public/                 # Static assets served as-is
│   ├── cv/
│   │   └── giovanni-jose-resume.pdf
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── profile-picture.webp   # Imported by code; other images go here too
│   │   └── fonts/
│   │       └── jet-brains-mono.woff2   # Jet Brains Mono font; 
│   │       └── plus-jakarta-sans.woff2   # Plus Jakarta Sans font; 
│   ├── components/
│   │   ├── ui/             # Primitives (Button, GlassCard, Chip, Section, ThemeToggle, ...)
│   │   └── layout/         # Backdrop, Header, Footer, Nav, Container, SkipLink
│   ├── sections/           # Page sections: Hero, About, Skills, Experience, Projects, Education, Contact
│   ├── data/               # Typed content (profile, skills, experience, projects, education)
│   ├── hooks/              # Custom hooks (useXxx), e.g. useTheme
│   ├── lib/                # Pure helpers: cn, constants, contact (mailto builder), theme
│   ├── types/              # Shared TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Tailwind import + @theme design tokens + theme variables
├── index.html
├── vite.config.ts
├── tsconfig*.json
├── eslint.config.js
├── DESIGN.md               # Visual design source of truth (read before any UI work)
├── SKILL.md                # Design skill (use the path where the owner placed it)
└── AGENTS.md
```

Rules:

- **Content lives in `src/data/`, not inside JSX.** Sections render typed data; editing a job or project should never require touching markup.
- One component per file, file name equals component name (`ProjectCard.tsx`).
- Use the `@/` path alias for `src/` imports instead of long relative paths (`../../../`).
- Keep components small. If a component exceeds ~150 lines or mixes data, logic, and layout, split it.

### Assets and file naming

| Asset | Location | Notes |
| :-- | :-- | :-- |
| Résumé / CV | `public/cv/giovanni-jose-resume.pdf` | Link as `/cv/giovanni-jose-resume.pdf` with the `download` attribute. Replace the file in place; never add versions to the name |
| Profile picture | `src/assets/images/profile-picture.webp` | Import it (`@/assets/images/profile-picture.webp`) so Vite hashes it. About 800×800, under 150 KB, descriptive `alt`, explicit `width` and `height`. It is above the fold, so do not lazy-load it |
| Favicon | `public/favicon.svg` | "G" monogram on a glass-style rounded square in the `primary` color. Do not replace it with stock icons |
| Social share image | `public/og-image.png` | 1200×630, referenced by absolute URL (`SITE_URL` + `/og-image.png`) in Open Graph and Twitter tags. Must live in `public/`, not `src/` |
| Robots | `public/robots.txt` | Allow all, link the sitemap if one exists |

Rules:

- Use these exact file names and paths. Do not rename or move them.
- Expose the public paths as constants in `src/lib/constants.ts` (for example `CV_URL = "/cv/giovanni-jose-resume.pdf"`) instead of repeating string literals.
- Declare the favicon in `index.html`: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`. Add a 180×180 `apple-touch-icon.png` only if the owner asks.
- If an asset is missing, do not fabricate one. Use a clearly marked placeholder and tell the owner.

## 6. TypeScript Rules

- `strict` mode stays on. No `any`; use `unknown` and narrow, or define a proper type.
- Prefer `type` for props and unions, `interface` only when extension is needed.
- Type component props explicitly; do not use `React.FC`.
- Use `import type { ... }` for type-only imports.
- Use `as const` / `satisfies` for static data so types stay precise.
- No non-null assertions (`!`) unless a comment explains why it is safe.
- No default exports for components, hooks, or utilities (named exports only). Exceptions: config files that require default exports.

```ts
// src/types/project.ts
export type Project = {
  name: string;
  role: string;
  period: string;
  description: string;
  stack: readonly string[];
  href?: string;
};
```

## 7. React Rules

- Function components and hooks only.
- Follow the Rules of Hooks; keep `react-hooks/exhaustive-deps` clean by fixing dependencies, not by disabling the rule.
- Files exporting components should export **only** components (required by `react-refresh/only-export-components`). Put constants, helpers, and hooks in separate files.
- Do not use `useEffect` for things that can be derived during render or handled in an event handler.
- Use stable, meaningful `key` props. Never use array index as key for reorderable or dynamic lists.
- Avoid premature `useMemo`/`useCallback`; add them only for a measured or obvious need.
- Lazy-load heavy, below-the-fold pieces with `React.lazy` + `Suspense` when it helps bundle size.
- Prefer semantic HTML over generic `div`s (see Accessibility).

## 8. Styling, Design System, and Theme

### 8.1 Tailwind rules (v4)

- Tailwind is wired with the Vite plugin: `plugins: [react(), tailwindcss()]` in `vite.config.ts`, and `@import "tailwindcss";` at the top of `src/index.css`.
- All design tokens live in `@theme` inside `src/index.css`. **Raw hex values, font names, radii, and blur values appear only in `src/index.css`.** Components use token-based utilities.
- Use utility classes in JSX. Avoid `@apply` except for truly repeated base styles in `index.css`.
- **Mobile-first:** write base styles for mobile, then layer `sm:`, `md:`, `lg:`, `xl:`.
- Never build class names dynamically (`` `text-${color}-500` ``). Tailwind cannot detect them. Use complete class strings or a lookup map.
- Merge conditional classes with a `cn()` helper in `src/lib/` (see section 13 for what to do if the helper packages are not installed).
- Keep utility classes in a consistent, readable order (layout → spacing → typography → color → state variants). Do not reorder classes on lines you are not otherwise changing.
- Respect `prefers-reduced-motion` for any animation (`motion-safe:` / `motion-reduce:`).
- No inline `style={{}}` unless the value is truly dynamic and cannot be a class or CSS variable.
- No separate CSS files per component; keep global CSS minimal.

### 8.2 Source of truth: `DESIGN.md` and `SKILL.md`

The visual style is **glassmorphism**: frosted, translucent layers with subtle blur and luminous borders; clean, high-contrast, bold, enterprise feel; bento cards. Follow **every** value in `DESIGN.md` exactly.

- **`DESIGN.md`** defines how the site looks: colors, typography, radius, spacing. Read it in full before any UI work.
- **`SKILL.md`** is used as a **rules source** only: token-first thinking, required component states, accessibility, writing tone, and its Do/Don't lists. Its "Guideline Authoring Workflow" and "Required Output Structure" are for writing design-system documents. **Do not produce guideline documents** unless the owner asks. Ignore its "Brand" paragraph (it describes a different product, not this portfolio).

Order of precedence if sources disagree:

1. The accessibility, performance, and security rules in this file
2. `DESIGN.md`
3. `SKILL.md`
4. Your own judgment (only where the files are silent, and state what you chose)

If a file is missing or does not define something you need, ask the owner. Do not invent values.

### 8.3 Design tokens (from `DESIGN.md`)

| Token | Value | Notes |
| :-- | :-- | :-- |
| `primary` | `#1856FF` | Main accent: buttons, links, highlights, glows |
| `secondary` | `#3A344E` | Deep tone for dark-theme layers and gradients |
| `success` | `#07CA6B` | Status only |
| `warning` | `#E89558` | Status only |
| `danger` | `#EA2143` | Errors and destructive states only |
| `surface` | `#FFFFFF` | Light-theme background; dark-theme foreground |
| `text` | `#141414` | Light-theme foreground; dark-theme background |
| `neutral` | `#FFFFFF` | Same as `surface` |
| Radius | `sm` 4px, `md` 8px | **Only these two.** Cards and panels use `md`; chips use `sm`. No other radii without owner approval |
| Spacing | `sm` 8px, `md` 16px | "Comfortable" density: build the rhythm from multiples of 8px |
| Display and body font | Plus Jakarta Sans | Weights available: 100 to 900. Load only what is used |
| Mono font | JetBrains Mono | Labels, chips, numeric captions |
| `h1` | 3rem | Maximum size; scale down on small screens (mobile-first compact scale) |
| `body-md` | 1rem | Default body text |
| `label-caps` | 0.75rem, mono, uppercase, letter-spaced | Small labels |

Notes:

- `DESIGN.md` mentions an `info` color but gives no value. **Do not use `info`** until the owner defines it.
- `DESIGN.md` defines only `h1`, `body-md`, and `label-caps`. Any other sizes (`h2`, `h3`, `body-sm`, ...) must be derived from the same compact scale, recorded once in `@theme`, and kept to a small set.
- Starting `@theme` block (add the derived sizes and glass tokens next to it):

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #1856ff;
  --color-secondary: #3a344e;
  --color-success: #07ca6b;
  --color-warning: #e89558;
  --color-danger: #ea2143;
  --color-surface: #ffffff;
  --color-text: #141414;
  --color-neutral: #ffffff;

  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --radius-sm: 4px;
  --radius-md: 8px;

  --text-h1: 3rem;
  --text-body: 1rem;
  --text-label: 0.75rem;
}
```

### 8.4 Theme: light and dark

The site supports **light and dark** themes with a user toggle. No new brand colors: both themes are built from the tokens above.

| Semantic role | Light | Dark |
| :-- | :-- | :-- |
| Page background | `surface`, with a soft `primary`-tinted gradient | `text` (`#141414`) base, with `secondary` and `primary` glows |
| Foreground | `text` | `surface` |
| Muted text | `text` at about 70% | `surface` at about 75% |
| Glass fill | `surface` at about 60-72% alpha | `surface` at about 8-14% alpha |
| Glass border | `surface` at about 70% alpha, plus a faint dark hairline | `surface` at about 25-30% alpha |
| Accent fill | `primary` | `primary` |
| Decorative backdrop | Gradient orbs only | Gradient orbs and subtle starfield |

Alpha values are starting points; tune them until contrast passes.

Implementation:

- Semantic CSS variables (`--bg`, `--fg`, `--glass-fill`, `--glass-border`, ...) are defined on `:root` and overridden under `.dark`, then exposed to utilities with `@theme inline`. Components use the semantic utilities (`bg-bg`, `text-fg`, `bg-glass`, ...) and rarely need `dark:` variants.
- Dark mode uses a `dark` class on `<html>` (Tailwind `@custom-variant`, shown above).
- Default to the visitor's system preference (`prefers-color-scheme`). A manual choice is saved in `localStorage` (key `theme`, values `light` or `dark`), with every read and write wrapped in `try/catch`.
- An **inline script in `<head>`** applies the class and `color-scheme` before first paint to prevent a flash of the wrong theme.
- The toggle is a real `<button>` with an `aria-label` that describes the action ("Switch to dark theme"), a visible focus state, and an icon (inline SVG if no icon package is installed). Also update `<meta name="theme-color">` when the theme changes.
- The starfield is visible in **dark only**. It is decorative, not defined in `DESIGN.md`, and must stay subtle.

Contrast facts to respect (verify with a contrast tool, do not guess):

- `text` on `surface` passes comfortably. White on `primary` is about 5.5:1, so button labels on a `primary` fill pass.
- Raw `primary` on the dark background is only about 3.3:1. In dark theme, never use raw `primary` for small text. Use it for fills, borders, glows, and large text, and use a lighter tint derived from it (`color-mix`) or `surface` for small links.
- `success`, `warning`, and `danger` are fills, icons, and borders accompanied by foreground-colored text. Do not use `success` or `warning` as text on light surfaces, and check `danger` before using it as small text.

### 8.5 Glass recipe and guardrails

- **Recipe:** semi-transparent fill + `backdrop-blur` + a 1px luminous border + a subtle inner highlight + a soft shadow. Cards and panels use radius `md`.
- **Use glass with purpose:** nav, bento cards, and panels. Not every element. One visual metaphor only; do not mix in other styles (neumorphism, brutalism, etc.).
- **Contrast:** text on glass must meet WCAG AA (4.5:1 for body, 3:1 for large text and UI components) against the worst-case part of the backdrop behind it, in both themes. Raise the fill opacity instead of lowering text contrast.
- **Performance:** at most 3-4 blurred layers visible at once, never nest `backdrop-filter`, no blur on large full-screen or scrolling areas, and a smaller blur on mobile.
- **Fallbacks:** solid surface color when `backdrop-filter` is unsupported (`supports-[backdrop-filter]:` variants), opaque surfaces under `prefers-reduced-transparency` where supported, and static visuals under `prefers-reduced-motion`.
- **Decorative backdrop:** gradient and starfield are `aria-hidden` and `pointer-events-none`, animate only `transform` and `opacity`, pause when the tab is hidden, and use lower star density on mobile. Motion must have a purpose.

### 8.6 Component rules (from `SKILL.md`)

- Every interactive component defines these states where relevant: default, hover, `focus-visible`, active, disabled, loading, error.
- Support keyboard, pointer, and touch. Focus rings must be clearly visible in both themes.
- Use semantic tokens, never raw values. Preserve visual hierarchy and a consistent spacing rhythm.
- Handle edge cases: long labels, empty states, and overflow.
- Labels must be unambiguous (no vague "Click here" or "Submit").
- Writing tone for all UI copy: concise, confident, helpful, clear, friendly, professional.

## 9. Accessibility (non-negotiable)

Target: **WCAG 2.2 AA**, keyboard-first, in both themes.

- Use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>` (with headings), `<footer>`.
- One `<h1>` per page; heading levels must not skip.
- Every interactive element is reachable and operable by keyboard, with a visible focus style (never `outline-none` without a replacement).
- Provide a "Skip to content" link.
- Images: meaningful `alt` text (empty `alt=""` for purely decorative images). Always set `width` and `height` to prevent layout shift.
- Color contrast must meet AA (4.5:1 for body text, 3:1 for large text and UI components).
- Icon-only buttons need an accessible name (`aria-label`).
- Form fields need associated `<label>`s, clear error messages, and `aria-invalid` / `aria-describedby` where relevant. Errors are never conveyed by color alone.
- Mobile nav must be keyboard accessible and expose state via `aria-expanded` / `aria-controls`.
- External links that open a new tab use `target="_blank" rel="noopener noreferrer"`.

## 10. Performance

- Target Lighthouse ≥ 90 for Performance, Accessibility, Best Practices, and SEO.
- Use modern image formats (WebP/AVIF), correctly sized; `loading="lazy"` for below-the-fold images, and prioritize the hero/LCP image.
- Fonts are installed by the owner; use `font-display: swap`, load only the weights actually used, and never load fonts from a third-party CDN at runtime.
- Do not write heavy code for small tasks (e.g. no animation or date library when a few lines of CSS or `Intl` suffice).
- Animate only `transform` and `opacity`.

## 11. SEO and Metadata

Fill in `index.html` with the following. The site URL is `https://giovannijose.vercel.app` (temporary).

- `<title>` and meta description derived from the `README.md` summary.
- `<link rel="canonical" href="https://giovannijose.vercel.app/" />`
- Open Graph: `og:type` (`website`), `og:title`, `og:description`, `og:url`, `og:image` (`https://giovannijose.vercel.app/og-image.png`), `og:image:width` (1200), `og:image:height` (630), `og:image:alt`.
- Twitter: `twitter:card` (`summary_large_image`), plus title, description, and the same absolute image URL.
- `<meta name="theme-color">` for light (`#ffffff`) and dark (`#141414`), updated by the theme toggle.
- Favicon link (`/favicon.svg`) and `lang="en"` on `<html>`.
- `public/robots.txt` (allow all). A single-URL `sitemap.xml` is optional; if added, reference it in `robots.txt`.
- Optional: JSON-LD `Person` data using only facts from `README.md` (name, job title, URL, LinkedIn, GitHub).
- Use meaningful link text (no "click here").

## 12. Security and Privacy

- **Never commit secrets** (API keys, tokens, `.env`). Commit only `.env.example`.
- In Vite, every `VITE_*` variable is **exposed to the browser**. Only put public values there.
- The site is a static SPA with no backend. **The contact form uses `mailto:` for now:** on submit, validate the fields (name, email, message), build `mailto:giovanni.jricardo@gmail.com?subject=...&body=...` with `encodeURIComponent`, and open it. Tell the visitor in the UI that this opens their email app. Keep this logic isolated in `src/lib/contact.ts` so a form provider can replace it later by changing one file.
- Treat any text from external sources as untrusted. Do not use `dangerouslySetInnerHTML` unless sanitized and justified.
- Keep personal data (phone, email) limited to what already appears in `README.md`.

## 13. Dependencies and Fonts

**The owner installs dependencies and fonts manually.**

- Do not run `npm install <package>`, `npm uninstall`, or edit the `dependencies` / `devDependencies` of `package.json`. Plain `npm install` to restore what is already listed is fine.
- Use only what is already in `package.json` and the project's font setup.
- If something is missing (a font, class-merge helpers, an icon set), do **not** work around it with a CDN, copied library code, or a hack. Instead:
  - Keep the build working with a safe fallback: system font stacks from the tokens, inline SVG icons, and a minimal local `cn()` in `src/lib/cn.ts` if `clsx` / `tailwind-merge` are absent.
  - List what is missing and why in your report so the owner can install it.
- Fonts are referenced only through the `--font-*` tokens, never by name inside components.
- Remove code that depends on packages the owner has removed.

## 14. Code Style

- Match the formatting already used in the codebase (indentation, quotes, semicolons) and let ESLint be the judge. Do not reformat unrelated files.
- Naming: components `PascalCase`, hooks `useCamelCase`, functions/variables `camelCase`, constants `UPPER_SNAKE_CASE`, files for non-components `kebab-case` or `camelCase` consistently.
- Comments explain **why**, not **what**. Remove dead code instead of commenting it out.
- Prefer early returns over deep nesting. Keep functions single-purpose.
- No magic numbers or strings; name them.
- UI copy is in English, in the tone defined in section 8.6, and consistent with `README.md`.

## 15. Git and Commits

- Keep changes small and focused: one logical change per commit.
- Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`, `perf:`.
- Do not commit `node_modules`, `dist`, `.env`, or editor/OS files.
- Never force-push, rewrite history, or delete branches unless explicitly asked.

## 16. How Agents Should Work

1. **Understand first.** Read the relevant files and existing patterns before editing. Match the conventions already in the codebase. For any UI work, read `DESIGN.md` and `SKILL.md` first.
2. **Follow the build checklist** in section 18, in order. Do not skip ahead.
3. **Stay in scope.** Do not refactor, rename, or "improve" unrelated code. Mention extra findings instead of acting on them.
4. **Ask when blocked** on product decisions (copy that is not in `README.md`, a missing asset, a visual value that `DESIGN.md` does not define). Otherwise choose the sensible default and state it.
5. **Verify** with the Definition of Done in section 4 before reporting completion.
6. **Report honestly:** summarize what changed, which commands you ran with their results, and anything you could not verify, left undone, or need the owner to install.

## 17. Do and Don't

**Do**

- Keep content in `src/data/` and render it through typed components.
- Build mobile-first, accessible, semantic markup, and check both themes.
- Follow `DESIGN.md` for every visual decision and use `SKILL.md` as the rules source.
- Use semantic tokens everywhere; reuse `components/ui` primitives before creating new ones.
- Keep `lint`, `typecheck`, and `build` green at every commit.

**Don't**

- Don't add `any`, `eslint-disable`, `@ts-ignore`, or `!` to make errors go away.
- Don't hard-code content, colors, radii, fonts, or breakpoints that belong in data or `@theme`.
- Don't install, remove, or upgrade packages, and don't introduce new frameworks.
- Don't invent portfolio facts, metrics, testimonials, or project details.
- Don't invent colors, fonts, or radii that `DESIGN.md` does not define, and don't use `info`.
- Don't use raw `primary` for small text in dark theme, or `success` / `warning` as text on light surfaces.
- Don't mix visual metaphors, add decorative motion without purpose, or use ambiguous labels.
- Don't leave `console.log`, TODO-less hacks, or commented-out code behind.

## 18. Build Checklist (work in this order)

Build from the foundations up so every section inherits the same tokens, states, and themes. **Do not start a phase until the previous phase's gate passes.** Tick items as you complete them.

### Phase 0: Read and baseline

- [x] Read `AGENTS.md`, `DESIGN.md`, `SKILL.md`, and `README.md` in full
- [x] Confirm what is installed in `package.json` (Tailwind plugin, fonts, helpers) and list anything missing for the owner
- [x] Run `npm run lint`, `npm run typecheck`, `npm run build` to record the starting state

**Gate:** baseline recorded; missing packages listed, not installed.

### Phase 1: Foundation and tokens

- [x] `vite.config.ts`: React and Tailwind plugins, `@/` alias (with matching `tsconfig` paths)
- [x] `src/index.css`: `@import "tailwindcss"`, dark `@custom-variant`, `@theme` tokens from section 8.3 (colors, fonts, radius, type scale, spacing rhythm)
- [x] Semantic variables for light and dark (background, foreground, muted, glass fill, glass border, shadow) and their `@theme inline` mapping
- [x] Base styles: body background and text, `focus-visible` ring, selection color, `prefers-reduced-motion`
- [x] `index.html`: `lang`, title, description, canonical, Open Graph and Twitter tags, favicon, theme-color, and the inline theme-init script
- [x] `src/lib/constants.ts` (`SITE_URL`, `CV_URL`, contact email, social links), `cn`, and theme helper

**Gate:** `lint`, `typecheck`, `build` pass. Grep confirms raw hex values exist **only** in `src/index.css`. Light and dark both render a correct empty page with no theme flash.

### Phase 2: Primitives (`components/ui`)

- [x] `GlassCard` (bento-ready, radius `md`) with fallbacks from section 8.5
- [x] `Button` (primary, secondary, ghost) with all required states, including loading and disabled
- [x] `Chip`, link styles, `Section` wrapper (anchor `id`, heading, `scroll-mt-*`), `Container`
- [x] `ThemeToggle` wired to the theme helper, accessible name, visible focus

**Gate:** a temporary preview of every primitive in every state, in both themes, passes contrast and keyboard checks. Remove the preview afterwards.

### Phase 3: Layout shell (`components/layout`)

- [x] `Backdrop` (gradient in both themes, starfield in dark only, decorative rules from section 8.5)
- [x] `SkipLink`, `Header` / `Nav` (desktop and mobile, `aria-expanded` / `aria-controls`), `Footer`
- [x] `App.tsx` with the section order array

**Gate:** keyboard-only navigation works end to end; the shell looks correct at 375, 768, and 1280px in both themes; no more than 3-4 blurred layers visible.

### Phase 4: Types and data

- [x] Types in `src/types/`
- [x] Data files in `src/data/` filled strictly from `README.md` (profile, skills, experience, projects, education)

**Gate:** `typecheck` passes; every fact traces back to `README.md`; nothing invented.

### Phase 5: Sections, one at a time

Build in this order. After **each** section, run `lint` and `typecheck`, then check 375 / 768 / 1280px in both themes.

- [x] Hero (`home`)
- [x] About (`about`)
- [x] Skills (`skills`)
- [x] Experience (`experience`)
- [x] Projects (`projects`)
- [x] Education & Certifications (`education`)
- [x] Contact (`contact`), with the `mailto:` form and `src/lib/contact.ts`

**Gate (per section):** uses only primitives and tokens; no raw values; heading order correct; contrast passes in both themes.

### Phase 6: Polish and quality

- [ ] Accessibility pass: tab order, focus visibility, headings, labels, alt text, contrast in both themes
- [ ] Performance pass: image sizes and formats, lazy loading, blur budget, font loading, bundle size
- [ ] SEO pass: all tags from section 11 present, `robots.txt`, absolute `og:image` URL
- [ ] Responsive pass: no horizontal scroll at 375px; long text and empty states handled
- [ ] Motion pass: every animation has a purpose and respects `prefers-reduced-motion`

**Gate:** Lighthouse ≥ 90 in all four categories on the production preview.

### Phase 7: Final QA and report

- [ ] `npm run lint` (0 errors, 0 warnings), `npm run typecheck`, `npm run build`
- [ ] Consistency audit: no raw hex, font names, or magic pixel values outside `src/index.css`; no radii other than `sm` and `md`; no `info` color
- [ ] No `console.log`, commented-out code, unused files, or unused exports
- [ ] Compare the result against `DESIGN.md` line by line and note any deviation
- [ ] Final report: what was built, commands run with results, missing packages or assets for the owner, and open questions