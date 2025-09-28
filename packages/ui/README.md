# @unhq/ui  ⚛️🎛️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![pnpm](https://img.shields.io/badge/pm-pnpm-orange.svg)](https://pnpm.io)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
[![npm](https://img.shields.io/npm/v/@unhq/ui)](https://www.npmjs.com/package/@unhq/ui)

Headless‑leaning, token‑first React components built on **Radix UI**, **Tailwind CSS**, and shadcn‑inspired patterns. Tree‑shakable, themeable, minimal.

---

## 📦 Requirements
- React 18+ & React DOM 18+
- Tailwind CSS 3.4+
- Works best with `@unhq/tokens` + `@unhq/tailwind-preset`

---

## 🚀 Install
```bash
pnpm add @unhq/ui
# peer deps: react react-dom tailwindcss
```
> Requires React `>=18 <20`, Tailwind `>=3.4`.

---

## 🧪 Quickstart
```tsx
import { Button } from "@unhq/ui";

export function Example() {
  return <Button>Hey</Button>;
}
```

**Composite example**
```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@unhq/ui";

export default function Demo() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>UnUI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

---

## 🎨 Theming
- Tokens from `@unhq/tokens` (CSS variables).
- Tailwind preset from `@unhq/tailwind-preset` wires utilities and themes.
- Toggle classes on `<html>` (example): `class="dark theme-unhq"`.

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import preset from "@unhq/tailwind-preset";

export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
} satisfies Config;
```

```css
/* globals.css */
@import "@unhq/tokens/styles.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧩 CSS
Most styling uses Tailwind utilities. Any component CSS files are preserved via
```json
"sideEffects": ["**/*.css"]
```

---

## ♿ Accessibility
Components follow ARIA roles & keyboard interactions by default (Radix primitives where applicable). Please report gaps via issues.

---

## 📄 License
MIT © UnHQ
