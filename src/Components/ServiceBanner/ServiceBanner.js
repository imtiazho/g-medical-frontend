import React from 'react';
import serviceBanner from '../../assets/service-banner.jpg';

const ServiceBanner = () => {
    return (
        <div style={{ background: `url(${serviceBanner})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className='w-5/6 mx-auto py-24'>
                <h1 className='text-white font-bold text-5xl mb-4'>Our Service</h1>
                <p className='text-lg'>Detail about our services</p>
            </div>
        </div>
    );
};

export default ServiceBanner;