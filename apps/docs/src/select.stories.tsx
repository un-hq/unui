import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import {
  Select, SelectTrigger, SelectContent, SelectItem, SelectValue
} from "@unhq/ui";

export default { title: "Form/Select" } satisfies StoryDefault;

export const Basic: Story = () => (
  <div style={{ padding: 16 }}>
    <Select>
      <SelectTrigger style={{ width: 220 }}>
        <SelectValue placeholder="Choose a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="mango">Mango</SelectItem>
      </SelectContent>
    </Select>
  </div>
);
