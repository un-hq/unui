import { twMerge } from "tailwind-merge";

/**
 * Merge class names while resolving Tailwind conflicts.
 * Accepts strings and common falsy values you might pass conditionally.
 */
export function cn(
  ...inputs: Array<string | false | null | undefined>
) {
  return twMerge(inputs.filter(Boolean).join(" "));
}