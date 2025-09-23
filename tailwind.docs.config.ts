import type { Config } from "tailwindcss";
import { preset } from "@unhq/tailwind-preset";

export default {
  content: [
    "./apps/docs/src/**/*.{ts,tsx}",
    "./packages/ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [preset]
} satisfies Config;
