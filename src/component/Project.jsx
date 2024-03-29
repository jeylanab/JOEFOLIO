import React from 'react'
import { Projects } from '../constants'

const Project = () => {
  return (
      <div>
            <div className='whatDo font-semibold lg:text-4xl text-3xl text-center py-10'>My Projects</div>
            <div className='projectcard flex   justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
                    {Projects.map((project, index) => (
                        <div className=' bgcard border shadow-lg shadow-black rounded-md flex items-center flex-col-reverse justify-center m-3' key={index}>
                            <div className='left  m-3'>
                                <div className='whatDo text-2xl '>{project.title}</div>
                                <div className='font-poppins text-sm font-light'>{project.description}</div>
                                <div className=' font-poppins text-sm font-light'>
                                    <span className='whatDo '>Technologies: <br /> </span>
                                    {project.Technologies}
                                </div>
                            </div>
                            <div className='right'>
                                <a href={project.link}> <img
                                className=''
                                src={project.imageUrl}
                                alt={project.title}
                                    /></a>
                               
                            </div>
                    </div> 
                    ))}
                </div>
            </div>

  
    </div>
  )
}

export default Project