import React from 'react';
import navLinks from '../constants';
import logo from "../Assets/logo.svg"


const NavBar = () => {
  return (
      <div className='flex justify-between items-center bg-slate-800'>    
          <img className='' src={logo} alt="" />
        <ul className='flex justify-center items-center'>
            {navLinks.map((navlink, index) => (
            <li key={index}>
                <a className='text-white pl-10' href={navlink.link}>{navlink.title}</a>
            </li>
            ))}
        </ul>
    </div>
  );
};

export default NavBar;
