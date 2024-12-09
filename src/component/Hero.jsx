import React from 'react'
import joe0 from "../Assets/joe0.svg"



const Hero = () => {
  return (
      <div className='flex justify-center'>
                        
          <div>
              <div>
              </div>
              <img className='lg:w-[500px] jey' src={joe0} alt="" />
          </div>
          <div className='text-white text-center flex flex-col items-center justify-cente '>
              <div>
                 <h1 className='text-white text-center paragraph opacity-50  mt-10 '>Hi! I am </h1>
                 <h1 className='jey'>Jeylan A</h1>       
              </div>

             <h1 className=' '>Software Developer</h1>
              <h1 className=''>Designer</h1>
          </div> 

              
      </div>
  )
}

export default Hero