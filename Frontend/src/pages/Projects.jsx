import React, { useState, useEffect } from 'react'
import arrowFilledSvgSrc from "../../public/assets/Icons/filled-arrow.svg"
import gsap from 'gsap'
import { projects, skills, experience } from '../../public/assets/Data/projects'
import Experience from '../Components/Experience'
import MobileCard from '../Components/MobileCard'


const Projects = () => {
  const [isSkillsOpened, setIsSkillsOpened] = useState(true);
  const [isExperienceOpened, setIsExperienceOpened] = useState(true);
  
  useEffect(() => {
    gsap.to(".card",{
      opacity: 1, 
      stagger: 0.3,
      ease: "power2.inOut"
    })
  }, [])
  
  
  return (
  <div className='w-full flex lg:h-[calc(100vh-104.2px)] overflow-hidden text-[#607B96] items-center h-screen'>
    <div className='h-full border-r-[1px] overflow-y-scroll flex-[0.3] border-[#1E2D3D] sticky top-0'>
      <div className={` ${isSkillsOpened ? "pb-6 h-fit gap-3  border-b-[1px]" : "h-[51.8px] gap-0 border-b-0 p-0"} transition-all flex-col flex border-[#1E2D3D]`}>
        <button onClick={() => setIsSkillsOpened((prev) => !prev)} className={`flex transition-all bg-[#011627] gap-3 z-10 text-[18px] ${isSkillsOpened ? "text-white" : ""} w-full px-6 py-3 border-b-[1px] border-[#1E2D3D]`}><img className={`${isSkillsOpened ? "rotate-0" : "rotate-[-90deg]"}`} src={arrowFilledSvgSrc} alt="" />skills</button>
        <div className={`grid grid-cols-3 w-full gap-6 p-6 transition-all text-[16px] relative ${isSkillsOpened ? "top-[0]  opacity-1 h-fit" : "p-0 opacity-0 z-[-1] top-[-100px] h-0"}`}>
            {
              skills.map((item) =>{
                return (
                  <img className={`w-[30px] hover:scale-[1.3] transition-all scale-[1] h-[30px] ${isSkillsOpened ? "relative" : "absolute"}`} src={item} />
                )
              })
             }
        </div>
      </div>
      <div className={` ${isExperienceOpened ? "pb-6 h-fit gap-3  " : "h-fit gap-0 border-b-0 p-0"} transition-all flex-col h-fit flex border-[#1E2D3D]`}>
          <button onClick={() => setIsExperienceOpened((prev) => !prev)} className={`flex transition-all bg-[#011627] gap-3 z-10 text-[18px] ${isExperienceOpened ? "text-white" : ""} w-full px-6 py-3 border-b-[1px] border-[#1E2D3D]`}><img className={`${isExperienceOpened ? "rotate-0" : "rotate-[-90deg]"}`} src={arrowFilledSvgSrc} alt="" />experience</button>
          <div className={`grid w-full gap-6 p-6 transition-all text-[16px] relative ${isExperienceOpened ? "top-[0]  opacity-1 h-fit" : "p-0 opacity-0 z-[-1] top-[-100px] h-0"}`}>
              {experience.map((item) => {
                return (
                  <Experience picture={item.picture} startingTime={item.startingTime} endingTime={item.endingTime} projectName={item.pr}/>
                )
              })} 
          </div>
      </div>
    </div>
    <div className='p-7 flex-[1.7] gap-4 flex'>
      {
        projects.map((item) =>{
          return (
            <MobileCard tools={item.tools} imageSrc={item.imgSrc} title={item.title} body={item.body} projectSrc={item.projectSrc} />
          )

       })

      }
    </div>
  </div>

  )
}

export default Projects