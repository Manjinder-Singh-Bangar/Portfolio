import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import twitterSvgSrc from "../../public/assets/Icons/twitter.svg"
import facebookSvgSrc from "../../public/assets/Icons/facebook.svg"
import githubSvgSrc from "../../public/assets/Icons/github.svg"
import {ScrollTrigger} from "gsap/all";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Footer = () => {
  const footerRef = useRef()
  useGSAP(() =>{
    gsap.fromTo(footerRef.current, 
      {
        opacity: 0
      },
      {
        opacity:1,
        duration:1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 97%",
          end: "top 99%",
         
        },
        ease: "power1.inOut"
      }
    )
  })

  return (
    <footer ref={footerRef} className='text-[#607B96] justify-between flex p-0 border-t-2 border-t-[#1E2D3D]'>
        <ul className='flex items-center'>
            <p className='p-3 w-fit border-r-2 border-r-[#1E2D3D]'>find me in:</p>
            <Link className='w-fit p-3 border-r-2 border-r-[#1E2D3D]'><img className=' ' src={twitterSvgSrc} alt="twitter" /></Link>
            <Link className='w-fit p-3 border-r-2 border-r-[#1E2D3D]'><img className=' ' src={facebookSvgSrc} alt="twitter" /></Link>
        </ul>
        <Link className='w-fit flex gap-1 p-3 border-l-2 border-l-[#1E2D3D]'>@Manjinder-Singh-Bangar <img className=' ' src={githubSvgSrc} alt="twitter" /></Link>
    </footer>
  )
}

export default Footer