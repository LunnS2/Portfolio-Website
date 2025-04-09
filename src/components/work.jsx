import React from "react";
import { motion } from "framer-motion";
import ScrollDown from "./scroll-down";

function Work() {
  return (
    <section
      id="work"
      className="min-h-screen p-6 sm:p-12 md:p-24 flex flex-col items-center text-black dark:text-white bg-white dark:bg-black transition-colors duration-300 relative"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-8 sm:text-3xl sm:mb-8">Work</h2>
        <p className="mb-8 sm:mb-12 text-center text-lg">
          Showcase of my key projects.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://d-life.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-64 h-64 bg-white dark:bg-black text-black dark:text-white border border-gray-600 dark:hover:bg-neutral-900 hover:bg-gray-100 flex items-center justify-center rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            Self-Care-App
          </a>
          <a
            href="https://dicefeed.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-64 h-64 bg-white dark:bg-black text-black dark:text-white border border-gray-600 dark:hover:bg-neutral-900 hover:bg-gray-100 flex items-center justify-center rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            Social-Network
          </a>
          <a
            href="https://safe-talk-chat.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-64 h-64 bg-white dark:bg-black text-black dark:text-white border border-gray-600 dark:hover:bg-neutral-900 hover:bg-gray-100 flex items-center justify-center rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            Real-Time-Chat-App
          </a>
          <a
            href="https://join-my-journey.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-64 h-64 bg-white dark:bg-black text-black dark:text-white border border-gray-600 dark:hover:bg-neutral-900 hover:bg-gray-100 flex items-center justify-center rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            Campaign-Website
          </a>
        </div>
      </motion.div>
      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollDown to="contact" />
      </div>
    </section>
  );
}

export default Work;
