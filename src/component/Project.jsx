import React from 'react'
import { Projects } from '../constants'

const Project = () => {
  return (
      <div>
            <div className='whatDo font-semibold lg:text-4xl text-3xl text-center py-10'>My Projects</div>
            <div className='projectcard flex justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
                    {Projects.map((project, index) => (
                    <div className='m-10 border bg-emerald-500 rounded-md text-center p-3 relative' key={index}>
                        <div className='whatDo text-3xl'>{project.title}</div>
                        <div>{project.description}</div>
                        <div>
                            <span className='whatDo'>Technologies: <br /> </span>
                            {project.Technologies}
                        </div>
                        {/* Image element for project picture */}
                        <img
                        className='absolute top-0 left-0 w-full h-full rounded-md object-cover opacity-0 hover:opacity-100 transition-opacity duration-300'
                        src={project.imageUrl}
                        alt={project.title}
                            />
                            <div className='linkes flex z-20 justify-between items-end items-baseline m-10 content-end'>
                                <div className='border p-2 rounded-md'>Deployed</div>      
                                <div className='border p-2 rounded-md'>Repository</div>      
                             </div>
                    </div> 
                    ))}
                </div>
            </div>

  
    </div>
  )
}

export default Project