
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          MY PORTFOLIO
        </div>
        <div className="space-x-4">
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-gray-400"
          >
            Experience
          </Link>
          <Link 
            to="work" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-gray-400"
          >
            Work
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;