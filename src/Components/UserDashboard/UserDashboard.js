import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLinkTwo from '../CustomLinkTwo/CustomLinkTwo';

const UserDashboard = () => {
    return (
        <div className='grid xl:grid-cols-5 xl:gap-5 grid-cols-1 w-[97%] mx-auto'>
            <div className='col-span-1 xl:h-[100vh] xl:sticky top-0 bottom-0 right-0 left-0 flex flex-col gap-4 gap-2 p-2 shadow-lg rounded-lg border'>
                <CustomLinkTwo to='/user-dashboard' className='btn btn-md btn-accent text-white w-full border-0'>All Invoice</CustomLinkTwo>
                <CustomLinkTwo to='/user-dashboard/my-appointment' className='btn btn-md btn-secondary text-white w-full border-0'>My Appoinment</CustomLinkTwo>
                <CustomLinkTwo to='/user-dashboard/got-appointment' className='btn btn-md btn-secondary text-white w-full border-0'>Got Appoinment</CustomLinkTwo>
                <CustomLinkTwo to='/doctor-profile/1' className='btn btn-md btn-secondary text-white w-full border-0'>My Profile</CustomLinkTwo>
            </div>
            <div className='col-span-4 mt-[2rem] lg:mt-0'>
                <Outlet />
            </div>
        </div>
    );
};

export default UserDashboard;