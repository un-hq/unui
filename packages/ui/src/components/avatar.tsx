import * as React from "react";
import * as RAvatar from "@radix-ui/react-avatar";
import { cn } from "../utils/cn";

export const Avatar = React.forwardRef<
  React.ElementRef<typeof RAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof RAvatar.Root>
>(({ className, ...props }, ref) => (
  <RAvatar.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof RAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof RAvatar.Image>
>(({ className, ...props }, ref) => (
  <RAvatar.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof RAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <RAvatar.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground", className)}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
