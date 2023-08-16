import React from 'react';
import { AiFillMedicineBox, AiFillPhone, AiOutlineClockCircle, AiOutlineLogin, AiOutlineTeam } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { MdOutlineQuestionAnswer } from 'react-icons/md';
import { GoRequestChanges } from 'react-icons/go';
import { IoMdListBox } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date().getFullYear();

    return (
        <footer>
            <div className="footer p-10 text-base-content mt-20 lg:mt-32">
                <div className='text-secondary'>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current text-black mb-2"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div className='text-secondary'>
                    <span className="footer-title">Contact Center</span>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><AiFillPhone /></span>
                        <span className='font-medium'>(+1) 212-946-2707</span>
                    </Link>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><ImLocation /></span>
                        <span className='font-medium'>112 W 34th St, New York</span>
                    </Link>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><AiOutlineClockCircle /></span>
                        <span className='font-medium'>Mon – Fri: 8.00am 6.00pm</span>
                    </Link>
                </div>
                <div className='text-secondary'>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><AiOutlineLogin /></span>
                        <span className='font-medium'>Login</span>
                    </Link>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><MdOutlineQuestionAnswer /></span>
                        <span className='font-medium'>FAQ's</span>
                    </Link>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><AiFillMedicineBox /></span>
                        <span className='font-medium'>Medicare</span>
                    </Link>
                </div>
                <div className='text-secondary'>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><AiOutlineTeam /></span>
                        <span className='font-medium'>Our Team</span>
                    </Link>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><GoRequestChanges /></span>
                        <span className='font-medium'>Appoinment</span>
                    </Link>
                    <Link className="link link-hover flex items-center gap-1 text-md mb-3">
                        <span className='text-accent text-lg'><IoMdListBox /></span>
                        <span className='font-medium'>Blogs</span>
                    </Link>
                </div>
            </div>
            <div className='text-center text-secondary mb-6 md:mb-8'>
                <p className='text-[13px] md:text-[16px]'>{`© ${today} - designed and developed by imtiaz.h.z`}</p>
            </div>
        </footer>
    );
};

export default Footer;