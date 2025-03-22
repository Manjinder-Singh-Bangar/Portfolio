import React, { useState, useEffect,useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import outLineArrowSvgSrc from "../../public/assets/Icons/outline-arrow.svg"
import myImageSrc from "../../public/assets/Images/myImage.jpg"
import authBlogContent from "../../public/assets/Data/auth-blog.md?raw"
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyButton from './CopyButton'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

const CurrentBlog = ({
  currentBlogHeading,
  currentBlogDateCreated,
  currentBlogAuthor, 
  currentBlogAuthorJob, 
  currentBlogAuthorLocation,
  currentReadMeFile,
}) => {
  const blogContentRef = useRef();
  const [blogLoaded, setBlogLoaded] = useState(false)
  const [blogContent, setBlogContent] = useState()

  useEffect(() => {
    console.log(blogLoaded)
      if(blogContentRef.current.childNodes){
        console.log(blogContentRef.current.childNodes)
        blogContentRef.current.childNodes.forEach((item) => {
          if(item instanceof HTMLElement){
            gsap.to(item, {
              opacity: 1,
              duration: 0.8,
              ease: "expo.inOut",
              scrollTrigger: {
                trigger: item,
                start: "top 97%",
                end: "top 99%",
              },
            });
          }
        });
      }
  }, [blogLoaded])
  

  useEffect(() => {
    setBlogContent(currentReadMeFile)
    setBlogLoaded(true)
  }, [])
  
  return (
    <section className='lg:w-[60%] xs:w-full'>
        <div className='flex w-full text-white flex-col gap-6'>
            <div className='text-[white] items-center flex gap-3'>
                <Link className='h-fit' to={"/"}>_home</Link>
                <img className='h-fit' src={outLineArrowSvgSrc} alt="" />
                <Link className='h-fit' to={"/blogs"}>_blogs</Link>
                <img className='h-fit' src={outLineArrowSvgSrc} alt="" />
                <Link className='h-fit' to={""}>{currentBlogHeading}</Link>
            </div>

            <div>
              <h1 className='text-[40px] text-white'>{currentBlogHeading}</h1>
            </div>
            <div>
              <p>{currentBlogDateCreated}</p>
            </div>

            <div className='flex items-center gap-3 border-b-[1px] border-t-[1px] border-[#1E2D3D] py-4'>
              <img className='w-[40px] rounded-full ' src={myImageSrc} alt="" />
              <div>
                <h3>{currentBlogAuthor}</h3>
                <p className='text-[14px] text-[#607B96]'>{`${currentBlogAuthorJob}, ${currentBlogAuthorLocation}`}</p>
              </div>
            </div>

            <div ref={blogContentRef} className='blogContent flex flex-col gap-6'>
            <ReactMarkdown
      components={{
        // Wrap paragraphs inside a div

        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const codeText = String(children).replace(/\n$/, "");
          return !inline && match ? (
            <div className="code-block">
            <CopyButton code={codeText} />
            <SyntaxHighlighter customStyle={{backgroundColor: "#011221"}} style={oneDark} language={match[1]} PreTag="div">
              {codeText}
            </SyntaxHighlighter>
          </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {blogContent}
    </ReactMarkdown>
            </div>

        </div>
    </section>
  )
}

export default CurrentBlog;