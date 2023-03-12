import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaRegComment, FaRegUser } from 'react-icons/fa';
import { RxEnvelopeOpen } from 'react-icons/rx';
import { TbLocation } from 'react-icons/tb';
import { CiClock2 } from 'react-icons/ci';
import QualitySectionCard from '../QualitySectionCard/QualitySectionCard';
import { useParams } from 'react-router-dom';


const DoctorProfileDetailsContainer = () => {
    const { doctorId } = useParams()

    const QualitySectionData = [
        {
            _id: 1,
            NameOfservice: "Medical Private",
            qualityOfservice: "90",
        },
        {
            _id: 2,
            NameOfservice: "Family Doctor",
            qualityOfservice: "70",
        },
        {
            _id: 3,
            NameOfservice: "Mental Health",
            qualityOfservice: "80",
        },
        {
            _id: 4,
            NameOfservice: "Cover Abroad",
            qualityOfservice: "95",
        }
    ]

    return (
        <div className='w-5/6 mx-auto mt-20 grid grid-cols-6 gap-12'>
            <div className='col-span-2 flex flex-col gap-14 text-[#17449e]'>
                <div className='flex flex-col gap-6'>
                    <div className='flex text-secondary items-center gap-4'>
                        <span className='text-xl'><FaRegUser /></span>
                        <span>male</span>
                    </div>
                    <div className='flex text-secondary items-center gap-4'>
                        <span className='text-xl'><FaRegComment /></span>
                        <span>English, French</span>
                    </div>
                    <div className='flex text-secondary items-center gap-4'>
                        <span className='text-xl'><BsTelephone /></span>
                        <span>2352-7657-45</span>
                    </div>
                    <div className='flex text-secondary items-center gap-4'>
                        <span className='text-xl'><RxEnvelopeOpen /></span>
                        <span>Joshua@medizhos.co</span>
                    </div>
                    <div className='flex text-secondary items-center gap-4'>
                        <span className='text-xl'><TbLocation /></span>
                        <span>Mediz 2nd building EBEX St. Walton New York</span>
                    </div>
                </div>

                <button className="btn btn-primary text-white">Warning</button>

                <div>
                    <div className='border-b pb-8 mb-8'>
                        <p className='text-black mb-4 font-bold text-2xl'>Specialty</p>
                        <p className='text-secondary'>Respiratory medicine (lung)</p>
                    </div>

                    <div className='border-b pb-8'>
                        <p className='text-black mb-4 font-bold text-2xl'>Specialty</p>
                        <p className='text-secondary'>Respiratory medicine (lung)</p>
                    </div>
                </div>

                <div className='border-b pb-8 flex flex-col gap-3'>
                    <p className='text-black mb-4 font-bold text-2xl'>Membership</p>
                    <p className='font-medium'>British Cardiovascular Society</p>
                    <p className='font-medium'>British Society of Cardiovascular Magnetic</p>
                    <p className='font-medium'>European Society of Cardiology</p>
                    <p className='font-medium'>Fellow Royal Society of Medicine</p>
                </div>

                <div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-black mb-4 font-bold text-2xl'>Doctor Schedule</p>
                        <span className='border-b pb-3 flex justify-between items-center'>
                            <p>Monday</p>
                            <span className='flex gap-2 items-center'>
                                <p className='font-bold'>09:00 - 14:00</p>
                                <span className='text-lg'><CiClock2 /></span>
                            </span>
                        </span>
                        <span className='border-b pb-3 flex justify-between items-center'>
                            <p>Tuesday</p>
                            <span className='flex gap-2 items-center'>
                                <p className='font-bold'>13:00 - 17:00</p>
                                <span className='text-lg'><CiClock2 /></span>
                            </span>
                        </span>
                        <span className='border-b pb-3 flex justify-between items-center'>
                            <p>Thursday</p>
                            <span className='flex gap-2 items-center'>
                                <p className='font-bold'>10:00 - 13:00</p>
                                <span className='text-lg'><CiClock2 /></span>
                            </span>
                        </span>
                        <span className='border-b pb-3 flex justify-between items-center'>
                            <p>Saturday</p>
                            <span className='flex gap-2 items-center'>
                                <p className='font-bold'>09:00 - 14:00</p>
                                <span className='text-lg'><CiClock2 /></span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-span-4 text-[#17449e]'>
                <div className='border-b pb-8 flex flex-col gap-3'>
                    <p className='text- mb-4 font-bold text-2xl'>Biography</p>
                    <div className='flex flex-col gap-6'>
                        <p className='text-secondary'>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.</p>

                        <span className='w-[80px] bg-primary h-[2px]'></span>

                        <p className='text-secondary'>He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.</p>
                    </div>
                </div>

                <div className='border-b pb-12 flex flex-col gap-3'>
                    <p className='text- mb-4 font-bold text-2xl mt-12'>Education</p>
                    <div className='flex flex-col gap-8'>
                        <p className='text-secondary'>BSc degree in Neurosciences (1994) at University College London</p>
                        <span className='w-[50px] bg-primary h-[2px]'></span>
                        <p className='text-secondary'>Royal College of Physicians; MRCP (UK) 2000</p>
                        <span className='w-[50px] bg-primary h-[2px]'></span>
                        <p className='text-secondary'>PHD Imperial College London School of Medicine in 2004</p>
                    </div>
                </div>

                <div className='border-b pb-12 flex flex-col gap-3'>
                    <p className='text- mb-4 font-bold text-2xl mt-12'>Research interests</p>
                    <p className='text-secondary'>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation</p>
                </div>

                <div className='border-b pb-12 flex flex-col gap-3'>
                    <p className='mb-4 font-bold text-2xl mt-12'>Awards and honours</p>
                    <div className='flex flex-col gap-8'>
                        <p className='text-secondary'>1988 British Thoracic Society Fisons Travel Fellowship</p>
                        <span className='w-[50px] bg-primary h-[2px]'></span>
                        <p className='text-secondary'>1991 British Medical Association HC Roscoe Fellowship</p>
                        <span className='w-[50px] bg-primary h-[2px]'></span>
                        <p className='text-secondary'>1997 Royal College of Physicians Graham Bull Prize in Clinical Science</p>
                        <span className='w-[50px] bg-primary h-[2px]'></span>
                        <p className='text-secondary'>2004 North American CF Conference Plenary Lecturer (first non-American)</p>
                        <span className='w-[50px] bg-primary h-[2px]'></span>
                        <p className='text-secondary'>2005 CF Trust John Panchaud Medal</p>
                    </div>
                </div>

                <div>
                    <p className='mb-4 font-bold text-2xl mt-12'>My Skills</p>
                    <div className='flex flex-col gap-10 mt-10'>
                        {
                            QualitySectionData.map(EachQualitySection => <QualitySectionCard key={EachQualitySection._id} EachQualitySection={EachQualitySection}></QualitySectionCard>)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DoctorProfileDetailsContainer;