import React from 'react';
import ServiceQuotesPic from '../../assets/service-quotes.jpg';
import { FaQuoteLeft } from 'react-icons/fa';


const ServiceQuotes = () => {
    return (
        <div className='w-[90%] lg:w-5/6 mt-[4rem] lg:mt-[0rem] mx-auto relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center shadow-2xl bg-white lg:absolute top-[10rem]'>
                <img className='h-full w-full object-cover' src={ServiceQuotesPic} alt="" />

                <div className='md:p-12 p-8'>
                    <div className='text-secondary flex flex-col gap-6'>
                        <p className='text-[35px] md:text-7xl text-primary'><FaQuoteLeft /></p>
                        <p className='md:text-xl text-[15px]'>Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery. Later chemical libraries of synthetic small molecules.</p>
                        <span>
                            <p className='text-primary text-[25px] md:text-3xl font-bold lg:mb-2 mb-1'>Mildred Payne</p>
                            <p className='text-primary text-[15px] md:text-lg'>Allergist</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceQuotes;