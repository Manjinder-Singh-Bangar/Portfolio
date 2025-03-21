import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import hamburgerSvgSrc from "../../public/assets/Icons/hamburger.svg"
import crossSvgSrc from "../../public/assets/Icons/crossForNav.svg"

gsap.registerPlugin(useGSAP)

const Navbar = () => {
  const navRef = useRef()
  const [isNavbarOpened, setIsNavbarOpened] = useState(false)

  const handleHamburgerClicked = (e) =>{
    e.preventDefault();
    setIsNavbarOpened((prev) => !prev)
    console.log(isNavbarOpened)

  }
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

  const linkContent = [
    {
      text: "_hello",
      link: ""
    },
    {
      text: "_about",
      link: "about",
    },
    {
      text: "_projects",
      link: "projects",
    },
    {
      text: "_blogs",
      link: "blogs",
    },

  ]

  return (
    <nav ref={navRef} className={`text-[#607B96] xs:p-0 h-full xs:flex-col lg:flex-row z-[100] sticky top-[0] border-b-2 bg-[#011627]/70 backdrop-blur-md ${isNavbarOpened ? "" : "h-fit"} border-[#1E2D3D] w-full flex justify-between`}>

        <div className='flex xs:p-6 lg:p-0 xs:border-b-[1px] xs:border-[#1E2D3D] lg:border-b-none justify-between'>
          <p className='w-56 lg:p-3 lg:border-r-2 border-[#1E2D3D]'>Manjinder Singh</p>
          <img onClick={handleHamburgerClicked} className='xs:block lg:hidden' src={isNavbarOpened ? crossSvgSrc : hamburgerSvgSrc} alt="hamburger" />
        </div>
        
        <ul className={`xs:flex-col lg:justify-between absolute xs:w-screen lg:top-0 lg:relative lg:z-10 lg:opacity-100 lg:h-fit xs:h-screen top-[74.4px] bg-[#011627] transition-all lg:w-full lg:flex-row duration-300 flex ${isNavbarOpened ? "" : "mobileNavHidden"}`}>
          <div className={`flex lg:flex-row xs:flex-col transition-all items-center`}>
            {
              linkContent.map((item, index) =>{
                return (
                  <NavLink key={index} to={item.link} className={({isActive}) => isActive ? `p-3 lg:border-r-2 xs:w-full lg:w-fit transition-all border-b-2 border-b-[#FEA55F] xs:text-start lg:border-r-[#1E2D3D]` : `p-3 lg:border-r-2 xs:text-start xs:border-b-[1px] xs:border-b-[#1E2D3D] xs:w-full lg:w-fit border-r-[#1E2D3D] `}>{item.text}</NavLink>

                )
              })
            }
          </div>
        <NavLink 
          to={"contact-me"} 
          className={({isActive}) => isActive ? `p-3 transition-all lg:border-l-2 border-[#1E2D3D] border-b-[1px] border-b-[#FEA55F]` : `p-3 xs:border-b-[1px] transition-all xs:border-b-[#1E2D3D] lg:border-l-2 lg:border-l-[#1E2D3D] `}>_contact-me</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar