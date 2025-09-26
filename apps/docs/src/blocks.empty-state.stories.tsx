import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { EmptyState } from "@unhq/blocks";

export default {
  title: "Blocks/EmptyState",
} satisfies StoryDefault;

export const Basic: Story = () => (
  <div className="p-6">
    <EmptyState onAction={() => alert("Create clicked")} />
  </div>
);

export const WithIcon: Story = () => (
  <div className="p-6">
    <EmptyState
      icon={<span aria-hidden>📄</span>}
      title="No documents"
      description="Create your first document to get started."
      actionLabel="New document"
      onAction={() => alert("new…")}
    />
  </div>
);
