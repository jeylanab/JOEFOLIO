import React from 'react'
import man from "../Assets/man.svg"

const Projects = () => {
  return (
    
    <div className='text-white'>
      <div className=' flex lg:flex-row flex-col justify-center items-center m-10'>
          <div className='highlights m-10'>
            <h1 className='font-bold myshadow btn-1 mb-5'>Project Highlights</h1>
              <p className=''>😄Innovative</p>
              <p> 😄User-Friendly</p>
              <p>😄Scalable</p>
              <p>😄Responsive</p>
              <p>😄UX/UI Design</p>
              <p>😄Backend</p>
              <p>😄Frontend</p>
          </div>
          <img className=' w-60 ' src={man} alt="man in a hood" />
          <div className='acheivements m-10'>
            <h1 className='font-bold myshadow btn-1 mb-5' >Achievements</h1>
              <p> 🎯 20+ Clients</p>
              <p> 🎯 50+ Projects</p>
              <p> 🎯 5⭐ rate on fiverr</p>
              <p> 🎯 50K+ Lines of code</p>

          </div>

      </div>
      <h1 className=' text-center title  p-10 myshadow'>My Work Samples</h1>
      <div className='list-items flex justify-center items-center'>
        <p className='btn-2'>UX/UI Design</p>
        <p className='btn-2'>Frontend</p>
        <p className='btn-2'>Backend</p>
        <p className='btn-2'>MERN Stack</p>
      </div>

      
    
    </div>
  )
}

export default Projects