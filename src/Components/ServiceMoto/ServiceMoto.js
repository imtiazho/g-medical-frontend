import React from 'react';

const ServiceMoto = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='grid grid-cols-2 gap-4 w-5/6 mx-auto py-20'>
                <div>
                    <h1 className='text-black text-3xl font-bold mb-4'>We Provide High Quality Services</h1>
                    <p className='text-xl text-primary'>Although pulmonary medicine only began to evolve as a medical specialty in the 1950s.</p>
                </div>
                <p className='text-secondary leading-relaxed w-[90%]'>One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory.</p>
            </div>
        </div>
    );
};

export default ServiceMoto;