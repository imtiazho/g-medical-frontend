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
    // const allDoctorData = [
    //     {
    //         _id: "1",
    //         doctorImg: doctorpic1,
    //         doctorName: "Jousha Clark",
    //         designation: "Anesthesiologist",
    //         facebookLink: "https://www.facebook.com/imtiaz.h.z/",
    //         profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
    //         gender: "male",
    //         languagePrefereance: "English, French",
    //         phoneNumber: "2352-7657-45",
    //         doctorEmail: "Joshua@medizhos.co",
    //         doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
    //         specility: "Respiratory medicine (lung)",
    //         condition: "Cystic fibrosis (children)",
    //         membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
    //         doctorSchedule: [
    //             {
    //                 day: "Monday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //         ],
    //         biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
    //         biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
    //         college: "Royal College of Physicians; MRCP (UK) 2000",
    //         varsity: "BSc degree in Neurosciences (1994) at University College London",
    //         phd: "PHD Imperial College London School of Medicine in 2004",
    //         researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
    //         awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
    //         qualitySectionData: [
    //             {
    //                 _id: 1,
    //                 NameOfservice: "CARDIOLOGY",
    //                 qualityOfservice: "100",
    //             },
    //             {
    //                 _id: 2,
    //                 NameOfservice: "HEART ASSESSMENT",
    //                 qualityOfservice: "90",
    //             },
    //             {
    //                 _id: 3,
    //                 NameOfservice: "HEART SURGERY",
    //                 qualityOfservice: "80",
    //             },
    //             {
    //                 _id: 4,
    //                 NameOfservice: "REHABILITATION AND THERAPIES",
    //                 qualityOfservice: "95",
    //             }
    //         ]
    //     },
    //     {
    //         _id: "2",
    //         doctorImg: doctorpic2,
    //         doctorName: "Steven Jacob",
    //         designation: "Anesthesiologist",
    //         facebookLink: "https://www.facebook.com/imtiaz.h.z/",
    //         profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
    //         gender: "male",
    //         languagePrefereance: "English, French",
    //         phoneNumber: "2352-7657-45",
    //         doctorEmail: "Joshua@medizhos.co",
    //         doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
    //         specility: "Respiratory medicine (lung)",
    //         condition: "Cystic fibrosis (children)",
    //         membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
    //         doctorSchedule: [
    //             {
    //                 day: "Monday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //         ],
    //         biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
    //         biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
    //         college: "Royal College of Physicians; MRCP (UK) 2000",
    //         varsity: "BSc degree in Neurosciences (1994) at University College London",
    //         phd: "PHD Imperial College London School of Medicine in 2004",
    //         researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
    //         awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
    //         qualitySectionData: [
    //             {
    //                 _id: 1,
    //                 NameOfservice: "CARDIOLOGY",
    //                 qualityOfservice: "100",
    //             },
    //             {
    //                 _id: 2,
    //                 NameOfservice: "HEART ASSESSMENT",
    //                 qualityOfservice: "90",
    //             },
    //             {
    //                 _id: 3,
    //                 NameOfservice: "HEART SURGERY",
    //                 qualityOfservice: "80",
    //             },
    //             {
    //                 _id: 4,
    //                 NameOfservice: "REHABILITATION AND THERAPIES",
    //                 qualityOfservice: "95",
    //             }
    //         ]
    //     },
    //     {
    //         _id: "3",
    //         doctorImg: doctorpic3,
    //         doctorName: "Jhua Bunton",
    //         designation: "Allergist",
    //         facebookLink: "https://www.facebook.com/imtiaz.h.z/",
    //         profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
    //         gender: "male",
    //         languagePrefereance: "English, French",
    //         phoneNumber: "2352-7657-45",
    //         doctorEmail: "Joshua@medizhos.co",
    //         doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
    //         specility: "Respiratory medicine (lung)",
    //         condition: "Cystic fibrosis (children)",
    //         membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
    //         doctorSchedule: [
    //             {
    //                 day: "Monday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //         ],
    //         biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
    //         biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
    //         college: "Royal College of Physicians; MRCP (UK) 2000",
    //         varsity: "BSc degree in Neurosciences (1994) at University College London",
    //         phd: "PHD Imperial College London School of Medicine in 2004",
    //         researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
    //         awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
    //         qualitySectionData: [
    //             {
    //                 _id: 1,
    //                 NameOfservice: "CARDIOLOGY",
    //                 qualityOfservice: "100",
    //             },
    //             {
    //                 _id: 2,
    //                 NameOfservice: "HEART ASSESSMENT",
    //                 qualityOfservice: "90",
    //             },
    //             {
    //                 _id: 3,
    //                 NameOfservice: "HEART SURGERY",
    //                 qualityOfservice: "80",
    //             },
    //             {
    //                 _id: 4,
    //                 NameOfservice: "REHABILITATION AND THERAPIES",
    //                 qualityOfservice: "95",
    //             }
    //         ]
    //     },
    //     {
    //         _id: "4",
    //         doctorImg: doctorpic4,
    //         doctorName: "Emil Hadena",
    //         designation: "Neurosurgeon",
    //         facebookLink: "https://www.facebook.com/imtiaz.h.z/",
    //         profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
    //         gender: "male",
    //         languagePrefereance: "English, French",
    //         phoneNumber: "2352-7657-45",
    //         doctorEmail: "Joshua@medizhos.co",
    //         doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
    //         specility: "Respiratory medicine (lung)",
    //         condition: "Cystic fibrosis (children)",
    //         membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
    //         doctorSchedule: [
    //             {
    //                 day: "Monday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //         ],
    //         biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
    //         biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
    //         college: "Royal College of Physicians; MRCP (UK) 2000",
    //         varsity: "BSc degree in Neurosciences (1994) at University College London",
    //         phd: "PHD Imperial College London School of Medicine in 2004",
    //         researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
    //         awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
    //         qualitySectionData: [
    //             {
    //                 _id: 1,
    //                 NameOfservice: "CARDIOLOGY",
    //                 qualityOfservice: "100",
    //             },
    //             {
    //                 _id: 2,
    //                 NameOfservice: "HEART ASSESSMENT",
    //                 qualityOfservice: "90",
    //             },
    //             {
    //                 _id: 3,
    //                 NameOfservice: "HEART SURGERY",
    //                 qualityOfservice: "80",
    //             },
    //             {
    //                 _id: 4,
    //                 NameOfservice: "REHABILITATION AND THERAPIES",
    //                 qualityOfservice: "95",
    //             }
    //         ]
    //     },
    //     {
    //         _id: "5",
    //         doctorImg: doctorpic5,
    //         doctorName: "David James",
    //         designation: "Anesthesiologist",
    //         facebookLink: "https://www.facebook.com/imtiaz.h.z/",
    //         profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
    //         gender: "male",
    //         languagePrefereance: "English, French",
    //         phoneNumber: "2352-7657-45",
    //         doctorEmail: "Joshua@medizhos.co",
    //         doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
    //         specility: "Respiratory medicine (lung)",
    //         condition: "Cystic fibrosis (children)",
    //         membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
    //         doctorSchedule: [
    //             {
    //                 day: "Monday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //         ],
    //         biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
    //         biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
    //         college: "Royal College of Physicians; MRCP (UK) 2000",
    //         varsity: "BSc degree in Neurosciences (1994) at University College London",
    //         phd: "PHD Imperial College London School of Medicine in 2004",
    //         researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
    //         awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
    //         qualitySectionData: [
    //             {
    //                 _id: 1,
    //                 NameOfservice: "CARDIOLOGY",
    //                 qualityOfservice: "100",
    //             },
    //             {
    //                 _id: 2,
    //                 NameOfservice: "HEART ASSESSMENT",
    //                 qualityOfservice: "90",
    //             },
    //             {
    //                 _id: 3,
    //                 NameOfservice: "HEART SURGERY",
    //                 qualityOfservice: "80",
    //             },
    //             {
    //                 _id: 4,
    //                 NameOfservice: "REHABILITATION AND THERAPIES",
    //                 qualityOfservice: "95",
    //             }
    //         ]
    //     },
    //     {
    //         _id: "6",
    //         doctorImg: doctorpic6,
    //         doctorName: "Thomas Paul",
    //         designation: "Anesthesiologist",
    //         facebookLink: "https://www.facebook.com/imtiaz.h.z/",
    //         profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
    //         gender: "male",
    //         languagePrefereance: "English, French",
    //         phoneNumber: "2352-7657-45",
    //         doctorEmail: "Joshua@medizhos.co",
    //         doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
    //         specility: "Respiratory medicine (lung)",
    //         condition: "Cystic fibrosis (children)",
    //         membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
    //         doctorSchedule: [
    //             {
    //                 day: "Monday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "01:00 PM - 05:00 PM"
    //             },
    //         ],
    //         biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
    //         biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
    //         college: "Royal College of Physicians; MRCP (UK) 2000",
    //         varsity: "BSc degree in Neurosciences (1994) at University College London",
    //         phd: "PHD Imperial College London School of Medicine in 2004",
    //         researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
    //         awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
    //         qualitySectionData: [
    //             {
    //                 _id: 1,
    //                 NameOfservice: "CARDIOLOGY",
    //                 qualityOfservice: "100",
    //             },
    //             {
    //                 _id: 2,
    //                 NameOfservice: "HEART ASSESSMENT",
    //                 qualityOfservice: "90",
    //             },
    //             {
    //                 _id: 3,
    //                 NameOfservice: "HEART SURGERY",
    //                 qualityOfservice: "80",
    //             },
    //             {
    //                 _id: 4,
    //                 NameOfservice: "REHABILITATION AND THERAPIES",
    //                 qualityOfservice: "95",
    //             }
    //         ]
    //     },
    // ]

    // const targetedDoctor? = allDoctorData.find(doctor => doctor._id === doctorId);

    return (
        <div>
            <div className='bg-[#F8F8F8]'>
                <div className='w-5/6 mx-auto py-16 grid grid-cols-4 gap-20'>
                    <div className='w-[300px] w-[300px] rounded-full overflow-hidden'>
                        <img src={targetedDoctor?.doctorImg} alt="" />
                    </div>
                    <div className='col-span-3 mt-7 flex flex-col gap-4'>
                        <p className='tracking-widest text-secondary font-bold'>{targetedDoctor?.designation}</p>
                        <h1 className='text-5xl mb-5 font-bold text-black'>{targetedDoctor?.doctorName}</h1>
                        <div className='mb-5 flex items-center gap-4 text-secondary'>
                            <span className='text-lg'><FaFacebookF /></span>
                            <span className='text-lg'><FaLinkedinIn /></span>
                            <span className='text-lg'><FaPinterestP /></span>
                            <span className='text-lg'><BsInstagram /></span>
                        </div>
                        <p className='text-secondary w-5/6'>{targetedDoctor?.profileIntro}</p>
                    </div>
                </div>
            </div>

            <div className='w-5/6 mx-auto mt-20 grid grid-cols-6 gap-12'>
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