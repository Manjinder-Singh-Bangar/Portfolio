import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../../public/assets/Data/blogs.js';
import CurrentBlog from '../Components/CurrentBlog';

const DetailedBlog = () => {
    const { id } = useParams();
    const [currentBlog, setCurrentBlog] = useState(null);

    useEffect(() => {
        
        const blog = blogs.find((item) => item.id == id);
        if (blog) {
            setCurrentBlog(blog);
        }
    }, [id]);
    
    if (!currentBlog) {
        return <div>Blog not found</div>;
    }

    return (
        <section className='w-full flex justify-center py-8 min-h-h-[calc(100vh-104.2px)] max-h-fit'>
            <CurrentBlog 
                currentBlogHeading={currentBlog.headingOfBlog} 
                currentBlogAuthor={currentBlog.author} 
                currentReadMeFile={currentBlog.fileName}
                currentBlogAuthorLocation={currentBlog.location}
                currentBlogDateCreated={currentBlog.dayWritten}
            />
        </section>
    );
};

export default DetailedBlog;