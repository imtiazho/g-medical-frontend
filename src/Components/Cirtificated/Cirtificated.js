import React from 'react';
import cirtificate1 from '../../assets/cirtificate-1.png';
import cirtificate2 from '../../assets/cirtificate-2.png';
import cirtificate3 from '../../assets/cirtificate-3.png';
import cirtificate4 from '../../assets/cirtificate-4.png';
import cirtificate5 from '../../assets/cirtificate-5.png';

const Cirtificated = () => {
    return (
        <div className='mt-[26rem] mx-auto w-5/6'>
            <h2 className='text-center text-primary text-4xl font-bold'>Certificates & Standards</h2>

            <span className='grid grid-cols-5 py-14'>
                <img src={cirtificate1} alt="" />
                <img src={cirtificate2} alt="" />
                <img src={cirtificate3} alt="" />
                <img src={cirtificate4} alt="" />
                <img src={cirtificate5} alt="" />
            </span>
        </div>
    );
};

export default Cirtificated;