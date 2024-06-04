import React, { useState } from 'react'
import logo from '../assets/jlogo2.svg'
import { HiMenuAlt1 } from "react-icons/hi";
import { navLinks } from '../constants/index'


const NavBar = () => {



  return (
    <div className=' '>
      <div className='flex justify-between items-center'>
        <div className='logoSection  '>
           <img src={logo} alt="jeylan logo"  className='w-[200px] ' />
        </div>
        <div className=' lg:flex  md:flex hidden'>
          <ul className='flex '>
            {navLinks.map((menu, index) => (
              <li className='ml-10 font-poppins lii' key={menu.id}> <a href="#">{ menu.title}</a></li>
            ))}
          </ul>
        </div>
        <div className='contactMe lg:flex md:flex hidden'>
            <button className=' btn h-[40px] w-[100px] mr-10 rounded-md font-poppins font-semibold'>Contact</button>
        </div>

        {/* Responsive nav bar for small screen */}
        <div className=' lg:hidden flex'>
           <HiMenuAlt1 className='menubar ' />
        </div>
      </div>
    </div>
  )
}

export default NavBar