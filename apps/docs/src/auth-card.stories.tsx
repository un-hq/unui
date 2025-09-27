import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { AuthCard } from "@unhq/blocks";

export const meta: StoryDefault = {
  title: "Blocks/AuthCard",
};

export const Default: Story = () => (
  <div className="p-6 max-w-sm">
    <AuthCard
      title="Sign in"
      subtitle="Welcome back"
      onSubmit={async (values) => console.log(values)}
      submitLabel="Continue"
    />
  </div>
);