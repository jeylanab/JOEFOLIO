import React from 'react';
import { useState } from 'react';
import navLinks from '../constants';
import logo from "../Assets/logo.svg"
import menu from "../Assets/menu.svg"


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      console.log('jeylan')
    };
  
    return (
    <div>
      <div className='hidden justify-between items-center lg:flex'>    
          <img className='m-10' src={logo} alt="logo" />
          <ul className='flex justify-center items-center '>
            {navLinks.map((navlink, index) => (
            <li key={index}>
                <a className='text-white pl-10 paragraph menus' href={navlink.link}>{navlink.title}</a>
            </li>
            ))}
          </ul>
          <div className='m-10 text-white'>
              <div className='contact'>Contact</div>
          </div>
        </div>
        <div className='sm:hidden flex items-center justify-between p-5'>
          <img className='' src={logo} alt="logo" />
          <img onClick={toggleMenu} src={menu} alt="menu" />
          {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-lg opacity-60 mt-2 py-2 w-48 rounded-lg">
              <ul>
                {navLinks.map((value, index) => (
                  <li className='' >
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200 subtitle"  href={value.link}>{value.title}</a></li>
                  
                   ))}
              </ul>
        </div>
      )}

        </div>
        

    </div>
  );
};

export default NavBar;
