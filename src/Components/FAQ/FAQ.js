import React from 'react';
import FAQPicture from '../../assets/FAQ.jpg';

const FAQ = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div style={{ background: `url(${FAQPicture})`, backgroundPosition: "center", backgroundSize: "cover" }} className='h-[650px] hidden lg:block'></div>
            <div className='lg:p-20 p-10'>
                <h1 className='lg:text-4xl text-3xl font-medium text-black mb-6'>Frequently Asked Questions</h1>

                <div className='text-secondary'>
                    <div tabIndex={0} className="collapse collapse-plus border-b-2 border- bg-base-100">
                        <div className="collapse-title text-primary text-xl font-bold">
                            How much will my hospital stay cost?
                        </div>
                        <div className="collapse-content">
                            <div><p className='hidden'>{0}</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmar ksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows</p>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-plus border-b-2 border- bg-base-100">
                        <div className="collapse-title text-primary text-xl font-bold">
                            What if I have difficulty paying for my expenses?
                        </div>
                        <div className="collapse-content">
                            <div><p className='hidden'>{1}</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmar ksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</p>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse collapse-plus border-b-2 border- bg-base-100">
                        <div className="collapse-title text-primary text-xl font-bold">
                            What happens to my admission?
                        </div>
                        <div className="collapse-content">
                            <div><p className='hidden'>{2}</p>
                                <p className='mb-8 text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmar ksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</p>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={3} className="collapse collapse-plus border-b-2 border- bg-base-100">
                        <div className="collapse-title text-primary text-xl font-bold">
                            How do I use my Medisave to pay the hospital bill?
                        </div>
                        <div className="collapse-content">
                            <div><p className='hidden'>{3}</p>
                                <p className='mb-8 text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmar ksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;