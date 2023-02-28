import React from 'react';
import QAPic from '../../assets/Question.png';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const QuestionAndAns = () => {
    return (
        <div className='w-5/6 mx-auto xl:mt-24 lg:mt-24 md:mt-18 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-20 items-center'>
            <div className='xl:p-16 lg:p-8 md:p-24'>
                <img src={QAPic} alt="" />
            </div>
            <div>
                <p className='text-accent text-xl font-medium text-center'>We’ll help you manage a range of conditions</p>
                <h1 className='text-black xl:text-4xl lg:text-4xl sm:text-3xl text-3xl md:text-4xl font-bold mt-4 text-center'>We’ll connect you to world-class specialists</h1>

                <div className='mt-8 text-secondary'>
                    <div tabIndex={0} className="collapse collapse-plus border-b-2 border- bg-base-100">
                        <div className="collapse-title text-xl font-bold">
                            Wellness and prevention
                        </div>
                        <div className="collapse-content">
                            <div><p className='hidden'>{0}</p>
                                <p className='mb-8 text-lg'>We’ll help you get healthy and stay that way with state-of-the art screening, disease prevention, and lifestyle advice.</p>

                                <div>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Sports medicine and exercise counseling
                                        </span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>Diet and nutrition counseling</span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Contraception and family planning
                                        </span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Cardiovascular disease screening
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-plus border-b-2 border- bg-base-100">
                        <div className="collapse-title text-xl font-bold">
                            Everyday care
                        </div>
                        <div className="collapse-content">
                            <div><p className='hidden'>{1}</p>
                                <p className='mb-8 text-lg'>We’ll help you get healthy and stay that way with state-of-the art screening, disease prevention, and lifestyle advice.</p>

                                <div>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Sports medicine and exercise counseling
                                        </span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>Diet and nutrition counseling</span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Contraception and family planning
                                        </span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Cardiovascular disease screening
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse collapse-plus border-b-2 border- bg-base-100">
                        <div className="collapse-title text-xl font-bold">
                            Chronic conditions
                        </div>
                        <div className="collapse-content">
                            <div><p className='hidden'>{2}</p>
                                <p className='mb-8 text-lg'>We’ll help you get healthy and stay that way with state-of-the art screening, disease prevention, and lifestyle advice.</p>

                                <div>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Sports medicine and exercise counseling
                                        </span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>Diet and nutrition counseling</span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Contraception and family planning
                                        </span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <span className='text-accent'><AiOutlineCheckCircle /></span>
                                        <span>
                                            Cardiovascular disease screening
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAns;