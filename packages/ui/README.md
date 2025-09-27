# @unhq/ui

UnHQ’s headless + styled React components, built on **Radix UI**, **Tailwind CSS**, and shadcn-inspired patterns. Tree-shakable, themeable, minimal.

> Quickstart: `pnpm add @unhq/ui` then `import { Button } from "@unhq/ui"`

## Install
```bash
pnpm add @unhq/ui
# peer deps:
#   react, react-dom, tailwindcss
```
> Requires React `>=18 <20`, Tailwind `>=3.4`.

## Usage
```tsx
import {
  Button,
  Card, CardHeader, CardTitle, CardContent
} from "@unhq/ui";

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

## Theming
- Tokens from `@unhq/tokens` (CSS variables).
- Tailwind preset from `@unhq/tailwind-preset` wires utilities and themes.
- Toggle classes on `<html>`: e.g. `class="dark theme-unhq"`.

## CSS
If any component has CSS side-effects, they’re preserved via `"sideEffects": ["**/*.css"]`. Most styling is Tailwind utilities.

## License
MIT © UnHQ
