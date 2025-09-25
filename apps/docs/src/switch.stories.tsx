import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Label, Switch } from "@unhq/ui";

export default { title: "Form/Switch" } satisfies StoryDefault;

export const Basic: Story = () => (
  <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
    <Switch id="airplane" />
    <Label htmlFor="airplane">Airplane mode</Label>
  </div>
);
