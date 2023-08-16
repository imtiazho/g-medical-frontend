import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleDoctorCard = ({ doctor }) => {
    const [mousein, setMousein] = useState(false);
    const { _id, doctorName, designation, doctorImg } = doctor;


    return (
        <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(_id)} className="card rounded-md bg-base-100 shadow-lg">
            <figure className='relative'>
                <img className={`${mousein === _id && "scale-110"} duration-500 h-[300px] object-cover w-full`} src={doctorImg} alt="Pic" />
                {mousein === _id && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
            </figure>
            <div className="card-body text-center">
                <Link to={`/doctor-profile/${_id}`} className='text-primary text-2xl font-bold'>{doctorName}</Link>
                <p className='text-secondary'><small>{designation}</small></p>
            </div>
        </div>
    );
};

export default SingleDoctorCard;