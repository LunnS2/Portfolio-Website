import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white dark:bg-black text-black dark:text-white border-b-2 border-black dark:border-white p-2 fixed top-0 w-screen left-0 z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } pr-4`} // Ensures proper right alignment
    >
      <div className="w-full max-w-screen flex justify-between items-center px-4 lg:px-8 relative">
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black dark:text-white focus:outline-none transition-colors duration-300"
        >
          {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
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
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            Experience
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
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 block lg:inline-block px-3 py-2 rounded-md"
          >
            Work
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

        {/* Theme Toggle Positioned to the Right */}
        <div className="absolute right-0 lg:p-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
