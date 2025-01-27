import React from 'react';
import joeman from '../../Assets/joeman.png';
import './Hero.css';

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
            <p className="text-sm md:text-base mt-6 opacity-55">
              Full-stack software Developer, skilled in MERN stack development, UI/UX design, and building user-focused applications. Experienced through academic projects and internships .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
