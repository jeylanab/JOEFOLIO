import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
      <div className='bg-black text-white text-center w-full'>
          <h1 className='p-10 font-semibold'>JOEFOLIO
          </h1>
          <div className='flex lg:flex-row flex-col justify-center items-center text-white'>
              {footerLinks.map((value, index) => (
                  <a className='ml-10 mr-10' href={value.link}>{ value.title }</a>

                ))}
          </div>
          <div className=''>
          
          </div>
      
      </div>
  )
}

export default Footer