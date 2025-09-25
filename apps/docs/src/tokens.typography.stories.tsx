import * as React from "react";
import type { StoryDefault } from "@ladle/react";

const SIZES = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
];

export const Typography = () => (
  <div className="space-y-3">
    {SIZES.map((cls) => (
      <div key={cls} className={cls}>
        {cls} — The quick brown fox jumps over the lazy dog.
      </div>
    ))}
  </div>
);

export default {
  title: "Tokens/Typography",
  meta: {
    globalStates: {
      mode: { defaultValue: "light", values: ["light", "dark"] },
      theme: { defaultValue: "", values: ["", "theme-brandA", "theme-brandB"] },
    },
  },
} satisfies StoryDefault;