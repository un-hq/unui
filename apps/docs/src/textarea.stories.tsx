import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Label, Textarea } from "@unhq/ui";

export default { title: "Form/Textarea" } satisfies StoryDefault;

export const Basic: Story = () => (
  <div style={{ padding: 16, display: "grid", gap: 8 }}>
    <Label htmlFor="bio">Bio</Label>
    <Textarea id="bio" placeholder="Write something..." rows={4} />
  </div>
);

export const Invalid: Story = () => (
  <div style={{ padding: 16, display: "grid", gap: 8 }}>
    <Label htmlFor="err">With error style</Label>
    <Textarea id="err" placeholder="Oops..." rows={3} invalid />
  </div>
);
