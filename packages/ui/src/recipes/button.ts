import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",

        // NEW secondary (uses Tailwind “secondary” role from your preset)
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-9 px-4",
        lg: "h-10 px-6",
      },
      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "md",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

// Optional helper if you expose it elsewhere:
export function buttonClass(
  props: ButtonVariantProps & { className?: string }
) {
  return cn(buttonVariants(props), props.className);
}