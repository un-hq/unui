import * as React from "react";
import type { StoryDefault } from "@ladle/react";

const SWATCHES = [
  "bg",
  "fg",
  "muted",
  "accent",
  "accent-fg",
  "border",
  "ring",
] as const;

export const Colors = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {SWATCHES.map((name) => (
      <div key={name} className="rounded-lg border border-muted p-3">
        <div
          className={`h-16 w-full rounded-md bg-${name}`}
          style={
            // fallback in case class isn’t generated
            { backgroundColor: `rgb(var(--color-${name}) / 1)` } as any
          }
        />
        <div className="mt-2 text-sm text-muted">{name}</div>
      </div>
    ))}
  </div>
);

export default {
  title: "Tokens/Colors",
  meta: {
    // controls in Ladle UI
    globalStates: {
      mode: { defaultValue: "light", values: ["light", "dark"] },
      theme: {
        defaultValue: "",
        values: ["", "theme-brandA", "theme-brandB"],
      },
    },
  },
} satisfies StoryDefault;