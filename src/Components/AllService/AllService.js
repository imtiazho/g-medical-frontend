import React from 'react';
import s1 from '../../assets/lungs.png';
import s2 from '../../assets/heart.png';
import s3 from '../../assets/orthopedic.png';
import s4 from '../../assets/general-sergery.png';
import s5 from '../../assets/pharmecy.png';
import s6 from '../../assets/sports-injury.png';
import s7 from '../../assets/fever-flu.png';
import s8 from '../../assets/dental.png';
import s9 from '../../assets/eye-care.png';
import { Link } from 'react-router-dom';

const AllService = () => {
    const data = [
        {
            _id: 1,
            serviceIcon: s1,
            serviceName: "Lung Diseases",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 2,
            serviceIcon: s2,
            serviceName: "Heart Diseases",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 3,
            serviceIcon: s3,
            serviceName: "Orthopaedic",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 4,
            serviceIcon: s4,
            serviceName: "General Surgery",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 5,
            serviceIcon: s5,
            serviceName: "Pharmacy",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 6,
            serviceIcon: s6,
            serviceName: "Sports Injury",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 7,
            serviceIcon: s7,
            serviceName: "Fever & Flu",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 8,
            serviceIcon: s8,
            serviceName: "Dental Service",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
        {
            _id: 9,
            serviceIcon: s9,
            serviceName: "Eye Care",
            shortDetails: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.",
        },
    ]
    return (
        <div className='w-5/6 mx-auto mt-20'>
            <div className='grid grid-cols-3 gap-16'>
                {
                    data.map(eachData =>
                        <div className='flex flex flex-col gap-6'>
                            <div className='w-1/2'>
                                <img src={eachData.serviceIcon} alt="" />
                            </div>
                            <h3 className='text-2xl text-black font-medium'>{eachData.serviceName}</h3>
                            <p className='text-secondary'>{eachData.shortDetails}</p>
                            <Link to='/service/1' className='text-primary text-lg font-medium'>Learn More </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllService;