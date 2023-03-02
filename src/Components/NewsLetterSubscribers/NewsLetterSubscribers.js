import React from 'react';

const NewsLetterSubscribers = () => {
    return (
        <div className='bg-primary mt-[30rem]'>
            <div className='w-5/6 mx-auto grid grid-cols-2 items-center pt-[15rem] pb-24'>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold mb-4'>Subscribe to our newsletter</h1>
                    <p className='text-[#b8d0ff]'>Community Memorial Hospital is the ONLY hospital in the state of New York to achieve One of Healthgrades America’s 100 Best Hospitals for Joint Replacement in 2016.</p>
                </div>
                <div>
                    <div className='rounded overflow-hidden w-[70%] mx-auto bg-white flex items-center justify-between'>
                        <input type="text" className='w-full focus:outline-0 h-full bg-transparent px-[1rem]' />
                        <button className='bg-[#4D93E9] px-[25px] py-[10px] text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetterSubscribers;