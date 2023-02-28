import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import doctorpic1 from '../../assets/1.jpg';
import doctorpic2 from '../../assets/2.jpg';
import doctorpic3 from '../../assets/3.jpg';
import doctorpic4 from '../../assets/4.jpg';
import doctorpic5 from '../../assets/5.jpg';
import doctorpic6 from '../../assets/6.jpg';

const HealthProfessional = () => {

    return (
        <div className='w-5/6 mx-auto xl:mt-2 lg:mt-4 md:mt-20'>
            <h1 className='text-center xl:text-4xl lg:text-4xl md:text-3xl text-3xl font-medium text-black xl:mb-16 lg:mb-16 md:mb-16 sm:mb-16 mb-10 mt-8'>Meet Our Health Professional</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='text-black text-center rounded overflow-hidden'>
                    <img className='mb-2 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6' src={doctorpic1} alt="" />

                    <div>
                        <h3 className='xl:text-xl lg:text-xl md:text-xl md:text-xl sm:text-xl text-md text-primary mb-2 font-bold'>Jousha Clark</h3>
                        <p className='text-xs'>Anesthesiologist</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='text-black text-center rounded overflow-hidden'>
                    <img className='mb-2 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6' src={doctorpic2} alt="" />

                    <div>
                        <h3 className='xl:text-xl lg:text-xl md:text-xl md:text-xl sm:text-xl text-md text-primary mb-2 font-bold'>Steven Jacob</h3>
                        <p className='text-xs'>Anesthesiologist</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='text-black text-center rounded overflow-hidden'>
                    <img className='mb-2 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6' src={doctorpic3} alt="" />

                    <div>
                        <h3 className='xl:text-xl lg:text-xl md:text-xl md:text-xl sm:text-xl text-md text-primary mb-2 font-bold'>Jhua Bunton</h3>
                        <p className='text-xs'>Allergist</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='text-black text-center rounded overflow-hidden'>
                    <img className='mb-2 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6' src={doctorpic4} alt="" />

                    <div>
                        <h3 className='xl:text-xl lg:text-xl md:text-xl md:text-xl sm:text-xl text-md text-primary mb-2 font-bold'>Emil Hadena</h3>
                        <p className='text-xs'>Neurosurgeon</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='text-black text-center rounded overflow-hidden'>
                    <img className='mb-2 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6' src={doctorpic5} alt="" />

                    <div>
                        <h3 className='xl:text-xl lg:text-xl md:text-xl md:text-xl sm:text-xl text-md text-primary mb-2 font-bold'>David James</h3>
                        <p className='text-xs'>Anesthesiologist</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='text-black text-center rounded overflow-hidden'>
                    <img className='mb-2 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6' src={doctorpic6} alt="" />

                    <div>
                        <h3 className='xl:text-xl lg:text-xl md:text-xl md:text-xl sm:text-xl text-md text-primary mb-2 font-bold'>Thomas Paul</h3>
                        <p className='text-xs'>Allergist</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HealthProfessional;