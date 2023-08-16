import React from 'react';

const SectionBanner = ({ banner, moto, subTitle }) => {
    return (
        <div style={{ background: `url(${banner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-[400px] md:h-[300px] relative hidden lg:block'>
            <div className='absolute w-full h-full bg-[#000074] opacity-60 z-1'></div>

            <div className='flex justify-center items-center h-full z-10'>
                <span>
                    <h1 className='text-center text-6xl mb-4 text-white z-10 relative'>{moto}</h1>
                    <p className='text-center text-white z-10 relative'>{subTitle}</p>
                </span>
            </div>
        </div>
    );
};

export default SectionBanner;