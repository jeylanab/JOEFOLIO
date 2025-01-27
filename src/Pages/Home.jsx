import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Hero } from '../Components/Hero/Hero'
import Stats from '../Components/Stats/Stats'

export const Home = () => {
  return (
      <div className=''>
        <Navbar/>
      <Hero />
      <Stats/>
      </div>
  )
}
