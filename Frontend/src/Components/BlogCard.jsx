import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../../public/assets/Data/blogs'

const BlogCard = ({blogThumbnailImageSrc, blogHeading, blogAuthorJob, blogWrittenDate, blogAuthor, blogAuthorProfilePicture, blogId, blogKey, blogClassName}) => {
    
  return (
    
        <div key={blogKey} id='blogCard' className={`text-[#607B96] border-y-[1px] border-[#1E2D3D] place-content-center p-8 gap-6 grid xs:grid-cols-1 lg:grid-cols-4  w-4/6 ${blogClassName}`}>
            <div id='imageContainer' className='col-span-1  text-center flex justify-center items-center'>
                <img className='' src={blogThumbnailImageSrc} alt="" />
            </div>
            <div className='col-span-3 justify-center flex flex-col gap-4'>
                <h1 className='lg:text-2xl xs:text-xl'>{blogHeading}</h1>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <img className='w-[40px] my-auto h-[40px] rounded-full' src={blogAuthorProfilePicture} alt="" />
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