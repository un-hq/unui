import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Avatar, AvatarImage, AvatarFallback } from "@unhq/ui";

export default { title: "Data/Avatar" } satisfies StoryDefault;

export const Basic: Story = () => (
  <div style={{ padding: 16 }}>
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/100?img=3" alt="User" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  </div>
);
