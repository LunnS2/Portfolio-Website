import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import ScrollDown from "./scroll-down";

function Activity() {
  // Dark mode state detection
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    setIsDark(htmlElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(htmlElement.classList.contains("dark"));
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Year selection logic
  const startYear = 2024;
  const currentYearValue = new Date().getFullYear();
  const years = [];
  for (let year = startYear; year <= currentYearValue; year++) {
    years.push(year);
  }

  const [selectedYear, setSelectedYear] = useState(currentYearValue.toString());

  const explicitTheme = {
    light: ["#F0F0F0", "#C0C0C0", "#A0A0A0", "#707070", "#303030"],
    dark: ["#222222", "#444444", "#666666", "#888888", "#B0B0B0"],
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center p-12 text-black dark:text-white bg-white dark:bg-black transition-colors duration-300 relative"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Activity</h2>
          <p className="text-lg mb-8">
            During self-directed study, I started using GitHub and remained
            consistent.
          </p>
        </div>

        {/* Year Selector as Buttons */}
        <div className="flex flex-wrap gap-4 p-6 justify-center">
          {years.map((year) => (
            <div key={year}>
              <button
                onClick={() => setSelectedYear(year.toString())}
                className={`flex items-center justify-center px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 ${
                  selectedYear === year.toString()
                    ? "bg-gray-200 text-black dark:bg-neutral-700 dark:text-white"
                    : "bg-gray-100 dark:bg-neutral-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700"
                }`}
              >
                {year}
              </button>
            </div>
          ))}
        </div>

        {/* GitHub Activity Graph */}
        <div className="mt-8 flex justify-center">
          <GitHubCalendar
            username="LunnS2"
            hideTotalCount
            theme={explicitTheme}
            colorScheme={isDark ? "dark" : "light"}
            transformData={(data) =>
              data.filter(
                (day) =>
                  new Date(day.date).getFullYear() === Number(selectedYear)
              )
            }
          />
        </div>
      </motion.div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollDown to="skills" />
      </div>
    </section>
  );
}

export default Activity;
