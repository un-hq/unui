import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";

// Tailwind classes we want to preview. Adjust to your preset names.
const roles = [
  { name: "Background", bg: "bg-background", text: "text-foreground", border: "border-border" },
  { name: "Card", bg: "bg-card", text: "text-card-foreground", border: "border-border" },
  { name: "Muted", bg: "bg-muted", text: "text-muted-foreground", border: "border-border" },
  { name: "Primary", bg: "bg-primary", text: "text-primary-foreground", border: "border-primary" },
  { name: "Secondary", bg: "bg-secondary", text: "text-secondary-foreground", border: "border-secondary" },
  { name: "Destructive", bg: "bg-destructive", text: "text-destructive-foreground", border: "border-destructive" },
  { name: "Accent", bg: "bg-accent", text: "text-accent-foreground", border: "border-accent" },
  { name: "Popover", bg: "bg-popover", text: "text-popover-foreground", border: "border-border" },
  { name: "Input", bg: "bg-input", text: "text-foreground", border: "border-input" },
];

// Use a default export (not a named `meta`) to avoid ID collisions.
export default {
  title: "Tokens/Colors",
} satisfies StoryDefault;

export const Palette: Story = () => {
  return (
    <div className="p-6 space-y-6">
      <p className="text-sm text-muted-foreground">
        Colors reflect your <code>tokens</code> → <code>@unhq/tailwind-preset</code>. Toggle light/dark in the
        Ladle toolbar to verify.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r) => (
          <div key={r.name} className={`rounded-xl border ${r.border} overflow-hidden`}>
            <div className={`p-6 ${r.bg} ${r.text}`}>
              <div className="text-sm opacity-80">{r.name}</div>
              <div className="text-2xl font-semibold">Aa</div>
            </div>
            <div className="px-4 py-3 text-xs border-t bg-muted/40 text-muted-foreground">
              <code>{r.bg}</code>, <code>{r.text}</code>, <code>{r.border}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};