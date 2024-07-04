import React from 'react'
import { footerLinks } from '../constants'
import linkedin from "../Assets/linkedin.png"
import github from "../Assets/github.svg"
import fiverr from "../Assets/fiverr.png"

const Footer = () => {
  return (
      <div className='bg-black text-white text-center w-full '>
          <h1 className='p-10 font-semibold'>JOEFOLIO
          </h1>
          <div className='flex lg:flex-row flex-col justify-center items-center text-white'>
              {footerLinks.map((value, index) => (
                  <a className='ml-10 mr-10 hover:text-zinc-500' href={value.link}>{ value.title }</a>

                ))}
          </div>
          <div className='flex  justify-center items-center p-5'>
              <a className='icon m-5' href=""><img src={linkedin} alt="" /></a>
              <a className='icon m-5' href=""><img src={github} alt="" /></a>
              <a className='icon m-5' href=""><img src={fiverr} alt="" /></a>
          
          </div>
      
      </div>
  )
}

export default Footer