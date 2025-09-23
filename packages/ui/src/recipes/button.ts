import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button variants map — tokens drive colors via Tailwind utilities
 * Visual variants: solid, outline, ghost, link
 * Size variants: sm, md, lg, icon
 * Radius variants: default, pill
 */
export const buttonVariants = cva(
  // base
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "ring-offset-background rounded-md", // radius comes from tokens via Tailwind preset
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground hover:opacity-95",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost:
          "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link:
          "bg-transparent underline-offset-4 hover:underline text-primary",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10 p-0"
      },
      radius: {
        default: "rounded-md",
        pill: "rounded-full"
      }
    },
    compoundVariants: [
      // example: ghost+link tweaks could go here later
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "default"
    }
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
