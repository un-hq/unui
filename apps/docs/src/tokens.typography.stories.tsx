import * as React from "react";
import type { StoryDefault, Story } from "@ladle/react";

const sizes = [
  { class: "text-xs", label: "xs" },
  { class: "text-sm", label: "sm" },
  { class: "text-base", label: "base" },
  { class: "text-lg", label: "lg" },
  { class: "text-xl", label: "xl" },
  { class: "text-2xl", label: "2xl" },
  { class: "text-3xl", label: "3xl" },
  { class: "text-4xl", label: "4xl" },
];

const weights = [
  { class: "font-light", label: "light" },
  { class: "font-normal", label: "normal" },
  { class: "font-medium", label: "medium" },
  { class: "font-semibold", label: "semibold" },
  { class: "font-bold", label: "bold" },
];

export const meta: StoryDefault = {
  title: "Tokens/Typography",
};

export const Scale: Story = () => (
  <div className="p-6 space-y-8">
    <section>
      <h3 className="mb-2 text-sm text-muted-foreground">Font sizes</h3>
      <div className="grid gap-2">
        {sizes.map((s) => (
          <div key={s.class} className="flex items-baseline gap-4">
            <code className="w-24 text-xs text-muted-foreground">{s.class}</code>
            <div className={s.class}>The quick brown fox</div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h3 className="mb-2 text-sm text-muted-foreground">Font weights</h3>
      <div className="grid gap-2">
        {weights.map((w) => (
          <div key={w.class} className="flex items-baseline gap-4">
            <code className="w-24 text-xs text-muted-foreground">{w.class}</code>
            <div className={w.class}>The quick brown fox</div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h3 className="mb-2 text-sm text-muted-foreground">Line height (leading)</h3>
      <div className="grid gap-3">
        {["leading-none","leading-tight","leading-snug","leading-normal","leading-relaxed","leading-loose"].map((lh) => (
          <div key={lh} className="flex gap-4">
            <code className="w-36 text-xs text-muted-foreground">{lh}</code>
            <p className={`max-w-prose ${lh}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);