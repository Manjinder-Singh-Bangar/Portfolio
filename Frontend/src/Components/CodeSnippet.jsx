import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import myImageSrc from "../../public/assets/Images/myImage.jpg"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeSnippet = ({codeString, linkContent}) => {
    

    useEffect(() => {
        const codeElement = document.querySelectorAll("code")
        const preElement = document.querySelector("pre")
        if(codeElement){
          codeElement.forEach((item) =>{
            item.style.backgroundColor = "transparent"
    
          })
        } 
        if(preElement){
          preElement.style.width = "fit-content";
    
        }
    }, [])

    console.log(linkContent)
    
    return (
    <div className='flex flex-1 flex-col justify-center w-full p-6'>
        <div className='flex justify-normal w-[450px] gap-3'>
            <div className='flex gap-3'>
                <img className='w-[40px] rounded-full h-[40px]' src={myImageSrc} alt="I am playing chess" />
                <div>
                    <p className='shrink text-[14px] text-[#5565E8] font-bold'>@Manjinder-Singh-Bangar</p>
                    <p className='shrink text-[14px]'>created at 03-09-2025</p>
                </div>
            </div>
            <div className='flex ml-auto gap-3'>
                {
                    linkContent.map((item) =>{
                        return (<Link to={item.address} className='flex items-center gap-3'><img className='w-[18px]' src={item.icon} alt="details icon" />{item.text}</Link>)
                    })
                }
            </div>
        </div>
        <div className='w-fit h-fit'>
            <SyntaxHighlighter
                language='javascript'
                style={oneDark}
                customStyle={{maxWidth: "450px", fontSize: "12.3px", backgroundColor: "#011221", minWidth: "450px", overflowX: "auto", whiteSpace: "pre"}}
            >
                
                {codeString}
            </SyntaxHighlighter>
        </div>
    </div>
    )
}

export default CodeSnippet