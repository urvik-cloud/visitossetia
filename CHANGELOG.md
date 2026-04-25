# Changelog

## 2026-04-25 — Stabilization and security hardening

### Build and type fixes
- Fixed a blocking TypeScript data-model bug by correcting `whatToSee` typing to locale-indexed arrays (`Record<Locale, string[]>`).
- Added a dedicated `typecheck` npm script (`tsc --noEmit`) to enforce strict compile checks outside the build pipeline.
- Added a local ESLint config file so the repo has an explicit lint baseline for Next.js projects.

### Security hardening
- Hardened `next.config.ts` with production-safe HTTP response headers:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` for static-site-safe defaults
  - `Strict-Transport-Security` in production only
- Disabled `x-powered-by` header via `poweredByHeader: false`.
- Restricted remote images by setting `images.remotePatterns` to an empty list.

### Privacy and static-site safety
- Contact form remains non-connected UI-only; submit button is explicitly disabled and marked as a prototype to prevent accidental data submission.

### Routing and locale safety
- Normalized static param generation to use centralized `locales` constants in dynamic localized routes (`places`, `itineraries`, `guide`) to avoid locale drift and hardcoded duplication.

### Dependency/security audit notes
- Attempted to install and upgrade lint/security packages (`eslint`, `eslint-config-next`, `next`, `react`, `react-dom`) and run `npm audit`.
- Registry access returned `403 Forbidden` in this environment, so dependency upgrades and vulnerability resolution could not be completed here.

### Remaining low-priority issues
- `npm run lint` currently requires installing `eslint` in the environment; build and typecheck pass, but lint cannot run until registry access/policy allows package installation.
