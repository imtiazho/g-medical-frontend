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
import doctorpic1 from '../../assets/1.jpg';
import doctorpic2 from '../../assets/2.jpg';
import doctorpic3 from '../../assets/3.jpg';
import doctorpic4 from '../../assets/4.jpg';
import doctorpic5 from '../../assets/5.jpg';
import doctorpic6 from '../../assets/6.jpg';
import { Link } from 'react-router-dom';


const Appointment = () => {
    const [openModal, setOpenModal] = useState(null);

    const data = [
        {
            _id: "1",
            doctorImg: doctorpic1,
            doctorName: "Jousha Clark",
            designation: "Anesthesiologist",
            facebookLink: "https://www.facebook.com/imtiaz.h.z/",
            profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
            gender: "male",
            languagePrefereance: "English, French",
            phoneNumber: "2352-7657-45",
            doctorEmail: "Joshua@medizhos.co",
            doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
            specility: "Respiratory medicine (lung)",
            condition: "Cystic fibrosis (children)",
            membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
            doctorSchedule: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ],
            biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
            biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
            college: "Royal College of Physicians; MRCP (UK) 2000",
            varsity: "BSc degree in Neurosciences (1994) at University College London",
            phd: "PHD Imperial College London School of Medicine in 2004",
            researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
            awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
            qualitySectionData: [
                {
                    _id: 1,
                    NameOfservice: "CARDIOLOGY",
                    qualityOfservice: "100",
                },
                {
                    _id: 2,
                    NameOfservice: "HEART ASSESSMENT",
                    qualityOfservice: "90",
                },
                {
                    _id: 3,
                    NameOfservice: "HEART SURGERY",
                    qualityOfservice: "80",
                },
                {
                    _id: 4,
                    NameOfservice: "REHABILITATION AND THERAPIES",
                    qualityOfservice: "95",
                }
            ],
            currentHospital: "MDS - Periodontology and Oral Implantology, BDS",
            star: "10",
            location: "Florida, USA",
            workRelatedPics: [appoFeature1, appoFeature2, appoFeature3, appoFeature4],
            navTag: ["Dental Fillings", "Whitening"],
            quality: "98",
            feedback: "17",
            budgetRange: "$300 - $1000"
        },
        {
            _id: "2",
            doctorImg: doctorpic2,
            doctorName: "Steven Jacob",
            designation: "Anesthesiologist",
            facebookLink: "https://www.facebook.com/imtiaz.h.z/",
            profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
            gender: "male",
            languagePrefereance: "English, French",
            phoneNumber: "2352-7657-45",
            doctorEmail: "Joshua@medizhos.co",
            doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
            specility: "Respiratory medicine (lung)",
            condition: "Cystic fibrosis (children)",
            membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
            doctorSchedule: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ],
            biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
            biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
            college: "Royal College of Physicians; MRCP (UK) 2000",
            varsity: "BSc degree in Neurosciences (1994) at University College London",
            phd: "PHD Imperial College London School of Medicine in 2004",
            researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
            awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
            qualitySectionData: [
                {
                    _id: 1,
                    NameOfservice: "CARDIOLOGY",
                    qualityOfservice: "100",
                },
                {
                    _id: 2,
                    NameOfservice: "HEART ASSESSMENT",
                    qualityOfservice: "90",
                },
                {
                    _id: 3,
                    NameOfservice: "HEART SURGERY",
                    qualityOfservice: "80",
                },
                {
                    _id: 4,
                    NameOfservice: "REHABILITATION AND THERAPIES",
                    qualityOfservice: "95",
                }
            ],
            currentHospital: "MDS - Periodontology and Oral Implantology, BDS",
            star: "10",
            location: "Florida, USA",
            workRelatedPics: [appoFeature1, appoFeature2, appoFeature3, appoFeature4],
            navTag: ["Dental Fillings", "Whitening"],
            quality: "98",
            feedback: "17",
            budgetRange: "$300 - $1000"
        },
        {
            _id: "3",
            doctorImg: doctorpic3,
            doctorName: "Jhua Bunton",
            designation: "Allergist",
            facebookLink: "https://www.facebook.com/imtiaz.h.z/",
            profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
            gender: "male",
            languagePrefereance: "English, French",
            phoneNumber: "2352-7657-45",
            doctorEmail: "Joshua@medizhos.co",
            doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
            specility: "Respiratory medicine (lung)",
            condition: "Cystic fibrosis (children)",
            membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
            doctorSchedule: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ],
            biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
            biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
            college: "Royal College of Physicians; MRCP (UK) 2000",
            varsity: "BSc degree in Neurosciences (1994) at University College London",
            phd: "PHD Imperial College London School of Medicine in 2004",
            researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
            awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
            qualitySectionData: [
                {
                    _id: 1,
                    NameOfservice: "CARDIOLOGY",
                    qualityOfservice: "100",
                },
                {
                    _id: 2,
                    NameOfservice: "HEART ASSESSMENT",
                    qualityOfservice: "90",
                },
                {
                    _id: 3,
                    NameOfservice: "HEART SURGERY",
                    qualityOfservice: "80",
                },
                {
                    _id: 4,
                    NameOfservice: "REHABILITATION AND THERAPIES",
                    qualityOfservice: "95",
                }
            ],
            currentHospital: "MDS - Periodontology and Oral Implantology, BDS",
            star: "10",
            location: "Florida, USA",
            workRelatedPics: [appoFeature1, appoFeature2, appoFeature3, appoFeature4],
            navTag: ["Dental Fillings", "Whitening"],
            quality: "98",
            feedback: "17",
            budgetRange: "$300 - $1000"
        },
        {
            _id: "4",
            doctorImg: doctorpic4,
            doctorName: "Emil Hadena",
            designation: "Neurosurgeon",
            facebookLink: "https://www.facebook.com/imtiaz.h.z/",
            profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
            gender: "male",
            languagePrefereance: "English, French",
            phoneNumber: "2352-7657-45",
            doctorEmail: "Joshua@medizhos.co",
            doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
            specility: "Respiratory medicine (lung)",
            condition: "Cystic fibrosis (children)",
            membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
            doctorSchedule: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ],
            biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
            biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
            college: "Royal College of Physicians; MRCP (UK) 2000",
            varsity: "BSc degree in Neurosciences (1994) at University College London",
            phd: "PHD Imperial College London School of Medicine in 2004",
            researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
            awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
            qualitySectionData: [
                {
                    _id: 1,
                    NameOfservice: "CARDIOLOGY",
                    qualityOfservice: "100",
                },
                {
                    _id: 2,
                    NameOfservice: "HEART ASSESSMENT",
                    qualityOfservice: "90",
                },
                {
                    _id: 3,
                    NameOfservice: "HEART SURGERY",
                    qualityOfservice: "80",
                },
                {
                    _id: 4,
                    NameOfservice: "REHABILITATION AND THERAPIES",
                    qualityOfservice: "95",
                }
            ],
            currentHospital: "MDS - Periodontology and Oral Implantology, BDS",
            star: "10",
            location: "Florida, USA",
            workRelatedPics: [appoFeature1, appoFeature2, appoFeature3, appoFeature4],
            navTag: ["Dental Fillings", "Whitening"],
            quality: "98",
            feedback: "17",
            budgetRange: "$300 - $1000"
        },
        {
            _id: "5",
            doctorImg: doctorpic5,
            doctorName: "David James",
            designation: "Anesthesiologist",
            facebookLink: "https://www.facebook.com/imtiaz.h.z/",
            profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
            gender: "male",
            languagePrefereance: "English, French",
            phoneNumber: "2352-7657-45",
            doctorEmail: "Joshua@medizhos.co",
            doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
            specility: "Respiratory medicine (lung)",
            condition: "Cystic fibrosis (children)",
            membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
            doctorSchedule: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ],
            biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
            biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
            college: "Royal College of Physicians; MRCP (UK) 2000",
            varsity: "BSc degree in Neurosciences (1994) at University College London",
            phd: "PHD Imperial College London School of Medicine in 2004",
            researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
            awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
            qualitySectionData: [
                {
                    _id: 1,
                    NameOfservice: "CARDIOLOGY",
                    qualityOfservice: "100",
                },
                {
                    _id: 2,
                    NameOfservice: "HEART ASSESSMENT",
                    qualityOfservice: "90",
                },
                {
                    _id: 3,
                    NameOfservice: "HEART SURGERY",
                    qualityOfservice: "80",
                },
                {
                    _id: 4,
                    NameOfservice: "REHABILITATION AND THERAPIES",
                    qualityOfservice: "95",
                }
            ],
            currentHospital: "MDS - Periodontology and Oral Implantology, BDS",
            star: "10",
            location: "Florida, USA",
            workRelatedPics: [appoFeature1, appoFeature2, appoFeature3, appoFeature4],
            navTag: ["Dental Fillings", "Whitening"],
            quality: "98",
            feedback: "17",
            budgetRange: "$300 - $1000"
        },
        {
            _id: "6",
            doctorImg: doctorpic6,
            doctorName: "Thomas Paul",
            designation: "Anesthesiologist",
            facebookLink: "https://www.facebook.com/imtiaz.h.z/",
            profileIntro: "Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.",
            gender: "male",
            languagePrefereance: "English, French",
            phoneNumber: "2352-7657-45",
            doctorEmail: "Joshua@medizhos.co",
            doctorAddress: "Mediz 2nd building EBEX St. Walton New York",
            specility: "Respiratory medicine (lung)",
            condition: "Cystic fibrosis (children)",
            membership: ["British Cardiovascular Society", "British Society of Cardiovascular Magnetic", "European Society of Cardiology", "Fellow Royal Society of Medicine"],
            doctorSchedule: [
                {
                    day: "Monday",
                    time: "09:00 - 14:00"
                },
                {
                    day: "Tuesday",
                    time: "13:00 - 17:00"
                },
                {
                    day: "Thursday",
                    time: "10:00 - 13:00"
                },
                {
                    day: "Saturday",
                    time: "09:00 - 14:00"
                },
            ],
            biographyFirstPart: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.",
            biographySecondPart: "He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.",
            college: "Royal College of Physicians; MRCP (UK) 2000",
            varsity: "BSc degree in Neurosciences (1994) at University College London",
            phd: "PHD Imperial College London School of Medicine in 2004",
            researchInterest: "Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, Washington. He also held positions with the Medical Research Council, NY Heart Foundation",
            awardAndHonors: ["1988 British Thoracic Society Fisons Travel Fellowship", "1991 British Medical Association HC Roscoe Fellowship", "1997 Royal College of Physicians Graham Bull Prize in Clinical Science", "2004 North American CF Conference Plenary Lecturer (first non-American)", "2005 CF Trust John Panchaud Medal"],
            qualitySectionData: [
                {
                    _id: 1,
                    NameOfservice: "CARDIOLOGY",
                    qualityOfservice: "100",
                },
                {
                    _id: 2,
                    NameOfservice: "HEART ASSESSMENT",
                    qualityOfservice: "90",
                },
                {
                    _id: 3,
                    NameOfservice: "HEART SURGERY",
                    qualityOfservice: "80",
                },
                {
                    _id: 4,
                    NameOfservice: "REHABILITATION AND THERAPIES",
                    qualityOfservice: "95",
                }
            ],
            currentHospital: "MDS - Periodontology and Oral Implantology, BDS",
            star: "10",
            location: "Florida, USA",
            workRelatedPics: [appoFeature1, appoFeature2, appoFeature3, appoFeature4],
            navTag: ["Dental Fillings", "Whitening"],
            quality: "98",
            feedback: "17",
            budgetRange: "$300 - $1000"
        },
    ]

    return (
        <div className='xl:w-5/6 w-[90%] mx-auto'>
            <div className='text-center mt-4 mb-8'>
                <h1 className='bg-primary py-2 rounded-lg text-white font-bold text-2xl'>Make an Appoinment</h1>
            </div>
            <div className='grid xl:grid-cols-7 grid-cols-1 gap-5 items-start'>
                <div className='text-black border rounded xl:col-span-2 flex flex-col gap-6'>
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

                <div className='text-secondary flex flex-col gap-4 xl:col-span-5'>
                    {
                        data.map(eachData => <div className='border flex-col md:flex-row rounded lg:items-start items-center flex justify-between p-6 gap-[2rem]'>
                            <div className='flex items-center md:items-start flex-col lg:flex-row gap-4'>
                                <div className='w-[180px] h-[180px]'>
                                    <img className='rounded' src={eachData?.doctorImg} alt="" />
                                </div>
                                <div className='flex items-center md:items-start flex-col gap-3'>
                                    <div className='flex flex-col items-center md:items-start'>
                                        <h1 className='text-black text-2xl font-bold mb-1'>{eachData?.doctorName}</h1>
                                        <p className='text-center'>{eachData.currentHospital}</p>
                                    </div>
                                    <div className='flex flex-col items-center md:items-start'>
                                        <div className='flex items-center gap-2 mb-2 text-accent text-[17px]'>
                                            <FaBriefcaseMedical className='text-lg' />
                                            <p>{eachData.designation}</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center text-lg text-primary'>
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />
                                            </div>
                                            <p>({eachData.star})</p>
                                        </div>
                                        <div className='flex items-center gap-2 mb-2 text-secondary text-[17px]'>
                                            <div><MdLocationPin /></div>
                                            <p className='text-sm'>{eachData?.location}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='flex gap-2  mb-4'>
                                            {
                                                eachData.workRelatedPics.map(eachImage => <img className='w-[40px] h-[40px] object-cover' src={eachImage} alt="" />)
                                            }
                                        </span>
                                        <span className='flex gap-3'>
                                            {
                                                eachData.navTag.map(eachtag => <p className='border border-primary py-1 text-sm px-2 rounded'>{eachtag}</p>)
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-2 items-center'>
                                        <span><AiOutlineLike className='text-lg' /></span>
                                        <p>{eachData?.quality}%</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><FaRegComment className='text-lg' /></span>
                                        <p>{eachData?.feedback} Feedback</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><MdLocationPin className='text-lg' /></span>
                                        <p>{eachData?.location}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span><FaMoneyBillAlt className='text-lg' /></span>
                                        <p>{eachData?.budgetRange}</p>
                                    </div>
                                </div>

                                <Link to={`/doctor-profile/${eachData?._id}`} className='btn btn-primary text-white w-[200px]'>View Profile</Link>
                                <label onClick={() => setOpenModal(1)} htmlFor="my-modal-5" className='btn btn-accent text-white w-[200px]'>Book Appoinment</label>
                            </div>
                            {openModal && <AppoinmentBookModal setOpenModal={setOpenModal} eachData={eachData}></AppoinmentBookModal>}
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Appointment;