import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Label, Input } from "@unhq/ui";

export default { title: "Form/Label" } satisfies StoryDefault;

export const Basic: Story = () => (
  <div style={{ padding: 16, display: "grid", gap: 8 }}>
    <Label htmlFor="name">Name</Label>
    <Input id="name" placeholder="Jane Doe" />
  </div>
);
