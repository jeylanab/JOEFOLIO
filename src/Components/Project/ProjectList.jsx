import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import roofly from "../../Assets/roofly.gif";
import joevibe from "../../Assets/joevibe.gif";

export const projects = [
  {
    id: 1,
    category: "Web Development",
    title: "Roofly",
    description: "Roofly is a modern real estate platform for renting and selling properties with an intuitive user experience.",
    techStack: "React.js, TailwindCSS, Firebase, Node.js, Express.js, and Framer",
    gif: roofly,
    liveLink: "https://roofly-livid.vercel.app/",
    githubLink: "https://github.com/jeylanab/Roofly",
  },
  {
    id: 2,
    category: "Web Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
  {
    id: 2,
    category: "Web Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
  {
    id: 2,
    category: "Web Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
  {
    id: 2,
    category: "Web Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
  },
  {
    id: 2,
    category: "Web Development",
    title: "JoeVibe",
    description: "JoeVibe is a feature-rich e-commerce platform offering a seamless shopping experience.",
    techStack: "JavaScript, HTML5, CSS, React.js, TailwindCSS, Node.js, Express.js, and MongoDB",
    gif: joevibe,
    liveLink: "https://joevibe.vercel.app/",
    githubLink: "https://github.com/jeylanab/joeVib",
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
      className="w-full max-w-6xl mx-auto p-6 text-white flex flex-col gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border border-gray-400 ${
              selectedCategory === category ? "bg-green-500 text-white" : "text-gray-300"
            } hover:bg-green-400 hover:text-white transition`}
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
          className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ infinity: true }}
        >
          <div className="md:w-1/2 text-left">
            <span className="text-sm font-semibold px-3 py-1 rounded-lg border border-gray-400 text-gray-300">
              {project.category}
            </span>
            <h3 className="text-3xl font-semibold mt-3 mb-4">{project.title}</h3>
            <p className="text-gray-300 opacity-80 text-sm mb-4">{project.description}</p>
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
            <motion.img 
              src={project.gif} 
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
