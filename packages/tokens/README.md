# @unhq/tokens

Design tokens (CSS variables) for UnUI. Primitive + semantic scales (colors, radius, spacing, typography).

## Install
```bash
pnpm add @unhq/tokens
```

## Usage
Import once in your app entry:
```css
/* app/globals.css */
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

## Override / Custom Theme
```css
.theme-brand-x {
  --radius: 0.75rem;
  --accent: 271 81% 56%;
}
```
Apply on `<html>` or a container:
```html
<html class="dark theme-brand-x">
```

## Works with
- `@unhq/tailwind-preset` (maps tokens → Tailwind theme)
- `@unhq/ui` (components consume tokens via Tailwind utilities)

## License
MIT © UnHQ
