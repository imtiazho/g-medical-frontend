import React from 'react';
import QualitySectionCard from '../QualitySectionCard/QualitySectionCard';

const QualitySection = () => {
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
        <div className='mt-24 bg-[#F8FAFF] py-24'>
            <div className='w-[90%] lg:w-5/6 mx-auto grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:gap-6 lg:gap-6 md:gap-16 gap-16 sm:gap-16 items-center'>
                <div className='md:text-center xl:text-start lg:text-start center:text-center text-center'>
                    <h1 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-black font-[600] xl:mb-8 lg:mb-8 md:mb-8 sm: mb-6'>We make it faster, easier, and <br /> more enjoyable to get care</h1>
                    <p className='text-secondary w-11/12 text-lg'>We’ve positioned our beautiful offices near where you live, work, and travel. You can schedule same- or next-day appointments that start on time. Our appointments are longer, and you’ll spend the whole time with an exceptional provider who really listens.</p>
                </div>
                <div className='lg:pl-8 flex flex-col gap-10'>
                    {
                        QualitySectionData.map(EachQualitySection => <QualitySectionCard key={EachQualitySection._id} EachQualitySection={EachQualitySection}></QualitySectionCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QualitySection;