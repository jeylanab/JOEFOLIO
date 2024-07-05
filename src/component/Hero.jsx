import React from 'react'
import jeylan from "../Assets/jeylan.png"



const Hero = () => {
  return (
      <div className=''>
          <div className='text-white text-center flex flex-col items-center justify-center'>
             <h1 className='text-white text-center paragraph  mt-10 anime'>Hello! My Name Is <span className='jey'>Jeylan A</span></h1>
             <h1 className='text-5xl lg:text-9xl font-bold myshadow anime-r'>WebDeveloper</h1>
              <h1 className='text-5xl lg:text-9xl font-bold myshadow anime-l'>WebDesigner</h1>
              <img className='w-[400px] mt-10 absolute imgshadow top-20 anime-2' src={jeylan} alt="" />
          </div> 
              
      </div>
  )
}

export default Hero