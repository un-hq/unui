# @unhq/tokens  🎯🔧

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![pnpm](https://img.shields.io/badge/pm-pnpm-orange.svg)](https://pnpm.io)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
[![npm](https://img.shields.io/npm/v/@unhq/tokens)](https://www.npmjs.com/package/@unhq/tokens)

Design tokens for UnUI — shipped as **CSS variables** (and TS exports if you consume them programmatically). Covers primitive & semantic scales: colors, radii, spacing, typography, etc.

---

## 📦 Install
```bash
pnpm add @unhq/tokens
```

---

## 🚀 Usage (CSS variables)
Import once in your app’s global stylesheet (e.g., `app/globals.css`):
```css
@import "@unhq/tokens/styles.css";
```

You’ll get variables like:
```css
:root {
  --radius: 0.5rem;
  --bg: 0 0% 100%;
  --fg: 222.2 84% 4.9%;
}

html.dark {
  --bg: 222.2 84% 4.9%;
  --fg: 0 0% 98%;
}
```

---

## 🎛️ Override / Custom Theme
Create a theme class that overrides the CSS variables you care about:
```css
.theme-brand-x {
  --radius: 0.75rem;
  --accent: 271 81% 56%;
}
```
Apply it on `<html>` or a containing element:
```html
<html class="dark theme-brand-x">
```

> Tip: Scoping to a container lets you preview multiple themes side‑by‑side in Storybook/Ladle.

---

## 🤝 Works with
- `@unhq/tailwind-preset` — maps tokens → Tailwind theme (colors, radii, spacing…)
- `@unhq/ui` — components consume tokens via Tailwind utilities
- `@unhq/blocks` — inherits your tokens and Tailwind preset

---

## 📄 License
MIT © UnHQ
