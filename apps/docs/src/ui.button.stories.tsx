import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Button } from "@unhq/ui";

export const Primary: Story = () => <Button>Primary</Button>;
export const Ghost: Story = () => <Button variant="ghost">Ghost</Button>;
export const Destructive: Story = () => (
  <Button variant="destructive">Delete</Button>
);

export default {
  title: "UI/Button",
  meta: {
    globalStates: {
      mode: { defaultValue: "light", values: ["light", "dark"] },
      theme: { defaultValue: "", values: ["", "theme-brandA", "theme-brandB"] },
    },
    description:
      "Public export from @unhq/ui. Avoid deep imports (e.g. @unhq/ui/dist/*).",
  },
} satisfies StoryDefault;