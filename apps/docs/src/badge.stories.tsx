import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Badge } from "@unhq/ui";

export default { title: "Data/Badge" } satisfies StoryDefault;

export const Variants: Story = () => (
  <div style={{ padding: 16, display: "flex", gap: 8 }}>
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);
