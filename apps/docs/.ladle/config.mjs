export default {
    // automatically include your global.css in Ladle
    styles: ["src/global.css"],
    // set light/dark/brand classes on <html> if you want to preview themes
    globals: {
      // sample toggles (accessible in the UI controls)
      theme: {
        name: "Theme",
        description: "Brand theme class on <html>",
        defaultValue: "theme-indigo",
        toolbar: {
          items: [
            { value: "", title: "Default" },
            { value: "theme-indigo", title: "Indigo" }
          ]
        }
      },
      mode: {
        name: "Mode",
        description: "Light/Dark",
        defaultValue: "light",
        toolbar: {
          items: [
            { value: "light", title: "Light" },
            { value: "dark", title: "Dark" }
          ]
        }
      }
    }
  };
  