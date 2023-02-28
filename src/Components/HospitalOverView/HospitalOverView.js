import React from 'react';
import { FaRegHospital } from 'react-icons/fa';
import { BiHealth } from 'react-icons/bi';
import { TbDeviceHeartMonitor } from 'react-icons/tb';
import overview from '../../assets/overview.jpg';


const HospitalOverView = () => {
    return (
        <div className='xl:mt-52 lg:mt-24 md:mt-16 sm:mt-16 mt-16 w-11/12 lg:w-11/12 sm:w-11/12 xl:w-5/6 mx-auto sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap xl:flex lg:flex md:flex sm:flex grid justify-center items-center lg:gap-6 xl:gap-6 md:gap-12 sm:gap-8'>
            <div className='overview-left basis-1/2 sm:basis-[90%] sm:order-2 md:order-2 lg:order-1 xl:order-1 order-2'>
                <p className='text-accent text-xl font-bold mb-4'>Working together for a healthy life</p>
                <h2 className='text-4xl font-bold leading-[3rem] text-black mb-6'>Hospital top liberty – free <br /> choice of doctors</h2>
                <p className='w-4/5 text-secondary mb-12'>If you’re looking for a reliable health insurer with outstanding services and insurance solutions tailored to your require- ments,you need look no further than Medikal.</p>

                <div className='overview-section flex flex-col gap-8 text-secondary'>
                    <div className='each-overview flex items-center gap-8'>
                        <span className='w-16 h-16 shadow-lg rounded-lg flex justify-center items-center text-accent text-2xl'><FaRegHospital /></span>
                        <span>
                            <h4 className='text-xl font-medium text-black mb-2'>Hospital Private</h4>
                            <p className='text-lg'>Treatment by doctors and chiropractors.</p>
                        </span>
                    </div>

                    <div className='each-overview flex items-center gap-8'>
                        <span className='w-16 h-16 shadow-lg rounded-lg flex justify-center items-center text-accent text-2xl'><BiHealth /></span>
                        <span>
                            <h4 className='text-xl font-medium text-black mb-2'>Health Insurance</h4>
                            <p>Treatment by doctors and chiropractors.</p>
                        </span>
                    </div>

                    <div className='each-overview flex items-center gap-8'>
                        <span className='w-16 h-16 shadow-lg rounded-lg flex justify-center items-center text-accent text-2xl'><TbDeviceHeartMonitor /></span>
                        <span>
                            <h4 className='text-xl font-medium text-black mb-2'>Medical Private</h4>
                            <p>Treatment by doctors and chiropractors.</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className='overview-right basis-1/2 sm:basis-[90%] p-12 sm:p-0 sm:order-1 md:order-1 lg:order-2 xl:order-2 order-1'>
                <img className='mx-auto' src={overview} alt="" />
            </div>
        </div>
    );
};

export default HospitalOverView;