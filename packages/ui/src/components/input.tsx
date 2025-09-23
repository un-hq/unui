import * as React from "react";
import { cn } from "../utils/cn";
import { inputVariants, type InputVariantProps } from "../recipes/input";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, // omit native numeric size
    InputVariantProps {}

/**
 * Token-aware input with size + invalid variants.
 * - Uses Tailwind utilities + CSS variables (from @unhq/tokens)
 * - No global CSS
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, invalid }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
