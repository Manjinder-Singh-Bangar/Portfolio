import React from 'react'
import CurrentBlog from '../Components/CurrentBlog'
import BlogCard from '../Components/BlogCard'
import { blogs } from '../../public/assets/Data/blogs'

const Blogs = () => {
  return (
    <section className='w-full flex justify-center py-9 items-start max-h-fit min-h-[calc(100vh-104.2px)]'>
        {/* <CurrentBlog /> */}
        <div className='w-full flex flex-col items-center'>
          {blogs.map((item) =>{
            return (
            <BlogCard
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