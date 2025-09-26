import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { AuthCard } from "@unhq/blocks";

export const meta: StoryDefault = { title: "Blocks/AuthCard" };

export const Basic: Story = () => (
  <div className="p-6">
    <AuthCard
      title="Welcome back"
      description="Sign in to your account"
      providers={[
        { id: "github", label: "Continue with GitHub", onClick: () => alert("GH") },
        { id: "google", label: "Continue with Google", onClick: () => alert("Google") },
      ]}
      footer={<div className="text-xs text-muted-foreground">No account? <a className="underline" href="#">Create one</a></div>}
    />
  </div>
);