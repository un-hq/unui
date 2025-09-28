# @unhq/tailwind-preset  🎨🌬️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![pnpm](https://img.shields.io/badge/pm-pnpm-orange.svg)](https://pnpm.io)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
[![npm](https://img.shields.io/npm/v/@unhq/tailwind-preset)](https://www.npmjs.com/package/@unhq/tailwind-preset)

Tailwind preset that maps `@unhq/tokens` CSS variables into the Tailwind theme (colors, radii, spacing, etc.) so `@unhq/ui` renders consistently out of the box.

---

## 📦 Install
```bash
pnpm add -D @unhq/tailwind-preset
```
Also include tokens once in your CSS entry (usually `globals.css`):
```css
@import "@unhq/tokens/styles.css";
```

---

## ⚙️ Setup
Choose the snippet that matches your Tailwind config style.

**ESM (`tailwind.config.ts` or `tailwind.config.mjs`)**
```ts
import type { Config } from "tailwindcss";
import preset from "@unhq/tailwind-preset";

export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
} satisfies Config;
```

**CommonJS (`tailwind.config.cjs` or `tailwind.config.js`)**
```js
/** @type {import('tailwindcss').Config} */
const preset = require("@unhq/tailwind-preset");

module.exports = {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
};
```

---

## 🖌️ Themes
Toggle classes on the `<html>` element to switch themes (example):
```html
<html class="dark theme-unhq">
```
> The preset reads CSS variables from `@unhq/tokens`. You can extend or override them in your app if needed.

---

## 📝 Notes
- Requires **Tailwind v3.4+**.
- You can still **extend** your own `theme` alongside this preset.
- Works great with `@unhq/ui` and `@unhq/blocks` for consistent styling across apps.

---

## 📄 License
MIT © UnHQ
