import React from 'react';
import s1 from '../../assets/dental.jpg'
import s2 from '../../assets/2.jpg';
import s3 from '../../assets/eye.jpg';
import s4 from '../../assets/orthodontist.jpg';
import s5 from '../../assets/oral.jpg';
import s6 from '../../assets/6.jpg'
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const ServicesData = [
        {
            _id: 1,
            img: s1,
            serviceName: "Dental Care",
        },
        {
            _id: 2,
            img: s2,
            serviceName: "Primary Care",
        },
        {
            _id: 3,
            img: s3,
            serviceName: "Eye Care",
        },
        {
            _id: 4,
            img: s4,
            serviceName: "Orthodontics",
        },
        {
            _id: 5,
            img: s5,
            serviceName: "Oral Surgery",
        },
        {
            _id: 6,
            img: s6,
            serviceName: "Tooth Extraction",
        },
    ]

    return (
        <div className='w-5/6 mx-auto mt-24'>
            <span className='text-center'>
                <p className='text-accent text-xl font-bold mb-4'>We can provide health insurance certificates</p>
                <h1 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl font-bold text-black'>Whatever your healthcare needs, <br /> we are here to help</h1>
            </span>

            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10  mt-12'>
                {
                    ServicesData.map((ServicesDataEach) => <ServiceCard key={ServicesDataEach._id} ServicesDataEach={ServicesDataEach}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;