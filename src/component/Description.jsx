import React from 'react'
import quote from "../Assets/quote.svg"
import { Link } from 'react-router-dom'

const Description = () => {
    return (
        <div>
            <div className='sm:mt-[300px] mt-[500px] sm:flex justify-center items-center '>
               <img className='m-10' src={quote} alt="" />
               <p className='text-white m-10'>Frontend Developer with a solid background in UX/UI design.
                <br></br> I specialize in creating dynamic and user-friendly interfaces that
                    <br></br>seamlessly blend functionality with aesthetics.
               </p>
          
             
            </div>
            <div className='  flex justify-center items-center  m-10 mb-10 '>
              <button className='btn-1'> <Link  to="/projects">Explore Projects</Link> </button>
              <button className='btn-2'> <Link to="/contact">Get in Touch</Link> </button>
          </div>
      </div>
      
  )
}

export default Description