import React from 'react';
import d1 from '../../assets/1.jpg';
import d2 from '../../assets/2.jpg';
import d3 from '../../assets/3.jpg';
import d4 from '../../assets/4.jpg';
import d5 from '../../assets/5.jpg';
import d6 from '../../assets/6.jpg';
import SingleDoctorCard from '../SingleDoctorCard/SingleDoctorCard';

const AllDoctors = ({ data }) => {

    return (
        <div>
            <div className="w-5/6 mx-auto lg:mt-16 mt-9 flex items-center gap-2">
                <p>Filter By</p>
                <select className="border-b-2 border-primary pb-2 text-md font-medium text-primary outline-none">
                    <option selected>All</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>
            </div>

            <div className='w-[90%] lgw-5/6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-12 mt-8'>
                {
                    data?.map(doctor => <SingleDoctorCard key={doctor.id} doctor={doctor}></SingleDoctorCard>)
                }
            </div>
        </div >

    );
};

export default AllDoctors;