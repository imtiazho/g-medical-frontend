import React, { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { BiBookmarks } from 'react-icons/bi';
import blog1Picture from '../../assets/blog-1.jpg';


const BlogContainer = () => {
    const [mousein, setMousein] = useState(false);
    return (
        <div className='w-5/6 mx-auto mt-16'>
            <div className='grid grid-cols-3 gap-12'>
                <div className='col-span-2'>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(1)} className='flex flex-col gap-8 bg-white mx-5 shadow-xl mb-8'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === 1 && "scale-110"} duration-500`} src={blog1Picture} alt="" />
                            {mousein === 1 && <span className='absolute bg-[#000074] opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                        </div>
                        <div className='px-10 mb-10 flex flex-col gap-6'>
                            <h2 className='font-bold text-4xl text-black'>Stem cell discovery could improve treatments for leukemia, other diseases</h2>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p>FEBRUARY 28, 2019</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p>JOHN SMITH</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BiBookmarks /></span>
                                    <p>HEART RATE, MEDICINE</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p>NO COMMENTS</p>
                                </span>
                            </span>
                            <p className='text-secondary'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language...</p>
                        </div>
                    </div>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(2)} className='flex flex-col gap-8 bg-white mx-5 shadow-xl mb-8'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === 2 && "scale-110"} duration-500`} src={blog1Picture} alt="" />
                            {mousein === 2 && <span className='absolute bg-[#000074] opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                        </div>
                        <div className='px-10 mb-10 flex flex-col gap-6'>
                            <h2 className='font-bold text-4xl text-black'>Stem cell discovery could improve treatments for leukemia, other diseases</h2>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p>FEBRUARY 28, 2019</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p>JOHN SMITH</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BiBookmarks /></span>
                                    <p>HEART RATE, MEDICINE</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p>NO COMMENTS</p>
                                </span>
                            </span>
                            <p className='text-secondary'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language...</p>
                        </div>
                    </div>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(3)} className='flex flex-col gap-8 bg-white mx-5 shadow-xl mb-8'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === 3 && "scale-110"} duration-500`} src={blog1Picture} alt="" />
                            {mousein === 3 && <span className='absolute bg-[#000074] opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                        </div>
                        <div className='px-10 mb-10 flex flex-col gap-6'>
                            <h2 className='font-bold text-4xl text-black'>Stem cell discovery could improve treatments for leukemia, other diseases</h2>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p>FEBRUARY 28, 2019</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p>JOHN SMITH</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BiBookmarks /></span>
                                    <p>HEART RATE, MEDICINE</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p>NO COMMENTS</p>
                                </span>
                            </span>
                            <p className='text-secondary'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language...</p>
                        </div>
                    </div>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(4)} className='flex flex-col gap-8 bg-white mx-5 shadow-xl mb-8'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === 4 && "scale-110"} duration-500`} src={blog1Picture} alt="" />
                            {mousein === 4 && <span className='absolute bg-[#000074] opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                        </div>
                        <div className='px-10 mb-10 flex flex-col gap-6'>
                            <h2 className='font-bold text-4xl text-black'>Stem cell discovery could improve treatments for leukemia, other diseases</h2>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p>FEBRUARY 28, 2019</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p>JOHN SMITH</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BiBookmarks /></span>
                                    <p>HEART RATE, MEDICINE</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p>NO COMMENTS</p>
                                </span>
                            </span>
                            <p className='text-secondary'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language...</p>
                        </div>
                    </div>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(5)} className='flex flex-col gap-8 bg-white mx-5 shadow-xl mb-8'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === 5 && "scale-110"} duration-500`} src={blog1Picture} alt="" />
                            {mousein === 5 && <span className='absolute bg-[#000074] opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                        </div>
                        <div className='px-10 mb-10 flex flex-col gap-6'>
                            <h2 className='font-bold text-4xl text-black'>Stem cell discovery could improve treatments for leukemia, other diseases</h2>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p>FEBRUARY 28, 2019</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p>JOHN SMITH</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BiBookmarks /></span>
                                    <p>HEART RATE, MEDICINE</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p>NO COMMENTS</p>
                                </span>
                            </span>
                            <p className='text-secondary'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language...</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <h2 className='text-black text-2xl font-bold'>Recent Articles</h2>

                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center gap-4'>
                            <div className='w-20 h-20'>
                                <img className='h-full w-full object-cover' src={blog1Picture} alt="" />
                            </div>
                            <div>
                                <p className='text-black font-medium text-lg mb-2'>Using anthrax to fight cancer effectively</p>
                                <div className='flex items-center gap-6 text-[#9C9CA8]'>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><AiOutlineClockCircle /></span>
                                        <p className='text-xs'>FEBRUARY 28, 2019</p>
                                    </span>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><BsPencil /></span>
                                        <p className='text-xs'>JOHN SMITH</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='w-20 h-20'>
                                <img className='h-full w-full object-cover' src={blog1Picture} alt="" />
                            </div>
                            <div>
                                <p className='text-black font-medium text-lg mb-2'>Using anthrax to fight cancer effectively</p>
                                <div className='flex items-center gap-6 text-[#9C9CA8]'>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><AiOutlineClockCircle /></span>
                                        <p className='text-xs'>FEBRUARY 28, 2019</p>
                                    </span>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><BsPencil /></span>
                                        <p className='text-xs'>JOHN SMITH</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='w-20 h-20'>
                                <img className='h-full w-full object-cover' src={blog1Picture} alt="" />
                            </div>
                            <div>
                                <p className='text-black font-medium text-lg mb-2'>Using anthrax to fight cancer effectively</p>
                                <div className='flex items-center gap-6 text-[#9C9CA8]'>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><AiOutlineClockCircle /></span>
                                        <p className='text-xs'>FEBRUARY 28, 2019</p>
                                    </span>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><BsPencil /></span>
                                        <p className='text-xs'>JOHN SMITH</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className='text-black mb-6 text-2xl font-bold'>Tag Cloud</h2>

                        <div className='flex flex-wrap gap-2'>
                            <p className='bg-primary p-2 text-white text-xs'>ANTIBIOTIC</p>
                            <p className='bg-primary p-2 text-white text-xs'>DISEASES</p>
                            <p className='bg-primary p-2 text-white text-xs'>DRUGSHEALTH</p>
                            <p className='bg-primary p-2 text-white text-xs'>CAREHEART</p>
                            <p className='bg-primary p-2 text-white text-xs'>DRUGSHEALTH</p>
                            <p className='bg-primary p-2 text-white text-xs'>DISEASES</p>
                            <p className='bg-primary p-2 text-white text-xs'>CAREHEART</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-black mb-6 text-2xl font-bold'>Text Widgets</h2>

                        <p className='text-secondary'>Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.</p>
                    </div>

                    <div className='text-primary flex flex-col'>
                        <h2 className='text-black mb-6 text-2xl font-bold'>Our Services</h2>

                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Asthma and Allergy</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Cancer Services</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Cystic Fibrosis</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Endoscopy</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Colorectal</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Hemorrhoids</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogContainer;