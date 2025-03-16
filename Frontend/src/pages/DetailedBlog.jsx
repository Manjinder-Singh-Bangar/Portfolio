import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogs } from '../../public/assets/Data/blogs.js';
import CurrentBlog from '../Components/CurrentBlog';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)
const DetailedBlog = () => {
    const { id } = useParams();
    const [currentBlog, setCurrentBlog] = useState(null);
    const blogNotFoundRef = useRef()

    useEffect(() => {
        
        const blog = blogs.find((item) => item.id == id);
        if (blog) {
            setCurrentBlog(blog);
        }
    }, [id]);

    useGSAP(() => {
        gsap.to(blogNotFoundRef.current, {
            opacity: 1,
            duration: 0.6,
            ease:"expo.inOut"
        })
    }, [blogNotFoundRef.current])
    
    if (!currentBlog) {
        return (
        <div ref={blogNotFoundRef} className='min-h-[calc(100vh-104.2px)] flex opacity-0 justify-center items-center w-full max-h-fit text-[#607B96]'>
            <div className='flex flex-col h-full'>
                <Link className='border-b-[1px] justify-self-start w-fit pb-1' to={"/blogs"}>Go back to blogs</Link>
                <h1 className='text-[50px]'>Blog not found</h1>

            </div>
        </div>
        )
    }

    return (
        <section className='w-full flex justify-center py-8 min-h-h-[calc(100vh-104.2px)] max-h-fit'>
            <CurrentBlog 
                currentBlogHeading={currentBlog.headingOfBlog} 
                currentBlogAuthor={currentBlog.author} 
                currentReadMeFile={currentBlog.fileName}
                currentBlogAuthorLocation={currentBlog.location}
                currentBlogDateCreated={currentBlog.dayWritten}
                currentBlogAuthorJob={currentBlog.job}
            />
        </section>
    );
};

export default DetailedBlog;