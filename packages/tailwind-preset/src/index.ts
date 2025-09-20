export const preset = {
    darkMode: ["class"],
    theme: {
      extend: {
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)"
        },
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))"
        }
      }
    },
    plugins: []
  } as const;
  