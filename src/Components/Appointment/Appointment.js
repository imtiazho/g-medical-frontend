import React, { useState } from 'react';
import placeHolderDoctorPic from '../../assets/1.jpg';
import appoFeature1 from '../../assets/afeature-01.jpg';
import appoFeature2 from '../../assets/afeature-02.jpg';
import appoFeature3 from '../../assets/afeature-03.jpg';
import appoFeature4 from '../../assets/afeature-04.jpg';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineLike, AiTwotoneStar } from 'react-icons/ai';
import { FaBriefcaseMedical, FaMoneyBillAlt, FaRegComment } from 'react-icons/fa';
import AppoinmentBookModal from '../AppoinmentBookModal/AppoinmentBookModal';


const Appointment = () => {
    const [openModal, setOpenModal] = useState(null);

    return (
        <div className='w-5/6 mx-auto'>
            <div className='text-center mt-4 mb-8'>
                <h1 className='bg-primary py-2 rounded-lg text-white font-bold text-2xl'>Make an Appoinment</h1>
            </div>
            <div className='grid grid-cols-7 gap-5 items-start'>
                <div className='text-black border rounded col-span-2 flex flex-col gap-6'>
                    <p className='text-xl border-b w-full py-3 px-6'>Search Filter</p>
                    <input className='border w-[90%] mx-auto px-4 py-2 outline-none cursor-pointer' type="date" />

                    <div className='px-4'>
                        <h1 className='text-black text-lg font-medium mb-2'>Gender</h1>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Male Doctor</span>
                        </div>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Female Doctor</span>
                        </div>
                    </div>

                    <div className='px-4'>
                        <h1 className='text-black text-lg font-medium mb-2'>Gender</h1>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Urology</span>
                        </div>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Neurology</span>
                        </div>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Dentist</span>
                        </div>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Orthofedics</span>
                        </div>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Cardiology</span>
                        </div>
                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                            <input className='w-[15px] h-[15px]' type="checkbox" />
                            <span>Heart Specialist</span>
                        </div>
                    </div>

                    <button className='btn btn-accent text-white w-[90%] mx-auto mb-4'>Search</button>
                </div>

                <div className='text-secondary flex flex-col gap-4 col-span-5'>
                    <div className='border rounded flex justify-between p-6'>
                        <div className='flex gap-4'>
                            <div className='w-[180px] h-[180px]'>
                                <img className='rounded' src={placeHolderDoctorPic} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <h1 className='text-black text-2xl font-bold mb-1'>Jousha Clark</h1>
                                    <p>MDS - Periodontology and Oral Implantology, BDS</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center gap-2 mb-2 text-accent text-[17px]'>
                                        <FaBriefcaseMedical className='text-lg' />
                                        <p>Dentist</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center text-lg text-primary'>
                                            <AiTwotoneStar />
                                            <AiTwotoneStar />
                                            <AiTwotoneStar />
                                            <AiTwotoneStar />
                                            <AiTwotoneStar />
                                        </div>
                                        <p>(10)</p>
                                    </div>
                                    <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                                        <div><MdLocationPin /></div>
                                        <p className='text-sm'>Florida, USA</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='flex gap-2  mb-4'>
                                        <img className='w-[40px] h-[40px] object-cover' src={appoFeature1} alt="" />
                                        <img className='w-[40px] h-[40px] object-cover' src={appoFeature2} alt="" />
                                        <img className='w-[40px] h-[40px] object-cover' src={appoFeature3} alt="" />
                                        <img className='w-[40px] h-[40px] object-cover' src={appoFeature4} alt="" />
                                    </span>
                                    <span className='flex gap-3'>
                                        <p className='border border-primary py-1 text-sm px-2 rounded'>Dental Fillings</p>
                                        <p className='border border-primary py-1 text-sm px-2 rounded'>Whitening</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <span><AiOutlineLike className='text-lg' /></span>
                                    <p>98%</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><FaRegComment className='text-lg' /></span>
                                    <p>17 Feedback</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><MdLocationPin className='text-lg' /></span>
                                    <p>Florida, USA</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span><FaMoneyBillAlt className='text-lg' /></span>
                                    <p>$300 - $1000</p>
                                </div>
                            </div>

                            <button className='btn btn-primary text-white w-[200px]'>View Profile</button>
                            <label onClick={() => setOpenModal(1)} htmlFor="my-modal-5" className='btn btn-accent text-white w-[200px]'>Book Appoinment</label>
                        </div>
                    </div>

                    {openModal && <AppoinmentBookModal></AppoinmentBookModal>}
                </div>
            </div>
        </div>
    );
};

export default Appointment;