import React from 'react';
import ownerPicture from '../../assets/Owner-picture.jpg';
import ownerSignaturee from '../../assets/owner-signature.jpg';


const OwnerCard = () => {
    return (
        <div className='lg:w-5/6 w-[90%] mx-auto relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 shadow-xl bg-white mt-[2rem] md:mt-[2rem] lg:mt-[0rem] lg:absolute lg:top-[-8rem] xl:top-[-6rem] lg:rounded-none rounded-lg overflow-hidden'>
                <img className='h-full w-full object-cover' src={ownerPicture} alt="" />

                <div className='pt-8 lg:pt-12 pl-6 lg:pl-10 pb-6 lg:pb-8 pr-4 flex flex-col lg:gap-6 gap-4'>
                    <span>
                        <h2 className='text-[25px] md:text-[28px] lg:text-[32px] xl:text-4xl font-medium mb-1 xl:mb-2 text-black'>Story about our hospital</h2>
                        <h3 className='lg:text-[18px] xl:text-xl text-primary'>and how we get to this point</h3>
                    </span>
                    <p className='text-[14px] xl:text-[16px] text-secondary pr-6'>One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.</p>

                    <span>
                        <img className='xl:w-44 w-36 mb-4' src={ownerSignaturee} alt="" />
                        <p className='text-[15px] xl:text-[18px] text-secondary font-medium'>Founder of Medical Hospital</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OwnerCard;