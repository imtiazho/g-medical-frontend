import React, { useState } from 'react';
import portfolioPic from '../../assets/portfolio-pic.jpg';

const Research = () => {
    const [mousein, setMousein] = useState(false);

    return (
        <div className='grid grid-cols-3 gap-8'>
            <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(1)} className='flex flex-col gap-4'>
                <div className="overflow-hidden relative">
                    <img className={`${mousein === 1 && "scale-110"} duration-500`} src={portfolioPic} alt="" />
                    {mousein === 1 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                </div>
                <p className='text-center px-3 text-black font-medium text-xl'>Research ALD Films to Coat Medical Devices and Implants</p>
            </div>
            <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(2)} className='flex flex-col gap-4'>
                <div className="overflow-hidden relative">
                    <img className={`${mousein === 2 && "scale-110"} duration-500`} src={portfolioPic} alt="" />
                    {mousein === 2 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                </div>
                <p className='text-center px-3 text-black font-medium text-xl'>Research ALD Films to Coat Medical Devices and Implants</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(3)} className="overflow-hidden relative">
                    <img className={`${mousein === 3 && "scale-110"} duration-500`} src={portfolioPic} alt="" />
                    {mousein === 3 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                </div>
                <p className='text-center px-3 text-black font-medium text-xl'>Research ALD Films to Coat Medical Devices and Implants</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(4)} className="overflow-hidden relative">
                    <img className={`${mousein === 4 && "scale-110"} duration-500`} src={portfolioPic} alt="" />
                    {mousein === 4 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                </div>
                <p className='text-center px-3 text-black font-medium text-xl'>Research ALD Films to Coat Medical Devices and Implants</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(5)} className="overflow-hidden relative">
                    <img className={`${mousein === 5 && "scale-110"} duration-500`} src={portfolioPic} alt="" />
                    {mousein === 5 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                </div>
                <p className='text-center px-3 text-black font-medium text-xl'>Research ALD Films to Coat Medical Devices and Implants</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(6)} className="overflow-hidden relative">
                    <img className={`${mousein === 6 && "scale-110"} duration-500`} src={portfolioPic} alt="" />
                    {mousein === 6 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                </div>
                <p className='text-center px-3 text-black font-medium text-xl'>Research ALD Films to Coat Medical Devices and Implants</p>
            </div>
        </div>
    );
};

export default Research;