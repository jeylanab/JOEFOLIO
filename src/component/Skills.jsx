import React from 'react';
import { useState } from 'react';
import Xd from "../Assets/Xd.svg"


const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState('Frontend');

  const sections = {
    'Frontend': [
      {
        image: Xd,
        title: "Adobe",
        level: "low"
      },
       {
        image: "",
        title: "",
        level: ""
      },
        {
        image: "",
        title: "",
        level: ""
      },
         {
        image: "",
        title: "",
        level: ""
      },
          {
        image: "",
        title: "",
        level: ""
      }
      
      
    ],
    'UX/UI Design': [
       {
        image: "",
        title: "",
        level: ""
      },
       {
        image: "",
        title: "",
        level: ""
      },
        {
        image: "",
        title: "",
        level: ""
      },
         {
        image: "",
        title: "",
        level: ""
      }
     
    ],
    'Backend': [
      
    ],
    'MERN Stack': [
      
    ]
  };
  return (
    <div className=''>
      <div className=' text-white title myshadow text-center'>
        Languages and Skills
      </div>
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
      <div className='max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        {sections[selectedSkill].map((skill, index) => (
          <div key={index} className='project m-5 '>  
            <img className='imgshadow' src={skill.image} alt={skill.title} />
            <h3 className=''>{skill.title}</h3>
            <p className=' my-5'>{skill.level}</p>
          </div>
        ))}
      </div>
      
      
    
    
    </div>
  )
}

export default Skills