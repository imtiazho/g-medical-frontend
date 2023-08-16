import React from 'react';

const SectionBannerAnotherType = ({ serviceBanner }) => {
    return (
        <div style={{ background: `url(${serviceBanner})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className='w-[90%] lg:w-5/6 mx-auto py-24'>
                <h1 className='text-white font-bold text-[30px] md:text-5xl mb-1 md:mb-4'>Our Service</h1>
                <p className='md:text-lg text-[15px]'>Detail about our services</p>
            </div>
        </div>
    );
};

export default SectionBannerAnotherType;