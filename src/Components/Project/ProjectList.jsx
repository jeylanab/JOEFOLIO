import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import rooflyImage from "../../Assets/roofly.png";
import joevibeImage from "../../Assets/joevibe.png"; 
import hoobankImage from "../../Assets/hoobank.png"; 

export const projects = [
  {
    id: 1,
    category: "Web Development",
    title: "Roofly",
    description: "Roofly is a modern real estate platform for renting and selling properties with an intuitive user experience.",
    techStack: "React.js, TailwindCSS, Firebase, Node.js, Express.js, and Framer",
    gif: rooflyImage,
    liveLink: "https://roofly-livid.vercel.app/",
    githubLink: "https://github.com/jeylanab/Roofly",
  },
  {
    id: 2,
    category: "Web Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibeImage,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVibe",
  },
  {
    id: 3, 
    category: "Web Development",
    title: "HooJoe Bank",
    description: "HoeJoe is a user-friendly landing page for a banking system that showcases an intuitive and modern design.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: hoobankImage, 
    liveLink: "https://hoojoebank.netlify.app/",
    githubLink: "https://github.com/jeylanab/JOOBANK",
  },
  {
    id: 4, 
    category: "Web Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibeImage,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVibe",
  },
  {
    id: 5, 
    category: "UX Design",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibeImage, 
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVibe",
  },
];

const categories = ["All", "Web Development", "UX Design", "Software Development"];

const ProjectList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div 
      className="w-full max-w-6xl mx-auto p-6 text-white flex my-24 flex-col font-mono gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 max-w-xs mx-auto md:max-w-none">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg md:text-sm text-white lg:text-lg xl:text-md text-xs font-semibold border border-gray-400 ${
              selectedCategory === category ? "bg-[#2dda0a] text-black" : "text-gray-300"
            } hover:opacity-90 hover:text-white transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`flex flex-col md:flex-row items-center border-t-2 py-4 md:p-0 gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ infinity: true }}
        >
          <div className="md:w-1/2 text-left">
            <span className="text-md font-semibold px-3 py-1 rounded-md border border-gray-400 text-white">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold mt-3 mb-4">{project.title}</h3>
            <p className="text-black text-sm mb-4">{project.description}</p>
            <p className="text-black text-sm font-semibold">{project.techStack}</p>
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
            <motion.img 
              src={project.gif} // Using normal image
              alt={project.title} 
              className="rounded-md shadow-lg w-full max-h-64 object-cover" 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
