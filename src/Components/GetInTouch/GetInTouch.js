import React from 'react';

const GetInTouch = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <div className='lg:w-5/6 w-[90%] mx-auto py-20'>
                <span className='text-center'>
                    <h1 className='text-black font-bold lg:text-5xl text-4xl mb-4'>Leave us your info</h1>
                    <p className='text-secondary font-medium lg:text-lg text-[16px]'>and we will get back to you.</p>
                </span>

                <form className='lg:w-1/2 md:w-[70%] w-[90%] mx-auto lg:mt-20 mt-10 flex flex-col gap-6'>
                    <input placeholder='Full Name*' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                    <input placeholder='Email' type="email" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                    <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black resize-none'></textarea>
                    <input className='btn btn-md btn-primary text-white rounded-none' type="submit" value='SUBMIT NOW' />
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;