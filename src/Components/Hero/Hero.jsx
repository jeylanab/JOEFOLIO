import React from 'react';
import { motion } from 'framer-motion';
import joeman from '../../Assets/joeman.png';
import joecv from '../../Assets/joecv.pdf';
import TechStack from './TechStack';
import './Hero.css';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export const Hero = () => {
  return (
    <motion.div 
      className="hero my-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Tech Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >

      </motion.div>

      <motion.div 
        className="container-hero flex flex-col lg:flex-row justify-between items-center mx-5 lg:mx-20 space-y-10 lg:space-y-0 relative z-10"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
<motion.div 
  className="image-container order-1 lg:order-2 lg:w-1/2 flex justify-center lg:justify-end"
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  whileHover={{ rotate: [0, 3, -3, 0], scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <motion.img
    className="w-80 md:w-64 lg:w-[400px] xl:w-[600px] rounded-full shadow-lg"
    src={joeman}
    alt="Jeylan Abdo"
    whileHover={{ scale: 1.05, rotate: 3 }}
    animate={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
  />
</motion.div>


        {/* Text Container */}
        <motion.div 
          className="text-container order-2 lg:order-1 lg:w-1/2 text-center lg:text-left"
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-2xl font-mono text-black">Hello I'm</h2>
          <h1 className="text-5xl md:text-7xl my-2 font-mono font-extrabold ">Jeylan Abdo</h1>
          <h2 className="text-2xl md:text-4xl font-mono  font-extrabold mb-5 ">Software Developer</h2>
          <span className="text-sm font-mono md:text-base mt-6">
            Full-stack software Developer, skilled in MERN stack development, UI/UX design, and building user-focused applications. Experienced through academic projects and internships.
          </span>
          <div className='flex sm:flex-col my-5 my-5 md:flex-row justify-center lg:justify-start'>
            <motion.div 
              className="mt-6 mr-5"
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={joecv}
                download
                className="bg-[#2dda0a] primary-button text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-600 transition duration-300"
              >
                Download CV
              </a>
            </motion.div>
            <motion.div 
              className="mt-6 flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
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
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <TechStack />
    </motion.div>
  );
};
