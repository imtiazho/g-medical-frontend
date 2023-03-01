import React from 'react';
import ownerPicture from '../../assets/Owner-picture.jpg';
import ownerSignaturee from '../../assets/owner-signature.jpg';


const OwnerCard = () => {
    return (
        <div className='w-5/6 mx-auto relative'>
            <div className='grid grid-cols-2 shadow-xl bg-white absolute top-[-6rem]'>
                <img src={ownerPicture} alt="" />

                <div className='pt-12 pl-10 pb-8 flex flex-col gap-6'>
                    <span>
                        <h2 className='text-4xl font-medium mb-2 text-black'>Story about our hospital</h2>
                        <h3 className='text-xl text-primary'>and how we get to this point</h3>
                    </span>
                    <p className='text-secondary'>One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.</p>

                    <span>
                        <img className='w-44 mb-4' src={ownerSignaturee} alt="" />
                        <p className='text-secondary text-lg font-medium'>Founder of Medical Hospital</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OwnerCard;