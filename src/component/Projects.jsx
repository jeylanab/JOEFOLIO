import React, { useState } from 'react';
import man from "../Assets/man.svg";
import savefood from "../Assets/savefood.svg";
import joevibe from "../Assets/joevibe.svg";
import haveaword from "../Assets/haveaword.svg";

const Projects = () => {
  const [selectedSection, setSelectedSection] = useState('Frontend');

  const sections = {
    'Frontend': [
      {
        title: 'SaveFood',
        description: 'A platform designed to reduce food waste by connecting restaurants with surplus food to local communities in need.',
        imageUrl: savefood,
        deployedLink: 'https://savefood.com',
        githubLink: 'https://github.com/yourusername/savefood'
      },
      {
        title: 'Have a Word',
        description: 'An innovative language learning app that uses gamification and interactive exercises to help users master new languages.',
        imageUrl: haveaword,
        deployedLink: 'https://haveaword.com',
        githubLink: 'https://github.com/yourusername/haveaword'
      },
      {
        title: 'Job Nest',
        description: 'A job search engine that uses AI to match candidates with their ideal job based on skills, preferences, and experiences.',
        imageUrl: savefood, // You might want to replace this with the actual image for Job Nest
        deployedLink: 'https://jobnest.com',
        githubLink: 'https://github.com/yourusername/jobnest'
      },
      {
        title: 'JoeVibe',
        description: 'A social media platform that allows users to share their music playlists, discover new tunes, and connect with fellow music enthusiasts.',
        imageUrl: joevibe,
        deployedLink: 'https://joevibe.com',
        githubLink: 'https://github.com/yourusername/joevibe'
      }
    ],
    'UX/UI Design': [],
    'Backend': [],
    'MERN Stack': []
  };

  return (
    <div className='text-white'>
      <div className=' flex lg:flex-row flex-col justify-center items-center m-10 '>
        <div className='highlights m-10 text-center anime-l border myshadow'>
          <h1 className='font-bold myshadow btn-1 mb-5'>Project Highlights</h1>
          <p>😄Innovative</p>
          <p>😄User-Friendly</p>
          <p>😄Scalable</p>
          <p>😄Responsive</p>
          <p>😄UX/UI Design</p>
          <p>😄Backend</p>
          <p>😄Frontend</p>
        </div>
        <img className='w-60 anime-2' src={man} alt="man in a hood" />
        <div className='acheivements m-10 text-center anime-r border myshadow'>
          <h1 className='font-bold myshadow btn-1 mb-5 anime'>Achievements</h1>
          <p>🎯 20+ Clients</p>
          <p>🎯 50+ Projects</p>
          <p>🎯 5⭐ rate on fiverr</p>
          <p>🎯 50K+ Lines of code</p>
        </div>
      </div>
      <h1 className='text-center title p-10 myshadow anime-l'>My Work Samples</h1>
      <div className='list-items flex justify-center items-center text-sm lg:text-lg my-10 anime-2'>
        {Object.keys(sections).map(section => (
          <p
            key={section}
            className={`btn-2 ${selectedSection === section ? 'active btn-1' : ''}`}
            onClick={() => setSelectedSection(section)}
          >
            {section}
          </p>
        ))}
      </div>
      <div className='anime-r p-20 m-10 lg:w-[900px] md:[900px] w-[400px] max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        {sections[selectedSection].map((project, index) => (
          <div 
            key={index} 
            className='project m-5 relative group'
            style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', overflow: 'hidden' }}
          >
            <h3 className='title'>{project.title}</h3>
            <p className='my-5'>{project.description}</p>
            <img className='imgshadow' src={project.imageUrl} alt={project.title} />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col space-y-4 transition-opacity duration-300">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className='btn-2'>
                 Live Project
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='btn-2'>
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
