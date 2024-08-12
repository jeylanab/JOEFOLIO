import React, { useState } from 'react';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState('Frontend');

    const sections = {
        'Frontend': [
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: "JavaScript", level: "Advanced" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: "React Js", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', title: "Node Js", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', title: "Vue Js", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', title: "CSS3", level: "Advanced" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg', title: "Bootstrap", level: "Advanced" }
        ],
        'Design': [
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', title: "Figma", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg', title: "Adobe Illustrator", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg', title: "Adobe Photoshop", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-line.svg', title: "Adobe Xd", level: "Intermediate" }
        ],
        'Backend': [
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', title: "Node Js", level: "Intermediate" }
        ],
        'Tools': [
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', title: "Git", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', title: "Github", level: "Intermediate" },
            { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', title: "Wordpress", level: "Intermediate" }
        ]
    };

    return (
        <div className=''>
            <div className='text-white title myshadow text-center'>
                Languages and Skills
            </div>
            <div className='list-items flex justify-center items-center text-sm lg:text-lg my-10'>
                {Object.keys(sections).map(section => (
                    <p
                        key={section}
                        className={`btn-2 ${selectedSkill === section ? 'active btn-1' : ''}`}
                        onClick={() => setSelectedSkill(section)}
                    >
                        {section}
                    </p>
                ))}
            </div>
            <div className='max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {sections[selectedSkill].map((skill, index) => (
                    <div key={index} className='project m-5'>
                        <img className='imgshadow skill-hover' src={skill.image} alt={skill.title} />
                        <div className='flex justify-start items-center'>
                            <h3 className='text-white font-bold'>{skill.title}</h3>
                            <p className='text-white mx-5 maincolor font-light'>{skill.level}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    );
};

export default Skills;
