import React from 'react';
import { useState } from 'react';


const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState('Frontend');

  const sections = {
    'Frontend': [
      
      
    ],
    'UX/UI Design': [
     
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
      
      
      
    
    
    </div>
  )
}

export default Skills