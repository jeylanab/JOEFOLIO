import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import { navLinks } from "../constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Large screen navigation */}
      <div className="flex justify-between items-center mx-5 lg:mx-20 py-4">
        {/* Logo */}
        <div className="navbar__logo">
          <img className="h-8 w-auto" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="hover:text-yellow-500 transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-5 button-primary bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">
            Hire Me
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="focus:outline-none"
          >
            <span className="material-icons text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl focus:outline-none"
        >
          <span className="material-icons">close</span>
        </button>

        <ul className="space-y-8 text-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="hover:text-yellow-500 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <button
            className="button-primary bg-yellow-500 px-6 py-3 rounded-lg text-lg hover:bg-yellow-600"
            onClick={() => setIsMenuOpen(false)} // Close menu on button click
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};
