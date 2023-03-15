import React from 'react';
import { useParams } from 'react-router-dom';
import serviceBanner from '../../assets/service-banner.jpg';
import generalSergery from '../../assets/General-Surgery.jpg';
import deptIcon1 from '../../assets/department-icon-1.png';
import deptIcon2 from '../../assets/department-icon-2.png';
import deptIcon3 from '../../assets/department-icon-3.png';
import iconDepertment1 from '../../assets/icon-cl-dpment-1.png';
import iconDepertment2 from '../../assets/icon-cl-dpment-2.png';
import DepertmentPic from '../../assets/department-bg.jpg';
import HealthProfessional from '../HealthProfessional/HealthProfessional';
import { CiClock2 } from 'react-icons/ci';

const ServiceDetailsPage = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <div style={{ background: `url(${serviceBanner})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='w-5/6 mx-auto py-24'>
                    <h1 className='text-white font-bold text-5xl mb-4'>General Surgery</h1>
                    <p className='text-lg'>Detail about our service</p>
                </div>
            </div>

            <div className='w-5/6 mx-auto mt-20 grid grid-cols-7 gap-10'>
                <div className='col-span-5 text-secondary'>
                    <div className='grid grid-cols-6 gap-8 items-center'>
                        <div className='col-span-2'>
                            <img src={generalSergery} alt="" />
                        </div>
                        <div className='col-span-4 flex flex-col gap-6'>
                            <h1 className='text-black font-bold text-3xl'>About Allergy Department</h1>
                            <p className='leading-relaxed'>Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association</p>

                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>CF-related diabetes (monthly)</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>Gastrointestinal (monthly)</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>CF-related liver disease (monthly)</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='w-[15px] h-[15px] border border-primary rounded-full flex items-center justify-center'>
                                        <div className='w-[7px] h-[7px] bg-primary rounded-full'></div>
                                    </div>
                                    <p>Sweat testing (three times per month)</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-20 grid grid-cols-3 gap-10'>
                        <div className='items-center text-center flex flex-col'>
                            <div className='w-[150px] h-[150px] p-8'>
                                <img src={deptIcon1} alt="" />
                            </div>
                            <h2 className='text-xl text-primary font-bold mb-6'>Central Nervous System</h2>
                            <p className='text-[#9c9c9c}'>Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.</p>
                        </div>
                        <div className='items-center text-center flex flex-col'>
                            <div className='w-[150px] h-[150px] p-8'>
                                <img src={deptIcon2} alt="" />
                            </div>
                            <h2 className='text-xl text-primary font-bold mb-6'>Central Nervous System</h2>
                            <p className='text-[#9c9c9c}'>Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.</p>
                        </div>
                        <div className='items-center text-center flex flex-col'>
                            <div className='w-[150px] h-[150px] p-8'>
                                <img src={deptIcon3} alt="" />
                            </div>
                            <h2 className='text-xl text-primary font-bold mb-6'>Central Nervous System</h2>
                            <p className='text-[#9c9c9c}'>Open visitation with only two visitors in a room at any given time. No one under 12 years of age may.</p>
                        </div>
                    </div>

                    <div className='mt-20 flex flex-col gap-4'>
                        <div tabIndex={0} className="collapse collapse-plus rounded">
                            <div className="collapse-title text-primary text-xl font-bold bg-[#F3F3F3]">
                                For endocrine problems
                            </div>
                            <div className="collapse-content">
                                <div><p className='hidden'>{0}</p>
                                    <p className='pt-4 text-lg'><strong>Drug discovery and drug development are complex</strong> and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions.</p>
                                </div>
                            </div>
                        </div>
                        <div tabIndex={1} className="collapse collapse-plus rounded">
                            <div className="collapse-title text-primary text-xl font-bold bg-[#F3F3F3]">
                                For the digestive system
                            </div>
                            <div className="collapse-content">
                                <div><p className='hidden'>{1}</p>
                                    <p className='pt-4 text-lg'><strong>Drug discovery and drug development are complex</strong> and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions</p>
                                </div>
                            </div>
                        </div>
                        <div tabIndex={2} className="collapse collapse-plus rounded">
                            <div className="collapse-title text-primary text-xl font-bold bg-[#F3F3F3]">
                                For the ear, nose and oropharynx
                            </div>
                            <div className="collapse-content">
                                <div><p className='hidden'>{2}</p>
                                    <p className='pt-4 text-lg'><strong>Drug discovery and drug development are complex</strong> and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions</p>
                                </div>
                            </div>
                        </div>
                        <div tabIndex={3} className="collapse collapse-plus rounded">
                            <div className="collapse-title text-primary text-xl font-bold bg-[#F3F3F3]">
                                For the respiratory system
                            </div>
                            <div className="collapse-content">
                                <div><p className='hidden'>{3}</p>
                                    <p className='pt-4 text-lg'><strong>Drug discovery and drug development are complex</strong> and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines. Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16 flex flex-col gap-5 border-b-[3px] pb-8 border-[#17449e]'>
                        <h2 className='text-black text-3xl font-bold'>Chest CT Scan</h2>
                        <p className='text-[#17449e] text-xl'>Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society</p>
                        <p className='leading-relaxed'>One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum into the left side to be oxygenated, as theorized by Galen; however, the discovery of pulmonary circulation disproves this theory, which had previously been accepted since the 2nd century. Thirteenth century anatomist and physiologist Ibn Al-Nafis accurately theorized that there was no ‘direct’ passage between the two sides.</p>
                    </div>

                    <div className='mt-16 grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-6 items-start bg-[#F3F9FF] p-10 border'>
                            <div className='flex gap-4 items-center'>
                                <img src={iconDepertment1} alt="" />
                                <p className='text-xl text-primary font-bold'>Find Your Doctor</p>
                            </div>
                            <p className='text-[#a0bfe8] leading-relaxed text-[17px]'>Open visitation with only two visitors in a room at any given time. No one under 12 years of age may visit without permission.</p>
                            <button className='btn border-none hover:text-[#17449e] hover:bg-white bg-white text-[#17449e] rounded-full shadow-xl'>Learn More</button>
                        </div>

                        <div className='flex flex-col gap-6 items-start bg-[#F3F9FF] p-10 border'>
                            <div className='flex gap-4 items-center'>
                                <img src={iconDepertment2} alt="" />
                                <p className='text-xl text-primary font-bold'>Special Care Unit</p>
                            </div>
                            <p className='text-[#a0bfe8] leading-relaxed text-[17px]'>Open visitation with only two visitors in a room at any given time. No one under 12 years of age may visit without permission.</p>
                            <button className='btn border-none hover:text-white hover:bg-[#17449e] bg-[#17449e] text-white rounded-full shadow-xl'>Learn More</button>
                        </div>
                    </div>

                    <div className='mt-12 border-b-[3px] pb-12 border-[#17449e]'>
                        <h2 className='text-[#17449e] font-bold text-2xl mb-8'>Treatment Price List</h2>

                        <div className='grid grid-cols-2 gap-14'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c] text-[17px]'>Heart Cardioversion</p>
                                    <p className='font-bold text-secondary text-lg'>£1700.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Dupuytren's Fasciectomy</p>
                                    <p className='font-bold text-secondary text-lg'>£999.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Hip Resurfacing Surgery</p>
                                    <p className='font-bold text-secondary text-lg'>£3900.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Laparoscopy</p>
                                    <p className='font-bold text-secondary text-lg'>£2700.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Knee Arthroscopy</p>
                                    <p className='font-bold text-secondary text-lg'>£1700.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Local anaesthetic</p>
                                    <p className='font-bold text-secondary text-lg'>£2300.00</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Heart Cardioversion</p>
                                    <p className='font-bold text-secondary text-lg'>£1700.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Dupuytren's Fasciectomy</p>
                                    <p className='font-bold text-secondary text-lg'>£999.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Hip Resurfacing Surgery</p>
                                    <p className='font-bold text-secondary text-lg'>£3900.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Laparoscopy</p>
                                    <p className='font-bold text-secondary text-lg'>£2700.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Knee Arthroscopy</p>
                                    <p className='font-bold text-secondary text-lg'>£1700.00</p>
                                </div>
                                <div className='flex justify-between items-baseline gap-2 pb-2'>
                                    <p className='text-[#9c9c9c} text-[17px]'>Local anaesthetic</p>
                                    <p className='font-bold text-secondary text-lg'>£2300.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 flex flex-col gap-6'>
                        <h2 className='text-black font-medium text-3xl'>Make an appointment</h2>
                        <p className='text-[#17449e] text-xl'>We will send you a confirmation within 24 hours. <strong>Emergency?</strong> Call 1-2554-2356-33</p>
                        <p className='text-secondary text-[17px]'>Although pulmonary medicine only began to evolve as a medical specialty in the 1950s, William Welch and William Osler founded the ‘parent’ organization of the American Thoracic Society, the National Association.</p>

                        <form className='w-4/5 mt-10 flex flex-col gap-6'>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />
                            </div>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />
                            </div>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <select className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-secondary' >
                                    <option value="" key="">One</option>
                                    <option value="" key="">Two</option>
                                    <option value="" key="">Three</option>
                                    <option value="" key="">Four</option>
                                    <option value="" key="">Five</option>
                                </select>
                            </div>
                            <div className='flex justify-between gap-2'>
                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />

                                <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black' />
                            </div>
                            <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black resize-none'></textarea>
                            <input className='w-full bg-primary text-white p-[1rem] rounded-none cursor-pointer btn' type="submit" value='SUBMIT NOW' />
                        </form>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='text-primary flex flex-col'>
                        <h2 className='text-black mb-6 text-2xl font-bold'>General Surgery</h2>

                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Asthma and Allergy</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Cancer Services</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Cystic Fibrosis</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Endoscopy</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Colorectal</p>
                        </div>
                        <div className='border-b py-3 flex items-center gap-3'>
                            <div className='w-[2px] h-full bg-primary'></div>
                            <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>Hemorrhoids</p>
                        </div>
                    </div>

                    <div style={{ background: `url(${DepertmentPic})`, backgroundPosition: "center", backgroundSize: "cover" }} className='mt-12 rounded flex flex-col gap-4 px-10 py-14'>
                        <h1 className='text-white text-xl font-bold'>Department Address</h1>
                        <p className='text-[#c3c3ff]'>Box 3233 1810 Kings Way King Street, 5th Avenue, New York</p>
                    </div>

                    <div className='flex flex-col gap-3 mt-12 text-[#17449e]'>
                        <p className='text-black mb-4 font-bold text-2xl'>Department Hours</p>
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

                    <button className='btn btn-primary text-white rounded-none mt-10 btn-xl w-full'>Download PDF File</button>
                </div>
            </div>

            <div className='mt-24'>
                <HealthProfessional />
            </div>
        </div>
    );
};

export default ServiceDetailsPage;