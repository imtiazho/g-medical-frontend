import React from 'react';
import { Link } from 'react-router-dom';
import getSartedPic from '../../assets/get-start-with-about.jpg';

const GetStartedAbout = () => {
    return (
        <div style={{ backgroundImage: `url(${getSartedPic})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-5/6 mx-auto my-20 relative rounded-lg'>
            <div className='absolute w-full h-full bg-[#000074] opacity-60 rounded-lg'></div>

            <div className='flex text-white justify-center flex-col items-center h-full gap-7 py-20'>
                <p className='text-md z-10'>For all hospital general inquiries, please call: <span className='text-accent'>212 946 2707</span></p>
                <h1 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl z-10'>Get started with <strong>Mediz today!</strong></h1>
                <Link className='btn btn-md btn-accent text-white z-10'>APPOINMENT</Link>
            </div>
        </div>
    );
};

export default GetStartedAbout;