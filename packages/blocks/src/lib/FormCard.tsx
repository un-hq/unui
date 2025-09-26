import * as React from "react";
import type { FormHTMLAttributes, FormEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Label } from "@unhq/ui";

type FormCardProps = {
  title?: string;
  description?: string;
  submitLabel?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export function FormCard({
  title = "Sign in",
  description = "Use your email and password",
  submitLabel = "Continue",
  onSubmit,
  className,
  children,
  ...formProps
}: FormCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>

      {/* IMPORTANT: use <form> and forward onSubmit & form props */}
      <form onSubmit={onSubmit} {...formProps}>
        <CardContent className="space-y-4">
          {/* example fields; keep or replace with your slots */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>

          {children /* allow extra fields/slots */}
        </CardContent>

        <CardFooter className="justify-end">
          <Button type="submit" variant="solid">
            {submitLabel}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}