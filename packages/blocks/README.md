# @unhq/blocks

Composable UI “blocks” built from `@unhq/ui` (auth forms, settings panels, marketing sections). Great for scaffolding apps fast.

## Install
```bash
pnpm add @unhq/blocks @unhq/ui
```
> Requires `@unhq/ui` + React 18+, Tailwind 3.4+.

## Usage
```tsx
import { SignInBlock } from "@unhq/blocks";

export default function Page() {
  return <SignInBlock onSubmit={(v) => {/* ... */}} />;
}
```

## Theming
Blocks inherit tokens and Tailwind theme from your app (`@unhq/tokens` + `@unhq/tailwind-preset`).

## Customization
Blocks accept `className`, and often slots/render props. Fork or compose for heavy customization.

## License
MIT © UnHQ
