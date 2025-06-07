function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white p-2 w-full top-0 left-0 z-50 text-center transition-colors duration-300">
      <p>ⓒ {year} All rights reserved.</p>
    </div>
  ) 
}

export default Footer;