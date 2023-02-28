import React from 'react';
import directionPic from '../../assets/Direction-Map.jpg';
import directionPic2 from '../../assets/Direction-Map-2.jpg';
import { ImLocation } from 'react-icons/im';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { RiHeartPulseLine } from 'react-icons/ri';

const DirectionMap = () => {
    return (
        <div className='grid grid-cols-3'>
            <div style={{ background: `url(${directionPic})`, backgroundPosition: "center", backgroundSize: "contain" }} className='w-full relative'>
                <div className='absolute w-full h-full bg-[#000074] opacity-70'></div>
                <div className='relative z-10 p-16 flex items-center gap-4 justify-center'>
                    <span className='text-4xl'>
                        <ImLocation />
                    </span>
                    <span>
                        <p className='text-lg font-medium text-[#acacac]'>Get Direction</p>
                        <p className='text-lg font-medium italic'>Find us on map</p>
                    </span>
                </div>
            </div>
            <div className='bg-[#113989]'>
                <div className='relative z-10 p-16 flex items-center gap-4 justify-center'>
                    <span className='text-4xl'>
                        <SlEnvolopeLetter />
                    </span>
                    <span>
                        <p className='text-lg font-medium text-[#acacac]'>Contact & Appointment</p>
                        <p className='text-lg font-medium italic'>Send us an email</p>
                    </span>
                </div>
            </div>
            <div style={{ background: `url(${directionPic2})`, backgroundPosition: "center", backgroundSize: "contain" }} className='w-full relative'>
                <div className='absolute w-full h-full bg-[#000074] opacity-70'></div>
                <div className='relative z-10 p-16 flex items-center gap-4 justify-center'>
                    <span className='text-4xl'>
                        <RiHeartPulseLine />
                    </span>
                    <span>
                        <p className='text-lg font-medium text-[#acacac]'>Emergency Service</p>
                        <p className='text-lg font-medium italic'>Call : +1-2345-3455-33</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DirectionMap;