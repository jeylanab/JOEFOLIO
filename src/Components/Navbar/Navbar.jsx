import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../Assets/logo.svg";
import { navLinks } from "../../constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-gray-300/30" : "border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-5 lg:mx-20 py-4">
        {/* Logo */}
        <div className="navbar__logo">
          <a href={navLinks[0].link}><img className="h-10 w-auto" src={logo} alt="Logo" /></a>
          
        </div>

        {/* Menu Button */}
        <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
          <span className="material-icons text-4xl">menu</span>
        </button>
      </div>

      {/* Full-Screen Menu */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-gray-900/90 backdrop-blur-md text-white flex flex-col items-center justify-center z-50 transition-all ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-7 right-8 md:right-16 text-4xl focus:outline-none"
        >
          <span className="material-icons text-4xl">close</span>
        </button>

        <ul className="space-y-8 text-xl text-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.1 * link.id, duration: 0.3 }}
            >
              <a
                href={link.link}
                className="hover:text-[#D8A1EE] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>

<motion.button
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.8 }}
  transition={{ duration: 0.3, delay: 0.2 }}
  className="bg-[#D8A1EE] px-6 py-3 my-3 rounded-lg text-lg hover:bg-[#b77dc8] transition-all"
  onClick={() => window.open("https://www.linkedin.com/in/jeylan-tesi-53a746257/", "_blank")}
>
  Hire Me
</motion.button>

      </motion.div>
    </nav>
  );
};
