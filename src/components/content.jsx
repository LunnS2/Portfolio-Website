import React from "react";
import About from "./about";
import Experience from "./experience";
import Work from "./work";
import Contact from "./contact";
import Hero from "./hero";
import Social from "./socials";
import ThemeToggle from "./theme-toggle";

function Content() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
            <Social />
            <ThemeToggle />
        </main>
    )
}

export default Content;