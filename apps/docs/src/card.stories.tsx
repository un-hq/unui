import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@unhq/ui";

export default { title: "Surfaces/Card" } satisfies StoryDefault;

export const Basic: Story = () => (
  <div style={{ padding: 16, maxWidth: 420 }}>
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short description lives here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Body content — put anything here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  </div>
);
