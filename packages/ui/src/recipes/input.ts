import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-foreground " +
    "shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium " +
    "placeholder:text-muted-foreground " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:cursor-not-allowed disabled:opacity-50 ring-offset-background",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base"
      },
      invalid: {
        true: "border-destructive focus-visible:ring-destructive",
        false: ""
      }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);

export type InputVariantProps = VariantProps<typeof inputVariants>;
