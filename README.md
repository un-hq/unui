# unuı — UnHQ UI Monorepo

[![CI](https://github.com/un-hq/unui/actions/workflows/ci.yml/badge.svg)](…)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/pm-pnpm-orange.svg)](https://pnpm.io)
[![npm version](https://img.shields.io/npm/v/@unhq/ui)](https://www.npmjs.com/package/@unhq/ui)
[![size-limit](https://img.shields.io/badge/size_limit-passing-brightgreen)](./packages/ui/.size-limit.json)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

A lightweight, token-driven React + Tailwind component system.

---

## 📦 Packages

- **@unhq/tokens** — CSS variables for light/dark; the single source of truth.  
- **@unhq/tailwind-preset** — Tailwind config that maps tokens → utilities.  
- **@unhq/ui** — Headless-ish, token-first components.  
- **@unhq/blocks** — Higher-level compositions (optional, WIP).  
- **apps/docs** — Ladle stories for visual tests and theming controls.  

---

## ⚡️ Quick start (consuming apps)

Install core packages:

```bash
pnpm add @unhq/ui @unhq/tailwind-preset @unhq/tokens
```

**tailwind.config.ts**

```ts
import type { Config } from "tailwindcss";
import preset from "@unhq/tailwind-preset";

export default {
  presets: [preset],
} satisfies Config;
```

**globals.css**

```css
@import "@unhq/tokens/styles.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then use components:

```tsx
import { Button } from "@unhq/ui";

export function Example() {
  return <Button>Click me</Button>;
}
```

---

## 🎨 Theming contract

Tokens → Tailwind preset → components.  
See [`docs/THEMING_CONTRACT.md`](docs/THEMING_CONTRACT.md).  

---

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) v18 or v20 (LTS recommended)  
- [pnpm](https://pnpm.io/) v10+  
- A GitHub account + SSH setup  

---

## 🚀 Development

- Run docs locally:  
  ```bash
  pnpm -C apps/docs dev
  ```

- Build all packages:  
  ```bash
  pnpm -w build
  ```

- Typecheck:  
  ```bash
  pnpm -w typecheck
  ```

---

## 🔀 Branching model

- Work should be done in feature branches.  
- Use descriptive branch names:  
  - `feat/button-secondary`  
  - `fix/input-focus-ring`  
  - `chore/size-limit`  

Open a PR into `main` when ready.

---

## ✅ CI

Every PR and push to `main` runs [CI](.github/workflows/ci.yml):  

- Typecheck  
- Build  
- Docs build (Ladle)  
- Size-limit guards  
- Publish dry-run  

CI must be green before merging.

---

## 📝 Releasing

We use **[Changesets](https://github.com/changesets/changesets)** for versioning and releases.  

For user-facing changes:  

```bash
pnpm changeset      # choose bump + write summary
pnpm -w version     # update versions & changelogs
git push --follow-tags
pnpm -w publish     # publish to npm
```

---

## 🤝 Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for full guidelines.

---

## 📜 License

MIT © [UnHQ](https://github.com/un-hq)
