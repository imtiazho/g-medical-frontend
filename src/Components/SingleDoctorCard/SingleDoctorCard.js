import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleDoctorCard = ({ doctor }) => {
    const [mousein, setMousein] = useState(false);
    const { _id, doctorName, department, doctorImg } = doctor;


    return (
        <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(_id)} className="card w-96 bg-base-100 shadow-xl">
            <figure className='relative'>
                <img className={`${mousein === _id && "scale-110"} duration-500`} src={doctorImg} alt="Pic" />
                {mousein === _id && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
            </figure>
            <div className="card-body text-center">
                <Link to={`/doctor-profile/${_id}`} className='text-primary text-2xl font-bold'>{doctorName}</Link>
                <p className='text-secondary'><small>{department}</small></p>
            </div>
        </div>
    );
};

export default SingleDoctorCard;