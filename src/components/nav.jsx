import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-2 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          MY PORTFOLIO
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
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
      </div>
    </nav>
  );
};

export default Navbar;