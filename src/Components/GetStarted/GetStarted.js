import React from 'react';
import { Link } from 'react-router-dom';
import getStarted from '../../assets/getStarted.jpg';

const GetStarted = () => {
    return (
        <div style={{ backgroundImage: `url(${getStarted})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full h-96 my-24 relative'>
            <div className='absolute w-full h-full bg-[#000074] opacity-60'></div>

            <div className='flex text-white justify-center flex-col items-center h-full gap-4'>
                <p className='xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg font-medium z-10'>See how much better going to the doctor can be</p>
                <h1 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl z-10'>Get started with <strong>Mediz today!</strong></h1>
                <Link className='btn btn-md btn-accent text-white z-10'>SIGN UP NOW</Link>
            </div>
        </div>
    );
};

export default GetStarted;