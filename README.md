# unuı — UnHQ UI Monorepo

[![CI](https://github.com/un-hq/unui/actions/workflows/ci.yml/badge.svg)](…)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/pm-pnpm-orange.svg)](https://pnpm.io)

A lightweight, token‑driven React + Tailwind component system.

## Packages
- **@unhq/tokens** — CSS variables for light/dark; the single source of truth.
- **@unhq/tailwind-preset** — Tailwind config that maps tokens → utilities.
- **@unhq/ui** — Headless-ish, token-first components.
- **@unhq/blocks** — Higher-level compositions (optional, WIP).
- **apps/docs** — Ladle stories for visual tests and theming controls.

## Quick start (consuming apps)

```bash
pnpm add @unhq/ui @unhq/tailwind-preset @unhq/tokens
```

**tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss'
import preset from '@unhq/tailwind-preset'

export default {
  presets: [preset],
} satisfies Config
```

**globals.css**
```css
@import '@unhq/tokens/styles.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then use components:
```tsx
import { Button } from '@unhq/ui'
```

## Theming contract

Tokens → Tailwind preset → components. See [`docs/THEMING_CONTRACT.md`](docs/THEMING_CONTRACT.md).

## Contributing

- Run docs: `pnpm -C apps/docs dev`
- Build all: `pnpm -w build`
- Typecheck: `pnpm -w typecheck`

## Releasing

We use Changesets. For user-facing changes:
```bash
pnpm changeset
# choose bump, write summary
pnpm -w version
git push --follow-tags
# publish when ready:
pnpm -w publish
```
