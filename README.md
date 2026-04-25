# Visit Ossetia (v1 Prototype)

Visit Ossetia is a production-ready multilingual travel portal foundation for North Ossetia–Alania. It is designed for international travelers who need practical, trustworthy planning guidance.

> Visit Ossetia is an independent travel guide, not an official government tourism portal.

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Structured content files (TypeScript objects)
- Static generation for locale pages and detail routes

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output: automatic (Next.js).

## Multilingual routing

Locale-prefixed routing is implemented using `app/[locale]`:

- `/en`
- `/ru`
- `/zh`
- `/ar`

Arabic pages use RTL direction. Language switching is available from the header.

## Content architecture

- Dictionaries and navigation labels: `src/i18n/dictionary.ts`
- Locale config and directions: `src/i18n/locales.ts`
- Structured destination/article route data: `src/content/data.ts`

## How to add a new place

1. Add a new place object in `src/content/data.ts` (slug + localized fields).
2. Include localized titles/descriptions for all four languages.
3. The `/[locale]/places` list updates automatically.
4. Place detail route is generated from the slug.

## How to add a new guide article

1. Add slug to article map in `src/app/[locale]/guide/[slug]/page.tsx`.
2. Add corresponding card entry in `src/app/[locale]/guide/page.tsx` if needed.
3. Add the route in `src/app/sitemap.ts` for full SEO coverage.

## How to replace image placeholders

Image placeholders are rendered by `src/components/ImagePlaceholder.tsx`.

To replace with real imagery later:

1. Create an image mapping (or add image fields in content objects).
2. Swap placeholder component with `next/image` in `Hero` and cards.
3. Keep descriptive alt text per locale.

## How to safely connect a real contact form later

Current form is static and **does not submit data**.

For v2:

1. Add server-side action endpoint with validation.
2. Introduce consent text and retention policy.
3. Add anti-spam (rate limiting + captcha if needed).
4. Store only minimum necessary fields.
5. Add privacy updates and data deletion process.

## Privacy and prototype status

- No database in v1
- No booking engine in v1
- No external CMS in v1
- No analytics trackers by default
- No API keys required
- Contact form is visual prototype only
