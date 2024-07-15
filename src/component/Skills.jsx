import React from 'react';
import { useState } from 'react';
import javascript from "../Assets/javascript.svg";
import css from "../Assets/css.svg";
import bootstrap from "../Assets/bootstrap.svg";
import git from "../Assets/git.svg";
import github from "../Assets/github.svg";
import illustrator from "../Assets/illustrator.svg";
import java from "../Assets/java.svg";
import mongodb from "../Assets/mongodb.svg";
import mysql from "../Assets/mysql.svg";
import photoshop from "../Assets/photoshop.svg";
import react from "../Assets/react.svg";
import wordpress from "../Assets/wordpress.svg";
import node from "../Assets/node.svg";
import vue from "../Assets/vue.svg";
import Xd from "../Assets/Xd.svg";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState('Frontend');

  const sections = {
    'Frontend': [
      {
        image: javascript,
        title: "JavaScript",
        level: "Advanced"
      },
       {
        image: react,
        title: "React Js",
        level: "Intermediate"
      },
        {
        image: node,
        title: "Node Js",
        level: "Intermediate"
      },
         {
        image: vue,
        title: "Vue Js",
        level: "Intermediate"
      },
          {
        image: css,
        title: "CSS3",
        level: "Advanced"
      },
          {
        image: bootstrap,
        title: "Bootstrap",
        level: "Advanced"
      },
          {
        image: css,
        title: "CSS3",
        level: "Advanced"
      }
      
      
      
      
    ],
    'Design': [
       {
        image: Xd,
        title: "Figma",
        level: "Intermediate"
      },
       {
        image: illustrator,
        title: "Adobe Illustrator",
        level: "Intermediate"
      },
        {
        image: photoshop,
        title: "Adobe Photoshop",
        level: "Intermediate"
      },
         {
        image: Xd,
        title: "Adobe Xd",
        level: "Intermediate"
      }
     
    ],
    'Backend': [
      {
        image: node,
        title: "Node Js",
        level: "Intermediate"
      },
      {
        image: node,
        title: "Node Js",
        level: "Intermediate"
      }
      
    ],
    'Tools': [
         {
        image: git,
        title: "Git",
        level: "Intermediate"
      },
         {
        image: github,
        title: "Github",
        level: "Intermediate"
      },
      {
        image: wordpress,
        title: "Wordpress",
        level: "Intermediate"
      }
    ]
  };
  return (
    <div className=''>
      <div className=' text-white title myshadow text-center'>
        Languages and Skills
      </div>
      {/* mapping through the button of the skill section */}
      <div className='list-items flex justify-center items-center text-sm lg:text-lg my-10'>
        {Object.keys(sections).map(section => (
          <p
            key={section}
            className={`btn-2 ${selectedSkill === section ? 'active, btn-1' : ''}`}
            onClick={() => setSelectedSkill(section)}
          >
            {section}
          </p>
        ))}
      </div>
      {/* mapping through the object of the skill */}
      <div className='max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {sections[selectedSkill].map((skill, index) => (
          <div key={index} className='project m-5 '>  
            <img className='imgshadow skill-hover ' src={skill.image} alt={skill.title} />
            <div className=' flex justify-start items-center'>
               <h3 className=' text-white font-bold'>{skill.title}</h3>
                <p className=' text-white mx-5 maincolor font-light '>{skill.level}</p>
            </div>
            
          </div>
        ))}
      </div>
      
      
    
    
    </div>
  )
}

export default Skills