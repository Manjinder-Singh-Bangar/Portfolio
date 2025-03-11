import React, { useEffect, useRef, useState } from 'react'
import screwSvgSrc from "../../public/assets/Icons/screw.svg";
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Board from './Board';
import arrowSvgSrc from "../../public/assets/Icons/arrow.svg"
import snakeSvgSrc from "../../public/assets/Icons/Snake.svg"
import foodSvgSrc from "../../public/assets/Icons/food.svg"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


gsap.registerPlugin(useGSAP)

const Hero = () => {
  const gameRef = useRef()
  const [gameStart, setGameStart] = useState(false);
  const [isGameSkipped, setIsGameSkipped] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const codeString = `class BringingIdeaToLife {
    constructor(idea) {
        this.idea = idea;
    }

    launch() {        
        this.plan();
        this.develop();
        this.deploy();
    }
}`

  const [foodConsumed, setFoodConsumed] = useState([])
  const foodParentRef = useRef()

const customStyle = {
  backgroundColor: "#010E1A",
  padding: "20px",
  width: "500px",
  borderRadius: "5px",
};

  useEffect(()=>{
    function splitText(selector) {
      let elements = document.querySelectorAll(selector);

      elements.forEach((item) =>{
        let words = item.innerText.split(" ");

          item.innerHTML = words.map(word => 
          `<span class="word">${[...word].map(char => `<span class="char">${char}</span>`).join("")}</span>`
        )
        .join(" ");
      })
      
    }

    splitText(".text");

  },[])
  
  useEffect(() => {
    const timeLine = gsap.timeline({duration: 0.5})
    timeLine.from(".char", {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      duration: 0.5,
      transformOrigin: "0% 50% -50px",
      ease: "expo.in",
      stagger: 0.01,
    });

    timeLine.to("#projectsLink", {
      opacity: 1,
      rotation: 0,
      scale: 1,
      y:0,
      ease: "bounce.in",
      duration: 0.4,
    })
    
    gsap.to(gameRef.current, {
      opacity: 1,
      duration: 1,
      ease: "expo.in",
      duration: 0.8,

    })
    
  }, []);

  useEffect(() =>{

    gsap.from("#codeSnippet", {
      opacity: 0,
      ease: "expo.in",
      
    })

    const codeElement = document.querySelectorAll("code")
    const preElement = document.querySelector("pre")
    if(codeElement){
      codeElement.forEach((item) =>{
        item.style.backgroundColor = "#010E1A"

      })
    } 
    if(preElement){
      preElement.style.width = "fit-content";

    }
    // console.log(preElement.style.width)
    // codeElement.style = 'backgroundColor: "#010E1A"'
  
    
  },[isGameSkipped] )

  const handleFoodConsumption = (foodEatenCount) => {
    setFoodConsumed(prev => [...prev, foodEatenCount]); // Append to the array
  };

  const handleGameOver = (isGameOver) =>{
    setGameOver(isGameOver)
  }

  useEffect(() =>{  
    setFoodConsumed([])
    // const snake = document.querySelectorAll(".cell-green")
    // if(snake){
    //   snake.forEach((item) => {
    //     item.classList.remove("cell-green")
        
    //   })
      

    // }
    if(foodParentRef.current && foodParentRef.current.childNodes){
      foodParentRef.current.childNodes.forEach((item) =>{
        item.style.opacity = "1"
      })
    }
  },[gameOver])


  useEffect(() =>{

    if (foodParentRef.current && foodParentRef.current.childNodes ) {
    if(foodConsumed.length !== 0){
      console.log(foodConsumed.length)
      const foodIndex = foodConsumed.length - 1; // Assuming 0-based index
        // console.log(foodIndex)
      if (foodIndex < foodParentRef.current.childNodes.length) {
        foodParentRef.current.childNodes[foodIndex].style.opacity = "0.5";
      }
    }
        
    }
  },[foodConsumed])

  return (
    <main className='w-full gap-[-8px] flex items-center overflow-hidden h-[calc(100vh-104.2px)]'>
      <div className='relative flex gap-10 w-full flex-1 justify-center h-full p-6 items-center'>
        <div className='text-[#607B96] w-full flex-wrap flex flex-col gap-5'>
          <div className='flex flex-col gap-0 items-end'>
            <p className='text-[#E5E9F0] text text-[20px]'>Hello, I am</p>
            <h1 className='text-[#E5E9F0] text text-[42px]'>Manjinder Singh</h1>
            <h3 className='text-[#4D5BCE] text text-[24px]'>{"> Full Stack Developer"}</h3>
          </div>

          <div className='flex flex-col items-end'>
            <p className='text-[#607B96] text'>// complete the game to continue</p>
            <p className='text-[#607B96] text'>// you can also skip it if you do not want to play</p>
            <p className='flex gap-3 flex-wrap justify-end'>
              <span className='text-[#4D5BCE] text'>const</span>
              <span className='text-[#43D9AD] text'>githubProfileLink</span>
              <span className='text-white text'>=</span>
              <Link to={"https://github.com/Manjinder-Singh-Bangar"} className='text-[#E99287] text'>https://github.com/Manjinder-Singh-Bangar</Link>
            </p>
            <div className='py-6'>
              <Link id='projectsLink' className='bg-[#FEA55F] opacity-0 scale-0 rotate-180 cursor-pointer text-black px-3 py-2 rounded-md hover:bg-transparent hover:text-[#FEA55F] transition-all hover:border-[#FEA55F] hover:border-[1px]' to={"projects"}>_viewProjects</Link>
            </div>
          </div>
        </div>
        
        <div className='relative flex justify-start w-full'>
         <div ref={gameRef} className={`${!isGameSkipped ? "background-gradient" : ""} opacity-0 w-full`}>
         {!isGameSkipped ? <> <div className='flex justify-between p-2'>
              <img className='shadow-sm' src={screwSvgSrc} alt="screw" />
              <img className='shadow-sm' src={screwSvgSrc} alt="screw" />
            </div>

            <div className="flex relative snake-game gap-5 px-10">
              <div className='h-full flex-1'>
                <div className={`bg-[rgba(1,22,39,0.84)] w-[220px] flex gap-7 ${gameStart ? "p-0 h-full flex items-center justify-center" : "py-20 flex-col justify-between"}  items-center shadow-[inset_1px_5px_11px_rgba(2,18,27,0.71)] rounded-[8px] h-full`}>
                  {gameStart ? <Board isGameOver={handleGameOver} foodEatenCount={handleFoodConsumption} />  : <div className="game grid gap-4">
                    <img className='' src={foodSvgSrc} alt="Food" />
                    <img className='pl-2' src={snakeSvgSrc} alt="Snake" />
                  </div>}
                  <button onClick={() => setGameStart((prev) => !prev )} className={`bg-[#FEA55F] ${gameStart ? "hidden" : "inline-block"} p-2 rounded-md text-[#01080E]`}>start-game</button>
                </div>
              </div>
              <div className='relative'>
                <div className='flex justify-between flex-col gap-6'>
                  <div className='bg-[#1A5E5A]/70 rounded-md  backdrop-blur-md p-3'>
                    <p className='text-white'>// use keyboard</p>
                    <p className='text-white'>// arrows to play</p>
                    <div className='grid grid-rows-2 grid-cols-3'>
                      <button className='col-span-3 relative h-fit'><img className='mx-auto absolute translate-x-[213%] translate-y-[-4px] top-[15px] py-5 rounded-md  p-3 bg-[#010C15]  rotate-[90deg]' src={arrowSvgSrc} alt="" /></button>
                      <button><img className='mx-auto px-5 p-3 rounded-md bg-[#010C15]' src={arrowSvgSrc} alt="arrow" /></button>
                      <button><img className='rotate-[-90deg] py-5 px-3.5 rounded-md bg-[#010C15] mx-auto' src={arrowSvgSrc} alt="arrow" /></button>
                      <button><img className='rotate-[180deg] px-5 py-3 rounded-md bg-[#010C15] mx-auto' src={arrowSvgSrc} alt="arrow" /></button>
                    </div>
                  </div>
                  <div className='p-3 grid gap-3'>
                    <p className='text-white'>// food left</p>
                    <div ref={foodParentRef} className='gap-3 grid-cols-5 grid'>
                      {
                        [1,2,3,4,5,6,7,8,9,10].map((item) =>{
                          return (<img  key={item} alt='leftFood' src={foodSvgSrc} />)
                        })
                          
                      }
                      
                      
                    </div>
                  </div>
                </div>
              
                <div className='absolute bottom-0 right-0'>
                  <button onClick={() => setIsGameSkipped((prev) => !prev)} className='text-white border-white border-2 p-2 px-3 rounded-lg'>Skip</button>

                </div>
              </div>
              
              
            </div>

            <div className='flex justify-between p-2 relative'>
              <img className='shadow-sm' src={screwSvgSrc} alt="screw" />
              <img className='shadow-sm' src={screwSvgSrc} alt="screw" />
            </div></>

            : <div id='codeSnippet' className='relative h-fit'>
            <div className='flex w-full top-[-300px] opacity-35 z-[-1] absolute rounded-md bg-[#010E1A] gap-0'>
              <SyntaxHighlighter language="javascript" style={oneDark} customStyle={customStyle}>
                {codeString}
              </SyntaxHighlighter>
            </div>
            <div className='flex w-full rounded-md bg-[#010E1A] gap-0'>
              <SyntaxHighlighter language="javascript" style={oneDark} customStyle={customStyle}>
                {codeString}
              </SyntaxHighlighter>
            </div>
            <div className='flex w-full bottom-[-300px] z-[-1] opacity-35 absolute rounded-md bg-[#010E1A] gap-0'>
              <SyntaxHighlighter language="javascript" style={oneDark} customStyle={customStyle}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
          
    
            }
          </div>
          <div className="green"></div>
          <div className="blue"></div>
        </div> 
      </div>
      <div>

      </div>
    </main>
  )
}

export default Hero