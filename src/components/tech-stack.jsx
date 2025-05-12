import React from "react";
import { motion } from "framer-motion";
import ScrollDown from "./scroll-down";

function TechStack() {
  const techStack = [
    // Programming Languages / Markup
    { name: "TypeScript", src: "/tech-stack/typescript.svg" },
    { name: "JavaScript", src: "/tech-stack/javascript.svg" },
    { name: "Python", src: "/tech-stack/python.svg" },
    { name: "C#", src: "/tech-stack/csharp.svg" },
    { name: "SQL", src: "/tech-stack/sql.svg" },
    { name: "HTML", src: "/tech-stack/html.svg" },
    { name: "CSS", src: "/tech-stack/css.svg" },

    // Frameworks and Libraries
    { name: "NextJS", src: "/tech-stack/nextjs.svg" },
    { name: ".NET", src: "/tech-stack/dotnet-icon.svg" },
    { name: "ReactJS", src: "/tech-stack/react.svg" },
    { name: "Redux", src: "/tech-stack/redux-toolkit.svg" },
    { name: "NodeJS", src: "/tech-stack/nodejs.svg" },
    { name: "Express", src: "/tech-stack/express.svg" },
    { name: "jQuery", src: "/tech-stack/jquery.svg" },
    { name: "Bootstrap", src: "/tech-stack/bootstrap.svg" },
    { name: "Tailwind CSS", src: "/tech-stack/tailwindcss.svg" },
    { name: "ViteJS", src: "/tech-stack/vitejs.svg" },
    { name: "ShadCN", src: "/tech-stack/shadcn.svg" },

    // Databases and Data Management
    { name: "MongoDB", src: "/tech-stack/mongodb.svg" },
    { name: "PostgreSQL", src: "/tech-stack/postgresql.svg" },
    { name: "Mongoose", src: "/tech-stack/mongoose.svg" },
    { name: "JSON", src: "/tech-stack/json.svg" },

    // Developer Tools and Utilities
    { name: "Git", src: "/tech-stack/git.svg" },
    { name: "GitHub", src: "/tech-stack/github.svg" },
    { name: "Bash", src: "/tech-stack/Bash.svg" },
    { name: "Postman", src: "/tech-stack/postman.svg" },
    { name: "Axios", src: "/tech-stack/axios.svg" },
    { name: "OAuth", src: "/tech-stack/oauth.svg" },
    { name: "Clerk", src: "/tech-stack/clerk.svg" },
    { name: "Convex", src: "/tech-stack/convex.svg" },
    { name: "Vercel", src: "/tech-stack/vercel.svg" },

    // Design and Creative Tools
    { name: "3ds Max", src: "/tech-stack/3ds-max.svg" },
    { name: "Adobe Illustrator", src: "/tech-stack/adobe-illustrator.svg" },
    { name: "Adobe Photoshop", src: "/tech-stack/adobe-photoshop.svg" },
    { name: "Adobe XD", src: "/tech-stack/adobe-xd.svg" },
    { name: "Adobe Premiere", src: "/tech-stack/adobe-premiere.svg" },
    { name: "Blender", src: "/tech-stack/blender.svg" },
  ];

  // Variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each child's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="stack"
      className="min-h-screen pb-24 p-8 flex items-center text-black dark:text-white bg-gray-100 dark:bg-neutral-950 transition-colors duration-300 relative"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <p className="text-lg mb-8">
            Full-Stack tools and technologies I have experience with.
          </p>
        </div>
        {/* My Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-4 p-6 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <motion.div key={tech.name} variants={itemVariants}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:rotate-3 text-black bg-gray-200 dark:bg-neutral-900 dark:text-white transition-colors duration-300">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-6 h-6 filter grayscale brightness-150"
                />
                <span>{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollDown to="activity" />
      </div>
    </section>
  );
}

export default TechStack;
