import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-2 w-full top-0 left-0 z-50 text-center transition-colors duration-300">
      <p>Copyright ⓒ {year}</p>
    </div>
  ) 
}

export default Footer;