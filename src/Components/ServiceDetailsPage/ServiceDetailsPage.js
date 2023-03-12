import React from 'react';
import { useParams } from 'react-router-dom';
import serviceBanner from '../../assets/service-banner.jpg';
import generalSergery from '../../assets/General-Surgery.jpg';

const ServiceDetailsPage = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <div style={{ background: `url(${serviceBanner})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='w-5/6 mx-auto py-24'>
                    <h1 className='text-white font-bold text-5xl mb-4'>General Surgery</h1>
                    <p className='text-lg'>Detail about our service</p>
                </div>
            </div>

            <div className='w-5/6 mx-auto mt-20 grid grid-cols-7 gap-10'>
                <div className='col-span-5 text-secondary'>
                    <div className='grid grid-cols-6 gap-8 items-center'>
                        <div className='col-span-2'>
                            <img src={generalSergery} alt="" />
                        </div>
                        <div className='col-span-4 flex flex-col gap-6'>
                            <h1 className='text-black font-bold text-3xl'>About Allergy Department</h1>
                            <p className='leading-relaxed'>Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association</p>

                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>CF-related diabetes (monthly)</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>Gastrointestinal (monthly)</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>CF-related liver disease (monthly)</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>Sweat testing (three times per month)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border col-span-2 text-black text-5xl'>Right Side</div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;