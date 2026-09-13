# adiavula.vercel.app

Portfolio of Adi Vishnu Avula. Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion. Deployed on Vercel from `main`.

## Run it

```bash
npm install
npm run dev
```

`npm run check` runs ESLint and the TypeScript compiler. `npm run build` is what Vercel runs.

## Where things live

| Path                                                        | What                                                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `content/site.ts`                                           | Name, tagline, status line, email, links, photo                                       |
| `content/work.ts`                                           | Featured work (ordered) and the archive list                                          |
| `content/work/*.mdx`, `content/research/*.mdx`              | Case-study bodies, one file per featured entry                                        |
| `content/experience.ts`                                     | Roles and education                                                                   |
| `content/research.ts`                                       | Publication and patent details                                                        |
| `content/honors.ts`, `content/stack.ts`, `content/about.ts` | Honors, certifications, stack groups, About copy                                      |
| `components/poster/`                                        | The design primitives: `Band`, `Container`, `Action`, `Meta`, `Arrow`, `SectionLabel` |
| `components/sections/`                                      | Home page sections, in page order                                                     |
| `components/case-study/`                                    | Shared layout for case-study pages                                                    |
| `components/motion/`                                        | `Reveal` (in-view fade) and `Disclosure` (animated expandable row)                    |
| `app/`                                                      | Routes, metadata, `robots.ts`, `sitemap.ts`, `manifest.ts`, `llms.txt`, OG image      |
| `lib/`                                                      | Formatting (`Intl`), SEO JSON-LD, MDX loader, OG font loader                          |
| `public/resume.pdf`                                         | The resume. `/resume` redirects here                                                  |

## Routine edits

- **Update the resume:** replace `public/resume.pdf`, commit, push. The URL never changes.
- **Add a project:** add an entry to `featuredWork` in `content/work.ts` and a matching `content/work/<slug>.mdx`. It appears on the home page and gets its own route, sitemap entry and OG card.
- **Retire a project:** delete its row from `archive` (or its entry from `featuredWork` and the MDX file).
- **Change the status line, email or portrait:** `content/site.ts` (drop a new `public/photo.jpg` for the portrait).
- **Add education or a role:** `content/experience.ts`.
- **Start writing:** create `content/writing/` with MDX files and add a `/writing` route. The MDX loader in `lib/mdx.ts` already handles GFM tables.

## Design system

One family, Archivo (variable width and weight), self-hosted through `next/font`. Tokens live in `app/globals.css` under `@theme`: paper, ink, ink-2, blue, blue-deep, blue-tint, on-blue, on-blue-2, and the type scale `display`, `h1`, `h2`, `h3`, `lead`, `body`, `meta`. Bands own their colour; there are no shadows, gradients or rounded corners.

Every band wraps its content in `Reveal`. Reveals only run once JavaScript has added the `js` class to `<html>`, so the page is fully visible without scripts. Reveals and smooth anchor scrolling are off under `prefers-reduced-motion`.
