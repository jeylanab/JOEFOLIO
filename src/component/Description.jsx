import React from 'react'
import quote from "../Assets/quote.svg"
import { Link } from 'react-router-dom'

const Description = () => {
    return (
        <div>
            <div className='sm:mt-[300px] mt-[500px] flex justify-center items-center  '>
              <button className='btn-1 anime-3'> <Link  to="/projects">Explore Projects</Link> </button>
              <button className='btn-2 anime-3'> <Link to="/contact">Get in Touch</Link> </button>
            </div>
            <div className='sm:flex justify-center items-center  m-10 mb-10  '>
               <img className='m-10 anime-2' src={quote} alt="" />
               <p className='text-white m-10 anime-3'>Frontend Developer with a solid background in UX/UI design.
                <br></br> I specialize in creating dynamic and user-friendly <br/> interfaces that
                    seamlessly blend functionality with aesthetics.
               </p>
          
             
            </div>
           
      </div>
      
  )
}

export default Description