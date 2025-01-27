import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Hero } from '../Components/Hero/Hero'
import Stats from '../Components/Stats/Stats'
import Services from '../Components/Services/Services'
import Experiences from '../Components/Experiences/Experiences'

export const Home = () => {
  return (
      <div className=''>
        <Navbar/>
      <Hero />
      <Stats />
      <Services />
      <Experiences/>
      </div>
  )
}
