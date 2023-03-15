import React from 'react';
import ourDoctorBanner from '../../assets/our-doctor.jpg';
import blog1Picture from '../../assets/blog-1.jpg';
import blog1Picture1 from '../../assets/blog-details.jpg';
import d1 from '../../assets/d1.jpg';
import d2 from '../../assets/d2.jpg';
import d3 from '../../assets/d3.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const BolgDetailsPage = () => {
    return (
        <div>
            <div style={{ background: `url(${ourDoctorBanner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto relative'>
                <div className='absolute w-full h-full bg-[#000074] opacity-60 z-1'></div>

                <div className='flex justify-center items-center h-full z-10'>
                    <span>
                        <h1 className='text-center text-6xl mb-4 text-white z-10 relative'>Using anthrax to fight cancer effectively</h1>
                        <p className='text-center text-white z-10 relative text-lg'>John Smith - Masonry - Antibiotic - no comments</p>
                    </span>
                </div>
            </div>
            <div className='w-5/6 mx-auto mt-16'>
                <div className='grid grid-cols-3 gap-12'>
                    <div className='col-span-2'>
                        <div className='flex flex-col gap-6'>
                            <div className='px-6'>
                                <img src={blog1Picture1} alt="" />
                            </div>
                            <h1 className='mt-5 font-bold text-3xl text-black'>I neglect my talents</h1>
                            <p className='text-secondary leading-relaxed text-[18px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>

                            <span className='text-secondary'>
                                <strong>Read This</strong>: <Link className=''>New Law Article</Link>
                            </span>
                        </div>

                        <div className='mt-8 flex flex-col gap-6 border-b-2 pb-10'>
                            <div className='grid grid-cols-3 gap-4'>
                                <img src={d1} alt="" />
                                <img src={d2} alt="" />
                                <img src={d3} alt="" />
                            </div>
                            <p className='text-secondary leading-relaxed text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</p>

                            <span className='text-secondary pl-5 text-lg leading-loose'>
                                <p>1. <strong>Impenetrable foliage of my</strong> trees, and but a few stray gleams.</p>
                                <p>2. <strong>A wonderful serenity has</strong> taken possession of my entire soul.</p>
                                <p>3. <strong>I should be incapable</strong> of drawing a single stroke at the present moment.</p>
                            </span>

                            <p className='text-secondary leading-relaxed text-lg'>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet</p>

                            <div className='bg-[#F5F5F5] px-10 py-8 border-l-2'>
                                <p className='text-[#767676] leading-relaxed text-xl font-bold italic'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.</p>
                            </div>

                            <span className='text-secondary pl-5 text-lg leading-loose'>
                                <p>1. <strong>Impenetrable foliage of my</strong> trees, and but a few stray gleams.</p>
                                <p>2. <strong>A wonderful serenity has</strong> taken possession of my entire soul.</p>
                                <p>3. <strong>I should be incapable</strong> of drawing a single stroke at the present moment.</p>
                            </span>
                        </div>

                        <div className='mt-12'>
                            <h1 className='text-primary text-2xl font-bold mb-10'>Leave a Reply</h1>

                            <form className='w-4/5 mt-10 flex flex-col gap-4'>
                                <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black resize-none border'></textarea>
                                <div className='flex justify-between gap-4'>
                                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black border' />

                                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black border' />

                                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black border' />
                                </div>
                                <input className='w-full bg-primary text-white p-[1rem] rounded-none cursor-pointer btn' type="submit" value='POST NOW' />
                            </form>
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
        </div>
    );
};

export default BolgDetailsPage;