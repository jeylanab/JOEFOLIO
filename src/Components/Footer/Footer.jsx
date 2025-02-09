import React from 'react';
import { FaGithub, FaLinkedin, FaTimes  } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="text-center py-8 fixed bottom-0 left-0 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center">

        
        <div className="flex gap-8 justify-center mb-3">
          <motion.a
            href="https://github.com/jeylanab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-500 transform transition duration-300 ease-in-out"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jeylan-tesi-53a746257/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-500 transform transition duration-300 ease-in-out"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/jetu81"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-500 transform transition duration-300 ease-in-out"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaTimes  />
          </motion.a>
        </div>

        <div className="text-md text-gray-200 opacity-80">
          <p className='font-mono'>CONTACTS</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
