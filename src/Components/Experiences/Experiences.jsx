import React, { useState } from "react";
import "./Experiences.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiVuedotjs,
  SiGithub,
  SiGit,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiAdobexd,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const tabs = ["Experience", "Education", "Skills", "About me"];

// Placeholder data
const placeholderData = {
  Experience: [
    { year: "2024 - Present", role: "MERN Stack Developer", company: "Freelance / Upwork" },
    { year: "Summer 2024", role: "Frontend Developer Intern", company: "Mirage Media Group" },
    { year: "2023 - 2024", role: "Frontend Developer", company: "SaveFood Project" },
    { year: "2023", role: "Frontend Developer", company: "Have A Word Project" },
    { year: "2023", role: "Frontend Developer", company: "JoeVibe Project" },
    { year: "2022 - 2023", role: "Frontend Developer Intern", company: "Web Design Studio (Bootcamp)" },
    { year: "2022", role: "Freelance Web Developer", company: "E-commerce Startup" },
    { year: "2021 - 2022", role: "Web Development Intern", company: "Startup Lab" },
  ],
  Education: [
    { year: "2025", degree: "BCA in Computer Science", institution: "Maharishi Markandeshwar University" },
    { year: "2021", degree: "Frontend Web Development Bootcamp (MERN Stack)", institution: "Cogrammer" },
    { year: "2021", degree: "Frontend Web Development Bootcamp", institution: "edX" },
    { year: "2018", degree: "High School Diploma", institution: "High School in Ethiopia" },
  ],
  Skills: {
    Languages: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
    ],
    Tools: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Adobe XD", icon: <SiAdobexd /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  "About me":
    "I am a passionate software developer currently specializing in MERN stack development. I have experience in both front-end and back-end development, contributing to projects like JoeVibe, Have A Word, and SaveFood. I'm enthusiastic about creating user-friendly applications and solving real-world problems with modern web technologies. My goal is to grow as a full-stack engineer while collaborating on innovative projects.",
};


const Experiences = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <div className=" text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Why hire me?
      </h2>
      <div className="md:flex">
        {/* Left Tabs */}
        <div className="flex lg:w-1/4 md:flex-col border-lime-400 gap-4 mb-8 md:mb-0 md:mr-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full md:w-auto px-2 py-5 text-left rounded-md ${
                activeTab === tab
                  ? "button-primary text-white"
                  : " "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Content  of the experience */}
        <div className="flex-1">
          {activeTab === "Experience" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-72 custom-scrollbar overflow-y-auto scrollbar-thin scrollbar-thumb-[#2dda0a] scrollbar-track-gray-800">
              {placeholderData.Experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-700 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-green-500">
                    {exp.year}
                  </h3>
                  <p className="text-xl font-medium">{exp.role}</p>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Education" && (
            <div className="max-h-72 overflow-y-auto custom-scrollbar scrollbar-thin scrollbar-thumb-[#2dda0a] scrollbar-track-gray-800">
              {placeholderData.Education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-700 rounded-lg shadow-md mb-4"
                >
                  <h3 className="text-lg font-semibold text-green-500">
                    {edu.year}
                  </h3>
                  <p className="text-xl font-medium">{edu.degree}</p>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Skills" && (
            <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-[#2dda0a] custom-scrollbar scrollbar-track-gray-800">
              <h3 className="text-2xl font-semibold text-green-500 mb-4">Languages</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                {placeholderData.Skills.Languages.map((skill, index) => (
                  <div
                    key={index}
                    className="relative group bg-gray-800 rounded-lg p-4 flex justify-center items-center"
                  >
                    <div className="text-[#e789ff] text-4xl">
                      {skill.icon}
                    </div>
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {placeholderData.Skills.Tools.map((skill, index) => (
                  <div
                    key={index}
                    className="relative group bg-gray-800 rounded-lg p-4 flex justify-center items-center"
                  >
                    <div className="text-[#ed89ff] text-4xl">
                      {skill.icon}
                    </div>
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "About me" && (
            <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-[#2dda0a] custom-scrollbar scrollbar-track-gray-800">
              
              <p className="text-gray-400">{placeholderData["About me"]}</p>
              

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiences;