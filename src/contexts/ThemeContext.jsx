import { createContext, useContext, useState } from "react";
import { themes } from "@consts/Theme";

const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("contrast");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "contrast" : "light"));
  };

  const current = themes[themeName] || themes.light;

  return (
    <ThemeContext.Provider
      value={{
        theme: current.colors,
        themeName,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
