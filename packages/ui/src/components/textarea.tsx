import * as React from "react";
import { cn } from "../utils/cn";
import { textareaVariants, type TextareaVariantProps } from "../recipes/textarea";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextareaVariantProps {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ size, invalid }), className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
