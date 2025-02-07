import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import roofly from "../../Assets/roofly.gif";
import joevibe from "../../Assets/joevibe.gif";

export const projects = [
  {
    id: 1,
    category: "Full Stack Development",
    title: "Roofly",
    description: "Roofly is a modern real estate platform for renting and selling properties with an intuitive user experience.",
    techStack: "React.js, TailwindCSS, Firebase, Node.js,Express.js and Framer",
    gif: roofly,
    liveLink: "https://roofly-livid.vercel.app/",
    githubLink: "https://github.com/jeylanab/Roofly",
  },
  {
     id: 2,
    category: "Mern Stack Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
  {
     id: 2,
    category: "Mern Stack Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
  {
     id: 2,
    category: "Mern Stack Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
    {
     id: 2,
    category: "Mern Stack Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
];

const ProjectList = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 text-white flex flex-col gap-12">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="md:w-1/2 text-left">
            <span className="text-sm font-semibold px-3 py-1 rounded-lg border border-gray-400 text-gray-300">
              {project.category}
            </span>
            <h3 className="text-3xl font-semibold mt-3 mb-4">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <p className="text-green-400 text-sm font-medium">{project.techStack}</p>
            <div className="flex items-center gap-4 mt-4">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                  <FiExternalLink size={24} />
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                  <FiGithub size={24} />
                </a>
              )}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={project.gif} alt={project.title} className="rounded-lg shadow-lg w-full max-h-64 object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
