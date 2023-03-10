import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Hooks/CustomLink';

const PortfolioSectionContainer = () => {
    return (
        <div className='mt-20 mx-auto w-5/6'>
            <div className='flex justify-center gap-12 text-black mb-12'>
                <CustomLink className='font-bold text-sm pb-2' to='/portfolio-sec'>ALL</CustomLink>
                <CustomLink className='font-bold text-sm pb-2' to='edu-portfolio'>EDUCATION</CustomLink>
                <CustomLink className='font-bold text-sm pb-2' to='research-portfolio'>RESEARCH</CustomLink>
                <CustomLink className='font-bold text-sm pb-2' to='violence-portfolio'>VIOLENCE</CustomLink>
            </div>

            <Outlet />
        </div>
    );
};

export default PortfolioSectionContainer;