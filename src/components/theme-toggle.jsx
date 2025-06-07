import { useEffect, useState } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prevIsDark) => !prevIsDark);
  }

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full transition-colors duration-300
        ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {isDark ? <Brightness7 className="h-6 w-6" /> : <Brightness4 className="h-6 w-6" />}
    </button>
  );
}

export default ThemeToggle;
