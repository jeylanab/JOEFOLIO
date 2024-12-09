import React from 'react'
import { Link } from 'react-router-dom'
import quote from "../Assets/quote.svg"
import joe from "../Assets/joe.png"

const About = () => {
  return (
    <div className=' text-white min-h-screen py-10'>
      <div className='text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-12'>
        About Me
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-6 lg:space-y-0'>
        <img className='w-[300px] rounded-full shadow-xl transform transition duration-500 hover:scale-105' src={joe} alt="Jeylan" />

        <div className='text-white lg:w-1/2 text-lg p-6 bg-black bg-opacity-60 rounded-lg shadow-2xl'>
          <p>
            💧 Hi! I'm Jeylan Abdo, a computer science student and a specialized MERN stack developer with a focus on frontend development. I have completed a MERN stack bootcamp and have extensive experience working on React, UI/UX design projects. I've successfully delivered both solo and team-based projects, combining creativity and technical skills to create engaging and user-friendly web applications. I'm passionate about building innovative solutions and constantly enhancing my expertise.
          </p>
        </div>
      </div>

      <div className='sm:flex justify-center items-center mt-10'>
        <img className='w-12 h-12 mx-4 animate-pulse' src={quote} alt="Quote Icon" />
        <p className='text-white mx-4 text-center text-lg sm:text-xl'>
          Frontend Developer with a solid background in UX/UI design.
          <br />
          I specialize in creating dynamic and user-friendly interfaces that
          <br />
          seamlessly blend functionality with aesthetics.
        </p>
      </div>

      <div className='flex justify-center items-center mt-10'>
        <button className='btn-1 anime-3 0 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>
          <Link to="/projects">Explore Projects</Link>
        </button>

        <button className='btn-2 anime-3  text-white font-semibold py-3 px-6 rounded-lg ml-4 transition duration-300 ease-in-out transform hover:scale-105'>
          <Link to="/contact">Get in Touch</Link>
        </button>
      </div>
    </div>
  )
}

export default About;
