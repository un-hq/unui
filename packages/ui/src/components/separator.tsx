import * as React from "react";
import * as RSeparator from "@radix-ui/react-separator";
import { cn } from "../utils/cn";

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof RSeparator.Root> {}

export const Separator = React.forwardRef<React.ElementRef<typeof RSeparator.Root>, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <RSeparator.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = "Separator";
