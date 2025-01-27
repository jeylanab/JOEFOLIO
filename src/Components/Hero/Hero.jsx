import React from 'react';
import joeman from '../../Assets/joeman.png';
import joecv from '../../Assets/joecv.pdf';
import './Hero.css';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="hero my-10">
      <div className="container-hero flex flex-col lg:flex-row justify-between items-center mx-5 lg:mx-20 space-y-10 lg:space-y-0">
        {/* Image Container (First on Small Screens) */}
        <div className="image-container order-1 lg:order-2 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-80 md:w-64 lg:w-[400px] xl:w-[600px] rounded-full"
            src={joeman}
            alt="Jeylan Abdo"
          />
        </div>

        {/* Text Container */}
        <div className="text-container order-2 lg:order-1 lg:w-1/2 text-center lg:text-left">
          <p className="text-lg md:text-2xl opacity-70 mb-5">Software Developer</p>
          <h2 className="text-4xl md:text-6xl font-normal">Hello I am</h2>
          <h1 className="text-5xl md:text-8xl font-extrabold">Jeylan Abdo</h1>
          <div>
            <p className="text-sm md:text-base mt-6 opacity-70">
              Full-stack software Developer, skilled in MERN stack development, UI/UX design, and building user-focused applications. Experienced through academic projects and internships.
            </p>
          </div>

                  <div className='flex'>
                          <div className="mt-6 mr-5">
            <a
              href={joecv}
              download
              className="bg-[#2dda0a] primary-button text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-600 transition duration-300"
            >
              Download CV
            </a>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/jeylan-tesi-53a746257/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-[#2dda0a] hover:text-green-600 transition duration-300" />
            </a>
            <a href="https://x.com/jetu81" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-[#2dda0a] hover:text-green-600 transition duration-300" />
            </a>
            <a href="https://github.com/jeylanab/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-[#2dda0a] hover:text-green-600 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-[#2dda0a] hover:text-green-600 transition duration-300" />
            </a>
          </div>  
                  
                  </div>

        </div>
      </div>
    </div>
  );
};