# Tokens Review Checklist

Use this in PRs to enforce **no hard-coded styles** and a clean token pipeline.

## For Reviewers

- [ ] **No hard-coded colors** in components (search for `#`, `rgb`, `hsl`, or non-token Tailwind like `bg-blue-500`). Only token-backed utilities: `bg-bg`, `text-fg`, `border-muted`, `bg-accent`, etc.
- [ ] **No hard-coded radii** (`rounded-[`, pixel values). Use `rounded-sm|md|lg`.
- [ ] **No hard-coded shadows** (`shadow-[`). Use `shadow-sm|md|lg`.
- [ ] **No hard-coded ring colors**. Use `ring-ring` and `ring-offset-bg`.
- [ ] **No deep imports** from `@unhq/ui/dist/*` in docs/apps — only public exports from `@unhq/ui`.
- [ ] **Stories exist** for any new token or visual behavior (light & dark).

## When adding a new token

1. **Define it in tokens** (`@unhq/tokens/styles.css`) for both `:root` (light) and `.dark`.
2. **Map it in Tailwind preset** (`@unhq/tailwind-preset`) so utilities exist.
3. **Refactor components** to use the new utility—never raw CSS values.
4. **Add or update a Ladle story** to visualize the token and its usages.
5. **Create a Changeset**:
   - **minor** when adding tokens
   - **major** when renaming/removing tokens or changing semantics
6. **Run** `pnpm -w typecheck && pnpm -w build && pnpm -C apps/docs dev` (or `build`) to validate.
