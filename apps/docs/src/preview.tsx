// apps/docs/src/preview.tsx
import type { GlobalProvider } from "@ladle/react";
// If your docs need additional CSS (e.g., tokens CSS), import it here:
// import "@unhq/tokens/dist/styles.css";
// import "./globals.css";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const html = document.documentElement;

  // 1) Light/Dark toggle from Ladle's globalState
  html.classList.toggle("dark", globalState.mode === "dark");

  // 2) (Optional) support theme variants like "theme-ocean"
  const keep = html.className
    .split(" ")
    .filter((c) => !c.startsWith("theme-") && c !== "dark")
    .join(" ")
    .trim();
  html.className = keep;
  // Example if you expose a theme selector in Ladle globals:
  // if (globalState.theme) html.classList.add(globalState.theme);

  return children;
};