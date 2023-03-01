import React from 'react';
import aboutBanner from '../../assets/about-banner.jpg';

const AboutBanner = () => {
    return (
        <div style={{ background: `url(${aboutBanner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto relative'>
            <div className='absolute w-full h-full bg-[#000074] opacity-60 z-1'></div>

            <div className='flex justify-center items-center h-full z-10'>
                <span>
                    <h1 className='text-center text-6xl mb-4 text-white z-10 relative'>About Us</h1>
                    <p className='text-center text-white z-10 relative'>Story about our hospital</p>
                </span>
            </div>
        </div>
    );
};

export default AboutBanner;