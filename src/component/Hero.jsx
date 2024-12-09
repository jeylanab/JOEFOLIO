import React from 'react'
import joe0 from "../Assets/joe0.svg"



const Hero = () => {
  return (
      <div className='flex justify-around'>
          <div>
             <h1 className='text-white text-center paragraph opacity-50  mt-10 '>Hello! My Name Is <span className='jey'>Jeylan A</span></h1>
          
          </div>
          
          <div className='text-white text-center flex flex-col items-center justify-cente '>
             
              <img className='lg:w-[400px]' src={joe0} alt="" />
          </div> 
          <div>
              <h1 className=' text-5xl lg:text-9xl font-bold myshadow anime-r'>Software Developer</h1>
              <h1 className='text-5xl lg:text-9xl font-bold myshadow anime-l'>Designer</h1>
          </div>
              
      </div>
  )
}

export default Hero