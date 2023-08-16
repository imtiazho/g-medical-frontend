import React from 'react';
import parterPic1 from '../../assets/partner-1.jpg';
import parterPic2 from '../../assets/partner-2.jpg';
import parterPic3 from '../../assets/partner-3.jpg';
import parterPic4 from '../../assets/partner-4.jpg';

const Partner = () => {
    const partnersLogos = [
        {
            _id: 1,
            pic: parterPic1
        },
        {
            _id: 2,
            pic: parterPic2
        },
        {
            _id: 3,
            pic: parterPic3
        },
        {
            _id: 4,
            pic: parterPic4
        }
    ]
    return (
        <div className='mt-[34rem] sm:mt-[18rem] md:mt-[18rem] lg:mt-[12rem] w-[90%] lg:w-5/6 mx-auto'>
            <span className='flex flex-col gap-3 items-center'>
                <p className='text-accent font-medium text-[20px] md:text-2xl text-center'>Our strategic partnerships and community</p>
                <h1 className='text-center text-black text-[25px] md:text-4xl font-bold leading-normal'>Effective leadership focused on our mission <br /> to provide exceptional care</h1>
            </span>

            <div className='mt-8 md:mt-16 grid grid-cols-2  md:grid-cols-4 items-center'>
                {
                    partnersLogos.map(partnersLogo => <img key={partnersLogo._id} src={partnersLogo.pic} alt="" />)
                }
            </div>
        </div>
    );
};

export default Partner;