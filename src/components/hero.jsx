import React from "react";

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center">
        <h2 className="text-3xl text-black dark:text-white font-bold mb-8">Hero Section</h2>
        <p className="text-black dark:text-white text-lg">Content for the Hero section.</p>
      </div>
    </section>
  );
}

export default Hero;
