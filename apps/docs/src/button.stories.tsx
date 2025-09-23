import * as React from "react";
import { Button } from "@unhq/ui";
import type { StoryDefault, Story } from "@ladle/react";

export const Default: Story = () => (
  <div className="space-x-3">
    <Button>Solid</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);

export const Sizes: Story = () => (
  <div className="space-x-3">
    <Button size="sm">Small</Button>
    <Button>Medium</Button>
    <Button size="lg">Large</Button>
    <Button radius="pill">Pill</Button>
  </div>
);

export default {
  meta: {
    title: "Core/Button",
  },
} satisfies StoryDefault;
