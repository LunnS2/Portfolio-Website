import React, { useEffect, useState } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; //dark theme default
    // return savedTheme === "dark";  // light theme default
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prevIsDark) => !prevIsDark);
  }

  return (
    <div className="p-2 lg:p-4 px-2 lg:px-4 fixed bottom-0 left-0">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full transition-colors duration-300
          ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <span>
          {isDark ? (
            <Brightness7 className="h-6 w-6" />
          ) : (
            <Brightness4 className="h-6 w-6" />
          )}
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle;
