import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Hooks/CustomLink';
import portfolioBanner from '../../assets/our-doctor.jpg';
import SectionBanner from '../SectionBanner/SectionBanner';


const PortfolioSectionContainer = () => {
    return (
        <div>
            <SectionBanner banner={portfolioBanner} moto={"Portfolio"} subTitle={"No Excerpt, With Space"} />
            <div className='lg:mt-20 mt-10 mx-auto w-[95%] xl:w-5/6'>
                <div className='flex justify-center md:gap-12 gap-6 text-black mb-12'>
                    <CustomLink className='font-bold text-sm pb-2' to='/portfolio-sec'>ALL</CustomLink>
                    <CustomLink className='font-bold text-sm pb-2' to='edu-portfolio'>EDUCATION</CustomLink>
                    <CustomLink className='font-bold text-sm pb-2' to='research-portfolio'>RESEARCH</CustomLink>
                    <CustomLink className='font-bold text-sm pb-2' to='violence-portfolio'>VIOLENCE</CustomLink>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default PortfolioSectionContainer;