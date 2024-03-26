import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
      <div className=' bg-black footer'>
          <div className='flex justify-center items-center'>
              <div><FaGithub className='network' /></div>
              <div><IoLogoLinkedin  className='network' /></div>
              <div><FaDiscord className='network'  /></div>
          </div>
    </div>
  )
}

export default Footer