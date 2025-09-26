import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { FormCard } from "@unhq/blocks";
import { Input, Label } from "@unhq/ui";

export const meta: StoryDefault = { title: "Blocks/FormCard" };

export const Basic: Story = () => {
  const [submitted, setSubmitted] = React.useState<{email: string; password: string} | null>(null);

  return (
    <div className="p-6">
      <FormCard
        title="Sign in"
        description="Use your email and password"
        onSubmit={(e) => {
          const form = e.currentTarget;
          const data = new FormData(form);
          setSubmitted({
            email: String(data.get("email") || ""),
            password: String(data.get("password") || ""),
          });
        }}
        footer={submitted ? (
          <div className="text-xs text-muted-foreground">
            Submitted: {submitted.email ? "✓" : "—"}
          </div>
        ) : null}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@acme.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>
      </FormCard>
    </div>
  );
};