import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const PricingPlanCard = ({ EachPricingPlan }) => {
    const { type, userQuantity, services, price } = EachPricingPlan;
    return (
        <div className='px-6 py-8 text-secondary shadow-lg rounded-lg border hover:border-accent border-transparent duration-200 border-1'>
            <p className='text-accent text-2xl mb-2'>{type}</p>
            <p className='mb-1'>{userQuantity} User</p>
            <span className='flex items-end text-black gap-0.5 mb-12'>
                <span className='flex'>
                    <p className='text-xl'>$</p>
                    <h2 className='text-6xl font-medium'>{price}</h2>
                </span>
                <p className='flex-end'>/MO</p>
            </span>

            <div className='mb-10'>
                {
                    services.map(service => (
                        <p className='flex items-center gap-2 mb-3'>
                            <span className='text-[#2ED47D]'>
                                <BsCheckLg /></span>
                            <span className='text-lg'>
                                {service}
                            </span>
                        </p>
                    ))
                }

                {/* <p className='flex items-center gap-2 mb-3'>
                    <span className='text-[#2ED47D]'><BsCheckLg /></span>
                    <span className='text-lg'>
                        Emergency room
                    </span>
                </p>
                <p className='flex items-center gap-2 mb-3'>
                    <span className='text-[#2ED47D]'>
                        <BsCheckLg /></span>
                    <span className='text-lg'>
                        Phospital services
                    </span>
                </p>
                <p className='flex items-center gap-2 mb-3'>
                    <span className='text-[#2ED47D]'>
                        <BsCheckLg /></span>
                    <span className='text-lg'>
                        Annual eye exams
                    </span>
                </p>
                <p className='flex items-center gap-2 mb-3'>
                    <span className='text-[#2ED47D]'>
                        <BsCheckLg /></span>
                    <span className='text-lg'>
                        Dental implant
                    </span>
                </p>
                <p className='flex items-center gap-2 mb-3'>
                    <span className='text-[#2ED47D]'>
                        <BsCheckLg /></span>
                    <span className='text-lg'>
                        Diagnostic imaging
                    </span>
                </p> */}
            </div>

            <Link className='btn btn-accent text-white flex w-1/2 mx-auto'>LEARN MORE</Link>
        </div>
    );
};

export default PricingPlanCard;