import React, { useRef } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const Navbar = () => {
  const navRef = useRef()

  useGSAP(() =>{
    gsap.fromTo(navRef.current, 
      {
        y: -50,

      },
      {
        duration: 2,
        y: 0,
        ease: 'elastic.out',
      }
  )
  },[navRef.current])


  return (
    <nav ref={navRef} className='text-[#607B96] z-10 sticky top-[0] border-b-2 bg-[#011627]/70 backdrop-blur-md  border-[#1E2D3D] w-full flex justify-between'>
        <ul className=' flex'>
            <p className='w-56 p-3 border-r-2 border-[#1E2D3D]'>Manjinder Singh</p>
            <NavLink to={""} className={({isActive}) => isActive ? `p-3 border-r-2 border-b-4 border-b-[#FEA55F] border-r-[#1E2D3D]` : `p-3 border-r-2 border-r-[#1E2D3D] `}>_hello</NavLink>
            <NavLink to={"about"} className={({isActive}) => isActive ? `p-3 border-r-2  border-b-4 border-b-[#FEA55F] border-r-[#1E2D3D]` : `p-3 border-r-2 border-r-[#1E2D3D] `}>_about</NavLink>
            <NavLink to={"projects"} className={({isActive}) => isActive ? `p-3 border-r-2 border-b-4 border-b-[#FEA55F] border-r-[#1E2D3D]` : `p-3 border-r-2 border-r-[#1E2D3D] `}>_projects</NavLink>
            <NavLink to={"blogs"} className={({isActive}) => isActive ? `p-3 border-r-2 border-b-4 border-b-[#FEA55F] border-r-[#1E2D3D]` : `p-3 border-r-2 border-r-[#1E2D3D] `}>_blogs</NavLink>
        </ul>
        <NavLink to={"contact-me"} className={({isActive}) => isActive ? `p-3 border-l-2 border-[#1E2D3D] border-b-2 border-b-[#FEA55F]` : `p-3 border-l-2 border-l-[#1E2D3D] `}>_contact-me</NavLink>
    </nav>
  )
}

export default Navbar