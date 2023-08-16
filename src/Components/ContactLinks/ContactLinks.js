import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';


const ContactLinks = () => {
    return (
        <div className='bg-[#161616]'>
            <div className='w-[90%] lg:w-5/6 mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='flex flex-col gap-6 text-white md:text-left text-center'>
                    <span className='text-5xl md:block flex justify-center'><BsFillTelephoneFill /></span>
                    <p className='text-3xl font-bold'>Phone</p>
                    <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
                    <p className='text-primary text-lg'>+1-2345-2345</p>
                </div>
                <div className='flex flex-col gap-6 text-white md:text-left text-center'>
                    <span className='text-5xl md:block flex justify-center'><AiOutlineMail /></span>
                    <p className='text-3xl font-bold'>Email</p>
                    <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
                    <p className='text-primary text-lg'>Contact@goodlayers.com</p>
                </div>
                <div className='flex flex-col gap-6 text-white md:text-left text-center'>
                    <span className='text-5xl md:block flex justify-center'><FaLocationArrow /></span>
                    <p className='text-3xl font-bold'>Location</p>
                    <p>4 apt. Flawing Street. The Grand Avenue.
                        Liverpool, UK 33342</p>
                    <p className='text-primary text-lg'>View On Google Map</p>
                </div>
            </div>
        </div>
    );
};

export default ContactLinks;