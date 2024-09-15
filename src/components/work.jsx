import React from "react";

function Work() {
  return (
    <section
      id="work"
      className="min-h-screen p-6 sm:p-12 md:p-24 flex flex-col items-center text-black dark:text-white bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-8 sm:text-3xl sm:mb-8">Work</h2>
      <p className="mb-8 sm:mb-12 text-center text-lg">
        Content for the Work section.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-64 h-64 bg-white text-black border-4 border-slate-200 hover:bg-slate-200 flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          GitHub Project 1
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-64 h-64 bg-white text-black border-4 border-slate-200 hover:bg-slate-200 flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          GitHub Project 2
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-64 h-64 bg-white text-black border-4 border-slate-200 hover:bg-slate-200 flex items-center justify-center rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          GitHub Project 3
        </a>
      </div>
    </section>
  );
}

export default Work;

