import React from 'react';

const ShortIntroCard = ({ eachIntro }) => {
    const { img, title, decs } = eachIntro;
    return (
        <div className="card bg-white xl:w-80 lg:w-80 md:w-80 sm:w-11/12 w-11/12 shadow-2xl">
            <div className="card-body text-black text-center border-b-4 hover:border-primary border-transparent rounded-xl duration-200">
                <span className='flex justify-center text-accent mb-2'>
                    <img className='w-24' src={img} alt="" />
                </span>
                <h2 className='text-2xl font-medium'>{title}</h2>
                <p className="text-secondary">{decs}</p>
            </div>
        </div>
    );
};

export default ShortIntroCard;