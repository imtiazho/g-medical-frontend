import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import profilePic from '../../assets/profile-pic.jpg';

const DoctorProfileIntro = () => {
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='w-5/6 mx-auto py-16 grid grid-cols-4 gap-20'>
                <div className='w-[300px] w-[300px] rounded-full overflow-hidden'>
                    <img src={profilePic} alt="" />
                </div>
                <div className='col-span-3 mt-7 flex flex-col gap-4'>
                    <p className='tracking-widest text-secondary font-bold'>ANESTHESIOLOGIST</p>
                    <h1 className='text-5xl mb-5 font-bold text-black'>Joshua Clark</h1>
                    <div className='mb-5 flex items-center gap-4 text-secondary'>
                        <span className='text-lg'><FaFacebookF /></span>
                        <span className='text-lg'><FaLinkedinIn /></span>
                        <span className='text-lg'><FaPinterestP /></span>
                        <span className='text-lg'><BsInstagram /></span>
                    </div>
                    <p className='text-secondary w-5/6'>Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by <br /> pulmonologists. Pulmonology is closely.</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfileIntro;