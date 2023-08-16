import React from 'react';
import { Link } from 'react-router-dom';
import PricingPlanCard from '../PricingPlanCard/PricingPlanCard';

const PricingPlan = () => {
    const PricingPlanData = [
        {
            _id: 1,
            type: "Personal",
            userQuantity: 1,
            services: ["Primary care", "Emergency room", "Phospital services", "Annual eye exams", "Dental implant", "Diagnostic imaging"],
            price: 29
        },
        {
            _id: 2,
            type: "Business",
            userQuantity: "2 - 3",
            services: ["Primary care", "Emergency room", "Phospital services", "Annual eye exams", "Dental implant", "Diagnostic imaging"],
            price: 59
        },
        {
            _id: 3,
            type: "Premium",
            userQuantity: "6+",
            services: ["Primary care", "Emergency room", "Phospital services", "Annual eye exams", "Dental implant", "Diagnostic imaging"],
            price: 79
        }
    ]
    return (
        <div>
            <p className='text-accent font-medium xl:text-lg lg:text-lg md:text-lg sm:text-md text-md text-center mb-3'>Know our plans and prices and choose the best option</p>
            <h2 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-16 text-black'>We have a variety of health plan types <br /> to meet your needs and budget</h2>

            <div className='w-[90%] lg:w-5/6 mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8'>
                {
                    PricingPlanData.map(EachPricingPlan => <PricingPlanCard key={EachPricingPlan._id} EachPricingPlan={EachPricingPlan}></PricingPlanCard>)
                }
            </div>
        </div>
    );
};

export default PricingPlan;