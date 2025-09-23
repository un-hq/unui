import * as React from "react";
import { Label, Input, Textarea, Switch, Select, SelectTrigger, SelectContent, SelectItem, SelectValue, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Separator } from "@unhq/ui";
import type { StoryDefault, Story } from "@ladle/react";

export const FormDemo: Story = () => (
  <div className="space-y-6">
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Token-aware, accessible components</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Write something..." />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Enable something</span>
          <Switch defaultChecked />
        </div>
        <div className="space-y-1.5">
          <Label>Fruit</Label>
          <Select defaultValue="apple">
            <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Badge variant="secondary">Secondary</Badge>
        <Separator orientation="vertical" />
        <Badge>Default</Badge>
      </CardFooter>
    </Card>
  </div>
);

export default {
  meta: { title: "Core/Form" },
} satisfies StoryDefault;
