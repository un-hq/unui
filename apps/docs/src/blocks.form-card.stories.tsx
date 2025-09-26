import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { FormCard } from "@unhq/blocks";
import { Input, Label, Textarea, Switch } from "@unhq/ui";

export const meta: StoryDefault = {
  title: "Blocks/FormCard",
};

export const ProfileEdit: Story = () => (
  <div className="max-w-2xl mx-auto p-6">
    <FormCard
      title="Profile"
      description="Update basic information."
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitted");
      }}
      secondaryLabel="Cancel"
      onSecondaryClick={() => alert("Cancelled")}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" rows={4} />
      </div>

      <div className="flex items-center gap-2">
        <Switch id="public" />
        <Label htmlFor="public">Make profile public</Label>
      </div>
    </FormCard>
  </div>
);
