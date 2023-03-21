import React from 'react';
import ourDoctorBanner from '../../assets/our-doctor.jpg';
import blog1Picture from '../../assets/blog-1.jpg';
import blog1Picture1 from '../../assets/blog-details.jpg';
import d1 from '../../assets/d1.jpg';
import d2 from '../../assets/d2.jpg';
import d3 from '../../assets/d3.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';


const BolgDetailsPage = () => {
    const { blogId } = useParams();
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
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: d1,
            blogDetailsPic2: d2,
            blogDetailsPic3: d3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkableLine: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
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
            remarkableLine: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
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
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: d1,
            blogDetailsPic2: d2,
            blogDetailsPic3: d3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkableLine: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
            blogPointsTwo: ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."],
        },
    ];

    const cloudData = ["ANTIBIOTIC", "DISEASES", "DRUGSHEALTH", "CAREHEART", "DRUGSHEALTH", "DISEASES", "CAREHEART"];
    const othersServicesLink = ["Asthma and Allergy", "Cancer Services", "Cystic Fibrosis", "Endoscopy", "Colorectal", "Hemorrhoids"];
    const targetedBlog = data.find(eachBlog => eachBlog._id === blogId);

    return (
        <div>
            <div style={{ background: `url(${targetedBlog.blogTopBanner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto relative'>
                <div className='absolute w-full h-full bg-[#000074] opacity-60 z-1'></div>

                <div className='flex justify-center items-center h-full z-10'>
                    <span>
                        <h1 className='text-center text-6xl mb-4 text-white z-10 relative'>{targetedBlog.blogTitle}</h1>
                        <p className='text-center text-white z-10 relative text-lg'>John Smith - Masonry - Antibiotic - no comments</p>
                    </span>
                </div>
            </div>
            <div className='w-5/6 mx-auto mt-16'>
                <div className='grid grid-cols-3 gap-12'>
                    <div className='col-span-2'>
                        <div className='flex flex-col gap-6'>
                            <div className='px-6'>
                                <img src={targetedBlog.blogTopPicture} alt="" />
                            </div>
                            <h1 className='mt-5 font-bold text-3xl text-black'>{targetedBlog.blogSubTitle}</h1>
                            <p className='text-secondary leading-relaxed text-[18px]'>{targetedBlog.blogDetailsOne}</p>

                            <span className='text-secondary'>
                                <strong>Read This</strong>: <Link className=''>{targetedBlog.anotherBlogLink}</Link>
                            </span>
                        </div>

                        <div className='mt-8 flex flex-col gap-6 border-b-2 pb-10'>
                            <div className='grid grid-cols-3 gap-4'>
                                <img src={targetedBlog.blogDetailsPic1} alt="" />
                                <img src={targetedBlog.blogDetailsPic2} alt="" />
                                <img src={targetedBlog.blogDetailsPic3} alt="" />
                            </div>
                            <p className='text-secondary leading-relaxed text-lg'>{targetedBlog.blogDetailsTwo}</p>

                            <span className='text-secondary pl-5 text-lg leading-loose'>
                                {
                                    targetedBlog.blogPointsOne.map((eachPoint, index) =>
                                        <p>{index + 1}. {eachPoint}</p>
                                    )
                                }
                            </span>

                            <p className='text-secondary leading-relaxed text-lg'>{targetedBlog.blogDetailsThree}</p>

                            <div className='bg-[#F5F5F5] px-10 py-8 border-l-2'>
                                <p className='text-[#767676] leading-relaxed text-xl font-bold italic'>{targetedBlog.remarkableLine}</p>
                            </div>

                            <span className='text-secondary pl-5 text-lg leading-loose'>
                                {
                                    targetedBlog.blogPointsTwo.map((eachPoint, index) =>
                                        <p>{index + 1}. {eachPoint}</p>
                                    )
                                }
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

                    <div className='flex flex-col gap-8 col-span-1'>
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
        </div>
    );
};

export default BolgDetailsPage;