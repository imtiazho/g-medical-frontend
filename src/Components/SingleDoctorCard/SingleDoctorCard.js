import React, { useState } from 'react';

const SingleDoctorCard = ({ doctor }) => {
    const [mousein, setMousein] = useState(false);
    const { _id, name, dept, img } = doctor;

    return (
        <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(_id)} className="card w-96 bg-base-100 shadow-xl">
            <figure className='relative'>
                <img className={`${mousein === _id && "scale-110"} duration-500`} src={img} alt="Pic" />
                {mousein === _id && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
            </figure>
            <div className="card-body text-center">
                <h2 className='text-primary text-2xl font-bold'>{name}</h2>
                <p className='text-secondary'><small>{dept}</small></p>
            </div>
        </div>
    );
};

export default SingleDoctorCard;