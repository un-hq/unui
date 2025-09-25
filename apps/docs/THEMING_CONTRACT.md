# UnUI Theming Contract

This document describes how tokens, Tailwind preset, and components agree on **naming**, **scope**, and **override rules** so themes stay consistent across apps.

## Layers
1. **Tokens (`@unhq/tokens`)**
   - Provides CSS variables (custom properties).
   - Split into primitive (raw hue/sat/light) and semantic (bg/fg/muted/accent/etc.).
   - Example:
     ```css
     :root {
       --radius: 0.5rem;
       --bg: 0 0% 100%;
       --fg: 222.2 84% 4.9%;
       --muted: 210 40% 96.1%;
       --accent: 221.2 83.2% 53.3%;
     }
     html.dark {
       --bg: 222.2 84% 4.9%;
       --fg: 0 0% 98%;
       --muted: 217.2 32.6% 17.5%;
       --accent: 217.2 91.2% 59.8%;
     }
     ```

2. **Preset (`@unhq/tailwind-preset`)**
   - Maps CSS variables → Tailwind theme tokens.
   - Ensures utilities like `bg-bg`, `text-fg`, `rounded-[var(--radius)]` resolve consistently.
   - Consumers include the preset in `tailwind.config.ts` and import the tokens CSS once.

3. **Components (`@unhq/ui`)**
   - Use Tailwind class utilities derived from the preset (no hardcoded hex).
   - Never reference private variables directly; rely on Tailwind theme keys.
   - Variants implemented via `class-variance-authority` + `tailwind-merge`.

## Scoping & Overrides
- Theme scope is applied via classes on `html` or a container:
  ```html
  <html class="dark theme-unhq">
  ```
- App-level overrides define a **theme namespace**:
  ```css
  .theme-brand-x {
    --radius: 0.75rem;
    --accent: 271 81% 56%;
  }
  ```
- Any descendant component picks up new values automatically.

## Adding New Tokens
- Prefer semantic names used by components (`--accent`, `--muted`, `--destructive`, etc.).
- Update `@unhq/tailwind-preset` mapping so Tailwind utilities stay in sync.
- Document the new variable in this contract.

## Backwards Compatibility
- Avoid renaming or removing variables; deprecate with a release note.
- If you must change a variable, provide a fallback or a migration note in the changelog.

## Example: Button
- Semantic references:
  - Default: `bg-accent text-accent-foreground`
  - Ghost: `bg-transparent hover:bg-muted`
  - Destructive: `bg-destructive text-destructive-foreground`

As long as the theme defines `--accent`, `--accent-foreground`, `--muted`, etc., the Button will render correctly in any theme scope.
