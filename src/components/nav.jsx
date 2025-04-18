import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const themeToggleControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      themeToggleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [themeToggleControls]);

  const handleThemeToggleClick = () => {
    themeToggleControls.start({ rotate: 360, transition: { duration: 0.5 } });
    setTimeout(() => {
      themeToggleControls.start({ rotate: 0 });
    }, 500);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
      className="bg-white dark:bg-black text-black dark:text-white border-b-2 transition-colors duration-300 border-black dark:border-white p-2 fixed top-0 w-screen left-0 z-50 pr-4"
    >
      <div className="w-full max-w-screen flex justify-between items-center px-4 lg:px-8 relative">
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black dark:text-white focus:outline-none transition-colors duration-300"
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Centered Links for Large Screens */}
        <div
          className={`lg:flex lg:items-center lg:space-x-8 ${
            isOpen ? "block" : "hidden"
          } lg:block mx-auto`}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            About
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            Work
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            Skills
          </Link>
          <Link
            to="activity"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            Activity
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            Contact
          </Link>
        </div>

        {/* Theme Toggle Animation */}
        <motion.div
          className="absolute right-0 lg:p-2"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          animate={themeToggleControls}
          onClick={handleThemeToggleClick}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
