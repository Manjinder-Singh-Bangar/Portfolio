import React, { useRef, useEffect } from 'react'
import Card from '../Components/Card'
import { projects } from '../../public/assets/Data/slider'
import gsap from 'gsap'

const Projects = () => {
  const projectCardRef = useRef()
 
  
  return (
  <section ref={projectCardRef} className=''>
    <Card projectsArr={projects} />
  </section>

  )
}

export default Projects