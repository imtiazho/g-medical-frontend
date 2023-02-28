import React from 'react';
import { ImLocation } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const UpperNav = () => {
    return (
        <div className='bg-primary text-white p-3 lg:block md:block hidden'>
            <div className='lg:w-5/6 mx-auto flex justify-between items-center'>
                <div className='left-side-upper-nav flex gap-6'>
                    <div className='flex items-center gap-1'>
                        <span><ImLocation /></span>
                        <span className='text-sm'> Dhaka 1230, Bangladesh</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span><AiFillPhone /></span>
                        <span className='text-sm'> +08801715263</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span><AiOutlineClockCircle /></span>
                        <span className='text-sm'> Mon - Fri 9.00AM - 8.00PM</span>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <span className='text-md'><FaFacebookF /></span>
                    <span className='text-md'><FaLinkedinIn /></span>
                    <span className='text-md'><FaPinterestP /></span>
                    <span className='text-md'><BsTwitter /></span>
                    <span className='text-md'><BsInstagram /></span>
                </div>
            </div>
        </div>
    );
};

export default UpperNav;