import React from 'react'
import jeylan from '../assets/jeylan.png'


const Hero = () => {
  return (
      <div className=' flex justify-center items-center         '>
          <div className='m-20'>
              <h1 className=' text-center myName myC '> <span className=''>Hello,</span> My Name Is</h1>
              <h1 className=' myName lg:text-7xl text-4xl   my-5 text-center '>Jeylan <span className='text-black'>A Tesi</span>  </h1> 
              <h2 className='text-center myC my-5 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white'>Web Developer / Web Designer</h2>
              <p className=' text-center'>Frontend Developer with a solid background in UX/UI design. I specialize in creating dynamic and user-friendly interfaces that seamlessly blend functionality with aesthetics.</p>

              
          </div>
          <div>
                  <div className="backG  lg:w-[400px] h-[400px] rounded-full bg-emerald-950 "></div> 
              
          </div>

          {/* <div className="hero">
              <div className='sides lg:flex block justify-center items-center'>
                  <div className="left">
                      <div className='info '>
                         <h1 className='helloStart lg:text-left font-semibold text-center text-2xl text-black my-5'> <span className='helloJ'>Hello,</span> My Name Is</h1>
                          <h1 className='myName lg:text-8xl text-4xl lg:text-left  my-5 text-center '>Jeylan <span className='text-black'>A Tesi</span>  </h1> 
                          <h2 className='lg:text-left text-center myC my-5 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  font-bold'>Web Developer / Web Designer</h2>
                      </div>


                      <p className='lg:text-left text-center font-poppins p-3  my-5'>Hello👋 I'm Jeylan, Frontend Developer with a solid background in UX/UI design. I specialize in creating dynamic and user-friendly interfaces that seamlessly blend functionality with aesthetics.
                          With my expertise in HTML, CSS, JavaScript, and React, I'm dedicated to crafting exceptional digital experiences that leave a lasting impact. </p>
                      
                      <button className='lg:text-left text-center btn h-[40px] w-[120px] rounded-md p-2'><a href="">Download CV</a></button>

                      
                  </div>
                  <div className="right">
                      <div className="imgHolder">
                          <img src={jeylan} alt="jeylan pic" className='lg:w-[1100px] m-auto rounded-full' />
                      </div>
                      <div className="backG  lg:w-[400px] h-[400px] rounded-full bg-emerald-950 absolute bottom-4 right-3 -z-10"></div>
                  </div>
              </div>
          </div> */}

    </div>
  )
}

export default Hero