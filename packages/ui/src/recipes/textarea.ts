import { cva, type VariantProps } from "class-variance-authority";

export const textareaVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-foreground shadow-sm transition-colors " +
    "placeholder:text-muted-foreground " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:cursor-not-allowed disabled:opacity-50 ring-offset-background",
  {
    variants: {
      size: {
        sm: "min-h-[2.25rem] p-2 text-sm",
        md: "min-h-[2.5rem] p-3 text-sm",
        lg: "min-h-[2.75rem] p-3.5 text-base"
      },
      invalid: {
        true: "border-destructive focus-visible:ring-destructive",
        false: ""
      }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);

export type TextareaVariantProps = VariantProps<typeof textareaVariants>;
