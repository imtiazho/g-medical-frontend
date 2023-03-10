import React from 'react';

const GetInTouch = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <div className='w-5/6 mx-auto py-20'>
                <span className='text-center'>
                    <h1 className='text-black font-bold text-5xl mb-4'>Leave us your info</h1>
                    <p className='text-secondary font-medium text-lg'>and we will get back to you.</p>
                </span>

                <form className='w-1/2 mx-auto mt-20 flex flex-col gap-6'>
                    <input placeholder='Full Name*' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                    <input placeholder='Email' type="email" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                    <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black resize-none'></textarea>
                    <input className='w-full bg-primary text-white p-[1rem] rounded-none cursor-pointer btn' type="submit" value='SUBMIT NOW' />
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;