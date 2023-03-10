import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLink = () => {
    return (
        <div className='flex justify-center items-center gap-10 my-10 w-5/6 mx-auto'>
            <Link className='text-1xl text-black'><FaFacebookF /></Link>
            <Link className='text-1xl text-black'><FaLinkedinIn /></Link>
            <Link className='text-1xl text-black'><FaPinterestP /></Link>
            <Link className='text-1xl text-black'><BsTwitter /></Link>
            <Link className='text-1xl text-black'><BsInstagram /></Link>
        </div>
    );
};

export default SocialLink;