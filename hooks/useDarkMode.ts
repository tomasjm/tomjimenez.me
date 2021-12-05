import { useEffect, useState } from "react";

type DarkModeHook = () => [string, () => void];
type ToggleThemeFunction = () => void;
// Toggle dark mode tailwindcss
const useDarkMode: DarkModeHook = () => {
  const [theme, setTheme] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.classList.remove(theme === "light" ? "dark" : "light");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  useEffect(() => {
    getStoredTheme();
    setMounted(true);
  }, []);

  const getStoredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  };
  const toggleTheme: ToggleThemeFunction = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return [theme, toggleTheme];
};

export default useDarkMode;
