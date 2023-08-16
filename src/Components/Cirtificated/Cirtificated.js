import React from 'react';
import cirtificate1 from '../../assets/cirtificate-1.png';
import cirtificate2 from '../../assets/cirtificate-2.png';
import cirtificate3 from '../../assets/cirtificate-3.png';
import cirtificate4 from '../../assets/cirtificate-4.png';
import cirtificate5 from '../../assets/cirtificate-5.png';

const Cirtificated = () => {
    const cirtificatePics = [
        {
            _id: 1,
            pic: cirtificate1
        },
        {
            _id: 2,
            pic: cirtificate2
        },
        {
            _id: 3,
            pic: cirtificate3
        },
        {
            _id: 4,
            pic: cirtificate4
        },
        {
            _id: 5,
            pic: cirtificate5
        }
    ]
    return (
        <div className='mt-[5rem] lg:mt-[22rem] xl:mt-[26rem] mx-auto w-[90%] lg:w-5/6'>
            <h2 className='text-center text-primary text-[25px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold'>Certificates & Standards</h2>

            <span className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-8 lg:py-14'>
                {
                    cirtificatePics.map(cirtificatePic => <img key={cirtificatePic._id} src={cirtificatePic.pic} alt="" />)
                }
            </span>
        </div>
    );
};

export default Cirtificated;