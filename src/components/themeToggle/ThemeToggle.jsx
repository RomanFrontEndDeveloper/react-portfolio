import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("saved-theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("dark-theme", savedTheme === "dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.body.classList.toggle("dark-theme", newTheme === "dark");

    localStorage.setItem("saved-theme", newTheme);
  };

  return (
    <div className="them-btn" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ThemeToggle;
