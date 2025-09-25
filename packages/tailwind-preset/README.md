# @unhq/tailwind-preset

Tailwind preset that maps `@unhq/tokens` CSS variables into Tailwind theme (colors, radius, etc.) so `@unhq/ui` renders consistently.

## Install
```bash
pnpm add -D @unhq/tailwind-preset
```

## Setup
`tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";
import unhq from "@unhq/tailwind-preset";

export default {
  presets: [unhq()],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@unhq/ui/dist/**/*.{js,ts}"
  ]
} satisfies Config;
```
Include tokens once in your CSS:
```css
@import "@unhq/tokens/styles.css";
```

## Themes
Toggle classes on `<html>`:
```html
<html class="dark theme-unhq">
```

## Notes
- Requires Tailwind v3.4+.
- You can extend your own theme after the preset.

## License
MIT © UnHQ
