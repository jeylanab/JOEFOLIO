import React from 'react';
import { useState } from 'react';
import { navLinks , footerLinks } from '../constants';
import logo from "../Assets/logo.svg"
import menu from "../Assets/menu.svg"
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      console.log('jeylan')
    };
  
    return (
    <div>
      <div className='hidden justify-between items-center lg:flex'>    
          <Link to={navLinks[0].link}><img className='m-10' src={logo} alt="logo" /></Link>
          <ul className='flex justify-center items-center '>
            {navLinks.map((navlink, index) => (
            <li key={index}>
                <Link className='text-white pl-10 paragraph font-bold menus' to={navlink.link}>{navlink.title}</Link>
            </li>
            ))}
          </ul>
          <div className='m-10 text-white'>
              <div className='contact'> <Link to={footerLinks[1].link}>Contact</Link> </div>
          </div>
        </div>
        <div className='sm:hidden flex items-center justify-between p-5 z-20'>
          <img className='' src={logo} alt="logo" />
          <img onClick={toggleMenu} src={menu} alt="menu" />
          {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-lg opacity-90 mt-2 py-2 w-48 rounded-lg z-20 ">
              <ul>
                {navLinks.map((value, index) => (
                  <li className='' >
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200 subtitle"  to={value.link}>{value.title}</Link></li>
                  
                   ))}
              </ul>
        </div>
      )}

        </div>
        

    </div>
  );
};

export default NavBar;
