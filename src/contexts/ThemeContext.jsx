import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themes } from "@consts/Theme";

const ThemeContext = createContext({});
const STORAGE_KEY = "@app:theme";

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTheme() {
      try {
        const storedTheme = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTheme) {
          setThemeName(storedTheme);
        }
      } catch (error) {
        console.warn("Erro ao carregar tema:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const nextTheme = themeName === "light" ? "contrast" : "light";
    setThemeName(nextTheme);

    try {
      await AsyncStorage.setItem(STORAGE_KEY, nextTheme);
    } catch (error) {
      console.warn("Erro ao salvar tema:", error);
    }
  };

  const current = themes[themeName] || themes.light;

  if (loading) return null;

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
