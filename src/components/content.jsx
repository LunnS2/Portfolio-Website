// my-project\src\components\content.jsx

import React from "react";
import About from "./about";
import Work from "./work";
import Hero from "./hero";
import Social from "./socials";
import ContactForm from "./contact";
import TechStack from "./tech-stack";
import Activity from "./activity";

function Content() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <TechStack />
      <Activity />
      <ContactForm />
      <Social />
    </main>
  )
}

export default Content;