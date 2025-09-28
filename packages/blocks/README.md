# @unhq/blocks  🚧📦

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![pnpm](https://img.shields.io/badge/pm-pnpm-orange.svg)](https://pnpm.io)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
[![npm](https://img.shields.io/npm/v/@unhq/blocks)](https://www.npmjs.com/package/@unhq/blocks)

Composable UI “blocks” built on top of `@unhq/ui` — auth flows, settings panels, and marketing sections — to scaffold apps fast.

---

## ✨ Features
- Ready-made **composable blocks** built from `@unhq/ui`
- **Token-first** theming (works great with `@unhq/tokens`)
- Tailwind-friendly class APIs (`className`, slots)
- **Tree‑shakeable** builds and ESM/CJS exports

---

## 📦 Requirements
- React 18+ & React DOM 18+
- Tailwind CSS 3.4+
- `@unhq/ui` (peer dependency)

---

## 🚀 Install
```bash
pnpm add @unhq/blocks @unhq/ui
```

---

## 🧪 Quickstart
```tsx
import { Card } from "@unhq/blocks";

export function Example() {
  return (
    <main className="p-6">
      <Card>
        <h2 className="text-lg font-semibold">Block title</h2>
        <p>Content…</p>
      </Card>
    </main>
  );
}
```

---

## 🎨 Theming
Blocks inherit your app’s design tokens and Tailwind config. For best results, include:
- `@unhq/tokens` for CSS variables / TS exports
- `@unhq/tailwind-preset` in your Tailwind config

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import preset from "@unhq/tailwind-preset";

export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
} satisfies Config;
```

---

## ⚙️ Customization
- All blocks accept `className` for styling overrides.
- Many blocks expose **slots / render props** for deeper control.
- For heavy customization, compose primitives from `@unhq/ui` or **fork** a block.

---

## 📄 License
MIT © UnHQ
