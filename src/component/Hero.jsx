import React from 'react'
import jeylan from '../assets/jeylan.png'
import './style.css';

const Hero = () => {
  return (
     <div>
          <div className="hero">
              <div className='sides lg:flex block justify-center items-center'>
                  <div className="left">
                      <div className='info'>
                         <h1 className='helloStart'>Hello, My Name Is</h1> <br />
                          <h1 className='myName'>Jeylan <span>A</span> Tesi </h1> 
                          <h2>Web Developer / Web Designer</h2>
                      </div>


                      <p>Hello👋 I'm Jeylan, Frontend Developer with a solid background in UX/UI design. I specialize in creating dynamic and user-friendly interfaces that seamlessly blend functionality with aesthetics. With my expertise in HTML, CSS, JavaScript, and React, I'm dedicated to crafting exceptional digital experiences that leave a lasting impact. </p>


                  </div>
                  <div className="right">
                      <div className="imgHolder">
                          <img src={jeylan} alt="jeylan pic" />
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Hero