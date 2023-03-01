import React from 'react';
import parterPic1 from '../../assets/partner-1.jpg';
import parterPic2 from '../../assets/partner-2.jpg';
import parterPic3 from '../../assets/partner-3.jpg';
import parterPic4 from '../../assets/partner-4.jpg';

const Partner = () => {
    return (
        <div className='mt-[12rem] w-5/6 mx-auto'>
            <span className='flex flex-col gap-3 items-center'>
                <p className='text-accent font-medium text-2xl'>Our strategic partnerships and community</p>
                <h1 className='text-center text-black text-4xl font-bold leading-normal'>Effective leadership focused on our mission <br /> to provide exceptional care</h1>
            </span>

            <div className='mt-16 grid grid-cols-4 items-center'>
                <img src={parterPic1} alt="" />
                <img src={parterPic2} alt="" />
                <img src={parterPic3} alt="" />
                <img src={parterPic4} alt="" />
            </div>
        </div>
    );
};

export default Partner;