import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = ({ portfolioData }) => {
    return (
        <div className='w-[90%] lg:w-5/6 mx-auto mt-24'>
            <span className='text-center'>
                <p className='text-accent text-xl font-bold mb-4'>We can provide health insurance certificates</p>
                <h1 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl font-bold text-black'>Whatever your healthcare needs, <br /> we are here to help</h1>
            </span>

            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10  mt-12'>
                {
                    portfolioData?.slice(0, 6).map((ServicesDataEach) => <ServiceCard key={ServicesDataEach._id} ServicesDataEach={ServicesDataEach}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;