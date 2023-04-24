import React from 'react';
import d1 from '../../assets/1.jpg';
import d2 from '../../assets/2.jpg';
import d3 from '../../assets/3.jpg';
import d4 from '../../assets/4.jpg';
import d5 from '../../assets/5.jpg';
import d6 from '../../assets/6.jpg';
import SingleDoctorCard from '../SingleDoctorCard/SingleDoctorCard';

const AllDoctors = ({ doctorData }) => {
    const doctorsData = [
        {
            _id: 1,
            img: d1,
            name: "Joshua Clark",
            dept: "Anesthesiologist"
        },
        {
            _id: 2,
            img: d2,
            name: "Steven Jacob",
            dept: "Anesthesiologist"
        },
        {
            _id: 3,
            img: d3,
            name: "Jhua Bunton",
            dept: "Allergist"
        },
        {
            _id: 4,
            img: d4,
            name: "Emil Hadena",
            dept: "Neurosurgeon"
        },
        {
            _id: 5,
            img: d5,
            name: "David James",
            dept: "Anesthesiologist"
        },
        {
            _id: 6,
            img: d6,
            name: "Thomas Paul",
            dept: "Allergist"
        }
    ]

    return (
        <div>
            <div className="w-5/6 mx-auto mt-16 flex items-center gap-2">
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

            <div className='w-5/6 mx-auto grid grid-cols-3 gap-6 mt-12'>
                {
                    doctorData?.map(doctor => <SingleDoctorCard key={doctor.id} doctor={doctor}></SingleDoctorCard>)
                }
            </div>
        </div >

    );
};

export default AllDoctors;