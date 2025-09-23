import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-md border text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-transparent border-border text-foreground",
        destructive: "bg-destructive text-destructive-foreground"
      },
      size: {
        sm: "h-5 px-2",
        md: "h-6 px-2.5",
        lg: "h-7 px-3"
      }
    },
    defaultVariants: { variant: "default", size: "md" }
  }
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
