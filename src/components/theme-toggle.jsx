import React, { useEffect, useState } from "react";

function ThemeToggle() {
    
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        
        document.documentElement.classList.toggle("dark",isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    function toggleTheme() {
        setIsDark(prevIsDark => !prevIsDark);
    };

    return (
        <div className="p-2 lg:p-4 px-2 lg:px-4 fixed bottom-0 left-0">
            <button onClick={toggleTheme} 
            className="p-2 border border-gray-600 hover:border-gray-800 rounded text-gray-600 hover:text-gray-800 transition-colors duration-300">
              {isDark? "Light Theme" : "Dark Theme"}
            </button>
        </div>
    );
};

export default ThemeToggle;