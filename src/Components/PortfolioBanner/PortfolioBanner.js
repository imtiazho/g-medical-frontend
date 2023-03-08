import React from 'react';
import portfolioBanner from '../../assets/our-doctor.jpg';

const PortfolioBanner = () => {
    return (
        <div style={{ background: `url(${portfolioBanner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto relative'>
            <div className='absolute w-full h-full bg-[#000074] opacity-80 z-1'></div>

            <div className='w-5/6 mx-auto flex items-center h-full z-10'>
                <span>
                    <h1 className='text-6xl mb-4 font-medium text-white z-10 relative'>Our Services</h1>
                    <p className='text-white z-10 relative'>Detail about our services</p>
                </span>
            </div>
        </div>
    );
};

export default PortfolioBanner;