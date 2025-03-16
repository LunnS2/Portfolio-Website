// my-project\src\components\hero.jsx

import React, { useState, useRef } from "react";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;
    const { left, top, width, height } =
      heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen flex items-center justify-center p-24 
                 bg-white dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      {/* Coding Image (Hidden by Default, Revealed on Hover) */}
      <div
        className="absolute inset-0 bg-[url('/code-bg-light.svg')] dark:bg-[url('/code-bg.svg')] bg-cover bg-center"
        style={{
          clipPath: isHovered
            ? `circle(100px at ${mousePos.x} ${mousePos.y})`
            : "circle(0px at 50% 50%)",
          transition: "clip-path 0.2s ease-out",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative text-center z-10">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white transition-colors duration-300">
          Tiago Morna
        </h2>
        <p className="text-lg text-black dark:text-white transition-colors duration-300">
          Welcome to my web development portfolio.
        </p>

        <a
          href="/my_resume.pdf"
          download="Tiago_Morna_Resume.pdf"
          className="mt-8 active:bg-gray-500 dark:active:bg-gray-500 inline-block px-6 py-3 rounded-md border border-black dark:border-white 
                     text-black dark:text-white bg-white dark:bg-black transition-all duration-300 
                     ease-in-out hover:-translate-y-2 active:transition-none"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
