import React from 'react'
import Card from '../Components/Card'
import { projects } from '../../public/assets/Data/slider'

const Projects = () => {
  return (
  <section className=''>
    <Card projectsArr={projects} />
  </section>

  )
}

export default Projects