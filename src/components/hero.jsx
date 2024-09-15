import React from "react";

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center">
        <h2 className="text-3xl text-black dark:text-white font-bold mb-8">Hero Section</h2>
        <p className="text-black dark:text-white text-lg">Content for the Hero section.</p>
        <a 
          href= "" //path to my resume /public/my_resume.pdf 
          download="Tiago_Morna_Resume.pdf"
          className="mt-8 inline-block px-6 py-3 border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-2"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
