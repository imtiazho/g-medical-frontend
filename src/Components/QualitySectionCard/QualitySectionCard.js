import React from 'react';

const QualitySectionCard = ({ EachQualitySection }) => {
    const { _id, NameOfservice, qualityOfservice } = EachQualitySection;

    return (
        <div className='w-full'>
            <span className='flex justify-between mb-2.5 text-secondary'>
                <p className='font-medium uppercase'>{NameOfservice}</p>
                <p>{qualityOfservice}%</p>
            </span>

            <div className='w-full h-1.5 bg-[#DDDDDD] rounded-lg relative'>
                {/* <span className='h-full w-[90%] bg-[#42B9B1] absolute rounded-lg'></span> */}
                <span style={{ width: `${qualityOfservice}%` }} className={`h-full bg-[#42B9B1] absolute rounded-lg`}></span>
            </div>
        </div>
    );
};

export default QualitySectionCard;