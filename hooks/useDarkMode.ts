import { useEffect, useState } from "react";

type DarkModeHook = () => [string, () => void];
type ToggleThemeFunction = () => void;
// Toggle dark mode tailwindcss
const useDarkMode: DarkModeHook = () => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);
  const toggleTheme: ToggleThemeFunction = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return [theme, toggleTheme];
};

export default useDarkMode;
