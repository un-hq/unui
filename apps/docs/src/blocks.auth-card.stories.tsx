import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { AuthCard } from "@unhq/blocks";
import { Separator } from "@unhq/ui";

export default {
  title: "Blocks/AuthCard",
} satisfies StoryDefault;

export const Basic: Story = () => (
  <div className="max-w-sm mx-auto p-6">
    <AuthCard
      footerSlot={
        <div className="text-sm text-muted-foreground">
          <span>New here?</span> <a href="#" className="underline">Create an account</a>
        </div>
      }
      onSubmit={async (values) => {
        console.log(values);}}
    />
  </div>
);

export const CustomChildren: Story = () => (
  <div className="max-w-sm mx-auto p-6">
    <AuthCard title="Sign up" description="Create your account" footerSlot={<Separator />}>
      <div>Put any custom form here (e.g., name + email + password + terms)</div>
    </AuthCard>
  </div>
);
