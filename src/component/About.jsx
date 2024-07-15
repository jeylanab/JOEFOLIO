import React from 'react'
import { Link } from 'react-router-dom'
import quote from "../Assets/quote.svg"
import jeylan from "../Assets/jeylan.png"


const About = () => {
  return (
    <div className=' '>
      <div className=' title  text-white myshadow text-center mt-10'>
        About Me
      </div>
      <div className=' lg:flex md:flex block items-center justify-center rounded-lg bg opacity-100 m-5 lg:m-20'>
          <img className='w-[300px] anime-2 ' src={jeylan} alt="" />
        <div className=' text-white m-5 myshadow paragraph'> 💧Hi! I'm Jeylan Abdo, a computer science student and a specialized MERN stack developer with a focus on frontend development. I have completed a MERN stack bootcamp and have extensive experience working on React, UI/UX design projects. I've successfully delivered both solo and team-based projects, combining creativity and technical skills to create engaging and user-friendly web applications. I'm passionate about building innovative solutions and constantly enhancing my expertise.
        

    
 
         </div>

        
      </div>
      <div className='  sm:flex justify-center items-center '>
               <img className='m-10 anime-2' src={quote} alt="" />
               <p className='text-white m-10 anime-3'>Frontend Developer with a solid background in UX/UI design.
                <br></br> I specialize in creating dynamic and user-friendly interfaces that
                    <br></br>seamlessly blend functionality with aesthetics.
               </p>
          
             
       </div>
        <div className='  flex justify-center items-center  m-10 mb-10 '>
              <button className='btn-1 anime-3'> <Link  to="/projects">Explore Projects</Link> </button>
              <button className='btn-2 anime-3'> <Link to="/contact">Get in Touch</Link> </button>
       </div>
      
    
    </div>
  )
}

export default About