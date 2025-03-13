import React from "react";

function Skills() {

  const techStack = [
    // Programming Languages / Markup
    { name: "TypeScript", src: "/tech-stack/typescript.svg" },
    { name: "JavaScript", src: "/tech-stack/javascript.svg" },
    { name: "Python", src: "/tech-stack/python.svg" },
    { name: "SQL", src: "/tech-stack/sql.svg" },
    { name: "HTML", src: "/tech-stack/html.svg" },
    { name: "CSS", src: "/tech-stack/css.svg" },

    // Frameworks and Libraries
    { name: "ReactJS", src: "/tech-stack/react.svg" },
    { name: "NextJS", src: "/tech-stack/nextjs.svg" },
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

  return (
    <section
      id="skills"
      className="min-h-screen p-6 sm:p-12 md:p-24 flex flex-col items-center text-black dark:text-white bg-gray-100 dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <p className="text-lg">Content for the Skills section.</p>
      </div>
      {/* My Tech Stack */}
      <div className="flex flex-wrap gap-4 p-6 justify-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white"
          >
            <img src={tech.src} alt={tech.name} className="w-6 h-6" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
