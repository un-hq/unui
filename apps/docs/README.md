# UnUI Docs (Ladle)

This app previews UnUI components and blocks using **Ladle**.

## Commands
```bash
pnpm -C apps/docs dev    # start docs
pnpm -C apps/docs build  # build static
```

## Theme toggling
The preview toggles light/dark and theme classes on `<html>` to reflect `@unhq/tokens` variables consumed via `@unhq/tailwind-preset`.

## Import rule
Stories should only import from **public exports** of `@unhq/ui` and `@unhq/blocks`. Avoid deep imports into `dist/*` paths to keep API surface stable.
