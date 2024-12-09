import React from 'react'
import joe0 from "../Assets/joe0.svg"



const Hero = () => {
  return (
      <div className=''>
          <div className='text-white text-center flex flex-col items-center justify-cente '>
             <h1 className='text-white text-center paragraph opacity-50  mt-10 '>Hello! My Name Is <span className='jey'>Jeylan A</span></h1>
             <h1 className=' text-5xl lg:text-9xl font-bold myshadow anime-r'>Software Developer</h1>
              <h1 className='text-5xl lg:text-9xl font-bold myshadow anime-l'>Designer</h1>
              <img className='mt-10 lg:w-[400px] mt-20 absolute' src={joe0} alt="" />
          </div> 
              
      </div>
  )
}

export default Hero