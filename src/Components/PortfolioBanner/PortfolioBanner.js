import React from 'react';
import portfolioBanner from '../../assets/our-doctor.jpg';

const PortfolioBanner = () => {
    return (
        <div style={{ background: `url(${portfolioBanner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto relative'>
            <div className='absolute w-full h-full bg-[#000074] opacity-60 z-1'></div>

            <div className='flex justify-center items-center h-full z-10'>
                <span className='menu menu-compact'>
                    <h1 className='text-center text-6xl mb-4 text-white z-10 relative'>Portfolio</h1>
                    <p className='text-center text-white z-10 relative'>No Excerpt, With Space</p>
                </span>
            </div>
        </div>
    );
};

export default PortfolioBanner;