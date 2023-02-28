import React from 'react';
import d1 from '../../assets/1.jpg';
import SingleDoctorCard from '../SingleDoctorCard/SingleDoctorCard';

const AllDoctors = () => {
    const doctorsData = [
        {
            _id: 1,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 2,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 3,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 4,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 5,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 6,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 7,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 8,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 9,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
    ]

    return (
        <div>

            <div className="form-control w-5/6 mx-auto mt-8">
                <label className="label">
                    <span className="label-text text-black">What is your doctor name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            </div>

            <div className='w-5/6 mx-auto grid grid-cols-3 gap-6 mt-16'>
                {
                    doctorsData.map(doctor => <SingleDoctorCard key={doctor.id} doctor={doctor}></SingleDoctorCard>)
                }
                {/* <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(1)} className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img className={`${mousein === 1 && "scale-110"} duration-500`} src={d1} alt="Pic" />
                        {mousein === 1 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div> */}

                {/* <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='relative'>
                        <img src={d1} alt="Pic" />
                        <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>
                    </figure>
                    <div className="card-body text-center">
                        <h2 className='text-primary text-2xl font-bold'>Joshua Clark</h2>
                        <p className='text-secondary'><small>Anesthesiologist</small></p>
                    </div>
                </div> */}
            </div>
        </div >

    );
};

export default AllDoctors;