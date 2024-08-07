import React from "react";
import About from "./about";
import Experience from "./experience";
import Work from "./work";
import Contact from "./contact";
import Hero from "./hero";

function Content() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
        </main>
    )
}

export default Content;