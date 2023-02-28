import React from 'react';
import { Link } from 'react-router-dom';
import { CiMedicalCross } from 'react-icons/ci';

const NavBar = () => {
    const navItems = (
        <>
            <li className='lg:text-black text-white'><Link className='active:text-white' to="/">HOME</Link></li>
            <li className='lg:text-black text-white'><Link className='active:text-white' to="/">ABOUT</Link></li>
            <li className='lg:text-black text-white'><Link className='active:text-white' to="/">SERVICE</Link></li>
            <li className='lg:text-black text-white'><Link className='active:text-white' to="/our-doctor">DOCTORS</Link></li>
            <li className='lg:text-black text-white'><Link className='active:text-white' to="/">BLOG</Link></li>
            <li className='lg:text-black'><Link className='active:text-white' to="/">PORTFOLIO</Link></li>
            <li className='lg:text-black text-white'><Link className='active:bg-secondary active:text-white' to="/">CONTACT</Link></li>
        </>
    )
    return (
        <div className="navbar py-4 lg:w-5/6 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className='lg:text-3xl font-bold text-primary flex items-center gap-1 sm:text-2xl'> <CiMedicalCross /> MEDICAL</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='bg-primary btn btn-sm text-white text-xs' to='/'>APPOINMENT</Link>
            </div>
        </div>
    );
};

export default NavBar;