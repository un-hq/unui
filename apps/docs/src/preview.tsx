import React from "react";
import type { GlobalProvider, Story } from "@ladle/react";
import "@unhq/tokens/styles.css"; // ensure tokens are available in all stories
import "../src/styles.css"; // (optional) your docs-specific css

export const globalState = {
  mode: "light" as "light" | "dark",
  theme: "" as "" | "theme-brandA" | "theme-brandB",
};

export const Controls: React.FC = () => null;

export const Provider: GlobalProvider = ({ children, globalState }) => {
  React.useEffect(() => {
    const html = document.documentElement;

    // remove previous theme & dark classes
    html.className = html.className
      .split(" ")
      .filter((c) => c && c !== "dark" && !c.startsWith("theme-"))
      .join(" ");

    if (globalState.mode === "dark") {
      html.classList.add("dark");
    }
    if (globalState.theme) {
      html.classList.add(globalState.theme);
    }
  }, [globalState.mode, globalState.theme]);

  return <>{children}</>;
};

// Optional: toggle viewport background to follow tokens
export const decorators = [] as Story[];