import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ ServicesDataEach }) => {
    const [mousein, setMousein] = useState(false);
    const { _id, img, serviceName } = ServicesDataEach;

    return (
        <div onMouseLeave={() => setMousein(false)} onMouseOver={() => setMousein(_id)} className='relative overflow-hidden'>
            <span className=''>
                <img className={`shadow-xl ${mousein === _id && `scale-110`} rounded relative duration-500`} src={img} alt="" />
                {mousein === _id && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
            </span>
            {mousein === _id && <Link to={`/ser-details/${_id}`} className='absolute top-1/2 left-1/2 -translate-x-2/4 duration-500 text-3xl text-white font-medium text-center w-full'>{serviceName}</Link>}
        </div>
    );
};

export default ServiceCard;