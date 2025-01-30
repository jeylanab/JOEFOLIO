import React from "react";
import { FiExternalLink, FiGithub, FiFigma, FiSmartphone } from "react-icons/fi";

export const projects = [
  {
    id: 1,
    category: "Frontend Development",
    title: "Modern Landing Page",
    description: "A responsive landing page with animations and smooth scrolling.",
    techStack: "React, TailwindCSS",
    image: "/path-to-frontend.jpg",
    liveLink: "https://your-live-demo1.com",
    githubLink: "https://github.com/your-repo1",
    icon: <FiExternalLink size={20} />,
  },
  {
    id: 2,
    category: "Full Stack Development",
    title: "Job Portal",
    description: "A complete job posting platform with authentication and payments.",
    techStack: "MERN Stack",
    image: "/path-to-fullstack.jpg",
    liveLink: "https://your-live-demo2.com",
    githubLink: "https://github.com/your-repo2",
    icon: <FiGithub size={20} />,
  },
  {
    id: 3,
    category: "UX/UI Design",
    title: "E-Commerce UI Kit",
    description: "A sleek UI design for e-commerce platforms using Figma.",
    techStack: "Figma, Adobe XD",
    image: "/path-to-uxui.jpg",
    liveLink: "https://www.figma.com/your-project",
    githubLink: "",
    icon: <FiFigma size={20} />,
  },
  {
    id: 4,
    category: "Mobile App Development",
    title: "Fitness Tracker App",
    description: "A mobile app for tracking workouts and meal plans.",
    techStack: "React Native, Firebase",
    image: "/path-to-mobile.jpg",
    liveLink: "https://your-live-demo4.com",
    githubLink: "https://github.com/your-repo4",
    icon: <FiSmartphone size={20} />,
  },
];

const categoryColors = {
  "Frontend Development": "border-blue-400 text-blue-300",
  "Full Stack Development": "border-green-400 text-green-300",
  "UX/UI Design": "border-pink-400 text-pink-300",
  "Mobile App Development": "border-yellow-400 text-yellow-300",
};

 const ProjectList = ({ project }) => {
  return (
    <div className="bg-[#111] text-white flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg border-l-4 shadow-lg transition-transform transform hover:scale-105">
      {/* Left Section */}
      <div className="flex-1">
        <span className={`text-sm font-semibold px-3 py-1 rounded-lg ${categoryColors[project.category]}`}>
          {project.category}
        </span>
        <h3 className="text-white text-3xl font-semibold mt-3 mb-4">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <p className="text-green-400 text-sm font-medium">{project.techStack}</p>
        <div className="flex items-center gap-4 mt-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
              {project.icon}
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Right Section - Project Image */}
      <div className="flex-1">
        <img src={project.image} alt={project.title} className="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  );
};

export default ProjectList;