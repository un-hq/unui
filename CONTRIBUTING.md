# Contributing to UnUI

Thank you for your interest in contributing 🎉

We welcome contributions from everyone.  
Here’s how to get started:

## 🛠 Development Setup

1. Clone the repo:
   ```bash
   git clone git@github.com:un-hq/unui.git
   cd unui
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the local dev docs:
   ```bash
   pnpm -C apps/docs dev
   ```

4. Build packages before testing changes:
   ```bash
   pnpm -w build
   ```

---

## 📦 Adding a Component

1. Create a new component inside `packages/ui/src/components/`.
2. Export it from `packages/ui/src/index.ts`.
3. Add a Story in `apps/docs/src/`.
4. Run `pnpm -w build` and confirm the component is bundled correctly.

---

## 🎨 Theming

- Universal design tokens are stored in `packages/tokens/`.
- Tailwind config is centralized in `packages/tailwind-preset/`.
- When adding a new component, ensure it respects theme tokens.

---

## ✅ Code Quality

- Run type checks:
  ```bash
  pnpm -w typecheck
  ```

- Run lint (placeholder, will expand later):
  ```bash
  pnpm -w lint
  ```

---

## 📋 Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/). Examples:

- `feat(button): add secondary variant`
- `fix(input): resolve focus ring bug`
- `chore: update dependencies`

---

## 📢 Issues and Discussions

- Use **Issues** for bugs and feature requests.
- Use **Discussions** for ideas and proposals.

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
