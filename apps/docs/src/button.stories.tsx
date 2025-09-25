import * as React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "@unhq/ui";

export default {
  title: "UI/Button",
} satisfies StoryDefault;

export const Primary: Story = () => (
  <div style={{ padding: 16 }}>
    <Button>Primary</Button>
  </div>
);

export const Variants: Story = () => (
  <div style={{ display: "grid", gap: 12, padding: 16 }}>
    <Button>Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);
