# Theming Contract

This document defines how **design tokens** power Tailwind utilities and components.

## 1) Tokens (`@unhq/tokens`)

- CSS variables for **light** and **dark** under `:root` and `.dark`.
- Examples:
  - `--bg`, `--fg`
  - `--muted`, `--muted-foreground`
  - `--accent`, `--accent-foreground`
  - `--radius-sm|md|lg`
  - `--ring`, `--ring-offset`
  - `--shadow-sm|md|lg`
  - `--space-1..n` (optional spacing scale)

`styles.css` includes both themes and should be imported once in the app.

## 2) Tailwind preset (`@unhq/tailwind-preset`)

Maps tokens to Tailwind theme keys:

```ts
theme: {
  colors: {
    bg: 'var(--bg)',
    fg: 'var(--fg)',
    muted: 'var(--muted)',
    'muted-foreground': 'var(--muted-foreground)',
    accent: 'var(--accent)',
    'accent-foreground': 'var(--accent-foreground)',
    ring: 'var(--ring)',
  },
  borderRadius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
  },
  boxShadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },
}
```

Utilities like `bg-bg`, `text-fg`, `border-muted`, `shadow-md`, `ring-1` now resolve to tokens.

## 3) Components (`@unhq/ui`)

- Never hard‑code colors or radii.
- Use only utilities derived from the preset (e.g., `bg-bg`, `text-fg`, `rounded-md`, `ring-ring`).
- Variant systems (CVA) can switch classes, but the classes must be token-backed.

## 4) Adding/changing tokens

1. Add variable(s) in **tokens** (light + dark).
2. Map variable(s) in **preset**.
3. Refactor UI to use the mapped utilities.
4. Add/adjust **Ladle stories** to visualize.
5. Create a **Changeset** (minor for additive, major for rename/removal).

## 5) Validating in Ladle

Use controls to toggle `mode: light/dark` and a custom theme class (`theme-*`). Visual stories exist for:
- Colors
- Typography
- Radii
- Spacing
- Borders
- Rings
- Shadows
- Z-index

Each story renders a grid preview for quick regression checks.
