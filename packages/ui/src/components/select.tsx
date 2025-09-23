import * as React from "react";
import * as RSelect from "@radix-ui/react-select";
import { cn } from "../utils/cn";

export const Select = RSelect.Root;
export const SelectGroup = RSelect.Group;
export const SelectValue = RSelect.Value;

export interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof RSelect.Trigger> {}
export const SelectTrigger = React.forwardRef<React.ElementRef<typeof RSelect.Trigger>, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <RSelect.Trigger
      ref={ref}
      className={cn(
        "inline-flex h-10 w-full items-center justify-between rounded-md border border-input bg-background " +
          "px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
          "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </RSelect.Trigger>
  )
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof RSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RSelect.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <RSelect.Portal>
    <RSelect.Content
      ref={ref}
      position={position}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background text-foreground shadow-md",
        className
      )}
      {...props}
    >
      <RSelect.Viewport className={cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")} >
        {children}
      </RSelect.Viewport>
    </RSelect.Content>
  </RSelect.Portal>
));
SelectContent.displayName = "SelectContent";

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RSelect.Label>,
  React.ComponentPropsWithoutRef<typeof RSelect.Label>
>(({ className, ...props }, ref) => (
  <RSelect.Label ref={ref} className={cn("px-2 py-1.5 text-sm font-medium text-muted-foreground", className)} {...props} />
));
SelectLabel.displayName = "SelectLabel";

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof RSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RSelect.Item>
>(({ className, children, ...props }, ref) => (
  <RSelect.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none " +
        "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <RSelect.ItemText>{children}</RSelect.ItemText>
  </RSelect.Item>
));
SelectItem.displayName = "SelectItem";

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof RSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof RSelect.Separator>
>(({ className, ...props }, ref) => (
  <RSelect.Separator ref={ref} className={cn("mx-1 my-1 h-px bg-border", className)} {...props} />
));
SelectSeparator.displayName = "SelectSeparator";
