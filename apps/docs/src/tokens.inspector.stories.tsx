import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import preset from "@unhq/tailwind-preset";

// Use a default export (not a named `meta`) to avoid ID collisions.
export default {
  title: "Tokens/Inspector",
} satisfies StoryDefault;

export const TailwindPresetJSON: Story = () => {
  return (
    <div className="p-6 space-y-4">
      <p className="text-sm text-muted-foreground">
        This shows the resolved Tailwind preset you publish. Useful to spot breaking changes.
      </p>
      <pre className="p-4 rounded-lg border bg-muted/40 overflow-x-auto text-xs">
        {JSON.stringify(preset, null, 2)}
      </pre>
    </div>
  );
};