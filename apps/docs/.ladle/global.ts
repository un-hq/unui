export const globalArgs = {
    theme: "theme-indigo",
  };
  
  export const globalArgTypes = {
    theme: {
      name: "Theme",
      description: "Brand theme class on <html>",
      options: ["", "theme-indigo", "theme-blue", "theme-amber"],
      control: { type: "select" },
    },
  };
  