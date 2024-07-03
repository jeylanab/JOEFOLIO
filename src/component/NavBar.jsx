import React from 'react';
import navLinks from '../constants'; // Automatically looks for index.js

const NavBar = () => {
  return (
    <div>
      <ul>
        {navLinks.map((navlink, index) => (
          <li key={index}>
            <a href={navlink.link}>{navlink.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
