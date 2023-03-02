import React from 'react';
import ServiceQuotesPic from '../../assets/service-quotes.jpg';
import { FaQuoteLeft } from 'react-icons/fa';


const ServiceQuotes = () => {
    return (
        <div className='w-5/6 mx-auto relative'>
            <div className='grid grid-cols-2 items-center shadow-2xl bg-white absolute top-[10rem]'>
                <img src={ServiceQuotesPic} alt="" />

                <div className='p-12'>
                    <div className='text-secondary flex flex-col gap-6'>
                        <p className='text-7xl text-primary'><FaQuoteLeft /></p>
                        <p className='text-xl'>Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery. Later chemical libraries of synthetic small molecules.</p>
                        <span>
                            <p className='text-primary text-3xl font-bold mb-2'>Mildred Payne</p>
                            <p className='text-primary text-lg'>Allergist</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceQuotes;