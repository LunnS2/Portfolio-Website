import React from "react";
import { motion } from "framer-motion";
import ScrollDown from "./scroll-down";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-24 text-black dark:text-white bg-gray-100 dark:bg-neutral-950 transition-colors duration-300 relative"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-8">About me</h2>
        <p className="text-lg">
          Hi, I'm Tiago—a Full-Stack Web Developer based on the sunny shores of
          Madeira Island, Portugal. With 5 years of hands-on experience in
          building dynamic, real-world applications, I thrive at the
          intersection of creativity and technology, crafting solutions that are
          as functional as they are impactful.
        </p>
        <br />
        <p className="text-lg">
          My journey began with a Vocational Diploma in Multimedia Technology
          and accelerated through a Full-Stack Web Development Bootcamp, where I
          honed my skills in modern frameworks. Over the years, I've blended
          academic rigor with self-directed learning, tackling projects ranging
          from real-time chat applications to scalable social networks and
          self-care platforms. Whether developing client websites or personal
          projects, I prioritize clean code, intuitive design, and seamless user
          experiences.
        </p>
      </motion.div>
      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollDown to="experience" />
      </div>
    </section>
  );
}

export default About;
