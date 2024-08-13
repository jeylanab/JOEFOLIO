import React from 'react'
import logo from "../Assets/logo.svg"
import { Link } from 'react-router-dom';


const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
    <div className='bg-black text-white text-center w-full '>
      <div className='flex justify-around items-center p-5'>
        <div className='flex-grow basis-0'>
          <div className=''>
           <Link to="/"><img src={logo} alt="logo" /></Link> 
          </div>
            <p className='extra-small'>Hi! My name ia Jeylan A Tesi expert in web Development and design.<br/>
            I can help you make your website more attractive</p>
          
        </div>
        <div className='flex-grow basis-0 p-5'>
          <h4 className='text-left'>Service</h4>
          <ul>
             <li className='extra-small'> <Link to="/projects">Web Developer</Link> </li>
             <li className='extra-small'> <Link to="/projects">Web Designer</Link></li>
             <li className='extra-small'> <Link to="/about">Brand Creator</Link></li>
             <li className='extra-small'> <Link to="/contact">Product Designer</Link></li>
          </ul>
        </div>
        <div className='flex-grow basis-0'>
          <h4 className='text-left'>Information</h4>
          <ul>
             <li className='extra-small'><Link to="/about">About</Link> </li>
             <li className='extra-small'><Link to="/contact">Contact</Link>  </li>
             <li className='extra-small'><Link to="/about">Support</Link>  </li>
             <li className='extra-small'><Link to="/projects">Product</Link>  </li>
          </ul>
          
        </div>
        
      </div>
      <div>
        <div className='flex justify-around'>
         <p className='paragraph p-2'> ©{currentYear} All Rights Reserved</p>
        </div>
      </div>
    
          
      
      </div>
  )
}

export default Footer