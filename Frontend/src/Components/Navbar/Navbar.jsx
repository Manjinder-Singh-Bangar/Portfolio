import React from 'react';
import {NavLink} from "react-router-dom"
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Navbar = () => {
  const ulRef = useRef();
  const hamburgerRef = useRef();
  const cursorRef = useRef();

  if(ulRef.current){
    ulRef.current.addEventListener("mouseover", (e)=>{
      cursorRef.current.style.top = e.clientY + "px";
      cursorRef.current.style.left = e.clientX + "px";
    })

  }

  const handleNavToggleClick = (e) =>{
    e.preventDefault()
    ulRef.current.classList.toggle("visible")
    if(ulRef.current.classList.contains("visible")){
      hamburgerRef.current.classList.add("gap-0")
      hamburgerRef.current.childNodes.forEach(element => {
        element.classList.remove("secondary-color")
      });
      hamburgerRef.current.childNodes[0].classList.add("cross")
      hamburgerRef.current.childNodes[1].classList.add("none")
      hamburgerRef.current.childNodes[2].classList.add("cross")
    }else if(!ulRef.current.classList.contains("visible")){
      hamburgerRef.current.classList.remove("gap-0")
      hamburgerRef.current.childNodes.forEach((item,index) =>{
        item.classList.add("secondary-color")
        item.classList.remove("cross")
        if(index ==1) item.classList.remove("none")
      })
    }
  }

  return (
    <nav>
        {/* <FontAwesomeIcon ref={navTogglerRef} onClick={handleNavToggleClick} color='white' size='2xl' icon={faEllipsis} /> */}
        <div ref={hamburgerRef} onClick={handleNavToggleClick} className="hamburger">
          <span className='secondary-color'></span>
          <span className='secondary-color'></span>
          <span className='secondary-color'></span>
        </div>
        <ul ref={ulRef}>
          <span ref={cursorRef}></span>
           <li><Link>Home</Link></li>
           <li><Link>About</Link></li>
           <li><Link>Blogs</Link></li>
           <li><Link>Projects</Link></li>
        </ul>
        <h2>Manjinder Singh</h2>
    </nav>
  )
}

export default Navbar