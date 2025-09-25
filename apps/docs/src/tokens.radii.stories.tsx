import * as React from "react";
import type { StoryDefault } from "@ladle/react";

const RADII = ["rounded-none", "rounded-sm", "rounded", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl"];

export const Radii = () => (
  <div className="flex flex-wrap gap-4">
    {RADII.map((r) => (
      <div key={r} className={`h-16 w-24 bg-bg border border-muted ${r}`} />
    ))}
  </div>
);

export default {
  title: "Tokens/Radii",
  meta: {
    globalStates: {
      mode: { defaultValue: "light", values: ["light", "dark"] },
      theme: { defaultValue: "", values: ["", "theme-brandA", "theme-brandB"] },
    },
  },
} satisfies StoryDefault;