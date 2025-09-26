import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { EmptyState } from "@unhq/blocks";

export const meta: StoryDefault = { title: "Blocks/EmptyState" };

export const Basic: Story = () => (
  <div className="p-6">
    <EmptyState
      title="No projects"
      description="Create your first project to get started."
      action={{ label: "New project", onClick: () => alert("Create") }}
    />
  </div>
);