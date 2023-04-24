import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const HealthProfessional = ({ doctorData }) => {
    // const data = [
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
    //                 time: "09:00 - 14:00"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "13:00 - 17:00"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "10:00 - 13:00"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "09:00 - 14:00"
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
    //                 time: "09:00 - 14:00"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "13:00 - 17:00"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "10:00 - 13:00"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "09:00 - 14:00"
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
    //                 time: "09:00 - 14:00"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "13:00 - 17:00"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "10:00 - 13:00"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "09:00 - 14:00"
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
    //                 time: "09:00 - 14:00"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "13:00 - 17:00"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "10:00 - 13:00"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "09:00 - 14:00"
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
    //                 time: "09:00 - 14:00"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "13:00 - 17:00"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "10:00 - 13:00"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "09:00 - 14:00"
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
    //                 time: "09:00 - 14:00"
    //             },
    //             {
    //                 day: "Tuesday",
    //                 time: "13:00 - 17:00"
    //             },
    //             {
    //                 day: "Thursday",
    //                 time: "10:00 - 13:00"
    //             },
    //             {
    //                 day: "Saturday",
    //                 time: "09:00 - 14:00"
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
    return (
        <div className='w-5/6 mx-auto xl:mt-2 lg:mt-4 md:mt-20'>
            <h1 className='text-center xl:text-4xl lg:text-4xl md:text-3xl text-3xl font-medium text-black xl:mb-16 lg:mb-16 md:mb-16 sm:mb-16 mb-10 mt-8'>Meet Our Health Professional</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    doctorData?.map(doctor =>
                        <SwiperSlide className='text-black text-center rounded overflow-hidden'>
                            <img className='mb-2 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6' src={doctor?.doctorImg} alt="" />

                            <div className='flex flex-col gap-0'>
                                <Link to={`/doctor-profile/${doctor?._id}`} className='xl:text-xl lg:text-xl md:text-xl md:text-xl sm:text-xl text-md text-primary font-bold'>{doctor?.doctorName}</Link>
                                <p className='text-xs mt-2'>{doctor?.department}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default HealthProfessional;