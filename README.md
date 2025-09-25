# UNHQ / unui

[![CI](https://github.com/un-hq/unui/actions/workflows/ci.yml/badge.svg)](…)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/pm-pnpm-orange.svg)](https://pnpm.io)

A monorepo for the **unui** design system:
- `@unhq/ui`: Core headless+styled UI components (OSS)
- `@unhq/blocks`: Composition blocks (OSS)
- `@unhq/tokens`: Design tokens (OSS)
- `@unhq/tailwind-preset`: Tailwind preset consuming tokens (OSS)
- `apps/docs`: Ladle-based docs & live playground

## Quick start
```bash
pnpm i
pnpm -w build
pnpm -C apps/docs dev
```

## Using in an app
```bash
pnpm add @unhq/ui @unhq/tailwind-preset @unhq/tokens
```

Add to `tailwind.config`:
```ts
import { preset } from "@unhq/tailwind-preset";
export default { presets: [preset] };
```

## Versioning & releases
Changesets + pnpm workspaces. Run:
```bash
pnpm changeset
pnpm -w version
pnpm -w publish
```

## Local linking (while developing)
```bash
# in repo root
pnpm -w build

# in your consuming app
pnpm add link:../unui/packages/ui
pnpm add link:../unui/packages/tokens
pnpm add link:../unui/packages/tailwind-preset
```
