import React, { useState } from "react";
import { FiExternalLink, FiGithub, FiFigma, FiSmartphone } from "react-icons/fi";
import roofly from "../../Assets/roofly.gif";
import joevibe from "../../Assets/joevibe.gif";
import { motion, AnimatePresence } from "framer-motion";

export const projects = [
  {
    id: 1,
    category: "Frontend Development",
    title: "Modern Landing Page",
    description: "A responsive landing page with animations and smooth scrolling.",
    techStack: "React, TailwindCSS",
    gif: roofly,
    liveLink: "https://your-live-demo1.com",
    githubLink: "https://github.com/your-repo1",
  },
  {
    id: 2,
    category: "Full Stack Development",
    title: "Job Portal",
    description: "A complete job posting platform with authentication and payments.",
    techStack: "MERN Stack",
    gif: joevibe,
    liveLink: "https://your-live-demo2.com",
    githubLink: "https://github.com/your-repo2",
  },
];

const categoryColors = {
  "Frontend Development": "border-blue-400 text-blue-300",
  "Full Stack Development": "border-green-400 text-green-300",
};

const ProjectList = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const project = projects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 text-white flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism p-6 rounded-xl shadow-lg border border-gray-700 relative w-full max-w-lg"
        >
          <span className={`text-sm font-semibold px-3 py-1 rounded-lg ${categoryColors[project.category]}`}>
            {project.category}
          </span>
          <h3 className="text-3xl font-semibold mt-3 mb-4">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <p className="text-green-400 text-sm font-medium">{project.techStack}</p>

          <div className="flex items-center gap-4 mt-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <FiExternalLink size={24} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <FiGithub size={24} />
              </a>
            )}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-6 flex justify-center"
          >
            <img
              src={project.gif}
              alt={project.title}
              className="rounded-lg shadow-lg w-full max-h-64 object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="flex justify-between w-full max-w-lg mt-6">
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1 }}
          className="bg-gray-800 p-3 rounded-full hover:bg-gray-600"
        >
          ◀
        </motion.button>
        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.1 }}
          className="bg-gray-800 p-3 rounded-full hover:bg-gray-600"
        >
          ▶
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectList;
