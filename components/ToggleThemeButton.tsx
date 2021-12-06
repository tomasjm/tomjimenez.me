import Button from "./Button";
import useDarkMode from "../hooks/useDarkMode";
import { FaSun, FaMoon } from "react-icons/fa";
const ToggleThemeButton: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <Button
      ariaLabel="Botón de cambio de tema"
      onClick={toggleTheme}
      className="text-white font-bold p-2 rounded bg-gray-800 dark:bg-purple-600"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ToggleThemeButton;
