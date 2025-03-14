import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function Experience() {
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
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center p-24 text-black dark:text-white bg-white dark:bg-black transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      {/* Year Selector */}
      <div className="mb-4">
        <label htmlFor="year-select" className="mr-2">
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 border rounded text-black dark:text-white bg-white dark:bg-black"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* GitHub Activity Graph */}
      <div className="mt-8">
        <GitHubCalendar
          theme={explicitTheme}
          colorScheme={isDark ? "dark" : "light"}
          hideTotalCount={true}
          username="LunnS2"
          transformData={(data) =>
            data.filter(
              (day) => new Date(day.date).getFullYear() >= Number(selectedYear)
            )
          }
        />
      </div>
    </section>
  );
}

export default Experience;