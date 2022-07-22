import { useEffect, useState } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import "../styles/ThemeToggler.css";

//Switch pour changer de theme
const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";
  const icon = nextTheme === "light" ? <IoMoonSharp /> : <IoMoonOutline />;

  useEffect(() => {
  //la valeur est stacker dans le local storage
    const storedTheme = localStorage.getItem("data-theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(nextTheme);
    localStorage.setItem("data-theme", nextTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      <span className="icon">{icon}</span>
      {`${nextTheme} Mode`}
    </button>
  );
};

export default ThemeToggler;
