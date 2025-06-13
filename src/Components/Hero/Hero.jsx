import React from 'react';
import { motion } from 'framer-motion';
import joeman from '../../Assets/joeman.png';
import joecv from '../../Assets/joecv.pdf';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export const Hero = () => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen py-16 px-4 flex flex-col justify-center items-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Halo */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#1a1a1a] z-0" />

      {/* Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl z-10">
        {/* Left Text Section */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2 space-y-4 sm:space-y-6"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green-400 text-xs sm:text-sm tracking-widest uppercase">Hello There!</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            I’m <span className="text-green-400">Jeylan Abdo</span>,<br />
            Full-Stack Developer.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            MERN stack developer building fast, responsive apps with great UI.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-5 justify-center lg:justify-start">
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-green-400 hover:text-black transition text-sm sm:text-base"
              >
                View Work
              </motion.button>
            </a>
            <a href={joecv} download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black/50 border border-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold backdrop-blur-md hover:bg-white hover:text-black transition text-sm sm:text-base"
              >
                Download CV
              </motion.button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 justify-center lg:justify-start">
            {[
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jeylan-tesi-53a746257/" },
              { icon: <FaTwitter />, url: "https://x.com/jetu81" },
              { icon: <FaGithub />, url: "https://github.com/jeylanab/" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/your-profile" }
            ].map(({ icon, url }, i) => (
              <a href={url} key={i} target="_blank" rel="noopener noreferrer"
                className="text-green-400 text-xl sm:text-2xl hover:scale-110 hover:text-white transition">
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="relative lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute bg-green-400 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-20 z-0" />
          <motion.div whileHover={{ scale: 1.05, rotate: 1 }} className="relative z-10">
            <img
              src={joeman}
              alt="Jeylan Abdo"
              className="w-52 sm:w-64 lg:w-[400px] rounded-full border-4 border-green-400 shadow-xl"
            />
            {/* Badge (optional to hide on XS screens) */}
            <motion.div
              className="absolute bottom-4 right-4 bg-green-500 px-3 py-1 rounded-full text-black font-semibold text-xs sm:text-sm shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              MERN Stack Developer
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="w-full overflow-hidden bg-green-400 mt-12 sm:mt-16 relative">
        <div className="flex animate-marquee whitespace-nowrap text-black font-semibold text-sm sm:text-lg py-3 space-x-10 sm:space-x-16 px-4">
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>UI/UX</span>
          <span>Tailwind CSS</span>
          <span>Firebase</span>
          <span>REST API</span>
          <span>Git & GitHub</span>
        </div>
        <div className="absolute top-0 left-0 w-10 sm:w-20 h-full bg-gradient-to-r from-green-400 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-10 sm:w-20 h-full bg-gradient-to-l from-green-400 to-transparent z-10"></div>
      </div>
    </motion.div>
  );
};
