import React, { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBookmarks } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import blog1Picture from '../../assets/blog-1.jpg';


const BlogCard = ({ eachBlog }) => {
    const [mousein, setMousein] = useState(false);
    const { _id, blogTitle, blogPublishedDate, authorName, blogType, blogComments, blogDisplayShortDetails } = eachBlog;

    return (
        <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(parseInt(_id))} className='flex flex-col gap-8 bg-white mx-5 shadow-xl mb-8'>
            <div className='relative overflow-hidden' >
                <img className={`${mousein === parseInt(_id) && "scale-110"} duration-500`} src={blog1Picture} alt="" />
                {mousein === parseInt(_id) && <span className='absolute bg-[#000074] opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
            </div>
            <div className='px-10 mb-10 flex flex-col gap-6'>
                <Link to={`/blog/${_id}`} className='font-bold text-4xl text-black'>{blogTitle}</Link>
                <span className='flex justify-between items-center text-primary'>
                    <span className='flex items-center gap-2 font-medium text-sm'>
                        <span><AiOutlineClockCircle /></span>
                        <p>{blogPublishedDate}</p>
                    </span>
                    <span className='flex items-center gap-2 font-medium text-sm'>
                        <span><BsPencil /></span>
                        <p>{authorName}</p>
                    </span>
                    <span className='flex items-center gap-2 font-medium text-sm'>
                        <span><BiBookmarks /></span>
                        <p>{blogType}</p>
                    </span>
                    <span className='flex items-center gap-2 font-medium text-sm'>
                        <span><FaRegComment /></span>
                        <p>{blogComments}</p>
                    </span>
                </span>
                <p className='text-secondary'>{blogDisplayShortDetails}</p>
            </div>
        </div>
    );
};

export default BlogCard;