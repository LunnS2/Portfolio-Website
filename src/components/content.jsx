// my-project\src\components\content.jsx

import React from "react";
import About from "./about";
import Experience from "./experience";
import Work from "./work";
import Hero from "./hero";
import Social from "./socials";
import ThemeToggle from "./theme-toggle";
import ContactForm from "./contact";
import Skills from "./skills";

function Content() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Work />
      <ContactForm />
      <Social />
      <ThemeToggle />
    </main>
  )
}

export default Content;