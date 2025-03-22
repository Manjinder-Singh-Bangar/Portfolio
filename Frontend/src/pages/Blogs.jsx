import React, { useRef, useEffect } from 'react'
import CurrentBlog from '../Components/CurrentBlog'
import BlogCard from '../Components/BlogCard'
import { blogs } from '../../public/assets/Data/blogs'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)


const Blogs = () => {
  const blogsRef = useRef()

  useEffect(() => {
    blogsRef.current.childNodes.forEach((item, index) =>{
        gsap.to(item, {
          x: 0,
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 70%", // Start later
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: true
          }
        })
      }
    )
  }, [])
  
  return (
    <section className='w-full flex overflow-x-hidden justify-center py-32 items-start max-h-fit min-h-[calc(100vh-104.2px)]'>
        {/* <CurrentBlog /> */}
        <div ref={blogsRef} className='w-full flex flex-col items-center'>
          {blogs.map((item, index) =>{
            return (
            <BlogCard
              blogClassName={index % 2 == 0 ? "opacity-0 translate-x-[-600px]" : "opacity-0 translate-x-[600px]"}
              blogKey={index}
              blogHeading={item.headingOfBlog}
              blogAuthorProfilePicture={item.profilePicture}
              blogAuthor={item.author}
              blogId={item.id}
              blogWrittenDate={item.dateWritten}
              blogThumbnailImageSrc={item.thumbnail}
              blogAuthorJob={item.job}
            />)

          })
            }
          
        </div>
    </section>
  )
}

export default Blogs