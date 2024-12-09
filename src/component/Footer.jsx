import React from 'react'
import { footerLinks } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-900 to-purple-800 text-white text-center w-full py-12'>
      <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
        JOEFOLIO
      </h1>
      <div className='flex lg:flex-row flex-col justify-center items-center mt-6'>
        {footerLinks.map((value, index) => (
          <Link key={index} className='mx-6 my-2 text-lg font-medium hover:text-yellow-500 transition duration-300 ease-in-out' to={value.link}>
            {value.title}
          </Link>
        ))}
      </div>
      <div className='flex justify-center items-center mt-8'>
        <a className='mx-4 hover:scale-110 transition-transform duration-300' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
        <a className='mx-4 hover:scale-110 transition-transform duration-300' href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a className='mx-4 hover:scale-110 transition-transform duration-300' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter fa-2x"></i> {/* Twitter icon */}
        </a>
        <a className='mx-4 hover:scale-110 transition-transform duration-300' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram fa-2x"></i> {/* Instagram icon */}
        </a>
        <a className='mx-4 hover:scale-110 transition-transform duration-300' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook fa-2x"></i> {/* Facebook icon */}
        </a>
      </div>
      <p className='mt-6 text-sm text-gray-400'>
        © 2024 JOEFOLIO. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;
