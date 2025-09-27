import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";

export const meta: StoryDefault = {
  title: "Blocks/EmptyState",
};

export const Default: Story = () => (
  <div className="p-6">
    <div className="rounded-lg border p-8 text-center">
      <h3 className="text-lg font-semibold mb-1">Nothing here yet</h3>
      <p className="text-sm text-muted-foreground">
        Create your first item to get started.
      </p>
    </div>
  </div>
);