import React from 'react';
import navLinks from '../constants';
import logo from "../Assets/logo.svg"
import menu from "../Assets/menu.svg"


const NavBar = () => {
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
          <img src={menu} alt="menu" />

        </div>
        

    </div>
  );
};

export default NavBar;
