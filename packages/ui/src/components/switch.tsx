import * as React from "react";
import * as RSwitch from "@radix-ui/react-switch";
import { cn } from "../utils/cn";

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, { root: string; thumb: string }> = {
  sm: { root: "h-5 w-9",  thumb: "h-4 w-4 translate-x-0.5 data-[state=checked]:translate-x-[18px]" },
  md: { root: "h-6 w-11", thumb: "h-5 w-5 translate-x-1   data-[state=checked]:translate-x-[22px]" },
  lg: { root: "h-7 w-14", thumb: "h-6 w-6 translate-x-1.5 data-[state=checked]:translate-x-[28px]" }
};

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof RSwitch.Root> {
  size?: Size;
}

export const Switch = React.forwardRef<React.ElementRef<typeof RSwitch.Root>, SwitchProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sz = sizeClasses[size];
    return (
      <RSwitch.Root
        ref={ref}
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent " +
            "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
            "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-background " +
            "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          sz.root,
          className
        )}
        {...props}
      >
        <RSwitch.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-background shadow-sm ring-0 transition-transform",
            sz.thumb
          )}
        />
      </RSwitch.Root>
    );
  }
);
Switch.displayName = "Switch";
