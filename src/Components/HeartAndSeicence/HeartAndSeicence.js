import React from 'react';
import { Link } from 'react-router-dom';
import aboutRightPicture from '../../assets/about-bg-right.jpg';

const HeartAndSeicence = () => {
    return (
        <div className='bg-[#F8FAFF]'>
            <div className='w-[90%] lg:w-5/6 mx-auto grid grid-cols-1 items-center justify-center lg:grid-cols-2 pt-20 pb-28 gap-6'>
                <div className='text-secondary order-2 lg:order-1'>
                    <span className='flex flex-col gap-3 md:gap-4 mb-4'>
                        <p className='text-accent text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-medium lg:font-bold'>The heart and science of medicine</p>
                        <h1 className='text-[25px] sm:text-[28px] md:text-[30px] lg:text-4xl text-black font-bold leading-normal'>Serving patients and their <br /> families in New York</h1>
                        <p className='text-[13px] md:text-[16px]'>The Medikal Center is a leader in emergency medicine, primary care and specialty services, providing hope and healing for generations. From infants to teenagers, young adults to seniors, our center connects our patients to highly qualified doctors, nurses and other specialized clinicians.</p>

                        <p className='text-[13px] md:text-[16px]'>Mediz Center is the primary health care provider for 66,000 people who live and work in the 26 communities of central NYC. We provide 24-hour emergency care, with a full spectrum of inpatient (licensed for 122 beds) and outpatient services.</p>

                        <p className='text-[13px] md:text-[16px]'>Our professional staff includes over 200 physicians and 70 advanced practice providers representing 25 medical specialties.</p>
                    </span>


                    <Link className='md:btn btn-primary md:btn-primary btn btn-sm md:text-white text-white mt-[1rem]' to=''>MEET OUR TEAM</Link>
                </div>
                <div className='p-6 order-1 lg:order-2'>
                    <img src={aboutRightPicture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeartAndSeicence;