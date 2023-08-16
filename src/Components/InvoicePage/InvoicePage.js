import React from 'react';

const InvoicePage = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='text-center mt-4 mb-8'>
                <h1 className='bg-primary py-2 rounded-lg text-white font-bold text-2xl'>Invoice View</h1>
            </div>

            <div className='border p-6 rounded grid grid-cols-2 text-secondary bg-[#f8f8f8]'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-3xl text-black font-bold'>Mediz</h1>

                    <div className='flex flex-col gap-1 w-1/2'>
                        <p className='text-xl font-bold text-black'>Invoice From</p>
                        <p className=''>Dr. Darren Elder</p>
                        <p className=''>806 Twin Willow Lane, Old Forge, Newyork, USA</p>
                    </div>

                    <div className='flex flex-col gap-1 w-1/2'>
                        <p className='text-xl font-bold text-black'>Payment Method</p>
                        <p className=''>Pay when you visit the doctor. Remember to carry this invoice with you.</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-xl font-bold text-black'>Description</h1>
                        <div className='w-3/4'>
                            <p className=''>An Appointment for General Consultation with Dr. Darren Elder on 12 Nov 2019 5:00PM to 6:00PM</p>
                        </div>
                    </div>
                </div>
                <div className='text-end flex flex-col gap-8'>
                    <div>
                        <p className='text-[16px]'><strong className='text-black'>Order</strong>: #00124</p>
                        <p className='text-[16px]'><strong className='text-black'>Issued</strong>: 20/07/2019</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-bold text-black'>Invoice To</p>
                        <p className=''>Walter Roberson</p>
                        <p className=''>299 Star Trek Drive, Panama City,  Florida, 32405, USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicePage;