# 🤝 Contributing to UnUI

We welcome contributions from everyone 🎉  
This document explains how to set up the repo, make changes safely, and open high‑quality pull requests.

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) **v18 or v20** (LTS recommended)
- [pnpm](https://pnpm.io/) **v10+**
- Git & a GitHub account (with SSH or HTTPS set up)
- macOS, Linux, or Windows (PowerShell supported)

---

## ⚙️ Setup

1. **Clone the repo**
   ```bash
   git clone git@github.com:un-hq/unui.git
   cd unui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the docs (Ladle) for local dev**
   ```bash
   pnpm -C apps/docs dev
   ```

4. **Build all packages (before testing usage from apps)**
   ```bash
   pnpm -w build
   ```

> Tip: keep `apps/docs` running while you iterate on components/blocks. It gives instant visual feedback and theming toggles.

---

## 🔧 Common tasks

- **Typecheck all packages**
  ```bash
  pnpm -w typecheck
  ```

- **Build everything**
  ```bash
  pnpm -w build
  ```

- **Run size checks**
  ```bash
  pnpm -C packages/ui size
  pnpm -C packages/blocks size
  ```

- **Lint (placeholder)**
  ```bash
  pnpm -w lint
  ```

- **Docs (prod build)**
  ```bash
  pnpm -C apps/docs build
  ```

---

## 🎨 Adding a component (UI)

1. Create your component in `packages/ui/src/components/YourComponent.tsx`.
2. Export it (and its types) from `packages/ui/src/index.ts`.
3. **Tokens first**: use Tailwind utilities backed by `@unhq/tokens` (no hard‑coded colors/sizes).
4. Add a Ladle story in `apps/docs/src/` (e.g. `ui.your-component.stories.tsx`) using **only public exports**:
   ```tsx
   import { YourComponent } from "@unhq/ui";
   ```
5. Build & verify:
   ```bash
   pnpm -w build && pnpm -C apps/docs dev
   pnpm -C packages/ui size
   ```

**Notes**
- Keep accessibility in mind (keyboard, ARIA, focus states).
- Stick to our variants API patterns (see `packages/ui/src/recipes/*`).

---

## 🧩 Adding a block (Blocks)

1. Create your block in `packages/blocks/src/lib/YourBlock.tsx`.
2. Export it from `packages/blocks/src/index.ts`.
3. Use only **public** UI exports:
   ```tsx
   import { Button, Card } from "@unhq/ui";
   // ✅ avoid deep imports like "@unhq/ui/dist/components/button"
   ```
4. Add a Ladle story in `apps/docs/src/` (e.g. `blocks.your-block.stories.tsx`).
5. Build & run size checks:
   ```bash
   pnpm -w build
   pnpm -C packages/blocks size
   ```

---

## 🧹 Coding standards

- **Tokens, not magic numbers**: use Tailwind utilities mapped by `@unhq/tailwind-preset` and values coming from `@unhq/tokens`.
- **Side‑effects**: components must not auto‑import global CSS. Apps should import `@unhq/tokens/styles.css` themselves.
- **Types**: prefer explicit prop types; avoid `any`. For events, use the right React types (e.g. `React.FormEvent<HTMLFormElement>`).
- **Variants**: define in `packages/ui/src/recipes` (via cva) and consume in components.
- **Stories**: one minimal story per component/block; titles must be unique across files.
- **Conventional Commits** for messages:
  - `feat(button): add secondary variant`
  - `fix(input): correct focus ring`
  - `chore: update deps`

---

## 🌱 Branches & PRs

- Work on feature branches with descriptive names:
  - `feat/button-secondary`
  - `fix/input-focus-ring`
  - `chore/size-limit`
- Open PRs into `main`.
- PR requirements:
  - CI green (build, typecheck, docs build, size‑limit)  
  - At least one approval  
  - Changeset included for user‑visible changes (see below)

**Changesets (release notes & versioning)**
```bash
pnpm changeset        # record changes & select bump
pnpm -w version       # apply versions & create tags
git push --follow-tags
# publish (maintainers)
pnpm -w publish
```

---

## 📜 License

By contributing, you agree that your contributions are licensed under the [MIT License](./LICENSE).
