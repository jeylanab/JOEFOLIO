import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
      <div className=' bg-black footer'>
          <div className='flex justify-center items-center'>
              <div><a href="https://github.com/jeylanab" target='blank'><FaGithub className='network' /></a></div>
              <div><a href="https://www.linkedin.com/in/jeylan-a-tesi-53a746257/" target='blank'><IoLogoLinkedin  className='network' /></a></div>
              <div> <a href="https://discord.com/channels/@me" target='blank'><FaDiscord  className='network'  /></a></div>
          </div>
    </div>
  )
}

export default Footer