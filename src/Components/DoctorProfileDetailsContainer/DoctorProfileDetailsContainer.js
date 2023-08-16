import React from 'react';
import { BsInstagram, BsTelephone } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRegComment, FaRegUser } from 'react-icons/fa';
import { RxEnvelopeOpen } from 'react-icons/rx';
import { TbLocation } from 'react-icons/tb';
import { CiClock2 } from 'react-icons/ci';
import QualitySectionCard from '../QualitySectionCard/QualitySectionCard';
import { useParams } from 'react-router-dom';
import doctorpic1 from '../../assets/1.jpg';
import doctorpic2 from '../../assets/2.jpg';
import doctorpic3 from '../../assets/3.jpg';
import doctorpic4 from '../../assets/4.jpg';
import doctorpic5 from '../../assets/5.jpg';
import doctorpic6 from '../../assets/6.jpg';


const DoctorProfileDetailsContainer = ({ targetedDoctor }) => {
    return (
        <div>
            <div className='bg-[#F8F8F8]'>
                <div className='w-[90%] lg:w-5/6 mx-auto py-16 grid xl:grid-cols-4 grid-cols-1 xl:gap-[13rem]'>
                    <div className='md:w-[300px] mx-auto md:h-[300px] h-[250px] w-[250px] xl:col-span-1 rounded-full overflow-hidden'>
                        <img src={targetedDoctor?.doctorImg} alt="" />
                    </div>
                    <div className='xl:col-span-3 mt-7 flex flex-col gap-4 xl:text-left text-center'>
                        <p className='tracking-widest text-secondary font-bold'>{targetedDoctor?.designation}</p>
                        <h1 className='text-5xl mb-5 font-bold text-black'>{targetedDoctor?.doctorName}</h1>
                        <div className='mb-5 flex items-center justify-center xl:justify-start gap-4 text-secondary'>
                            <span className='text-lg'><FaFacebookF /></span>
                            <span className='text-lg'><FaLinkedinIn /></span>
                            <span className='text-lg'><FaPinterestP /></span>
                            <span className='text-lg'><BsInstagram /></span>
                        </div>
                        <p className='text-secondary xl:w-5/6'>{targetedDoctor?.profileIntro}</p>
                    </div>
                </div>
            </div>

            <div className='lg:w-5/6 w-[90%] mx-auto mt-20 grid xl:grid-cols-6 grid-cols-1 gap-12'>
                <div className='col-span-2 flex flex-col gap-14 text-[#17449e]'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex text-secondary items-center gap-4'>
                            <span className='text-xl'><FaRegUser /></span>
                            <span>{targetedDoctor?.gender}</span>
                        </div>
                        <div className='flex text-secondary items-center gap-4'>
                            <span className='text-xl'><FaRegComment /></span>
                            <span>{targetedDoctor?.languagePrefereance}</span>
                        </div>
                        <div className='flex text-secondary items-center gap-4'>
                            <span className='text-xl'><BsTelephone /></span>
                            <span>{targetedDoctor?.phoneNumber}</span>
                        </div>
                        <div className='flex text-secondary items-center gap-4'>
                            <span className='text-xl'><RxEnvelopeOpen /></span>
                            <span>{targetedDoctor?.doctorEmail}</span>
                        </div>
                        <div className='flex text-secondary items-center gap-4'>
                            <span className='text-xl'><TbLocation /></span>
                            <span>{targetedDoctor?.doctorAddress}</span>
                        </div>
                    </div>

                    <button className="btn btn-primary text-white">DOWNLOAD Vcard</button>

                    <div>
                        <div className='border-b pb-8 mb-8'>
                            <p className='text-black mb-4 font-bold text-2xl'>Specialty</p>
                            <p className='text-secondary'>{targetedDoctor?.specility}</p>
                        </div>

                        <div className='border-b pb-8'>
                            <p className='text-black mb-4 font-bold text-2xl'>Conditions</p>
                            <p className='text-secondary'>{targetedDoctor?.condition}</p>
                        </div>
                    </div>

                    <div className='border-b pb-8 flex flex-col gap-3'>
                        <p className='text-black mb-4 font-bold text-2xl'>Membership</p>
                        {
                            targetedDoctor?.membership.map(eachMembership => <p className='font-medium'>{eachMembership}</p>)
                        }
                    </div>

                    <div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-black mb-4 font-bold text-2xl'>Doctor Schedule</p>
                            {
                                targetedDoctor?.doctorSchedule.map(eachSchedule => <span className='border-b pb-3 flex justify-between items-center'>
                                    <p>{eachSchedule.day}</p>
                                    <span className='flex gap-2 items-center'>
                                        <p className='font-bold'>{eachSchedule.time}</p>
                                        <span className='text-lg'><CiClock2 /></span>
                                    </span>
                                </span>)
                            }
                        </div>
                    </div>
                </div>
                <div className='col-span-4 text-[#17449e]'>
                    <div className='border-b pb-8 flex flex-col gap-3'>
                        <p className='text- mb-4 font-bold text-2xl'>Biography</p>
                        <div className='flex flex-col gap-6'>
                            <p className='text-secondary'>{targetedDoctor?.biographyFirstPart}</p>

                            <span className='w-[80px] bg-primary h-[2px]'></span>

                            <p className='text-secondary'>{targetedDoctor?.biographySecondPart}</p>
                        </div>
                    </div>

                    <div className='border-b pb-12 flex flex-col gap-3'>
                        <p className='text- mb-4 font-bold text-2xl mt-12'>Education</p>
                        <div className='flex flex-col gap-8'>
                            <p className='text-secondary'>{targetedDoctor?.college}</p>
                            <span className='w-[50px] bg-primary h-[2px]'></span>
                            <p className='text-secondary'>{targetedDoctor?.varsity}</p>
                            <span className='w-[50px] bg-primary h-[2px]'></span>
                            <p className='text-secondary'>{targetedDoctor?.phd}</p>
                        </div>
                    </div>

                    <div className='border-b pb-12 flex flex-col gap-3'>
                        <p className='text- mb-4 font-bold text-2xl mt-12'>Research interests</p>
                        <p className='text-secondary'>{targetedDoctor?.researchInterest}</p>
                    </div>

                    <div className='border-b pb-12 flex flex-col gap-3'>
                        <p className='mb-4 font-bold text-2xl mt-12'>Awards and honours</p>
                        <div className='flex flex-col gap-8'>
                            {
                                targetedDoctor?.awardAndHonors.map(eachAward =>
                                    <>
                                        <p className='text-secondary'>{eachAward}</p>
                                        <span className='w-[50px] bg-primary h-[2px]'></span>
                                    </>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <p className='mb-4 font-bold text-2xl mt-12'>My Skills</p>
                        <div className='flex flex-col gap-10 mt-10'>
                            {
                                targetedDoctor?.qualitySectionData.map(EachQualitySection => <QualitySectionCard key={EachQualitySection._id} EachQualitySection={EachQualitySection}></QualitySectionCard>)
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default DoctorProfileDetailsContainer;