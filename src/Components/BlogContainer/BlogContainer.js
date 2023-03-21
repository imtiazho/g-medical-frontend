import React, { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { BiBookmarks } from 'react-icons/bi';
import blog1Picture from '../../assets/blog-1.jpg';
import blog1Picture1 from '../../assets/blog-details.jpg';
import d1 from '../../assets/d1.jpg';
import d2 from '../../assets/d2.jpg';
import d3 from '../../assets/d3.jpg';
import ourDoctorBanner from '../../assets/our-doctor.jpg';
import BlogCard from '../BlogCard/BlogCard';
import { Link } from 'react-router-dom';


const BlogContainer = () => {
    const [mousein, setMousein] = useState(false);
    const data = [
        {
            _id: "1",
            blogTopBanner: ourDoctorBanner,
            blogPublishedDate: "FEBRUARY 28, 2019",
            authorName: "JOHN SMITH",
            blogType: "HEART RATE, MEDICINE",
            blogComments: "NO COMMENTS",
            blogTitle: "Using anthrax to fight cancer effectively",
            blogTopPicture: blog1Picture1,
            blogSubTitle: "I neglect my talents",
            blogDisplayShortDetails: "I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language",
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: d1,
            blogDetailsPic2: d2,
            blogDetailsPic3: d3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkablePoint: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
            blogPointsTwo: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
        },
        {
            _id: "2",
            blogTopBanner: ourDoctorBanner,
            blogPublishedDate: "FEBRUARY 28, 2019",
            authorName: "JOHN SMITH",
            blogType: "HEART RATE, MEDICINE",
            blogComments: "NO COMMENTS",
            blogTitle: "Using anthrax to fight cancer effectively",
            blogDisplayShortDetails: "I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language",
            blogTopPicture: blog1Picture1,
            blogSubTitle: "I neglect my talents",
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: d1,
            blogDetailsPic2: d2,
            blogDetailsPic3: d3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkablePoint: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
            blogPointsTwo: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
        },
        {
            _id: "3",
            blogTopBanner: ourDoctorBanner,
            blogPublishedDate: "FEBRUARY 28, 2019",
            authorName: "JOHN SMITH",
            blogType: "HEART RATE, MEDICINE",
            blogComments: "NO COMMENTS",
            blogTitle: "Using anthrax to fight cancer effectively",
            blogTopPicture: blog1Picture1,
            blogSubTitle: "I neglect my talents",
            blogDisplayShortDetails: "I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language",
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: d1,
            blogDetailsPic2: d2,
            blogDetailsPic3: d3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkablePoint: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
            blogPointsTwo: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
        },
    ];
    const cloudData = ["ANTIBIOTIC", "DISEASES", "DRUGSHEALTH", "CAREHEART", "DRUGSHEALTH", "DISEASES", "CAREHEART"];
    const othersServicesLink = ["Asthma and Allergy", "Cancer Services", "Cystic Fibrosis", "Endoscopy", "Colorectal", "Hemorrhoids"];

    return (
        <div className='w-5/6 mx-auto mt-16'>
            <div className='grid grid-cols-3 gap-12'>
                <div className='col-span-2'>
                    {
                        data.map(eachBlog => <BlogCard eachBlog={eachBlog} key={eachBlog._id}></BlogCard>)
                    }
                </div>

                <div className='flex flex-col gap-8'>
                    <h2 className='text-black text-2xl font-bold'>Recent Articles</h2>

                    <div className='flex flex-col gap-6'>
                        {
                            data.slice(0, 3).map(eachBlog =>
                                <div className='flex items-center gap-4'>
                                    <div className='w-20 h-20'>
                                        <img className='h-full w-full object-cover' src={eachBlog.blogTopPicture} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <Link className='text-black font-medium text-lg'>{eachBlog.blogTitle}</Link>
                                        <div className='flex items-center gap-6 text-[#9C9CA8]'>
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