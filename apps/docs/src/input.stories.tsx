import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Label, Input } from "@unhq/ui";

export default { title: "Form/Input" } satisfies StoryDefault;

export const Basic: Story = () => (
  <div style={{ padding: 16, display: "grid", gap: 8 }}>
    <Label htmlFor="email">Email</Label>
    <Input id="email" placeholder="name@example.com" />
  </div>
);

export const Sizes: Story = () => (
  <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
    <Input placeholder="sm" size="sm" style={{ width: 180 }} />
    <Input placeholder="md" size="md" style={{ width: 200 }} />
    <Input placeholder="lg" size="lg" style={{ width: 220 }} />
  </div>
);
