import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import BlogCard from '../BlogCard/BlogCard';
import { Link } from 'react-router-dom';


const BlogContainer = ({ blogsData }) => {
    const cloudData = ["ANTIBIOTIC", "DISEASES", "DRUGSHEALTH", "CAREHEART", "DRUGSHEALTH", "DISEASES", "CAREHEART"];
    const othersServicesLink = ["Asthma and Allergy", "Cancer Services", "Cystic Fibrosis", "Endoscopy", "Colorectal", "Hemorrhoids"];

    return (
        <div className='w-[95%] xl:w-5/6 mx-auto mt-16'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 xl:gap-12'>
                <div className='col-span-2'>
                    {
                        blogsData?.map(eachBlog => <BlogCard eachBlog={eachBlog} key={eachBlog._id}></BlogCard>)
                    }
                </div>

                <div className='flex flex-col gap-8'>
                    <h2 className='text-black text-2xl font-bold'>Recent Articles</h2>

                    <div className='flex flex-col gap-6'>
                        {
                            blogsData?.slice(0, 3).map(eachBlog =>
                                <div className='flex items-center gap-4'>
                                    <div className='w-20 h-20'>
                                        <img className='h-full w-full object-cover' src={eachBlog.blogTopPicture} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <Link className='text-black font-medium text-lg'>{eachBlog.blogTitle}</Link>
                                        <div className='flex items-center xl:gap-6 gap-4 text-[#9C9CA8]'>
                                            <span className='flex items-center gap-2 font-medium text-sm'>
                                                <span className='text-xs'><AiOutlineClockCircle /></span>
                                                <p className='text-xs'>{eachBlog.blogPublishedDate}</p>
                                            </span>
                                            <span className='flex items-center gap-2 font-medium text-sm'>
                                                <span className='text-xs'><BsPencil /></span>
                                                <p className='text-xs'>{eachBlog.authorName}</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>


                    <div>
                        <h2 className='text-black mb-6 text-2xl font-bold'>Tag Cloud</h2>

                        <div className='flex flex-wrap gap-2'>
                            {
                                cloudData.map(singleCloud => <Link className='bg-primary p-2 text-white text-xs'>{singleCloud}</Link>)
                            }
                        </div>
                    </div>

                    <div>
                        <h2 className='text-black mb-6 text-2xl font-bold'>Text Widgets</h2>

                        <p className='text-secondary'>Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.</p>
                    </div>

                    <div className='text-primary flex flex-col'>
                        <h2 className='text-black mb-6 text-2xl font-bold'>Our Services</h2>

                        {
                            othersServicesLink.map(eachLink =>
                                <div className='border-b py-3 flex items-center gap-3'>
                                    <div className='w-[2px] h-full bg-primary'></div>
                                    <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>{eachLink}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogContainer;