import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../../public/assets/Data/blogs'

const BlogCard = ({blogThumbnailImageSrc, blogHeading, blogAuthorJob, blogWrittenDate, blogAuthor, blogAuthorProfilePicture, blogId}) => {
    
  return (
    
        <div className='text-[#607B96] border-y-[1px] border-[#1E2D3D] p-8 gap-6 grid grid-cols-4 w-4/6'>
            <div className='col-span-1'>
                <img className='w-full' src={blogThumbnailImageSrc} alt="" />
            </div>
            <div className='col-span-3 justify-center flex flex-col gap-4'>
                <h1 className='text-2xl'>{blogHeading}</h1>
                <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <img className='w-[40px] h-[40px] rounded-full' src={blogAuthorProfilePicture} alt="" />
                    <div className='flex flex-col'>
                    <p>{blogAuthor}</p>
                    <p>{blogAuthorJob}</p>
                    </div>
                </div>
                
                <div className='flex flex-col gap-1'>
                <p>{blogWrittenDate}</p>
                <Link to={`/blogs/${blogId}`} className='bg-[#FEA55F] text-center p-2 text-white rounded-md'>Read Me</Link>

                </div>

                </div>
            </div>
        </div>
  )
}

export default BlogCard