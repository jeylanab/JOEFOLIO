import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { HiMenuAlt1 } from "react-icons/hi";
import { navLinks } from '../constants/index'

const NavBar = () => {



  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='logoSection  '>
           <img src={logo} alt="jeylan logo"  className='w-[60px]  sm:w-26' />
        </div>
        <div className='menuList lg:flex  md:flex hidden'>
          <ul className='flex uul'>
            {navLinks.map((menu, index) => (
              <li className='ml-10 font-poppins lii' key={menu.id}> <a href="#">{ menu.title}</a></li>
            ))}
          </ul>
        </div>
        <div className='contactMe lg:flex md:flex hidden'>
            <button className=' btn h-[40px] w-[100px] rounded-md font-poppins font-semibold'>Contact</button>
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