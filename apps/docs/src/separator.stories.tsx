import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Separator } from "@unhq/ui";

export default { title: "Layout/Separator" } satisfies StoryDefault;

export const Horizontal: Story = () => (
  <div style={{ padding: 16 }}>
    <p>Section A</p>
    <Separator />
    <p>Section B</p>
  </div>
);
