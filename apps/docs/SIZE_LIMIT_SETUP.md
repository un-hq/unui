# Size Limit Setup (UnUI)

This project uses [size-limit](https://github.com/ai/size-limit) to ensure `@unhq/ui` stays small.

## 1) Install (in @unhq/ui)
From repo root:
```bash
pnpm -C packages/ui add -D size-limit @size-limit/preset-small-lib
```

## 2) Script
Add to `packages/ui/package.json`:
```json
{
  "scripts": {
    "size": "size-limit"
  }
}
```

## 3) Config
Already added as `packages/ui/.size-limit.json` with a 10 kB limit on `dist/index.js` gzip/brotli.
Adjust the limit as the library grows.

## 4) CI
`CI` workflow runs `pnpm -C packages/ui size` after build. If the bundle exceeds the limit, the job fails.

## Notes
- size-limit checks **built output**. If `dist/` doesn’t exist, make sure `pnpm -w build` runs before the size step.
- You can add more entries (per component entry points) to `.size-limit.json` if you expose them.
