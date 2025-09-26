import * as React from "react";
import type { FormHTMLAttributes } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@unhq/ui";

type FormCardProps = {
  title?: string;
  description?: string;
  submitLabel?: string;
  cancelLabel?: string;
  /** Show loading state on the submit button */
  loading?: boolean;
} & FormHTMLAttributes<HTMLFormElement>; // 👈 extend FORM attributes, not DIV

export function FormCard({
  title,
  description,
  submitLabel = "Continue",
  cancelLabel = "Cancel",
  loading = false,
  className,
  children,
  onSubmit,
  ...formProps
}: FormCardProps) {
  return (
    <Card className={className}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}

      <CardContent>
        {/* Use a real <form/> so onSubmit typings line up */}
        <form onSubmit={onSubmit} {...formProps}>
          {children}
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        {/* Use a valid variant from @unhq/ui */}
        <Button type="button" variant="ghost">
          {cancelLabel}
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting…" : submitLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
