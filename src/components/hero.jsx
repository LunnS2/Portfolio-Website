import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ScrollDown from "./scroll-down";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);
  const [isFadeInComplete, setIsFadeInComplete] = useState(false);
  const heroRef = useRef(null);
  const scrollDownControls = useAnimation();

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;
    const { left, top, width, height } =
      heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  const handleAnimationComplete = () => {
    setIsFadeInComplete(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollDownControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [scrollDownControls]);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen flex items-center justify-center p-12 bg-white dark:bg-black transition-colors duration-300 overflow-hidden"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        onAnimationComplete={handleAnimationComplete}
      >
        {/* Coding Image Animated with Framer Motion */}
        <motion.div
          className="absolute inset-0 bg-[url('/bg-coding-white-full.jpg')] dark:bg-[url('/bg-coding-invert-full.jpg')] bg-cover bg-center"
          initial={{ clipPath: "circle(0px at 50% 50%)" }}
          animate={{
            clipPath: isFadeInComplete
              ? isHovered
                ? `circle(150px at ${mousePos.x} ${mousePos.y})`
                : "circle(0px at 50% 50%)"
              : "circle(0px at 50% 50%)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />

        {/* Hero Content */}
        <div className="relative text-center z-10">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white transition-colors duration-300">
            Tiago Morna
          </h2>
          <p className="text-lg text-black dark:text-white transition-colors duration-300">
            Welcome to my web development portfolio.
          </p>

          <a
            href="/resume.pdf"
            download="Tiago_Morna_Resume.pdf"
            className="mt-8 active:bg-gray-500 dark:active:bg-gray-500 inline-block px-6 py-3 rounded-md border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-2 active:transition-none"
          >
            Download My Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Button with Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        animate={scrollDownControls}
      >
        <div className="transform -translate-x-1/2 z-20">
          <ScrollDown to="about" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
