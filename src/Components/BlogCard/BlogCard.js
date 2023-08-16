import React, { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBookmarks } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const BlogCard = ({ eachBlog }) => {
    const [mousein, setMousein] = useState(false);
    const { _id, blogTitle, blogPublishedDate, authorName, blogType, blogComments, blogDisplayShortDetails, blogTopPicture } = eachBlog;

    return (
        <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(parseInt(_id))} className='flex flex-col gap-8 bg-white shadow-xl mb-8'>
            <div className='relative overflow-hidden' >
                <img className={`${mousein === parseInt(_id) && "scale-110"} duration-500`} src={blogTopPicture} alt="" />
                {mousein === parseInt(_id) && <span className='absolute bg-[#000074] opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
            </div>
            <div className='md:px-10 px-5 mb-10 flex flex-col gap-6'>
                <Link to={`/blog/${_id}`} className='font-bold md:text-4xl text-3xl text-black'>{blogTitle}</Link>
                <span className='flex justify-between flex-wrap items-center text-primary gap-6'>
                    <span className='flex items-center gap-2 font-medium text-[12px] md:text-sm'>
                        <span><AiOutlineClockCircle /></span>
                        <p>{blogPublishedDate}</p>
                    </span>
                    <span className='flex items-center gap-2 font-medium text-[12px] md:text-sm'>
                        <span><BsPencil /></span>
                        <p>{authorName}</p>
                    </span>
                    <span className='flex items-center gap-2 font-medium text-[12px] md:text-sm'>
                        <span><BiBookmarks /></span>
                        <p>{blogType}</p>
                    </span>
                    <span className='flex items-center gap-2 font-medium text-[12px] md:text-sm'>
                        <span><FaRegComment /></span>
                        <p>{blogComments}</p>
                    </span>
                </span>
                <p className='text-secondary md:text-[16px] text-[15px]'>{blogDisplayShortDetails}</p>
            </div>
        </div>
    );
};

export default BlogCard;