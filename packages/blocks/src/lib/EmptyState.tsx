import * as React from "react";
import { Button } from "@unhq/ui";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export function EmptyState({
  title = "Nothing here yet",
  description = "Get started by creating your first item.",
  actionLabel = "Create",
  onAction,
  icon,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 rounded-xl border bg-card ${className ?? ""}`}
      {...props}
    >
      <div className="mb-3 opacity-70">{icon ?? <span aria-hidden>🟡</span>}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground max-w-sm">{description}</p>
      {onAction ? (
        <Button className="mt-4" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
