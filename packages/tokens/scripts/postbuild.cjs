const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const src = path.join(root, "src", "styles.css");

fs.mkdirSync(dist, { recursive: true });

// Copy CSS to dist for export "./styles.css"
fs.copyFileSync(src, path.join(dist, "styles.css"));

// Minimal .d.ts so consumers can import the CSS in TS projects
fs.writeFileSync(
  path.join(dist, "styles.css.d.ts"),
  "declare const css: string;\nexport default css;\n"
);